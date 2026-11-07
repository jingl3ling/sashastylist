// Outfit board at #/stylist: up to three looks, each a photo collage on top with the piece details below.
// Barn.showLooks(result) stores the result and opens this page; app.js routes #/stylist to stylistPage().
(() => {
  const key = (i) => i.product_id || "closet:" + (i.closet_item || "");

  // A rework keeps the look's name and slot but changes the piece; mark it so the audience sees the swap.
  const swappedIn = (li, look, item) => {
    const old = Barn.prevLooks?.looks?.[li];
    if (!old || old.outfit_name !== look.outfit_name) return false;
    const was = old.items.find((x) => x.slot === item.slot);
    return Boolean(was) && key(was) !== key(item);
  };

  function itemRow(look, li, it) {
    const swap = swappedIn(li, look, it) ? `<span class="board-badge board-new">Swapped in</span>` : "";
    if (it.closet_item) {
      return `<li class="board-item is-owned${swap ? " is-new" : ""}"><div class="board-pic board-pic-owned" aria-hidden="true">Yours</div>
        <div><div class="board-row"><span class="board-slot">${esc(it.slot)} <span class="board-badge">Already yours</span>${swap}</span><span class="board-price">Owned</span></div>
        <div class="board-title">${esc(it.closet_item)}</div><p class="board-why">${esc(it.why)}</p></div></li>`;
    }
    const p = byId[it.product_id];
    if (!p) return `<li class="board-item"><div class="board-pic"></div><div><div class="board-slot">${esc(it.slot)}</div><div class="board-title">No longer available</div></div></li>`;
    return `<li class="board-item${swap ? " is-new" : ""}"><a class="board-pic" href="#/product/${p.id}"><img src="${img(p)}" alt="" loading="lazy"></a>
      <div><div class="board-row"><span class="board-slot">${esc(it.slot)} ${swap}</span><span class="board-price">${money(p.simulated.price)}</span></div>
      <a class="board-title" href="#/product/${p.id}">${esc(title(p.title))}</a><div class="card-brand">${esc(p.brand)}</div><p class="board-why">${esc(it.why)}</p></div></li>`;
  }

  // Flat-lay collage: the biggest layer leads, and smaller pieces sit around it.
  const SPOTS = [
    { l: 4, t: 4, w: 54, h: 62 },
    { l: 56, t: 5, w: 40, h: 44 },
    { l: 54, t: 47, w: 42, h: 49 },
    { l: 6, t: 66, w: 40, h: 30 },
    { l: 40, t: 68, w: 18, h: 26 },
    { l: 40, t: 3, w: 18, h: 22 },
  ];
  const RANK = [/tux|suit|coat|blazer|jacket|outerwear/i, /shirt|polo|tee|sweater|knit|hoodie/i, /trouser|pant|chino|short|denim|jean|swim/i, /shoe|footwear|loafer|sneaker|boot|sandal/i];
  const rank = (it) => {
    const p = byId[it.product_id];
    const text = [it.slot, p?.category, p?.subcategory].join(" ");
    const r = RANK.findIndex((x) => x.test(text));
    return r < 0 ? RANK.length : r;
  };

  function collage(look, li) {
    const items = [...look.items].sort((a, b) => rank(a) - rank(b)).slice(0, SPOTS.length);
    const tiles = items.map((it, n) => {
      const s = SPOTS[n], pos = `left:${s.l}%;top:${s.t}%;width:${s.w}%;height:${s.h}%`;
      const fresh = swappedIn(li, look, it) ? " is-new" : "";
      const p = byId[it.product_id];
      if (p) return `<a class="collage-piece${fresh}" style="${pos}" href="#/product/${p.id}" aria-label="${esc(title(p.title))}"><img src="${img(p)}" alt="" loading="lazy"></a>`;
      return `<div class="collage-piece collage-owned${fresh}" style="${pos}"><span>${esc(it.closet_item || it.slot)}</span><small>Already yours</small></div>`;
    });
    return `<div class="board-collage">${tiles.join("")}</div>`;
  }

  function lookCard(look, li) {
    const owned = look.items.filter((i) => i.closet_item).length;
    return `<article class="board-look"><header class="board-look-head"><h2>${esc(look.outfit_name)}</h2><div class="board-total">${money(Math.round(look.total_usd * 100) / 100)}</div></header>
      ${collage(look, li)}
      ${owned ? `<p class="board-owned-note">${owned} ${owned === 1 ? "piece" : "pieces"} from your closet</p>` : ""}
      <ol class="board-items">${look.items.map((it) => itemRow(look, li, it)).join("")}</ol></article>`;
  }

  // Never draw a blank piece: keep only known products and named closet pieces (an agent slip once sent empty closet items).
  const usable = (it) => Boolean((it.product_id && byId[it.product_id]) || (typeof it.closet_item === "string" && it.closet_item.trim()));

  const EXAMPLE = "I have a summer wedding in Italy and about $800 to spend.";
  function emptyBoard(note) {
    main.innerHTML = `<div class="container board board-empty"><h1>Your looks</h1>
      <p class="lead">${esc(note || "Ask your stylist for an outfit. Three looks will appear here, every piece with a reason.")}</p>
      <p class="board-try">Try: “${esc(EXAMPLE)}”</p>
      <button class="btn" type="button" id="board-example">Use this example</button></div>`;
    // Fill the stylist's text box (not submit, so nothing runs by accident); on phones, open the panel first.
    document.getElementById("board-example").addEventListener("click", () => {
      const panel = document.getElementById("stylist"), input = document.getElementById("stylist-input");
      if (getComputedStyle(document.getElementById("stylist-toggle")).display !== "none" && !panel.hasAttribute("data-open")) document.getElementById("stylist-toggle").click();
      input.value = EXAMPLE;
      input.focus();
    });
  }

  window.stylistPage = function () {
    const r = Barn.lastLooks;
    if (!r?.looks?.length) return emptyBoard();
    // Keep each look's original index so the "Swapped in" comparison still lines up after filtering.
    const cards = r.looks.map((l, li) => [{ ...l, items: (l.items || []).filter(usable) }, li]).filter(([l]) => l.items.length).slice(0, 3);
    if (!cards.length) return emptyBoard("The stylist's last answer had no pieces I could show. Ask again and I'll build fresh looks.");
    main.innerHTML = `<div class="container board"><div class="board-head"><h1>Your looks</h1>${r.spoken_summary ? `<p class="lead">${esc(r.spoken_summary)}</p>` : ""}</div>
      <div class="board-looks">${cards.map(([l, li]) => lookCard(l, li)).join("")}</div></div>`;
  };
})();
