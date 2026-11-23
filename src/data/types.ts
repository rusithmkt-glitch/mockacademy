export type SceneVariant =
  | "foundations"
  | "people"
  | "starting"
  | "planning"
  | "risk"
  | "delivery";

export type LessonArtKey =
  | "principles"
  | "team"
  | "lifecycle"
  | "business-case"
  | "planning"
  | "risk"
  | "progress"
  | "products";

export interface LessonScene {
  id: string;
  title: string;
  description: string;
  art: LessonArtKey;
  captions: string[];
  durationSeconds: number;
}

export type CheckQuestionType = "single" | "multiple" | "boolean";

export interface CheckOption {
  id: string;
  label: string;
}

export interface CheckQuestion {
  id: string;
  type: CheckQuestionType;
  prompt: string;
  options: CheckOption[];
  correctOptionIds: string[];
  explanation: string;
  topic: string;
}

export type CalloutTone = "tip" | "exam" | "note";

export interface LessonCallout {
  title: string;
  body: string;
  tone: CalloutTone;
}

export interface ScenarioStep {
  title?: string;
  body: string;
}

/** A "Let's say you..." question answered step by step in a carousel. */
export interface LessonScenario {
  question: string;
  steps: ScenarioStep[];
}

/** Inline text supports **bold** and *italic* markers. */
export interface LessonSection {
  id: string;
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  scenario?: LessonScenario;
  callout?: LessonCallout;
}

export interface KnowledgeCheck {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export interface Session {
  id: string;
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  objectives: string[];
  sections: LessonSection[];
  keyPoints: string[];
  knowledgeCheck: KnowledgeCheck;
  /** Optional richer assessment; falls back to the single knowledge check. */
  assessment?: CheckQuestion[];
  /** CMS-authored scenes; falls back to scenes generated from the lesson body. */
  scenes?: LessonScene[];
}

export interface CourseModule {
  id: string;
  slug: string;
  order: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  scene: SceneVariant;
  sessions: Session[];
}

export interface CourseBenefit {
  title: string;
  body: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  level: string;
  description: string;
  overview: string[];
  outcomes: string[];
  benefits: CourseBenefit[];
  examDetails: {
    questions: number;
    durationMinutes: number;
    passMark: string;
    format: string;
  };
  modules: CourseModule[];
}

export type ExamDifficulty = "Full simulation" | "Focused practice" | "Rapid revision";

export interface ExamSet {
  id: string;
  slug: string;
  title: string;
  description: string;
  questionCount: number;
  durationMinutes: number;
  format: string;
  difficulty: ExamDifficulty;
  topics: string[];
  free: boolean;
  featured?: boolean;
  maxAttempts: number;
  feedbackAttempts: number;
  /** Certification body/brand the paper prepares for, e.g. PRINCE2. */
  certification?: string;
  /** Discovery grouping level, e.g. foundation | practitioner. */
  level?: string;
  /** Marks per correct answer sum; defaults to questionCount. */
  totalMarks?: number;
  /** Absolute pass mark in marks; when absent the percent rule applies. */
  passMark?: number;
  isOpenBook?: boolean;
  referenceMaterials?: {
    title: string;
    body?: string;
    rows?: { label: string; value: string }[];
  }[];
}

export interface TopicPerformance {
  topic: string;
  moduleId: string;
  score: number;
}

export interface ExamAttempt {
  id: string;
  examId: string;
  date: string;
  score: number;
  total: number;
  passed: boolean;
}

export interface StudentProfile {
  firstName: string;
  lastName: string;
  email: string;
  memberSince: string;
  completedSessionIds: string[];
  recommendedSessionIds: string[];
  topicPerformance: TopicPerformance[];
  examAttempts: ExamAttempt[];
  streakDays: number;
  studyMinutesThisWeek: number;
  weeklyGoalMinutes: number;
}

/** Lightweight shape sent to the client-side syllabus sidebar. */
export interface SyllabusModule {
  id: string;
  slug: string;
  order: number;
  title: string;
  sessions: {
    id: string;
    slug: string;
    title: string;
    durationMinutes: number;
  }[];
}

export interface SyllabusCourse {
  slug: string;
  title: string;
  modules: SyllabusModule[];
}
