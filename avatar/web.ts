// Browser entry for the static site (site/index.html). Built to avatar/dist/avatar.js:
//   <script type="module" src="../avatar/dist/avatar.js"></script>   (after barn.js)
//
// - Mounts the Tavus video call into #avatar-slot (start/end buttons).
// - Routes Sasha's tool calls to window.Barn and sends results back over Daily app messages.
// - style_outfit runs on Jing's backend; its steps go to Barn.addFeedStep.
// - Typed briefs (barn:brief) go to Sasha during a call, or straight to the stylist without one.
//
// Config (optional), set before this script loads:
//   window.AVATAR_CONFIG = { backend: "https://...", styleOutfitMode: "await", shopperId: "demo-shopper", instant: false }  (defaults: background, instant on)
// URL overrides: ?backend=http://localhost:8787  ?avatar_mode=await  ?avatar_instant=0  ?avatar_debug=1 (mock tool-call panel)

import Daily, { type DailyCall, type DailyEventObjectAppMessage, type DailyParticipant } from "@daily-co/daily-js";
import { applyUtterance, parseUtterance, transcriptText, type CaptionLine } from "./captions";
import { mountDebugPanel } from "./debug-panel";
import { createRouter, type RouterLogEntry, type ToolCallMessage } from "./router";
import { parseBudget, stylistClient } from "./style-outfit";
import type { Barn } from "./types";
import { createSpeechTracker, createWaitTalk } from "./wait-talk";

const RAILWAY = "https://backend-production-6d9d.up.railway.app";

interface AvatarConfig {
  backend?: string;
  styleOutfitMode?: "await" | "background";
  shopperId?: string;
  instant?: boolean;
}

declare global {
  interface Window {
    AVATAR_CONFIG?: AvatarConfig;
    Avatar?: unknown;
  }
}

const params = new URLSearchParams(location.search);
const cfg: AvatarConfig = window.AVATAR_CONFIG ?? {};
const isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
const backend = (params.get("backend") ?? cfg.backend ?? (isLocal ? "http://localhost:8787" : RAILWAY)).replace(/\/+$/, "");
// Preset looks (Jing #29): on by default for speed (team call, Nov 7). The backend only serves them for
// formal wedding / beach wedding / beach vacation when 2+ looks fit the budget; reworks and other occasions
// still run the live agent. Turn off with ?avatar_instant=0 or AVATAR_CONFIG.instant = false.
const instant = params.get("avatar_instant") !== "0" && cfg.instant !== false;
const mode = (params.get("avatar_mode") as AvatarConfig["styleOutfitMode"]) ?? cfg.styleOutfitMode ?? "background"; // Jing: runs take ~40-60 s; don't hold the tool result

const barn = (): Barn | undefined => window.Barn;
const log: RouterLogEntry[] = [];

// Who's talking, so wait talk never cuts anyone off.
const speech = createSpeechTracker();

const waitTalk = createWaitTalk({
  say: (text) => {
    if (conversationId) send({ message_type: "conversation", event_type: "conversation.respond", conversation_id: conversationId, properties: { text } });
  },
  quietMs: (now) => speech.quietMs(now),
});

const runStylist = stylistClient({
  baseUrl: backend,
  onStart: () => barn()?.resetFeed(),
  onStep: (s) => {
    barn()?.addFeedStep(s);
    if (s.status === "start") waitTalk.step(s.label);
  },
});

const router = createRouter({
  bridge: barn,
  shopperId: cfg.shopperId,
  styleOutfitMode: mode,
  instant,
  styleOutfit: async (req) => {
    waitTalk.start(Date.now());
    const timer = setInterval(() => waitTalk.tick(Date.now()), 1_000);
    try {
      return await runStylist(req);
    } finally {
      clearInterval(timer);
      waitTalk.stop();
    }
  },
  onLog: (e) => {
    log.push(e);
    if (log.length > 200) log.shift();
  },
  logger: (line) => console.log(`[avatar] ${line}`),
});

// ---- call lifecycle ----

let call: DailyCall | undefined;
let conversationId: string | undefined;
let state: "idle" | "starting" | "live" | "ending" | "error" = "idle";

const slot = () => document.getElementById("avatar-slot");

