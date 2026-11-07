const DATA = "../data/catalog/";
// Photos (718 MB) are not in this repo; they load from Mike's live store.
const IMG = "https://mhalpert.github.io/mens-fashion-barn/data/catalog/";
const DEPTS = {
  "Suits & tuxedos": ["Tuxedos", "Suits", "Suit Separates", "Sport Coats"],
  "Shirts & tees": ["Dress Shirts", "Shirts", "Polos", "Tees"],
  "Knits & sweats": ["Sweaters", "Hoodies & Sweatshirts"],
  "Trousers & denim": ["Trousers", "Denim"],
  "Shorts & swim": ["Shorts", "Swim"],
  "Outerwear": ["Outerwear"],
  "Shoes": ["Footwear"],
  "Ties & formal extras": ["Neckwear", "Formal Accessories"],
  "Accessories": ["Belts", "Socks", "Headwear", "Accessories", "Underwear"],
};
// Women's departments (from Mike's Fashion Barn update). Every product has gender "men" or "women".
const DEPTS_W = {
  "Dresses": ["Dresses"], "Tops": ["Tops"], "Bottoms": ["Bottoms"], "Outerwear": ["Outerwear"], "Activewear": ["Activewear"],
  "Swim": ["Swim"], "Shoes": ["Shoes"], "Bags": ["Bags"], "Jewelry & accessories": ["Jewelry", "Accessories"],
};
const THEMES = {
  "formal-wedding": ["Formal wedding", "Black tie, three ways, down to the last piece."],
  "beach-wedding": ["Beach wedding", "Light layers for a ceremony on the sand."],
  "beach-vacation": ["Beach vacation", "Packed for the water, and for dinner after."],
  "business-casual": ["The office", "Everyday workwear that takes no thought in the morning."],
};
const TILES = {
  women: [["Dresses", "Jasmine Fringe"], ["Shoes", "Perfect Emma|Daisie"], ["Bags", "Pesce Raffia"], ["Swim", "Alma One Piece"]],
  men: [["Suits & tuxedos", "Essential Beige Suit"], ["Shirts & tees", "Blue Oxford Shirt"], ["Shoes", "Larson Weejuns"], ["Shorts & swim", "Linen Camp Shirt \\| Light Blue"]],
};
const PAGE = 36;
const main = document.getElementById("main");
let P = [], L = [], byId = {}, shown = PAGE;

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// Mike's site now serves every photo as .webp (same folders and names); our catalog still lists .png/.jpg.
const img = (p, i = 0) => IMG + p.images[Math.min(i, p.images.length - 1)].replace(/\.(png|jpe?g)$/i, ".webp");
// "$1,453" and "$740.50": thousands separators, cents only when there are cents.
const money = (n) => "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const deptsFor = (g) => (g === "women" ? DEPTS_W : DEPTS);
const deptOf = (p) => { const m = deptsFor(p.gender); return Object.keys(m).find((d) => m[d].includes(p.category)); };
function title(t) {
  t = t.replace(/\s(\||::|~)\s/g, ", ");
  if (t === t.toUpperCase()) t = t.toLowerCase().replace(/(^|[\s&(-])([a-z])/g, (m, a, b) => a + b.toUpperCase());
  return t;
}
const find = (rx, g) => P.find((p) => (!g || p.gender === g) && new RegExp(rx, "i").test(p.title));
const priceHtml = (p) => { const s = p.simulated; return `<span class="price">${money(s.price)}${s.on_sale ? ` <s>${money(s.compare_at_price)}</s>` : ""}</span>`; };
const card = (p) => `<a class="card" href="#/product/${p.id}">
  <div class="card-pic"><img src="${img(p)}" alt="${esc(title(p.title))}" loading="lazy"><img src="${img(p, 1)}" alt="" loading="lazy"></div>
  <div class="card-brand">${esc(p.brand)}</div><div class="card-title">${esc(title(p.title))}</div>${priceHtml(p)}</a>`;
const lookItems = (l) => l.items.map((i) => byId[i.product_id]);
const lookTotal = (l) => lookItems(l).reduce((a, p) => a + p.simulated.price, 0);
const lookLead = (l) => lookItems(l)[0];

function home() {
  const a = lookLead(L.find((l) => l.name === "Emerald Satin") || L[0]), b = find("White Dinner Jacket Tuxedo Outfit") || P[0];
  const print = (p) => `<a class="mat" href="#/product/${p.id}"><div class="mat-pic"><img src="${img(p)}" alt="${esc(title(p.title))}"></div><div class="mat-cap"><span>${esc(p.brand)}</span></div></a>`;
  const tiles = (g) => TILES[g].map(([d, rx]) => { const p = find(rx, g) || P.find((x) => x.gender === g && deptOf(x) === d); const n = P.filter((x) => x.gender === g && deptOf(x) === d).length;
    return `<a class="dept" href="#/shop?g=${g}&dept=${encodeURIComponent(d)}"><div class="dept-pic"><img src="${img(p)}" alt="" loading="lazy"></div><h3>${esc(d)}</h3><p>${n} pieces</p></a>`; }).join("");
  main.innerHTML = `
  <div class="container hero">
    <div><h1>Everything you wear, under one roof.</h1>
      <p class="lead">Gowns, tuxedos, swimsuits and everything between, picked by hand.</p>
      <div class="hero-act"><a class="btn" href="#/shop?g=women">Shop women</a><a class="btn" href="#/shop?g=men">Shop men</a><a class="link" href="#/looks">See the looks</a></div></div>
    <div class="mats">${print(a)}${print(b)}</div>
  </div>
  <section class="sec"><div class="container">
    <div class="sec-head"><h2>What’s the occasion?</h2><p>Twenty-four complete outfits, each one ready to wear from head to toe.</p></div>
    <div class="chips who" role="group" aria-label="Show outfits for"><button class="chip" data-g="women" aria-pressed="true">Women</button><button class="chip" data-g="men" aria-pressed="false">Men</button></div>
    <div class="rail-wrap"><div class="rail" role="tablist" aria-label="Occasions">${Object.keys(THEMES).map((k, i) =>
      `<button class="strip" role="tab" id="tab-${k}" aria-selected="${i === 0}" aria-controls="panel" data-k="${k}"><span>${esc(THEMES[k][0])}</span></button>`).join("")}</div>
      <div id="panel" role="tabpanel" class="panel"></div></div>
  </div></section>
  <section class="sec"><div class="container">
    <div class="sec-head"><h2>Walk the aisles</h2><p>${P.length} pieces, from streetwear to black tie.</p></div>
    <h3 class="aisle">Women</h3><div class="depts">${tiles("women")}</div>
    <h3 class="aisle">Men</h3><div class="depts">${tiles("men")}</div>
  </div></section>`;
  let who = "women", cur = "formal-wedding";
  const show = (k) => {
    cur = k;
    const ls = L.filter((l) => l.theme === k && l.gender === who), l = ls[0], lead = lookLead(l);
    document.getElementById("panel").innerHTML = `<a class="panel-pic" href="#/looks/${slug(l.name)}"><img src="${img(lead)}" alt="${esc(l.name)}"></a>
      <div><h3>${esc(THEMES[k][0])}</h3><p>${esc(THEMES[k][1])}</p>
      <ul class="panel-list">${ls.map((x) => `<li><a href="#/looks/${slug(x.name)}"><span>${esc(x.name)}</span><span>${x.items.length} pieces</span></a></li>`).join("")}</ul></div>`;
    document.querySelectorAll(".strip").forEach((b) => b.setAttribute("aria-selected", b.dataset.k === k));
  };
  document.querySelectorAll(".who .chip").forEach((b) => b.addEventListener("click", () => { who = b.dataset.g; document.querySelectorAll(".who .chip").forEach((x) => x.setAttribute("aria-pressed", x === b)); show(cur); }));
  document.querySelectorAll(".strip").forEach((b) => b.addEventListener("click", () => show(b.dataset.k)));
  document.querySelector(".rail").addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const t = [...document.querySelectorAll(".strip")], i = t.indexOf(document.activeElement), n = t[(i + (e.key === "ArrowRight" ? 1 : t.length - 1)) % t.length];
    n.focus(); show(n.dataset.k);
  });
  show(cur);
}

