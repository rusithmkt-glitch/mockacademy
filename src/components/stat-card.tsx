import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const tones = {
  pink: "bg-accent text-primary",
  sand: "bg-sand text-navy",
  navy: "bg-navy text-white",
  lilac: "bg-lilac text-plum",
  gold: "bg-gold text-navy",
};

export function StatCard({
  label,
  value,
  meta,
  icon: Icon,
  tone = "pink",
  className,
}: {
  label: string;
  value: string;
  meta?: string;
  icon: LucideIcon;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={cn(
        "rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/20",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
          {label}
        </p>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-lg",
            tones[tone],
          )}
        >
          <Icon className="size-4" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 font-heading text-[1.7rem] leading-none text-foreground">
        {value}
      </p>
      {meta ? (
        <p className="mt-2 text-[0.72rem] text-muted-foreground">{meta}</p>
      ) : null}
    </div>
  );
}
