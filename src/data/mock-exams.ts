import type { ExamSet } from "./types";
import { EXAM_SIMULATOR_ID, FOUNDATION_MOCK_ID } from "./exams/config";

const elements = ["Principles", "People", "Practices", "Processes", "Project context"];

export const examSets: ExamSet[] = [
  {
    id: FOUNDATION_MOCK_ID,
    slug: "prince2-7th-edition-foundation-mock",
    title: "PRINCE2 7th Edition Foundation Mock Exam",
    description:
      "A full 60-question paper covering the whole PRINCE2 7th edition syllabus. The questions stay the same each time, so you can measure your progress.",
    questionCount: 60,
    durationMinutes: 60,
    format: "Multiple choice · closed book",
    difficulty: "Full simulation",
    topics: elements,
    free: true,
    featured: true,
    maxAttempts: 3,
    feedbackAttempts: 2,
  },
  {
    id: EXAM_SIMULATOR_ID,
    slug: "prince2-foundation-exam-simulator",
    title: "PRINCE2 Foundation Exam Simulator",
    description:
      "As close to exam day as practice gets: 60 questions drawn at random from a bank of 120, with 60 minutes on the clock and a 60% pass mark. Every attempt is a new paper.",
    questionCount: 60,
    durationMinutes: 60,
    format: "Multiple choice · closed book",
    difficulty: "Full simulation",
    topics: elements,
    free: true,
    maxAttempts: 10,
    feedbackAttempts: 10,
  },
];

export const examBlueprint = [
  {
    topic: "Foundations and principles",
    share: "About 18%",
    description:
      "What makes a project, the seven performance targets, the five integrated elements and the seven principles.",
  },
  {
    topic: "People",
    share: "About 8%",
    description:
      "Leadership, teams, stakeholder engagement, communication, culture and organisational change.",
  },
  {
    topic: "Business case, organising and plans",
    share: "About 23%",
    description:
      "Benefits and sustainability, the project board and other roles, levels of plan and product-based planning.",
  },
  {
    topic: "Quality, risk, issues and progress",
    share: "About 30%",
    description:
      "Quality reviews, risk responses, change control, tolerances, reports, logs and registers.",
  },
  {
    topic: "Processes and tailoring",
    share: "About 20%",
    description:
      "The seven processes from starting up to closing, and tailoring PRINCE2 to its context.",
  },
];
