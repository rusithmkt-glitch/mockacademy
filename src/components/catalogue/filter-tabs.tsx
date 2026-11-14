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
              "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[0.75rem] font-semibold transition-colors duration-200",
              active
                ? "border-navy bg-navy text-white shadow-soft"
                : "border-border bg-card text-foreground/75 hover:border-navy/25 hover:bg-lavender-soft hover:text-foreground",
            )}
          >
            {option.label}
            {typeof option.count === "number" ? (
              <span
                className={cn(
                  "text-[0.65rem] font-medium",
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