// ---- captions (who said what) ----

let captions: CaptionLine[] = [];
let ccOn = (() => {
  try {
    return localStorage.getItem("avatar.cc") !== "0";
  } catch {
    return true;
  }
})();
let loggedUtterance = false;

function transcriptPanel(): HTMLDetailsElement | null {
  const el = slot();
  if (!el) return null;
  let panel = document.querySelector<HTMLDetailsElement>(".avatar-transcript");
  if (!panel) {
    panel = document.createElement("details");
    panel.className = "avatar-transcript";
    panel.open = true;
    panel.style.cssText = "margin:8px 0 0;font:12.5px/1.45 system-ui,sans-serif;color:inherit";
    panel.innerHTML = `
      <summary style="cursor:pointer;font-weight:600;display:flex;justify-content:space-between;align-items:center">Transcript
        <button type="button" class="avatar-transcript-copy" style="font:11px system-ui,sans-serif;padding:1px 6px;border-radius:4px;border:1px solid currentColor;background:none;color:inherit;cursor:pointer">Copy</button></summary>
      <div class="avatar-transcript-lines" style="max-height:180px;overflow:auto;margin-top:6px;display:grid;gap:4px"></div>`;
    panel.querySelector<HTMLButtonElement>(".avatar-transcript-copy")!.onclick = (e) => {
      e.preventDefault();
      navigator.clipboard?.writeText(transcriptText(captions)).catch(() => {});
    };
    el.after(panel);
  }
  return panel;
}

function renderCaptions() {
  const ui = slot()?.querySelector(".avatar-ui");
  const bar = ui?.querySelector<HTMLDivElement>(".avatar-cc");
  const toggle = ui?.querySelector<HTMLButtonElement>(".avatar-cc-toggle");
  if (toggle) {
    toggle.hidden = state !== "live";
    toggle.setAttribute("aria-pressed", String(ccOn));
    toggle.style.opacity = ccOn ? "1" : "0.5";
  }
  if (bar) {
    const recent = captions.slice(-2);
    bar.hidden = !ccOn || state !== "live" || recent.length === 0;
    bar.replaceChildren(
      ...recent.map((l) => {
        const row = document.createElement("div");
        const who = document.createElement("b");
        who.textContent = `${l.speaker}: `;
        who.style.color = l.speaker === "Sasha" ? "#ffd479" : "#9fd3ff";
        row.append(who, document.createTextNode(l.text));
        return row;
      }),
    );
  }
  const panel = captions.length ? transcriptPanel() : document.querySelector<HTMLDetailsElement>(".avatar-transcript");
  if (!panel) return;
  panel.hidden = captions.length === 0;
  const list = panel.querySelector<HTMLDivElement>(".avatar-transcript-lines")!;
  const atBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 8;
  list.replaceChildren(
    ...captions.map((l) => {
      const row = document.createElement("div");
      const who = document.createElement("b");
      who.textContent = `${l.speaker}: `;
      row.append(who, document.createTextNode(l.text));
      if (!l.final) row.style.opacity = "0.7";
      return row;
    }),
  );
  if (atBottom) list.scrollTop = list.scrollHeight;
}

function onCaption(data: unknown) {
  const type = String((data as { event_type?: string })?.event_type ?? "");
  if (!type.startsWith("conversation.utterance")) return;
  if (!loggedUtterance) {
    loggedUtterance = true;
    console.log("[avatar] first utterance payload (captions read this shape):", data);
  }
  const u = parseUtterance(data);
  if (!u) return;
  captions = applyUtterance(captions, u);
  renderCaptions();
}

