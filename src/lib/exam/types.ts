export type ExamTopic = string;

export interface ExamOption {
  id: string;
  label: string;
}

/** One line of a matching question: match this stem to an option. */
export interface ExamStem {
  id: string;
  label: string;
  correctOptionId: string;
}

export type ExamQuestionKind = "single" | "match";

export interface ExamQuestion {
  id: string;
  topic: ExamTopic;
  moduleId: string;
  prompt: string;
  options: ExamOption[];
  correctOptionId: string;
  explanation: string;
  kind?: ExamQuestionKind;
  /** Marks awarded for this item; matching items award one per stem. */
  marks?: number;
  stems?: ExamStem[];
}

export interface ReferenceMaterial {
  title: string;
  body?: string;
  rows?: { label: string; value: string }[];
}

export type QuestionSelection =
  | { mode: "fixed"; questionIds: string[] }
  | { mode: "random"; poolQuestionIds: string[] };

export interface AttemptPolicy {
  /** Attempts from this number onward are formal (no feedback until submission). */
  formalFromAttempt: number;
  scope: "per-exam" | "global";
}

export interface ExamConfig {
  examId: string;
  questionCount: number;
  durationMinutes: number;
  passMarkPercent: number;
  /** Absolute pass mark in marks; takes precedence over passMarkPercent. */
  passMark?: number;
  /** Papers worth more than one mark per question (Practitioner). */
  totalMarks?: number;
  selection: QuestionSelection;
  attemptPolicy: AttemptPolicy;
}

export interface StudentResponse {
  questionId: string;
  selectedOptionIds: string[];
  flagged: boolean;
  /** Matching items: stemId -> chosen optionId. */
  selectedByStem?: Record<string, string>;
}

export interface TopicResult {
  topic: ExamTopic;
  correct: number;
  total: number;
  percent: number;
}

export type AttemptMode = "study" | "formal";

export interface ExamResult {
  examId: string;
  examTitle: string;
  score: number;
  incorrect: number;
  unanswered: number;
  total: number;
  percent: number;
  passMarkPercent: number;
  passMark?: number;
  passed: boolean;
  durationUsedSeconds: number;
  completedAt: string;
  topics: TopicResult[];
  responses: StudentResponse[];
}
