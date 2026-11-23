"use client";

import { useEffect, useRef } from "react";
import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DbReferenceMaterial } from "@/lib/exams/types";

/**
 * Exam-day scenario pack: the project brief and additional information stay
 * available for the whole attempt, like the real Practitioner paper.
 */
export function ScenarioPanel({
  materials,
  onClose,
}: {
  materials: DbReferenceMaterial[];
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isPassages = materials.some((material) =>
    material.title.startsWith("Passage"),
  );
  const panelLabel = isPassages ? "Reading passages" : "Scenario information";

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={panelLabel}
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/45 p-3 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[86vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
        <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3.5">
          <p className="flex items-center gap-2 font-heading text-[1rem] text-foreground">
            <FileText className="size-4 text-primary" aria-hidden="true" />
            {panelLabel}
          </p>
          <Button
            ref={closeRef}
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label={`Close ${panelLabel.toLowerCase()}`}
          >
            <X className="size-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="space-y-6 overflow-y-auto px-5 py-5 sm:px-7">
          {materials.map((material) => (
            <section key={material.title} aria-labelledby={`material-${material.title}`}>
              <h2
                id={`material-${material.title}`}
                className="font-heading text-[1.05rem] text-foreground"
              >
                {material.title}
              </h2>
              {material.rows ? (
                <dl className="mt-3 space-y-2.5">
                  {material.rows.map((row) => (
                    <div
                      key={row.label}
                      className="rounded-xl border border-border/70 bg-background px-3.5 py-2.5"
                    >
                      <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-plum">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-[0.8rem] leading-relaxed text-foreground/85">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div className="mt-3 space-y-3">
                  {(material.body ?? "").split("\n\n").map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="text-pretty text-[0.82rem] leading-relaxed text-foreground/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
        <div className="border-t border-border px-5 py-3">
          <p className="text-[0.64rem] leading-relaxed text-muted-foreground">
            {isPassages
              ? "Original practice passages written for MockAcademy. The real exam supplies its own reading texts."
              : "Original practice scenario. The real exam supplies its own project scenario and additional information documents."}
          </p>
        </div>
      </div>
    </div>
  );
}
