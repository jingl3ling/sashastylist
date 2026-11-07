// Pushes avatar/tools.json to Tavus and attaches the tools to the PAL. Idempotent: tools are
// matched by name, created if missing, PATCHed to match tools.json otherwise, then attached
// (attaching an already-attached tool is a no-op per the docs).
//
// Uses the tools registry (/v2/tools + /v2/pals/{id}/tools), not the legacy inline
// layers.llm.tools, because on_call / on_resolve are only honoured on registry tools.
//
//   npm --prefix avatar/dev run register-tools            # apply
//   npm --prefix avatar/dev run register-tools -- --dry   # print the plan only
//
// Env (avatar/.env): TAVUS_API_KEY, TAVUS_PAL_ID. This makes no conversation and uses no minutes.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const API = "https://tavusapi.com/v2";

try {
  process.loadEnvFile(join(here, ".env"));
} catch {
  // no avatar/.env; rely on the real environment
}

const apiKey = process.env.TAVUS_API_KEY;
const palId = process.env.TAVUS_PAL_ID;
const dry = process.argv.includes("--dry");

interface ToolDef {
  name: string;
  [k: string]: unknown;
}
interface RemoteTool extends ToolDef {
  tool_id: string;
}

async function api<T>(method: string, path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { "x-api-key": apiKey!, "content-type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}: ${text.slice(0, 500)}`);
  return (text ? JSON.parse(text) : {}) as T;
}

async function findByName(name: string): Promise<RemoteTool | undefined> {
  const res = await api<{ data: RemoteTool[] }>("GET", `/tools?name_or_uuid=${encodeURIComponent(name)}&limit=50`);
  return res.data.find((t) => t.name === name);
}

async function main() {
  if (!apiKey || !palId) {
    console.error("Set TAVUS_API_KEY and TAVUS_PAL_ID in avatar/.env (see avatar/.env.example).");
    process.exit(1);
  }
  const tools: ToolDef[] = JSON.parse(readFileSync(join(here, "tools.json"), "utf8"));
  const ids: string[] = [];

  for (const tool of tools) {
    const existing = await findByName(tool.name);
    if (dry) {
      console.log(`${existing ? "update" : "create"} ${tool.name}${existing ? ` (${existing.tool_id})` : ""}`);
      if (existing) ids.push(existing.tool_id);
      continue;
    }
    if (existing) {
      await api("PATCH", `/tools/${existing.tool_id}`, tool);
      console.log(`updated ${tool.name} ${existing.tool_id}`);
      ids.push(existing.tool_id);
    } else {
      const created = await api<RemoteTool>("POST", "/tools", tool);
      console.log(`created ${tool.name} ${created.tool_id}`);
      ids.push(created.tool_id);
    }
  }

  if (dry) {
    console.log(`would attach ${ids.length} existing tool(s) to PAL ${palId}`);
    return;
  }
  const attached = await api<{ data: RemoteTool[] }>("POST", `/pals/${palId}/tools`, { tool_ids: ids });
  console.log(`PAL ${palId} now has ${attached.data.length} attached tool(s):`);
  for (const t of attached.data) {
    console.log(`  ${t.name} ${t.tool_id} on_call=${t.on_call} on_resolve=${t.on_resolve} delivery=${JSON.stringify(t.delivery)}`);
  }
}

main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
