"use client";

import { useState } from "react";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z" />
    </svg>
  );
}

function cardExamKey(examSlug: string) {
  if (examSlug.includes("ielts")) return "ielts";
  if (examSlug.includes("practitioner")) return "practitioner";
  return examSlug.includes("simulator") ? "simulator" : "mock";
}

function cardPath(
  examSlug: string,
  percent: number,
  passed: boolean,
  name: string,
) {
  const nameParam = name ? `&name=${encodeURIComponent(name)}` : "";
  return `/api/share-card?exam=${cardExamKey(examSlug)}&percent=${percent}&passed=${passed ? 1 : 0}${nameParam}`;
}

export function ScoreShare({
  examTitle,
  examSlug,
  participantName = "",
  percent,
  passed,
}: {
  examTitle: string;
  examSlug: string;
  participantName?: string;
  percent: number;
  passed: boolean;
}) {
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const src = cardPath(examSlug, percent, passed, participantName);
  const examUrl = `https://www.mockacademy.org/mock-exams/${examSlug}`;
  const level = examSlug.includes("ielts")
    ? "IELTS Academic Reading"
    : `PRINCE2 ${examSlug.includes("practitioner") ? "Practitioner" : "Foundation"}`;

  async function downloadCard() {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "mockacademy-result.png";
    anchor.click();
    URL.revokeObjectURL(url);
    return blob;
  }

  async function share() {
    setBusy(true);
    setNote(null);
    try {
      const blob = await downloadCard();
      const file = new File([blob], "mockacademy-result.png", { type: "image/png" });
      const text = passed
        ? `I scored ${percent}% on the free ${examTitle} at MockAcademy — above the ${level} pass mark. Sit it yourself:`
        : `Prepping for ${level} with the free ${examTitle} at MockAcademy — ${percent}% this time, improving every attempt. Sit it yourself:`;
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text, url: examUrl });
      } else {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(examUrl)}`,
          "_blank",
          "noopener,width=640,height=640",
        );
        setNote(
          "Your score card was downloaded — attach it to your LinkedIn post so people see the result.",
        );
      }
    } catch {
      setNote("Sharing was cancelled or unavailable. Use Download card instead.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section
      aria-labelledby="share-result-title"
      className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2
            id="share-result-title"
            className="flex items-center gap-2 font-heading text-[1.1rem] text-foreground"
          >
            <Share2 className="size-4 text-primary" aria-hidden="true" />
            Share your result
          </h2>
          <p className="mt-1 max-w-md text-[0.78rem] leading-relaxed text-muted-foreground">
            {passed
              ? "Passed a full simulation? That is worth showing off — and it helps other learners find the free papers."
              : "Sharing your progress keeps you accountable — and helps other learners find the free papers."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="navy" size="cta" onClick={share} disabled={busy}>
            <LinkedInMark className="size-4" />
            {busy ? "Preparing…" : "Share on LinkedIn"}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="cta"
            onClick={() => downloadCard()}
            disabled={busy}
          >
            <Download className="size-4" aria-hidden="true" />
            Download card
          </Button>
        </div>
      </div>
      {note ? (
        <p role="status" className="mt-3 text-[0.72rem] font-medium text-plum">
          {note}
        </p>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Shareable score card showing ${percent}% on the ${examTitle}`}
        width={2160}
        height={2700}
        loading="lazy"
        className="mx-auto mt-4 block w-full max-w-sm rounded-2xl border border-border/70 shadow-soft"
      />
    </section>
  );
}
