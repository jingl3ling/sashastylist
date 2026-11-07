// Bag UI: nav count, slide-over drawer, and a toast when an item is added (by a click or by the avatar).
// All bag data goes through window.Barn (barn.js); this file only draws it.
(() => {
  const $ = (id) => document.getElementById(id);
  const drawer = $("bag-drawer"), openBtn = $("bag-open");

  function render() {
    const { items, count, total } = Barn.getBag();
    $("bag-count").textContent = count;
    $("bag-total").textContent = money(total);
    $("bag-empty").hidden = items.length > 0;
    $("bag-checkout").disabled = items.length === 0;
    $("bag-lines").innerHTML = items.map((x, i) => {
      const p = byId[x.id], max = p.simulated.inventory[x.size] || 0;
      return `<li class="bag-line" data-i="${i}">
        <a class="bag-thumb" href="#/product/${x.id}"><img src="${img(p)}" alt="" loading="lazy"></a>
        <div class="bag-info"><div class="card-brand">${esc(p.brand)}</div><a class="bag-title" href="#/product/${x.id}">${esc(x.title)}</a>
          <div class="bag-meta">${esc(x.color)}${p.size_type === "one" ? "" : ` · Size ${esc(x.size)}`}</div>
          <div class="bag-qty"><button type="button" data-d="-1" aria-label="One fewer">−</button><span>${x.qty}</span><button type="button" data-d="1" aria-label="One more" ${x.qty >= max ? "disabled" : ""}>+</button>
          <button type="button" class="bag-remove" data-d="0">Remove</button></div></div>
        <div class="bag-price">${money(Math.round(x.qty * x.price * 100) / 100)}</div></li>`;
    }).join("");
  }

  const setOpen = (open) => {
    drawer.hidden = !open;
    openBtn.setAttribute("aria-expanded", open);
    if (open) { render(); $("bag-note").textContent = ""; $("bag-close").focus(); } else openBtn.focus();
  };
  openBtn.addEventListener("click", () => setOpen(drawer.hidden));
  $("bag-close").addEventListener("click", () => setOpen(false));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !drawer.hidden) setOpen(false); });
  addEventListener("hashchange", () => { if (!drawer.hidden) setOpen(false); });

  $("bag-lines").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-d]"); if (!b) return;
    const x = Barn.getBag().items[+b.closest(".bag-line").dataset.i], d = +b.dataset.d;
    const r = Barn.setQty(x.id, x.size, x.color, d === 0 ? 0 : x.qty + d);
    $("bag-note").textContent = r.ok ? "" : r.error;
  });
  $("bag-checkout").addEventListener("click", () => { $("bag-note").textContent = "This is a hackathon demo, so nothing is for sale and no card is charged."; });

  let toastTimer;
  addEventListener("barn:bag", (e) => {
    render();
    if (e.detail?.action !== "add") return;
    const p = byId[e.detail.id], t = $("bag-toast");
    t.textContent = `Added to bag: ${title(p.title)}${p.size_type === "one" ? "" : `, size ${e.detail.size}`}`;
    t.dataset.show = ""; clearTimeout(toastTimer); toastTimer = setTimeout(() => delete t.dataset.show, 2600);
    openBtn.classList.remove("bump"); void openBtn.offsetWidth; openBtn.classList.add("bump");
  });
  addEventListener("storage", (e) => { if (e.key === "barn.bag") render(); }); // another tab changed the bag

  Barn.ready.then(render, () => {});
})();
