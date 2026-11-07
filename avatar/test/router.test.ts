// Router + stylist client tests: node:test via tsx. Run with `npm --prefix avatar/dev test`.
// The fake Barn mirrors site/barn.js over the real catalog (data/catalog/products.json).
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import {
  byteLength,
  createRouter,
  MAX_APP_MESSAGE_BYTES,
  type RespondMessage,
  type RouterOptions,
  type ToolCallMessage,
  type ToolResultMessage,
} from "../router";
import { mockStylist, parseBudget, readSse, StylistRunError, stylistClient } from "../style-outfit";
import type { Barn, RunRequest, StylistResult } from "../types";

import { CATALOG, fakeBarn } from "./fake-barn";

let n = 0;
function call(name: string, args: Record<string, unknown> | string, conversation_id = "conv-1"): ToolCallMessage {
  return {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id,
    properties: { name, arguments: typeof args === "string" ? args : JSON.stringify(args), tool_call_id: `call_${++n}` },
  };
}

function setup(over: Partial<RouterOptions> = {}) {
  const fb = fakeBarn();
  const lines: string[] = [];
  const router = createRouter({ bridge: fb.barn, styleOutfit: mockStylist(["MW-0332"], 0), logger: (l) => lines.push(l), ...over });
  return { ...fb, router, lines };
}

function ok(r: ToolResultMessage | null, status: "success" | "error" = "success"): asserts r is ToolResultMessage {
  assert.ok(r, "expected a tool_result");
  assert.equal(r.event_type, "conversation.tool_result");
  assert.equal(r.conversation_id, "conv-1");
  assert.ok(byteLength(r) < MAX_APP_MESSAGE_BYTES, `result is ${byteLength(r)}B`);
  assert.equal(r.properties.status, status, JSON.stringify(r.properties.output));
}
const out = (r: ToolResultMessage) => r.properties.output as any;

describe("search_products", () => {
  it("maps tool args onto Barn.search filters and returns ≤5 briefs", async () => {
    const { router, calls } = setup();
    const r = await router.handle(
      call("search_products", { query: "blazer", department: "suits", style: "Formal", color: "navy", max_price: "$600", on_sale: "true" }),
    );
    ok(r);
    assert.deepEqual(calls[0], ["search", [{ q: "blazer", dept: "suits", style: "Formal", color: "navy", max_price: 600, sale: true }]]);
    assert.ok(out(r).products.length <= 5);
  });

  it("returns real products with id/title/brand/price only", async () => {
    const { router } = setup();
    const r = await router.handle(call("search_products", { query: "linen" }));
    ok(r);
    assert.ok(out(r).products.length > 0);
    for (const p of out(r).products) assert.deepEqual(Object.keys(p).sort(), ["brand", "id", "price", "title"]);
  });

  it("accepts q (the prompt's name) as an alias for query", async () => {
    const { router, calls } = setup();
    ok(await router.handle(call("search_products", { q: "linen suit" })));
    assert.deepEqual(calls[0], ["search", [{ q: "linen suit" }]]);
  });

  it("passes gender to Barn.search and remembers it for the rest of the call", async () => {
    const { router, calls } = setup();
    ok(await router.handle(call("search_products", { query: "linen suit", gender: "Men's" })));
    assert.deepEqual(calls.at(-1), ["search", [{ q: "linen suit", gender: "men" }]]);
    ok(await router.handle(call("search_products", { query: "loafer" })));
    assert.deepEqual(calls.at(-1), ["search", [{ q: "loafer", gender: "men" }]], "forgotten gender falls back to the call's department");
    ok(await router.handle(call("search_products", { query: "dress", gender: "women" })));
    assert.deepEqual(calls.at(-1), ["search", [{ q: "dress", gender: "women" }]], "an explicit answer switches it");
  });

  it("keeps departments separate per conversation, and style_outfit uses the remembered one", async () => {
    const seen: RunRequest[] = [];
    const { router, calls } = setup({ styleOutfit: async (req) => (seen.push(req), mockStylist([], 0)(req)) });
    ok(await router.handle(call("search_products", { query: "suit", gender: "men" })));
    ok(await router.handle(call("style_outfit", { occasion: "wedding", budget_usd: 800 })));
    assert.equal(seen[0].gender, "men");
    const other = await router.handle(call("search_products", { query: "suit" }, "conv-2"));
    assert.ok(other);
    assert.deepEqual(calls.at(-1), ["search", [{ q: "suit" }]]);
  });

  it("hints when nothing matches", async () => {
    const { router } = setup();
    const r = await router.handle(call("search_products", { query: "zzzz" }));
    ok(r);
    assert.match(out(r).hint, /loosening/);
  });

  it("trims an oversized result below the threshold", async () => {
    const { router, barn, lines } = setup();
    barn.search = () =>
      Array.from({ length: 5 }, (_, i) => ({ id: `X-${i}-${"z".repeat(300)}`, title: "Long ".repeat(200), brand: "B".repeat(300), price: 1 }));
    const r = await router.handle(call("search_products", {}));
    ok(r);
    assert.ok(byteLength(r) <= 3500);
    assert.ok(lines.some((l) => l.includes("trimmed")));
  });
});

