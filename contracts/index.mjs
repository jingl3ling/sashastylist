// Shared shapes for the stylist run. Owner: Jing. Announce changes in the group chat first.
import { z } from 'zod'

// POST /api/stylist/run
export const RunRequest = z.object({
  shopper_id: z.string().min(1).max(200).regex(/^[A-Za-z0-9._:@+-]+$/),
  conversation_id: z.string().min(1).max(200),
  occasion: z.string().min(1),
  budget_usd: z.number().positive(),
  notes: z.string().optional(),
  // Department to style from. Optional: if omitted, the run ends with an error asking for it.
  gender: z.enum(['men', 'women']).optional(),
  // true = answer from the curated preset looks (under a second) when the occasion matches a
  // preset theme (formal wedding, beach wedding, beach vacation) and the budget fits. Falls back
  // to the live agent run otherwise. Omitted or false = always run the live agent.
  instant: z.boolean().optional(),
  // Optional, set only to change one piece in the same Session (F8), e.g.
  // { slot: "Shoes", feedback: "too formal" }.
  rework: z.object({ slot: z.string().min(1), feedback: z.string().min(1) }).optional(),
})

// Response of POST /api/stylist/run
export const RunResponse = z.object({ run_id: z.string() })

// GET /api/stylist/events?run_id=  (Server-Sent Events, default "message" event, JSON in data:)
export const StepEvent = z.object({
  type: z.literal('step'),
  id: z.string(), // stable per tool call; start and end share it
  label: z.string(), // friendly text for the activity feed
  status: z.enum(['start', 'end', 'blocked']),
})

export const LookItem = z
  .object({
    product_id: z.string().optional(),
    closet_item: z.string().optional(),
    slot: z.string(),
    why: z.string(),
    // The size to buy, taken from the product's own size list ("40R", "L/XL", "One Size").
    // Optional on closet items. The backend checks it against stock and drops items that don't fit.
    size: z.string().optional(),
  })
  .refine((i) => Boolean(i.product_id) !== Boolean(i.closet_item), {
    message: 'exactly one of product_id or closet_item',
  })

export const Look = z.object({
  outfit_name: z.string(),
  items: z.array(LookItem).min(1),
  total_usd: z.number(),
})

export const StylistResult = z.object({
  looks: z.array(Look).min(1),
  spoken_summary: z.string(),
  lookbook_artifact: z.string().nullable().optional(),
})

export const ResultEvent = z.object({ type: z.literal('result') }).merge(StylistResult).extend({
  elapsed_ms: z.number().optional(),
  warnings: z.array(z.string()).optional(),
})

export const ErrorEvent = z.object({ type: z.literal('error'), message: z.string() })

// The stream ends after a result or error event. Clients must close their EventSource
// on either one, otherwise the browser reconnects and replays the run.

// POST /api/stylist/swap: change one item in a look without running the agent.
// Without product_id it returns alternatives for that slot; with product_id it returns the
// updated look (total recomputed and checked). Owned closet pieces cannot be swapped.
export const SwapRequest = z
  .object({
    look: Look,
    slot: z.string().optional(), // the item's slot, e.g. "Shoes"
    index: z.number().int().min(0).optional(), // or its position in look.items
    product_id: z.string().optional(), // chosen replacement: apply the swap
    budget_usd: z.number().positive().optional(),
    gender: z.enum(['men', 'women']).optional(),
    size: z.string().optional(), // the shopper's size for this item; alternatives must come in it
    limit: z.number().int().min(1).max(10).optional(), // alternatives to return, default 5
  })
  .refine((r) => r.slot !== undefined || r.index !== undefined, { message: 'send slot or index' })

export const SwapAlternative = z.object({
  id: z.string(),
  title: z.string(),
  brand: z.string(),
  price: z.number(),
  style: z.string(),
  colors: z.array(z.string()),
  price_delta: z.number(), // price minus the item being replaced
})

export const SwapResponse = z.union([
  z.object({ ok: z.literal(true), slot: z.string(), replacing: SwapAlternative, alternatives: z.array(SwapAlternative) }),
  z.object({ ok: z.literal(true), look: Look }),
  z.object({ ok: z.literal(false), error: z.string() }),
])
