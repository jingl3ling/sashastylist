// Catalog loading and look validation. Owner: Jing. No ZooWork client here, so the swap route
// and the presets can use it without an API key.
import { readFileSync, existsSync } from 'node:fs'

const CATALOG_PATH = new URL('../data/catalog/products.json', import.meta.url)

function loadCatalog() {
  if (!existsSync(CATALOG_PATH)) return null
  const raw = JSON.parse(readFileSync(CATALOG_PATH, 'utf8'))
  const list = Array.isArray(raw) ? raw : raw.products
  return new Map(list.map((p) => [p.id, p]))
}
export const catalog = loadCatalog()

const norm = (s) => String(s).toLowerCase().replace(/\s+/g, '')
// Categories where a size problem drops only the item; a core garment drops the whole look.
const ACCESSORY = /accessor|belt|headwear|hat|sock|neckwear|bag|jewelry|sunglass|scarf|glove|wallet/i

// The product's own size label that fits `want`, or null. Handles "L" in "L/XL", "32" in "32-34",
// "32" in "32W | 33-35L", and "L" in "L (7 1/4)".
// Every size label that fits `want` (a belt waist of 32 can fit both "28-32" and "32-34").
export function matchSizes(want, sizes = []) {
  const w = norm(want)
  const n = Number(w)
  return sizes.filter((s) => {
    const ns = norm(s)
    if (ns === w || ns.split('/').includes(w) || ns.split('(')[0] === w) return true
    const range = ns.match(/^(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)$/)
    if (range && Number.isFinite(n) && n >= Number(range[1]) && n <= Number(range[2])) return true
    return /^\d+$/.test(w) && new RegExp(`^${w}[wx]`).test(ns)
  })
}

// The label to buy: the first matching size that is in stock, or null.
export function matchSize(want, sizes = [], inventory) {
  const fits = matchSizes(want, sizes)
  return fits.find((s) => (inventory?.[s] ?? 1) > 0) ?? null
}

// '' = fine, otherwise the reason this stated size can't be bought.
function sizeProblem(product, size) {
  if (!size) return ''
  const sizes = product.sizes ?? []
  if (!sizes.length) return ''
  const fits = matchSizes(size, sizes)
  if (!fits.length) return `${product.title} comes in ${sizes.join(', ')}, not ${size}`
  if (!matchSize(size, sizes, product.simulated?.inventory)) return `${product.title} is out of stock in ${fits.join(' / ')}`
  return ''
}

// Drops unknown product_ids, mis-sized items and over-budget looks, and recomputes totals.
export function validate(result, budget, gender) {
  const warnings = []
  const crossed = new Set() // looks that mix departments are dropped whole, not trimmed
  let sizeIssue = false
  const looks = result.looks
    .map((look) => {
      let mixed = false
      const items = look.items.filter((item) => {
        if (!item.product_id || !catalog) return true
        const product = catalog.get(item.product_id)
        if (!product) {
          warnings.push(`Dropped unknown product ${item.product_id}`)
          return false
        }
        const problem = sizeProblem(product, item.size)
        if (problem) {
          sizeIssue = true
          if (ACCESSORY.test(`${product.category} ${product.subcategory}`)) {
            warnings.push(`Dropped ${item.product_id} from "${look.outfit_name}": ${problem}`)
            return false
          }
          warnings.push(`Dropped "${look.outfit_name}": ${problem}`)
          mixed = true // reuse the whole-look drop used for mixed departments
          return false
        }
        // A catalog without a gender field is men's only, so nothing to check.
        if (gender && product.gender && product.gender !== gender) {
          warnings.push(`Dropped "${look.outfit_name}": ${item.product_id} is from the ${product.gender}'s department`)
          mixed = true
          return false
        }
        return true
      })
      const total = items.reduce((sum, i) => sum + (i.product_id && catalog ? catalog.get(i.product_id).simulated.price : 0), 0)
      const out = { ...look, items, total_usd: catalog ? Math.round(total * 100) / 100 : look.total_usd }
      if (mixed) crossed.add(out)
      return out
    })
    .filter((look) => !crossed.has(look))
    .filter((look) => look.items.length > 0)
    .filter((look) => {
      // The agent is told to stay in budget but is not trusted on arithmetic.
      if (!budget || !catalog || look.total_usd <= budget) return true
      warnings.push(`Dropped "${look.outfit_name}": $${look.total_usd} is over the $${budget} budget`)
      return false
    })
  if (!catalog) warnings.push('Catalog not loaded; product ids and totals were not validated')
  // If looks were dropped, the agent's summary describes looks that no longer exist.
  const dropped = result.looks.length - looks.length
  const spoken_summary =
    sizeIssue && looks.length > 0
      ? // The agent may have claimed everything fits; say only what we can stand behind.
        `I put together ${looks.length} ${looks.length === 1 ? 'look' : 'looks'}${budget ? ` under $${budget}` : ''}: ${looks.map((l) => l.outfit_name).join(' and ')}.`
      : dropped > 0 && looks.length > 0
      ? `I put together ${looks.length} ${looks.length === 1 ? 'look' : 'looks'}${budget ? ` under $${budget}` : ''}: ${looks.map((l) => l.outfit_name).join(' and ')}.`
      : result.spoken_summary
  return { ...result, spoken_summary, looks, warnings }
}