describe("show_product", () => {
  it("opens the page and returns in-stock sizes", async () => {
    const { router, hash } = setup();
    const r = await router.handle(call("show_product", { product_id: "MW-0332" }));
    ok(r);
    assert.equal(hash(), "#/product/MW-0332");
    assert.equal(out(r).price, 198);
    assert.ok(!out(r).sizes_in_stock.includes("XL"), "XL has 0 inventory");
  });

  it("errors on an unknown id", async () => {
    const { router } = setup();
    ok(await router.handle(call("show_product", { product_id: "nope" })), "error");
  });
});

describe("add_to_bag", () => {
  it("adds and reports the bag and the room left under the limit", async () => {
    const { router, calls } = setup();
    const r = await router.handle(call("add_to_bag", { product_id: "MW-0332", size: "M", color: "Navy Heather Herringbone" }));
    ok(r);
    assert.deepEqual(calls.find((c) => c[0] === "addToBag"), ["addToBag", ["MW-0332", "M", "Navy Heather Herringbone"]]);
    assert.equal(out(r).bag_count, 1);
    assert.equal(out(r).bag_total_usd, 198);
    assert.equal(out(r).left_under_limit_usd, 10000 - 198);
  });

  it("passes Barn's reason back for a sold-out size", async () => {
    const { router } = setup();
    const r = await router.handle(call("add_to_bag", { product_id: "MW-0332", size: "XL" }));
    ok(r, "error");
    assert.match(String(r.properties.output), /out of stock/);
  });

  it("refuses an item that would pass the $10,000 limit, without touching the bag", async () => {
    const { router, calls, setBag } = setup();
    setBag([{ id: "MW-0333", size: "38S", color: "x", qty: 17 }]); // 17 × 580 = 9860
    const r = await router.handle(call("add_to_bag", { product_id: "MW-0332", size: "M" }));
    ok(r, "error");
    assert.match(String(r.properties.output), /limit/);
    assert.equal(calls.filter((c) => c[0] === "addToBag").length, 0);
  });

  it("uses a price seen in an earlier result instead of opening the page", async () => {
    const { router, calls } = setup();
    await router.handle(call("show_product", { product_id: "MW-0332" }));
    const opens = calls.filter((c) => c[0] === "openProduct").length;
    ok(await router.handle(call("add_to_bag", { product_id: "MW-0332", size: "M" })));
    assert.equal(calls.filter((c) => c[0] === "openProduct").length, opens);
  });

  it("uses Barn.getProduct when it exists", async () => {
    const { router, barn, calls } = setup();
    barn.getProduct = (id) => ({ ok: true, id, title: "t", brand: "b", price: 198 });
    ok(await router.handle(call("add_to_bag", { product_id: "MW-0332", size: "M" })));
    assert.equal(calls.filter((c) => c[0] === "openProduct").length, 0);
  });
});

