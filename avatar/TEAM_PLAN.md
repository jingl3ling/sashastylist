# Video Personal Shopper: 4-Hour Team Plan
Nov 7, 2026 · Mike Halpert. (Copy of the team doc, pasted by Soham into the Claude session for reference. The team doc is the source of truth.)

Build a menswear shop with a live video stylist beside it. The Tavus avatar is the face and voice; a ZooWork agent is the brain, running a multi-step styling job on its own while the shopper watches. Fashion track. Aim to finish by 3:00 PM, an hour before the 4:00 PM lock. Nothing has been built or run end to end yet.

## How we score well
Judges score every submission after 4:00 PM; only the top 5 demo live at 5:00 PM, so the entry must win without us in the room. All five criteria are weighted equally.

| Criterion | Scale | How we earn it | Owner |
|---|---|---|---|
| Runs on Managed Agents | Does or doesn't | Stylist live on ZooWork by 12:00 PM; ZooWork console is the fallback front door | Jing |
| Working Agent | Slips / mostly works / solid | Deployed site, scripted tests, a text box if video fails | Soham |
| Industry Fit | Toy / plausible / ready | Retailer plugs in its own catalog; looks build on what the shopper already owns | Mike |
| Autonomy | Babysat / guided / self-sufficient | One spoken brief starts a many-step run, shown live in an activity feed | Jing |
| Technical Execution | Rough / functional / polished | Fast and slow paths kept separate, every product ID validated | Soham |
| Use of the Platform | Minimal / decent / strong | Memory, MCP, web search, Sessions, streamed Events, Artifacts, Schedules | Jing |

Another team is called Stylist Agent, so live video and visible autonomy are what set us apart.

## Settle in the first 20 minutes
We're building on a Tavus PAL with a Phoenix-4.5 face (Griffin is out of scope).

| Question | Owner | Why | If not ready |
|---|---|---|---|
| Is the team registered; what does the submission form ask? | Soham | Everything goes through the portal by 4:00 PM; form fields unknown without sign-in | Ask Jon or the ZooWork table today |
| Who has a Tavus API key; limits? | Mike | Project .env has only the ZooWork key; Mike + Soham share minutes, may hit concurrency limits | Key from PAL Maker; check minutes and concurrent-call limits |
| Where is the menswear catalog? | Mike → Arjun | Not in the repo yet; Arjun and Jing depend on it | Arjun commits 10 sample products in the schema below |
| What is ZooData? | Jing | Handbook offers commerce data via ZooWork | Ask at the ZooWork table; keep our own catalog |

ZooWork is ready: the key works, balance $99.95, SDK 0.14.0, no agents yet.

## The demo (~90 s)
1. Shopper opens the site; avatar greets them by name beside the catalog.
2. "I have a summer wedding in Italy and about $800 to spend."
3. Avatar asks one follow-up while the shop filters itself live.
4. They ask for a full look. The agent takes over; the activity feed shows each step.
5. Three looks appear on the outfit board, reusing what the shopper owns; each piece has a reason.
6. "The shoes are too formal." The agent reworks that piece in the same Session.
7. Avatar opens the jacket page, confirms size, adds to cart after a spoken yes. Stops before payment.

Stretch, in order: scheduled wardrobe watch for new arrivals after the call; avatar commenting on what the shopper wears on camera.

## Architecture
The avatar controls our own shop through tool calls, not a remote browser (Tavus Browser Use only runs prewritten flows). Two speeds: Tavus's own LLM handles speech and quick shop actions; ZooWork owns every styling decision. ZooWork is NOT Tavus's custom LLM (it would add an agent turn to every reply).

### The styling run (one style_outfit call = one ZooWork turn)
1. Search memory for sizes, preferences, closet.
2. Research the occasion and current trends on the web.
3. Search the catalog per slot: jacket, shirt, trousers, shoes.
4. Build three looks reusing closet pieces.
5. Check each look against budget, sizes, formality; replace failures.
6. Save learnings to memory; publish a lookbook Artifact.
7. Return looks as JSON for the outfit board.
The backend streams ZooWork Events to the page (activity feed).

## Who does what
| Person | Owns | Proof by 12:30 PM | Final deliverable |
|---|---|---|---|
| Mike | PAL personality (prompt, voice, face, pacing, how it talks about tools); demo shopper profile + closet | PAL created and tested via conversation_url; first personality draft | Natural stylist through the full demo + demo script |
| Arjun | Next.js shop, catalog data, catalog MCP route, deployment | Grid, filters, cart from products.json; shop commands run from browser console; empty site deployed | Live filtering, product page, cart, outfit board, activity feed, full tagged catalog |
| Jing | ZooWork stylist, styling run, event relay, shopper memory, schedule | Hello-world agent live by 12:00; a real run returns valid JSON, timed | All seven steps, Events streaming to the page |
| Soham | Tavus integration: video embed, tool registration, tool router; then testing, submission, pitch | Video call runs in the shop page; one tool call round trip | All four tools working, tests passing, recording + portal entry submitted |

