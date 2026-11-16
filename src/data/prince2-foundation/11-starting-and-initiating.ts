import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const startingInitiatingModule: CourseModule = {
  id: "m11",
  slug: "starting-and-initiating",
  order: 11,
  title: "Starting and initiating a project",
  shortTitle: "Starting and initiating",
  tagline: "From a good idea to an approved, well-planned project.",
  description:
    "The processes in PRINCE2 7th edition describe who does what, and when, across the project's life. You'll take York from your first idea through starting up, board direction and initiation, to the moment the board authorises the project.",
  scene: "starting",
  sessions: [
    {
      id: "starting-and-initiating/process-model-overview",
      slug: "process-model-overview",
      title: "The process model",
      summary:
        "An overview of the seven PRINCE2 processes and how they fit across the life of a project.",
      durationMinutes: 13,
      objectives: [
        "Name the seven PRINCE2 processes",
        "Describe which level of organisation each process belongs to",
        "Explain how the processes fit across the project's life",
      ],
      sections: [
        {
          id: "m11-s1-1",
          paragraphs: [
            "It's time to see the York project from start to finish.",
            "Let's say you've learned the principles, the people side and all seven practices. They tell you **what** to think about. But Tom asks a practical question: \"So what do we actually do first, second and third?\"",
          ],
          scenario: {
            question: "What happens, in what order?",
            steps: [
              {
                title: "Get started",
                body: "Check the idea is worth pursuing, appoint the team and get the board's permission to plan properly.",
              },
              {
                title: "Plan and authorise",
                body: "Plan the whole project in detail, then get the board's approval to go ahead.",
              },
              {
                title: "Deliver stage by stage",
                body: "Manage each stage, have the teams build the products and review at each stage boundary.",
              },
              {
                title: "That's the idea",
                body: "PRINCE2 7th edition has **seven processes** that set out who does what, and when, from the first idea to closing the project.",
              },
            ],
          },
        },
        {
          id: "m11-s1-2",
          heading: "The seven processes",
          paragraphs: ["The seven processes are:"],
          bullets: [
            "**Starting up a project (SU)**: is the project viable and worthwhile?",
            "**Directing a project (DP)**: how the board makes its key decisions",
            "**Initiating a project (IP)**: plan the project in detail and get approval",
            "**Controlling a stage (CS)**: the project manager's day-to-day management",
            "**Managing product delivery (MP)**: the teams building the products",
            "**Managing a stage boundary (SB)**: review the stage and plan the next",
            "**Closing a project (CP)**: hand over and close in a controlled way",
          ],
        },
        {
          id: "m11-s1-3",
          heading: "Processes by level",
          paragraphs: ["Each process belongs mainly to one level of organisation:"],
          bullets: [
            "**Directing**: directing a project, run by the project board",
            "**Managing**: starting up, initiating, controlling a stage, managing a stage boundary and closing, led by the project manager",
            "**Delivering**: managing product delivery, led by team managers",
          ],
          callout: {
            tone: "note",
            title: "Starting up is a bit different",
            body: "Starting up a project happens before the project officially exists. The executive and project manager are appointed in it, so it's sometimes called pre-project.",
          },
        },
        {
          id: "m11-s1-4",
          heading: "Across the life of the project",
          paragraphs: [
            "Starting up happens once, before the project. Initiating happens once, in the initiation stage. Directing a project runs from the end of starting up until the project closes.",
            "Then, for each delivery stage, controlling a stage and managing product delivery run together. Managing a stage boundary happens near the end of each stage except the last, and closing a project happens at the end of the final stage.",
          ],
        },
        {
          id: "m11-s1-5",
          heading: "Processes and practices together",
          paragraphs: [
            "The practices are used **inside** the processes. In initiation, for example, Sam uses the business case, plans, quality, risk, issues, organising and progress practices to build the PID.",
            "Think of the processes as the timeline and the practices as the toolkit. You'll use both, tailored to the project.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The seven processes are **SU**, **DP**, **IP**, **CS**, **MP**, **SB** and **CP**. **DP** is for the board; **MP** is for team managers; the rest are led by the project manager. **SU** is pre-project.",
          },
        },
      ],
      keyPoints: [
        "PRINCE2 7th edition has seven processes, from starting up to closing.",
        "Directing a project belongs to the board; managing product delivery to team managers.",
        "The project manager leads starting up, initiating, controlling a stage, stage boundaries and closing.",
        "Practices are applied within the processes.",
      ],
      knowledgeCheck: {
        id: "m11-s1-kc",
        question: "Which process is used by the project board to make its key decisions?",
        options: ["Controlling a stage", "Directing a project", "Managing product delivery", "Starting up a project"],
        correctOption: 1,
        explanation:
          "Directing a project describes how the board directs the project and makes its key decisions.",
      },
      assessment: [
        {
          id: "m11-s1-a1",
          type: "single",
          prompt: "Which process belongs to the delivering level?",
          options: [
            { id: "a", label: "Managing product delivery" },
            { id: "b", label: "Controlling a stage" },
            { id: "c", label: "Directing a project" },
            { id: "d", label: "Initiating a project" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Managing product delivery is the team managers' process for building the products.",
          topic: "Processes",
        },
        {
          id: "m11-s1-a2",
          type: "boolean",
          prompt: "Managing a stage boundary takes place at the end of the final stage.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "At the end of the final stage, the project closes using closing a project. Stage boundaries happen at the end of the other stages.",
          topic: "Processes",
        },
        {
          id: "m11-s1-a3",
          type: "multiple",
          prompt: "Which TWO processes happen only once in a project?",
          options: [
            { id: "a", label: "Starting up a project" },
            { id: "b", label: "Controlling a stage" },
            { id: "c", label: "Initiating a project" },
            { id: "d", label: "Managing product delivery" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Starting up and initiating happen once. Controlling a stage and managing product delivery repeat in each delivery stage.",
          topic: "Processes",
        },
        {
          id: "m11-s1-a4",
          type: "single",
          prompt: "How do the practices relate to the processes?",
          options: [
            { id: "a", label: "Practices replace the processes on small projects" },
            { id: "b", label: "Practices are applied within the processes" },
            { id: "c", label: "Practices are only used after closure" },
            { id: "d", label: "Practices are only used by the board" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The practices are used throughout the processes, as the toolkit for managing the project.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "starting-and-initiating/starting-up-a-project",
      slug: "starting-up-a-project",
      title: "Starting up a project",
      summary:
        "The pre-project process that checks the idea is worthwhile and prepares the ground for initiation.",
      durationMinutes: 14,
      objectives: [
        "Describe the purpose of starting up a project",
        "Name the main activities and outputs of starting up",
        "Explain the role of the project mandate and project brief",
      ],
      sections: [
        {
          id: "m11-s2-1",
          paragraphs: [
            "It's time to go back to the very beginning of York.",
            "Let's say you and Tom have just agreed, over a cup of tea, that York should be next. Tom writes a one-page note: \"Open a second shop in York by December. Budget around £85,000.\" That's the trigger.",
          ],
          scenario: {
            question: "What happens next?",
            steps: [
              {
                title: "The mandate",
                body: "Tom's note is the **project mandate**: the trigger from the business layer that says a project might be needed.",
              },
              {
                title: "Appoint key people",
                body: "Tom appoints you as executive. You appoint Sam as project manager, and together you design the rest of the team.",
              },
              {
                title: "Do the groundwork",
                body: "Sam checks lessons from Leeds, drafts an outline business case, describes the final product and plans the initiation stage.",
              },
              {
                title: "That's the idea",
                body: "**Starting up a project** checks whether the project is viable and worthwhile **before** spending time and money on planning it in detail.",
              },
            ],
          },
        },
        {
          id: "m11-s2-2",
          heading: "Purpose",
          paragraphs: [
            "The purpose of starting up a project is to answer one question: **do we have a viable and worthwhile project?** It stops poorly thought-out projects starting and gives good ones a solid foundation.",
            "It's triggered by the **project mandate**, which can be anything from a formal document to Tom's one-page note.",
          ],
        },
        {
          id: "m11-s2-3",
          heading: "Main activities",
          paragraphs: ["The main activities in starting up are:"],
          bullets: [
            "**Appoint the executive and the project manager**",
            "**Capture previous lessons**, recorded in the lessons log",
            "**Design and appoint the project management team**",
            "**Prepare the outline business case**",
            "**Select the project approach** and assemble the **project brief**",
            "**Plan the initiation stage**",
          ],
        },
        {
          id: "m11-s2-4",
          heading: "Main outputs",
          paragraphs: ["Starting up produces:"],
          bullets: [
            "The **project brief**, including the outline business case, the project product description and the project approach",
            "The **initiation stage plan**",
            "The **daily log** and **lessons log**",
            "The appointed project management team and their role descriptions",
          ],
          callout: {
            tone: "tip",
            title: "Keep it light",
            body: "Starting up should be quick. For York, it took two weeks and a handful of meetings. The aim is just enough to decide whether to invest in initiation.",
          },
        },
        {
          id: "m11-s2-5",
          heading: "What it leads to",
          paragraphs: [
            "Starting up ends with a request to the board to **authorise initiation**. That's the first decision in directing a project.",
            "If the board agrees, the project officially begins and moves into the initiation stage. If not, it stops, having spent very little.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Starting up a project is triggered by the **project mandate**. It asks whether the project is **viable and worthwhile**. Outputs include the **project brief** (with the **outline business case**, **project product description** and **project approach**), the **initiation stage plan**, and the **daily log** and **lessons log**.",
          },
        },
      ],
      keyPoints: [
        "Starting up is triggered by the project mandate from the business layer.",
        "Its purpose is to check the project is viable and worthwhile.",
        "It appoints the executive, project manager and team, and captures previous lessons.",
        "It produces the project brief and the initiation stage plan.",
      ],
      knowledgeCheck: {
        id: "m11-s2-kc",
        question: "What triggers starting up a project?",
        options: ["The project brief", "The project mandate", "The project initiation documentation", "The end stage report"],
        correctOption: 1,
        explanation:
          "Starting up is triggered by the project mandate, provided by the business layer.",
      },
      assessment: [
        {
          id: "m11-s2-a1",
          type: "single",
          prompt: "Which product contains the outline business case and project product description?",
          options: [
            { id: "a", label: "The project brief" },
            { id: "b", label: "The highlight report" },
            { id: "c", label: "The issue register" },
            { id: "d", label: "The end project report" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The project brief includes the outline business case, project product description and project approach.",
          topic: "Processes",
        },
        {
          id: "m11-s2-a2",
          type: "multiple",
          prompt: "Which TWO are activities in starting up a project?",
          options: [
            { id: "a", label: "Appoint the executive and the project manager" },
            { id: "b", label: "Hand over the products" },
            { id: "c", label: "Capture previous lessons" },
            { id: "d", label: "Authorise work packages" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Appointing key roles and capturing lessons are starting up activities. Handover is closing; work packages are controlling a stage.",
          topic: "Processes",
        },
        {
          id: "m11-s2-a3",
          type: "boolean",
          prompt: "The risk register is created during starting up a project.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "The daily log and lessons log are created in starting up. The risk register is created in initiation.",
          topic: "Processes",
        },
        {
          id: "m11-s2-a4",
          type: "single",
          prompt: "What question does starting up a project answer?",
          options: [
            { id: "a", label: "Have the benefits been realised?" },
            { id: "b", label: "Do we have a viable and worthwhile project?" },
            { id: "c", label: "Is the current stage within tolerance?" },
            { id: "d", label: "Has the product been accepted?" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Starting up checks whether the project is viable and worthwhile before detailed planning.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "starting-and-initiating/directing-a-project",
      slug: "directing-a-project",
      title: "Directing a project",
      summary:
        "How the project board makes its key decisions, from authorising initiation to authorising closure.",
      durationMinutes: 13,
      objectives: [
        "Describe the purpose of directing a project",
        "Name the board's key decisions",
        "Explain how the board gives ad hoc direction",
      ],
      sections: [
        {
          id: "m11-s3-1",
          paragraphs: [
            "It's time to look at the project from the board's side of the table.",
            "Let's say you're worried about being stuck in meetings all year. You run a bakery. Sam reassures you: \"You won't need to manage anything. You'll make a few big decisions, and I'll come to you if something goes outside the limits.\"",
          ],
          scenario: {
            question: "What exactly will the board decide?",
            steps: [
              {
                title: "Start planning?",
                body: "After starting up, you decide whether to **authorise initiation**: is the idea worth planning properly?",
              },
              {
                title: "Go ahead?",
                body: "After initiation, you decide whether to **authorise the project** and the first delivery stage.",
              },
              {
                title: "Next stage?",
                body: "At each stage boundary, or when there's an exception, you decide whether to authorise the next stage or an exception plan.",
              },
              {
                title: "That's the idea",
                body: "**Directing a project** lets the board stay in control through a small number of key decisions, plus **ad hoc direction** when needed.",
              },
            ],
          },
        },
        {
          id: "m11-s3-2",
          heading: "Purpose",
          paragraphs: [
            "The purpose of directing a project is to let the board be **accountable** for the project's success by making key decisions and keeping overall control, while delegating day-to-day management to the project manager.",
            "It starts after starting up a project and runs until the project closes.",
          ],
        },
        {
          id: "m11-s3-3",
          heading: "The key decisions",
          paragraphs: ["Directing a project has five activities:"],
          bullets: [
            "**Authorise initiation**: approve the project brief and initiation stage plan",
            "**Authorise the project**: approve the PID and the project plan",
            "**Authorise a stage or exception plan**: approve the next stage plan, or an exception plan",
            "**Give ad hoc direction**: respond to reports, issues and requests whenever needed",
            "**Authorise project closure**: confirm the project can close",
          ],
        },
        {
          id: "m11-s3-4",
          heading: "Ad hoc direction",
          paragraphs: [
            "Between the big decisions, the board stays informed through highlight reports and gives direction when it's needed. That might be answering a question, resolving an issue or responding to an exception report.",
            "When the coffee chain announced its opening, you asked Sam to review the York sales forecast. That's ad hoc direction.",
          ],
          callout: {
            tone: "tip",
            title: "Informal is fine",
            body: "Board decisions don't always need a formal meeting. A quick call or an email can work, as long as the decision is recorded.",
          },
        },
        {
          id: "m11-s3-5",
          heading: "Linking to the business layer",
          paragraphs: [
            "The board also keeps the business layer informed. You and Tom talk about York regularly, and anything beyond the project's tolerances goes to the business layer to decide.",
            "When the project closes, the board makes sure responsibility for any remaining benefit reviews passes to the business layer.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Directing a project has five activities: **authorise initiation**, **authorise the project**, **authorise a stage or exception plan**, **give ad hoc direction** and **authorise project closure**. It runs from the end of starting up until closure.",
          },
        },
      ],
      keyPoints: [
        "Directing a project lets the board stay accountable through key decisions.",
        "It runs from the end of starting up until the project closes.",
        "The board authorises initiation, the project, each stage or exception plan, and closure.",
        "It gives ad hoc direction whenever needed between decisions.",
      ],
      knowledgeCheck: {
        id: "m11-s3-kc",
        question: "Which directing a project activity approves the PID?",
        options: ["Authorise initiation", "Authorise the project", "Give ad hoc direction", "Authorise project closure"],
        correctOption: 1,
        explanation:
          "In authorise the project, the board reviews and approves the project initiation documentation.",
      },
      assessment: [
        {
          id: "m11-s3-a1",
          type: "single",
          prompt: "When does directing a project begin?",
          options: [
            { id: "a", label: "Before the project mandate is written" },
            { id: "b", label: "After starting up a project" },
            { id: "c", label: "After the first delivery stage" },
            { id: "d", label: "At closure" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Directing a project begins after starting up, with the decision to authorise initiation.",
          topic: "Processes",
        },
        {
          id: "m11-s3-a2",
          type: "multiple",
          prompt: "Which TWO are directing a project activities?",
          options: [
            { id: "a", label: "Authorise initiation" },
            { id: "b", label: "Accept a work package" },
            { id: "c", label: "Give ad hoc direction" },
            { id: "d", label: "Capture previous lessons" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Authorise initiation and give ad hoc direction are board activities.",
          topic: "Processes",
        },
        {
          id: "m11-s3-a3",
          type: "boolean",
          prompt: "Every project board decision must be made at a formal meeting.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Decisions can be made informally, by call or email, as long as they're recorded.",
          topic: "Processes",
        },
        {
          id: "m11-s3-a4",
          type: "single",
          prompt: "The board responds to an exception report by asking for an exception plan. Which activity is this?",
          options: [
            { id: "a", label: "Give ad hoc direction" },
            { id: "b", label: "Authorise initiation" },
            { id: "c", label: "Authorise project closure" },
            { id: "d", label: "Capture previous lessons" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Responding to exception reports is part of giving ad hoc direction. Approving the exception plan later is authorise a stage or exception plan.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "starting-and-initiating/initiating-a-project",
      slug: "initiating-a-project",
      title: "Initiating a project",
      summary:
        "How the initiation stage builds the PID, the foundation the board uses to approve the project.",
      durationMinutes: 15,
      objectives: [
        "Describe the purpose of initiating a project",
        "Name the main activities of initiation",
        "Describe the contents of the project initiation documentation",
      ],
      sections: [
        {
          id: "m11-s4-1",
          paragraphs: [
            "It's time to plan York properly.",
            "Let's say the board has authorised initiation, with a £5,000 budget. Sam has four weeks to turn the project brief into a plan detailed enough for you to commit £80,000.",
          ],
          scenario: {
            question: "What does the board need to see?",
            steps: [
              {
                title: "How it'll be managed",
                body: "Sam writes the management approaches: risk, quality, issues, communication, commercial, and digital and data.",
              },
              {
                title: "What it'll cost and deliver",
                body: "Sam builds the project plan and the detailed business case, with the £85,000 budget, three stages and an opening date of 1 December.",
              },
              {
                title: "Who's doing what",
                body: "Sam confirms the project management team, their roles and how the project will be tailored.",
              },
              {
                title: "That's the idea",
                body: "**Initiating a project** creates the **project initiation documentation (PID)**: a solid foundation for the project, so the board can decide whether to go ahead.",
              },
            ],
          },
        },
        {
          id: "m11-s4-2",
          heading: "Purpose",
          paragraphs: [
            "The purpose of initiating a project is to establish **solid foundations** so that the organisation understands the work needed before committing significant money.",
            "It makes sure everyone agrees on the reasons for the project, what it will deliver, how it will be managed, how much it'll cost and how long it'll take.",
          ],
        },
        {
          id: "m11-s4-3",
          heading: "Main activities",
          paragraphs: ["Initiation includes:"],
          bullets: [
            "**Agree the tailoring requirements**",
            "**Prepare the management approaches**: risk, quality, issue, communication, commercial, digital and data, and any others needed",
            "**Set up the project controls**",
            "**Create the project plan**",
            "**Prepare the full business case**, including the benefits management approach",
            "**Assemble the PID**",
          ],
        },
        {
          id: "m11-s4-4",
          heading: "The PID",
          paragraphs: [
            "The **project initiation documentation** brings everything together. It's not one document but a collection, and typically includes:",
          ],
          bullets: [
            "The **project definition** and **project approach**",
            "The **business case**",
            "The **project management team structure** and role descriptions",
            "The **management approaches**",
            "The **project plan** and **project controls**",
            "The **tailoring** of PRINCE2 for this project",
          ],
          callout: {
            tone: "tip",
            title: "A living document",
            body: "The PID is baselined when the board authorises the project, but parts of it are updated at each stage boundary. It isn't filed away.",
          },
        },
        {
          id: "m11-s4-5",
          heading: "What it leads to",
          paragraphs: [
            "Near the end of initiation, Sam also prepares the **Stage 2 plan**, using managing a stage boundary. The board can then authorise the project and the first delivery stage at the same time.",
            "Initiation also creates the **risk**, **issue**, **quality** and **product registers** and the **benefits management approach**, so the project is ready to be controlled from day one of Stage 2.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Initiating a project establishes **solid foundations**. It creates the **PID**, including the **business case**, **project plan**, **management approaches**, team structure, controls and tailoring, plus the **registers** and **benefits management approach**.",
          },
        },
      ],
      keyPoints: [
        "Initiating a project establishes solid foundations before major investment.",
        "It prepares the management approaches, project plan, controls and full business case.",
        "The result is the project initiation documentation (PID).",
        "Initiation also creates the registers and the benefits management approach.",
      ],
      knowledgeCheck: {
        id: "m11-s4-kc",
        question: "In which process is the project initiation documentation assembled?",
        options: ["Starting up a project", "Initiating a project", "Controlling a stage", "Closing a project"],
        correctOption: 1,
        explanation:
          "The PID is assembled in initiating a project and approved by the board in authorise the project.",
      },
      assessment: [
        {
          id: "m11-s4-a1",
          type: "single",
          prompt: "What is the purpose of initiating a project?",
          options: [
            { id: "a", label: "To build the final products" },
            { id: "b", label: "To establish solid foundations before committing significant investment" },
            { id: "c", label: "To review benefits after closure" },
            { id: "d", label: "To appoint the executive" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Initiation establishes solid foundations so the board can make an informed decision.",
          topic: "Processes",
        },
        {
          id: "m11-s4-a2",
          type: "multiple",
          prompt: "Which TWO are part of the PID?",
          options: [
            { id: "a", label: "The project plan" },
            { id: "b", label: "The lessons report" },
            { id: "c", label: "The management approaches" },
            { id: "d", label: "The end project report" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The PID includes the project plan and management approaches, among other things.",
          topic: "Processes",
        },
        {
          id: "m11-s4-a3",
          type: "boolean",
          prompt: "The PID is never updated after the project is authorised.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Parts of the PID, such as the business case and project plan, are updated at stage boundaries.",
          topic: "Processes",
        },
        {
          id: "m11-s4-a4",
          type: "single",
          prompt: "Where is the benefits management approach created?",
          options: [
            { id: "a", label: "Starting up a project" },
            { id: "b", label: "Initiating a project" },
            { id: "c", label: "Managing product delivery" },
            { id: "d", label: "After closure" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The benefits management approach is created during initiation, alongside the full business case.",
          topic: "Processes",
        },
      ],
    },
  ],
};
