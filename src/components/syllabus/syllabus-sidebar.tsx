"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  PanelLeft,
  X,
} from "lucide-react";
import type { SyllabusCourse } from "@/data/types";
import { ProgressBar } from "@/components/ui/progress";
import { getProgressPercent } from "@/lib/course";
import { useDemoStore } from "@/lib/progress/provider";
import { cn } from "@/lib/utils";

function SyllabusContents({
  syllabus,
  completedIds,
  totalSessions,
  onNavigate,
}: {
  syllabus: SyllabusCourse;
  completedIds: string[];
  totalSessions: number;
  onNavigate?: () => void;
}) {  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentModuleSlug = segments[2];
  const currentSessionSlug = segments[3];
  const completed = new Set(completedIds);
  const completedCount = syllabus.modules
    .flatMap((module) => module.sessions)
    .filter((session) => completed.has(session.id)).length;
  const percent = getProgressPercent(completedCount, totalSessions);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-border px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-primary">
            PRINCE2® Foundation
          </p>
          <span className="rounded-full bg-accent px-2 py-0.5 text-[0.6rem] font-semibold text-accent-foreground">
            Free
          </span>
        </div>
        <Link
          href="/learning/prince2-foundation"
          onClick={onNavigate}
          className="group mt-2 inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft
            className="size-3 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Course overview
        </Link>
      </div>

      <div className="border-b border-border bg-background/60 px-5 py-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Course progress
          </p>
          <p className="text-[0.7rem] font-semibold text-foreground">{percent}%</p>
        </div>
        <ProgressBar value={percent} className="mt-2 h-1.5" label="Course progress" />
        <p className="mt-2 text-[0.65rem] text-muted-foreground">
          {completedCount} of {totalSessions} sessions complete
        </p>
      </div>

      <nav
        aria-label="Course contents"
        data-lenis-prevent
        className="scroll-slim min-h-0 flex-1 overflow-y-auto overscroll-contain px-2.5 py-3"
      >
        {syllabus.modules.map((module) => {
          const moduleCompleted = module.sessions.filter((session) =>
            completed.has(session.id),
          ).length;
          const isCurrentModule = module.slug === currentModuleSlug;

          return (
            <details
              key={module.id}
              open={isCurrentModule}
              className="syllabus-item group/module rounded-xl"
            >
              <summary
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-muted/80",
                  isCurrentModule && "bg-muted/60",
                )}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full font-heading text-[0.65rem]",
                    isCurrentModule
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {module.order}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.78rem] font-semibold text-foreground">
                    {module.title}
                  </span>
                  <span className="mt-0.5 block text-[0.6rem] text-muted-foreground">
                    {moduleCompleted} of {module.sessions.length} complete
                  </span>
                </span>
                <ChevronDown
                  className="syllabus-chevron size-3.5 shrink-0 text-muted-foreground transition-transform duration-200"
                  aria-hidden="true"
                />
              </summary>

              <ul className="mb-1.5 mt-0.5 space-y-0.5 border-l border-border pl-3 ml-5">
                {module.sessions.map((session, index) => {
                  const isCompleted = completed.has(session.id);
                  const isCurrent =
                    module.slug === currentModuleSlug &&
                    session.slug === currentSessionSlug;

                  return (
                    <li key={session.id}>
                      <Link
                        href={`/learning/prince2-foundation/${module.slug}/${session.slug}`}
                        onClick={onNavigate}
                        aria-current={isCurrent ? "page" : undefined}
                        className={cn(
                          "group/session flex items-start gap-2.5 rounded-lg px-2.5 py-2 transition-colors",
                          isCurrent
                            ? "bg-accent text-accent-foreground ring-1 ring-primary/15"
                            : "hover:bg-muted/70",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-px flex size-[1.15rem] shrink-0 items-center justify-center rounded-full border text-[0.55rem] font-semibold",
                            isCompleted
                              ? "border-primary bg-primary text-primary-foreground"
                              : isCurrent
                                ? "border-primary text-primary"
                                : "border-border text-muted-foreground",
                          )}
                        >
                          {isCompleted ? (
                            <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                          ) : (
                            index + 1
                          )}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block text-[0.73rem] leading-snug",
                              isCurrent
                                ? "font-semibold text-accent-foreground"
                                : "text-foreground/80",
                            )}
                          >
                            {session.title}
                          </span>
                          <span className="mt-0.5 block text-[0.58rem] text-muted-foreground">
                            {session.durationMinutes} min
                          </span>
                        </span>
                        {isCurrent ? (
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary">
                            <span className="sr-only">Current session</span>
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </nav>

      <div className="border-t border-border px-5 py-3">
        <p className="text-[0.6rem] leading-relaxed text-muted-foreground">
          Demonstration progress. Accounts and saved progress arrive soon.
        </p>
      </div>
    </div>
  );
}

export function SyllabusSidebar({
  syllabus,
  totalSessions,
}: {
  syllabus: SyllabusCourse;
  totalSessions: number;
}) {
  const pathname = usePathname();
  const { completedSessionIds } = useDemoStore();
  const completedIds = completedSessionIds.filter((id) =>
    syllabus.modules.some((module) =>
      module.sessions.some((session) => session.id === id),
    ),
  );
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const currentModuleSlug = pathname.split("/").filter(Boolean)[2];
  const currentModule = syllabus.modules.find(
    (module) => module.slug === currentModuleSlug,
  );

  if (activePath !== pathname) {
    setActivePath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="sticky top-16 z-30 flex items-center justify-between gap-3 border-b border-border bg-background/95 px-5 py-3 backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-[0.75rem] font-semibold text-foreground shadow-soft transition-colors hover:bg-muted"
          aria-haspopup="dialog"
        >
          <PanelLeft className="size-3.5 text-primary" aria-hidden="true" />
          Course contents
        </button>
        <span className="text-[0.68rem] text-muted-foreground">
          {completedIds.length} / {totalSessions} sessions
        </span>
      </div>

      <aside className="hidden w-80 shrink-0 border-r border-border bg-card/60 lg:sticky lg:top-16 lg:block lg:h-[calc(100dvh-4rem)]">
        <div className="flex h-full flex-col">
          <div className="px-5 pb-3 pt-5">
            <h2 className="font-heading text-xl text-foreground">Course contents</h2>
            <p className="mt-1 text-[0.65rem] text-muted-foreground">
              Module {currentModule?.order ?? 1} of {syllabus.modules.length} ·{" "}
              {totalSessions} sessions
            </p>
          </div>
          <SyllabusContents
            syllabus={syllabus}
            completedIds={completedIds}
            totalSessions={totalSessions}
          />
        </div>
      </aside>

      <dialog
        ref={dialogRef}
        data-lenis-prevent
        className="course-drawer"
        aria-labelledby="mobile-contents-title"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
            <div>
              <h2
                id="mobile-contents-title"
                className="font-heading text-xl text-foreground"
              >
                Course contents
              </h2>
              <p className="mt-1 text-[0.65rem] text-muted-foreground">
                Module {currentModule?.order ?? 1} of {syllabus.modules.length} ·{" "}
                {totalSessions} sessions
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close course contents"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          <SyllabusContents
            syllabus={syllabus}
            completedIds={completedIds}
            totalSessions={totalSessions}
            onNavigate={() => setOpen(false)}
          />
        </div>
      </dialog>
    </>
  );
}
