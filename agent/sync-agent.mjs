// Pushes the current persona.md and agent-catalog.json to the live agent. Safe to re-run.
//   node --env-file=.env agent/sync-agent.mjs
import { readFileSync } from 'node:fs'
import { createZooworkClient } from '@zoowork-ai/sdk'

const { agent_id } = JSON.parse(readFileSync(new URL('./agent.json', import.meta.url), 'utf8'))
const persona = readFileSync(new URL('./persona.md', import.meta.url), 'utf8')
const catalog = readFileSync(new URL('../data/catalog/agent-catalog.json', import.meta.url))

const client = createZooworkClient()
const file = await client.uploadFile(agent_id, 'agent-catalog.json', catalog)
console.log(`Uploaded ${file.path} (${file.size} bytes, sha256 ${file.sha256.slice(0, 12)}...)`)

// persona.docs is replaced as a whole, so send the full list.
await client.updateAgent(agent_id, { persona: { docs: [{ name: 'AGENTS.md', content: persona }] } })
console.log(`Updated persona (${persona.length} chars)`)
