# Demo script: Alex and Sasha

The story: Alex comes in wanting a tuxedo for a summer wedding in Italy. Sasha backs the idea, gently nudges Alex toward linen, and a ZooWork agent builds the full look. Target is about 90 seconds, not counting extra time on the styling run.

Say Alex's lines as written. Sasha's replies are live, so they'll vary. The phrases below were checked against the real catalog search.

## The script

| # | Alex says | What should happen | Sasha, roughly |
|---|---|---|---|
| 1 | *(Opens the site and joins the call.)* | Sasha appears beside the store. | Greets Alex by name and asks what the event is. |
| 2 | "Hey Sasha. I've got a wedding in Italy this summer." | `search_products` with style Formal. The shop filters itself. | Gets excited, then checks Alex's size so she can search the racks: "I've got you as a forty regular, still right?" |
| 3 | "That's right. I've got about fifteen hundred dollars, and I was thinking a tuxedo." | `search_products` for "tuxedo outfit". Ten full tuxedos appear. | Backs the idea, then asks if she can show something lighter for summer in Italy. |
| 4 | "Sure, show me." | `search_products` for "linen suit", then `show_product` opens the Ink Blue Double Breasted Linen Suit (MW-0374, $595). | One reason linen works for the heat, and asks what Alex thinks. |
| 5 | "Okay, I like that. Build me a full look around it." | `style_outfit` starts. The activity feed shows each step. | Says it's working and points to the feed. |
| 6 | *(Stay quiet and let the feed run. This is the autonomy moment.)* | Three looks appear on the outfit board, reusing Alex's closet. | Gives the `spoken_summary` and asks which look Alex likes. |
| 7 | "I like the first one, but those shoes are too formal." | `style_outfit` swaps only the shoes. | Says she's swapping that piece and it'll be quicker. |
| 8 | "Perfect. I'll take the suit." | `show_product` opens the suit. | "You're a forty regular, right?" |
| 9 | "Yes, add it." | `add_to_bag` with MW-0374, size 40R. The bag updates. | Confirms it's in the bag, then offers a casual outfit for the rest of the trip. |
| 10 | "Next time. I'm good for now." | Nothing. The demo stops before payment. | Teases Alex once and says the bag's ready. |

## If something goes wrong

| Problem | What to do |
|---|---|
| Sasha doesn't nudge at step 3 | Say: "Is a tux too much for summer in Italy?" |
| Sasha asks for the budget before the size | Answer it, and say "forty regular" in the same breath. |
| Sasha asks for the size instead of confirming it | Her shopper details didn't load. Say "forty regular" and carry on. |
| The shop doesn't move | Say the request again using the exact product words, like "linen suit". |
| Sasha goes quiet during the run | Keep quiet and let the feed carry it. If you need filler, ask: "What's the vibe for an Italian wedding?" |
| The shoes in the look aren't formal | Swap line 7 for whichever piece stands out: "That shirt's not me." |
| Video fails | Type the brief in the text box: "Wedding in Italy this summer, $1,500, linen suit." The same run starts. |

## Before you record

- Sasha must have Alex's details at the start of the call, passed as `conversational_context` from `pal/demo-shopper.json`. Without them, she can't greet Alex by name or confirm the size.
- All four tools are attached to the PAL, and the catalog is uploaded to ZooWork.
- Do one full run first, and time it. Each `style_outfit` run has taken about 35 seconds so far, without a catalog.
- If it runs long, cut step 10 first, then step 7. Never cut steps 5 and 6.

## Bonus for a live demo

If there's time, ask "Rate my outfit" at the start. Sasha scores it out of ten on camera. It's a fun moment, but keep it out of the recording unless it worked well in rehearsal.
