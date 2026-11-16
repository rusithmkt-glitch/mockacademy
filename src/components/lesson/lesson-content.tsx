import { Check, Info, Lightbulb, Target } from "lucide-react";
import type { CalloutTone, LessonSection } from "@/data/types";
import { InlineText } from "@/components/lesson/inline-text";
import { ScenarioCarousel } from "@/components/lesson/scenario-carousel";
import { cn } from "@/lib/utils";

const calloutStyles: Record<
  CalloutTone,
  { wrapper: string; icon: string; Icon: typeof Info }
> = {
  tip: {
    wrapper: "border-primary/15 bg-accent/60",
    icon: "bg-primary text-primary-foreground",
    Icon: Lightbulb,
  },
  exam: {
    wrapper: "border-gold/40 bg-sand",
    icon: "bg-gold text-navy",
    Icon: Target,
  },
  note: {
    wrapper: "border-border bg-muted/60",
    icon: "bg-navy text-white",
    Icon: Info,
  },
};

export function LessonSections({ sections }: { sections: LessonSection[] }) {
  return (
    <div className="mt-10 space-y-9">
      {sections.map((section) => {
        const callout = section.callout
          ? calloutStyles[section.callout.tone]
          : null;
        const CalloutIcon = callout?.Icon;

        return (
          <section
            key={section.id}
            data-reveal
            aria-labelledby={section.heading ? `${section.id}-heading` : undefined}
          >
            {section.heading ? (
              <h2
                id={`${section.id}-heading`}
                className="font-heading text-[1.45rem] leading-snug text-foreground"
              >
                {section.heading}
              </h2>
            ) : null}
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="max-w-[68ch] text-pretty text-[0.94rem] leading-[1.85] text-foreground/80"
                >
                  <InlineText text={paragraph} />
                </p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="mt-4 space-y-2.5">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[0.9rem] leading-relaxed text-foreground/80">
                      <InlineText text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.scenario ? (
              <ScenarioCarousel scenario={section.scenario} id={section.id} />
            ) : null}

            {section.callout && callout && CalloutIcon ? (
              <aside
                className={cn(
                  "mt-5 flex items-start gap-3.5 rounded-2xl border p-4 sm:p-5",
                  callout.wrapper,
                )}
                aria-label={section.callout.title}
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-lg",
                    callout.icon,
                  )}
                >
                  <CalloutIcon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.8rem] font-semibold text-foreground">
                    {section.callout.title}
                  </p>
                  <p className="mt-1 text-pretty text-[0.82rem] leading-relaxed text-foreground/70">
                    <InlineText text={section.callout.body} />
                  </p>
                </div>
              </aside>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}

export function KeyPoints({ points }: { points: string[] }) {
  return (
    <section
      data-reveal
      className="relative mt-12 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-7"
    >
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.12]" />
      <div className="relative">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">
          Key points to remember
        </p>
        <ul className="mt-4 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[0.88rem] leading-relaxed text-white/80">
                <InlineText text={point} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
