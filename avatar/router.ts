// Tool router: turns a Tavus `conversation.tool_call` app message into a window.Barn call
// (site/barn.js) and builds the `conversation.tool_result` app message to send back.
// No DOM or Daily imports, so it runs in node tests as-is.

import type { Barn, BarnSearchFilters, RunRequest, StylistResult } from "./types";
import { isDepartmentQuestion, StylistRunError, type StyleOutfitFn } from "./style-outfit";

/** Tavus drops app messages over 4 KB silently, so results are trimmed below this. */
export const MAX_APP_MESSAGE_BYTES = 4096;
export const TRIM_THRESHOLD_BYTES = 3500;
/** Hard cap per conversation across the bag and every style_outfit budget (Sasha's prompt). */
export const DEFAULT_SPEND_LIMIT_USD = 10_000;
const SHORT_NAME_CHARS = 40;

// ---- Tavus message shapes ----

export interface ToolCallMessage {
  message_type: "conversation";
  event_type: "conversation.tool_call";
  conversation_id: string;
  /** Older examples put inference_id at the top level; newer ones omit it. */
  inference_id?: string;
  properties: {
    name: string;
    /** Tavus sends a JSON string; we also accept an object. */
    arguments: string | Record<string, unknown>;
    tool_call_id?: string;
    inference_id?: string;
  };
}

export interface ToolResultMessage {
  message_type: "conversation";
  event_type: "conversation.tool_result";
  conversation_id: string;
  properties: {
    tool_call_id: string;
    output: string | Record<string, unknown>;
    status: "success" | "error";
  };
}

/** Tavus "respond" interaction: the PAL replies to `text` as if it were a user turn. UNVERIFIED name. */
export interface RespondMessage {
  message_type: "conversation";
  event_type: "conversation.respond";
  conversation_id: string;
  properties: { text: string };
}

export type RouterLogEntry =
  | { dir: "in"; tool: string; tool_call_id: string; args: unknown }
  | {
      dir: "out";
      tool: string;
      tool_call_id: string;
      status: "success" | "error";
      bytes: number;
      ms: number;
      trimmed: string[];
      output: unknown;
    }
  | { dir: "info"; text: string };

export interface RouterOptions {
  /** window.Barn, or a getter (e.g. () => window.Barn) so it can load late. */
  bridge: Barn | (() => Barn | undefined);
  styleOutfit: StyleOutfitFn;
  /** Sent to the stylist as shopper_id (memory key). Default "demo-shopper" (pal/demo-shopper.json). */
  shopperId?: string;
  spendLimitUsd?: number;
  /** Safety net on top of the client's own timeout. */
  styleOutfitTimeoutMs?: number;
  /**
   * "await" (default): the tool_result waits for the styling run.
   * "background": reply at once, then push the looks as a conversation.respond message.
   * Fallback in case Tavus drops slow tool results (TEAM_PLAN risk table).
   */
  styleOutfitMode?: "await" | "background";
  trimThresholdBytes?: number;
  onLog?: (entry: RouterLogEntry) => void;
  /** Plain-text log; defaults to console.log. */
  logger?: (line: string) => void;
}

export function isToolCall(msg: unknown): msg is ToolCallMessage {
  const m = msg as ToolCallMessage | null;
  return (
    !!m &&
    typeof m === "object" &&
    m.event_type === "conversation.tool_call" &&
    !!m.properties &&
    typeof m.properties.name === "string"
  );
}

export function byteLength(value: unknown): number {
  return new TextEncoder().encode(typeof value === "string" ? value : JSON.stringify(value)).length;
}

// ---- argument validation ----

type ArgSpec = Record<string, { type: "string" | "number" | "boolean"; required?: boolean }>;
type Args = Record<string, string | number | boolean>;
type Validated = { ok: true; args: Args } | { ok: false; error: string };

