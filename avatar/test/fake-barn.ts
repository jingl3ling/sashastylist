// Fake window.Barn with site/barn.js semantics over the real catalog (data/catalog/products.json).
import { readFileSync } from "node:fs";
import type { Barn, BarnBag } from "../types";

export const CATALOG: any[] = JSON.parse(readFileSync(new URL("../../data/catalog/products.json", import.meta.url), "utf8"));
const byId = Object.fromEntries(CATALOG.map((p) => [p.id, p]));

/** Fake window.Barn with barn.js semantics, recording every call. */
export function fakeBarn() {
  const calls: Array<[string, unknown[]]> = [];
  let bag: Array<{ id: string; size: string; color: string; qty: number }> = [];
  let hash = "";
  const brief = (p: any) => ({ id: p.id, title: p.title, brand: p.brand, price: p.simulated.price });
  const getBag = (): BarnBag => {
    const items = bag.map((x) => ({ ...x, title: byId[x.id].title, price: byId[x.id].simulated.price }));
    return { items, count: items.reduce((a, x) => a + x.qty, 0), total: items.reduce((a, x) => a + x.qty * x.price, 0) };
  };
  const barn: Barn = {
    search(f) {
      calls.push(["search", [f]]);
      hash = "#/shop";
      const words = (f.q ?? "").toLowerCase().split(/\s+/).filter(Boolean);
      return CATALOG.filter(
        (p) =>
          (!f.max_price || p.simulated.price <= f.max_price) &&
          (!f.style || p.style.toLowerCase() === f.style.toLowerCase()) &&
          (!f.gender || (p.gender ?? "men") === f.gender) && // no gender field = men's-only catalog
          (!f.size || p.simulated.inventory[f.size] > 0 || p.size_type === "one") &&
          (!f.color || (p.colors.join(" ") + p.title).toLowerCase().includes(f.color.toLowerCase())) &&
          words.every((w) => (p.title + " " + p.brand + " " + p.subcategory + " " + p.colors.join(" ")).toLowerCase().includes(w)),
      )
        .slice(0, 5) // barn.js returns the top 5; the page shows them all
        .map(brief);
    },
    openProduct(id) {
      calls.push(["openProduct", [id]]);
      const p = byId[id];
      if (!p) return { ok: false, error: `No product with id ${id}` };
      hash = `#/product/${id}`;
      return { ok: true, ...brief(p), colors: p.colors, sizes: p.sizes.filter((s: string) => p.simulated.inventory[s] > 0) };
    },
    addToBag(id, size, color) {
      calls.push(["addToBag", [id, size, color]]);
      const p = byId[id];
      if (!p) return { ok: false, error: `No product with id ${id}`, count: getBag().count };
      const sz = p.size_type === "one" ? p.sizes[0] : size;
      if (!sz) return { ok: false, error: "Which size?", count: getBag().count };
      if (!(p.simulated.inventory[sz] > 0)) return { ok: false, error: `Size ${sz} is out of stock`, count: getBag().count };
      bag.push({ id, size: sz, color: color ?? p.colors[0], qty: 1 });
      return { ok: true, error: null, count: getBag().count };
    },
    getBag,
    showLooks(r) {
      calls.push(["showLooks", [r]]);
      return { ok: true };
    },
    addFeedStep(s) {
      calls.push(["addFeedStep", [s]]);
      return { ok: true };
    },
    resetFeed() {
      calls.push(["resetFeed", []]);
      return { ok: true };
    },
  };
  return { barn, calls, hash: () => hash, setBag: (b: typeof bag) => (bag = b) };
}

