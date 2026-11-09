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
// Every call uses shared minutes (the plan has 20 a month), so calls are length-capped, drawn from
// a monthly budget, limited per visitor, and can be switched off: see the AVATAR_* settings below.

import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const TAVUS_API = 'https://tavusapi.com/v2'
const here = dirname(fileURLToPath(import.meta.url))
// The route is public (the site is static) and the Tavus plan has a small monthly allowance
// (20 minutes), so the minutes are guarded several ways. Every message returned here is shown
// to the shopper as "Couldn't start the call: <message>. You can still type to the stylist
// below.", so write them to read well in that sentence (lowercase, no final period).
//   AVATAR_ENABLED=0                kill switch: no new video calls at all
//   AVATAR_MAX_CALL_SECONDS (120)   length cap for any one call
//   AVATAR_BUDGET_SECONDS  (1080)   minutes to spend per calendar month (UTC), as seconds: 18 of the
//                                   20 on the plan, leaving headroom. Each call reserves its cap up
//                                   front and gets the unused part back when the shopper ends it.
//   AVATAR_CALLS_PER_VISITOR  (1)   calls per visitor per day (best effort: by forwarded IP)
//   AVATAR_CALL_COOLDOWN_MS (20000) gap between any two calls, which also blocks double clicks
//   AVATAR_MAX_CALLS         (30)   calls per server process
// The counters live in memory, so a restart or redeploy resets them; lower AVATAR_BUDGET_SECONDS
// by hand if the server has been restarted mid-month.
const MAX_CALL_SECONDS = Number(process.env.AVATAR_MAX_CALL_SECONDS ?? 120)
const BUDGET_SECONDS = Number(process.env.AVATAR_BUDGET_SECONDS ?? 18 * 60)
const CALLS_PER_VISITOR = Number(process.env.AVATAR_CALLS_PER_VISITOR ?? 1)
const COOLDOWN_MS = Number(process.env.AVATAR_CALL_COOLDOWN_MS ?? 20_000)
const MAX_CALLS = Number(process.env.AVATAR_MAX_CALLS ?? 30) // per server process
const MIN_USEFUL_SECONDS = 30 // not worth starting a call with less than this left in the month
let lastCallAt = 0
let callsMade = 0

const monthKey = () => new Date().toISOString().slice(0, 7)
const dayKey = () => new Date().toISOString().slice(0, 10)
const budget = { month: monthKey(), used: 0 } // seconds reserved or spent this month
const openCalls = new Map() // conversation_id -> { startedAt, reserved }
const visitors = new Map() // visitor id -> { day, calls }

/** Best-effort visitor id from the request: the first forwarded address (Railway sits behind a proxy). */
export function visitorId(headers = {}, fallback = 'unknown') {
  const get = (name) => (typeof headers.get === 'function' ? headers.get(name) : headers[name])
  return String(get('x-forwarded-for') ?? '').split(',')[0].trim() || fallback
}

function remainingSeconds() {
  if (budget.month !== monthKey()) {
    budget.month = monthKey()
    budget.used = 0
  }
  return Math.max(0, BUDGET_SECONDS - budget.used)
}

function checkLimits(visitor) {
  const now = Date.now()
  if (process.env.AVATAR_ENABLED === '0') return 'the video stylist is switched off right now'
  if (remainingSeconds() < MIN_USEFUL_SECONDS) return "the video stylist has used this month's free minutes and is resting until next month"
  const v = visitors.get(visitor)
  if (v?.day === dayKey() && v.calls >= CALLS_PER_VISITOR) return "you've already had your video chat today (one per visitor), so come back tomorrow"
  if (callsMade >= MAX_CALLS) return `call limit reached (${MAX_CALLS} per server run); restart the server or raise AVATAR_MAX_CALLS`
  if (now - lastCallAt < COOLDOWN_MS) return `wait ${Math.ceil((COOLDOWN_MS - (now - lastCallAt)) / 1000)}s before starting another call`
  return null
}

