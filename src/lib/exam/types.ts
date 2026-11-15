export type ExamTopic = string;

export interface ExamOption {
  id: string;
  label: string;
}

export interface ExamQuestion {
  id: string;
  topic: ExamTopic;
  moduleId: string;
  prompt: string;
  options: ExamOption[];
  correctOptionId: string;
  explanation: string;
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
  selection: QuestionSelection;
  attemptPolicy: AttemptPolicy;
}

export interface StudentResponse {
  questionId: string;
  selectedOptionIds: string[];
  flagged: boolean;
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
  passed: boolean;
  durationUsedSeconds: number;
  completedAt: string;
  topics: TopicResult[];
  responses: StudentResponse[];
}
