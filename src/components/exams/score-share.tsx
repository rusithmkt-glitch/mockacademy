"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScoreCard, SCORE_CARD_HEIGHT, SCORE_CARD_WIDTH } from "./score-card";

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z" />
    </svg>
  );
}

function cardCopy(examSlug: string) {
  if (examSlug.includes("ielts")) {
    return {
      title: "IELTS Academic Reading Mock Test",
      edition: "IELTS ACADEMIC READING",
      passMark: "23 of 40 pass mark",
      level: "IELTS Academic Reading",
    };
  }
  const practitioner = examSlug.includes("practitioner");
  return {
    title: practitioner
      ? "Practitioner Mock Exam"
      : examSlug.includes("simulator")
        ? "Foundation Exam Simulator"
        : "Foundation Mock Exam",
    edition: `PRINCE2® 7TH EDITION ${practitioner ? "PRACTITIONER" : "FOUNDATION"}`,
    passMark: practitioner ? "38-mark pass mark" : "60% pass mark",
    level: `PRINCE2 ${practitioner ? "Practitioner" : "Foundation"}`,
  };
}

const PREVIEW_WIDTH = 320;
const previewScale = PREVIEW_WIDTH / SCORE_CARD_WIDTH;

export function ScoreShare({
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
  const cardRef = useRef<HTMLDivElement>(null);
  const copy = cardCopy(examSlug);
  const issued = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const name = (participantName.trim() || "MockAcademy learner").slice(0, 40);
  const examUrl = `https://www.mockacademy.org/mock-exams/${examSlug}`;

  async function renderCard(): Promise<string> {
    if (!cardRef.current) throw new Error("Score card is not on the page.");
    return toPng(cardRef.current, {
      width: SCORE_CARD_WIDTH,
      height: SCORE_CARD_HEIGHT,
      pixelRatio: 2,
      cacheBust: true,
    });
  }

  async function downloadCard() {
    setBusy(true);
    setNote(null);
    try {
      const dataUrl = await renderCard();
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [108, 135],
      });
      pdf.addImage(dataUrl, "PNG", 0, 0, 108, 135, undefined, "FAST");
      pdf.save("mockacademy-result.pdf");
    } catch {
      setNote("The card could not be prepared. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function share() {
    setBusy(true);
    setNote(null);
    try {
      const dataUrl = await renderCard();
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "mockacademy-result.png", { type: "image/png" });
      const text = passed
        ? `I scored ${percent}% on the free ${copy.title} at MockAcademy — above the ${copy.level} pass mark. Sit it yourself:`
        : `Prepping for ${copy.level} with the free ${copy.title} at MockAcademy — ${percent}% this time, improving every attempt. Sit it yourself:`;
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text, url: examUrl });
      } else {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "mockacademy-result.png";
        anchor.click();
        URL.revokeObjectURL(url);
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(examUrl)}`,
          "_blank",
          "noopener,width=640,height=640",
        );
        setNote(
          "Your score card was downloaded as an image — attach it to your LinkedIn post so people see the result.",
        );
      }
    } catch {
      setNote("Sharing was cancelled or unavailable. Use Download PDF instead.");
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
          <Button type="button" variant="outline" size="cta" onClick={downloadCard} disabled={busy}>
            <Download className="size-4" aria-hidden="true" />
            Download PDF
          </Button>
        </div>
      </div>
      {note ? (
        <p role="status" className="mt-3 text-[0.72rem] font-medium text-plum">
          {note}
        </p>
      ) : null}
      <div
        className="mx-auto mt-4 overflow-hidden rounded-2xl border border-border/70 shadow-soft"
        style={{ width: PREVIEW_WIDTH, height: SCORE_CARD_HEIGHT * previewScale }}
        aria-label={`Score card preview: ${percent}% on the ${copy.title}${name ? ` for ${name}` : ""}`}
      >
        <div style={{ transform: `scale(${previewScale})`, transformOrigin: "top left" }}>
          <ScoreCard
            ref={cardRef}
            name={name}
            percent={percent}
            passed={passed}
            examTitle={copy.title}
            editionLine={copy.edition}
            passMarkLine={copy.passMark}
            issued={issued}
          />
        </div>
      </div>
    </section>
  );
}