describe("style_outfit", () => {
  it("sends the run request, shows the looks and returns a compact result", async () => {
    let seen: RunRequest | undefined;
    const { router, calls } = setup({ styleOutfit: async (req) => ((seen = req), mockStylist(["MW-0332"], 0)(req)) });
    const r = await router.handle(call("style_outfit", { occasion: "summer wedding in Italy", budget_usd: 800, response_to_user: "On it." }));
    ok(r);
    assert.deepEqual(seen, { shopper_id: "demo-shopper", conversation_id: "conv-1", occasion: "summer wedding in Italy", budget_usd: 800 });
    const shown = calls.find((c) => c[0] === "showLooks")![1][0] as StylistResult;
    assert.equal(shown.looks.length, 3);
    assert.equal(out(r).looks.length, 3);
    for (const look of out(r).looks) for (const it of look.items) assert.equal(it.why, undefined);
  });

  it("sends rework when both rework fields are given", async () => {
    let seen: RunRequest | undefined;
    const { router } = setup({ styleOutfit: async (req) => ((seen = req), mockStylist([], 0)(req)) });
    ok(await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800, rework_slot: "Shoes", rework_feedback: "too formal" })));
    assert.deepEqual(seen!.rework, { slot: "Shoes", feedback: "too formal" });
  });

  it("caps the budget at the limit and says so", async () => {
    let seen: RunRequest | undefined;
    const { router } = setup({ styleOutfit: async (req) => ((seen = req), mockStylist([], 0)(req)) });
    const r = await router.handle(call("style_outfit", { occasion: "gala", budget_usd: 50000 }));
    ok(r);
    assert.equal(seen!.budget_usd, 10000);
    assert.match(out(r).budget_note, /capped/);
  });

  it("requires a budget", async () => {
    const { router } = setup();
    const r = await router.handle(call("style_outfit", { occasion: "gala" }));
    ok(r, "error");
    assert.match(String(r.properties.output), /budget/);
  });

  it("refuses a second run while one is in flight", async () => {
    let release!: () => void;
    const gate = new Promise<void>((r) => (release = r));
    const { router } = setup({ styleOutfit: async (req) => (await gate, mockStylist([], 0)(req)) });
    const first = router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }));
    await new Promise((r) => setTimeout(r, 5));
    const second = await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }));
    ok(second, "error");
    release();
    ok(await first);
  });

  it("returns a speakable error on timeout and on empty looks", async () => {
    const t = setup({ styleOutfit: () => new Promise(() => {}), styleOutfitTimeoutMs: 20 });
    ok(await t.router.handle(call("style_outfit", { occasion: "x", budget_usd: 5 })), "error");
    const e = setup({ styleOutfit: async () => ({ looks: [], spoken_summary: "" }) });
    ok(await e.router.handle(call("style_outfit", { occasion: "x", budget_usd: 5 })), "error");
  });

  it("trims a huge stylist response", async () => {
    const big = { outfit_name: "N".repeat(400), total_usd: 1, items: Array.from({ length: 30 }, (_, i) => ({ product_id: `id-${i}-${"z".repeat(80)}`, slot: "Shoes", why: "x" })) };
    const { router } = setup({ styleOutfit: async () => ({ looks: Array(6).fill(big), spoken_summary: "s".repeat(3000) }) });
    const r = await router.handle(call("style_outfit", { occasion: "x", budget_usd: 5 }));
    ok(r);
    assert.ok(byteLength(r) <= 3500);
  });

  it("sends gender only when it's men or women, normalising loose words", async () => {
    const seen: RunRequest[] = [];
    const { router } = setup({ styleOutfit: async (req) => (seen.push(req), mockStylist([], 0)(req)) });
    // Separate conversations, so the remembered department doesn't carry over between cases.
    for (const g of ["women", "Men's", "female", "unknown", ""]) {
      await router.handle(call("style_outfit", { occasion: `o-${g}`, budget_usd: 100, gender: g }, `conv-${g || "none"}`));
    }
    assert.deepEqual(seen.map((r) => r.gender), ["women", "men", "women", undefined, undefined]);
    assert.ok(!("gender" in seen[3]), "unknown department is left out of the request");
  });

  it("turns the backend's department question into something Sasha asks aloud", async () => {
    const pushed: RespondMessage[] = [];
    const q = "Should I style from the men's or women's department?";
    const { router } = setup({
      styleOutfitMode: "background",
      styleOutfit: async () => {
        throw new StylistRunError(q);
      },
    });
    const r = await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }), (m) => pushed.push(m));
    ok(r);
    await new Promise((r) => setTimeout(r, 20));
    assert.equal(pushed.length, 1);
    assert.ok(pushed[0].properties.text.includes(q), pushed[0].properties.text);
    assert.match(pushed[0].properties.text, /call style_outfit again .* gender/);
  });

  it("keeps the generic message for other backend errors", async () => {
    const { router } = setup({
      styleOutfit: async () => {
        throw new StylistRunError("No valid looks within budget.");
      },
    });
    const r = await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }));
    ok(r, "error");
    assert.match(String(r.properties.output), /couldn't finish/);
  });

  it("passes each item's size to Sasha so she adds the right one (#29)", async () => {
    const pushed: RespondMessage[] = [];
    const { router } = setup({
      styleOutfitMode: "background",
      styleOutfit: async () => ({
        looks: [
          {
            outfit_name: "Linen",
            total_usd: 640,
            items: [
              { product_id: "MW-0374", slot: "Suit", why: "w", size: "40R" },
              { product_id: "MW-0158", slot: "Sunglasses", why: "w" },
              { closet_item: "Navy chinos", slot: "Chinos", why: "w" },
            ],
          },
        ],
        spoken_summary: "One look.",
      }),
    });
    await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }), (m) => pushed.push(m));
    await new Promise((r) => setTimeout(r, 20));
    const text = pushed[0].properties.text;
    assert.match(text, /Suit is product_id MW-0374, size 40R/);
    assert.match(text, /Sunglasses is product_id MW-0158;/, "no size field, no size words");
    assert.match(text, /use the size listed here/);
  });

  it("instant only for the first look of a call; later requests run live", async () => {
    const seen: RunRequest[] = [];
    const preset = async (req: RunRequest) => {
      seen.push(req);
      const r = await mockStylist(["MW-0374"], 0)(req);
      return req.instant ? { ...r, warnings: ["preset looks"] } : r;
    };
    const { router } = setup({ styleOutfit: preset, instant: true });
    await router.handle(call("style_outfit", { occasion: "beach wedding", budget_usd: 1500 }));
    await router.handle(call("style_outfit", { occasion: "dinner on the trip", budget_usd: 800 }));
    assert.equal(seen[0].instant, true, "first look: preset");
    assert.ok(!("instant" in seen[1]), "second look: live agent");
    const other = setup({ styleOutfit: preset, instant: true });
    await other.router.handle(call("style_outfit", { occasion: "beach wedding", budget_usd: 1500 }, "conv-other"));
    assert.equal(seen[2].instant, true, "a new call gets its own first look");
  });

  it("a rework of preset looks runs live with the looks spelled out in notes", async () => {
    const seen: RunRequest[] = [];
    const run = async (req: RunRequest) => {
      seen.push(req);
      if (req.instant) {
        return {
          looks: [{ outfit_name: "Sand", total_usd: 700, items: [{ product_id: "MW-0374", slot: "Suit", why: "w", size: "40R" }, { product_id: "MW-0094", slot: "Shoes", why: "w", size: "10" }] }],
          spoken_summary: "s",
          warnings: ["preset looks"],
        };
      }
      return mockStylist(["MW-0374"], 0)(req);
    };
    const { router } = setup({ styleOutfit: run, instant: true });
    await router.handle(call("style_outfit", { occasion: "beach wedding", budget_usd: 1500 }));
    await router.handle(call("style_outfit", { occasion: "beach wedding", budget_usd: 1500, rework_slot: "Shoes", rework_feedback: "too formal" }));
    const rw = seen[1];
    assert.ok(!("rework" in rw) && !("instant" in rw), "a full live run, not a Session rework");
    assert.match(rw.notes!, /Look 1 "Sand": Suit MW-0374 size 40R, Shoes MW-0094 size 10\./);
    assert.match(rw.notes!, /Change only the Shoes piece in each look \(feedback: too formal\)/);
    // The next change continues the live Session normally.
    await router.handle(call("style_outfit", { occasion: "beach wedding", budget_usd: 1500, rework_slot: "Shirt", rework_feedback: "too bright" }));
    assert.deepEqual(seen[2].rework, { slot: "Shirt", feedback: "too bright" });
  });

  it("sends instant only when the backup switch is on", async () => {
    const seen: RunRequest[] = [];
    const run = async (req: RunRequest) => (seen.push(req), mockStylist([], 0)(req));
    await setup({ styleOutfit: run }).router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }));
    await setup({ styleOutfit: run, instant: true }).router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }));
    assert.ok(!("instant" in seen[0]), "default: live agent run");
    assert.equal(seen[1].instant, true);
  });

  it("background mode also speaks early errors, since style_outfit is add_to_context", async () => {
    const pushed: RespondMessage[] = [];
    const { router } = setup({ styleOutfitMode: "background" });
    const r = await router.handle(call("style_outfit", { occasion: "gala" }), (m) => pushed.push(m));
    ok(r, "error");
    assert.equal(pushed.length, 1);
    assert.match(pushed[0].properties.text, /^STYLIST RESULT, not said by the shopper\. .*budget/);
  });

  it("never sends square brackets to Sasha (Tavus strips them)", async () => {
    const pushed: RespondMessage[] = [];
    const { router } = setup({
      styleOutfitMode: "background",
      styleOutfit: async () => ({
        looks: [{ outfit_name: "Look [A]", total_usd: 1, items: [{ product_id: "MW-0374", slot: "Suit", why: "w" }] }],
        spoken_summary: "One look [linen].",
      }),
    });
    await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }), (m) => pushed.push(m));
    await new Promise((r) => setTimeout(r, 20));
    assert.equal(pushed.length, 1);
    assert.doesNotMatch(pushed[0].properties.text, /[\[\]]/);
    assert.match(pushed[0].properties.text, /MW-0374/);
    assert.match(pushed[0].properties.text, /Look \(A\)/);
  });

  it("background mode replies at once and pushes the looks later", async () => {
    let release!: () => void;
    const gate = new Promise<void>((r) => (release = r));
    const pushed: RespondMessage[] = [];
    const { router, calls } = setup({ styleOutfitMode: "background", styleOutfit: async (req) => (await gate, mockStylist([], 0)(req)) });
    const r = await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }), (m) => pushed.push(m));
    ok(r);
    assert.equal(out(r).started, true);
    assert.equal(pushed.length, 0);
    release();
    await new Promise((r) => setTimeout(r, 20));
    assert.equal(pushed.length, 1);
    assert.equal(pushed[0].event_type, "conversation.respond");
    assert.ok(byteLength(pushed[0]) < MAX_APP_MESSAGE_BYTES);
    assert.ok(calls.some((c) => c[0] === "showLooks"));
  });
});

