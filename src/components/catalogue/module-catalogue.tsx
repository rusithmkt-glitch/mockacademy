"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { BrandMark } from "@/components/logo";
import { FilterTabs } from "@/components/catalogue/filter-tabs";
import { ProgressBar } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const headerTones = ["bg-lavender", "bg-amber", "bg-mint"] as const;

export type ModuleCatalogueItem = {
  id: string;
  order: number;
  title: string;
  tagline: string;
  href: string;
  sessionCount: number;
  durationLabel: string;
  completedSessions: number;
  percent: number;
};

function statusOf(module: ModuleCatalogueItem) {
  if (module.completedSessions === 0) return "Not started";
  if (module.completedSessions >= module.sessionCount) return "Completed";
  return "In progress";
}

function ModuleTile({ module }: { module: ModuleCatalogueItem }) {
  const status = statusOf(module);
  const percent = Math.min(100, Math.max(0, Math.round(module.percent)));

  return (
    <Link
      href={module.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-card"
    >
      <div
        className={cn(
          "relative overflow-hidden px-5 pb-4 pt-5",
          headerTones[(module.order - 1) % headerTones.length],
        )}
      >
        <span
          aria-hidden="true"
          className="absolute -right-8 -top-10 size-32 rounded-full bg-white/30"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-14 left-1/4 size-28 rounded-full border border-white/35"
        />
        <span
          aria-hidden="true"
          className="absolute right-10 top-10 size-3 rounded-full bg-white/60"
        />

        <div className="relative flex items-start justify-between gap-3">
          <span className="flex items-center gap-2">
            <BrandMark className="size-6" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy/70">
              Module {String(module.order).padStart(2, "0")}
            </span>
          </span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>

        <div className="relative mt-6 flex flex-wrap items-center gap-1.5">
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[0.62rem] font-semibold",
              status === "Completed"
                ? "bg-navy text-white"
                : "bg-white/50 text-navy",
            )}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl leading-snug text-foreground">
          {module.title}
        </h3>
        <p className="mt-2 text-pretty text-[0.82rem] leading-relaxed text-muted-foreground">
          {module.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[0.65rem] font-medium text-foreground/75">
            <BookOpen className="size-3 text-plum" aria-hidden="true" />
            {module.sessionCount} sessions
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[0.65rem] font-medium text-foreground/75">
            <Clock3 className="size-3 text-plum" aria-hidden="true" />
            {module.durationLabel}
          </span>
        </div>

        <div className="mt-auto border-t border-border/80 pt-4">
          <div className="flex items-center justify-between text-[0.65rem]">
            <span className="font-medium text-foreground/75">{status}</span>
            <span className="text-muted-foreground">
              {module.completedSessions} of {module.sessionCount} · {percent}%
            </span>
          </div>
          <ProgressBar
            value={percent}
            className="mt-2"
            label={`${module.title} progress`}
          />
        </div>
      </div>
    </Link>
  );
}

export function ModuleCatalogue({
  modules,
}: {
  modules: ModuleCatalogueItem[];
}) {
  const [active, setActive] = useState("all");

  const options = useMemo(
    () => [
      { id: "all", label: "All modules", count: modules.length },
      {
        id: "completed",
        label: "Completed",
        count: modules.filter((module) => statusOf(module) === "Completed")
          .length,
      },
      {
        id: "in-progress",
        label: "In progress",
        count: modules.filter((module) => statusOf(module) === "In progress")
          .length,
      },
      {
        id: "not-started",
        label: "Not started",
        count: modules.filter((module) => statusOf(module) === "Not started")
          .length,
      },
    ],
    [modules],
  );

  const filtered =
    active === "all"
      ? modules
      : modules.filter(
          (module) =>
            statusOf(module).toLowerCase().replace(" ", "-") === active,
        );

  return (
    <>
      <FilterTabs
        options={options}
        value={active}
        onChange={setActive}
        label="Filter modules"
      />
      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} of {modules.length} modules
      </p>

      {filtered.length ? (
        <div
          data-reveal
          className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((module) => (
            <ModuleTile key={module.id} module={module} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-border bg-card px-6 py-10 text-center text-sm text-muted-foreground">
          No modules in this view yet. Keep going and they will appear here.
        </p>
      )}
    </>
  );
}
