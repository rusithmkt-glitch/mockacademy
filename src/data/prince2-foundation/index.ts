import type { Course } from "../types";
import { foundationsModule } from "./01-foundations.ts";
import { peopleModule } from "./02-people.ts";
import { planningModule } from "./04-planning.ts";
import { deliveryModule } from "./06-delivery.ts";
import { riskModule } from "./05-risk.ts";
import { startingModule } from "./03-starting.ts";

export const prince2Foundation: Course = {
  id: "prince2-foundation",
  slug: "prince2-foundation",
  title: "PRINCE2® Foundation",
  shortTitle: "PRINCE2 Foundation",
  level: "Foundation",
  description:
    "A complete, illustrated learning journey through the PRINCE2 method — from the seven principles to project closure.",
  overview: [
    "This free course takes you through the full PRINCE2 Foundation syllabus in a logical sequence. You will build a working understanding of the method rather than memorising lists: each lesson explains the concept, shows how it fits into a real project, and ends with a short knowledge check.",
    "The course is organised into six modules. The first two cover the principles, project context and the people side of delivery. The remaining four follow the project lifecycle, from starting up and initiating through to controlling delivery and closing. Every module maps to the areas tested in the Foundation examination.",
    "Lessons are designed to be studied in order, but the syllabus sidebar and course overview let you jump to the topic you need. Allow roughly six hours of focused study across the complete course, plus time for the mock examinations.",
  ],
  outcomes: [
    "Explain the purpose, principles and structure of PRINCE2",
    "Describe the seven practices and how they are applied",
    "Walk through all seven PRINCE2 processes and their key activities",
    "Identify the roles, responsibilities and interests on a project board",
    "Define products, quality criteria and acceptance criteria clearly",
    "Understand risk, issue and change control, and progress reporting",
    "Apply management by exception using the six tolerance areas",
    "Recognise how PRINCE2 is tailored to different project environments",
  ],
  benefits: [
    {
      title: "Structured for the exam",
      body: "Every module maps to the Foundation syllabus areas, so your study time goes where the questions come from.",
    },
    {
      title: "Illustrated explanations",
      body: "Complex ideas are broken down with visual scenes and plain-English examples, not walls of text.",
    },
    {
      title: "Retrieval practice",
      body: "Short knowledge checks after each lesson help you test understanding while it is still fresh.",
    },
    {
      title: "Learn at your pace",
      body: "Sessions are short enough to fit around work, with a clear syllabus so you always know what comes next.",
    },
  ],
  examDetails: {
    questions: 60,
    durationMinutes: 60,
    passMark: "60% (36 out of 60)",
    format: "Multiple choice, closed book",
  },
  modules: [
    foundationsModule,
    peopleModule,
    startingModule,
    planningModule,
    riskModule,
    deliveryModule,
  ],
};
