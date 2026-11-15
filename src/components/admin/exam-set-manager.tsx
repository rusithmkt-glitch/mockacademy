"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PencilLine, X } from "lucide-react";
import {
  saveExamSetAction,
  setExamPublishedAction,
} from "@/lib/admin/actions";
import type { AdminExamSet, ExamSetInput } from "@/lib/admin/types";
import { cn } from "@/lib/utils";

const DIFFICULTY_OPTIONS = [
  { value: "full_simulation", label: "Full simulation" },
  { value: "focused_practice", label: "Focused practice" },
  { value: "rapid_revision", label: "Rapid revision" },
] as const;

const inputClass =
  "w-full rounded-lg border border-input bg-background px-2.5 py-2 text-[0.8rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30";

function toInput(exam: AdminExamSet): ExamSetInput {
  return {
    id: exam.id,
    title: exam.title,
    description: exam.description,
    difficulty: exam.difficulty,
    questionCount: exam.questionCount,
    durationMinutes: exam.durationMinutes,
    passPercent: exam.passPercent,
    selectionMode: exam.selectionMode,
    maxAttempts: exam.maxAttempts,
    feedbackAttempts: exam.feedbackAttempts,
    isPublished: exam.isPublished,
    isFree: exam.isFree,
    isFeatured: exam.isFeatured,
    topics: exam.topics,
  };
}