function render(message?: string) {
  const el = slot();
  if (!el) return;
  let ui = el.querySelector<HTMLDivElement>(".avatar-ui");
  if (!ui) {
    el.replaceChildren();
    ui = document.createElement("div");
    ui.className = "avatar-ui";
    ui.style.cssText = "position:relative;width:100%;height:100%;min-height:180px;background:#111;border-radius:inherit;overflow:hidden";
    ui.innerHTML = `
      <video autoplay playsinline muted style="width:100%;height:100%;object-fit:cover;display:block"></video>
      <audio autoplay></audio>
      <div class="avatar-overlay" style="position:absolute;inset:0;display:grid;place-items:center;gap:8px;color:#eee;font:14px system-ui,sans-serif;text-align:center;padding:12px"></div>
      <div class="avatar-cc" aria-live="polite" style="position:absolute;left:8px;right:96px;bottom:8px;display:grid;gap:2px;padding:6px 8px;border-radius:6px;background:rgba(0,0,0,.62);color:#fff;font:13px/1.35 system-ui,sans-serif;text-align:left" hidden></div>
      <button class="avatar-cc-toggle" type="button" aria-pressed="true" title="Captions" style="position:absolute;right:8px;top:8px;padding:2px 7px;border-radius:4px;border:1px solid rgba(255,255,255,.6);background:rgba(0,0,0,.45);color:#fff;font:600 11px system-ui,sans-serif;cursor:pointer" hidden>CC</button>
      <button class="btn avatar-end" type="button" style="position:absolute;right:8px;bottom:8px" hidden>End call</button>`;
    ui.querySelector<HTMLButtonElement>(".avatar-end")!.onclick = () => void end();
    ui.querySelector<HTMLButtonElement>(".avatar-cc-toggle")!.onclick = () => {
      ccOn = !ccOn;
      try {
        localStorage.setItem("avatar.cc", ccOn ? "1" : "0");
      } catch {}
      renderCaptions();
    };
    el.append(ui);
  }
  renderCaptions();
  const overlay = ui.querySelector<HTMLDivElement>(".avatar-overlay")!;
  const endBtn = ui.querySelector<HTMLButtonElement>(".avatar-end")!;
  endBtn.hidden = state !== "live";
  if (state === "live" && !message) {
    overlay.hidden = true;
    return;
  }
  overlay.hidden = false;
  overlay.replaceChildren();
  const p = document.createElement("p");
  p.style.margin = "0";
  p.textContent =
    message ??
    ({ idle: "Talk to Sasha, your video stylist.", starting: "Connecting to Sasha…", ending: "Ending call…", error: "Couldn't connect.", live: "" } as const)[state];
  overlay.append(p);
  if (state === "idle" || state === "error") {
    const b = document.createElement("button");
    b.className = "btn";
    b.type = "button";
    b.textContent = state === "error" ? "Try again" : "Start video call";
    b.onclick = () => void start();
    overlay.append(b);
  }
}

function syncMedia() {
  const ui = slot()?.querySelector(".avatar-ui");
  if (!call || !ui) return;
  const remote = Object.values(call.participants()).find((p: DailyParticipant) => !p.local);
  const track = (kind: "video" | "audio") => {
    const t = remote?.tracks?.[kind];
    return t && t.state === "playable" ? t.persistentTrack : undefined;
  };
  const video = ui.querySelector("video")!;
  const audio = ui.querySelector("audio")!;
  const v = track("video");
  const a = track("audio");
  const curV = (video.srcObject as MediaStream | null)?.getVideoTracks()[0];
  if (v && curV?.id !== v.id) video.srcObject = new MediaStream([v]);
  if (!v && curV) video.srcObject = null;
  const curA = (audio.srcObject as MediaStream | null)?.getAudioTracks()[0];
  if (a && curA?.id !== a.id) {
    audio.srcObject = new MediaStream([a]);
    audio.play().catch(() => {});
  }
  if (!a && curA) audio.srcObject = null;
  if (state === "live") render(remote ? undefined : "Waiting for Sasha to join…");
}

function send(msg: unknown) {
  if (!call || state !== "live") return;
  try {
    call.sendAppMessage(msg, "*");
  } catch (e) {
    console.error("[avatar] sendAppMessage failed", e);
  }
}

async function onAppMessage(ev?: DailyEventObjectAppMessage) {
  if (!ev) return;
  speech.track(ev.data, Date.now());
  onCaption(ev.data);
  const result = await router.handle(ev.data, send);
  if (result) send(result);
}