function validate(raw: unknown, spec: ArgSpec): Validated {
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const args: Args = {};
  for (const [key, { type, required }] of Object.entries(spec)) {
    let v = input[key];
    if (v === "" || v === null) v = undefined;
    const label = key.replace(/_/g, " ");
    if (v === undefined) {
      if (required) return { ok: false, error: `I need the ${label} to do that. Ask the shopper for it.` };
      continue;
    }
    if (type === "number") {
      const n = typeof v === "string" ? Number(v.replace(/[$,\s]/g, "")) : v;
      if (typeof n !== "number" || !Number.isFinite(n) || n < 0) return { ok: false, error: `${label} should be a number.` };
      args[key] = n;
    } else if (type === "boolean") {
      args[key] = v === true || v === "true" || v === 1 || v === "yes";
    } else {
      if (typeof v !== "string" && typeof v !== "number") return { ok: false, error: `${label} should be text.` };
      args[key] = String(v).trim();
    }
  }
  // Extra keys (e.g. response_to_user, injected by on_call: generate_filler) are ignored.
  return { ok: true, args };
}

function parseArguments(raw: ToolCallMessage["properties"]["arguments"]): unknown {
  if (typeof raw !== "string") return raw ?? {};
  if (raw.trim() === "") return {};
  return JSON.parse(raw);
}

function clip(s: string, n: number): string {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…";
}

const usd = (n: number) => Math.round(n * 100) / 100;

// ---- handlers ----

type Trim = { label: string; apply: (o: any) => any };

type HandlerResult = {
  status: "success" | "error";
  output: string | Record<string, unknown>;
  /** Successive trims to apply while the message is too big. Each returns a smaller output. */
  trims?: Trim[];
};

interface HandlerContext {
  conversationId: string;
  /** Sends a later, unsolicited app message (background style_outfit). */
  send?: (msg: RespondMessage) => void;
}

type Handler = (args: Record<string, unknown>, barn: Barn, ctx: HandlerContext) => Promise<HandlerResult>;

const err = (output: string): HandlerResult => ({ status: "error", output });

function cutList(key: string, minKeep = 1, times = 10): Trim[] {
  return Array.from({ length: times }, () => ({
    label: `cut ${key}`,
    apply: (o: any) => (o[key].length > minKeep ? { ...o, [key]: o[key].slice(0, -1) } : o),
  }));
}

