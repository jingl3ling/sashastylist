// Live run: one ZooWork turn per request, relayed as contract events. Owner: Jing.
import { readFileSync, existsSync } from 'node:fs'
import { createZooworkClient, assistantText, toolCall, isRunFinished, runOutcome } from '@zoowork-ai/sdk'
import { StylistResult } from '../contracts/index.mjs'

const AGENT_ID = process.env.ZOOWORK_AGENT_ID ?? readAgentId()
const CATALOG_PATH = new URL('../data/catalog/products.json', import.meta.url)
const TURN_TIMEOUT_MS = 180_000

const client = createZooworkClient() // reads ZOOWORK_API_KEY, backend only

// conversation_id -> { sessionId, cursor }. One Session per video call.
const sessions = new Map()

function readAgentId() {
  const file = new URL('../agent/agent.json', import.meta.url)
  return existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')).agent_id : undefined
}

function loadCatalog() {
  if (!existsSync(CATALOG_PATH)) return null
  const raw = JSON.parse(readFileSync(CATALOG_PATH, 'utf8'))
  const list = Array.isArray(raw) ? raw : raw.products
  return new Map(list.map((p) => [p.id, p]))
}
const catalog = loadCatalog()

// Friendly feed label for a tool call, or null to hide it.
export function stepLabel(toolName, args = {}) {
  const n = toolName ?? ''
  if (n === 'memory_search') return 'Recalling your sizes and closet'
  if (n === 'memory_create' || n === 'memory_update') return 'Saving what I learned about your style'
  if (n === 'web_search' || n === 'web_fetch') return 'Researching the occasion and current trends'
  if (n === 'artifact_publish') return 'Publishing your lookbook'
  if (n.startsWith('mcp__') && n.endsWith('search_products')) return `Searching the catalog${args.q ? `: ${args.q}` : ''}`
  if (n.startsWith('mcp__') && n.endsWith('get_product')) return 'Checking a product'
  if (n === 'exec') return 'Searching the catalog'
  if (n === 'write' || n === 'edit') return 'Building your looks'
  return null // read, process, tool_search etc. stay out of the feed
}

function buildPrompt(req) {
  if (req.rework) {
    return [
      `Rework only the "${req.rework.slot}" piece in each look. Feedback: ${req.rework.feedback}.`,
      'Keep every other piece unchanged, stay within budget, and return the full result JSON again.',
    ].join(' ')
  }
  return [
    `Occasion: ${req.occasion}.`,
    `Budget: $${req.budget_usd}.`,
    req.notes ? `Notes: ${req.notes}.` : '',
    `Shopper id: ${req.shopper_id}.`,
    'Run the full styling job and finish with the result JSON.',
  ].filter(Boolean).join('\n')
}

// Pulls the last JSON object out of the final assistant text.
export function extractJson(text) {
  const fenced = [...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/g)].map((m) => m[1])
  const candidates = fenced.length ? fenced : [text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1)]
  for (const c of candidates.reverse()) {
    try {
      return JSON.parse(c)
    } catch {}
  }
  return null
}

// Drops unknown product_ids and recomputes totals from catalog prices.
export function validate(result) {
  const warnings = []
  const looks = result.looks
    .map((look) => {
      const items = look.items.filter((item) => {
        if (!item.product_id || !catalog) return true
        const ok = catalog.has(item.product_id)
        if (!ok) warnings.push(`Dropped unknown product ${item.product_id}`)
        return ok
      })
      const total = items.reduce((sum, i) => sum + (i.product_id && catalog ? catalog.get(i.product_id).simulated.price : 0), 0)
      return { ...look, items, total_usd: catalog ? Math.round(total * 100) / 100 : look.total_usd }
    })
    .filter((look) => look.items.length > 0)
  if (!catalog) warnings.push('Catalog not loaded; product ids and totals were not validated')
  return { ...result, looks, warnings }
}

export async function* liveRun(req) {
  if (!AGENT_ID) throw new Error('No agent yet: run npm run create-agent first')
  const started = Date.now()

  let state = sessions.get(req.conversation_id)
  if (!state) {
    const session = await client.createSession(AGENT_ID, {
      metadata: { source: 'virtual-stylist', conversation_id: req.conversation_id },
    })
    state = { sessionId: session.session_id }
    sessions.set(req.conversation_id, state)
  }

  const receipt = await client.postEvents(AGENT_ID, state.sessionId, [
    { type: 'user.message', content: buildPrompt(req), actor: { ref: req.shopper_id } },
  ])
  if (receipt.events[0]?.accepted !== true) throw new Error('Message was not accepted')

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TURN_TIMEOUT_MS)
  let finalText = ''
  let outcome
  try {
    const opts = { signal: controller.signal, ...(state.cursor ? { cursor: state.cursor } : {}) }
    for await (const ev of client.streamEvents(AGENT_ID, state.sessionId, opts)) {
      state.cursor = ev.cursor ?? state.cursor
      const text = assistantText(ev)
      if (text) finalText = text // the last assistant segment holds the answer
      const call = toolCall(ev)
      if (call) {
        const label = stepLabel(call.toolName, call.args)
        if (label) yield { type: 'step', id: call.toolCallId, label, status: call.phase }
      }
      if (isRunFinished(ev)) {
        // A yielded finish is not final: keep observing the same Session.
        if (ev.payload.turnEndReason === 'yielded') continue
        outcome = runOutcome(ev)
        break
      }
    }
  } finally {
    clearTimeout(timer)
    controller.abort()
  }

  if (outcome !== 'succeeded') throw new Error(`Styling run ${outcome ?? 'did not finish'}`)
  const json = extractJson(finalText)
  const parsed = StylistResult.safeParse(json)
  if (!parsed.success) {
    console.error('Unreadable stylist result. Final text:\n', finalText.slice(0, 1500), '\nIssues:', parsed.error?.issues?.slice(0, 3))
    throw new Error('Stylist returned an unreadable result')
  }
  const result = validate(parsed.data)
  if (result.looks.length === 0) throw new Error('No valid looks after catalog validation')
  yield { type: 'result', ...result, elapsed_ms: Date.now() - started }
}