async function start() {
  if (state === "starting" || state === "live") return;
  state = "starting";
  captions = [];
  render();
  try {
    await barn()?.ready;
    const r = await fetch(`${backend}/api/conversation`, { method: "POST", headers: { "content-type": "application/json" }, body: "{}" });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error ?? `HTTP ${r.status}`);
    conversationId = data.conversation_id;
    Daily.getCallInstance()?.destroy();
    call = Daily.createCallObject({ subscribeToTracksAutomatically: true });
    call
      .on("app-message", onAppMessage)
      .on("participant-joined", syncMedia)
      .on("participant-updated", syncMedia)
      .on("participant-left", syncMedia)
      .on("track-started", syncMedia)
      .on("track-stopped", syncMedia)
      .on("left-meeting", () => void cleanup("Call ended."))
      .on("error", (e) => void cleanup(`Call error: ${e?.errorMsg ?? "unknown"}`, true));
    await call.join({ url: data.conversation_url });
    state = "live";
    syncMedia();
  } catch (e) {
    console.error("[avatar] start failed", e);
    await cleanup(`Couldn't start the call: ${(e as Error).message}. You can still type to the stylist below.`, true);
  }
}

async function cleanup(message: string, isError = false) {
  const c = call;
  call = undefined;
  if (c) {
    try {
      await c.leave();
    } catch {}
    try {
      await c.destroy();
    } catch {}
  }
  state = isError ? "error" : "idle";
  render(message);
}

async function end() {
  if (state !== "live") return;
  state = "ending";
  render();
  const id = conversationId;
  conversationId = undefined;
  if (id) {
    fetch(`${backend}/api/conversation/end`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ conversation_id: id }),
    }).catch(() => {});
  }
  await cleanup("Call ended.");
}

addEventListener("pagehide", () => {
  if (conversationId) {
    navigator.sendBeacon?.(
      `${backend}/api/conversation/end`,
      new Blob([JSON.stringify({ conversation_id: conversationId })], { type: "application/json" }),
    );
  }
});

// ---- typed-brief fallback ----

let briefs = 0;
addEventListener("barn:brief", async (e) => {
  const text = String((e as CustomEvent<{ text: string }>).detail?.text ?? "").trim();
  if (!text) return;
  if (state === "live" && conversationId) {
    // Sasha hears it as if spoken.
    send({ message_type: "conversation", event_type: "conversation.respond", conversation_id: conversationId, properties: { text } });
    return;
  }
  // No call: go straight to the stylist.
  const budget = parseBudget(text);
  if (!budget) {
    barn()?.resetFeed();
    barn()?.addFeedStep({ id: "budget", label: "Add a budget so I can build looks, e.g. “about $800”.", status: "blocked" });
    return;
  }
  const msg: ToolCallMessage = {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id: conversationId ?? `typed-${Date.now()}`,
    properties: {
      name: "style_outfit",
      arguments: { occasion: text, budget_usd: budget, notes: "Typed brief, no video call." },
      tool_call_id: `typed_${++briefs}`,
    },
  };
  const r = await router.handle(msg);
  if (r?.properties.status === "error") {
    barn()?.addFeedStep({ id: "error", label: shopperError(String(r.properties.output)), status: "blocked" });
  }
});

/** Router errors are written for Sasha ("Say so plainly..."); the feed needs words for the shopper. */
export function shopperError(forSasha: string): string {
  const q = /"([^"]*(?:men|women)[^"]*\?)"/i.exec(forSasha);
  if (q) return `${q[1]} Add it to your brief and send again.`;
  if (/budget/i.test(forSasha)) return "Add a budget so I can build looks, e.g. “about $800”.";
  if (/limit/i.test(forSasha)) return "That's past the $10,000 limit for this visit.";
  if (/still being built/i.test(forSasha)) return "Still building your looks. They'll appear here in a moment.";
  return "I couldn't finish those looks just now. Please send your brief again.";
}

// ---- boot ----

function boot() {
  render();
  window.Avatar = { router, start, end, log, backend, mode, caption: onCaption, get captions() { return captions; }, get state() { return state; } };
  if (params.has("avatar_debug")) mountDebugPanel(router, log);
  console.log(`[avatar] ready: backend ${backend}, style_outfit ${mode}${instant ? ", instant presets ON" : ""}`);
}
if (document.readyState === "loading") addEventListener("DOMContentLoaded", boot, { once: true });
else boot();