describe("errors never throw", () => {
  it("bad args, malformed JSON, unknown tool, missing Barn, throwing Barn", async () => {
    const { router } = setup();
    ok(await router.handle(call("show_product", {})), "error");
    ok(await router.handle(call("search_products", { max_price: "cheap" })), "error");
    ok(await router.handle(call("search_products", "{not json")), "error");
    const u = await router.handle(call("checkout", {}));
    ok(u, "error");
    assert.match(String(u.properties.output), /Unknown tool/);
    const none = createRouter({ bridge: () => undefined, styleOutfit: mockStylist([], 0), logger: () => {} });
    ok(await none.handle(call("search_products", {})), "error");
    const boom = createRouter({
      bridge: { search: () => { throw new Error("boom"); } } as unknown as Barn,
      styleOutfit: mockStylist([], 0),
      logger: () => {},
    });
    ok(await boom.handle(call("search_products", {})), "error");
  });

  it("ignores non-tool messages and duplicates", async () => {
    const { router } = setup();
    assert.equal(await router.handle({ event_type: "conversation.utterance" }), null);
    assert.equal(await router.handle(null), null);
    const msg = call("search_products", {});
    assert.ok(await router.handle(msg));
    assert.equal(await router.handle(msg), null);
  });
});

describe("stylist client (Jing's backend)", () => {
  const sse = (events: unknown[], chunk = 7) => {
    const text = ": ping\n\n" + events.map((e) => `data: ${JSON.stringify(e)}\n\n`).join("");
    const bytes = new TextEncoder().encode(text);
    return new ReadableStream<Uint8Array>({
      start(c) {
        for (let i = 0; i < bytes.length; i += chunk) c.enqueue(bytes.slice(i, i + chunk));
        c.close();
      },
    });
  };
  const result = { type: "result", looks: [{ outfit_name: "A", items: [{ product_id: "MW-0332", slot: "Sport Coat", why: "w" }], total_usd: 198 }], spoken_summary: "s", lookbook_artifact: null, elapsed_ms: 1, warnings: ["stub data"] };

  function fakeFetch(events: unknown[], runStatus = 202) {
    const requests: Array<{ url: string; body?: string }> = [];
    const f = (async (url: string, init?: RequestInit) => {
      requests.push({ url, body: init?.body as string | undefined });
      if (url.endsWith("/api/stylist/run")) return new Response(JSON.stringify({ run_id: "r1" }), { status: runStatus });
      return new Response(sse(events), { status: 200, headers: { "content-type": "text/event-stream" } });
    }) as typeof fetch;
    return { f, requests };
  }

  it("posts the run, streams steps to onStep and resolves with the result", async () => {
    const { f, requests } = fakeFetch([
      { type: "step", id: "memory", label: "Recalling", status: "start" },
      { type: "step", id: "memory", label: "Recalling", status: "end" },
      result,
    ]);
    const steps: unknown[] = [];
    let started = 0;
    const run = stylistClient({ baseUrl: "http://x/", fetchImpl: f, onStep: (s) => steps.push(s), onStart: () => started++ });
    const r = await run({ shopper_id: "s", conversation_id: "c", occasion: "o", budget_usd: 800 });
    assert.equal(requests[0].url, "http://x/api/stylist/run");
    assert.deepEqual(JSON.parse(requests[0].body!), { shopper_id: "s", conversation_id: "c", occasion: "o", budget_usd: 800 });
    assert.equal(requests[1].url, "http://x/api/stylist/events?run_id=r1");
    assert.equal(started, 1);
    assert.equal(steps.length, 2);
    assert.deepEqual(r, { looks: result.looks, spoken_summary: "s", lookbook_artifact: null, warnings: ["stub data"] });
  });

  it("rejects on an error event, a bad status, or a stream without a result", async () => {
    const opts = { shopper_id: "s", conversation_id: "c", occasion: "o", budget_usd: 1 };
    await assert.rejects(
      stylistClient({ baseUrl: "http://x", fetchImpl: fakeFetch([{ type: "error", message: "nope" }]).f })(opts),
      (e: unknown) => e instanceof StylistRunError && e.backendMessage === "nope",
    );
    await assert.rejects(stylistClient({ baseUrl: "http://x", fetchImpl: fakeFetch([], 400).f })(opts), /400/);
    await assert.rejects(stylistClient({ baseUrl: "http://x", fetchImpl: fakeFetch([]).f })(opts), /without a result/);
  });

  it("closes the stream right after the result, ignoring anything sent later", async () => {
    let cancelled = false;
    const enc = new TextEncoder();
    const body = new ReadableStream<Uint8Array>({
      start(c) {
        c.enqueue(enc.encode(`data: ${JSON.stringify(result)}\n\n`));
        // Server keeps the stream open (e.g. pings); the client must not wait for it.
      },
      cancel() {
        cancelled = true;
      },
    });
    const f = (async (url: string) =>
      url.endsWith("/api/stylist/run")
        ? new Response(JSON.stringify({ run_id: "r1" }), { status: 202 })
        : new Response(body, { status: 200 })) as typeof fetch;
    const r = await stylistClient({ baseUrl: "http://x", fetchImpl: f })({ shopper_id: "s", conversation_id: "c", occasion: "o", budget_usd: 1 });
    assert.equal(r.looks.length, 1);
    assert.equal(cancelled, true);
  });

  it("readSse handles CRLF and multi-line data", async () => {
    const body = new Response('data: {"type":"step",\r\ndata: "id":"a","label":"l","status":"start"}\r\n\r\n').body!;
    const got = [];
    for await (const e of readSse(body)) got.push(e);
    assert.deepEqual(got, [{ type: "step", id: "a", label: "l", status: "start" }]);
  });
});

