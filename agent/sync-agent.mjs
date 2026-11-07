// Pushes the current persona and agent-catalog.json to the live agent. Safe to re-run.
// persona.md holds {{OUTFIT_EXAMPLES}}, which is filled in here from data/catalog/outfits.json
// so new outfits (for example the women's ones) appear without editing the persona by hand.
//   node --env-file=.env agent/sync-agent.mjs [--dry-run]
import { readFileSync } from 'node:fs'
import { createZooworkClient } from '@zoowork-ai/sdk'

const read = (rel) => readFileSync(new URL(rel, import.meta.url), 'utf8')
const { agent_id } = JSON.parse(read('./agent.json'))

export function outfitExamples(outfits, products) {
  const byId = new Map(products.map((p) => [p.id, p]))
  const lines = { men: [], women: [] }
  for (const o of outfits) {
    const gender = o.gender ?? 'men' // the original outfits file has no gender field
    let total = 0
    const items = o.items.map((i) => {
      const p = byId.get(i.product_id)
      total += p?.simulated.price ?? 0
      return p ? `${i.slot}: ${i.product_id} ($${p.simulated.price})` : `${i.slot}: ${i.product_id}`
    })
    lines[gender]?.push(`- **${o.name}** [${o.theme}, ~$${Math.round(total)}]: ${items.join('; ')}`)
  }
  const section = (title, rows) => (rows.length ? `### ${title}\n\n${rows.join('\n')}\n` : '')
  return [section("Men's outfits", lines.men), section("Women's outfits", lines.women)].filter(Boolean).join('\n')
}

export function buildPersona() {
  const outfits = JSON.parse(read('../data/catalog/outfits.json'))
  const products = JSON.parse(read('../data/catalog/products.json'))
  return read('./persona.md').replace('{{OUTFIT_EXAMPLES}}', () => outfitExamples(outfits, products))
}

if (import.meta.url === new URL(process.argv[1], 'file://').href) {
  const persona = buildPersona()
  if (process.argv.includes('--dry-run')) {
    console.log(`persona: ${persona.length} chars; men's outfits: ${(persona.match(/MW-\d+/g) ?? []).length ? 'yes' : 'no'}; women's section: ${persona.includes("### Women's outfits")}`)
    process.exit(0)
  }
  const client = createZooworkClient()
  const catalog = readFileSync(new URL('../data/catalog/agent-catalog.json', import.meta.url))
  const file = await client.uploadFile(agent_id, 'agent-catalog.json', catalog)
  console.log(`Uploaded ${file.path} (${file.size} bytes, sha256 ${file.sha256.slice(0, 12)}...)`)
  // persona.docs is replaced as a whole, so send the full list.
  await client.updateAgent(agent_id, { persona: { docs: [{ name: 'AGENTS.md', content: persona }] } })
  console.log(`Updated persona (${persona.length} chars)`)
}
