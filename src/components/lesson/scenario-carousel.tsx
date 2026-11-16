"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import type { LessonScenario } from "@/data/types";
import { InlineText } from "@/components/lesson/inline-text";
import { cn } from "@/lib/utils";

const arrowClass =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-30";

export function ScenarioCarousel({
  scenario,
  id,
}: {
  scenario: LessonScenario;
  id: string;
}) {
  const [index, setIndex] = useState(0);
  const directionRef = useRef(1);
  const hasMovedRef = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const total = scenario.steps.length;
  const step = scenario.steps[index];
  const isLast = index === total - 1;

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !hasMovedRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.fromTo(
      panel,
      { autoAlpha: 0, x: 32 * directionRef.current },
      { autoAlpha: 1, x: 0, duration: 0.5, ease: "power3.out" },
    );
    return () => {
      tween.kill();
    };
  }, [index]);

  function go(next: number) {
    hasMovedRef.current = true;
    directionRef.current = next > index ? 1 : -1;
    setIndex(Math.max(0, Math.min(total - 1, next)));
  }

  if (!step) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={`${id}-question`}
      className="mt-6 overflow-hidden rounded-3xl border border-primary/15 bg-accent/45 p-5 sm:p-6"
    >
      <p
        id={`${id}-question`}
        className="font-heading text-[1.15rem] leading-snug text-foreground"
      >
        <InlineText text={scenario.question} />
      </p>
      <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
        Select the arrow to learn more
      </p>

      <div className="mt-5 rounded-2xl border border-border bg-background p-5 shadow-[0_1px_0_rgba(20,20,60,0.04)] sm:p-6">
        <div
          ref={panelRef}
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[7.5rem]"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {index + 1} of {total}
          </p>
          {step.title ? (
            <p className="mt-2 font-heading text-[1.05rem] leading-snug text-foreground">
              <InlineText text={step.title} />
            </p>
          ) : null}
          <p className="mt-2 max-w-[62ch] text-pretty text-[0.92rem] leading-[1.8] text-foreground/80">
            <InlineText text={step.body} />
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {scenario.steps.map((item, dot) => (
              <span
                key={`${id}-dot-${dot}`}
                className={cn(
                  "h-1.5 rounded-full",
                  dot === index ? "w-6 bg-primary" : "w-1.5 bg-primary/20",
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Previous step"
              className={cn(arrowClass, "border-border bg-background text-foreground hover:bg-muted")}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(isLast ? 0 : index + 1)}
              aria-label={isLast ? "Start again" : "Next step"}
              className={cn(
                arrowClass,
                "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              {isLast ? (
                <RotateCcw className="size-4" aria-hidden="true" />
              ) : (
                <ArrowRight className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
