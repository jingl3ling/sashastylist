// Browser entry for the static site (site/index.html). Built to avatar/dist/avatar.js:
//   <script type="module" src="../avatar/dist/avatar.js"></script>   (after barn.js)
//
// - Mounts the Tavus video call into #avatar-slot (start/end buttons).
// - Routes Sasha's tool calls to window.Barn and sends results back over Daily app messages.
// - style_outfit runs on Jing's backend; its steps go to Barn.addFeedStep.
// - Typed briefs (barn:brief) go to Sasha during a call, or straight to the stylist without one.
//
// Config (optional), set before this script loads:
//   window.AVATAR_CONFIG = { backend: "https://...", styleOutfitMode: "await", shopperId: "demo-shopper" }  (default mode: background)
// URL overrides: ?backend=http://localhost:8787  ?avatar_mode=await  ?avatar_debug=1 (mock tool-call panel)

import Daily, { type DailyCall, type DailyEventObjectAppMessage, type DailyParticipant } from "@daily-co/daily-js";
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
      <button class="btn avatar-end" type="button" style="position:absolute;right:8px;bottom:8px" hidden>End call</button>`;
    ui.querySelector<HTMLButtonElement>(".avatar-end")!.onclick = () => void end();
    el.append(ui);
  }
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
  const result = await router.handle(ev.data, send);
  if (result) send(result);
}

async function start() {
  if (state === "starting" || state === "live") return;
  state = "starting";
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
    barn()?.addFeedStep({ id: "error", label: String(r.properties.output), status: "blocked" });
  }
});

// ---- boot ----

function boot() {
  render();
  window.Avatar = { router, start, end, log, backend, mode, get state() { return state; } };
  if (params.has("avatar_debug")) mountDebugPanel(router, log);
  console.log(`[avatar] ready: backend ${backend}, style_outfit ${mode}`);
}
if (document.readyState === "loading") addEventListener("DOMContentLoaded", boot, { once: true });
else boot();