export function ExamSetManager({ examSets }: { examSets: AdminExamSet[] }) {
  const router = useRouter();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<ExamSetInput | null>(null);
  const [topicsText, setTopicsText] = useState("");
  const [saving, setSaving] = useState(false);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  function openEditor(exam: AdminExamSet) {
    setError(null);
    setNotice(null);
    setEditingId(exam.id);
    setDraft(toInput(exam));
    setTopicsText(exam.topics.join(", "));
  }

  function closeEditor() {
    setEditingId(null);
    setDraft(null);
    setError(null);
  }

  async function togglePublished(exam: AdminExamSet) {
    if (togglingId) return;
    setTogglingId(exam.id);
    setError(null);
    setNotice(null);
    try {
      const result = await setExamPublishedAction(exam.id, !exam.isPublished);
      if (!result.ok) {
        setError(result.error ?? "The paper could not be updated.");
        return;
      }
      setNotice(
        `${exam.title} is now ${exam.isPublished ? "a draft" : "published"}.`,
      );
      router.refresh();
    } catch {
      setError("We could not reach the admin service. Try again.");
    } finally {
      setTogglingId(null);
    }
  }

  async function handleSave() {
    if (!draft || saving) return;
    setSaving(true);
    setError(null);
    setNotice(null);
    try {
      const result = await saveExamSetAction({
        ...draft,
        topics: topicsText
          .split(",")
          .map((topic) => topic.trim())
          .filter(Boolean),
      });
      if (!result.ok) {
        setError(result.error ?? "The paper could not be saved.");
        return;
      }
      setNotice(`${draft.title} saved.`);
      closeEditor();
      router.refresh();
    } catch {
      setError("We could not reach the admin service. Try again.");
    } finally {
      setSaving(false);
    }
  }

  if (examSets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
        <p className="font-heading text-lg text-foreground">No exam sets yet</p>
        <p className="mx-auto mt-2 max-w-md text-[0.8rem] leading-relaxed text-muted-foreground">
          Run <code className="font-mono text-[0.75rem]">npm run seed:supabase</code>{" "}
          to import the bundled paper blueprints, then refresh this page.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-[0.8rem] text-destructive"
        >
          {error}
        </p>
      ) : null}
      {notice ? (
        <p
          role="status"
          className="rounded-xl border border-primary/20 bg-accent/60 px-4 py-3 text-[0.8rem] text-accent-foreground"
        >
          {notice}
        </p>
      ) : null}

      <div className="grid gap-4 xl:grid-cols-2">
        {examSets.map((exam) => {
          const isEditing = editingId === exam.id && draft;
          const shortfall = Math.max(
            0,
            exam.questionCount - exam.activeQuestions,
          );

          return (
            <section
              key={exam.id}
              className={cn(
                "rounded-2xl border bg-card p-5",
                isEditing ? "border-primary/30 shadow-soft" : "border-border",
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="truncate font-heading text-[1.05rem] text-foreground">
                      {exam.title}
                    </h2>
                    <span
                      className={
                        exam.isPublished
                          ? "rounded-full bg-mint px-2 py-0.5 text-[0.6rem] font-semibold text-navy"
                          : "rounded-full bg-sand px-2 py-0.5 text-[0.6rem] font-semibold text-navy"
                      }
                    >
                      {exam.isPublished ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.68rem] text-muted-foreground">
                    {exam.slug} · {exam.difficulty.replace(/_/g, " ")} ·{" "}
                    {exam.durationMinutes} min · {exam.passPercent}% pass
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => void togglePublished(exam)}
                    disabled={togglingId === exam.id}
                    className="rounded-full border border-border px-3 py-1.5 text-[0.68rem] font-semibold text-foreground transition-colors hover:bg-muted disabled:opacity-60"
                  >
                    {togglingId === exam.id
                      ? "Updating…"
                      : exam.isPublished
                        ? "Unpublish"
                        : "Publish"}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      isEditing ? closeEditor() : openEditor(exam)
                    }
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[0.68rem] font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    {isEditing ? (
                      <X className="size-3" aria-hidden="true" />
                    ) : (
                      <PencilLine className="size-3" aria-hidden="true" />
                    )}
                    {isEditing ? "Close" : "Edit"}
                  </button>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.7rem] sm:grid-cols-3">
                <div>
                  <dt className="text-muted-foreground">Questions</dt>
                  <dd className="font-semibold text-foreground">
                    {exam.activeQuestions} / {exam.questionCount}
                    {shortfall > 0 ? (
                      <span className="ml-1 text-[0.62rem] font-medium text-destructive">
                        ({shortfall} short)
                      </span>
                    ) : null}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Attempts</dt>
                  <dd className="font-semibold text-foreground">
                    {exam.maxAttempts} total · {exam.feedbackAttempts} feedback
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Selection</dt>
                  <dd className="font-semibold capitalize text-foreground">
                    {exam.selectionMode}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Access</dt>
                  <dd className="font-semibold text-foreground">
                    {exam.isFree ? "Free" : "Paid"}
                    {exam.isFeatured ? " · Featured" : ""}
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-muted-foreground">Topics</dt>
                  <dd className="truncate font-medium text-foreground">
                    {exam.topics.length > 0 ? exam.topics.join(", ") : "—"}
                  </dd>
                </div>
              </dl>

              {isEditing && draft ? (
                <div className="mt-4 border-t border-border pt-4">
                  <div className="grid gap-3">
                    <label className="block">
                      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Title
                      </span>
                      <input
                        value={draft.title}
                        onChange={(event) =>
                          setDraft({ ...draft, title: event.target.value })
                        }
                        className={cn(inputClass, "mt-1")}
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Description
                      </span>
                      <textarea
                        value={draft.description}
                        onChange={(event) =>
                          setDraft({ ...draft, description: event.target.value })
                        }
                        rows={2}
                        className={cn(inputClass, "mt-1 resize-y")}
                      />
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Difficulty
                        </span>
                        <select
                          value={draft.difficulty}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              difficulty: event.target.value as ExamSetInput["difficulty"],
                            })
                          }
                          className={cn(inputClass, "mt-1")}
                        >
                          {DIFFICULTY_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Selection mode
                        </span>
                        <select
                          value={draft.selectionMode}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              selectionMode: event.target
                                .value as ExamSetInput["selectionMode"],
                            })
                          }
                          className={cn(inputClass, "mt-1")}
                        >
                          <option value="fixed">Fixed order</option>
                          <option value="random">Random order</option>
                        </select>
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <label className="block">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Questions
                        </span>
                        <input
                          type="number"
                          min={1}
                          value={draft.questionCount}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              questionCount: Number(event.target.value) || 0,
                            })
                          }
                          className={cn(inputClass, "mt-1")}
                        />
                      </label>
                      <label className="block">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Minutes
                        </span>
                        <input
                          type="number"
                          min={1}
                          value={draft.durationMinutes}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              durationMinutes: Number(event.target.value) || 0,
                            })
                          }
                          className={cn(inputClass, "mt-1")}
                        />
                      </label>
                      <label className="block">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Pass %
                        </span>
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={draft.passPercent}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              passPercent: Number(event.target.value) || 0,
                            })
                          }
                          className={cn(inputClass, "mt-1")}
                        />
                      </label>
                      <label className="block">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Attempts
                        </span>
                        <input
                          type="number"
                          min={1}
                          value={draft.maxAttempts}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              maxAttempts: Number(event.target.value) || 0,
                            })
                          }
                          className={cn(inputClass, "mt-1")}
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <label className="block">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Feedback attempts
                        </span>
                        <input
                          type="number"
                          min={0}
                          value={draft.feedbackAttempts}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              feedbackAttempts: Number(event.target.value) || 0,
                            })
                          }
                          className={cn(inputClass, "mt-1")}
                        />
                      </label>
                      <label className="col-span-2 block sm:col-span-3">
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Topics (comma separated)
                        </span>
                        <input
                          value={topicsText}
                          onChange={(event) => setTopicsText(event.target.value)}
                          className={cn(inputClass, "mt-1")}
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-4 text-[0.72rem] text-foreground">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={draft.isPublished}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              isPublished: event.target.checked,
                            })
                          }
                          className="size-3.5 accent-[var(--primary)]"
                        />
                        Published
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={draft.isFree}
                          onChange={(event) =>
                            setDraft({ ...draft, isFree: event.target.checked })
                          }
                          className="size-3.5 accent-[var(--primary)]"
                        />
                        Free access
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={draft.isFeatured}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              isFeatured: event.target.checked,
                            })
                          }
                          className="size-3.5 accent-[var(--primary)]"
                        />
                        Featured
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => void handleSave()}
                        disabled={saving}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-[0.75rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                      >
                        {saving ? "Saving…" : "Save paper"}
                      </button>
                      <button
                        type="button"
                        onClick={closeEditor}
                        className="rounded-full border border-border px-4 py-2 text-[0.75rem] font-semibold text-foreground transition-colors hover:bg-muted"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