function makeHandlers(opts: RouterOptions, prices: Map<string, number>): Record<string, Handler> {
  const styleTimeout = opts.styleOutfitTimeoutMs ?? 150_000;
  const styleMode = opts.styleOutfitMode ?? "await";
  const limit = opts.spendLimitUsd ?? DEFAULT_SPEND_LIMIT_USD;
  const shopperId = opts.shopperId ?? "demo-shopper";
  const log = opts.logger ?? ((line: string) => console.log(line));
  const threshold = opts.trimThresholdBytes ?? TRIM_THRESHOLD_BYTES;
  let styleRunning = false;
  /** Department last used in this conversation, so a forgotten gender arg doesn't flip departments mid-call. */
  const departments = new Map<string, "men" | "women">();
  const department = (ctx: HandlerContext, given: unknown) => {
    const g = normalizeGender(typeof given === "string" ? given : undefined);
    if (g) departments.set(ctx.conversationId, g);
    return g ?? departments.get(ctx.conversationId);
  };
  /** Budgets of the outfits built so far, keyed by occasion (a rework or a retry of the same occasion replaces, not adds). */
  const outfitBudgets = new Map<string, number>();
  const occasionKey = (o: string) => o.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  return {
    async search_products(raw, barn, ctx) {
      // Sasha's prompt calls the text filter "q"; the tool schema calls it "query". Accept both.
      if (raw && typeof raw === "object" && (raw as any).query == null && (raw as any).q != null) raw = { ...raw, query: (raw as any).q };
      const v = validate(raw, {
        query: { type: "string" },
        department: { type: "string" },
        style: { type: "string" },
        brand: { type: "string" },
        color: { type: "string" },
        max_price: { type: "number" },
        size: { type: "string" },
        on_sale: { type: "boolean" },
        gender: { type: "string" },
      });
      if (!v.ok) return err(v.error);
      const a = v.args;
      const filters: BarnSearchFilters = {};
      if (a.query) filters.q = a.query as string;
      if (a.department) filters.dept = a.department as string;
      if (a.style) filters.style = a.style as string;
      if (a.brand) filters.brand = a.brand as string;
      if (a.color) filters.color = a.color as string;
      if (a.max_price !== undefined) filters.max_price = a.max_price as number;
      if (a.size) filters.size = a.size as string;
      const g = department(ctx, a.gender);
      if (g) filters.gender = g;
      if (a.on_sale) filters.sale = true;
      const results = (await barn.search(filters)) ?? [];
      for (const p of results) prices.set(p.id, p.price);
      return {
        status: "success",
        output: {
          products: results.map((p) => ({ id: p.id, title: p.title, brand: p.brand, price: p.price })),
          ...(results.length === 0 ? { hint: "No matches. Suggest loosening one filter." } : {}),
        },
        trims: [
          {
            label: "short titles",
            apply: (o) => ({ ...o, products: o.products.map((p: any) => ({ ...p, title: clip(p.title, SHORT_NAME_CHARS) })) }),
          },
          { label: "drop brands", apply: (o) => ({ ...o, products: o.products.map(({ brand, ...p }: any) => p) }) },
          ...cutList("products"),
        ],
      };
    },

    async show_product(raw, barn) {
      const v = validate(raw, { product_id: { type: "string", required: true } });
      if (!v.ok) return err(v.error);
      const r = await barn.openProduct(v.args.product_id as string);
      if (!r.ok) return err(`${r.error}. Use an id exactly as a tool returned it, or search again.`);
      prices.set(r.id, r.price);
      return {
        status: "success",
        output: { shown: true, id: r.id, title: r.title, brand: r.brand, price: r.price, sizes_in_stock: r.sizes, colors: r.colors },
        trims: [
          { label: "short title", apply: (o) => ({ ...o, title: clip(o.title, SHORT_NAME_CHARS) }) },
          {
            label: "cut colors/sizes",
            apply: (o) => ({ ...o, colors: o.colors.slice(0, 6), sizes_in_stock: o.sizes_in_stock.slice(0, 12) }),
          },
        ],
      };
    },

    async add_to_bag(raw, barn) {
      const v = validate(raw, {
        product_id: { type: "string", required: true },
        size: { type: "string" },
        color: { type: "string" },
      });
      if (!v.ok) return err(v.error);
      const id = v.args.product_id as string;

      // Spend guardrail. Learn the price without navigating if Barn allows it; otherwise open the
      // product page (the shopper is usually on it already when they say yes).
      let price = barn.getProduct?.(id)?.price ?? prices.get(id);
      if (price === undefined) {
        const r = await barn.openProduct(id);
        if (!r.ok) return err(`${r.error}. Use an id exactly as a tool returned it.`);
        price = r.price;
        prices.set(id, price);
      }
      const before = await barn.getBag();
      if (before.total + price > limit) {
        return err(
          `Not added: that would take the bag to ${usd(before.total + price)} dollars, past the ${limit} dollar limit for this conversation. The bag is at ${usd(before.total)} dollars.`,
        );
      }

      const r = await barn.addToBag(id, v.args.size as string | undefined, v.args.color as string | undefined);
      if (!r.ok) return err(clip(r.error || "That couldn't be added to the bag.", 200));
      const bag = await barn.getBag();
      return {
        status: "success",
        output: {
          added: { product_id: id, ...(v.args.size ? { size: v.args.size } : {}), ...(v.args.color ? { color: v.args.color } : {}) },
          bag_count: bag.count,
          bag_total_usd: usd(bag.total),
          left_under_limit_usd: usd(limit - bag.total),
        },
      };
    },

    async style_outfit(raw, barn, ctx) {
      // style_outfit's on_resolve is add_to_context (tools.json), so Sasha never speaks a direct
      // result. In background mode, anything she must react to now (a missing budget, a run
      // already going, the limit used up) is also pushed to her as a spoken message.
      const early = (text: string): HandlerResult => {
        if (styleMode === "background" && ctx.send) {
          try {
            ctx.send(fitRespond(ctx.conversationId, `STYLIST RESULT, not said by the shopper. ${text}`, threshold));
          } catch (e) {
            log(`[tool] style_outfit early send failed: ${(e as Error).message}`);
          }
        }
        return err(text);
      };
      const v = validate(raw, {
        occasion: { type: "string", required: true },
        budget_usd: { type: "number", required: true },
        notes: { type: "string" },
        rework_slot: { type: "string" },
        rework_feedback: { type: "string" },
        gender: { type: "string" },
      });
      if (!v.ok) return early(v.error);
      if (styleRunning) {
        return early("Looks are still being built. Don't call style_outfit again; tell the shopper it's still cooking.");
      }
      const a = v.args;
      const gender = department(ctx, a.gender);
      const asked = a.budget_usd as number;
      if (!(asked > 0)) return early("The budget has to be more than zero. Ask the shopper what they want to spend.");
      // $10,000 per conversation across all outfits and the bag. Items bought from a look count
      // toward both, so committed spend is the larger of the bag and the other outfits' budgets.
      const key = occasionKey(a.occasion as string);
      const otherOutfits = [...outfitBudgets].filter(([k]) => k !== key).reduce((sum, [, b]) => sum + b, 0);
      const bagTotal = (await barn.getBag())?.total ?? 0;
      const room = usd(limit - Math.max(bagTotal, otherOutfits));
      if (room <= 0) {
        return early(`The ${limit} dollar limit for this conversation is used up by the earlier outfits and the bag. Tell the shopper no more looks this time.`);
      }
      const capped = Math.min(asked, room);
      const req: RunRequest = {
        shopper_id: shopperId,
        conversation_id: ctx.conversationId || "no-conversation",
        occasion: a.occasion as string,
        budget_usd: capped,
        ...(a.notes ? { notes: a.notes as string } : {}),
        ...(gender ? { gender } : {}),
        ...(a.rework_slot && a.rework_feedback
          ? { rework: { slot: a.rework_slot as string, feedback: a.rework_feedback as string } }
          : {}),
      };
      const capNote =
        capped < asked
          ? { budget_note: `Budget capped at ${capped} dollars: the limit is ${limit} dollars per conversation across all outfits and the bag.` }
          : {};

      const run = async (): Promise<HandlerResult> => {
        styleRunning = true;
        let res: StylistResult;
        try {
          res = await withTimeout(opts.styleOutfit(req), styleTimeout);
        } catch (e) {
          opts.onLog?.({ dir: "info", text: `style_outfit backend failed: ${(e as Error).message}` });
          if (e instanceof StylistRunError && isDepartmentQuestion(e.backendMessage)) {
            return err(
              `The stylist needs the department before it can build looks. Ask the shopper this aloud, once: "${e.backendMessage}" Then call style_outfit again with the same occasion and budget and gender set to men or women.`,
            );
          }
          return err("The stylist couldn't finish those looks. Say so plainly and offer to try again.");
        } finally {
          styleRunning = false;
        }
        if (!res || !Array.isArray(res.looks) || res.looks.length === 0) {
          return err("The stylist came back with no looks. Say so plainly and offer to try again.");
        }
        outfitBudgets.set(key, capped);
        try {
          await barn.showLooks(res);
        } catch (e) {
          opts.onLog?.({ dir: "info", text: `Barn.showLooks threw: ${(e as Error).message}` });
        }
        return { status: "success", output: { ...compactStylist(res), ...capNote }, trims: stylistTrims };
      };

      if (styleMode === "await" || !ctx.send) {
        if (styleMode === "background") log("[tool] style_outfit background mode needs a send function; awaiting instead");
        return run();
      }

      // Background mode: answer at once so Tavus never waits on a slow run, then push the
      // looks as a conversation.respond message when the run finishes.
      const send = ctx.send;
      void run().then((r) => {
        const text =
          r.status === "success"
            ? stylistResultText(r.output as ReturnType<typeof compactStylist>)
            : `STYLIST RESULT, not said by the shopper. ${r.output}`;
        const msg = fitRespond(ctx.conversationId, text, threshold);
        opts.onLog?.({ dir: "info", text: `style_outfit pushed ${r.status} via conversation.respond (${byteLength(msg)}B)` });
        try {
          send(msg);
        } catch (e) {
          log(`[tool] style_outfit background send failed: ${(e as Error).message}`);
        }
      });
      return {
        status: "success",
        output: {
          started: true,
          ...capNote,
          note: "The stylist is working on this request and it takes about a minute. Keep telling short stories and jokes. The looks arrive in a new message starting with STYLIST RESULT. After that, call style_outfit again for any new request.",
        },
      };
    },
  };
}

