#!/usr/bin/env node
// Creates the Sasha PAL, or updates it if pal/pal-id.txt already exists.
// Run from anywhere: node pal/create-pal.mjs
// Reads TAVUS_API_KEY from the environment or a gitignored .env. Never commit the key.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
for (const envPath of [join(here, ".env"), join(here, "..", ".env")]) {
  if (existsSync(envPath)) process.loadEnvFile(envPath);
}

const apiKey = process.env.TAVUS_API_KEY;
if (!apiKey) {
  console.error("Missing TAVUS_API_KEY. Add it to the .env file in the project root.");
  process.exit(1);
}

const API = "https://tavusapi.com/v2";
const idFile = join(here, "pal-id.txt");

const pal = {
  pal_name: "Sasha - Men's Fashion Barn",
  system_prompt: readFileSync(join(here, "system-prompt.md"), "utf8"),
  pipeline_mode: "full",
  default_face_id: "r347a65434bb", // Ruby, stock Phoenix-4.5 face
  layers: {
    perception: {
      // raven-2 over raven-1: better camera understanding, plus visual history
      // so Sasha can refer back to items shown earlier in the call.
      perception_model: "raven-2",
      callouts: "off", // She reviews outfits only when asked.
      visual_awareness_queries: [
        "What clothing is the user wearing? Describe each visible garment, its color, and how the pieces go together.",
        "Is the user holding a clothing item, shoe, or accessory up to the camera? If so, what is it?",
      ],
    },
    conversational_flow: {
      turn_detection_model: "sparrow-2",
      turn_taking_patience: "low", // Quick to answer, to suit a fast talker.
      pal_interruptibility: "high", // The shopper can cut in, as with a friend.
      idle_engagement: "patient", // May break long silences, such as the style_outfit wait.
    },
    tts: {
      voice_settings: { speed: 1.1 }, // Slightly fast. Range tops out at 1.2.
    },
  },
};

async function call(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { "Content-Type": "application/json", "x-api-key": apiKey },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`${method} ${path} failed with HTTP ${res.status}:\n${text}`);
    process.exit(1);
  }
  return text ? JSON.parse(text) : {};
}

if (existsSync(idFile)) {
  const palId = readFileSync(idFile, "utf8").trim();
  // JSON Patch "add" replaces a value that already exists.
  await call(
    "PATCH",
    `/pals/${palId}`,
    ["pal_name", "system_prompt", "default_face_id", "layers"].map((field) => ({
      op: "add",
      path: `/${field}`,
      value: pal[field],
    })),
  );
  console.log(`Updated PAL. pal_id: ${palId}`);
} else {
  const created = await call("POST", "/pals", pal);
  writeFileSync(idFile, `${created.pal_id}\n`);
  console.log(`Created PAL. pal_id: ${created.pal_id}`);
}
