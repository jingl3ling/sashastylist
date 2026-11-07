// Deletes stale test memories that say the shopper's sizes are assumed or no closet is on file.
// Billable: one short agent turn. Prints every memory it deletes.
//   node --env-file=.env agent/clean-stale-memory.mjs
import { readFileSync } from 'node:fs'
import { createZooworkClient, toolCall, assistantText, isRunFinished, runOutcome } from '@zoowork-ai/sdk'

const { agent_id } = JSON.parse(readFileSync(new URL('./agent.json', import.meta.url), 'utf8'))
const shopper = JSON.parse(readFileSync(new URL('../pal/demo-shopper.json', import.meta.url), 'utf8'))
const client = createZooworkClient()

const message = [
  `Maintenance for shopper "${shopper.shopper_id}". Do not style anything, search the catalog, or browse the web.`,
  'Use memory_search (scope "user_agent", maxResults 20) with several queries, such as "sizes", "closet", "assumed", "no closet".',
  'List every memory you find with its id and full content.',
  'Then memory_delete ONLY memories that say the shopper\'s sizes are assumed/unknown, or that no closet is on file.',
  'Keep every memory that states a real size, a preference, an item to avoid, or a specific closet item. If unsure, keep it.',
  'Finish by listing which memory ids you deleted and which you kept.',
].join('\n')

const session = await client.createSession(agent_id, { metadata: { source: 'clean-stale-memory' } })
await client.postEvents(agent_id, session.session_id, [
  { type: 'user.message', content: message, actor: { ref: shopper.shopper_id } },
])

let text = ''
const ctl = new AbortController()
const timer = setTimeout(() => ctl.abort(), 150_000)
try {
  for await (const ev of client.streamEvents(agent_id, session.session_id, { signal: ctl.signal })) {
    const call = toolCall(ev)
    if (call?.toolName === 'memory_delete') {
      console.log(`memory_delete ${call.phase}`, call.phase === 'start' ? JSON.stringify(call.args) : String(call.resultPreview ?? '').slice(0, 160))
    }
    const t = assistantText(ev)
    if (t) text = t
    if (isRunFinished(ev)) {
      console.log(`run ${runOutcome(ev)}`)
      break
    }
  }
} finally {
  clearTimeout(timer)
  ctl.abort()
}
console.log(text.trim())
process.exit(0)
