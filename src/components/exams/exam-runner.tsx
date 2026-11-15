"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { AttemptMode } from "@/lib/exam/types";
import type { PresentedQuestion } from "@/lib/exam/presentation";
import type { ResponseMap, ResponseState } from "@/lib/exam/responses";
import {
  selectOption,
  toggleFlag,
} from "@/lib/exam/responses";
import { isLowTime } from "@/lib/exam/timer";
import type {
  ActiveAttemptPayload,
  AttemptQuestionView,
  ExamPageState,
  ExamSummary,
  SubmittedAttemptPayload,
} from "@/lib/exams/types";
import {
  refreshExamStateAction,
  saveExamResponseAction,
  startExamAttempt,
  submitExamAttemptAction,
} from "@/lib/exams/actions";
import {
  toExamResult,
  toPresentedQuestions,
  toResponseMap,
  toReviewMap,
  toUiMode,
} from "@/lib/exams/presentation";
import { ExamInstructions } from "./exam-instructions";
import { ExamSession } from "./exam-session";
import { ExamResults } from "./exam-results";

type Phase = "instructions" | "running" | "results";

function submittedQuestions(
  payload: SubmittedAttemptPayload,
): PresentedQuestion[] {
  return payload.questions.map((question) => ({
    id: question.questionId,
    topic: question.topic,
    moduleId: "",
    prompt: question.prompt,
    options: question.options.map((option) => ({ ...option })),
  }));
}

