# Restart here

Resume prompt: "Read avatar/RESTART.md and avatar/HISTORY.md, then continue the avatar work."

## Current state (2026-11-07, ~12:10 PM, session 2)
- Branch soham/avatar-skeleton, rebased onto origin/main (Arjun's static site, Mike's pal/). **Not pushed yet.**
- Built against the real repo:
  - router.ts → window.Barn (search / openProduct / addToBag / getBag / showLooks / addFeedStep / resetFeed).
  - tools.json: search_products, show_product, **add_to_bag** (the name Sasha's prompt uses), style_outfit (budget required, plus optional rework_slot/rework_feedback).
  - $10,000 per-conversation guardrail in code. add_to_bag refuses when the bag would pass it. style_outfit caps budget_usd and says so.
  - style-outfit.ts: Jing's two-step API (POST /api/stylist/run → SSE /api/stylist/events), read with fetch. Steps go to Barn.addFeedStep.
  - web.ts → dist/avatar.js. Mounts the call in #avatar-slot. barn:brief goes to Sasha mid-call (conversation.respond), or straight to the stylist with no call (the budget is parsed from the text). ?avatar_debug=1 opens the mock panel.
  - create-conversation.mjs: `mountAvatarRoutes(app)` for Jing's Express server. It has a cooldown and a per-run call cap. It sends the demo shopper as conversational_context.
  - The React harness and contracts/*.ts drafts are deleted (superseded by Barn and Jing's contracts/index.mjs).
- Verified: typecheck, 26 tests, and an end-to-end run in Chrome. The real site plus Jing's stub backend plus dist/avatar.js all worked: search, show, add, sold out, the stylist feed streaming 9 steps, the budget cap, no budget, and typed briefs with and without a budget.
- avatar/.env holds TAVUS_API_KEY and TAVUS_PAL_ID (both set). The dry run of register-tools passed: all 4 tools would be created on PAL pd1695afe9a5.

## Next steps
1. DONE: tools registered on PAL pd1695afe9a5 (search_products ta0e9f4d6d5da, show_product te3a85078857e, add_to_bag td53261f3b55f, style_outfit tc288127b00d9). Re-run register-tools after any tools.json change.
2. DONE: branch pushed, PR opened. Jing's server on main already mounts create-conversation.mjs (verified locally: "avatar routes mounted").
3. DONE by Arjun (#9): the script tag, Barn.getProduct, and the size filter. Still his: showLooks / the outfit board.
4. Jing/Arjun: set TAVUS_API_KEY on Railway (the mount is already on main). Confirm the rework {slot, feedback} handling.
5. Mike: rework_slot/rework_feedback exist on style_outfit. He can switch the prompt's "Changing a look" from notes to these.
6. **Ask Soham before the first live call.** style_outfit now defaults to background mode (at Jing's request: real runs take 40–60 s). `conversation.respond` + `properties.text` is confirmed in the Tavus docs (interactions-protocols/overview). On the call, check that Sasha speaks the [Stylist result] message. ?avatar_mode=await switches back.
7. Final report: files, doc uncertainties, and the asks above.
