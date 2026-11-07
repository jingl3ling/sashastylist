// ?avatar_debug=1 on the site: buttons that fire mocked Tavus tool calls through the real
// router and window.Barn, plus a log of every result and its size. No call minutes used.
import type { RouterLogEntry, ToolCallMessage, ToolRouter } from "./router";

let n = 0;
export function toolCall(name: string, args: Record<string, unknown>, conversation_id = "debug-conversation"): ToolCallMessage {
  return {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id,
    properties: { name, arguments: JSON.stringify(args), tool_call_id: `debug_${Date.now()}_${++n}` },
  };
}

export const PRESETS: Array<[string, () => ToolCallMessage]> = [
  ["search: linen", () => toolCall("search_products", { query: "linen" })],
  ["search: suits ≤ $600", () => toolCall("search_products", { department: "suits", max_price: 600 })],
  ["search: navy formal", () => toolCall("search_products", { color: "navy", style: "formal" })],
  ["show MW-0332", () => toolCall("show_product", { product_id: "MW-0332" })],
  ["add MW-0332 M navy", () => toolCall("add_to_bag", { product_id: "MW-0332", size: "M", color: "navy" })],
  ["add MW-0332 XL (sold out)", () => toolCall("add_to_bag", { product_id: "MW-0332", size: "XL" })],
  ["add MW-0333 38S ×1 (limit test)", () => toolCall("add_to_bag", { product_id: "MW-0333", size: "38S" })],
  ["style: Italy wedding $800", () => toolCall("style_outfit", { occasion: "summer wedding in Italy", budget_usd: 800, response_to_user: "On it." })],
  [
    "style rework: shoes too formal",
    () => toolCall("style_outfit", { occasion: "summer wedding in Italy", budget_usd: 800, rework_slot: "Shoes", rework_feedback: "too formal" }),
  ],
  ["style: $50k (capped)", () => toolCall("style_outfit", { occasion: "gala", budget_usd: 50000 })],
  ["style: no budget", () => toolCall("style_outfit", { occasion: "gala" })],
  ["bad id", () => toolCall("show_product", { product_id: "nope" })],
  ["unknown tool", () => toolCall("checkout", {})],
];

export function mountDebugPanel(router: ToolRouter, log: RouterLogEntry[]) {
  const box = document.createElement("div");
  box.style.cssText =
    "position:fixed;left:8px;bottom:8px;z-index:9999;width:380px;max-height:60vh;overflow:auto;background:#fff;color:#111;border:1px solid #999;border-radius:8px;padding:8px;font:12px system-ui,sans-serif;box-shadow:0 4px 16px #0003";
  box.innerHTML = `<b>Avatar debug</b> <button data-x>clear</button><div data-btns style="display:flex;flex-wrap:wrap;gap:4px;margin:6px 0"></div><div data-log></div>`;
  const btns = box.querySelector<HTMLDivElement>("[data-btns]")!;
  const out = box.querySelector<HTMLDivElement>("[data-log]")!;
  let shown = 0;
  const draw = () => {
    for (; shown < log.length; shown++) {
      const e = log[shown];
      const row = document.createElement("div");
      row.style.cssText = "border-top:1px solid #eee;padding:3px 0;white-space:pre-wrap;word-break:break-word";
      if (e.dir === "in") row.textContent = `→ ${e.tool} ${JSON.stringify(e.args)}`;
      else if (e.dir === "out") {
        row.textContent = `← ${e.tool} ${e.status} ${e.bytes}B ${e.ms}ms${e.trimmed.length ? ` trimmed: ${e.trimmed.join(", ")}` : ""}\n${JSON.stringify(e.output)}`;
        if (e.status === "error") row.style.background = "#fde8e8";
      } else row.textContent = `ℹ ${e.text}`;
      out.prepend(row);
    }
  };
  for (const [label, make] of PRESETS) {
    const b = document.createElement("button");
    b.textContent = label;
    b.onclick = async () => {
      await router.handle(make(), (m) => console.log("[avatar] pushed later", m));
      draw();
    };
    btns.append(b);
  }
  box.querySelector<HTMLButtonElement>("[data-x]")!.onclick = () => {
    out.replaceChildren();
    shown = log.length;
  };
  setInterval(draw, 500);
  document.body.append(box);
}