describe("parseBudget", () => {
  it("reads typed budgets", () => {
    assert.equal(parseBudget("summer wedding in Italy, about $800"), 800);
    assert.equal(parseBudget("gala, $1,200.50"), 1200.5);
    assert.equal(parseBudget("trip for 2k"), 2000);
    assert.equal(parseBudget("3 grand for a suit"), 3000);
    assert.equal(parseBudget("500 bucks"), 500);
    assert.equal(parseBudget("wedding in June"), undefined);
  });
});

describe("tools.json", () => {
  it("matches Sasha's prompt: names, on_call/on_resolve, required args", () => {
    const tools = JSON.parse(readFileSync(new URL("../tools.json", import.meta.url), "utf8"));
    const want: Record<string, [string, string, string[]]> = {
      search_products: ["generate_filler", "generate_response", []],
      show_product: ["silent", "generate_response", ["product_id"]],
      add_to_bag: ["silent", "generate_response", ["product_id"]],
      style_outfit: ["generate_filler", "add_to_context", ["occasion", "budget_usd"]],
    };
    assert.deepEqual(tools.map((t: any) => t.name).sort(), Object.keys(want).sort());
    const so = tools.find((t: any) => t.name === "style_outfit");
    assert.deepEqual(so.parameters.properties.gender.enum, ["men", "women"]);
    const prompt = readFileSync(new URL("../../pal/system-prompt.md", import.meta.url), "utf8");
    for (const t of tools) {
      const [onCall, onResolve, required] = want[t.name];
      assert.deepEqual([t.on_call, t.on_resolve, t.parameters.required], [onCall, onResolve, required], t.name);
      assert.deepEqual(t.delivery, { app_message: true });
      assert.ok(prompt.includes(t.name), `pal/system-prompt.md never mentions ${t.name}`);
    }
  });
});
