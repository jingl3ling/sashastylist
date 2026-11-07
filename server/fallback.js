// Cached demo looks, replayed when the live run fails or is too slow. Owner: Jing.
// Captured from a real ZooWork run by agent/capture-fallback.mjs. Only used for the demo brief
// (or for every request when STYLIST_MODE=cache), so a different brief never gets Italy looks.
import { readFileSync, existsSync } from 'node:fs'

const FILE = new URL('./fallback-looks.json', import.meta.url)
const cache = existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : null
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export const hasFallback = () => Boolean(cache)

// Returns the cached entry for this request, or null if there is none.
export function pickEntry(req, { force = false } = {}) {
  if (!cache) return null
  if (!force && !cache.match.some((w) => req.occasion.toLowerCase().includes(w))) return null
  return req.rework ? cache.rework?.[req.rework.slot.toLowerCase()] ?? null : cache.base
}

// Replays the captured steps quickly, then the cached result.
export async function* fallbackRun(req, { force = false } = {}) {
  const entry = pickEntry(req, { force })
  if (!entry) throw new Error('No cached looks for this request')
  const total = entry.steps.at(-1)?.at_ms || 1
  const scale = Math.min(1, 12_000 / total) // replay in at most about 12 seconds
  let last = 0
  for (const s of entry.steps) {
    await sleep(Math.max(0, (s.at_ms - last) * scale))
    last = s.at_ms
    yield { type: 'step', id: s.id, label: s.label, status: s.status }
  }
  if (!force) yield { type: 'step', id: 'fallback', label: 'Pulling up saved looks', status: 'end' }
  yield { type: 'result', ...entry.result, warnings: [...(entry.result.warnings ?? []), 'served from cache'] }
}
