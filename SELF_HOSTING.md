# Self-hosting the stylist

This is a fork of the hackathon project. One Node server on Railway does everything: it serves the store, runs the ZooWork styling agent, mounts the catalog MCP route, and creates the Tavus video calls. Keys live only in Railway variables (and your local `.env`), never in git.

`upstream` is the original team repo and its push URL is disabled, so a stray `git push` cannot reach it. Add your own `origin` before pushing (step 6).

## What you need
- Node 22.20 or later (`.nvmrc`).
- A ZooWork API key with funds: https://platform.zoowork.ai
- A Tavus API key with minutes: https://platform.tavus.io
- A Railway account and a GitHub repo of your own.

## 1. Run it locally (free: stub mode, no ZooWork or Tavus calls)
```bash
nvm use
cp .env.example .env        # leave STYLIST_MODE=stub, SERVE_SITE=1
npm install
npm run start:local
```
Open http://localhost:8787/ . The store loads and the stylist panel streams fake steps. The video call will not start until step 2.

## 2. Tavus: your own avatar (PAL)
The original PAL ID was removed from this fork on purpose. With your key:
```bash
# TAVUS_API_KEY in .env first
node pal/create-pal.mjs               # creates the PAL, writes pal/pal-id.txt, prints the id
```
Put that id in `.env` as `TAVUS_PAL_ID`. Then register Sasha's tools on it:
```bash
cp avatar/.env.example avatar/.env    # fill TAVUS_API_KEY and TAVUS_PAL_ID
npm --prefix avatar/dev install
npm --prefix avatar/dev run register-tools -- --dry    # prints the plan, uses no minutes
npm --prefix avatar/dev run register-tools             # applies it
```
If the PAL has no default face, set `TAVUS_FACE_ID` as well. Sasha's personality is `pal/system-prompt.md`; re-run `create-pal.mjs` after editing it.

## 3. ZooWork: your own stylist agent
The original `agent/agent.json` was removed too, because that agent's MCP points at the original team's server.
```bash
npm run create-agent                  # dry run: shows what it would create
npm run create-agent -- --yes         # creates and starts it, writes agent/agent.json
```
Agent runs use your prepaid balance; check Usage in ZooWork Platform for the real charges.

## 4. Deploy on Railway
1. Push this folder to your own GitHub repo: `git remote add origin <your repo URL>` then `git push -u origin main`.
2. In Railway, create a project from that repo. The start command is `npm start`.
3. Set these variables (names only here, values from your accounts):

| Variable | Value |
|---|---|
| `ZOOWORK_API_KEY` | your ZooWork key |
| `ZOOWORK_AGENT_ID` | the id in `agent/agent.json` |
| `STYLIST_MODE` | `live` |
| `SERVE_SITE` | `1` |
| `TAVUS_API_KEY` | your Tavus key, no quotes or spaces |
| `TAVUS_PAL_ID` | the PAL id from step 2 |
| `ALLOWED_ORIGINS` | only if the store is hosted elsewhere, e.g. GitHub Pages |

`PORT` is set by Railway. Generate a public domain, then check `https://<your-app>/health` says `"mode":"live"` and open `https://<your-app>/`.

## 5. Point the agent at your own catalog route
Once the domain exists, the agent should search your server, not the original team's:
```bash
node --env-file=.env agent/set-mcp.mjs https://<your-app>/mcp
npm run sync-agent                    # uploads the catalog and the persona
```
The MCP route must stay public and unauthenticated, because ZooWork calls it from outside.

## 6. Check it end to end
- `/health` says `live`.
- Type a brief in the stylist box ("beach wedding, about $800"); the feed streams real steps and looks appear.
- Start a video call and say the same. Only one call at a time (Tavus concurrency and minutes).
- Calls are capped by `AVATAR_CALL_COOLDOWN_MS` (default 20 s) and `AVATAR_MAX_CALLS` (default 30 per server start).

## Things that still point at the original project
- **Product photos** load from `https://mhalpert.github.io/mens-fashion-barn/data/catalog/` (`site/app.js`, `server/mcp.js`). They are not in this repo (718 MB). If that site goes away, photos break.
- **Photos and copy belong to their brands** and are not licensed by this repo (see `README.md`). Keep the demo non-commercial.
- **Docs** under `avatar/` mention the original PAL and tool ids as history. Ignore them.
- **Avatar changes** need a rebuild: `npm --prefix avatar/dev install && npm --prefix avatar/dev run build` (the built `avatar/dist/avatar.js` is committed).

## Keys
Never commit `.env` or `avatar/.env` (both are gitignored). If a key is ever pasted into a chat or a commit, revoke it and create a new one.
