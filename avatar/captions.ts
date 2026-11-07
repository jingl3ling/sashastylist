// Live captions: turns Tavus utterance app messages into a transcript of who said what.
// Tavus documents the event names (conversation.utterance, conversation.utterance.streaming) but not
// their fields, so this reads the likely ones and web.ts logs the first real payload to the console.

export type Speaker = "Sasha" | "You";

export interface CaptionLine {
  key: string;
  speaker: Speaker;
  text: string;
  final: boolean;
}

export interface Utterance {
  key: string;
  speaker: Speaker;
  text: string;
  final: boolean;
}

const str = (v: unknown) => (typeof v === "string" ? v : undefined);

/** Our own nudges to Sasha (wait talk, stylist results) may come back as utterances; keep them out. */
export function isSystemText(text: string): boolean {
  return /^\s*(STYLIST (UPDATE|RESULT)|\[Stylist)/i.test(text);
}

/** Returns the caption for a Tavus utterance message, or null for anything else. */
export function parseUtterance(msg: unknown): Utterance | null {
  const m = msg as { event_type?: string; inference_id?: string; properties?: Record<string, unknown> } | null;
  const type = m?.event_type;
  if (type !== "conversation.utterance" && type !== "conversation.utterance.streaming") return null;
  const p = m?.properties ?? {};
  const text = (str(p.speech) ?? str(p.text) ?? str(p.content) ?? str(p.transcript) ?? str(p.utterance) ?? "").trim();
  if (!text || isSystemText(text)) return null;
  const role = (str(p.role) ?? str(p.speaker) ?? "").toLowerCase();
  const speaker: Speaker = role === "user" ? "You" : "Sasha";
  const id = str(p.inference_id) ?? str(m?.inference_id) ?? (p.turn_idx != null ? String(p.turn_idx) : undefined);
  const streaming = type === "conversation.utterance.streaming";
  const final = !streaming || p.is_final === true || p.final === true;
  return { key: `${speaker}:${id ?? (streaming ? "live" : Math.random().toString(36).slice(2))}`, speaker, text, final };
}

/** Adds or updates a line: streaming pieces for the same key replace the text in place. */
export function applyUtterance(lines: CaptionLine[], u: Utterance, max = 200): CaptionLine[] {
  const i = lines.findIndex((l) => l.key === u.key && !l.final);
  // A final utterance after its streamed pieces replaces the live line for that speaker.
  const live = i >= 0 ? i : u.final ? lines.findIndex((l) => l.speaker === u.speaker && !l.final) : -1;
  const next = [...lines];
  if (live >= 0) next[live] = { ...u };
  else next.push({ ...u });
  return next.slice(-max);
}

export function transcriptText(lines: CaptionLine[]): string {
  return lines.map((l) => `${l.speaker}: ${l.text}`).join("\n");
}