/** Give back the part of a call's reserved time that was never used. */
function settleCall(conversationId) {
  const call = openCalls.get(conversationId)
  if (!call) return
  openCalls.delete(conversationId)
  const spent = Math.ceil((Date.now() - call.startedAt) / 1000) + 5 // a few seconds of slack
  budget.used -= Math.max(0, call.reserved - spent)
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
  // Name, sizes and closet stay out: Sasha asks, and only uses pieces she sees on camera.
  // Department, if the shopper file has it (Jing: "gender": "men" | "women"). Never guessed from camera.
  if (shopper?.gender === 'men' || shopper?.gender === 'women') {
    lines.push(`Department for this shopper: ${shopper.gender === 'women' ? "women's" : "men's"}. Pass gender "${shopper.gender}" to style_outfit.`)
  }
  return lines.join('\n')
}

export async function createConversation({ conversationalContext, customGreeting, maxCallSeconds, visitor = 'unknown' } = {}) {
  const apiKey = process.env.TAVUS_API_KEY
  const pal = palId()
  if (!apiKey) throw new Error('TAVUS_API_KEY is not set')
  if (!pal) throw new Error('TAVUS_PAL_ID is not set and pal/pal-id.txt is missing')
  const limited = checkLimits(visitor)
  if (limited) throw Object.assign(new Error(limited), { status: 429 })
  // Reserve the call's time out of this month's budget up front (never more than what is left).
  const reserved = Math.min(maxCallSeconds ?? MAX_CALL_SECONDS, MAX_CALL_SECONDS, remainingSeconds())
  budget.used += reserved
  // Hold the cooldown slot during the attempt (blocks double clicks); a failed attempt gives it back
  // (and the reservation) and doesn't count toward MAX_CALLS, so one Tavus error can't lock out a retake.
  const prevCallAt = lastCallAt
  lastCallAt = Date.now()

  const body = {
    pal_id: pal,
    conversation_name: `barn-${new Date().toISOString()}`,
    conversational_context: conversationalContext ?? shopperContext(),
    properties: {
      max_call_duration: reserved,
      participant_left_timeout: 10, // end soon after the tab closes, to save shared minutes
      participant_absent_timeout: 120,
    },
  }
  if (process.env.TAVUS_FACE_ID) body.face_id = process.env.TAVUS_FACE_ID
  if (customGreeting) body.custom_greeting = customGreeting

  let res, text
  try {
    res = await fetch(`${TAVUS_API}/conversations`, {
      method: 'POST',
      headers: { 'x-api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    text = await res.text()
  } catch (e) {
    lastCallAt = prevCallAt // network failure: give the cooldown slot and the reserved time back
    budget.used -= reserved
    throw e
  }
  if (!res.ok) {
    lastCallAt = prevCallAt
    budget.used -= reserved
    throw new Error(`Tavus create conversation ${res.status}: ${text.slice(0, 300)}`)
  }
  callsMade += 1
  const data = JSON.parse(text)
  const v = visitors.get(visitor)
  visitors.set(visitor, { day: dayKey(), calls: v?.day === dayKey() ? v.calls + 1 : 1 })
  openCalls.set(data.conversation_id, { startedAt: Date.now(), reserved })
  return { conversation_id: data.conversation_id, conversation_url: data.conversation_url }
}

export async function endConversation(conversationId) {
  const apiKey = process.env.TAVUS_API_KEY
  if (!apiKey) throw new Error('TAVUS_API_KEY is not set')
  settleCall(conversationId) // the call is over either way: hand back the minutes it didn't use
  const res = await fetch(`${TAVUS_API}/conversations/${encodeURIComponent(conversationId)}/end`, {
    method: 'POST',
    headers: { 'x-api-key': apiKey },
  })
  if (!res.ok) throw new Error(`Tavus end conversation ${res.status}: ${(await res.text()).slice(0, 300)}`)
}

// ---- Fetch-API handlers (Request -> Response), used by the dev harness ----

export async function handleCreateConversation(req) {
  try {
    return Response.json(await createConversation({ visitor: visitorId(req.headers) }))
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
  app.post('/api/conversation', async (req, res) => {
    try {
      res.json(await createConversation({ visitor: visitorId(req.headers, req.socket?.remoteAddress) }))
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
