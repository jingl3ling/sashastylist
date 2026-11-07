// Shared shapes for the stylist run. Owner: Jing. Announce changes in the group chat first.
import { z } from 'zod'

// POST /api/stylist/run
export const RunRequest = z.object({
  shopper_id: z.string().min(1).max(200).regex(/^[A-Za-z0-9._:@+-]+$/),
  conversation_id: z.string().min(1).max(200),
  occasion: z.string().min(1),
  budget_usd: z.number().positive(),
  notes: z.string().optional(),
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
