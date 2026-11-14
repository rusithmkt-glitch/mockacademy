import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function CatalogueIntro({
  pill,
  title,
  description,
  headingLevel = "h2",
  className,
  children,
}: {
  pill: string;
  title: string;
  description: string;
  headingLevel?: "h1" | "h2";
  className?: string;
  children?: ReactNode;
}) {
  const Heading = headingLevel;

  return (
    <div
      data-reveal
      className={cn("mx-auto max-w-2xl text-center", className)}
    >
      <Badge
        tone="lavender"
        className="px-3.5 py-1.5 text-[0.66rem] uppercase tracking-[0.14em]"
      >
        {pill}
      </Badge>
      <Heading className="display mt-5 text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-[2.7rem]">
        {title}
      </Heading>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-[0.92rem] leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
      {children}
    </div>
  );
}
