export type AdminRole = "student" | "administrator" | "super_administrator";

export type AdminDifficulty =
  | "full_simulation"
  | "focused_practice"
  | "rapid_revision";

export interface AdminOverview {
  students: number;
  staff: number;
  publishedExams: number;
  totalExams: number;
  activeQuestions: number;
  attempts: number;
  submitted: number;
  passRate: number;
  sessionCompletions: number;
  knowledgeChecks: number;
}

export interface AdminExamSet {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: AdminDifficulty;
  questionCount: number;
  durationMinutes: number;
  passPercent: number;
  selectionMode: "fixed" | "random";
  maxAttempts: number;
  feedbackAttempts: number;
  isPublished: boolean;
  isFree: boolean;
  isFeatured: boolean;
  topics: string[];
  activeQuestions: number;
}

export interface AdminQuestionOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface AdminQuestion {
  id: string;
  prompt: string;
  topic: string;
  explanation: string;
  order: number;
  isActive: boolean;
  options: AdminQuestionOption[];
}

export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: AdminRole;
  createdAt: string;
}

export interface AdminResult<T = undefined> {
  ok: boolean;
  data?: T;
  error?: string;
}

export interface QuestionOptionInput {
  id?: string | null;
  label: string;
  isCorrect: boolean;
}

export interface QuestionInput {
  examSetId: string;
  questionId?: string | null;
  prompt: string;
  topic: string;
  explanation: string;
  order: number;
  isActive: boolean;
  options: QuestionOptionInput[];
}

export interface ExamSetInput {
  id: string;
  title: string;
  description: string;
  difficulty: AdminDifficulty;
  questionCount: number;
  durationMinutes: number;
  passPercent: number;
  selectionMode: "fixed" | "random";
  maxAttempts: number;
  feedbackAttempts: number;
  isPublished: boolean;
  isFree: boolean;
  isFeatured: boolean;
  topics: string[];
}
