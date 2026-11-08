// Backend entry. Owner: Jing. Start with: npm start  (STYLIST_MODE=stub|live, default stub)
import express from 'express'
import cors from 'cors'
import { randomUUID } from 'node:crypto'
import { RunRequest, SwapRequest } from '../contracts/index.mjs'
import { swap } from './swap.js'
import { withDepartment } from './gender.js'
import { stubRun } from './stub.js'

const MODE = process.env.STYLIST_MODE ?? 'stub'
const PORT = Number(process.env.PORT ?? 8787)
// Extra browser origins that may call the API, comma-separated (for a store hosted elsewhere, e.g. GitHub Pages).
const EXTRA_ORIGINS = (process.env.ALLOWED_ORIGINS ?? '').split(',').map((o) => o.trim().replace(/\/+$/, '')).filter(Boolean)
const ORIGINS = [...EXTRA_ORIGINS, /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/]

const app = express()
app.use(cors({ origin: ORIGINS }))
app.use(express.json({ limit: '100kb' }))

// run_id -> { events: [], done: bool, subs: Set<res> }
const runs = new Map()

function publish(run, event) {
  run.events.push(event)
  for (const res of run.subs) res.write(`data: ${JSON.stringify(event)}\n\n`)
  if (event.type === 'result' || event.type === 'error') {
    run.done = true
    for (const res of run.subs) res.end()
    run.subs.clear()
  }
}

// If the live run gives no result within this time, serve the cached demo looks instead.
const FALLBACK_AFTER_MS = Number(process.env.STYLIST_FALLBACK_AFTER_MS ?? 100_000)

// Pulls events from `source` until a result, or throws on error / deadline.
async function pump(run, source, deadlineMs) {
  const deadline = Date.now() + deadlineMs
  const it = source[Symbol.asyncIterator]()
  try {
    for (;;) {
      const left = deadline - Date.now()
      if (left <= 0) throw new Error('Live run timed out')
      let timer
      const pending = it.next()
      pending.catch(() => {}) // a late rejection after the deadline must not crash the server
      const next = await Promise.race([
        pending,
        new Promise((_, rej) => (timer = setTimeout(() => rej(new Error('Live run timed out')), left))),
      ]).finally(() => clearTimeout(timer))
      if (next.done) return
      publish(run, next.value)
      if (next.value.type === 'result') return
    }
  } finally {
    it.return?.().catch?.(() => {})
  }
}

async function execute(run, req) {
  try {
    const { fallbackRun, pickEntry } = await import('./fallback.js')
    // Curated preset looks answer in under a second, but only when asked for (instant: true)
    // or forced with STYLIST_INSTANT=always, so the live agent run stays the default.
    const { pickPreset, presetRun } = await import('./presets.js')
    if ((req.instant === true || process.env.STYLIST_INSTANT === 'always') && pickPreset(req)) {
      await pump(run, presetRun(req), 30_000)
    } else if (MODE === 'cache') {
      await pump(run, fallbackRun(req, { force: true }), 60_000)
    } else if (MODE === 'live') {
      try {
        await pump(run, (await import('./stylist.js')).liveRun(req), FALLBACK_AFTER_MS)
      } catch (err) {
        // Live run failed or was too slow. Serve cached looks only for a request they fit.
        if (run.done || !pickEntry(req)) throw err
        console.error('live run failed, serving cache:', err.message)
        publish(run, { type: 'step', id: 'fallback', label: 'Pulling up saved looks', status: 'start' })
        await pump(run, fallbackRun(req), 60_000)
      }
    } else {
      await pump(run, stubRun(req), 60_000)
    }
    if (!run.done) publish(run, { type: 'error', message: 'Run ended without a result' })
  } catch (err) {
    console.error('run failed:', err)
    publish(run, { type: 'error', message: err instanceof Error ? err.message : 'Run failed' })
  }
}

app.get('/health', (_req, res) => res.json({ ok: true, mode: MODE }))

// Swap one item in a look (no agent run). See contracts/index.mjs SwapRequest.
app.post('/api/stylist/swap', (req, res) => {
  const parsed = SwapRequest.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ ok: false, error: parsed.error.issues.map((i) => i.message).join('; ') })
  const out = swap(parsed.data)
  res.status(out.ok ? 200 : 422).json(out)
})

app.post('/api/stylist/run', (req, res) => {
  const parsed = RunRequest.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.issues })
  const run_id = randomUUID()
  const run = { events: [], done: false, subs: new Set() }
  runs.set(run_id, run)
  execute(run, withDepartment(parsed.data))
  res.status(202).json({ run_id })
})

app.get('/api/stylist/events', (req, res) => {
  const run = runs.get(String(req.query.run_id))
  if (!run) return res.status(404).json({ error: 'unknown run_id' })
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
  })
  for (const event of run.events) res.write(`data: ${JSON.stringify(event)}\n\n`)
  if (run.done) return res.end()
  run.subs.add(res)
  const ping = setInterval(() => res.write(': ping\n\n'), 15_000)
  req.on('close', () => {
    clearInterval(ping)
    run.subs.delete(res)
  })
})

// Soham's Tavus routes (POST /api/conversation). Optional until avatar/ is merged, so a
// missing file never stops the stylist backend from booting.
try {
  const { mountAvatarRoutes } = await import('../avatar/create-conversation.mjs')
  mountAvatarRoutes(app)
  console.log('avatar routes mounted')
} catch (err) {
  if (err?.code !== 'ERR_MODULE_NOT_FOUND' || !String(err.message).includes('create-conversation')) throw err
  console.log('avatar routes not found; skipping')
}

// Arjun's public catalog MCP server (POST /mcp) for the ZooWork agent. Read-only demo data, no auth.
const { mountMcp } = await import('./mcp.js')
mountMcp(app)
console.log('catalog MCP mounted at /mcp')

// Optional: serve the store from this same server (SERVE_SITE=1), so one Railway service runs everything
// and the avatar talks to its own origin. Only the store, the built avatar and the catalog JSON are
// exposed, never the server code or env files.
if (process.env.SERVE_SITE === '1') {
  app.set('trust proxy', 1)
  const root = new URL('..', import.meta.url).pathname
  app.get('/site/config.js', (req, res) => {
    const origin = `${(req.get('x-forwarded-proto') ?? req.protocol).split(',')[0]}://${req.get('host')}`
    res
      .type('application/javascript')
      .set('Cache-Control', 'no-store')
      .send(`window.AVATAR_CONFIG = Object.assign({ backend: ${JSON.stringify(origin)} }, window.AVATAR_CONFIG);`)
  })
  app.use('/site', express.static(root + 'site'))
  app.use('/avatar/dist', express.static(root + 'avatar/dist'))
  app.use('/data/catalog', express.static(root + 'data/catalog'))
  app.get('/', (_req, res) => res.redirect('/site/'))
  console.log('serving the store at /site/')
}

app.listen(PORT, () => console.log(`stylist backend on :${PORT} (mode: ${MODE})`))
