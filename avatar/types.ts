// Shapes the avatar layer depends on. Not the source of truth:
//   window.Barn       -> site/barn.js (Arjun)
//   stylist run/events -> contracts/index.mjs on jing/stylist-brain (Jing)
// Keep these in sync by hand; tests run against fakes with these shapes.

// ---- window.Barn (site/barn.js) ----

export interface BarnBrief {
  id: string;
  title: string;
  brand: string;
  price: number;
}

export interface BarnSearchFilters {
  q?: string;
  dept?: string;
  style?: string;
  brand?: string;
  color?: string;
  max_price?: number;
  /** Shopper's size for the garment searched: "40R", "15.5 / 32-33", "32", "10". */
  size?: string;
  sale?: boolean;
}

export type BarnOpenResult = ({ ok: true; colors: string[]; sizes: string[] } & BarnBrief) | { ok: false; error: string };

export interface BarnAddResult {
  ok: boolean;
  error: string | null;
  count: number;
}

export interface BarnBag {
  items: Array<{ id: string; size: string; color: string; qty: number; title: string; price: number }>;
  count: number;
  total: number;
}

export interface Barn {
  ready?: Promise<Barn> | null;
  search(filters: BarnSearchFilters): BarnBrief[];
  openProduct(id: string): BarnOpenResult;
  addToBag(id: string, size?: string, color?: string): BarnAddResult;
  getBag(): BarnBag;
  showLooks(result: StylistResult): unknown;
  addFeedStep(step: { id: string; label?: string; status?: StepStatus }): unknown;
  resetFeed(): unknown;
  /** Price lookup without navigating (barn.js, Arjun #9). */
  getProduct?(id: string): ({ ok: true } & BarnBrief) | { ok: false; error: string; price?: undefined } | null;
}

declare global {
  interface Window {
    Barn?: Barn;
  }
}

// ---- stylist backend (Jing, contracts/index.mjs) ----

export interface RunRequest {
  shopper_id: string;
  conversation_id: string;
  occasion: string;
  budget_usd: number;
  notes?: string;
  /** Department to style from. Omit when unknown: the run then ends with an error asking for it. */
  gender?: "men" | "women";
  rework?: { slot: string; feedback: string };
}

export type StepStatus = "start" | "end" | "blocked";

export interface LookItem {
  product_id?: string;
  closet_item?: string;
  slot: string;
  why: string;
}

export interface Look {
  outfit_name: string;
  items: LookItem[];
  total_usd: number;
}

export interface StylistResult {
  looks: Look[];
  spoken_summary: string;
  lookbook_artifact?: string | null;
}

export type StylistEvent =
  | { type: "step"; id: string; label: string; status: StepStatus }
  | ({ type: "result"; elapsed_ms?: number; warnings?: string[] } & StylistResult)
  | { type: "error"; message: string };
