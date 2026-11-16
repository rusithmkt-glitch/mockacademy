export type InlineToken =
  | { kind: "text"; value: string }
  | { kind: "strong"; value: string }
  | { kind: "em"; value: string };

const MARKER = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g;

export function tokenizeInline(text: string): InlineToken[] {
  return text
    .split(MARKER)
    .filter((part) => part.length > 0)
    .map((part): InlineToken => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return { kind: "strong", value: part.slice(2, -2) };
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        return { kind: "em", value: part.slice(1, -1) };
      }
      return { kind: "text", value: part };
    });
}

export function plainText(text: string): string {
  return tokenizeInline(text)
    .map((token) => token.value)
    .join("");
}
