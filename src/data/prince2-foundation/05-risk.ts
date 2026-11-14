import type { CourseModule } from "../types";

export const riskModule: CourseModule = {
  id: "m5",
  slug: "risk-and-progress",
  order: 5,
  title: "Risk, issues and progress",
  shortTitle: "Risk & progress",
  tagline: "Anticipate uncertainty, control change and report with confidence.",
  description:
    "Master the practices that keep a project honest: risk management, issue and change control, progress reporting and management by exception.",
  scene: "risk",
  sessions: [
    {
      id: "m5-s1",
      slug: "risk",
      title: "Risk",
      summary:
        "How PRINCE2 identifies, assesses and responds to uncertainty before it becomes a problem.",
      durationMinutes: 17,
      objectives: [
        "Explain the purpose of the risk practice",
        "Describe the cause, event and effect structure of a risk",
        "Identify common risk responses",
      ],
      sections: [
        {
          id: "m5-s1-1",
          heading: "What is a risk?",
          paragraphs: [
            "A risk is an uncertain event that, if it occurs, will have an effect on the project's objectives. PRINCE2 describes risk in terms of cause, event and effect: because of a cause, an event may occur, leading to an effect on objectives.",
            "Risk management is proactive. It identifies risks early, assesses their probability and impact, and puts responses in place so the project is not surprised. It applies to threats and opportunities.",
          ],
        },
        {
          id: "m5-s1-2",
          heading: "The risk management approach",
          paragraphs: [
            "The risk management approach defines how risk will be identified, assessed, responded to and reviewed. The risk register records each risk, its owner, its assessment, its response and its status. Risk owners are responsible for managing individual risks.",
            "Responses commonly include avoiding the risk, reducing its probability or impact, transferring it to another party, accepting it, or preparing contingent actions. The chosen response should be proportionate to the risk and recorded with an owner.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "A risk is not a problem that has already happened. If the event has occurred, it is an issue and should be handled through issue management.",
          },
        },
        {
          id: "m5-s1-3",
          heading: "Review and escalate",
          paragraphs: [
            "Risks should be reviewed regularly and at stage boundaries. If a risk becomes more serious than the project's tolerances allow, it should be escalated to the project board with a recommended response.",
          ],
        },
      ],
      keyPoints: [
        "A risk is an uncertain future event; an issue has already happened.",
        "Risk is described through cause, event and effect.",
        "Responses include avoid, reduce, transfer, accept and prepare contingency.",
      ],
      knowledgeCheck: {
        id: "m5-s1-kc",
        question:
          "A supplier's key developer resigns, delaying the project. How should this now be treated?",
        options: [
          "As a risk, because it affects the schedule.",
          "As an issue, because the event has already occurred.",
          "As an assumption, because it was expected.",
          "As a change request, because the schedule moved.",
        ],
        correctOption: 1,
        explanation:
          "Once an uncertain event has happened, it is an issue. Risks are uncertain events that may occur in the future.",
      },
    },
    {
      id: "m5-s2",
      slug: "issues-and-change",
      title: "Issues and change",
      summary:
        "Capture concerns, control changes and keep the project baseline under control.",
      durationMinutes: 16,
      objectives: [
        "Identify the main types of issue in PRINCE2",
        "Describe the change control process",
        "Explain the role of the change authority",
      ],
      sections: [
        {
          id: "m5-s2-1",
          heading: "Three types of issue",
          paragraphs: [
            "PRINCE2 recognises three issue types. A request for change asks for something to be changed. An off-specification describes something that should have been delivered but has not been, or will not be. A problem or concern covers anything else that needs action, including stakeholder worries or unexpected events.",
            "All issues are recorded in the issue register. Each has an owner, a status and a recommended action. Recording them ensures concerns are not lost and decisions can be traced.",
          ],
        },
        {
          id: "m5-s2-2",
          heading: "Change control",
          paragraphs: [
            "Change control is the process for assessing and deciding on changes. It typically involves capturing the request, assessing its impact on the baseline, deciding whether to approve or reject it, and implementing the decision.",
            "The change authority may be delegated to decide changes within agreed limits. Changes that affect tolerances or the business case are escalated to the project board. Approved changes may require a new baseline and updates to plans and the business case.",
          ],
          callout: {
            tone: "tip",
            title: "Baseline thinking",
            body: "A change is only meaningful relative to an agreed baseline. That is why the project's plans, products and tolerances must be defined before change control can work.",
          },
        },
      ],
      keyPoints: [
        "Issue types are request for change, off-specification and problem/concern.",
        "The issue register records all issues and their status.",
        "Changes are assessed, decided and implemented through change control.",
      ],
      knowledgeCheck: {
        id: "m5-s2-kc",
        question:
          "A product has been delivered, but it is missing a feature that was agreed in its description. What type of issue is this?",
        options: ["Request for change", "Off-specification", "Risk", "Problem or concern"],
        correctOption: 1,
        explanation:
          "An off-specification describes a product that has not met, or will not meet, its agreed specification.",
      },
    },
    {
      id: "m5-s3",
      slug: "progress",
      title: "Progress",
      summary:
        "How progress is measured, reported and used to keep the project within its tolerances.",
      durationMinutes: 15,
      objectives: [
        "Explain the purpose of progress controls",
        "Identify the main progress reports",
        "Describe how tolerances support reporting by exception",
      ],
      sections: [
        {
          id: "m5-s3-1",
          heading: "Control points",
          paragraphs: [
            "Progress controls compare actual performance with the plan. They include checkpoint reports from teams, highlight reports from the project manager to the board, end stage reports at stage boundaries, and exception reports when tolerances are threatened.",
            "The frequency and formality of reporting should be tailored to the project. A small project may need a short weekly update; a complex programme may need more frequent, structured reporting.",
          ],
        },
        {
          id: "m5-s3-2",
          heading: "Reports and registers",
          paragraphs: [
            "A checkpoint report summarises progress at a team level. A highlight report gives the board a periodic summary of progress against the stage plan. An end stage report reviews performance and confirms what was achieved. An exception report sets out the situation and options when a tolerance is forecast to be breached.",
            "The daily log records minor actions and concerns that do not warrant a formal register entry. The lessons log captures learning that should inform the project and the wider organisation.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Match the report to the audience: checkpoint for the project manager, highlight for the board, end stage at a boundary, exception when tolerances are at risk.",
          },
        },
      ],
      keyPoints: [
        "Progress controls compare actuals against the plan baseline.",
        "Highlight reports inform the board; checkpoint reports inform the project manager.",
        "Exception reports support escalation when tolerances are threatened.",
      ],
      knowledgeCheck: {
        id: "m5-s3-kc",
        question: "Which report provides the project board with regular progress information?",
        options: ["Checkpoint report", "Highlight report", "End stage report", "Lessons report"],
        correctOption: 1,
        explanation:
          "The highlight report is the project manager's regular progress report to the project board.",
      },
    },
    {
      id: "m5-s4",
      slug: "manage-by-exception",
      title: "Manage by exception",
      summary:
        "Delegation with guardrails: tolerances, escalation and the confidence to let teams deliver.",
      durationMinutes: 14,
      objectives: [
        "Explain the principle manage by exception",
        "Identify the six tolerance areas",
        "Describe the escalation route when tolerances are forecast to be breached",
      ],
      sections: [
        {
          id: "m5-s4-1",
          heading: "Clear boundaries",
          paragraphs: [
            "Manage by exception sets clear boundaries for delegated authority. The project board agrees tolerances for the project; the project manager agrees tolerances for each stage and, where appropriate, for work packages. As long as work is forecast to stay within those limits, escalation is unnecessary.",
            "This principle protects senior people from detail while ensuring they are involved when a decision genuinely matters. It depends on accurate reporting and honesty about forecasts, not just actuals.",
          ],
        },
        {
          id: "m5-s4-2",
          heading: "The six tolerances",
          paragraphs: [
            "Tolerances are set for time, cost, scope, quality, benefits and risk. A breach in any one may require escalation. The project manager raises an exception report, which describes the situation, the impact and the options, so the board can decide.",
            "Exception plans may be required when the board approves a revised approach. The board can also choose to stop the project or change its scope if the business case no longer justifies continuing.",
          ],
          callout: {
            tone: "tip",
            title: "Forecast, not hindsight",
            body: "Exception reporting is triggered when a tolerance is forecast to be exceeded. Waiting until it has already happened removes the board's ability to choose a response.",
          },
        },
      ],
      keyPoints: [
        "Manage by exception delegates authority within agreed tolerances.",
        "The six tolerance areas are time, cost, scope, quality, benefits and risk.",
        "Escalation happens when a tolerance is forecast to be breached.",
      ],
      knowledgeCheck: {
        id: "m5-s4-kc",
        question: "When should the project manager raise an exception report?",
        options: [
          "Only after a tolerance has already been exceeded.",
          "When a tolerance is forecast to be exceeded.",
          "At every stage boundary, regardless of performance.",
          "Whenever a team member raises a concern.",
        ],
        correctOption: 1,
        explanation:
          "Manage by exception requires early escalation when a tolerance is forecast to be breached, so the board can decide on a response.",
      },
    },
  ],
};
