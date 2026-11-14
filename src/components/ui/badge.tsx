import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone =
  | "pink"
  | "navy"
  | "outline"
  | "sand"
  | "gold"
  | "lavender"
  | "amber"
  | "mint";

const tones: Record<BadgeTone, string> = {
  pink: "bg-accent text-accent-foreground",
  navy: "bg-navy text-white",
  outline: "border border-border bg-card text-foreground",
  sand: "bg-sand text-navy",
  gold: "bg-gold text-navy",
  lavender: "bg-lavender-soft text-plum",
  amber: "bg-amber text-navy",
  mint: "bg-mint text-navy",
};

export function Badge({
  children,
  tone = "pink",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
