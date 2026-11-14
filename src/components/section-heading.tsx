import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  pillTone,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  pillTone?: "lavender" | "amber" | "mint" | "outline";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        pillTone ? (
          <Badge
            tone={pillTone}
            className="mb-3 px-3 py-1 text-[0.64rem] uppercase tracking-[0.14em]"
          >
            {eyebrow}
          </Badge>
        ) : (
          <p className="eyebrow mb-3">{eyebrow}</p>
        )
      ) : null}
      <h2 className="display text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
