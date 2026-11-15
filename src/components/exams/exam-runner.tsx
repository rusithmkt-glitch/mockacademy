"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ExamConfig } from "@/lib/exam/types";
import type { ExamResult } from "@/lib/exam/types";
import type {
  PresentedQuestion,
} from "@/lib/exam/presentation";
import { selectPresentedQuestions } from "@/lib/exam/presentation";
import type { ResponseMap } from "@/lib/exam/responses";
import {
  selectOption,
  toStudentResponses,
  toggleFlag,
} from "@/lib/exam/responses";
import {
  getAttemptMode,
  getAttemptNumber,
} from "@/lib/exam/attempts";
import { scoreExam } from "@/lib/exam/scoring";
import {
  isLowTime,
  remainingSeconds,
  shouldAutoSubmit,
} from "@/lib/exam/timer";
import { examQuestionById } from "@/data/exams/questions";
import { useDemoStore } from "@/lib/progress/provider";
import { ExamInstructions } from "./exam-instructions";
import { ExamSession, type ExamFeedback } from "./exam-session";
import { ExamResults } from "./exam-results";

type Phase = "instructions" | "running" | "results";

export function ExamRunner({
  examId,
  examTitle,
  config,
  fixedQuestions,
  pool,
}: {
  examId: string;
  examTitle: string;
  config: ExamConfig;
  fixedQuestions: PresentedQuestion[];
  pool: PresentedQuestion[];
}) {
  const { attempts, recordAttempt } = useDemoStore();
  const attemptNumber = getAttemptNumber(attempts, examId, config.attemptPolicy);
  const mode = getAttemptMode(attemptNumber, config.attemptPolicy);

  const [phase, setPhase] = useState<Phase>("instructions");
  const [questions, setQuestions] = useState<PresentedQuestion[]>([]);
  const [responses, setResponses] = useState<ResponseMap>({});
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<ExamResult | null>(null);
  const [review, setReview] = useState<Record<string, ExamFeedback>>({});
  const [activeAttempt, setActiveAttempt] = useState<{
    number: number;
    mode: typeof mode;
  } | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [endAt, setEndAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const submittedRef = useRef(false);

  const remaining = endAt
    ? remainingSeconds(endAt, now)
    : config.durationMinutes * 60;

  useEffect(() => {
    if (phase !== "running" || !endAt) return;
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [phase, endAt]);

  const finishExam = useCallback(
    (autoSubmitted: boolean) => {
      if (submittedRef.current || questions.length === 0) return;
      submittedRef.current = true;

      const fullQuestions = questions.flatMap((question) => {
        const bankQuestion = examQuestionById.get(question.id);
        return bankQuestion ? [bankQuestion] : [];
      });
      const elapsed = startedAt
        ? Math.round((Date.now() - startedAt) / 1000)
        : config.durationMinutes * 60;
      const durationUsedSeconds = autoSubmitted
        ? config.durationMinutes * 60
        : Math.min(
            config.durationMinutes * 60,
            Math.max(1, elapsed),
          );

      const scored = scoreExam({
        examId,
        examTitle,
        questions: fullQuestions,
        responses: toStudentResponses(questions, responses),
        passMarkPercent: config.passMarkPercent,
        durationUsedSeconds,
        completedAt: new Date().toISOString(),
      });

      setReview(
        Object.fromEntries(
          questions.map((question) => {
            const bankQuestion = examQuestionById.get(question.id);
            return [
              question.id,
              {
                correctOptionId: bankQuestion?.correctOptionId ?? "",
                explanation: bankQuestion?.explanation ?? "",
              },
            ];
          }),
        ),
      );
      setResult(scored);
      recordAttempt(scored);
      setPhase("results");
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    },
    [
      config.durationMinutes,
      config.passMarkPercent,
      examId,
      examTitle,
      questions,
      recordAttempt,
      responses,
      startedAt,
    ],
  );

  useEffect(() => {
    if (phase !== "running" || !endAt) return;
    if (shouldAutoSubmit(remainingSeconds(endAt, now), submittedRef.current)) {
      finishExam(true);
    }
  }, [phase, endAt, now, finishExam]);

  const feedback = useMemo(() => {
    if (activeAttempt?.mode !== "study") return undefined;
    const map: Record<string, ExamFeedback> = {};
    for (const question of questions) {
      const bankQuestion = examQuestionById.get(question.id);
      if (bankQuestion) {
        map[question.id] = {
          correctOptionId: bankQuestion.correctOptionId,
          explanation: bankQuestion.explanation,
        };
      }
    }
    return map;
  }, [activeAttempt, questions]);

  function begin() {
    const selected = selectPresentedQuestions(config, fixedQuestions, pool);
    const start = Date.now();
    setQuestions(selected);
    setResponses({});
    setIndex(0);
    setResult(null);
    setReview({});
    setActiveAttempt({ number: attemptNumber, mode });
    setStartedAt(start);
    setEndAt(start + config.durationMinutes * 60_000);
    setNow(start);
    submittedRef.current = false;
    setPhase("running");
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  }

  function retake() {
    setPhase("instructions");
    setResult(null);
    setReview({});
    setResponses({});
    setQuestions([]);
    setIndex(0);
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  }

  if (phase === "instructions") {
    return (
      <ExamInstructions
        examTitle={examTitle}
        config={config}
        attemptNumber={attemptNumber}
        mode={mode}
        onBegin={begin}
      />
    );
  }

  if (phase === "running" && activeAttempt) {
    return (
      <ExamSession
        examTitle={examTitle}
        attemptNumber={activeAttempt.number}
        mode={activeAttempt.mode}
        questions={questions}
        index={index}
        responses={responses}
        remaining={remaining}
        lowTime={isLowTime(remaining)}
        feedback={feedback}
        onSelect={(optionId) =>
          setResponses((current) =>
            selectOption(current, questions[index].id, optionId),
          )
        }
        onToggleFlag={() =>
          setResponses((current) =>
            toggleFlag(current, questions[index].id),
          )
        }
        onNavigate={(nextIndex) => {
          if (nextIndex < 0 || nextIndex >= questions.length) return;
          setIndex(nextIndex);
          window.scrollTo(0, 0);
        }}
        onSubmit={() => finishExam(false)}
      />
    );
  }

  if (phase === "results" && result && activeAttempt) {
    return (
      <ExamResults
        examTitle={examTitle}
        result={result}
        attemptNumber={activeAttempt.number}
        mode={activeAttempt.mode}
        questions={questions}
        review={review}
        onRetake={retake}
      />
    );
  }

  return null;
}