/** "men" | "women" from loose words; anything else (or nothing) means unknown, so it isn't sent. */
export function normalizeGender(v: string | undefined): "men" | "women" | undefined {
  const w = (v ?? "").toLowerCase().replace(/[^a-z]/g, "");
  if (/^(women|woman|womens|female|ladies|lady|womenswear)$/.test(w)) return "women";
  if (/^(men|man|mens|male|gents|menswear)$/.test(w)) return "men";
  return undefined;
}

// ---- stylist result compaction ----

// Plain text with no square brackets or JSON: Tavus strips bracketed text from these
// messages, which removed the looks' items and left Sasha with no product ids.
export function stylistResultText(o: ReturnType<typeof compactStylist>): string {
  const looks = o.looks.map((l, n) => {
    const items = (l.items ?? [])
      .map((it) => ("product_id" in it ? `${it.slot} is product_id ${it.product_id}` : `${it.slot} is the shopper's own ${it.closet_item}`))
      .join("; ");
    return `Look ${n + 1}, ${l.outfit_name}, ${l.total_usd} dollars: ${items}.`;
  });
  return `STYLIST RESULT, not said by the shopper. The looks are on the outfit board now. spoken_summary: ${o.spoken_summary} ${looks.join(" ")} Say spoken_summary in your own voice and ask which look the shopper likes.`;
}

