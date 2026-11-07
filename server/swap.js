// Swap one item in a look without running the agent. Owner: Jing.
// Pure functions over the catalog: same department and category, in stock, and inside the
// budget the rest of the look leaves. Use the agent rework for vague feedback like "too formal".
import { catalog, matchSize } from './validate.js'

const dept = (p) => p.gender ?? 'men' // a catalog without a gender field is men's only
const inStock = (p) => Object.values(p.simulated?.inventory ?? {}).some((n) => n > 0)
export const isSoldOut = (p) => !inStock(p)
const round = (n) => Math.round(n * 100) / 100
const brief = (p, base) => ({
  id: p.id,
  title: p.title,
  brand: p.brand,
  price: p.simulated.price,
  style: p.style,
  colors: p.colors,
  price_delta: round(p.simulated.price - base),
})

function locate(look, { slot, index }) {
  const i =
    index !== undefined ? index : look.items.findIndex((it) => it.slot.toLowerCase() === String(slot).toLowerCase())
  const item = look.items[i]
  if (!item) return { error: `No item matches "${slot ?? index}" in this look` }
  if (item.closet_item) return { error: `${item.closet_item} is already yours, so there is nothing to swap` }
  const original = catalog?.get(item.product_id)
  if (!original) return { error: `Unknown product ${item.product_id}` }
  return { i, item, original }
}

// Candidates for the slot, best first. `limit` is applied by the caller.
// The size label to buy in `p` for a shopper size, or null if none is in stock.
function sizeFor(p, size) {
  if (!size) return undefined // no size given: don't filter
  return matchSize(size, p.sizes ?? [], p.simulated?.inventory)
}

function candidates(look, original, { budget, gender, size }) {
  const department = gender ?? dept(original)
  const others = look.items.filter((it) => it.product_id && it.product_id !== original.id)
  const otherTotal = others.reduce((sum, it) => sum + (catalog.get(it.product_id)?.simulated.price ?? 0), 0)
  const maxPrice = budget ? budget - otherTotal : Infinity
  const inLook = new Set(look.items.map((it) => it.product_id))
  const pool = [...catalog.values()].filter(
    (p) => dept(p) === department && p.category === original.category && !inLook.has(p.id) && inStock(p) && p.simulated.price <= maxPrice && sizeFor(p, size) !== null,
  )
  // Prefer the same subcategory (loafer for loafer) when there are enough of them.
  const sameSub = pool.filter((p) => p.subcategory === original.subcategory)
  const list = sameSub.length >= 3 ? sameSub : pool
  const base = original.simulated.price
  return list.sort(
    (a, b) =>
      Number(b.style === original.style) - Number(a.style === original.style) ||
      Math.abs(a.simulated.price - base) - Math.abs(b.simulated.price - base) ||
      a.id.localeCompare(b.id),
  )
}

export function swap(req) {
  if (!catalog) return { ok: false, error: 'Catalog not loaded' }
  const found = locate(req.look, req)
  if (found.error) return { ok: false, error: found.error }
  const { i, item, original } = found
  const list = candidates(req.look, original, { budget: req.budget_usd, gender: req.gender, size: req.size })
  const base = original.simulated.price

  if (!req.product_id) {
    return {
      ok: true,
      slot: item.slot,
      replacing: brief(original, base),
      alternatives: list.slice(0, req.limit ?? 5).map((p) => brief(p, base)),
    }
  }

  const chosen = list.find((p) => p.id === req.product_id)
  if (!chosen) return { ok: false, error: `${req.product_id} cannot replace the ${item.slot}: wrong department or category, out of stock, or over budget` }
  const items = req.look.items.map((it, n) =>
    n === i
      ? {
          product_id: chosen.id,
          slot: item.slot,
          ...(req.size ? { size: sizeFor(chosen, req.size) } : {}),
          why: `Swapped in ${chosen.title} instead of ${original.title}.`,
        }
      : it,
  )
  const total = items.reduce((sum, it) => sum + (it.product_id ? catalog.get(it.product_id).simulated.price : 0), 0)
  return { ok: true, look: { ...req.look, items, total_usd: round(total) } }
}
