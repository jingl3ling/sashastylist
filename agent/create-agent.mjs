// Creates the stylist agent ONCE, starts it, and saves agent_id to agent/agent.json.
// Creating an agent uses the prepaid balance, so this refuses to run without --yes.
//   node --env-file=.env agent/create-agent.mjs [--model litellm/claude-haiku-5-5] [--yes]
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { createZooworkClient } from '@zoowork-ai/sdk'

const out = new URL('./agent.json', import.meta.url)
const args = process.argv.slice(2)
const model = args.includes('--model') ? args[args.indexOf('--model') + 1] : undefined
const persona = readFileSync(new URL('./persona.md', import.meta.url), 'utf8')

if (existsSync(out)) {
  console.log(`Agent already exists (${JSON.parse(readFileSync(out, 'utf8')).agent_id}). Delete agent/agent.json to recreate.`)
  process.exit(0)
}

const client = createZooworkClient()
let primary
if (model) {
  const models = await client.listModels()
  primary = models.find((m) => m.model === model && m.selectable !== false)?.model
  if (!primary) throw new Error(`Model ${model} not available. Options: ${models.map((m) => m.model).join(', ')}`)
}

const resource = {
  name: 'barn-stylist',
  labels: { app: 'virtual-stylist' },
  ...(primary ? { model: { primary } } : {}),
  persona: { docs: [{ name: 'AGENTS.md', content: persona }] },
}

if (!args.includes('--yes')) {
  console.log('Dry run. Would create and start this agent:')
  console.log(JSON.stringify({ ...resource, persona: `AGENTS.md (${persona.length} chars)` }, null, 2))
  console.log('Re-run with --yes to create it. Check Usage in ZooWork Platform for actual charges.')
  process.exit(0)
}

const agent = await client.createAgent({ resource }, 'barn-stylist-v1')
await client.startAgent(agent.agent_id)
await client.waitUntilRunning(agent.agent_id)
writeFileSync(out, JSON.stringify({ agent_id: agent.agent_id, model: primary ?? 'platform default' }, null, 2) + '\n')
console.log(`Agent live: ${agent.agent_id}`)
