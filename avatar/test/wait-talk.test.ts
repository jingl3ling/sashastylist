import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createSpeechTracker, createWaitTalk, waitTalkText } from "../wait-talk";

function setup(quiet = 10_000) {
  const said: string[] = [];
  let quietMs = quiet;
  const talk = createWaitTalk({ say: (t) => said.push(t), quietMs: () => quietMs });
  return { said, talk, setQuiet: (q: number) => (quietMs = q) };
}

describe("wait talk", () => {
  it("stays silent before the first update is due", () => {
    const { said, talk } = setup();
    talk.start(0);
    talk.tick(9_000);
    assert.equal(said.length, 0);
  });

  it("passes on the latest step", () => {
    const { said, talk } = setup();
    talk.start(0);
    talk.step("Checking your closet");
    talk.step("Searching the catalog");
    talk.tick(10_000);
    assert.deepEqual(said, [waitTalkText("Searching the catalog")]);
  });

  it("spaces updates out and stops at the maximum", () => {
    const { said, talk } = setup();
    talk.start(0);
    for (let t = 0; t <= 200_000; t += 1_000) talk.tick(t);
    assert.equal(said.length, 4);
  });

  it("waits for a quiet moment", () => {
    const { said, talk, setQuiet } = setup(0);
    talk.start(0);
    talk.tick(10_000);
    assert.equal(said.length, 0);
    setQuiet(3_000);
    talk.tick(11_000);
    assert.equal(said.length, 1);
  });

  it("says nothing after the run stops", () => {
    const { said, talk } = setup();
    talk.start(0);
    talk.stop();
    talk.tick(60_000);
    assert.equal(said.length, 0);
  });

  it("has no square brackets, which Tavus strips from messages", () => {
    assert.doesNotMatch(waitTalkText("Searching the catalog"), /[\[\]]/);
  });

  it("never names products", () => {
    assert.match(waitTalkText(undefined), /Don't name products or prices/);
  });
});

describe("speech tracker (Tavus started/stopped_speaking events)", () => {
  const ev = (type: string, role?: string) => ({ message_type: "conversation", event_type: type, properties: role ? { role } : {} });

  it("reads the documented event names with properties.role", () => {
    const t = createSpeechTracker();
    t.track(ev("conversation.started_speaking", "user"), 1_000);
    assert.equal(t.quietMs(5_000), 0, "user is talking");
    t.track(ev("conversation.stopped_speaking", "user"), 6_000);
    assert.equal(t.quietMs(9_000), 3_000);
  });

  it("treats pal and the legacy replica role as the same speaker", () => {
    const t = createSpeechTracker();
    t.track(ev("conversation.started_speaking", "pal"), 0);
    t.track(ev("conversation.started_speaking", "replica"), 0);
    t.track(ev("conversation.stopped_speaking", "pal"), 2_000);
    t.track(ev("conversation.stopped_speaking", "replica"), 2_000);
    assert.equal(t.quietMs(4_500), 2_500);
  });

  it("still accepts the older per-role names", () => {
    const t = createSpeechTracker();
    t.track(ev("conversation.replica.started_speaking"), 0);
    assert.equal(t.quietMs(10_000), 0);
    t.track(ev("conversation.replica.stopped_speaking"), 10_000);
    assert.equal(t.quietMs(13_000), 3_000);
  });

  it("never reports a quiet moment before any speech event arrives", () => {
    const t = createSpeechTracker();
    t.track(ev("conversation.tool_call"), 0);
    assert.equal(t.quietMs(60_000), 0);
  });
});

describe("stylist result text", () => {
  it("keeps product ids and has no square brackets", async () => {
    const { stylistResultText } = await import("../router");
    const text = stylistResultText({
      spoken_summary: "Two looks.",
      looks: [{ outfit_name: "Linen", total_usd: 595, items: [{ product_id: "MW-0374", slot: "Suit" }, { closet_item: "Navy chinos", slot: "Chinos" }] }],
    });
    assert.match(text, /MW-0374/);
    assert.match(text, /Navy chinos/);
    assert.doesNotMatch(text, /[\[\]]/);
  });
});
