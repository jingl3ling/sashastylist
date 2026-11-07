# Demo script: meet Sasha

## Express version: for the video, under 2 minutes

Say "in a hurry" so Sasha takes the fast path. Empty the bag and reload the page before each take.

| # | You say | What should happen | About |
|---|---|---|---|
| 1 | *(Click Start video call.)* | Sasha introduces herself and asks your name. | 0:10 |
| 2 | "I'm Mike. I'm in a hurry. I've got a beach wedding in Italy and about a thousand dollars." | She scores your outfit in one line, and instant looks land on the outfit board. | 0:30 |
| 3 | *(Let her talk.)* | She explains why the pieces work together. | 0:50 |
| 4 | "Love the first one, but make the shoes darker." | A live run starts and the activity feed moves. This is the autonomy moment. She tells a short story while it runs. | 1:30 |
| 5 | "Perfect. Add the whole look to my bag." | Every piece goes in, in a common size, and the bag count updates. | 1:45 |

If the live run is slow, cut the wait in Loom's editor.

## Full version: for a live demo

The story: A shopper meets Sasha, shows off today's outfit, and asks for a tuxedo for a summer wedding in Italy. Sasha backs the idea and gently nudges toward linen. Instant looks land in about a second, then a ZooWork agent builds a custom look live around the suit. Target is about two minutes, including one live styling run.

Say your lines as written, using your own name. Sasha's replies are live, so they'll vary. The phrases below were checked against the real catalog search.

## The script

| # | You say | What should happen | Sasha, roughly |
|---|---|---|---|
| 1 | *(Click Start video call in the store.)* | Sasha appears beside the store. | Introduces herself, says how this works, and asks your name. |
| 2 | "I'm Mike." | The camera sees your outfit. | Says what she can see, invites you to stand if you can, and asks what styles you like, all in one go. |
| 3 | *(Stand up if you have room. Don't wait to answer.)* | She keeps talking while you move. | Waits for your answer. |
| 4 | "Clean and classic. Nothing too flashy." | Nothing yet. | Gives your outfit a quick score out of ten, then asks what you're shopping for. |
| 5 | "I've got a wedding in Italy this summer." | `search_products` with style Formal. The shop filters itself. | Gets excited, says some new items just came in, and asks your budget. |
| 6 | "I've got about fifteen hundred dollars, and I was thinking a tuxedo." | `search_products` for "tuxedo outfit". Ten full tuxedos appear. | Backs the idea, then asks if she can show something lighter for summer in Italy. |
| 7 | "Sure, show me." | `search_products` for "linen suit", then `show_product` opens the Ink Blue Double Breasted Linen Suit (MW-0374, $595). | One reason linen works for the heat, and asks what you think. |
| 8 | "Okay, I like that. Show me some complete looks for the wedding." | Nothing yet. | Asks if you have anything to start with. |
| 8b | "No, build the whole thing." | `style_outfit` returns pre-styled beach wedding looks in about a second. | Goes straight to the looks and asks which you like. |
| 9 | "Those are nice, but I want that linen suit. Build me a custom look around it." | `style_outfit` starts a live run. The activity feed shows each step. This is the autonomy moment. | Says she's working in the background, then tells a short story about Kevin, her AI boyfriend. |
| 9b | *(Play along, and answer her questions.)* | The feed keeps running. Sasha nods to real steps from the agent between bits. | Asks you about yourself, like what you do for work, between stories. |
| 10 | *(Let her finish.)* | Two or three custom looks appear on the outfit board. | "We can come back to my story later. Your looks are in." Gives the `spoken_summary` and asks which look you like. |
| 11 | "I like the first one, but those shoes are too formal." | `style_outfit` swaps only the shoes. | Says she's swapping that piece and it'll be quicker. |
| 12 | "Perfect. I'll take the suit." | `show_product` opens the suit. | Asks if you want it in your bag. |
| 13 | "Yes, add it." | `add_to_bag` with MW-0374, in size 40R. The bag updates. | Confirms it's in the bag, then offers a casual outfit for the rest of the trip. |
| 14 | "Next time. I'm good for now." | Nothing. The demo stops before payment. | Teases you once and says the bag's ready. |

## If something goes wrong

| Problem | What to do |
|---|---|
| Sasha doesn't mention your outfit | Say: "Want to see what I'm wearing?" |
| She pauses while you stand | Just answer her style question. |
| Sasha doesn't nudge at step 6 | Say: "Is a tux too much for summer in Italy?" |
| The shop doesn't move | Say the request again using the exact product words, like "linen suit". |
| Sasha goes quiet during the run | Ask: "How's it looking?" |
| She says the looks are in, but they aren't | Say: "I don't see them yet." Keep the feed on screen. |
| The shoes in the look aren't formal | Swap line 11 for whichever piece stands out: "That shirt's not me." |
| Video fails | Type the brief in the text box: "Wedding in Italy this summer, $1,500, linen suit." The same run starts. |

## Before you record

- Do one full run first, and time it. Each live `style_outfit` run takes about 45 seconds, and can return two looks instead of three.
- If it runs long, cut step 14 first, then step 11. Never cut steps 8 to 10.
- Instant looks are the default. They ignore what you said in the call, so step 9 is what gets the linen suit in. To skip them, add `?avatar_instant=0` to the store address.
- The twirl needs room, so set the laptop where you can step back and be seen from the waist up.
