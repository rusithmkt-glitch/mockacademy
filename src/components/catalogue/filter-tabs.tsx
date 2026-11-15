"use client";

import { cn } from "@/lib/utils";

export type FilterOption = {
  id: string;
  label: string;
  count?: number;
};

export function FilterTabs({
  options,
  value,
  onChange,
  label,
}: {
  options: FilterOption[];
  value: string;
  onChange: (id: string) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="mt-7 flex flex-wrap items-center justify-center gap-2"
    >
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.id)}
            className={cn(
              "inline-flex h-9 items-center gap-2 rounded-md border px-3.5 text-[0.74rem] font-medium transition-colors duration-200",
              active
                ? "border-navy bg-navy text-white"
                : "border-border/90 bg-card text-foreground/70 hover:border-navy/30 hover:bg-lavender-soft hover:text-foreground",
            )}
          >
            {option.label}
            {typeof option.count === "number" ? (
              <span
                className={cn(
                  "text-[0.66rem] font-medium tabular-nums",
                  active ? "text-white/55" : "text-muted-foreground",
                )}
              >
                {option.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
