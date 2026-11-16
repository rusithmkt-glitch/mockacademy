import { cn } from "@/lib/utils";

export function splitPrompt(prompt: string) {
  const [lead, ...rest] = prompt.split("\n");
  const statements = rest
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^(\d+)\.\s*(.*)$/);
      return match ? { number: match[1], text: match[2] } : { number: null, text: line };
    });
  return { lead, statements };
}

export function PromptStatements({
  prompt,
  compact = false,
  className,
}: {
  prompt: string;
  compact?: boolean;
  className?: string;
}) {
  const { statements } = splitPrompt(prompt);
  if (statements.length === 0) return null;

  if (compact) {
    return (
      <span className={cn("mt-1.5 block space-y-1", className)}>
        {statements.map((statement, index) => (
          <span
            key={index}
            className="flex items-start gap-2 text-[0.74rem] leading-snug text-foreground/75"
          >
            {statement.number ? (
              <span className="mt-px flex size-4 shrink-0 items-center justify-center rounded-full bg-navy text-[0.55rem] font-semibold tabular-nums text-white">
                {statement.number}
              </span>
            ) : null}
            <span>{statement.text}</span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <ol className={cn("mt-4 space-y-2", className)}>
      {statements.map((statement, index) => (
        <li
          key={index}
          className="flex items-start gap-2.5 rounded-xl bg-muted/50 px-3.5 py-2.5 text-[0.88rem] leading-relaxed text-foreground/85"
        >
          {statement.number ? (
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy text-[0.62rem] font-semibold tabular-nums text-white">
              {statement.number}
            </span>
          ) : null}
          <span>{statement.text}</span>
        </li>
      ))}
    </ol>
  );
}
