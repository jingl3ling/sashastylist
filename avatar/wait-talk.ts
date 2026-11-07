// Keeps Sasha's show going during a style_outfit run, so the shopper isn't left in silence.
// Every so often it passes the latest agent step to her as a [Stylist update] message.
// It only speaks up in a quiet moment, so she never talks over the shopper or herself.

export interface WaitTalkOptions {
  /** Sends the text to Sasha, e.g. as a conversation.respond message. */
  say: (text: string) => void;
  /** Milliseconds since anyone last spoke. 0 while someone is speaking. */
  quietMs: (now: number) => number;
  firstMs?: number; // wait before the first update; her filler line covers the start
  everyMs?: number; // gap between updates
  maxUpdates?: number; // per run
  quietNeededMs?: number; // silence needed before an update goes out
}

export function waitTalkText(step: string | undefined): string {
  const doing = step ? `The styling agent is on this step: "${step}".` : "The styling agent is still working.";
  return `[Stylist update, not said by the shopper] ${doing} Give it a quick nod, then keep your show going: carry on with your story, or start your next bit. Don't name products or prices.`;
}

export function createWaitTalk(opts: WaitTalkOptions) {
  const firstMs = opts.firstMs ?? 15_000;
  const everyMs = opts.everyMs ?? 15_000;
  const maxUpdates = opts.maxUpdates ?? 4;
  const quietNeededMs = opts.quietNeededMs ?? 2_500;
  let running = false;
  let nextAt = 0;
  let sent = 0;
  let step: string | undefined;

  return {
    start(now: number) {
      running = true;
      nextAt = now + firstMs;
      sent = 0;
      step = undefined;
    },
    step(label: string | undefined) {
      if (label) step = label;
    },
    stop() {
      running = false;
    },
    /** Call about once a second while a run is going. */
    tick(now: number) {
      if (!running || sent >= maxUpdates || now < nextAt) return;
      if (opts.quietMs(now) < quietNeededMs) return;
      opts.say(waitTalkText(step));
      sent += 1;
      nextAt = now + everyMs;
    },
  };
}

/**
 * Tracks who is speaking from Tavus observable events (docs.tavus.io, event-schemas/
 * conversation-started-stopped-speaking): event_type "conversation.started_speaking" /
 * "conversation.stopped_speaking" with properties.role "user" or "pal" (legacy duplicate: "replica").
 * Also accepts the older per-role names (conversation.user.started_speaking etc.) in case they appear.
 */
export function createSpeechTracker() {
  const speaking = { user: false, pal: false };
  let lastSpeechAt = 0;
  let seen = false;
  return {
    track(data: unknown, now: number) {
      const ev = data as { event_type?: string; properties?: { role?: string } } | null;
      const type = String(ev?.event_type ?? "");
      let role: string | undefined;
      let started: boolean;
      const flat = /^conversation\.(started|stopped)_speaking$/.exec(type);
      const legacy = /^conversation\.(user|replica|pal)\.(started|stopped)_speaking$/.exec(type);
      if (flat) {
        role = ev?.properties?.role;
        started = flat[1] === "started";
      } else if (legacy) {
        role = legacy[1];
        started = legacy[2] === "started";
      } else return;
      const who = role === "user" ? "user" : role === "pal" || role === "replica" ? "pal" : undefined;
      if (!who) return;
      speaking[who] = started;
      lastSpeechAt = now;
      seen = true;
    },
    /** Milliseconds since anyone last spoke; 0 while someone is speaking or before any speech event arrived. */
    quietMs(now: number) {
      if (!seen || speaking.user || speaking.pal) return 0;
      return now - lastSpeechAt;
    },
  };
}
