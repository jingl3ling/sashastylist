// Points the stylist at the public catalog MCP route. Replaces the agent's whole `mcp` array.
//   node --env-file=.env agent/set-mcp.mjs [url]     (use --remove to detach)
import { readFileSync } from 'node:fs'
import { createZooworkClient } from '@zoowork-ai/sdk'

const { agent_id } = JSON.parse(readFileSync(new URL('./agent.json', import.meta.url), 'utf8'))
const url = process.argv.slice(2).find((a) => a.startsWith('http')) ?? 'https://backend-production-6d9d.up.railway.app/mcp'
const client = createZooworkClient()

const mcp = process.argv.includes('--remove')
  ? []
  : [{ name: 'barn-catalog', url, transport: 'streamable-http', toolFilter: ['search_products', 'get_product'], exposure: 'direct', permission: 'always_allow' }]

await client.updateAgent(agent_id, { mcp })
const agent = await client.getAgent(agent_id)
console.log('mcp now:', JSON.stringify(agent.declared?.mcp ?? []))
