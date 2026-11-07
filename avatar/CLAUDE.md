# avatar/ (Soham) — Tavus video stylist layer
- Edit only avatar/. Never touch root files, site/, data/, server/, agent/, pal/ (others own them; ask first).
- The site is static HTML/JS (site/, Arjun) with window.Barn (site/barn.js). The stylist backend is Jing's Express app (server/, contracts/index.mjs on jing/stylist-brain). avatar/types.ts mirrors both by hand.
- Browser code: web.ts → built to dist/avatar.js (committed; the site has no bundler). Rebuild after any .ts change: `npm --prefix avatar/dev run build`.
- Server code: create-conversation.mjs (plain JS), mounted in Jing's server with `mountAvatarRoutes(app)`.
- No keys in git (avatar/.env, gitignored). Never print .env values.
- Never start a live Tavus call (shared minutes) without asking Soham. Registering tools changes the shared PAL: ask first.
- Tavus API: PAL-era names (pal_id, face_id); tools via registry /v2/tools + /v2/pals/{id}/tools.
- Tests: `npm --prefix avatar/dev test`. Debug: serve the repo root, open /site/?avatar_debug=1 (mock tool calls, no minutes).
- Resume: avatar/RESTART.md. Log: avatar/HISTORY.md. TEAM_PLAN.md is the early plan; the repo on main is now the truth.