export function ExamRunner({
  exam,
  initialState,
  isAuthenticated,
}: {
  exam: ExamSummary;
  initialState: ExamPageState;
  isAuthenticated: boolean;
}) {
  const initialActive =
    initialState.active?.status === "in_progress" ? initialState.active : null;
  const initialSubmitted =
    initialState.active?.status === "submitted" ? initialState.active : null;
  const initialExpired = initialState.active?.status === "expired";

  const [phase, setPhase] = useState<Phase>(
    initialSubmitted ? "results" : initialActive ? "running" : "instructions",
  );
  const [attemptsUsed, setAttemptsUsed] = useState(initialState.attemptsUsed);
  const [attempt, setAttempt] = useState<ActiveAttemptPayload["attempt"] | null>(
    initialActive?.attempt ?? initialSubmitted?.attempt ?? null,
  );
  const [questions, setQuestions] = useState<AttemptQuestionView[]>(
    initialActive?.questions ?? [],
  );
  const [responses, setResponses] = useState<ResponseMap>(
    initialActive ? toResponseMap(initialActive.questions) : {},
  );
  const [submitted, setSubmitted] = useState<SubmittedAttemptPayload | null>(
    initialSubmitted,
  );
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(
    initialActive?.attempt.remainingSeconds ?? exam.durationMinutes * 60,
  );
  const [starting, setStarting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [startError, setStartError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(
    initialExpired
      ? "Your previous attempt timed out before it was submitted."
      : !initialActive && initialState.attemptsUsed >= exam.maxAttempts
        ? "You have used every attempt for this paper."
        : null,
  );

  const submitLockRef = useRef(false);
  const saveQueueRef = useRef<Promise<void>>(Promise.resolve());
  const lastSavedRef = useRef<Map<string, string>>(new Map());

  const displayedAttemptNumber = Math.min(
    attemptsUsed + 1,
    exam.maxAttempts,
  );
  const canStart = attemptsUsed < exam.maxAttempts;
  const instructionMode: AttemptMode =
    displayedAttemptNumber <= exam.feedbackAttempts ? "study" : "formal";

  const finishExam = useCallback(async () => {
    if (!attempt || submitLockRef.current) return;
    submitLockRef.current = true;
    setSubmitting(true);
    setSaveError(null);

    try {
      await saveQueueRef.current;
      const response = await submitExamAttemptAction(attempt.id);
      if (!response.ok) {
        setSaveError(response.error);
        return;
      }

      const payload = response.data;
      if (payload.status === "submitted") {
        setSubmitted(payload);
        setAttemptsUsed((previous) =>
          Math.max(previous, payload.attempt.attemptNumber),
        );
        setPhase("results");
        window.requestAnimationFrame(() => window.scrollTo(0, 0));
        return;
      }

      setAttemptsUsed((previous) =>
        Math.max(previous, attempt.attemptNumber),
      );
      setNotice("Time ran out before the paper was submitted.");
      setAttempt(null);
      setQuestions([]);
      setResponses({});
      setPhase("instructions");
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    } finally {
      submitLockRef.current = false;
      setSubmitting(false);
    }
  }, [attempt]);

  useEffect(() => {
    if (phase !== "running" || !attempt) return;

    const deadline =
      Date.now() +
      Math.max(0, attempt.remainingSeconds ?? exam.durationMinutes * 60) * 1000;
    let finished = false;

    const tick = () => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0 && !finished) {
        finished = true;
        void finishExam();
      }
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [phase, attempt, exam.durationMinutes, finishExam]);

  function queueSave(questionId: string, next: ResponseState) {
    if (!attempt) return;
    const attemptId = attempt.id;
    const fingerprint = `${[...next.selectedOptionIds].sort().join(",")}|${next.flagged}`;
    if (lastSavedRef.current.get(questionId) === fingerprint) return;
    lastSavedRef.current.set(questionId, fingerprint);
    setSaveError(null);

    saveQueueRef.current = saveQueueRef.current.then(async () => {
      const result = await saveExamResponseAction({
        attemptId,
        questionId,
        selectedOptionIds: next.selectedOptionIds,
        flagged: next.flagged,
      });

      if (!result.ok) {
        lastSavedRef.current.delete(questionId);
        setSaveError(result.error);
        return;
      }

      if (result.data.status === "expired") {
        setAttemptsUsed((previous) =>
          Math.max(previous, attempt.attemptNumber),
        );
        setNotice("Time ran out before that answer could be saved.");
        setAttempt(null);
        setQuestions([]);
        setResponses({});
        setPhase("instructions");
      }
    });
  }

  function handleSelect(optionId: string) {
    const question = questions[index];
    if (!question) return;
    const next = selectOption(responses, question.id, optionId);
    setResponses(next);
    queueSave(question.id, next[question.id]);
  }

  function handleToggleFlag() {
    const question = questions[index];
    if (!question) return;
    const next = toggleFlag(responses, question.id);
    setResponses(next);
    queueSave(question.id, next[question.id]);
  }

  async function begin() {
    if (starting) return;
    setStarting(true);
    setStartError(null);
    setNotice(null);

    try {
      const result = await startExamAttempt(exam.slug);
      if (!result.ok) {
        setStartError(result.error);
        return;
      }

      const payload = result.data;
      if (payload.status === "in_progress") {
        setAttempt(payload.attempt);
        setQuestions(payload.questions);
        setResponses(toResponseMap(payload.questions));
        setAttemptsUsed((previous) =>
          Math.max(previous, payload.attempt.attemptNumber),
        );
        setRemaining(payload.attempt.remainingSeconds ?? exam.durationMinutes * 60);
        setIndex(0);
        setSubmitted(null);
        setSaveError(null);
        setPhase("running");
        window.requestAnimationFrame(() => window.scrollTo(0, 0));
        return;
      }

      if (payload.status === "submitted") {
        setSubmitted(payload);
        setPhase("results");
        window.requestAnimationFrame(() => window.scrollTo(0, 0));
        return;
      }

      setNotice("This attempt has expired. Start a new attempt to continue.");
    } finally {
      setStarting(false);
    }
  }

  async function retake() {
    setSaveError(null);
    setStartError(null);
    setNotice(null);

    const result = await refreshExamStateAction(exam.slug);
    if (result.ok) {
      setAttemptsUsed(result.data.attemptsUsed);
      if (result.data.active?.status === "in_progress") {
        const payload = result.data.active;
        setAttempt(payload.attempt);
        setQuestions(payload.questions);
        setResponses(toResponseMap(payload.questions));
        setRemaining(payload.attempt.remainingSeconds ?? exam.durationMinutes * 60);
        setIndex(0);
        setSubmitted(null);
        setPhase("running");
        window.requestAnimationFrame(() => window.scrollTo(0, 0));
        return;
      }
      if (result.data.active?.status === "submitted") {
        setSubmitted(result.data.active);
        setPhase("results");
        return;
      }
      if (result.data.attemptsUsed >= exam.maxAttempts) {
        setNotice("You have used every attempt for this paper.");
      }
    }

    setSubmitted(null);
    setAttempt(null);
    setQuestions([]);
    setResponses({});
    setIndex(0);
    setPhase("instructions");
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  }

  if (phase === "instructions") {
    return (
      <ExamInstructions
        exam={exam}
        attemptNumber={displayedAttemptNumber}
        mode={instructionMode}
        canStart={canStart}
        isAuthenticated={isAuthenticated}
        loginHref={`/login?next=${encodeURIComponent(`/mock-exams/${exam.slug}`)}`}
        starting={starting}
        startError={startError}
        notice={notice}
        onBegin={() => void begin()}
      />
    );
  }

  if (phase === "running" && attempt) {
    const presented = toPresentedQuestions(questions);
    const mode = toUiMode(attempt.mode);
    return (
      <ExamSession
        examTitle={exam.title}
        attemptNumber={attempt.attemptNumber}
        mode={mode}
        questions={presented}
        index={index}
        responses={responses}
        remaining={remaining}
        lowTime={isLowTime(remaining)}
        saveError={saveError}
        submitting={submitting}
        onSelect={handleSelect}
        onToggleFlag={handleToggleFlag}
        onNavigate={(nextIndex) => {
          if (nextIndex < 0 || nextIndex >= presented.length) return;
          setIndex(nextIndex);
          window.scrollTo(0, 0);
        }}
        onSubmit={() => void finishExam()}
      />
    );
  }

  if (phase === "results" && submitted) {
    return (
      <ExamResults
        examTitle={submitted.attempt.examTitle}
        result={toExamResult(submitted)}
        attemptNumber={submitted.attempt.attemptNumber}
        mode={toUiMode(submitted.attempt.mode)}
        questions={submittedQuestions(submitted)}
        review={toReviewMap(submitted)}
        reviewAvailable={submitted.result.reviewAvailable}
        onRetake={() => void retake()}
      />
    );
  }

  return null;
}
