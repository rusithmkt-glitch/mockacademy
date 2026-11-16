import { tokenizeInline } from "@/lib/lesson/inline";

export function InlineText({ text }: { text: string }) {
  return (
    <>
      {tokenizeInline(text).map((token, index) => {
        if (token.kind === "strong") {
          return (
            <strong key={index} className="font-semibold">
              {token.value}
            </strong>
          );
        }
        if (token.kind === "em") return <em key={index}>{token.value}</em>;
        return token.value;
      })}
    </>
  );
}
