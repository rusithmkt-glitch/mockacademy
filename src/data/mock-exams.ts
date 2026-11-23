import type { ExamSet } from "./types";
import {
  EXAM_SIMULATOR_ID,
  FOUNDATION_MOCK_ID,
  IELTS_READING_MOCK_ID,
  PRACTITIONER_MOCK_ID,
} from "./exams/config";
import { practitionerReferenceMaterials } from "./exams/practitioner-scenario";
import { ieltsReadingPassages } from "./exams/ielts-reading-passages";

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
    certification: "PRINCE2",
    level: "foundation",
  },
  {
    id: PRACTITIONER_MOCK_ID,
    slug: "prince2-7th-edition-practitioner-mock",
    title: "PRINCE2 7th Edition Practitioner Mock Exam",
    description:
      "68 marks in 2 hours 30 against a Fern & Flour project scenario, open book, just like the real Practitioner paper: 50 one-mark questions plus six matching sets worth three each. Pass with 38 marks.",
    questionCount: 56,
    durationMinutes: 150,
    format: "Multiple choice & matching · open book",
    difficulty: "Full simulation",
    topics: ["Principles in context", "Seven themes", "Seven processes"],
    free: true,
    maxAttempts: 3,
    feedbackAttempts: 2,
    certification: "PRINCE2",
    level: "practitioner",
    totalMarks: 68,
    passMark: 38,
    isOpenBook: true,
    referenceMaterials: practitionerReferenceMaterials,
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
    certification: "PRINCE2",
    level: "foundation",
  },
  {
    id: IELTS_READING_MOCK_ID,
    slug: "ielts-academic-reading-mock",
    title: "IELTS Academic Reading Mock Test",
    description:
      "40 marks in the hour against three original academic passages: multiple choice, fact and claim questions, and matching sets, with the passages open beside you as on the real paper. 23 marks is roughly a band 6.0.",
    questionCount: 28,
    durationMinutes: 60,
    format: "Multiple choice & matching · open book",
    difficulty: "Full simulation",
    topics: [
      "Information & detail",
      "Writer's claims",
      "Text organisation",
    ],
    free: true,
    maxAttempts: 3,
    feedbackAttempts: 2,
    certification: "IELTS",
    level: "academic",
    totalMarks: 40,
    passMark: 23,
    isOpenBook: true,
    referenceMaterials: ieltsReadingPassages,
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

export const practitionerBlueprint = [
  {
    topic: "Principles in context",
    share: "8 of 68 marks",
    description:
      "Apply and assess the seven principles against a live project scenario, including the awkward trade-offs.",
  },
  {
    topic: "The seven themes",
    share: "35 of 68 marks",
    description:
      "Business case, organisation, quality, plans, risk, change and progress — what each must produce on this project and whether it holds up.",
  },
  {
    topic: "The seven processes",
    share: "25 of 68 marks",
    description:
      "From starting up to closing: who does what, when, and what the board should demand at each decision point.",
  },
  {
    topic: "Matching question sets",
    share: "18 of 68 marks",
    description:
      "Six three-mark sets match situations to documents, techniques or responses — one mark each, no negative marking.",
  },
];
