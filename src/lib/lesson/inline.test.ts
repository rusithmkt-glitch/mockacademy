import { describe, expect, it } from "vitest";
import { plainText, tokenizeInline } from "./inline";

describe("tokenizeInline", () => {
  it("splits bold and italic markers into tokens", () => {
    expect(tokenizeInline("**Change**: it creates *something* new")).toEqual([
      { kind: "strong", value: "Change" },
      { kind: "text", value: ": it creates " },
      { kind: "em", value: "something" },
      { kind: "text", value: " new" },
    ]);
  });

  it("leaves unmatched asterisks as text", () => {
    expect(tokenizeInline("5 * 3 = 15")).toEqual([
      { kind: "text", value: "5 * 3 = 15" },
    ]);
  });

  it("strips markers for plain text", () => {
    expect(plainText("Only **continue** while it's *worth it*")).toBe(
      "Only continue while it's worth it",
    );
  });
});
