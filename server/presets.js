// Preset looks: curated outfits with agent-written reasons, answered in under a second.
// Owner: Jing. Built by agent/build-presets.mjs into server/preset-looks.json.
// Used when a request sets `instant: true` (or STYLIST_INSTANT=always) and the occasion matches
// a theme and the budget fits. Otherwise the live agent runs.
import { readFileSync, existsSync } from 'node:fs'
import { catalog, validate } from './validate.js'
import { swap, isSoldOut } from './swap.js'

const FILE = new URL('./preset-looks.json', import.meta.url)
const presets = existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : null
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const MIN_LOOKS = 2

const NAMES = { 'formal-wedding': 'formal wedding', 'beach-wedding': 'beach wedding', 'beach-vacation': 'beach vacation' }
const WEDDING = /wedding|nuptial|reception|bridal|bride|groom|black.?tie/i
const BEACHY = /beach|seaside|coast|italy|amalfi|destination|outdoor|garden|summer|island|tropical|mediterranean|riviera/i
const VACATION = /vacation|holiday|pool|resort|cruise|getaway|honeymoon|swim|beach|seaside|tropical|island/i

export function themeFor(occasion = '') {
  if (WEDDING.test(occasion)) return BEACHY.test(occasion) ? 'beach-wedding' : 'formal-wedding'
  if (VACATION.test(occasion)) return 'beach-vacation'
  return null
}

export const hasPresets = () => Boolean(presets)

// The department to serve: the request's, or the only one we have presets for.
function departmentFor(req, theme) {
  if (req.gender) return req.gender
  const have = Object.keys(presets?.themes?.[theme] ?? {}).filter((g) => presets.themes[theme][g]?.length)
  return have.length === 1 ? have[0] : null
}

// Replaces any sold-out piece with the closest in-stock one in the same slot (same department and
// category). A look that can't be repaired is dropped, so a shopper never gets a piece that fails to add.
function restock(look, dep, swapped) {
  let cur = look
  for (let index = 0; index < look.items.length; index++) {
    const item = look.items[index]
    const product = item.product_id && catalog?.get(item.product_id)
    if (!product || !isSoldOut(product)) continue
    const options = swap({ look: cur, index, gender: dep, limit: 1 })
    const pick = options.ok && options.alternatives[0]
    const done = pick && swap({ look: cur, index, gender: dep, product_id: pick.id })
    if (!done?.ok) return null
    done.look.items[index].why = `${pick.title} stands in for ${product.title}, which is sold out.`
    swapped.push(`${item.product_id} -> ${pick.id}`)
    cur = done.look
  }
  return cur
}

// A validated result for this request, or null when no preset applies or none fits the budget.
export function pickPreset(req) {
  if (!presets || req.rework) return null
  const theme = themeFor(req.occasion)
  if (!theme) return null
  const dep = departmentFor(req, theme)
  const set = dep && presets.themes?.[theme]?.[dep]
  if (!set?.length) return null

  const swapped = []
  const stocked = set.map((l) => restock(l, dep, swapped)).filter(Boolean)
  const checked = validate({ looks: stocked, spoken_summary: '' }, req.budget_usd, dep)
  const looks = checked.looks.slice(0, 3)
  // One look is not a choice: let the live agent build more when the budget rules most presets out.
  if (looks.length < MIN_LOOKS) return null
  const totals = looks.map((l) => l.total_usd)
  const lo = Math.min(...totals)
  const hi = Math.max(...totals)
  const range = lo === hi ? `$${Math.round(lo)}` : `$${Math.round(lo)} to $${Math.round(hi)}`
  const spoken_summary = `Here ${looks.length === 1 ? 'is one' : `are ${looks.length}`} ${NAMES[theme]} ${looks.length === 1 ? 'look' : 'looks'} under $${req.budget_usd}, from ${range}: ${looks.map((l) => l.outfit_name).join(', ')}.`
  return { type: 'result', looks, spoken_summary, lookbook_artifact: null, warnings: [...checked.warnings, ...swapped.map((w) => `Swapped sold-out piece ${w}`), 'preset looks'] }
}

export async function* presetRun(req) {
  const result = pickPreset(req)
  if (!result) throw new Error('No preset looks for this request')
  yield { type: 'step', id: 'preset', label: 'Pulling up curated looks', status: 'start' }
  await sleep(500)
  yield { type: 'step', id: 'preset', label: 'Pulling up curated looks', status: 'end' }
  yield result
}
