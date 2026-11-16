import type { Course } from "../types";
import { foundationsModule } from "./01-foundations.ts";
import { principlesModule } from "./02-principles.ts";
import { peopleModule } from "./03-people.ts";
import { businessCaseModule } from "./04-business-case.ts";
import { organisingModule } from "./05-organising.ts";
import { plansModule } from "./06-plans.ts";
import { qualityModule } from "./07-quality.ts";
import { riskModule } from "./08-risk.ts";
import { issuesModule } from "./09-issues.ts";
import { progressModule } from "./10-progress.ts";
import { startingInitiatingModule } from "./11-starting-and-initiating.ts";
import { deliveringClosingModule } from "./12-delivering-and-closing.ts";
import { tailoringModule } from "./13-tailoring-and-exam-preparation.ts";

export const prince2Foundation: Course = {
  id: "prince2-foundation",
  slug: "prince2-foundation",
  title: "PRINCE2® Foundation",
  shortTitle: "PRINCE2 Foundation",
  level: "Foundation",
  description:
    "A complete, illustrated learning journey through PRINCE2 7th edition, from the seven principles to closing a project.",
  overview: [
    "This free course takes you through the PRINCE2 7th edition Foundation syllabus in a logical sequence. Rather than memorising lists, you'll follow one small business, Fern & Flour, as it opens a second bakery and builds a pre-order app. Each session explains a concept, shows it in action and ends with a short knowledge check.",
    "The course has 13 modules. The first three cover the foundations, the seven principles and the people side of projects. The next seven work through each practice, from the business case to progress. The last three follow the processes from starting up to closing, then bring everything together with tailoring and exam preparation.",
    "Sessions are designed to be studied in order, but the syllabus sidebar and course overview let you jump to the topic you need. Allow roughly 15 hours of focused study across the complete course, plus time for the mock examinations.",
  ],
  outcomes: [
    "Explain the five integrated elements of PRINCE2 7th edition",
    "Apply the seven principles to a real project",
    "Describe how leadership, teams and stakeholders shape project success",
    "Use the seven practices, from the business case to progress",
    "Walk through all seven PRINCE2 processes and their key activities",
    "Identify the roles and responsibilities in a project management team",
    "Apply management by exception using the seven performance targets",
    "Tailor PRINCE2 to different project contexts",
  ],
  benefits: [
    {
      title: "Structured for the exam",
      body: "Every module maps to the Foundation syllabus areas, so your study time goes where the questions come from.",
    },
    {
      title: "One story throughout",
      body: "Every idea is shown through the same bakery project, so concepts connect instead of floating in isolation.",
    },
    {
      title: "Retrieval practice",
      body: "Short knowledge checks after each session help you test understanding while it is still fresh.",
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
    principlesModule,
    peopleModule,
    businessCaseModule,
    organisingModule,
    plansModule,
    qualityModule,
    riskModule,
    issuesModule,
    progressModule,
    startingInitiatingModule,
    deliveringClosingModule,
    tailoringModule,
  ],
};
