// One real styling run through the relay, with timing. Uses prepaid balance.
//   node --env-file=.env agent/smoke.mjs
import { liveRun } from '../server/stylist.js'

const req = {
  shopper_id: 'demo-shopper',
  conversation_id: `smoke-${Date.now()}`,
  occasion: 'summer wedding in Italy',
  budget_usd: 800,
}
const t0 = Date.now()
try {
  for await (const ev of liveRun(req)) {
    const s = ((Date.now() - t0) / 1000).toFixed(1)
    if (ev.type === 'step') console.log(`[${s}s] ${ev.status} ${ev.label}`)
    else console.log(`[${s}s] ${ev.type}`, JSON.stringify(ev).slice(0, 600))
  }
} catch (e) {
  console.error('FAILED:', e.message)
}
console.log(`total ${((Date.now() - t0) / 1000).toFixed(1)}s`)
process.exit(0)