Handoffs: Mike → Arjun catalog at kickoff. Mike creates the shared PAL and posts its ID. **Soham + Arjun pair at the 12:30 PM gate** (avatar meets page). Only Jing creates the ZooWork agent.

## Working together
Owners decide (2-minute debate max). Say so after 15 min stuck. Gates at 12:30, 2:00, 3:00 (5-minute standups). Announce contract changes. Protect the 90-second demo. Mike keeps time.

## GitHub
Mike creates a private repo, invites everyone, pushes the project (.gitignore excludes .env; ZooWork skill for Claude Code).

| Path | Owner | Holds |
|---|---|---|
| app/ | Arjun | Shop pages and UI |
| data/ | Arjun | products.json and images |
| app/api/ | Jing | Backend routes, except Arjun's app/api/mcp/ |
| agent/ | Jing | Stylist instructions and setup scripts |
| avatar/ | Soham | Video call, tool router, tool registration |
| pal/ | Mike | PAL prompt and configuration |
| contracts/ | Everyone | Tool, product and stylist shapes |

1. Pull main, branch `yourname/short-task`. 2. Small commits; push at least every 30 min. 3. PR into main; self-merge if it runs locally and only touches your folders. 4. One teammate's OK before changing contracts/ or others' folders. 5. Keep main runnable. 6. Never commit keys; names in .env.example. 7. Read AI-written code before merging; keep contracts in a CLAUDE.md.

## Shared contracts
### Avatar tools (all app_message delivery; browser handles them; no hard timeout; no public webhook)
| Tool | Args | on_call | on_resolve | Effect |
|---|---|---|---|---|
| search_products | query, category, max_price, color | silent | generate_response | Page filters; top 5 back to avatar |
| show_product | product_id | silent | generate_response | Page opens that product |
| add_to_cart | product_id, size | silent | generate_response | Added only after a spoken yes |
| style_outfit | occasion, budget_usd, notes | generate_filler | generate_response | Backend starts the styling run; activity feed, then outfit board |

Tool results under 4 KB (larger app messages are dropped silently). Send IDs and short names; the page loads full details.

### Product record
```json
{
  "id": "jkt-001",
  "name": "Unstructured Linen Blazer",
  "brand": "Example Brand",
  "category": "jacket",
  "price_usd": 240,
  "colors": ["sand"],
  "sizes": ["S", "M", "L", "XL"],
  "formality": 3,
  "seasons": ["spring", "summer"],
  "style_tags": ["italian", "relaxed"],
  "image_url": "/images/jkt-001.jpg",
  "description": "One or two sentences the stylist can use."
}
```

### Stylist response
```json
{
  "looks": [
    {
      "outfit_name": "Amalfi Wedding Guest",
      "items": [
        { "product_id": "jkt-001", "slot": "jacket", "why": "Linen stays cool in the heat." },
        { "closet_item": "Navy chinos", "slot": "trousers", "why": "Already owned, so the budget goes further." }
      ],
      "total_usd": 240
    }
  ],
  "spoken_summary": "Two sentences at most, written to be said aloud.",
  "lookbook_artifact": "ID of the published lookbook"
}
```
The backend checks every product_id against the catalog and recalculates total_usd before anything reaches the page.

## ZooWork rules (Jing)
Hello-world by 12:00; create the agent once, save agent_id; one Session per video call. Catalog in /workspace via the documented upload flow, then Arjun's public catalog MCP route after 12:30 (permission 'always_allow'). Stable `actor: { ref }` per shopper; instructions must call memory_search. Relay Events with toolCall()/assistantText(), break on run.finished. Time haiku-5-5 vs sonnet-5-5. Wardrobe watch = enabled Schedule with yearly cron, triggered by hand, deleted after. ZOOWORK_API_KEY backend only.

## Timeline
Finish by 3:00 PM, submit by 3:30 PM, lock 4:00 PM. Gates: 12:30 (most important; if it fails, all four fix it first), 2:00 (ZooWork office hours), 3:00. The recording must stand on its own.

## Risks
| Risk | Signal | Response |
|---|---|---|
| Styling run too slow | First timing test; target < 60 s | Faster model, lower thinking, start the run as soon as the occasion is known, cache demo looks as last resort |
| Tavus drops a slow tool result | Avatar never speaks the result after a long run | Test a 60–90 s call early. If it fails, return at once and send the result as a new message |
| Video fails, agent works | Tavus errors | Switch to the text box |
| Avatar skips/misuses a tool | Scripted tests from 12:30 | Tighten tool descriptions and system prompt |
| Tool results vanish | Avatar acts as if nothing returned | Log every result's size in the router; trim below 4 KB |
| API/network fails at 5:00 | Rehearsal | Stable Session ready; play the recording |
| Edge cases | Veris AI sandbox, scripted tests | Fix only what breaks the main story |
| Camera clothing comments unreliable | Not confirmed in Tavus docs | Stretch only |

Cut order: camera comments, wardrobe watch, lookbook Artifact, MCP switch, cart. Never cut: speech changing the page, and a visible multi-step ZooWork run.
