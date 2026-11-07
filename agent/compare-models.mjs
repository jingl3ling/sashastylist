// Times one identical brief per model, then restores the agent's original model.
// Billable: one full styling run per model.
//   node --env-file=.env agent/compare-models.mjs litellm/claude-haiku-5-5 litellm/claude-sonnet-5-5
import { readFileSync } from 'node:fs'
import { createZooworkClient } from '@zoowork-ai/sdk'
import { liveRun } from '../server/stylist.js'

const { agent_id } = JSON.parse(readFileSync(new URL('./agent.json', import.meta.url), 'utf8'))
const wanted = process.argv.slice(2)
const client = createZooworkClient()

const models = await client.listModels()
const usable = wanted.filter((w) => models.some((m) => m.model === w && m.selectable !== false))
for (const w of wanted) if (!usable.includes(w)) console.log(`SKIP ${w}: not listed or not selectable`)
if (!usable.length) {
  console.log('Available:', models.filter((m) => m.selectable !== false).map((m) => m.model).join(', '))
  process.exit(1)
}

const original = (await client.getAgent(agent_id)).declared?.model
console.log('Original model:', original?.primary, 'thinking:', original?.thinking ?? '(default)')

const brief = { shopper_id: 'demo-shopper', occasion: 'summer wedding in Italy', budget_usd: 800 }
try {
  for (const model of usable) {
    await client.updateAgent(agent_id, { model: { primary: model } })
    const t0 = Date.now()
    let steps = 0
    try {
      for await (const ev of liveRun({ ...brief, conversation_id: `cmp-${Date.now()}` })) {
        if (ev.type === 'step' && ev.status === 'start') steps++
        if (ev.type === 'result') {
          const totals = ev.looks.map((l) => l.total_usd)
          const over = totals.filter((t) => t > brief.budget_usd).length
          console.log(`${model}: ${((Date.now() - t0) / 1000).toFixed(1)}s, ${steps} steps, ${ev.looks.length} looks, totals ${totals.join('/')}, over budget: ${over}, warnings: ${(ev.warnings ?? []).join('; ') || 'none'}`)
        }
      }
    } catch (e) {
      console.log(`${model}: FAILED after ${((Date.now() - t0) / 1000).toFixed(1)}s: ${e.message}`)
    }
  }
} finally {
  if (original?.primary) await client.updateAgent(agent_id, { model: { primary: original.primary } })
  console.log('Restored model:', original?.primary)
}
process.exit(0)
