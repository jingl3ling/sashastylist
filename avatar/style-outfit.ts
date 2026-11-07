// Client for Jing's stylist backend:
//   POST {base}/api/stylist/run            -> 202 { run_id }
//   GET  {base}/api/stylist/events?run_id= -> SSE, JSON in `data:`; ends after a result or error event
// Reads the stream with fetch instead of EventSource: EventSource reconnects on close and the
// server would replay the whole run.

import type { RunRequest, StepStatus, StylistEvent, StylistResult } from "./types";

export type StyleOutfitFn = (req: RunRequest) => Promise<StylistResult>;

export const DEFAULT_STYLE_OUTFIT_TIMEOUT_MS = 120_000; // Jing's runs take ~35 s; the PAL prompt says "a minute or more"

export interface StylistClientOptions {
  /** Backend origin, e.g. "http://localhost:8787" or the Railway URL. No trailing slash needed. */
  baseUrl: string;
  /** Each step event, for the activity feed (Barn.addFeedStep). */
  onStep?: (step: { id: string; label: string; status: StepStatus }) => void;
  /** Called once when a run starts, e.g. Barn.resetFeed. */
  onStart?: () => void;
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
}

export function stylistClient(opts: StylistClientOptions): StyleOutfitFn {
  const base = opts.baseUrl.replace(/\/+$/, "");
  const f = opts.fetchImpl ?? ((...a: Parameters<typeof fetch>) => fetch(...a));
  const timeoutMs = opts.timeoutMs ?? DEFAULT_STYLE_OUTFIT_TIMEOUT_MS;

  return async (req) => {
    const signal = AbortSignal.timeout(timeoutMs);
    const start = await f(`${base}/api/stylist/run`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(req),
      signal,
    });
    if (!start.ok) throw new Error(`stylist run ${start.status}: ${(await start.text()).slice(0, 300)}`);
    const { run_id } = (await start.json()) as { run_id: string };
    if (!run_id) throw new Error("stylist run returned no run_id");
    opts.onStart?.();

    const res = await f(`${base}/api/stylist/events?run_id=${encodeURIComponent(run_id)}`, {
      headers: { accept: "text/event-stream" },
      signal,
    });
    if (!res.ok || !res.body) throw new Error(`stylist events ${res.status}`);

    for await (const ev of readSse(res.body)) {
      if (ev.type === "step") opts.onStep?.({ id: ev.id, label: ev.label, status: ev.status });
      else if (ev.type === "error") throw new Error(`stylist: ${ev.message}`);
      else if (ev.type === "result") {
        const { looks, spoken_summary, lookbook_artifact } = ev;
        return { looks, spoken_summary, lookbook_artifact };
      }
    }
    throw new Error("stylist stream ended without a result");
  };
}

/** Minimal SSE reader: yields the JSON of each `data:` event; ignores comments (pings). */
export async function* readSse(body: ReadableStream<Uint8Array>): AsyncGenerator<StylistEvent> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (value) buf += decoder.decode(value, { stream: true });
      let cut: number;
      while ((cut = buf.search(/\r?\n\r?\n/)) !== -1) {
        const block = buf.slice(0, cut);
        buf = buf.slice(cut).replace(/^\r?\n\r?\n/, "");
        const data = block
          .split(/\r?\n/)
          .filter((l) => l.startsWith("data:"))
          .map((l) => l.slice(5).replace(/^ /, ""))
          .join("\n");
        if (data) {
          try {
            yield JSON.parse(data) as StylistEvent;
          } catch {
            // skip malformed event
          }
        }
      }
      if (done) return;
    }
  } finally {
    // Close the connection as soon as we stop reading (result, error, or the caller bailing).
    // fetch never reconnects, so the server can't replay the run (Jing's contract note).
    await reader.cancel().catch(() => {});
  }
}

/** Fake backend for the harness and tests: a few steps, then three looks over the given ids. */
export function mockStylist(productIds: string[], delayMs = 300, onStep?: StylistClientOptions["onStep"]): StyleOutfitFn {
  const wait = () => new Promise((r) => setTimeout(r, delayMs));
  return async (req) => {
    for (const [id, label] of [
      ["memory", "Recalling your sizes and closet"],
      ["search", "Searching the catalog"],
      ["build", "Building three looks"],
    ]) {
      onStep?.({ id, label, status: "start" });
      await wait();
      onStep?.({ id, label, status: "end" });
    }
    const ids = productIds.length ? productIds : ["MW-0001"];
    const looks = [0, 1, 2].map((n) => ({
      outfit_name: `${["Classic", "Relaxed", "Sharp"][n]} ${req.occasion}`,
      items: [
        { product_id: ids[n % ids.length], slot: "Sport Coat", why: "Light enough for the heat." },
        { closet_item: "Navy chinos", slot: "Chinos", why: "Already owned, so the budget goes further." },
      ],
      total_usd: Math.min(req.budget_usd, 300 + n * 100),
    }));
    return {
      looks,
      spoken_summary: `Three looks for ${req.occasion}${req.rework ? `, with new ${req.rework.slot.toLowerCase()}` : ""}, all under ${req.budget_usd} dollars.`,
      lookbook_artifact: null,
    };
  };
}

/** Pulls a budget out of a typed brief: "$800", "about 800 bucks", "2k", "3 grand". */
export function parseBudget(text: string): number | undefined {
  const m = text.match(/\$\s?(\d[\d,]*(?:\.\d+)?)\s*(k)?|(\d[\d,]*(?:\.\d+)?)\s*(k|grand|bucks|dollars|usd)\b/i);
  if (!m) return undefined;
  const n = Number((m[1] ?? m[3]).replace(/,/g, ""));
  const k = /^(k|grand)$/i.test(m[2] ?? m[4] ?? "");
  return Number.isFinite(n) ? n * (k ? 1000 : 1) : undefined;
}
