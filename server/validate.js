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

// Drops unknown product_ids and over-budget looks, and recomputes totals from catalog prices.
export function validate(result, budget, gender) {
  const warnings = []
  const crossed = new Set() // looks that mix departments are dropped whole, not trimmed
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
    dropped > 0 && looks.length > 0
      ? `I put together ${looks.length} ${looks.length === 1 ? 'look' : 'looks'}${budget ? ` under $${budget}` : ''}: ${looks.map((l) => l.outfit_name).join(' and ')}.`
      : result.spoken_summary
  return { ...result, spoken_summary, looks, warnings }
}
