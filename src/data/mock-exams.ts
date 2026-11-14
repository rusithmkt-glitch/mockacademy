import type { ExamSet } from "./types";

export const examSets: ExamSet[] = [
  {
    id: "mock-a",
    slug: "mock-exam-a",
    title: "Foundation Mock Exam A",
    description:
      "A full-length simulation covering all five syllabus areas in the same proportion as the real Foundation paper.",
    questionCount: 60,
    durationMinutes: 60,
    format: "Multiple choice · closed book",
    difficulty: "Full simulation",
    topics: ["Principles", "People", "Practices", "Processes", "Project context"],
    free: true,
    featured: true,
  },
  {
    id: "mock-b",
    slug: "mock-exam-b",
    title: "Foundation Mock Exam B",
    description:
      "A second complete paper with fresh scenarios — ideal once you have worked through the full course.",
    questionCount: 60,
    durationMinutes: 60,
    format: "Multiple choice · closed book",
    difficulty: "Full simulation",
    topics: ["Principles", "People", "Practices", "Processes", "Project context"],
    free: true,
  },
  {
    id: "mock-c",
    slug: "mock-exam-c",
    title: "Foundation Mock Exam C",
    description:
      "Our most demanding full paper, with longer scenarios and closer distractors for final exam preparation.",
    questionCount: 60,
    durationMinutes: 60,
    format: "Multiple choice · closed book",
    difficulty: "Full simulation",
    topics: ["Principles", "People", "Practices", "Processes", "Project context"],
    free: true,
  },
  {
    id: "rapid-principles-people",
    slug: "principles-and-people-rapid",
    title: "Principles & People Rapid Set",
    description:
      "Twenty quick questions on the principles and the people element. A useful warm-up or a focused confidence check.",
    questionCount: 20,
    durationMinutes: 20,
    format: "Multiple choice · closed book",
    difficulty: "Rapid revision",
    topics: ["Principles", "People"],
    free: true,
  },
  {
    id: "processes-deep-dive",
    slug: "processes-deep-dive",
    title: "Processes Deep Dive",
    description:
      "Thirty questions focused on the seven PRINCE2 processes and the practices that support them.",
    questionCount: 30,
    durationMinutes: 30,
    format: "Multiple choice · closed book",
    difficulty: "Focused practice",
    topics: ["Processes", "Practices"],
    free: true,
  },
];

export const examBlueprint = [
  { topic: "Principles", share: "7 principles", description: "The guiding obligations behind every PRINCE2 project." },
  { topic: "People", share: "Leadership & change", description: "Teams, stakeholders, communication and adoption." },
  { topic: "Practices", share: "7 practices", description: "Business case, organisation, plans, quality, risk, issues and progress." },
  { topic: "Processes", share: "7 processes", description: "The activities that move a project from mandate to closure." },
  { topic: "Project context", share: "The wider environment", description: "Projects, programmes, portfolios, governance and tailoring." },
];
