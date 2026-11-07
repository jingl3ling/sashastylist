// Builds server/preset-looks.json from the curated outfits, with one-sentence reasons written
// by the stylist agent. One short agent turn per theme and department (no catalog search).
// Billable unless --dry. Merges into the existing file, so a run for one department keeps the other.
//   node --env-file=.env agent/build-presets.mjs [--outfits path] [--products path] [--out path]
//        [--themes a,b] [--genders men,women] [--dry]
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { createZooworkClient, assistantText, isRunFinished, runOutcome } from '@zoowork-ai/sdk'

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`)
  return i > -1 ? process.argv[i + 1] : def
}
const dry = process.argv.includes('--dry')
const outfitsPath = arg('outfits', new URL('../data/catalog/outfits.json', import.meta.url).pathname)
const productsPath = arg('products', new URL('../data/catalog/products.json', import.meta.url).pathname)
const outPath = arg('out', new URL('../server/preset-looks.json', import.meta.url).pathname)
const themes = arg('themes', 'formal-wedding,beach-wedding,beach-vacation').split(',')
const genders = arg('genders', 'men,women').split(',')

const outfits = JSON.parse(readFileSync(outfitsPath, 'utf8'))
const products = new Map(JSON.parse(readFileSync(productsPath, 'utf8')).map((p) => [p.id, p]))
const { agent_id } = JSON.parse(readFileSync(new URL('./agent.json', import.meta.url), 'utf8'))
const client = dry ? null : createZooworkClient()
const round = (n) => Math.round(n * 100) / 100

function describe(o) {
  return {
    name: o.name,
    items: o.items.map((i) => {
      const p = products.get(i.product_id)
      return { product_id: i.product_id, slot: i.slot, title: p?.title, brand: p?.brand, price: p?.simulated.price, style: p?.style, colors: p?.colors }
    }),
  }
}

async function writeReasons(theme, gender, group) {
  const prompt = [
    `Maintenance task for the preset looks. Theme: ${theme.replace('-', ' ')}. Department: ${gender === 'women' ? "women's" : "men's"}.`,
    'Do not search the catalog, browse the web, use memory, or publish anything. Do not ask questions.',
    'For every item in every outfit below, write ONE specific sentence (under 22 words) on why it works for the theme:',
    'mention fabric, color, cut or formality. Do not mention sizes or prices.',
    'Reply with only this JSON in a ```json block:',
    '{"outfits":[{"name":"<outfit name>","items":[{"product_id":"<id>","why":"<sentence>"}]}]}',
    '',
    JSON.stringify(group),
  ].join('\n')

  const session = await client.createSession(agent_id, { metadata: { source: 'build-presets', theme, gender } })
  await client.postEvents(agent_id, session.session_id, [{ type: 'user.message', content: prompt, actor: { ref: 'preset-builder' } }])
  let text = ''
  const ctl = new AbortController()
  const timer = setTimeout(() => ctl.abort(), 150_000)
  try {
    for await (const ev of client.streamEvents(agent_id, session.session_id, { signal: ctl.signal })) {
      const t = assistantText(ev)
      if (t) text = t
      if (isRunFinished(ev)) {
        if (runOutcome(ev) !== 'succeeded') throw new Error(`run ${runOutcome(ev)}`)
        break
      }
    }
  } finally {
    clearTimeout(timer)
    ctl.abort()
  }
  const fenced = [...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/g)].map((m) => m[1]).pop() ?? text
  return JSON.parse(fenced)
}

const file = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : { themes: {} }
file.generated_at = new Date().toISOString()

for (const theme of themes) {
  for (const gender of genders) {
    const chosen = outfits.filter((o) => o.theme === theme && (o.gender ?? 'men') === gender)
    if (!chosen.length) {
      console.log(`${theme} / ${gender}: no curated outfits, skipped`)
      continue
    }
    const group = chosen.map(describe)
    let reasons = { outfits: [] }
    if (!dry) {
      try {
        reasons = await writeReasons(theme, gender, group)
      } catch (e) {
        console.log(`${theme} / ${gender}: FAILED (${e.message}), skipped`)
        continue
      }
    }
    const looks = chosen.map((o) => {
      const written = new Map((reasons.outfits.find((r) => r.name === o.name)?.items ?? []).map((i) => [i.product_id, i.why]))
      const items = o.items.map((i) => ({
        product_id: i.product_id,
        slot: i.slot,
        why: written.get(i.product_id) ?? (dry ? 'Preset reason (dry run).' : `A ${theme.replace('-', ' ')} staple.`),
      }))
      const total = items.reduce((s, i) => s + (products.get(i.product_id)?.simulated.price ?? 0), 0)
      return { outfit_name: o.name, items, total_usd: round(total) }
    })
    const missing = looks.flatMap((l) => l.items).filter((i) => !products.has(i.product_id)).length
    ;(file.themes[theme] ??= {})[gender] = looks
    console.log(`${theme} / ${gender}: ${looks.length} looks, ${looks.flatMap((l) => l.items).length} items, ${missing} unknown ids, totals ${looks.map((l) => l.total_usd).join('/')}`)
  }
}
writeFileSync(outPath, JSON.stringify(file, null, 2) + '\n')
console.log(`Wrote ${outPath}${dry ? ' (dry run, placeholder reasons)' : ''}`)
process.exit(0)
