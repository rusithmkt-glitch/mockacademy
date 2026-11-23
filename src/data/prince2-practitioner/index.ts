import type { Course } from "../types";
import { practitionerMindsetModule } from "./01-the-practitioner-mindset";
import { principlesInContextModule } from "./02-principles-in-context";
import { businessCaseOrganisingModule } from "./03-business-case-and-organising";
import { qualityAndPlansModule } from "./04-quality-and-plans";
import { riskAndChangeModule } from "./05-risk-and-change";
import { progressEscalationModule } from "./06-progress-and-escalation";
import { processesInContextModule } from "./07-processes-in-context";
import { tailoringExamModule } from "./08-tailoring-and-exam-technique";

export const prince2Practitioner: Course = {
  id: "prince2-practitioner",
  slug: "prince2-practitioner",
  title: "PRINCE2® Practitioner",
  shortTitle: "PRINCE2 Practitioner",
  level: "Practitioner",
  description:
    "A free, scenario-driven course for the PRINCE2 7th edition Practitioner paper: apply the method to a live project, weigh real options and answer at decision depth.",
  overview: [
    "The Practitioner paper doesn't ask what PRINCE2 is. It hands you a project mid-flight — Fern & Flour's Wholesale Kitchen — and asks what you would do, in what order, and who has the authority to do it. This course trains exactly that judgement, one scenario decision at a time.",
    "Eight modules follow the shape of the exam: the mindset and the documents first, then the principles as a decision tool, the heavy-weight themes (business case and organisation, quality and plans, risk and change, progress), the processes end to end, and finally tailoring plus open-book exam technique for the 68-mark, 150-minute paper.",
    "Sessions assume you hold the Foundation knowledge already. Every one works through application, not recall — forecasts against real tolerances, changes against real budgets, exceptions against real delegation — and ends with questions written in the paper's register. Study alongside the free Practitioner mock exam, which uses the same scenario.",
  ],
  outcomes: [
    "Read a project scenario the way the exam expects: tolerances, status and owners first",
    "Re-test a business case prospectively and assemble a board's decision options",
    "Work the tolerance arithmetic that decides who acts and who escalates",
    "Choose, fund and fallback risk and change responses against real budgets",
    "Forecast, report and handle exceptions through the method's four rhythms",
    "Walk the seven processes as a chain of decisions with dated records",
    "Tailor the implementation while preserving every element's purpose",
    "Sit the open-book paper with a three-pass time plan and an indexed scenario",
  ],
  benefits: [
    {
      title: "One live scenario",
      body: "Every lesson runs on the same project the mock exam uses, so scenario fluency builds session by session.",
    },
    {
      title: "Decision-depth questions",
      body: "Checks are written at Practitioner register: recommend, prioritise, justify — never define and list.",
    },
    {
      title: "The arithmetic that marks",
      body: "Tolerances, contingency, change budget and pass marks are worked as numbers, not vocabulary.",
    },
    {
      title: "Exam strategy built in",
      body: "Open-book mechanics, matching-set marking and a three-pass time plan are taught, then drilled.",
    },
  ],
  examDetails: {
    questions: 56,
    durationMinutes: 150,
    passMark: "38 of 68 marks",
    format: "Multiple choice and matching, open book",
  },
  modules: [
    practitionerMindsetModule,
    principlesInContextModule,
    businessCaseOrganisingModule,
    qualityAndPlansModule,
    riskAndChangeModule,
    progressEscalationModule,
    processesInContextModule,
    tailoringExamModule,
  ],
};
