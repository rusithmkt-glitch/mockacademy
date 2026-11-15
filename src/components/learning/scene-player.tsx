"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ListChecks,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import type { LessonScene } from "@/data/types";
import { LessonArt } from "@/components/illustrations/lesson-art";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

function formatClock(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds));
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

const controlClass =
  "inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-35";

export function ScenePlayer({ scenes }: { scenes: LessonScene[] }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(
    scenes[0]?.durationSeconds ?? 0,
  );
  const [captionIndex, setCaptionIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const scene = scenes[sceneIndex] ?? scenes[0];
  const isLastScene = sceneIndex === scenes.length - 1;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !scene) return;

    timelineRef.current?.kill();
    timelineRef.current = null;
    setProgress(0);
    setElapsed(0);
    setCaptionIndex(0);
    setFinished(false);

    const parts = gsap.utils.toArray<SVGGElement>(
      stage.querySelectorAll("[data-art-part]"),
    );
    const art = stage.querySelector<SVGSVGElement>("[data-lesson-art]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set([art, ...parts].filter(Boolean), {
        clearProps: "opacity,visibility,transform",
      });
      // Reduced motion shows the scene as a static frame, so playback state
      // is synchronised with the media query inside this effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
      setTotalSeconds(scene.durationSeconds);
      return;
    }

    const captionCount = Math.max(1, scene.captions.length);
    const entranceSeconds = 0.7 + parts.length * 0.09;
    const total = Math.max(scene.durationSeconds, Math.ceil(entranceSeconds + 1));
    let lastCaption = -1;
    let lastTick = 0;

    setTotalSeconds(total);

    const timeline = gsap.timeline({
      paused: true,
      onUpdate: () => {
        const time = timeline.time();
        const index = Math.min(
          captionCount - 1,
          Math.floor((time / total) * captionCount),
        );
        if (index !== lastCaption) {
          lastCaption = index;
          setCaptionIndex(index);
        }
        if (time - lastTick >= 0.2) {
          lastTick = time;
          setProgress(timeline.progress());
          setElapsed(time);
        }
      },
      onComplete: () => {
        setPlaying(false);
        setFinished(true);
        setProgress(1);
        setElapsed(total);
        setCaptionIndex(captionCount - 1);
      },
    });

    timeline.to({}, { duration: total }, 0);
    if (art) {
      timeline.fromTo(
        art,
        { autoAlpha: 0, y: 14, scale: 0.99 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
        },
        0,
      );
    }
    timeline.fromTo(
      parts,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.09,
      },
      0.08,
    );

    timelineRef.current = timeline;
    setPlaying(true);
    timeline.play(0);

    return () => {
      timeline.kill();
      if (timelineRef.current === timeline) timelineRef.current = null;
      gsap.set([art, ...parts].filter(Boolean), {
        clearProps: "opacity,visibility,transform",
      });
    };
  }, [scene, sceneIndex, reduced]);

  useEffect(() => {
    if (reduced || !captionRef.current) return;
    const tween = gsap.fromTo(
      captionRef.current,
      { autoAlpha: 0, y: 6 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      },
    );
    return () => {
      tween.kill();
    };
  }, [captionIndex, reduced]);

  if (!scene) return null;

  const captions = scene.captions.length
    ? scene.captions
    : [scene.description];

  function goToScene(nextIndex: number) {
    if (nextIndex < 0 || nextIndex >= scenes.length) return;
    setSceneIndex(nextIndex);
  }

  function togglePlayback() {
    const timeline = timelineRef.current;
    if (!timeline) return;
    if (timeline.progress() >= 1) {
      timeline.restart();
      setFinished(false);
      setPlaying(true);
      return;
    }
    if (timeline.paused()) {
      timeline.play();
      setPlaying(true);
    } else {
      timeline.pause();
      setPlaying(false);
    }
  }

  function replayScene() {
    const timeline = timelineRef.current;
    if (!timeline) return;
    timeline.restart();
    setFinished(false);
    setPlaying(true);
  }

  return (
    <section
      id="lesson-player"
      aria-labelledby="lesson-player-title"
      className="mt-8 overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-soft"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-background/60 px-5 py-3">
        <Badge tone="lavender">
          <Sparkles className="size-3" aria-hidden="true" />
          Guided lesson
        </Badge>
        <div className="flex items-center gap-3 text-[0.64rem] text-muted-foreground">
          <span className="inline-flex items-center gap-1 tabular-nums">
            <Clock3 className="size-3" aria-hidden="true" />~
            {formatClock(scene.durationSeconds)}
          </span>
          <span className="font-semibold text-foreground/70">
            Scene {sceneIndex + 1} of {scenes.length}
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden bg-lilac">
        <div
          aria-hidden="true"
          className="dot-grid absolute inset-0 opacity-30"
        />
        <div ref={stageRef} className="relative px-2 py-2 sm:px-5 sm:py-3">
          <LessonArt art={scene.art} />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-primary">
          Scene {sceneIndex + 1}
        </p>
        <h2
          id="lesson-player-title"
          className="mt-1.5 font-heading text-[1.3rem] leading-snug text-foreground"
        >
          {scene.title}
        </h2>
        <p className="mt-1.5 max-w-[64ch] text-pretty text-[0.84rem] leading-relaxed text-muted-foreground">
          {scene.description}
        </p>

        {reduced ? (
          <div className="mt-4 rounded-xl border border-border/70 bg-background px-4 py-3.5">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Scene notes
            </p>
            <ol className="mt-2 space-y-1.5">
              {captions.map((caption, index) => (
                <li
                  key={`${index}-${caption.slice(0, 24)}`}
                  className="flex items-start gap-2 text-[0.84rem] leading-relaxed text-foreground/80"
                >
                  <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-primary" />
                  {caption}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="mt-4 min-h-[4.75rem] rounded-xl border border-border/70 bg-background px-4 py-3.5">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Caption {captionIndex + 1} of {captions.length}
            </p>
            <p
              ref={captionRef}
              aria-live="polite"
              className="mt-1.5 text-pretty text-[0.88rem] leading-relaxed text-foreground/85"
            >
              {captions[captionIndex] ?? captions[captions.length - 1]}
            </p>
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          <ProgressBar
            value={reduced ? 100 : progress * 100}
            label="Scene playback progress"
            className="h-1.5 flex-1"
          />
          <span className="shrink-0 text-[0.65rem] tabular-nums text-muted-foreground">
            {reduced
              ? `${formatClock(scene.durationSeconds)} scene`
              : `${formatClock(elapsed)} / ${formatClock(totalSeconds)}`}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToScene(sceneIndex - 1)}
              disabled={sceneIndex === 0}
              className={controlClass}
              aria-label="Previous scene"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>

            {reduced ? null : playing ? (
              <Button
                type="button"
                size="cta"
                onClick={togglePlayback}
                aria-label="Pause scene"
              >
                <Pause className="size-4" aria-hidden="true" />
                Pause
              </Button>
            ) : (
              <Button
                type="button"
                size="cta"
                onClick={togglePlayback}
                aria-label={finished ? "Replay scene" : "Play scene"}
              >
                <Play className="size-4" aria-hidden="true" />
                {finished ? "Replay" : "Play"}
              </Button>
            )}

            {reduced ? null : (
              <button
                type="button"
                onClick={replayScene}
                className={controlClass}
                aria-label="Replay scene from the start"
              >
                <RotateCcw className="size-4" aria-hidden="true" />
              </button>
            )}

            <button
              type="button"
              onClick={() => goToScene(sceneIndex + 1)}
              disabled={isLastScene}
              className={controlClass}
              aria-label="Next scene"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div
            className="flex items-center gap-1.5"
            role="group"
            aria-label="Choose a scene"
          >
            {scenes.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToScene(index)}
                aria-label={`Scene ${index + 1}: ${item.title}`}
                aria-current={index === sceneIndex ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                  index === sceneIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-primary/40",
                )}
              />
            ))}
          </div>
        </div>

        {isLastScene ? (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/15 bg-accent/60 p-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ListChecks className="size-4" aria-hidden="true" />
              </span>
              <p className="text-[0.8rem] leading-snug text-foreground/80">
                {finished
                  ? "Walkthrough complete — check your understanding."
                  : "Finish the walkthrough, then check your understanding."}
              </p>
            </div>
            <Link
              href="#knowledge-check"
              className={buttonVariants({ size: "cta" })}
            >
              Knowledge check
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        ) : null}

        <details className="group/scenes mt-4 rounded-xl border border-border/70 bg-muted/30 px-3.5 py-2.5">
          <summary className="cursor-pointer text-[0.7rem] font-medium text-muted-foreground transition-colors hover:text-foreground">
            Read all scene text
          </summary>
          <ol className="mt-2.5 space-y-1.5">
            {captions.map((caption, index) => (
              <li
                key={`${index}-${caption.slice(0, 24)}`}
                className="text-[0.78rem] leading-relaxed text-foreground/75"
              >
                {caption}
              </li>
            ))}
          </ol>
        </details>

        <p className="mt-3 text-[0.62rem] leading-relaxed text-muted-foreground">
          {reduced
            ? "Reduced motion is on, so scenes are shown as static notes."
            : "Scenes animate with GSAP. Use pause or replay at any time."}
        </p>
      </div>
    </section>
  );
}
