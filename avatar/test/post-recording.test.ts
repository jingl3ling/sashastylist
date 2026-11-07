// Fixes from the post-recording bug sweep.
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applyUtterance, parseUtterance, type CaptionLine } from "../captions";
import { createRouter, type RespondMessage, type ToolCallMessage } from "../router";
import { mockStylist, stylistClient, typedGender } from "../style-outfit";
import type { RunRequest } from "../types";
import { fakeBarn } from "./fake-barn";

let n = 0;
const call = (name: string, args: Record<string, unknown>, conversation_id = "conv-1"): ToolCallMessage => ({
  message_type: "conversation",
  event_type: "conversation.tool_call",
  conversation_id,
  properties: { name, arguments: JSON.stringify(args), tool_call_id: `pr_${++n}` },
});
const tick = () => new Promise((r) => setTimeout(r, 20));

describe("router: run state", () => {
  it("'still being built' goes to Sasha as a STYLIST UPDATE, not a STYLIST RESULT", async () => {
    let release!: () => void;
    const gate = new Promise<void>((r) => (release = r));
    const pushed: RespondMessage[] = [];
    const fb = fakeBarn();
    const router = createRouter({ bridge: fb.barn, styleOutfitMode: "background", logger: () => {}, styleOutfit: async (req) => (await gate, mockStylist([], 0)(req)) });
    await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }), (m) => pushed.push(m));
    await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }), (m) => pushed.push(m));
    assert.match(pushed[0].properties.text, /^STYLIST UPDATE, not said by the shopper\. Looks are still being built/);
    release();
    await tick();
  });

  it("a run in one call doesn't block the next call", async () => {
    let release!: () => void;
    const gate = new Promise<void>((r) => (release = r));
    const seen: string[] = [];
    const fb = fakeBarn();
    const router = createRouter({ bridge: fb.barn, logger: () => {}, styleOutfit: async (req) => (seen.push(req.conversation_id), req.conversation_id === "old" ? (await gate, mockStylist([], 0)(req)) : mockStylist([], 0)(req)) });
    const first = router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }, "old"));
    await tick();
    const second = await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }, "new"));
    assert.equal(second?.properties.status, "success");
    assert.deepEqual(seen, ["old", "new"]);
    release();
    await first;
  });

  it("an ended call's late looks never reach the board or a later call", async () => {
    let release!: () => void;
    const gate = new Promise<void>((r) => (release = r));
    const ended = new Set<string>();
    const pushed: RespondMessage[] = [];
    const fb = fakeBarn();
    const router = createRouter({
      bridge: fb.barn, styleOutfitMode: "background", logger: () => {},
      isCurrent: (id) => !ended.has(id),
      styleOutfit: async (req) => (await gate, mockStylist([], 0)(req)),
    });
    await router.handle(call("style_outfit", { occasion: "w", budget_usd: 800 }, "take-1"), (m) => pushed.push(m));
    ended.add("take-1");
    release();
    await tick();
    assert.equal(pushed.length, 0, "no STYLIST RESULT for an ended call");
    assert.ok(!fb.calls.some((c) => c[0] === "showLooks"), "old looks stay off the board");
  });

  it("the $10k room is per call, not per page", async () => {
    const seen: RunRequest[] = [];
    const fb = fakeBarn();
    const router = createRouter({ bridge: fb.barn, logger: () => {}, styleOutfit: async (req) => (seen.push(req), mockStylist([], 0)(req)) });
    await router.handle(call("style_outfit", { occasion: "gala", budget_usd: 9000 }, "take-1"));
    await router.handle(call("style_outfit", { occasion: "wedding", budget_usd: 1500 }, "take-2"));
    assert.equal(seen[1].budget_usd, 1500, "take-1's outfit doesn't shrink take-2's room");
    await router.handle(call("style_outfit", { occasion: "dinner", budget_usd: 1500 }, "take-1"));
    assert.equal(seen[2].budget_usd, 1000, "within one call it still counts");
  });
});

describe("router: search", () => {
  it("drops size last when nothing matches", async () => {
    const fb = fakeBarn();
    const real = fb.barn.search.bind(fb.barn);
    fb.barn.search = (f) => (f.size ? [] : real(f));
    const router = createRouter({ bridge: fb.barn, logger: () => {}, styleOutfit: mockStylist([], 0) });
    const r = await router.handle(call("search_products", { query: "linen suit", size: "41X", gender: "men" }));
    const out = r!.properties.output as any;
    assert.ok(out.products.length > 0);
    assert.match(out.note, /dropped size 41X/);
  });
});

describe("captions", () => {
  it("text with no letters or digits doesn't swallow the previous line", () => {
    let lines: CaptionLine[] = [];
    const u = (speech: string) => parseUtterance({ event_type: "conversation.utterance", properties: { role: "user", speech } })!;
    lines = applyUtterance(lines, u("Forty regular."));
    lines = applyUtterance(lines, u("…"));
    assert.deepEqual(lines.map((l) => l.text), ["Forty regular.", "…"]);
  });
});

describe("typed brief", () => {
  it("reads the department only when it's said", () => {
    assert.equal(typedGender("Men's. Wedding in Italy this summer, $1,500, linen suit."), "men");
    assert.equal(typedGender("women's resort wear, $600"), "women");
    assert.equal(typedGender("Ladies brunch outfit"), "women");
    assert.equal(typedGender("Wedding in Italy this summer, $1,500"), undefined);
    assert.equal(typedGender("menswear for a gala"), undefined, "no guessing from other words");
  });
});

describe("stylist client", () => {
  it("stops when the caller aborts (the call ended)", async () => {
    const ctrl = new AbortController();
    const f = (async (url: string, init?: RequestInit) => {
      if (url.endsWith("/api/stylist/run")) return new Response(JSON.stringify({ run_id: "r" }), { status: 202 });
      return new Response(new ReadableStream({ start() {} }), { status: 200 }); // never sends anything
    }) as typeof fetch;
    const run = stylistClient({ baseUrl: "http://x", fetchImpl: f })({ shopper_id: "s", conversation_id: "c", occasion: "o", budget_usd: 1 }, { signal: ctrl.signal });
    setTimeout(() => ctrl.abort(), 20);
    await assert.rejects(run);
  });
});

describe("conversation route limits", () => {
  it("a failed start doesn't use up the cooldown or the call cap", async () => {
    process.env.TAVUS_API_KEY = "test";
    process.env.TAVUS_PAL_ID = "p";
    process.env.AVATAR_CALL_COOLDOWN_MS = "60000";
    process.env.AVATAR_MAX_CALLS = "1";
    const realFetch = globalThis.fetch;
    let fail = true;
    globalThis.fetch = (async () =>
      fail ? new Response("nope", { status: 500 }) : new Response(JSON.stringify({ conversation_id: "c1", conversation_url: "u" }), { status: 200 })) as typeof fetch;
    try {
      const { createConversation } = await import(`../create-conversation.mjs?t=${Date.now()}`);
      await assert.rejects(createConversation(), /500/);
      fail = false;
      assert.deepEqual(await createConversation(), { conversation_id: "c1", conversation_url: "u" }, "retry right away is allowed");
      await assert.rejects(createConversation(), /limit|wait/, "a real success does count");
    } finally {
      globalThis.fetch = realFetch;
    }
  });
});
