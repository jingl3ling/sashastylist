// Captures a real run (and a "shoes too formal" rework) into server/fallback-looks.json.
// Billable: two agent turns per attempt. Only writes the file if the run is clean:
// 3 looks, no warnings, and a rework that kept 3 looks.
//   node --env-file=.env agent/capture-fallback.mjs
import { writeFileSync } from 'node:fs'
import { liveRun } from '../server/stylist.js'

const brief = { shopper_id: 'demo-shopper', occasion: 'summer wedding in Italy', budget_usd: 800 }
const conversation_id = `capture-${Date.now()}`

async function capture(req) {
  const t0 = Date.now()
  const steps = []
  const seen = new Set()
  let result
  for await (const ev of liveRun(req)) {
    if (ev.type === 'step') {
      // Keep one start and one end per step id, in order.
      const key = `${ev.id}:${ev.status}`
      if (!seen.has(key)) {
        seen.add(key)
        steps.push({ id: ev.id, label: ev.label, status: ev.status, at_ms: Date.now() - t0 })
      }
    }
    if (ev.type === 'result') result = ev
  }
  if (!result) throw new Error('no result')
  const { elapsed_ms, ...clean } = result
  return { steps, result: clean, elapsed_ms }
}

const base = await capture({ ...brief, conversation_id })
console.log(`base: ${base.result.looks.length} looks in ${(base.elapsed_ms / 1000).toFixed(1)}s, warnings: ${JSON.stringify(base.result.warnings)}`)
const shoes = await capture({ ...brief, conversation_id, rework: { slot: 'Shoes', feedback: 'too formal' } })
console.log(`rework: ${shoes.result.looks.length} looks in ${(shoes.elapsed_ms / 1000).toFixed(1)}s, warnings: ${JSON.stringify(shoes.result.warnings)}`)

const clean = (e) => e.result.looks.length === 3 && (e.result.warnings ?? []).length === 0
if (!clean(base) || !clean(shoes)) {
  console.log('Not clean enough to cache (need 3 looks, no warnings in both). Nothing written. Run again.')
  process.exit(1)
}

writeFileSync(
  new URL('../server/fallback-looks.json', import.meta.url),
  JSON.stringify({ captured_at: new Date().toISOString(), match: ['wedding'], brief, base, rework: { shoes } }, null, 2) + '\n',
)
console.log('Wrote server/fallback-looks.json')
for (const [name, e] of [['base', base], ['rework', shoes]]) {
  console.log(name, e.result.looks.map((l) => `${l.outfit_name} $${l.total_usd}`).join(' | '))
}
process.exit(0)