// Filtering and sorting live outside shop() so window.Barn (barn.js) gets exactly what the page shows.
const filtersFrom = (q) => ({ g: q.get("g"), dept: q.get("dept"), style: q.get("style"), brand: q.get("brand"), color: q.get("color"), max_price: q.get("max_price"), size: q.get("size"), sale: q.get("sale"), q: q.get("q"), sort: q.get("sort") || "featured" });
// In stock in the shopper's size. Sizes differ by category: "40R", "15.5 / 32-33", "10" (shoes); a bare waist like "32" also matches "32x30" and "32W | 33-35L".
const normSize = (s) => String(s).toLowerCase().replace(/\s+/g, "");
function inSize(p, want) {
  if (p.size_type === "one") return true;
  const w = normSize(want), waist = /^\d+$/.test(w) ? new RegExp(`^${w}[wx]`) : null;
  return p.sizes.some((s) => p.simulated.inventory[s] > 0 && (normSize(s) === w || (waist && waist.test(normSize(s)))));
}
// Search words. Each entry maps what shoppers say to what the catalog calls it; any listed term counts.
const SYNONYMS = [
  [/\b(swim shorts?|swim trunks?|bathing suits?|swim ?suits?|swimwear|board ?shorts?|trunks)\b/g, ["swim"]],
  [/\b(tennis shoes?|running shoes?|trainers?|kicks|runners)\b/g, ["sneakers"]],
  [/\b(dress shoes?)\b/g, ["oxford", "derby", "loafers", "dress shoe"]],
  [/\b(flip ?flops?|slides)\b/g, ["sandals", "flip flop"]],
  [/\b(slacks|dress pants|dress trousers)\b/g, ["dress pants", "trousers"]],
  [/\b(khakis?)\b/g, ["chinos", "khaki"]],
  [/\b(pants)\b/g, ["pants", "trousers", "chinos", "joggers"]],
  [/\b(sweats|sweatpants)\b/g, ["joggers"]],
  [/\b(t[- ]?shirts?|tees?)\b/g, ["tee", "t-shirt"]],
  [/\b(button[- ]?downs?|button[- ]?ups?)\b/g, ["button-up", "button down"]],
  [/\b(jumpers?|pullovers?)\b/g, ["sweater"]],
  [/\b(sportcoats?|sports? coats?|blazers?)\b/g, ["blazer", "sport coat"]],
  [/\b(tux|tuxes|tuxedos?)\b/g, ["tuxedo"]],
  [/\b(shades|sunnies)\b/g, ["sunglasses"]],
  [/\b(boxers|briefs|undies)\b/g, ["underwear", "boxer", "brief"]],
  [/\b(purses?)\b/g, ["handbag", "bag"]],
];
const SKIP_WORDS = new Set(["a", "an", "and", "the", "some", "for", "of", "pair", "with", "mens", "men", "womens", "women"]);
const wordRe = (term) => new RegExp("\\b" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(s|es)?\\b");

// The query as a list of groups. A product must match one term from every group.
function searchGroups(q) {
  let text = q.toLowerCase().replace(/['’]/g, "");
  const groups = [];
  for (const [phrase, terms] of SYNONYMS) {
    text = text.replace(phrase, () => {
      groups.push(terms);
      return " ";
    });
  }
  for (const w of text.split(/\s+/)) if (w && !SKIP_WORDS.has(w)) groups.push([w]);
  return groups.map((terms) => terms.map(wordRe));
}

const haystacks = new Map();
function textMatch(p, q) {
  if (!haystacks.has(p.id)) haystacks.set(p.id, [p.title, p.brand, p.category, p.subcategory, ...p.colors].join(" ").toLowerCase());
  const hay = haystacks.get(p.id);
  return searchGroups(q).every((terms) => terms.some((re) => re.test(hay)));
}

function matches(p, f, skip) {
  return (skip === "g" || !f.g || p.gender === f.g) && (skip === "dept" || !f.dept || deptOf(p) === f.dept) && (skip === "style" || !f.style || p.style === f.style) && (skip === "brand" || !f.brand || p.brand === f.brand) && (!f.sale || p.simulated.on_sale)
    && (!f.color || (p.colors.join(" ") + " " + p.title).toLowerCase().includes(String(f.color).toLowerCase()))
    && (!(+f.max_price > 0) || p.simulated.price <= +f.max_price)
    && (!f.size || inSize(p, f.size))
    && (!f.q || textMatch(p, f.q));
}
function sortProducts(r, sort) {
  if (sort === "low") return [...r].sort((a, b) => a.simulated.price - b.simulated.price);
  if (sort === "high") return [...r].sort((a, b) => b.simulated.price - a.simulated.price);
  const h = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  return [...r].sort((a, b) => h(a.id) - h(b.id));
}

function shop(q) {
  const f = filtersFrom(q);
  const link = (k, v) => { const n = new URLSearchParams(q); n.delete("sort"); if (f.sort !== "featured") n.set("sort", f.sort); if (n.get(k) === v) n.delete(k); else n.set(k, v); return "#/shop?" + n; };
  const match = (p, skip) => matches(p, f, skip);
  const r = sortProducts(P.filter((p) => match(p)), f.sort);
  const extra = [f.color && `in ${f.color}`, +f.max_price > 0 && `under ${money(+f.max_price)}`, f.size && `size ${f.size}`].filter(Boolean).join(" · ");
  const group = (name, k, vals) => `<div class="fgroup"><h2>${name}</h2>${vals.map(([v, n, lab]) => `<a href="${link(k, v)}"${f[k] === v ? ' aria-current="true"' : ""}><span>${esc(lab || v)}</span><span>${n}</span></a>`).join("")}</div>`;
  const count = (fn, skip) => { const c = {}; P.filter((p) => match(p, skip)).forEach((p) => { const v = fn(p); c[v] = (c[v] || 0) + 1; }); return c; };
  const gc = count((p) => p.gender, "g"), dc = count(deptOf, "dept"), sc = count((p) => p.style, "style"), bc = count((p) => p.brand, "brand");
  const head = f.q ? `Results for "${f.q}"` : f.sale ? "On sale" : f.dept || f.style || f.brand || ({ women: "Women", men: "Men" })[f.g] || "All clothing";
  main.innerHTML = `<div class="container"><div class="shop-head"><h1>${esc(head)}</h1></div>
   <div class="shop"><details class="filters" ${innerWidth > 960 ? "open" : ""}><summary>Filter</summary>
    ${group("Shop", "g", [["women", gc.women || 0, "Women"], ["men", gc.men || 0, "Men"]])}
    ${group("Department", "dept", Object.keys(dc).filter((d) => d !== "undefined").sort((a, b) => dc[b] - dc[a]).map((d) => [d, dc[d]]))}
    ${group("Style", "style", ["Formal", "Business Casual", "Casual", "Streetwear", "Athletic", "Resort"].filter((s) => sc[s]).map((s) => [s, sc[s]]))}
    ${group("Brand", "brand", Object.entries(bc).sort((a, b) => b[1] - a[1]).slice(0, 10))}
    <div class="fgroup"><a href="${link("sale", "1")}"${f.sale ? ' aria-current="true"' : ""}><span>On sale only</span></a></div>
   </details>
   <div><div class="bar"><span>${r.length} ${r.length === 1 ? "piece" : "pieces"}${extra ? ` · ${esc(extra)}` : ""}</span>
     <label>Sort <select id="sort"><option value="featured">Featured</option><option value="low">Price, low to high</option><option value="high">Price, high to low</option></select></label></div>
    ${r.length ? `<div class="grid">${r.slice(0, shown).map(card).join("")}</div>` : `<p class="empty">Nothing matches that. <a class="link" href="#/shop">See everything</a></p>`}
    ${r.length > shown ? `<div class="more"><button class="btn" id="more">Show more</button></div>` : ""}</div></div></div>`;
  const s = document.getElementById("sort"); s.value = f.sort;
  s.addEventListener("change", () => { const n = new URLSearchParams(q); n.set("sort", s.value); location.hash = "#/shop?" + n; });
  document.getElementById("more")?.addEventListener("click", () => { const y = scrollY; shown += PAGE; shop(q); scrollTo(0, y); });
}

function product(id) {
  const p = byId[id]; if (!p) return notFound();
  const d = deptOf(p), inv = p.simulated.inventory;
  const looks = L.filter((l) => l.items.some((i) => i.product_id === id));
  const same = P.filter((x) => x.gender === p.gender && x.id !== id), rel = same.filter((x) => x.subcategory === p.subcategory && x.brand !== p.brand).concat(same.filter((x) => x.category === p.category)).filter((x, i, a) => a.indexOf(x) === i).slice(0, 4);
  main.innerHTML = `<div class="container"><p class="crumb"><a class="link" href="#/shop?g=${p.gender}&dept=${encodeURIComponent(d)}">${esc(d)}</a></p>
   <div class="pdp"><div class="gal"><div class="thumbs">${p.images.map((_, i) => `<button aria-label="Photo ${i + 1}" aria-pressed="${i === 0}" data-i="${i}"><img src="${img(p, i)}" alt=""></button>`).join("")}</div>
     <div class="gal-main"><img id="big" src="${img(p)}" alt="${esc(title(p.title))}"></div></div>
    <div class="info"><div class="brand">${esc(p.brand)}</div><h1>${esc(title(p.title))}</h1>${priceHtml(p)}
     <div class="opt"><div class="opt-label">Color <b id="cv">${esc(p.colors[0])}</b></div><div class="chips" data-g="c">${p.colors.map((c, i) => `<button class="chip" aria-pressed="${i === 0}" data-v="${esc(c)}">${esc(c)}</button>`).join("")}</div></div>
     ${p.size_type === "one" ? "" : `<div class="opt"><div class="opt-label">Size <b id="sv">Choose one</b></div><div class="chips" data-g="s">${p.sizes.map((s) => `<button class="chip" aria-pressed="false" data-v="${esc(s)}" ${inv[s] === 0 ? "disabled" : ""}>${esc(s)}</button>`).join("")}</div></div>`}
     <div class="buy"><button class="btn" id="bag">Add to bag</button><p class="buy-note" id="note" aria-live="polite"></p></div>
     ${looks.length ? `<p class="worn">Worn in ${looks.map((l) => `<a class="link" href="#/looks/${slug(l.name)}">${esc(l.name)}</a>`).join(", ")}</p>` : ""}
     <div class="desc"><p>${esc(p.description)}</p>${p.details.length ? `<ul>${p.details.slice(0, 8).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</div>
    </div></div>
   ${rel.length ? `<section class="also"><h2>You might also like</h2><div class="grid">${rel.map(card).join("")}</div></section>` : ""}</div>`;
  const big = document.getElementById("big");
  document.querySelectorAll(".thumbs button").forEach((b) => b.addEventListener("click", () => { big.src = img(p, +b.dataset.i); document.querySelectorAll(".thumbs button").forEach((x) => x.setAttribute("aria-pressed", x === b)); }));
  document.querySelectorAll(".chips").forEach((g) => g.addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b || b.disabled) return;
    g.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", x === b)); document.getElementById(g.dataset.g === "c" ? "cv" : "sv").textContent = b.dataset.v; }));
  document.getElementById("bag").addEventListener("click", () => {
    const pick = (g) => document.querySelector(`.chips[data-g="${g}"] .chip[aria-pressed="true"]`)?.dataset.v;
    const note = document.getElementById("note"), size = pick("s");
    if (p.size_type !== "one" && !size) { note.textContent = "Choose a size first."; return; }
    const r = Barn.addToBag(p.id, size, pick("c"));
    note.textContent = r.ok ? `Added. ${r.count} ${r.count === 1 ? "item" : "items"} in your bag.` : r.error;
  });
}

function looks() {
  main.innerHTML = `<div class="container"><div class="shop-head"><h1>Looks</h1></div>${Object.keys(THEMES).map((k) => `<section class="look-group"><h2>${esc(THEMES[k][0])}</h2><div class="looks">${L.filter((l) => l.theme === k).sort((a, b) => (a.gender < b.gender ? 1 : a.gender > b.gender ? -1 : 0)).map((l) =>
    `<a class="dept look-card" href="#/looks/${slug(l.name)}"><div class="dept-pic"><img src="${img(lookLead(l))}" alt="" loading="lazy"></div><h3>${esc(l.name)}</h3><p>${esc(l.description)}</p></a>`).join("")}</div></section>`).join("")}</div>`;
}

function look(s) {
  const l = L.find((x) => slug(x.name) === s); if (!l) return notFound();
  const items = lookItems(l);
  main.innerHTML = `<div class="container"><p class="crumb"><a class="link" href="#/looks">${esc(THEMES[l.theme][0])}</a></p>
   <div class="look-head"><div class="dept-pic"><img src="${img(items[0])}" alt="${esc(l.name)}"></div>
    <div><h1>${esc(l.name)}</h1><p class="lead">${esc(l.description)}</p><br>
     <ul class="look-list">${items.map((p) => `<li><a href="#/product/${p.id}"><div class="look-thumb"><img src="${img(p)}" alt="" loading="lazy"></div><div><div class="card-brand">${esc(p.brand)}</div><div class="card-title">${esc(title(p.title))}</div></div>${priceHtml(p)}</a></li>`).join("")}</ul>
     <div class="look-total"><span>The whole look</span><span>${money(Math.round(lookTotal(l)))}</span></div></div></div></div>`;
}

function notFound() { main.innerHTML = `<div class="container"><p class="empty">That page isn’t in the barn. <a class="link" href="#/">Go home</a></p></div>`; }

let last = "";
function route() {
  const [path, qs] = location.hash.replace(/^#/, "").split("?");
  const q = new URLSearchParams(qs || ""), parts = (path || "/").split("/").filter(Boolean);
  const base = path + (q.get("sort") ? "" : "");
  if (parts[0] === "shop") { const key = [...q].filter(([k]) => k !== "sort").join("&"); if (key !== last) shown = PAGE; last = key; shop(q); }
  else if (parts[0] === "product") product(parts[1]);
  else if (parts[0] === "looks") parts[1] ? look(parts[1]) : looks();
  else if (parts[0] === "stylist") stylistPage(); // outfit board, site/board.js
  else home();
  if (!q.has("sort")) scrollTo(0, 0);
  document.querySelectorAll(".nav-l a").forEach((a) => { const h = a.getAttribute("href"); const on = h === "#/shop?sale=1" ? q.has("sale") : h === "#/looks" ? parts[0] === "looks" : parts[0] === "shop" && h.endsWith("g=" + q.get("g")); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
  document.title = "Fashion Barn";
}

document.getElementById("search").addEventListener("submit", (e) => { e.preventDefault(); const v = document.getElementById("q").value.trim(); location.hash = v ? "#/shop?q=" + encodeURIComponent(v) : "#/shop"; });
addEventListener("hashchange", route);
// barn.js waits on CATALOG before window.Barn reports ready.
// Wait for every page script (barn.js, bag.js, board.js, avatar) before the first route: the catalog can arrive
// before a script that a page needs (e.g. stylistPage in board.js) has finished downloading.
const domReady = new Promise((r) => (document.readyState === "loading" ? addEventListener("DOMContentLoaded", r, { once: true }) : r()));
const V = "?v=" + (window.ASSET_V || Date.now()); // same freshness rule as the CSS/JS in index.html
const CATALOG = Promise.all([fetch(DATA + "products.json" + V).then((r) => r.json()), fetch(DATA + "outfits.json" + V).then((r) => r.json()), domReady]).then(([a, b]) => { P = a; L = b; a.forEach((p) => (byId[p.id] = p)); route(); })
  .catch((e) => { console.error("Store failed to start:", e); main.innerHTML = `<div class="container"><p class="empty">The catalog didn’t load. Serve the project root over HTTP, then open /site/.</p></div>`; });
