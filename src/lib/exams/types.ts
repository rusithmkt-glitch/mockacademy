export type ExamDifficultyLabel =
  | "Full simulation"
  | "Focused practice"
  | "Rapid revision";

export type DbExamMode = "immediate_feedback" | "formal";

export interface ExamSummary {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: ExamDifficultyLabel;
  certification: string;
  level: string;
  questionCount: number;
  totalMarks: number;
  durationMinutes: number;
  passPercent: number;
  passMark: number | null;
  isOpenBook: boolean;
  selectionMode: "fixed" | "random";
  maxAttempts: number;
  feedbackAttempts: number;
  isFree: boolean;
  isFeatured: boolean;
  topics: string[];
}

export interface ExamOptionView {
  id: string;
  label: string;
}

export interface ExamStemView {
  id: string;
  label: string;
}

export type ExamQuestionKindView = "single" | "match";

export interface DbReferenceMaterial {
  title: string;
  body?: string;
  rows?: { label: string; value: string }[];
}

export interface AttemptQuestionView {
  id: string;
  position: number;
  prompt: string;
  topic: string;
  kind: ExamQuestionKindView;
  marks: number;
  stems: ExamStemView[];
  options: ExamOptionView[];
  selectedOptionIds: string[];
  selectedByStem: Record<string, string>;
  flagged: boolean;
}

export interface AttemptMeta {
  id: string;
  examSetId: string;
  examSlug: string;
  examTitle: string;
  difficulty: string;
  certification: string;
  level: string;
  passPercent: number;
  /** Absolute pass mark in marks (Practitioner); null falls back to percent. */
  passMark: number | null;
  totalMarks: number;
  referenceMaterials: DbReferenceMaterial[];
  mode: DbExamMode;
  attemptNumber: number;
  maxAttempts: number;
  feedbackAttempts: number;
  startedAt: string;
  expiresAt: string;
  submittedAt?: string | null;
  serverTime: string;
  durationMinutes: number;
  remainingSeconds?: number;
}

export interface ActiveAttemptPayload {
  status: "in_progress";
  resumed: boolean;
  attempt: AttemptMeta;
  questions: AttemptQuestionView[];
}

export interface ReviewQuestionView {
  questionId: string;
  position: number;
  prompt: string;
  topic: string;
  kind: ExamQuestionKindView;
  marks: number;
  stems: (ExamStemView & { correctOptionId?: string })[];
  options: ExamOptionView[];
  selectedOptionIds: string[];
  selectedByStem: Record<string, string>;
  correctOptionIds: string[];
  correctByStem: Record<string, string>;
  explanation: string;
  isCorrect: boolean;
}

export interface SubmittedQuestionView {
  questionId: string;
  position: number;
  prompt: string;
  topic: string;
  kind: ExamQuestionKindView;
  marks: number;
  stems: ExamStemView[];
  options: ExamOptionView[];
  selectedOptionIds: string[];
  selectedByStem: Record<string, string>;
  flagged: boolean;
}

export interface SubmittedAttemptPayload {
  status: "submitted";
  attempt: AttemptMeta;
  result: {
    score: number;
    total: number;
    percent: number;
    passed: boolean;
    passPercent: number;
    passMark: number | null;
    mode: DbExamMode;
    reviewAvailable: boolean;
    topicBreakdown: Record<string, { score: number; total: number }>;
  };
  questions: SubmittedQuestionView[];
  review: ReviewQuestionView[];
}

export interface ExpiredAttemptPayload {
  status: "expired";
  attempt?: Partial<AttemptMeta> & { id: string };
  serverTime?: string;
}

export type ExamAttemptPayload =
  | ActiveAttemptPayload
  | SubmittedAttemptPayload
  | ExpiredAttemptPayload;

export interface ExamPageState {
  attemptsUsed: number;
  active: ExamAttemptPayload | null;
}

export type ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; code?: string };
