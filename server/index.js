// Backend entry. Owner: Jing. Start with: npm start  (STYLIST_MODE=stub|live, default stub)
import express from 'express'
import cors from 'cors'
import { randomUUID } from 'node:crypto'
import { RunRequest } from '../contracts/index.mjs'
import { stubRun } from './stub.js'

const MODE = process.env.STYLIST_MODE ?? 'stub'
const PORT = Number(process.env.PORT ?? 8787)
const ORIGINS = ['https://pillaiarjun.github.io', /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/]

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

async function execute(run, req) {
  try {
    let source = stubRun(req)
    if (MODE === 'live') source = (await import('./stylist.js')).liveRun(req)
    for await (const event of source) publish(run, event)
    if (!run.done) publish(run, { type: 'error', message: 'Run ended without a result' })
  } catch (err) {
    console.error('run failed:', err)
    publish(run, { type: 'error', message: err instanceof Error ? err.message : 'Run failed' })
  }
}

app.get('/health', (_req, res) => res.json({ ok: true, mode: MODE }))

app.post('/api/stylist/run', (req, res) => {
  const parsed = RunRequest.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.issues })
  const run_id = randomUUID()
  const run = { events: [], done: false, subs: new Set() }
  runs.set(run_id, run)
  execute(run, parsed.data)
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

app.listen(PORT, () => console.log(`stylist backend on :${PORT} (mode: ${MODE})`))
