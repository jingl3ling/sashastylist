// Server-only. Starts and ends Tavus conversations with the Sasha PAL; the API key never
// reaches the browser. Plain JS so Jing's Express server (server/index.js) can import it as is:
//
//   import { mountAvatarRoutes } from '../avatar/create-conversation.mjs'
//   mountAvatarRoutes(app)   // after app.use(cors(...)) and app.use(express.json())
//
// Routes:
//   POST /api/conversation      {}                    -> { conversation_id, conversation_url }
//   POST /api/conversation/end  { conversation_id }   -> { ok: true }
//
// Env: TAVUS_API_KEY (required). TAVUS_PAL_ID (optional; defaults to pal/pal-id.txt).
// TAVUS_FACE_ID (optional; the PAL already has Ruby as its default face).
// Every call uses shared minutes; calls are capped at MAX_CALL_SECONDS.

import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const TAVUS_API = 'https://tavusapi.com/v2'
const here = dirname(fileURLToPath(import.meta.url))
const MAX_CALL_SECONDS = 600
// The route is public (the site is static), so guard the shared minutes.
const COOLDOWN_MS = Number(process.env.AVATAR_CALL_COOLDOWN_MS ?? 20_000)
const MAX_CALLS = Number(process.env.AVATAR_MAX_CALLS ?? 30) // per server process
let lastCallAt = 0
let callsMade = 0

function checkLimits() {
  const now = Date.now()
  if (callsMade >= MAX_CALLS) return `call limit reached (${MAX_CALLS} per server run); restart the server or raise AVATAR_MAX_CALLS`
  if (now - lastCallAt < COOLDOWN_MS) return `wait ${Math.ceil((COOLDOWN_MS - (now - lastCallAt)) / 1000)}s before starting another call`
  lastCallAt = now
  callsMade += 1
  return null
}

function readJson(path) {
  try {
    return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : undefined
  } catch {
    return undefined
  }
}

function palId() {
  if (process.env.TAVUS_PAL_ID) return process.env.TAVUS_PAL_ID
  const file = join(here, '..', 'pal', 'pal-id.txt')
  return existsSync(file) ? readFileSync(file, 'utf8').trim() : undefined
}

/** Shopper details Sasha may use (pal/system-prompt.md "Shopper details"). */
export function shopperContext(shopper = readJson(join(here, '..', 'pal', 'demo-shopper.json'))) {
  const lines = [
    'The store is connected: your tools search, open products, build looks and add to the bag on the shopper\'s screen.',
  ]
  if (shopper) {
    lines.push(`Shopper for this call: ${JSON.stringify(shopper)}`)
  }
  return lines.join('\n')
}

export async function createConversation({ conversationalContext, customGreeting, maxCallSeconds } = {}) {
  const apiKey = process.env.TAVUS_API_KEY
  const pal = palId()
  if (!apiKey) throw new Error('TAVUS_API_KEY is not set')
  if (!pal) throw new Error('TAVUS_PAL_ID is not set and pal/pal-id.txt is missing')
  const limited = checkLimits()
  if (limited) throw Object.assign(new Error(limited), { status: 429 })

  const body = {
    pal_id: pal,
    conversation_name: `barn-${new Date().toISOString()}`,
    conversational_context: conversationalContext ?? shopperContext(),
    properties: {
      max_call_duration: Math.min(maxCallSeconds ?? MAX_CALL_SECONDS, MAX_CALL_SECONDS),
      participant_left_timeout: 10, // end soon after the tab closes, to save shared minutes
      participant_absent_timeout: 120,
    },
  }
  if (process.env.TAVUS_FACE_ID) body.face_id = process.env.TAVUS_FACE_ID
  if (customGreeting) body.custom_greeting = customGreeting

  const res = await fetch(`${TAVUS_API}/conversations`, {
    method: 'POST',
    headers: { 'x-api-key': apiKey, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`Tavus create conversation ${res.status}: ${text.slice(0, 300)}`)
  const data = JSON.parse(text)
  return { conversation_id: data.conversation_id, conversation_url: data.conversation_url }
}

export async function endConversation(conversationId) {
  const apiKey = process.env.TAVUS_API_KEY
  if (!apiKey) throw new Error('TAVUS_API_KEY is not set')
  const res = await fetch(`${TAVUS_API}/conversations/${encodeURIComponent(conversationId)}/end`, {
    method: 'POST',
    headers: { 'x-api-key': apiKey },
  })
  if (!res.ok) throw new Error(`Tavus end conversation ${res.status}: ${(await res.text()).slice(0, 300)}`)
}

// ---- Fetch-API handlers (Request -> Response), used by the dev harness ----

export async function handleCreateConversation(_req) {
  try {
    return Response.json(await createConversation())
  } catch (e) {
    console.error('[avatar] create conversation failed:', e)
    return Response.json({ error: e.message }, { status: e.status ?? 502 })
  }
}

export async function handleEndConversation(req) {
  try {
    const { conversation_id } = await req.json()
    if (typeof conversation_id !== 'string') return Response.json({ error: 'conversation_id required' }, { status: 400 })
    await endConversation(conversation_id)
    return Response.json({ ok: true })
  } catch (e) {
    console.error('[avatar] end conversation failed:', e)
    return Response.json({ error: e.message }, { status: 502 })
  }
}

// ---- Express (Jing's server) ----

export function mountAvatarRoutes(app) {
  app.post('/api/conversation', async (_req, res) => {
    try {
      res.json(await createConversation())
    } catch (e) {
      console.error('[avatar] create conversation failed:', e)
      res.status(e.status ?? 502).json({ error: e.message })
    }
  })
  app.post('/api/conversation/end', async (req, res) => {
    try {
      const id = req.body?.conversation_id
      if (typeof id !== 'string') return res.status(400).json({ error: 'conversation_id required' })
      await endConversation(id)
      res.json({ ok: true })
    } catch (e) {
      console.error('[avatar] end conversation failed:', e)
      res.status(502).json({ error: e.message })
    }
  })
}
