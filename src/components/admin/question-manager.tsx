"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Circle,
  PencilLine,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import {
  deleteQuestionAction,
  saveQuestionAction,
} from "@/lib/admin/actions";
import type {
  AdminExamSet,
  AdminQuestion,
  QuestionOptionInput,
} from "@/lib/admin/types";
import { cn } from "@/lib/utils";

interface DraftOption {
  id: string | null;
  label: string;
  isCorrect: boolean;
}

interface Draft {
  id: string | null;
  prompt: string;
  topic: string;
  explanation: string;
  order: number;
  isActive: boolean;
  options: DraftOption[];
}

function toDraft(question: AdminQuestion | null, nextOrder: number): Draft {
  if (!question) {
    return {
      id: null,
      prompt: "",
      topic: "",
      explanation: "",
      order: nextOrder,
      isActive: true,
      options: [
        { id: null, label: "", isCorrect: true },
        { id: null, label: "", isCorrect: false },
        { id: null, label: "", isCorrect: false },
        { id: null, label: "", isCorrect: false },
      ],
    };
  }
  return {
    id: question.id,
    prompt: question.prompt,
    topic: question.topic,
    explanation: question.explanation,
    order: question.order,
    isActive: question.isActive,
    options: question.options.map((option) => ({
      id: option.id,
      label: option.label,
      isCorrect: option.isCorrect,
    })),
  };
}

const inputClass =
  "w-full rounded-lg border border-input bg-background px-2.5 py-2 text-[0.8rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30";

