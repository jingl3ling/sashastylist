import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applyUtterance, isSystemText, parseUtterance, transcriptText, type CaptionLine } from "../captions";

const utt = (type: string, properties: Record<string, unknown>) => ({ message_type: "conversation", event_type: type, conversation_id: "c", properties });

describe("captions", () => {
  it("reads speaker and text from the likely field names", () => {
    assert.deepEqual(
      { ...parseUtterance(utt("conversation.utterance", { role: "user", speech: "I've got a wedding in Italy." }))!, key: "" },
      { key: "", speaker: "You", text: "I've got a wedding in Italy.", final: true },
    );
    assert.equal(parseUtterance(utt("conversation.utterance", { role: "replica", text: "Love that." }))!.speaker, "Sasha");
    assert.equal(parseUtterance(utt("conversation.utterance", { role: "pal", content: "Twirl for me." }))!.text, "Twirl for me.");
  });

  it("ignores other events, empty text, and our own stylist nudges", () => {
    assert.equal(parseUtterance(utt("conversation.tool_call", { name: "x" })), null);
    assert.equal(parseUtterance(utt("conversation.utterance", { role: "user", speech: "  " })), null);
    assert.equal(parseUtterance(utt("conversation.utterance", { role: "user", speech: "STYLIST UPDATE, not said by the shopper. ..." })), null);
    assert.ok(isSystemText("STYLIST RESULT, not said by the shopper."));
    assert.ok(!isSystemText("The stylist is great"));
  });

  it("streaming pieces update one line in place, and the final line replaces them", () => {
    let lines: CaptionLine[] = [];
    lines = applyUtterance(lines, parseUtterance(utt("conversation.utterance.streaming", { role: "pal", speech: "Okay, look", inference_id: "i1" }))!);
    lines = applyUtterance(lines, parseUtterance(utt("conversation.utterance.streaming", { role: "pal", speech: "Okay, look at you.", inference_id: "i1" }))!);
    assert.equal(lines.length, 1);
    assert.equal(lines[0].final, false);
    lines = applyUtterance(lines, parseUtterance(utt("conversation.utterance", { role: "pal", speech: "Okay, look at you. That's mad good.", inference_id: "i1" }))!);
    assert.equal(lines.length, 1);
    assert.deepEqual([lines[0].text, lines[0].final], ["Okay, look at you. That's mad good.", true]);
    lines = applyUtterance(lines, parseUtterance(utt("conversation.utterance", { role: "user", speech: "Thanks." }))!);
    assert.equal(transcriptText(lines), "Sasha: Okay, look at you. That's mad good.\nYou: Thanks.");
  });

  it("a final line without an id still replaces that speaker's live line", () => {
    let lines: CaptionLine[] = [];
    lines = applyUtterance(lines, parseUtterance(utt("conversation.utterance.streaming", { role: "user", speech: "Forty" }))!);
    lines = applyUtterance(lines, parseUtterance(utt("conversation.utterance", { role: "user", speech: "Forty regular." }))!);
    assert.deepEqual(lines.map((l) => l.text), ["Forty regular."]);
  });

  it("keeps at most the last 200 lines", () => {
    let lines: CaptionLine[] = [];
    for (let i = 0; i < 205; i++) lines = applyUtterance(lines, parseUtterance(utt("conversation.utterance", { role: "user", speech: `line ${i}` }))!);
    assert.equal(lines.length, 200);
    assert.equal(lines[0].text, "line 5");
  });
});
