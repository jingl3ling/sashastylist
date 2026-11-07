// window.Barn: the store API that Soham's tool router (site/avatar.js) calls.
// Contract: "Store API" in the team plan. Keep results small; avatar tool results must stay under 4 KB.
// Loaded after app.js, so it can use app.js globals: P, L, byId, DEPTS, title, slug, filtersFrom, matches, sortProducts, CATALOG.
(() => {
  // A common size that's in stock, or the middle of what's left. Keeps a demo moving without size questions.
  const COMMON_SIZES = ["40R", "40", "L", "M", "L/XL", "S/M", "32", "32x32", "10", "10D", "15.5", "One Size"];
  const defaultSize = (p) => {
    const inStock = p.sizes.filter((s) => p.simulated.inventory[s] > 0);
    const waist = inStock.find((s) => /^32\b|^32W/.test(s));
    if (waist && (p.size_type === "waist" || /pant|trouser|chino|short|jean/i.test(p.subcategory))) return waist;
    return COMMON_SIZES.find((s) => inStock.includes(s)) ?? inStock[Math.floor(inStock.length / 2)];
  };

  const BAG_KEY = "barn.bag", BAG_LIMIT = 10000, LOOKS_KEY = "barn.looks";
  const loadBag = () => { try { return JSON.parse(localStorage.getItem(BAG_KEY)) || []; } catch { return []; } };
  const saveBag = (b) => { try { localStorage.setItem(BAG_KEY, JSON.stringify(b)); } catch {} };
  const brief = (p) => ({ id: p.id, title: title(p.title), brand: p.brand, price: p.simulated.price });
  const lower = (v) => String(v).trim().toLowerCase();

  // Voice arguments are loose ("suits", "formal", "mack weldon"). Map them onto real filter values.
  const pick = (v, options) => options.find((o) => lower(o) === lower(v)) || options.find((o) => lower(o).includes(lower(v)) || lower(v).includes(lower(o)));
  // Departments differ by gender (DEPTS for men, DEPTS_W for women); with no gender given, try men then women.
  const resolveDept = (v, g) => { for (const m of g ? [deptsFor(g)] : [DEPTS, DEPTS_W]) { const d = pick(v, Object.keys(m)) || Object.keys(m).find((k) => pick(v, m[k])); if (d) return d; } };
  const gender = (v) => { const s = lower(v); return /^(w|women|womens|women's|female|ladies)$/.test(s) ? "women" : /^(m|men|mens|men's|male)$/.test(s) ? "men" : null; };
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
    // gender: "men" or "women" limits results to that department (also accepted as g).
    search(filters = {}) {
      const n = new URLSearchParams(), loose = [];
      const g = gender(filters.gender ?? filters.g ?? "");
      if (g) n.set("g", g);
      for (const k of ["q", "dept", "style", "brand", "color", "max_price", "size", "sale"]) {
        const v = filters[k];
        if (v === undefined || v === null || v === "" || v === false) continue;
        if (k === "sale") n.set("sale", "1");
        else if (resolve[k]) { const r = resolve[k](v, g); r ? n.set(k, r) : loose.push(v); } // unknown dept/style/brand becomes search text
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

    // size is optional: without one, or if it's sold out, the bag uses a common in-stock size.
    addToBag(id, size, color) {
      const p = byId[id];
      if (!p) return { ok: false, error: `No product with id ${id}`, count: count() };
      const inv = p.simulated.inventory;
      const asked = p.size_type === "one" ? p.sizes[0] : size && pick(size, p.sizes);
      const sz = asked && inv[asked] > 0 ? asked : defaultSize(p);
      if (!sz) return { ok: false, error: "That item is out of stock", count: count() };
      const col = color ? pick(color, p.colors) : p.colors[0];
      if (!col) return { ok: false, error: `Colors available: ${p.colors.join(", ")}`, count: count() };
      const bag = loadBag(), line = bag.find((x) => x.id === p.id && x.size === sz && x.color === col);
      if (line && line.qty >= inv[sz]) return { ok: false, error: `Only ${inv[sz]} left in size ${sz}`, count: count() };
      // The real spending guardrail (the avatar's prompt only tracks a rough total).
      if (Barn.getBag().total + p.simulated.price > BAG_LIMIT) return { ok: false, error: "That would take the bag over the $10,000 limit", count: count() };
      line ? line.qty++ : bag.push({ id: p.id, size: sz, color: col, qty: 1 });
      saveBag(bag);
      dispatchEvent(new CustomEvent("barn:bag", { detail: { action: "add", id: p.id, size: sz, color: col } }));
      return { ok: true, error: null, count: count(), size: sz, color: col };
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
      Barn.stopFeed("end"); // the run finished: any step still spinning is done
      if (location.hash === "#/stylist") stylistPage(); else location.hash = "#/stylist";
      return { ok: true, looks: result.looks.length };
    },

    // Agent steps, one row per distinct label: the same id again updates its step, and a new step with a label
    // already shown joins that row with a count ("Searching the catalog ×7") instead of repeating it.
    // A row shows "start" while any of its steps runs, "blocked" if any is blocked, else "end".
    addFeedStep({ id, label, status = "start" } = {}) {
      const list = document.getElementById("feed-slot");
      if (!list || !id) return { ok: false };
      id = String(id);
      let row = feed.byId.get(id);
      if (!row) {
        const key = String(label || id).trim();
        row = feed.byLabel.get(key);
        if (!row) {
          row = { key, steps: new Map(), li: document.createElement("li") };
          feed.byLabel.set(key, row);
          list.append(row.li);
        }
        feed.byId.set(id, row);
      }
      row.steps.set(id, status);
      // A run-level failure (Soham's typed-brief path posts it as id "error") means nothing else is still running.
      if (id === "error" && status === "blocked") Barn.stopFeed();
      paintRow(row);
      list.closest(".stylist-feed").hidden = false;
      return { ok: true };
    },

    // Marks every step still running as stopped (after a failed or abandoned run), so no spinner keeps claiming work.
    stopFeed(to = "stopped") {
      for (const row of feed.byLabel.values()) {
        let changed = false;
        for (const [k, v] of row.steps) if (v === "start") { row.steps.set(k, to); changed = true; }
        if (changed) paintRow(row);
      }
      return { ok: true };
    },

    resetFeed() {
      const list = document.getElementById("feed-slot");
      feed.byId.clear(); feed.byLabel.clear();
      if (list) { list.replaceChildren(); list.closest(".stylist-feed").hidden = true; }
      return { ok: true };
    },
  };
  const count = () => Barn.getBag().count;
  const feed = { byId: new Map(), byLabel: new Map() }; // activity feed rows (see addFeedStep)
  // Status mark: blocked if any step is blocked, else running if any runs, else stopped if any was cut off, else done.
  function paintRow(row) {
    const states = [...row.steps.values()], n = row.steps.size;
    row.li.dataset.status = states.includes("blocked") ? "blocked" : states.includes("start") ? "start" : states.includes("stopped") ? "stopped" : "end";
    // Label and count share one element: the row is a two-column grid (status mark, text).
    const text = document.createElement("span");
    text.textContent = row.key;
    if (n > 1) { const c = document.createElement("span"); c.className = "feed-count"; c.textContent = ` ×${n}`; text.append(c); }
    row.li.replaceChildren(text);
  }

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