function compactStylist(res: StylistResult) {
  return {
    spoken_summary: res.spoken_summary,
    looks: res.looks.map((l) => ({
      outfit_name: l.outfit_name,
      total_usd: l.total_usd,
      items: (l.items ?? []).map((it) =>
        it.product_id
          ? { product_id: it.product_id, slot: it.slot }
          : { closet_item: clip(it.closet_item ?? "", SHORT_NAME_CHARS), slot: it.slot },
      ),
    })),
  };
}

const stylistTrims: Trim[] = [
  { label: "short summary", apply: (o) => ({ ...o, spoken_summary: clip(o.spoken_summary ?? "", 300) }) },
  {
    label: "short names",
    apply: (o) => ({ ...o, looks: o.looks.map((l: any) => ({ ...l, outfit_name: clip(l.outfit_name, SHORT_NAME_CHARS) })) }),
  },
  ...cutList("looks"),
  { label: "drop items", apply: (o) => ({ ...o, looks: o.looks.map(({ items, ...l }: any) => l) }) },
];

function fitRespond(conversationId: string, text: string, threshold: number): RespondMessage {
  // Tavus strips square-bracketed text from these messages, so never send brackets.
  const make = (t: string): RespondMessage => ({
    message_type: "conversation",
    event_type: "conversation.respond",
    conversation_id: conversationId,
    properties: { text: t.replace(/\[/g, "(").replace(/\]/g, ")") },
  });
  let msg = make(text);
  while (byteLength(msg) > threshold && text.length > 200) {
    text = text.slice(0, Math.floor(text.length * 0.8));
    msg = make(text + "…");
  }
  return msg;
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  let t: ReturnType<typeof setTimeout>;
  return Promise.race([
    p,
    new Promise<T>((_, reject) => {
      t = setTimeout(() => reject(new Error(`timed out after ${ms}ms`)), ms);
    }),
  ]).finally(() => clearTimeout(t));
}

