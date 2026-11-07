// window.Barn: the store API that Soham's tool router (site/avatar.js) calls.
// Contract: "Store API" in the team plan. Keep results small; avatar tool results must stay under 4 KB.
// Loaded after app.js, so it can use app.js globals: P, L, byId, DEPTS, title, slug, filtersFrom, matches, sortProducts, CATALOG.
(() => {
  const BAG_KEY = "barn.bag", BAG_LIMIT = 10000, LOOKS_KEY = "barn.looks";
  const loadBag = () => { try { return JSON.parse(localStorage.getItem(BAG_KEY)) || []; } catch { return []; } };
  const saveBag = (b) => { try { localStorage.setItem(BAG_KEY, JSON.stringify(b)); } catch {} };
  const brief = (p) => ({ id: p.id, title: title(p.title), brand: p.brand, price: p.simulated.price });
  const lower = (v) => String(v).trim().toLowerCase();

  // Voice arguments are loose ("suits", "formal", "mack weldon"). Map them onto real filter values.
  const pick = (v, options) => options.find((o) => lower(o) === lower(v)) || options.find((o) => lower(o).includes(lower(v)) || lower(v).includes(lower(o)));
  const resolveDept = (v) => pick(v, Object.keys(DEPTS)) || Object.keys(DEPTS).find((d) => pick(v, DEPTS[d]));
  const resolve = {
    dept: resolveDept,
    style: (v) => pick(v, [...new Set(P.map((p) => p.style))]),
    brand: (v) => pick(v, [...new Set(P.map((p) => p.brand))]),
  };

  const Barn = {
    ready: null,
    // Survives a reload during the demo (this tab only).
    lastLooks: (() => { try { return JSON.parse(sessionStorage.getItem(LOOKS_KEY)); } catch { return null; } })(),
    prevLooks: null,

    // Sets the shop URL so the page filters live, and returns the top 5 matches in page order.
    // size: pass the shopper's size for the garment being searched (jacket "40R", shirt "15.5 / 32-33", waist "32", shoe "10").
    search(filters = {}) {
      const n = new URLSearchParams(), loose = [];
      for (const k of ["q", "dept", "style", "brand", "color", "max_price", "size", "sale"]) {
        const v = filters[k];
        if (v === undefined || v === null || v === "" || v === false) continue;
        if (k === "sale") n.set("sale", "1");
        else if (resolve[k]) { const r = resolve[k](v); r ? n.set(k, r) : loose.push(v); } // unknown dept/style/brand becomes search text
        else n.set(k, String(v));
      }
      if (loose.length) n.set("q", [n.get("q"), ...loose].filter(Boolean).join(" "));
      location.hash = "#/shop" + (String(n) ? "?" + n : "");
      const f = filtersFrom(n);
      return sortProducts(P.filter((p) => matches(p, f)), f.sort).slice(0, 5).map(brief);
    },

    // Look up a product without changing the page (Soham's $10,000 check uses the price).
    getProduct(id) {
      const p = byId[id];
      return p ? { ok: true, ...brief(p) } : { ok: false, error: `No product with id ${id}` };
    },

    openProduct(id) {
      const p = byId[id];
      if (!p) return { ok: false, error: `No product with id ${id}` };
      location.hash = "#/product/" + p.id;
      return { ok: true, ...brief(p), colors: p.colors, sizes: p.sizes.filter((s) => p.simulated.inventory[s] > 0) };
    },

    openLook(s) {
      const l = L.find((x) => slug(x.name) === s) || L.find((x) => slug(x.name).includes(slug(String(s))));
      if (!l) return { ok: false, error: `No look called ${s}` };
      location.hash = "#/looks/" + slug(l.name);
      return { ok: true, slug: slug(l.name), name: l.name, pieces: l.items.length };
    },

    addToBag(id, size, color) {
      const p = byId[id];
      if (!p) return { ok: false, error: `No product with id ${id}`, count: count() };
      const inv = p.simulated.inventory;
      const sz = p.size_type === "one" ? p.sizes[0] : size && pick(size, p.sizes);
      if (!sz) return { ok: false, error: `Which size? In stock: ${p.sizes.filter((s) => inv[s] > 0).join(", ")}`, count: count() };
      if (!(inv[sz] > 0)) return { ok: false, error: `Size ${sz} is out of stock`, count: count() };
      const col = color ? pick(color, p.colors) : p.colors[0];
      if (!col) return { ok: false, error: `Colors available: ${p.colors.join(", ")}`, count: count() };
      const bag = loadBag(), line = bag.find((x) => x.id === p.id && x.size === sz && x.color === col);
      if (line && line.qty >= inv[sz]) return { ok: false, error: `Only ${inv[sz]} left in size ${sz}`, count: count() };
      // The real spending guardrail (the avatar's prompt only tracks a rough total).
      if (Barn.getBag().total + p.simulated.price > BAG_LIMIT) return { ok: false, error: "That would take the bag over the $10,000 limit", count: count() };
      line ? line.qty++ : bag.push({ id: p.id, size: sz, color: col, qty: 1 });
      saveBag(bag);
      dispatchEvent(new CustomEvent("barn:bag", { detail: { action: "add", id: p.id, size: sz, color: col } }));
      return { ok: true, error: null, count: count() };
    },

    // For the bag drawer, not the avatar. qty 0 removes the line.
    setQty(id, size, color, qty) {
      const bag = loadBag(), line = bag.find((x) => x.id === id && x.size === size && x.color === color), p = byId[id];
      if (!line || !p) return { ok: false, error: "That item isn't in your bag" };
      const max = p.simulated.inventory[size] || 0;
      if (qty > max) return { ok: false, error: `Only ${max} left in size ${size}` };
      if (Barn.getBag().total + (qty - line.qty) * p.simulated.price > BAG_LIMIT) return { ok: false, error: "That would take the bag over the $10,000 limit" };
      qty > 0 ? (line.qty = qty) : bag.splice(bag.indexOf(line), 1);
      saveBag(bag);
      dispatchEvent(new CustomEvent("barn:bag", { detail: { action: "set", id, size, color, qty } }));
      return { ok: true, count: count() };
    },

    getBag() {
      const items = loadBag().filter((x) => byId[x.id]).map((x) => ({ ...x, title: title(byId[x.id].title), price: byId[x.id].simulated.price }));
      return { items, count: items.reduce((a, x) => a + x.qty, 0), total: Math.round(items.reduce((a, x) => a + x.qty * x.price, 0) * 100) / 100 };
    },

    // Opens the outfit board (#/stylist, site/board.js) with the stylist's result. The previous result is kept so a rework can mark what changed.
    showLooks(result) {
      if (!result?.looks?.length) return { ok: false, error: "No looks to show" };
      Barn.prevLooks = Barn.lastLooks;
      Barn.lastLooks = result;
      try { sessionStorage.setItem(LOOKS_KEY, JSON.stringify(result)); } catch {}
      dispatchEvent(new CustomEvent("barn:looks", { detail: result }));
      if (location.hash === "#/stylist") stylistPage(); else location.hash = "#/stylist";
      return { ok: true, looks: result.looks.length };
    },

    // One row per agent step. Same id again updates that row. status: "start" | "end" | "blocked".
    addFeedStep({ id, label, status = "start" } = {}) {
      const list = document.getElementById("feed-slot");
      if (!list || !id) return { ok: false };
      let li = list.querySelector(`[data-id="${CSS.escape(String(id))}"]`);
      if (!li) { li = document.createElement("li"); li.dataset.id = id; list.append(li); }
      if (label) li.textContent = label;
      li.dataset.status = status;
      list.closest(".stylist-feed").hidden = false;
      return { ok: true };
    },

    resetFeed() {
      const list = document.getElementById("feed-slot");
      if (list) { list.replaceChildren(); list.closest(".stylist-feed").hidden = true; }
      return { ok: true };
    },
  };
  const count = () => Barn.getBag().count;

  Barn.ready = CATALOG.then(() => { if (!P.length) throw new Error("The catalog did not load"); return Barn; });
  window.Barn = Barn;

  // Stylist panel: open/close on narrow screens, and the typed-brief fallback.
  const panel = document.getElementById("stylist"), toggle = document.getElementById("stylist-toggle");
  const setOpen = (open) => { panel.toggleAttribute("data-open", open); toggle.setAttribute("aria-expanded", open); };
  toggle.addEventListener("click", () => setOpen(!panel.hasAttribute("data-open")));
  document.getElementById("stylist-close").addEventListener("click", () => setOpen(false));
  // Whoever starts styling runs (Soham's router or Jing's client) listens for "barn:brief".
  document.getElementById("stylist-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("stylist-input"), text = input.value.trim();
    if (!text) return;
    dispatchEvent(new CustomEvent("barn:brief", { detail: { text } }));
    input.value = "";
  });
})();
