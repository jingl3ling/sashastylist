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

const norm = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/**
 * Adds or updates a line. Tavus can send one spoken line several times (a final copy, another final
 * copy, a late streaming piece), with different or missing ids, so lines are merged by content:
 * the same speaker's latest line is updated when it is still in progress, or when the texts match
 * (one equal to, or the start of, the other). Otherwise the utterance is a new line.
 */
export function applyUtterance(lines: CaptionLine[], u: Utterance, max = 200): CaptionLine[] {
  const next = [...lines];
  let last = -1;
  for (let i = next.length - 1; i >= 0; i--) if (next[i].speaker === u.speaker) { last = i; break; }
  if (last >= 0) {
    const l = next[last];
    const a = norm(l.text), b = norm(u.text);
    // Text with no letters or digits ("…", emoji, other scripts) normalises to "" and must not match everything.
    const sameLine = a !== "" && b !== "" && (a === b || a.startsWith(b) || b.startsWith(a));
    const sameKey = l.key === u.key;
    // Only the speaker's newest turn can be updated: their line must be the last, or followed only by the other speaker's interjection.
    const recent = last >= next.length - 2;
    if (recent && (sameLine || sameKey || (!l.final && last === next.length - 1))) {
      // Keep the longer, finished text: a late partial never shortens or un-finishes a line.
      const keepOld = l.final && !u.final;
      next[last] = keepOld ? l : { ...u, text: b.length >= a.length || u.final ? u.text : l.text, final: l.final || u.final };
      return next.slice(-max);
    }
  }
  next.push({ ...u });
  return next.slice(-max);
}

export function transcriptText(lines: CaptionLine[]): string {
  return lines.map((l) => `${l.speaker}: ${l.text}`).join("\n");
}
