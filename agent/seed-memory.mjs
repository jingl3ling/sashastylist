// Seeds the demo shopper's sizes, taste and closet into the agent's per-shopper memory.
// Billable: one short agent turn.
//   node --env-file=.env agent/seed-memory.mjs
import { readFileSync } from 'node:fs'
import { createZooworkClient, toolCall, assistantText, isRunFinished, runOutcome } from '@zoowork-ai/sdk'

const { agent_id } = JSON.parse(readFileSync(new URL('./agent.json', import.meta.url), 'utf8'))
const shopper = JSON.parse(readFileSync(new URL('../pal/demo-shopper.json', import.meta.url), 'utf8'))
const client = createZooworkClient()

const message = [
  `Save what you know about shopper "${shopper.shopper_id}" (${shopper.name}) to memory so future sessions can recall it.`,
  'Use memory_create with scope "user_agent", one short fact per call: one for sizes, one for style, fit and colors,',
  'one for things to avoid, and one per closet item (include the notes, for example how formal it is or its season).',
  'Do not search the catalog or browse the web. When done, reply with the number of facts saved.',
  '',
  JSON.stringify(shopper),
].join('\n')

const session = await client.createSession(agent_id, { metadata: { source: 'seed-memory' } })
await client.postEvents(agent_id, session.session_id, [
  { type: 'user.message', content: message, actor: { ref: shopper.shopper_id } },
])

let saved = 0
let errors = 0
let text = ''
const ctl = new AbortController()
const timer = setTimeout(() => ctl.abort(), 150_000)
try {
  for await (const ev of client.streamEvents(agent_id, session.session_id, { signal: ctl.signal })) {
    const call = toolCall(ev)
    if (call?.toolName === 'memory_create' && call.phase === 'end') {
      call.isError ? errors++ : saved++
      if (call.isError) console.log('memory_create error:', String(call.resultPreview).slice(0, 200))
    }
    text += assistantText(ev) ? `${assistantText(ev)}\n` : ''
    if (isRunFinished(ev)) {
      console.log(`run ${runOutcome(ev)}: ${saved} memories saved, ${errors} errors`)
      break
    }
  }
} finally {
  clearTimeout(timer)
  ctl.abort()
}
console.log(text.trim().slice(-300))
process.exit(0)