export function QuestionManager({
  examSet,
  questions,
  initialError,
}: {
  examSet: AdminExamSet;
  questions: AdminQuestion[];
  initialError: string | null;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [listError, setListError] = useState<string | null>(initialError);
  const [notice, setNotice] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const nextOrder = useMemo(
    () => questions.reduce((max, item) => Math.max(max, item.order), 0) + 1,
    [questions],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return questions;
    return questions.filter(
      (question) =>
        question.prompt.toLowerCase().includes(needle) ||
        question.topic.toLowerCase().includes(needle),
    );
  }, [questions, query]);

  function openEditor(question: AdminQuestion | null) {
    setFormError(null);
    setNotice(null);
    setDraft(toDraft(question, nextOrder));
  }

  function setOption(index: number, patch: Partial<DraftOption>) {
    setDraft((current) => {
      if (!current) return current;
      return {
        ...current,
        options: current.options.map((option, i) =>
          i === index ? { ...option, ...patch } : option,
        ),
      };
    });
  }

  function markCorrect(index: number) {
    setDraft((current) => {
      if (!current) return current;
      return {
        ...current,
        options: current.options.map((option, i) => ({
          ...option,
          isCorrect: i === index,
        })),
      };
    });
  }

  function addOption() {
    setDraft((current) => {
      if (!current || current.options.length >= 10) return current;
      return {
        ...current,
        options: [...current.options, { id: null, label: "", isCorrect: false }],
      };
    });
  }

  function removeOption(index: number) {
    setDraft((current) => {
      if (!current || current.options.length <= 2) return current;
      const removed = current.options[index];
      let options = current.options.filter((_, i) => i !== index);
      if (removed.isCorrect) {
        options = options.map((option, i) => ({ ...option, isCorrect: i === 0 }));
      }
      return { ...current, options };
    });
  }

  async function handleSave() {
    if (!draft || saving) return;
    if (!draft.prompt.trim()) {
      setFormError("Add a question prompt before saving.");
      return;
    }
    if (draft.options.some((option) => !option.label.trim())) {
      setFormError("Every answer option needs a label.");
      return;
    }
    if (draft.options.filter((option) => option.isCorrect).length !== 1) {
      setFormError("Mark exactly one option as the correct answer.");
      return;
    }

    setSaving(true);
    setFormError(null);
    try {
      const options: QuestionOptionInput[] = draft.options.map((option) => ({
        id: option.id,
        label: option.label.trim(),
        isCorrect: option.isCorrect,
      }));
      const result = await saveQuestionAction({
        examSetId: examSet.id,
        questionId: draft.id,
        prompt: draft.prompt,
        topic: draft.topic,
        explanation: draft.explanation,
        order: draft.order,
        isActive: draft.isActive,
        options,
      });
      if (!result.ok) {
        setFormError(result.error ?? "That question could not be saved.");
        return;
      }
      setDraft(null);
      setNotice(draft.id ? "Question updated." : "Question added.");
      router.refresh();
    } catch {
      setFormError("We could not reach the admin service. Try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(questionId: string) {
    if (deleting) return;
    setDeleting(true);
    setListError(null);
    setNotice(null);
    try {
      const result = await deleteQuestionAction(questionId);
      if (!result.ok) {
        setListError(result.error ?? "That question could not be deleted.");
        return;
      }
      setDeleteTarget(null);
      setNotice("Question deleted.");
      router.refresh();
    } catch {
      setListError("We could not reach the admin service. Try again.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
          <Search className="size-3.5 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search prompts or topics"
            aria-label="Search questions"
            className="w-48 bg-transparent text-[0.78rem] text-foreground outline-none placeholder:text-muted-foreground sm:w-64"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[0.7rem] text-muted-foreground">
            {questions.length} question{questions.length === 1 ? "" : "s"} ·{" "}
            {examSet.activeQuestions} active
          </span>
          <button
            type="button"
            onClick={() => openEditor(null)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[0.75rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="size-3.5" aria-hidden="true" />
            New question
          </button>
        </div>
      </div>

      {listError ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-[0.8rem] text-destructive"
        >
          {listError}
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

      {draft ? (
        <section
          aria-label={draft.id ? "Edit question" : "New question"}
          className="rounded-2xl border border-primary/25 bg-card p-5 shadow-soft"
        >
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-heading text-lg text-foreground">
              {draft.id ? "Edit question" : "New question"}
            </h2>
            <button
              type="button"
              onClick={() => setDraft(null)}
              className="flex size-7 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close editor"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 grid gap-4">
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Prompt
              </span>
              <textarea
                value={draft.prompt}
                onChange={(event) =>
                  setDraft({ ...draft, prompt: event.target.value })
                }
                rows={3}
                className={cn(inputClass, "mt-1.5 resize-y")}
                placeholder="What does the business case describe?"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Topic
                </span>
                <input
                  value={draft.topic}
                  onChange={(event) =>
                    setDraft({ ...draft, topic: event.target.value })
                  }
                  className={cn(inputClass, "mt-1.5")}
                  placeholder="Business case"
                />
              </label>
              <label className="block">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Position
                </span>
                <input
                  type="number"
                  min={1}
                  value={draft.order}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      order: Number(event.target.value) || 1,
                    })
                  }
                  className={cn(inputClass, "mt-1.5")}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Explanation shown after submission
              </span>
              <textarea
                value={draft.explanation}
                onChange={(event) =>
                  setDraft({ ...draft, explanation: event.target.value })
                }
                rows={2}
                className={cn(inputClass, "mt-1.5 resize-y")}
                placeholder="Why is that the right answer?"
              />
            </label>

            <fieldset>
              <legend className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Answer options
              </legend>
              <div className="mt-2 space-y-2">
                {draft.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => markCorrect(index)}
                      aria-pressed={option.isCorrect}
                      aria-label={`Mark option ${index + 1} as correct`}
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                        option.isCorrect
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-primary/50",
                      )}
                    >
                      {option.isCorrect ? (
                        <CheckCircle2 className="size-3.5" aria-hidden="true" />
                      ) : (
                        <Circle className="size-3.5" aria-hidden="true" />
                      )}
                    </button>
                    <input
                      value={option.label}
                      onChange={(event) =>
                        setOption(index, { label: event.target.value })
                      }
                      className={inputClass}
                      placeholder={`Option ${index + 1}`}
                      aria-label={`Option ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      disabled={draft.options.length <= 2}
                      className="flex size-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive disabled:opacity-30"
                      aria-label={`Remove option ${index + 1}`}
                    >
                      <Trash2 className="size-3.5" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={addOption}
                  disabled={draft.options.length >= 10}
                  className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-primary hover:underline disabled:opacity-40"
                >
                  <Plus className="size-3" aria-hidden="true" />
                  Add option
                </button>
                <label className="inline-flex items-center gap-2 text-[0.72rem] text-foreground">
                  <input
                    type="checkbox"
                    checked={draft.isActive}
                    onChange={(event) =>
                      setDraft({ ...draft, isActive: event.target.checked })
                    }
                    className="size-3.5 accent-[var(--primary)]"
                  />
                  Active in this paper
                </label>
              </div>
            </fieldset>

            {formError ? (
              <p role="alert" className="text-[0.78rem] text-destructive">
                {formError}
              </p>
            ) : null}

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => void handleSave()}
                disabled={saving}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-[0.75rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {saving ? "Saving…" : "Save question"}
              </button>
              <button
                type="button"
                onClick={() => setDraft(null)}
                className="rounded-full border border-border px-4 py-2 text-[0.75rem] font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {filtered.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <p className="text-[0.85rem] font-medium text-foreground">
              {questions.length === 0
                ? "No questions in this paper yet"
                : "No questions match your search"}
            </p>
            <p className="mt-1 text-[0.75rem] text-muted-foreground">
              {questions.length === 0
                ? "Add the first question to make this paper available."
                : "Try a different prompt or topic."}
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((question) => (
              <li key={question.id} className="px-4 py-3 sm:px-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[0.62rem] font-semibold text-muted-foreground">
                        #{question.order}
                      </span>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[0.6rem] font-medium text-muted-foreground">
                        {question.topic}
                      </span>
                      {!question.isActive ? (
                        <span className="rounded-full bg-sand px-2 py-0.5 text-[0.6rem] font-semibold text-navy">
                          Inactive
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-[0.82rem] leading-snug text-foreground">
                      {question.prompt}
                    </p>
                    <p className="mt-1 text-[0.66rem] text-muted-foreground">
                      {question.options.length} options · correct:{" "}
                      {question.options.find((option) => option.isCorrect)
                        ?.label ?? "none"}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => openEditor(question)}
                      className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1.5 text-[0.68rem] font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      <PencilLine className="size-3" aria-hidden="true" />
                      Edit
                    </button>
                    {deleteTarget === question.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => void handleDelete(question.id)}
                          disabled={deleting}
                          className="rounded-full bg-destructive/10 px-2.5 py-1.5 text-[0.68rem] font-semibold text-destructive transition-colors hover:bg-destructive/20 disabled:opacity-60"
                        >
                          {deleting ? "Deleting…" : "Confirm"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(null)}
                          className="rounded-full px-2 py-1.5 text-[0.68rem] font-semibold text-muted-foreground hover:bg-muted"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setNotice(null);
                          setDeleteTarget(question.id);
                        }}
                        className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        aria-label={`Delete question ${question.order}`}
                      >
                        <Trash2 className="size-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
