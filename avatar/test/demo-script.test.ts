// The demo script (pal/demo-script.md), step by step: the tool calls Sasha should make at each
// line, run through the real router against a fake Barn over the real catalog. If the catalog,
// the tool schema or the router drifts from the script, this fails before the recording does.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { byteLength, createRouter, MAX_APP_MESSAGE_BYTES, type ToolCallMessage, type ToolResultMessage } from "../router";
import { mockStylist, parseBudget } from "../style-outfit";
import type { RunRequest } from "../types";
import { fakeBarn } from "./fake-barn";

const SCRIPT = readFileSync(new URL("../../pal/demo-script.md", import.meta.url), "utf8");
const SHOPPER = JSON.parse(readFileSync(new URL("../../pal/demo-shopper.json", import.meta.url), "utf8"));

let n = 0;
const call = (name: string, args: Record<string, unknown>): ToolCallMessage => ({
  message_type: "conversation",
  event_type: "conversation.tool_call",
  conversation_id: "demo-call",
  properties: { name, arguments: JSON.stringify(args), tool_call_id: `demo_${++n}` },
});

function success(r: ToolResultMessage | null): any {
  assert.ok(r);
  assert.ok(byteLength(r) < MAX_APP_MESSAGE_BYTES, `${byteLength(r)}B`);
  assert.equal(r.properties.status, "success", JSON.stringify(r.properties.output));
  return r.properties.output;
}

describe("pal/demo-script.md", () => {
  it("still names the ids, sizes and phrases this test relies on", () => {
    for (const s of ["MW-0374", "40R", "tuxedo outfit", "linen suit", "$1,500", "too formal"]) assert.ok(SCRIPT.includes(s), s);
    assert.equal(SHOPPER.name, "Alex");
    assert.equal(SHOPPER.sizes.jacket, "40R");
  });

  it("runs steps 2–10 end to end", async () => {
    const fb = fakeBarn();
    const runs: RunRequest[] = [];
    const router = createRouter({
      bridge: fb.barn,
      styleOutfit: async (req) => (runs.push(req), mockStylist(["MW-0374"], 0)(req)),
      logger: () => {},
    });

    // 2. "I've got a wedding in Italy this summer." -> search with style Formal; the shop filters.
    let out = success(await router.handle(call("search_products", { style: "Formal" })));
    assert.ok(out.products.length > 0);
    assert.deepEqual(fb.calls.at(-1), ["search", [{ style: "Formal" }]]);

    // 3. "...about fifteen hundred dollars, and I was thinking a tuxedo." -> "tuxedo outfit".
    out = success(await router.handle(call("search_products", { query: "tuxedo outfit" })));
    assert.equal(out.products.length, 5, "barn.js returns the top 5 of the 10 tuxedos on the page");
    for (const p of out.products) assert.match(p.title, /tuxedo/i);

    // 4. "Sure, show me." -> "linen suit", then open MW-0374 ($595).
    out = success(await router.handle(call("search_products", { query: "linen suit", size: SHOPPER.sizes.jacket })));
    assert.deepEqual(out.products.map((p: any) => p.id), ["MW-0374"]);
    out = success(await router.handle(call("show_product", { product_id: "MW-0374" })));
    assert.equal(out.price, 595);
    assert.ok(out.sizes_in_stock.includes("40R"), "Sasha checks Alex's size against this list (Mike #4)");

    // 5–6. "Build me a full look around it." -> style_outfit; three looks on the board.
    const brief = { occasion: "summer wedding in Italy", budget_usd: 1500, notes: "Chose the MW-0374 linen suit over a tuxedo. Jacket 40R, waist 32, shoe 10." };
    out = success(await router.handle(call("style_outfit", { ...brief, response_to_user: "Working on it." })));
    assert.equal(out.looks.length, 3);
    assert.ok(out.spoken_summary);
    assert.deepEqual(runs[0], { shopper_id: "demo-shopper", conversation_id: "demo-call", ...brief });
    assert.ok(fb.calls.some((c) => c[0] === "showLooks"));

    // 7. "Those shoes are too formal." -> same occasion and budget, swap only the shoes.
    out = success(await router.handle(call("style_outfit", { ...brief, rework_slot: "Shoes", rework_feedback: "too formal" })));
    assert.deepEqual(runs[1].rework, { slot: "Shoes", feedback: "too formal" });
    assert.equal(runs[1].budget_usd, 1500, "a rework doesn't count as a second outfit");
    assert.equal(out.budget_note, undefined);

    // 8. "I'll take the suit." -> open it again.
    success(await router.handle(call("show_product", { product_id: "MW-0374" })));

    // 9. "Yes, add it." -> add_to_bag MW-0374 40R; the bag updates.
    out = success(await router.handle(call("add_to_bag", { product_id: "MW-0374", size: "40R" })));
    assert.deepEqual(out.added, { product_id: "MW-0374", size: "40R" });
    assert.equal(out.bag_count, 1);
    assert.equal(out.bag_total_usd, 595);
    assert.equal(out.left_under_limit_usd, 9405);

    // (Sasha offers a casual second outfit.) If Alex took it with a huge budget, the $10,000
    // limit covers both outfits: 10,000 - 1,500 for the wedding look = 8,500 left.
    out = success(await router.handle(call("style_outfit", { occasion: "casual days on the trip", budget_usd: 9500 })));
    assert.equal(runs[2].budget_usd, 8500);
    assert.match(out.budget_note, /8500/);

    // 10. "Next time." -> nothing; the demo stops before payment. No checkout tool exists.
    const r = await router.handle(call("checkout", {}));
    assert.equal(r?.properties.status, "error");
  });

  it("video-fail fallback: the typed brief from the script carries its budget", () => {
    assert.equal(parseBudget("Wedding in Italy this summer, $1,500, linen suit."), 1500);
  });
});
