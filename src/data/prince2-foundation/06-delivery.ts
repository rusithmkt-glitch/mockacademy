import type { CourseModule } from "../types";

export const deliveryModule: CourseModule = {
  id: "m6",
  slug: "delivery-and-closure",
  order: 6,
  title: "Delivery and closure",
  shortTitle: "Delivery",
  tagline: "Controlling stages, delivering products and closing with confidence.",
  description:
    "Follow the second half of the project lifecycle: controlling a stage, managing product delivery, crossing stage boundaries and closing the project.",
  scene: "delivery",
  sessions: [
    {
      id: "m6-s1",
      slug: "controlling-a-stage",
      title: "Controlling a stage",
      summary:
        "The project manager's core process for keeping a stage on track and within tolerance.",
      durationMinutes: 16,
      objectives: [
        "Explain the purpose of controlling a stage",
        "Describe the main activities in the process",
        "Explain how work packages are authorised and monitored",
      ],
      sections: [
        {
          id: "m6-s1-1",
          heading: "Day-to-day control",
          paragraphs: [
            "Controlling a stage (CS) is the process the project manager uses to manage a stage from start to finish. It covers authorising work, monitoring progress, handling issues, reporting, and taking corrective action when necessary.",
            "The stage plan is the reference point. The project manager allocates work packages to team managers, reviews progress against the plan, and keeps the project board informed through highlight reports.",
          ],
        },
        {
          id: "m6-s1-2",
          heading: "Authorise, monitor, react",
          paragraphs: [
            "Work is authorised through work packages, which define the products, constraints, reporting requirements and tolerances for a team. The project manager monitors progress using checkpoint reports and quality information, then takes action if work drifts.",
            "Issues and risks are handled as they arise. If the stage is forecast to exceed its tolerances, the project manager escalates to the board with an exception report rather than silently absorbing the problem.",
          ],
          callout: {
            tone: "note",
            title: "Keep the stage plan current",
            body: "Controlling a stage depends on an accurate stage plan. If the plan is not maintained, progress reporting becomes guesswork.",
          },
        },
      ],
      keyPoints: [
        "CS is the project manager's process for controlling a stage.",
        "Work is authorised through work packages with clear tolerances.",
        "Escalation happens when stage tolerances are forecast to be breached.",
      ],
      knowledgeCheck: {
        id: "m6-s1-kc",
        question: "What is the main purpose of controlling a stage?",
        options: [
          "To produce the project's benefits review.",
          "To manage the stage within its agreed tolerances.",
          "To approve the project mandate.",
          "To appoint the project board.",
        ],
        correctOption: 1,
        explanation:
          "Controlling a stage keeps the stage on track within its tolerances through authorising, monitoring, reporting and corrective action.",
      },
    },
    {
      id: "m6-s2",
      slug: "managing-product-delivery",
      title: "Managing product delivery",
      summary:
        "The interface between the project manager and the team that produces the products.",
      durationMinutes: 14,
      objectives: [
        "Explain the purpose of managing product delivery",
        "Describe the three activities in the process",
        "Explain the team manager's responsibilities",
      ],
      sections: [
        {
          id: "m6-s2-1",
          heading: "The delivery interface",
          paragraphs: [
            "Managing product delivery (MP) covers the work of accepting, executing and delivering work packages. It is primarily the responsibility of the team manager, who agrees the work with the project manager and ensures the products meet their quality criteria.",
            "The process creates a clear boundary between the project manager, who is accountable for the stage, and the team, who are accountable for producing the products in a work package.",
          ],
        },
        {
          id: "m6-s2-2",
          heading: "Accept, execute, deliver",
          paragraphs: [
            "The team manager accepts the work package, confirming that the products, constraints and reporting requirements are understood. The team then executes the work, applying quality methods and reporting progress through checkpoint reports.",
            "On completion, the team delivers the products for acceptance. The project manager checks that the work package is complete and that quality activities have been carried out before accepting the deliverables.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Work package acceptance sits between controlling a stage and managing product delivery. The team manager accepts work from the project manager.",
          },
        },
      ],
      keyPoints: [
        "MP is the team manager's process for delivering work packages.",
        "Activities are accept, execute and deliver.",
        "Quality criteria and progress reporting are agreed in the work package.",
      ],
      knowledgeCheck: {
        id: "m6-s2-kc",
        question: "Who is primarily responsible for managing product delivery?",
        options: ["The executive", "The project manager", "The team manager", "Project assurance"],
        correctOption: 2,
        explanation:
          "Managing product delivery is primarily the team manager's responsibility, working within an agreed work package.",
      },
    },
    {
      id: "m6-s3",
      slug: "stage-boundaries",
      title: "Managing a stage boundary",
      summary:
        "Closing one stage with evidence and preparing the next with a credible plan.",
      durationMinutes: 15,
      objectives: [
        "Explain the purpose of managing a stage boundary",
        "Identify the reports produced at a stage boundary",
        "Describe when an exception plan is created",
      ],
      sections: [
        {
          id: "m6-s3-1",
          heading: "A controlled checkpoint",
          paragraphs: [
            "Managing a stage boundary (SB) gives the project board a controlled point at which to review progress and decide whether to continue. The project manager prepares an end stage report covering performance, issues, risks and lessons, and a next stage plan for the work ahead.",
            "The board also reviews the updated business case and project plan. If the justification is still sound and the next stage plan is acceptable, the board authorises the next stage.",
          ],
        },
        {
          id: "m6-s3-2",
          heading: "When things go off plan",
          paragraphs: [
            "If the stage has exceeded its tolerances, the board may request an exception plan. This replaces the remainder of the current stage plan and sets out how the project will recover. Producing an exception plan is part of managing a stage boundary.",
            "The boundary is not just administration. It is the point where evidence meets decision-making, and where the board can stop a project that no longer makes sense.",
          ],
          callout: {
            tone: "tip",
            title: "Reports at the boundary",
            body: "End stage report looks back at what happened. Next stage plan looks forward at what will happen. The business case is reviewed at the same time.",
          },
        },
      ],
      keyPoints: [
        "SB provides a controlled decision point between stages.",
        "The end stage report reviews performance; the next stage plan sets out the future.",
        "Exception plans are produced when tolerances have been breached.",
      ],
      knowledgeCheck: {
        id: "m6-s3-kc",
        question:
          "Which report reviews performance at the end of a management stage?",
        options: ["Highlight report", "Checkpoint report", "End stage report", "Exception report"],
        correctOption: 2,
        explanation:
          "The end stage report reviews the stage's performance and supports the board's decision at the stage boundary.",
      },
    },
    {
      id: "m6-s4",
      slug: "closing-a-project",
      title: "Closing a project",
      summary:
        "Confirm delivery, hand over products, capture lessons and prepare for benefits realisation.",
      durationMinutes: 15,
      objectives: [
        "Explain the purpose of closing a project",
        "Describe the activities involved in closure",
        "Identify the outputs produced at closure",
      ],
      sections: [
        {
          id: "m6-s4-1",
          heading: "A deliberate ending",
          paragraphs: [
            "Closing a project (CP) confirms that the project's products have been delivered and accepted, that the project has met its objectives where possible, and that arrangements are in place for the remaining work and benefits.",
            "Not every project closes as planned. A project may be closed early because the business case no longer holds. Even then, closure should be managed, with products handed over, lessons captured and the reasons recorded.",
          ],
        },
        {
          id: "m6-s4-2",
          heading: "Handover and learning",
          paragraphs: [
            "Closure activities include preparing the planned closure, handing over products, confirming acceptance, evaluating the project against its baseline, and preparing the end project report. The benefits management approach is updated to show how and when benefits will be reviewed.",
            "A lessons report captures what went well and what should change. These lessons belong to the organisation, not just the project team, and should feed future projects and the organisation's lessons library.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Closure is about acceptance and handover, not just stopping work. Benefits are usually realised after the project has closed.",
          },
        },
      ],
      keyPoints: [
        "CP confirms acceptance, handover and readiness for benefits realisation.",
        "Projects may close early if the business case no longer holds.",
        "Lessons learned are captured and shared with the organisation.",
      ],
      knowledgeCheck: {
        id: "m6-s4-kc",
        question: "What is the main purpose of closing a project?",
        options: [
          "To deliver the final work package.",
          "To confirm acceptance and handover, and prepare for benefits realisation.",
          "To authorise the next stage.",
          "To approve the project mandate.",
        ],
        correctOption: 1,
        explanation:
          "Closing a project confirms products have been accepted and handed over, and puts arrangements in place for reviewing benefits.",
      },
    },
  ],
};
