import type { CourseModule } from "../types";

export const startingModule: CourseModule = {
  id: "m3",
  slug: "starting-a-project",
  order: 3,
  title: "Starting a project",
  shortTitle: "Starting up",
  tagline: "From an initial idea to a fully baselined project.",
  description:
    "Work through the pre-project and initiation processes, meet the project board, and learn how the business case keeps the investment honest.",
  scene: "starting",
  sessions: [
    {
      id: "starting-a-project/starting-up-a-project",
      slug: "starting-up-a-project",
      title: "Starting up a project",
      summary:
        "The pre-project process that decides whether an idea deserves to become a project.",
      durationMinutes: 16,
      objectives: [
        "Explain the purpose of the starting up a project process",
        "Identify its main outputs and activities",
        "Describe the role of the project mandate and project brief",
      ],
      sections: [
        {
          id: "m3-s1-1",
          heading: "Before the project begins",
          paragraphs: [
            "Starting up a project (SU) is the first PRINCE2 process. Its purpose is to ensure the prerequisites for initiating the project are in place: the right people are appointed, the reasons for the project are understood, and a viable approach exists.",
            "The process is triggered by a project mandate — an instruction or idea that initiates the project. The mandate may be a formal document or something as simple as an email from a senior manager. It is rarely complete, which is exactly why starting up exists.",
          ],
        },
        {
          id: "m3-s1-2",
          heading: "The core activities",
          paragraphs: [
            "Starting up includes appointing the executive and the project manager, capturing previous lessons, and preparing the project brief. The brief summarises the reasons, scope, objectives and constraints, and may recommend how the project should be delivered.",
            "A daily log is created to capture actions, risks and issues that arise before the project formally starts, and a lessons log is established. The project board is appointed, and the project manager plans the work needed to initiate the project.",
          ],
        },
        {
          id: "m3-s1-3",
          heading: "Outputs you should recognise",
          paragraphs: [
            "The main outputs are the project brief, the daily log, the lessons log, the project board, and a stage plan for the initiation stage. The project board then decides whether the idea is sufficiently viable to authorise initiation.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Know the difference between the mandate (the input) and the project brief (the output). The brief provides enough information for the board to decide whether to initiate the project.",
          },
        },
      ],
      keyPoints: [
        "SU ensures the project has a viable start and the right people in place.",
        "The project mandate triggers SU; the project brief is produced by it.",
        "The board decides whether to authorise the initiation stage.",
      ],
      knowledgeCheck: {
        id: "m3-s1-kc",
        question: "Which document triggers the starting up a project process?",
        options: ["The project brief", "The project mandate", "The project initiation documentation", "The end stage report"],
        correctOption: 1,
        explanation:
          "The project mandate initiates the project and is the input to starting up a project. The project brief is created during the process.",
      },
    },
    {
      id: "starting-a-project/directing-a-project",
      slug: "directing-a-project",
      title: "Directing a project",
      summary:
        "How the project board retains accountability and makes decisions at the right moments.",
      durationMinutes: 15,
      objectives: [
        "Explain the purpose of directing a project",
        "Describe the board's key decision points",
        "Recognise when ad hoc direction is needed",
      ],
      sections: [
        {
          id: "m3-s2-1",
          heading: "The board's process",
          paragraphs: [
            "Directing a project (DP) is the project board's process. It enables the board to make decisions and give direction without being involved in day-to-day management. It runs alongside the other processes for the life of the project.",
            "The board authorises initiation, authorises the project, reviews each stage boundary, provides ad hoc direction, and authorises project closure. These decisions are the control points that keep the project aligned with the business case.",
          ],
        },
        {
          id: "m3-s2-2",
          heading: "Decisions, not administration",
          paragraphs: [
            "The board does not approve every task. It focuses on whether the project should continue, whether it is within tolerance, and what should change when it is not. Highlight reports provide the routine information; exception reports trigger decisions when tolerances are forecast to be exceeded.",
            "Ad hoc direction is used when the board needs to respond outside the normal cycle — for example, a significant change, a serious issue or a request for guidance from a stakeholder.",
          ],
          callout: {
            tone: "note",
            title: "Accountability stays with the board",
            body: "The project manager runs the project day to day, but the board remains accountable for the project's success and its continued business justification.",
          },
        },
      ],
      keyPoints: [
        "DP is the project board's process for directing and deciding.",
        "Key decisions include authorising initiation, the project and closure.",
        "The board controls by exception and provides ad hoc direction when needed.",
      ],
      knowledgeCheck: {
        id: "m3-s2-kc",
        question:
          "Which decision is made by the project board at the end of the initiation stage?",
        options: [
          "Approving the team's daily tasks",
          "Authorising the project to proceed",
          "Writing the product descriptions",
          "Signing off each work package",
        ],
        correctOption: 1,
        explanation:
          "At the end of initiation the board reviews the PID and business case and authorises the project to proceed.",
      },
    },
    {
      id: "starting-a-project/initiating-a-project",
      slug: "initiating-a-project",
      title: "Initiating a project",
      summary:
        "The detailed planning process that establishes the project's baseline and controls.",
      durationMinutes: 17,
      objectives: [
        "Explain the purpose of initiating a project",
        "Identify the components of the project initiation documentation",
        "Describe the controls established during initiation",
      ],
      sections: [
        {
          id: "m3-s3-1",
          heading: "Building the baseline",
          paragraphs: [
            "Initiating a project (IP) turns the project brief into a detailed, agreed baseline. The project manager prepares the project initiation documentation (PID), which brings together the business case, the project plan, the project approach, roles and responsibilities, controls, and the arrangements for quality, risk, issues, change and communication.",
            "The PID is not a single monolithic document in practice. It is a collection of information that gives the board and the project team a shared understanding of what will be delivered, how, by whom and under what controls.",
          ],
        },
        {
          id: "m3-s3-2",
          heading: "Establishing control",
          paragraphs: [
            "During initiation the project defines its tolerances, reporting arrangements and stage boundaries. It also refines the business case, establishes the benefits management approach, and agrees how quality will be planned and controlled.",
            "The project plan sets the overall timescale and cost baseline. Stage plans will subsequently provide the detail for each management stage. Initiation concludes when the board reviews the PID and authorises the project to begin.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The PID is the key output of initiating a project. If a question asks where project controls or the refined business case are agreed, initiation is usually the answer.",
          },
        },
      ],
      keyPoints: [
        "IP creates the PID and establishes the project baseline.",
        "The project plan, business case and controls are agreed during initiation.",
        "The board authorises the project at the end of initiation.",
      ],
      knowledgeCheck: {
        id: "m3-s3-kc",
        question: "Which document is the primary output of initiating a project?",
        options: [
          "The project mandate",
          "The project initiation documentation",
          "The end stage report",
          "The work package",
        ],
        correctOption: 1,
        explanation:
          "Initiating a project produces the PID, which brings together the project's baseline, controls and management approaches.",
      },
    },
    {
      id: "starting-a-project/the-business-case",
      slug: "the-business-case",
      title: "The business case",
      summary:
        "Why the investment must stay justified, and how outputs, outcomes and benefits connect.",
      durationMinutes: 16,
      objectives: [
        "Explain continued business justification",
        "Distinguish outputs, outcomes and benefits",
        "Describe the purpose and ownership of the business case",
      ],
      sections: [
        {
          id: "m3-s4-1",
          heading: "A living justification",
          paragraphs: [
            "The business case explains why the project is worth doing. It sets out the reasons, the options considered, the expected costs and benefits, the risks, and the timescales. It is reviewed at every stage boundary and updated when circumstances change.",
            "Continued business justification is one of the seven principles. If the justification no longer holds, the project board should stop, change or re-scope the project rather than continue simply because work has already started.",
          ],
        },
        {
          id: "m3-s4-2",
          heading: "Outputs, outcomes and benefits",
          paragraphs: [
            "An output is the product the project delivers, such as a new booking system. An outcome is the resulting change in the organisation, such as faster bookings and fewer manual errors. A benefit is the measurable improvement that follows, such as reduced operating cost or increased customer satisfaction.",
            "Benefits are usually realised after the project closes, which is why a benefits management approach is needed. The executive is accountable for the business case, while the senior user represents the interests of those who will use the outputs and realise the benefits.",
          ],
          callout: {
            tone: "tip",
            title: "Watch the wording",
            body: "If the exam describes something the project produces, it is an output. If it describes a measurable improvement afterwards, it is a benefit.",
          },
        },
      ],
      keyPoints: [
        "The business case is reviewed throughout the project, not written once.",
        "Outputs enable outcomes, which in turn enable benefits.",
        "The executive is accountable for the business case.",
      ],
      knowledgeCheck: {
        id: "m3-s4-kc",
        question: "Which statement best describes a benefit?",
        options: [
          "A document produced by the project team.",
          "A measurable improvement resulting from an outcome.",
          "A task completed within a work package.",
          "A constraint recorded in the project brief.",
        ],
        correctOption: 1,
        explanation:
          "A benefit is a measurable improvement. Outputs are delivered by the project; outcomes are the resulting organisational changes.",
      },
    },
  ],
};
