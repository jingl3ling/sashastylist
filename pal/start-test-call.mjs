#!/usr/bin/env node
// Starts one test call with Sasha and prints the link to open in a browser.
// Run from anywhere: node pal/start-test-call.mjs
// Each run uses call minutes. Calls are capped at 5 minutes to protect them.

import { existsSync, readFileSync } from "node:fs";
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

const idFile = join(here, "pal-id.txt");
if (!existsSync(idFile)) {
  console.error("No pal/pal-id.txt yet. Run node pal/create-pal.mjs first.");
  process.exit(1);
}

const res = await fetch("https://tavusapi.com/v2/conversations", {
  method: "POST",
  headers: { "Content-Type": "application/json", "x-api-key": apiKey },
  body: JSON.stringify({
    pal_id: readFileSync(idFile, "utf8").trim(),
    conversation_name: "Sasha personality test",
    conversational_context:
      "This is a personality test call. The store is not connected yet, so you cannot search, show products, build looks or add to the bag. If asked for products, give general style advice and say the store isn't hooked up yet. Never name specific products or prices.",
    properties: {
      max_call_duration: 300,
      participant_left_timeout: 15,
      participant_absent_timeout: 300, // Time allowed to join after the call starts.
    },
  }),
});

const text = await res.text();
if (!res.ok) {
  console.error(`Could not start the call. HTTP ${res.status}:\n${text}`);
  process.exit(1);
}

const call = JSON.parse(text);
console.log(`conversation_id: ${call.conversation_id}`);
console.log(`conversation_url: ${call.conversation_url}`);