// ---- router ----

export function createRouter(opts: RouterOptions) {
  const prices = new Map<string, number>();
  const handlers = makeHandlers(opts, prices);
  const log = opts.logger ?? ((line: string) => console.log(line));
  const threshold = opts.trimThresholdBytes ?? TRIM_THRESHOLD_BYTES;
  const getBarn = typeof opts.bridge === "function" ? opts.bridge : () => opts.bridge as Barn;
  const seen = new Set<string>();

  /**
   * Returns the tool_result message to send back, or null if `msg` isn't a tool call
   * (or is a duplicate). Never throws. `send` is used for later messages (background mode).
   */
  async function handle(msg: unknown, send?: (msg: RespondMessage) => void): Promise<ToolResultMessage | null> {
    if (!isToolCall(msg)) return null;
    const started = Date.now();
    const { name } = msg.properties;
    const toolCallId = msg.properties.tool_call_id ?? msg.properties.inference_id ?? msg.inference_id ?? "";
    if (!msg.properties.tool_call_id) log(`[tool] ${name} WARNING: no tool_call_id on incoming call`);
    if (toolCallId && seen.has(toolCallId)) {
      log(`[tool] ${name} duplicate ${toolCallId} ignored`);
      return null;
    }
    if (toolCallId) seen.add(toolCallId);

    let result: HandlerResult;
    let args: unknown = msg.properties.arguments;
    try {
      args = parseArguments(msg.properties.arguments);
      opts.onLog?.({ dir: "in", tool: name, tool_call_id: toolCallId, args });
      const handler = Object.hasOwn(handlers, name) ? handlers[name] : undefined;
      const barn = getBarn();
      if (!handler) result = err(`Unknown tool ${name}.`);
      else if (!barn) result = err("The store isn't loaded yet. Try again in a moment.");
      else result = await handler(args as Record<string, unknown>, barn, { conversationId: msg.conversation_id, send });
    } catch (e) {
      if (e instanceof SyntaxError && typeof msg.properties.arguments === "string") {
        opts.onLog?.({ dir: "in", tool: name, tool_call_id: toolCallId, args });
        result = err("I couldn't read those tool arguments. Try again.");
      } else {
        log(`[tool] ${name} handler error: ${(e as Error)?.message ?? e}`);
        result = err(`Something went wrong with ${name.replace(/_/g, " ")}. Try once more.`);
      }
    }

    const make = (output: HandlerResult["output"]): ToolResultMessage => ({
      message_type: "conversation",
      event_type: "conversation.tool_result",
      conversation_id: msg.conversation_id,
      properties: { tool_call_id: toolCallId, output, status: result.status },
    });

    let message = make(result.output);
    let bytes = byteLength(message);
    const trimmed: string[] = [];
    const originalBytes = bytes;
    for (const step of result.trims ?? []) {
      if (bytes <= threshold) break;
      const next = make(step.apply(message.properties.output));
      const nextBytes = byteLength(next);
      if (nextBytes < bytes) {
        message = next;
        bytes = nextBytes;
        if (trimmed[trimmed.length - 1] !== step.label) trimmed.push(step.label);
      }
    }
    if (bytes > threshold) {
      // Last resort: still too big after every trim. Never send a message Tavus would drop.
      message = make("Done. The details were too long to send; describe what is on screen instead.");
      bytes = byteLength(message);
      trimmed.push("replaced output");
    }

    const ms = Date.now() - started;
    if (trimmed.length) log(`[tool] ${name} trimmed ${originalBytes}B -> ${bytes}B (${trimmed.join(", ")})`);
    log(`[tool] ${name} ${bytes}B ${ms}ms${result.status === "error" ? " error" : ""}`);
    opts.onLog?.({
      dir: "out",
      tool: name,
      tool_call_id: toolCallId,
      status: result.status,
      bytes,
      ms,
      trimmed,
      output: message.properties.output,
    });
    return message;
  }

  return { handle };
}

export type ToolRouter = ReturnType<typeof createRouter>;
