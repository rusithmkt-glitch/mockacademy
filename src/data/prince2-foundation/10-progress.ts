import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const progressModule: CourseModule = {
  id: "m10",
  slug: "progress",
  order: 10,
  title: "Progress",
  shortTitle: "Progress",
  tagline: "Know where the project stands, and step in only when you need to.",
  description:
    "The progress practice in PRINCE2 7th edition sets the limits each level works within and the controls that show how things are going. You'll set York's tolerances, track progress through reports and registers, and handle the damp exception.",
  scene: "delivery",
  sessions: [
    {
      id: "progress/tolerances",
      slug: "tolerances",
      title: "Tolerances",
      summary:
        "How the seven performance targets are given tolerances at each level, and where those tolerances are recorded.",
      durationMinutes: 14,
      objectives: [
        "Name the seven performance targets that can have tolerances",
        "Describe who sets tolerances at each level",
        "Identify where each tolerance is documented",
      ],
      sections: [
        {
          id: "m10-s1-1",
          paragraphs: [
            "It's time to set the limits that let everyone get on with their work.",
            "Let's say Stage 2 is planned at £40,000 and the first invoices suggest it'll come in at £40,800. Sam wonders whether to call an emergency board meeting. You'd rather not be called for £800.",
          ],
          scenario: {
            question: "When should Sam call you?",
            steps: [
              {
                title: "Agree a range",
                body: "When you authorised Stage 2, you set it at £40,000 ±£3,000 and 10 weeks ±1 week.",
              },
              {
                title: "Inside the range",
                body: "£40,800 is well within £43,000. Sam carries on, mentions it in the next highlight report and keeps watching.",
              },
              {
                title: "Outside the range",
                body: "When the damp pushes the forecast to £45,000, that's beyond £43,000. Sam must tell you straight away.",
              },
              {
                title: "That's the idea",
                body: "**Tolerances** are the permissible deviation above and below a plan's targets. Inside tolerance, people manage. Forecast outside it, they escalate.",
              },
            ],
          },
        },
        {
          id: "m10-s1-2",
          heading: "The seven performance targets",
          paragraphs: [
            "In PRINCE2 7th edition, tolerances can be set for seven **performance targets**:",
          ],
          bullets: [
            "**Benefits**: the benefits the project should enable",
            "**Cost**: the money to be spent",
            "**Time**: the dates by which things should be done",
            "**Quality**: how good the products need to be",
            "**Scope**: what will and won't be delivered",
            "**Risk**: how much risk is acceptable",
            "**Sustainability**: the agreed environmental, social and economic targets",
          ],
        },
        {
          id: "m10-s1-3",
          heading: "Who sets tolerances",
          paragraphs: ["Tolerances cascade down the levels of organisation:"],
          bullets: [
            "The **business layer** sets **project** tolerances",
            "The **project board** sets **stage** tolerances, within the project tolerances",
            "The **project manager** sets **work package** tolerances, within the stage tolerances",
          ],
        },
        {
          id: "m10-s1-4",
          heading: "Where tolerances are documented",
          paragraphs: ["Each tolerance is written down in the most relevant place:"],
          bullets: [
            "**Time, cost and scope**: in the project plan, stage plans and work packages",
            "**Quality**: in the project product description and product descriptions",
            "**Benefits**: in the business case, and in stage plans",
            "**Risk and sustainability**: in the business case at project level, and in stage plans and work packages below that",
          ],
          callout: {
            tone: "tip",
            title: "Zero tolerance is fine",
            body: "A tolerance can be zero. On the app, time and cost per 2-week cycle are fixed, with tolerance on scope instead. That's common with iterative delivery.",
          },
        },
        {
          id: "m10-s1-5",
          heading: "Tolerances and management by exception",
          paragraphs: [
            "Tolerances are what make management by exception work. Each level gets on with the job without asking permission, as long as the forecast stays within its limits.",
            "That saves a lot of time. You don't hear about the £800, but you do hear about the £5,000 damp, as soon as it's forecast, not after the money is spent.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Tolerances can be set for **benefits**, **cost**, **time**, **quality**, **scope**, **risk** and **sustainability**. The **business layer** sets project tolerances, the **board** sets stage tolerances and the **project manager** sets work package tolerances.",
          },
        },
      ],
      keyPoints: [
        "Tolerances are the permissible deviation from a plan's targets.",
        "They can be set for benefits, cost, time, quality, scope, risk and sustainability.",
        "Business layer, board and project manager set tolerances at project, stage and work package level.",
        "Forecasting a breach of tolerance triggers escalation to the level above.",
      ],
      knowledgeCheck: {
        id: "m10-s1-kc",
        question: "Who sets the stage tolerances for Stage 2?",
        options: ["The business layer", "The project board", "The project manager", "The team manager"],
        correctOption: 1,
        explanation:
          "The project board sets stage tolerances within the project tolerances set by the business layer.",
      },
      assessment: [
        {
          id: "m10-s1-a1",
          type: "single",
          prompt: "Where is quality tolerance for the final product documented?",
          options: [
            { id: "a", label: "The project product description" },
            { id: "b", label: "The risk register" },
            { id: "c", label: "The daily log" },
            { id: "d", label: "The lessons log" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Quality tolerances are documented in the project product description and product descriptions.",
          topic: "Practices",
        },
        {
          id: "m10-s1-a2",
          type: "multiple",
          prompt: "Which TWO are among the seven performance targets?",
          options: [
            { id: "a", label: "Sustainability" },
            { id: "b", label: "Morale" },
            { id: "c", label: "Benefits" },
            { id: "d", label: "Reputation" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The seven are benefits, cost, time, quality, scope, risk and sustainability.",
          topic: "Practices",
        },
        {
          id: "m10-s1-a3",
          type: "boolean",
          prompt: "A tolerance can be set to zero.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Zero tolerance is common, for example on time and cost in iterative delivery.",
          topic: "Practices",
        },
        {
          id: "m10-s1-a4",
          type: "single",
          prompt: "Who sets work package tolerances?",
          options: [
            { id: "a", label: "The business layer" },
            { id: "b", label: "The senior supplier" },
            { id: "c", label: "The project manager" },
            { id: "d", label: "Project assurance" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The project manager sets work package tolerances within the stage tolerances.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "progress/controls-and-escalation",
      slug: "controls-and-escalation",
      title: "Controls and escalation",
      summary:
        "The controls each level uses to monitor and direct the project, and what happens when tolerance is threatened.",
      durationMinutes: 14,
      objectives: [
        "Distinguish event-driven from time-driven controls",
        "Describe the controls used by the board and the project manager",
        "Describe how exceptions are escalated",
      ],
      sections: [
        {
          id: "m10-s2-1",
          paragraphs: [
            "It's time to handle the damp exception step by step.",
            "Let's say the survey confirms damp in week 5. Treatment will cost £5,000 and add a week. Stage 2's forecast is now £45,000, which is £2,000 beyond its tolerance.",
          ],
          scenario: {
            question: "What happens next?",
            steps: [
              {
                title: "Sam raises an exception",
                body: "Sam sends you an **exception report**: what's happened, the options and a recommendation. Sam can't approve the extra money alone.",
              },
              {
                title: "The board considers it",
                body: "You and the board look at the options: treat the damp and accept the cost, look for savings elsewhere, or stop the project.",
              },
              {
                title: "The board decides",
                body: "You ask Sam for an **exception plan** for the rest of Stage 2, including the treatment and a saving on the fit-out.",
              },
              {
                title: "That's the idea",
                body: "When a forecast goes beyond tolerance, it's **escalated** to the level above, which decides what to do. The **exception plan** replaces the current plan once approved.",
              },
            ],
          },
        },
        {
          id: "m10-s2-2",
          heading: "Event-driven and time-driven controls",
          paragraphs: ["PRINCE2 7th edition uses two kinds of control:"],
          bullets: [
            "**Event-driven**: triggered when something happens, such as the end of a stage or a forecast exception. Examples: end stage report, exception report, issue report",
            "**Time-driven**: happen at regular intervals. Examples: highlight reports and checkpoint reports",
          ],
        },
        {
          id: "m10-s2-3",
          heading: "Board controls",
          paragraphs: ["The project board controls the project through:"],
          bullets: [
            "**Authorisations**: of initiation, of the project, of each stage and of closure",
            "**Progress updates**: highlight reports, end stage reports and the end project report",
            "**Exceptions and changes**: exception reports, issue reports and requests for change",
          ],
        },
        {
          id: "m10-s2-4",
          heading: "Project manager controls",
          paragraphs: ["The project manager controls the stage through:"],
          bullets: [
            "**Authorising work packages** to team managers",
            "**Checkpoint reports** from team managers",
            "**Logs and registers**, like the issue and risk registers, to track what's happening",
          ],
          callout: {
            tone: "tip",
            title: "Team managers escalate too",
            body: "If a work package is forecast to go outside its tolerance, the team manager raises an issue with the project manager, who decides what to do within the stage.",
          },
        },
        {
          id: "m10-s2-5",
          heading: "Escalating at project level",
          paragraphs: [
            "If the whole project is forecast to go outside its tolerances, the board can't decide alone. It escalates to the business layer.",
            "If the damp had pushed York beyond its £85,000 budget tolerance, you'd have taken it to the business layer, as a director with Tom. The business layer might approve a project exception plan, or close the project.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Controls are **event-driven** (end stage, exception and issue reports) or **time-driven** (highlight and checkpoint reports). A forecast breach is escalated with an **exception report**; the board may ask for an **exception plan**. Project-level exceptions go to the **business layer**.",
          },
        },
      ],
      keyPoints: [
        "Controls are either event-driven or time-driven.",
        "The board controls through authorisations, progress updates and exceptions.",
        "The project manager controls through work packages, checkpoint reports and logs and registers.",
        "Forecast tolerance breaches are escalated to the level above.",
      ],
      knowledgeCheck: {
        id: "m10-s2-kc",
        question: "Which of these is a time-driven control?",
        options: ["Exception report", "End stage report", "Highlight report", "Issue report"],
        correctOption: 2,
        explanation:
          "Highlight reports are sent at regular intervals, so they're time-driven.",
      },
      assessment: [
        {
          id: "m10-s2-a1",
          type: "single",
          prompt: "Stage 2 is forecast to exceed its cost tolerance. What does Sam send the board?",
          options: [
            { id: "a", label: "A checkpoint report" },
            { id: "b", label: "An exception report" },
            { id: "c", label: "A lessons report" },
            { id: "d", label: "An end project report" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project manager sends an exception report when a stage is forecast to exceed tolerance.",
          topic: "Practices",
        },
        {
          id: "m10-s2-a2",
          type: "multiple",
          prompt: "Which TWO are event-driven controls?",
          options: [
            { id: "a", label: "End stage report" },
            { id: "b", label: "Highlight report" },
            { id: "c", label: "Exception report" },
            { id: "d", label: "Checkpoint report" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "End stage and exception reports are triggered by events. Highlight and checkpoint reports are time-driven.",
          topic: "Practices",
        },
        {
          id: "m10-s2-a3",
          type: "boolean",
          prompt: "The project board can approve an exception plan for the whole project without involving the business layer.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "A project-level exception goes beyond the board's authority, so it's escalated to the business layer.",
          topic: "Practices",
        },
        {
          id: "m10-s2-a4",
          type: "single",
          prompt: "Which is a project manager control?",
          options: [
            { id: "a", label: "Authorising the project" },
            { id: "b", label: "Authorising work packages" },
            { id: "c", label: "Setting project tolerances" },
            { id: "d", label: "Approving the project closure" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project manager authorises work packages. The other authorisations belong to the board or business layer.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "progress/progress-reports",
      slug: "progress-reports",
      title: "Progress reports",
      summary:
        "The reports that carry progress information up and down the project, who writes them and who reads them.",
      durationMinutes: 13,
      objectives: [
        "Describe the purpose of each PRINCE2 report",
        "Identify who produces and receives each report",
        "Explain how reports support management by exception",
      ],
      sections: [
        {
          id: "m10-s3-1",
          paragraphs: [
            "It's time to follow the York reports through a typical fortnight.",
            "Let's say it's week 8. You're in Leeds baking and haven't been to York for two weeks. Yet you know exactly how the building works are going, what's at risk and what's coming next.",
          ],
          scenario: {
            question: "How do you know?",
            steps: [
              {
                title: "From the team",
                body: "Every Friday, the site foreman sends Sam a **checkpoint report**: what got done, what's next and any problems.",
              },
              {
                title: "To the board",
                body: "Every other Monday, Sam sends you a one-page **highlight report**: progress against the stage plan, budget, key risks and issues.",
              },
              {
                title: "At the stage end",
                body: "When Stage 2 finishes, Sam sends an **end stage report** with the stage's results and a forecast for the rest of the project.",
              },
              {
                title: "That's the idea",
                body: "PRINCE2 reports carry the right information to the right people at the right time, so the board can **direct** without **managing** day to day.",
              },
            ],
          },
        },
        {
          id: "m10-s3-2",
          heading: "Regular reports",
          paragraphs: ["Two reports are produced at regular intervals:"],
          bullets: [
            "**Checkpoint report**: from a **team manager** to the **project manager**, at the frequency agreed in the work package",
            "**Highlight report**: from the **project manager** to the **project board**, at the frequency agreed in the stage plan",
          ],
        },
        {
          id: "m10-s3-3",
          heading: "Event-driven reports",
          paragraphs: ["Other reports are triggered by events:"],
          bullets: [
            "**End stage report**: from the project manager to the board, at the end of each stage",
            "**End project report**: from the project manager to the board, at closure, reviewing how the project did against its baselines",
            "**Exception report**: from the project manager to the board, when a stage or project is forecast to exceed tolerance",
            "**Issue report**: describes a formal issue and recommends a response",
            "**Lessons report**: passes lessons on to the wider business",
          ],
        },
        {
          id: "m10-s3-4",
          heading: "Keep reports useful",
          paragraphs: [
            "A report should help someone decide or act. Sam's highlight report fits on one page and starts with what you need to know, not a list of every task.",
            "For the app, Ana's checkpoint report might be the team's end-of-cycle demo plus a short note. Reports don't have to be documents; they can be dashboards, meetings or messages, as long as the information gets through.",
          ],
          callout: {
            tone: "tip",
            title: "Tailor the format",
            body: "PRINCE2 7th edition says what information should flow, not what template to use. A shared dashboard can replace a written highlight report, if it does the same job.",
          },
        },
        {
          id: "m10-s3-5",
          heading: "Reports and decisions",
          paragraphs: [
            "Reports are linked to decisions. The end stage report supports the board's decision to authorise the next stage. The exception report supports its decision on how to handle an exception.",
            "That's why reports must be honest and timely. A highlight report that hides a problem stops the board deciding at the right moment.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "**Checkpoint reports** go from **team manager to project manager**. **Highlight reports** go from **project manager to board**. **End stage**, **end project** and **exception reports** go from the project manager to the board. Reports can be in any format that does the job.",
          },
        },
      ],
      keyPoints: [
        "Checkpoint reports go from team managers to the project manager.",
        "Highlight reports go from the project manager to the board at regular intervals.",
        "End stage, end project, exception, issue and lessons reports are event-driven.",
        "Reports should be honest, timely and in whatever format does the job.",
      ],
      knowledgeCheck: {
        id: "m10-s3-kc",
        question: "Who receives a highlight report?",
        options: ["The team manager", "The project board", "Project support", "The business layer only"],
        correctOption: 1,
        explanation:
          "The project manager sends highlight reports to the project board at regular intervals.",
      },
      assessment: [
        {
          id: "m10-s3-a1",
          type: "single",
          prompt: "Which report reviews how the whole project performed against its baselines?",
          options: [
            { id: "a", label: "Checkpoint report" },
            { id: "b", label: "Highlight report" },
            { id: "c", label: "End project report" },
            { id: "d", label: "Issue report" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The end project report, produced at closure, reviews the project's performance against its baselines.",
          topic: "Practices",
        },
        {
          id: "m10-s3-a2",
          type: "boolean",
          prompt: "A highlight report must always be a written document.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Reports can take any format, such as a dashboard or meeting, as long as they do the job.",
          topic: "Practices",
        },
        {
          id: "m10-s3-a3",
          type: "single",
          prompt: "Where is the frequency of checkpoint reports agreed?",
          options: [
            { id: "a", label: "In the work package" },
            { id: "b", label: "In the business case" },
            { id: "c", label: "In the lessons log" },
            { id: "d", label: "In the end project report" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Checkpoint report frequency is agreed in the work package.",
          topic: "Practices",
        },
        {
          id: "m10-s3-a4",
          type: "multiple",
          prompt: "Which TWO reports does the project manager send to the board?",
          options: [
            { id: "a", label: "Highlight report" },
            { id: "b", label: "Checkpoint report" },
            { id: "c", label: "End stage report" },
            { id: "d", label: "Daily log" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Highlight and end stage reports go to the board. Checkpoint reports come from team managers, and the daily log isn't a report.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "progress/logs-and-registers",
      slug: "logs-and-registers",
      title: "Logs and registers",
      summary:
        "The six records the project keeps to track risks, issues, quality, products, lessons and day-to-day notes.",
      durationMinutes: 12,
      objectives: [
        "Name the PRINCE2 logs and registers",
        "Describe what each one records",
        "Explain when each is created",
      ],
      sections: [
        {
          id: "m10-s4-1",
          paragraphs: [
            "It's time to look at where the York project keeps its records.",
            "Let's say a new project assurance reviewer joins in Stage 3 and asks, \"Where can I see what's happened so far?\" Ellie opens one folder with six files. Within half an hour, the reviewer knows the project's story.",
          ],
          scenario: {
            question: "What's in the folder?",
            steps: [
              {
                title: "What might happen",
                body: "The **risk register** lists every risk, from the damp (now closed) to the coffee chain (still open).",
              },
              {
                title: "What has happened",
                body: "The **issue register** lists the formal issues, including the damp and the bigger oven. The **daily log** has Sam's informal notes.",
              },
              {
                title: "What's been built and checked",
                body: "The **product register** shows every product and version. The **quality register** shows every check and its result.",
              },
              {
                title: "That's the idea",
                body: "PRINCE2 uses **logs and registers** to keep track of the project. Together with the lessons log, there are six.",
              },
            ],
          },
        },
        {
          id: "m10-s4-2",
          heading: "The six logs and registers",
          paragraphs: ["Each one has a different job:"],
          bullets: [
            "**Daily log**: the project manager's informal diary of notes, actions and informal issues",
            "**Lessons log**: lessons from previous projects and from this one",
            "**Issue register**: formal issues and their status",
            "**Risk register**: identified risks, their assessment and responses",
            "**Quality register**: planned and completed quality activities",
            "**Product register**: products, their versions and status",
          ],
        },
        {
          id: "m10-s4-3",
          heading: "When they're created",
          paragraphs: [
            "The **daily log** and **lessons log** are created in **starting up a project**, because they're needed right from the beginning.",
            "The **issue**, **risk**, **quality** and **product registers** are created in **initiating a project**, alongside the management approaches that describe how they'll be used.",
          ],
          callout: {
            tone: "tip",
            title: "A logs-first memory aid",
            body: "**Logs** come first, in starting up. **Registers** come next, in initiation.",
          },
        },
        {
          id: "m10-s4-4",
          heading: "Who keeps them",
          paragraphs: [
            "The project manager is responsible for the logs and registers, but project support usually keeps them up to date. Ellie updates the York registers after each meeting and each quality check.",
            "Team managers and the board feed information in, and project assurance reviews them to check the project is being managed properly.",
          ],
        },
        {
          id: "m10-s4-5",
          heading: "Keep them simple",
          paragraphs: [
            "York's logs and registers are tabs in one spreadsheet. The app team keeps its risks and issues in the same tool they use for the backlog.",
            "What matters isn't the tool, but that the information is current, easy to find and used to make decisions.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **daily log** and **lessons log** are created in **starting up a project**. The **issue**, **risk**, **quality** and **product registers** are created in **initiating a project**. The daily log is informal; the registers are formal records.",
          },
        },
      ],
      keyPoints: [
        "PRINCE2 uses six logs and registers to track the project.",
        "The daily log and lessons log are created in starting up a project.",
        "The issue, risk, quality and product registers are created in initiation.",
        "Project support usually maintains them on behalf of the project manager.",
      ],
      knowledgeCheck: {
        id: "m10-s4-kc",
        question: "Which record is the project manager's informal diary?",
        options: ["Issue register", "Daily log", "Quality register", "Product register"],
        correctOption: 1,
        explanation:
          "The daily log is the project manager's informal record of notes, actions and informal issues.",
      },
      assessment: [
        {
          id: "m10-s4-a1",
          type: "single",
          prompt: "In which process is the lessons log created?",
          options: [
            { id: "a", label: "Starting up a project" },
            { id: "b", label: "Initiating a project" },
            { id: "c", label: "Closing a project" },
            { id: "d", label: "Managing product delivery" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The lessons log is created in starting up a project, so lessons can be captured from the start.",
          topic: "Practices",
        },
        {
          id: "m10-s4-a2",
          type: "multiple",
          prompt: "Which TWO registers are created in initiating a project?",
          options: [
            { id: "a", label: "Risk register" },
            { id: "b", label: "Daily log" },
            { id: "c", label: "Quality register" },
            { id: "d", label: "Lessons log" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The risk, issue, quality and product registers are created in initiation. The logs come earlier.",
          topic: "Practices",
        },
        {
          id: "m10-s4-a3",
          type: "boolean",
          prompt: "The project manager must personally update every register.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "The project manager is responsible, but project support often maintains the registers.",
          topic: "Practices",
        },
        {
          id: "m10-s4-a4",
          type: "single",
          prompt: "Which register records the versions and status of each product?",
          options: [
            { id: "a", label: "Risk register" },
            { id: "b", label: "Issue register" },
            { id: "c", label: "Product register" },
            { id: "d", label: "Quality register" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The product register tracks products, their versions and status.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "progress/digital-and-data",
      slug: "digital-and-data",
      title: "Digital and data management",
      summary:
        "How PRINCE2 7th edition expects projects to plan the way they handle data and use digital tools.",
      durationMinutes: 12,
      objectives: [
        "Describe the purpose of the digital and data management approach",
        "Recognise data responsibilities on a project",
        "Explain how data supports better project decisions",
      ],
      sections: [
        {
          id: "m10-s5-1",
          paragraphs: [
            "It's time to think about the data your projects create and use.",
            "Let's say the pre-order app is about to launch. It will collect customers' names, email addresses and order history. Meanwhile, Sam wants to use the Leeds till data to forecast York's busiest hours.",
          ],
          scenario: {
            question: "What do you need to think about?",
            steps: [
              {
                title: "Protect personal data",
                body: "The app holds personal data, so it must follow UK data protection law. You need to decide who can see it, where it's stored and how long it's kept.",
              },
              {
                title: "Use data well",
                body: "The Leeds till data shows Saturday mornings are busiest. Sam uses it to plan staff rotas and the size of the York queue area.",
              },
              {
                title: "Agree the tools",
                body: "The team agrees which tools hold project information: the shared folder, the spreadsheet registers and the app team's backlog tool.",
              },
              {
                title: "That's the idea",
                body: "The **digital and data management approach** sets out how the project will handle data and use digital tools, safely and effectively.",
              },
            ],
          },
        },
        {
          id: "m10-s5-2",
          heading: "What the approach covers",
          paragraphs: [
            "PRINCE2 7th edition introduced the **digital and data management approach**. It's created during **initiation** and typically covers:",
          ],
          bullets: [
            "The **data** the project will create, use and store",
            "**Data protection** and privacy obligations",
            "**Security** and access to information",
            "The **digital tools** the project will use",
            "How data will be **archived** or handed over at closure",
          ],
        },
        {
          id: "m10-s5-3",
          heading: "Data on the project and in the product",
          paragraphs: [
            "There are two kinds of data to think about. **Project data** is about managing the project: plans, registers, reports. **Product data** is in or created by the products, like the app's customer records.",
            "Both need managing. Losing the risk register would hurt the project; leaking customers' details would hurt the business.",
          ],
          callout: {
            tone: "note",
            title: "Check the law",
            body: "Data protection rules vary by country and change over time. In a real project, check current guidance from the regulator, such as the UK Information Commissioner's Office.",
          },
        },
        {
          id: "m10-s5-4",
          heading: "Data for better decisions",
          paragraphs: [
            "Good data improves progress control. Instead of guessing, Sam can use actual spend, actual hours and actual sales to forecast.",
            "For the app, Ana's team tracks how many features they finish each cycle. That makes their forecasts for the remaining features more reliable.",
          ],
        },
        {
          id: "m10-s5-5",
          heading: "Keep it proportionate",
          paragraphs: [
            "For York alone, the approach could be half a page: where files are kept, who has access and how they're backed up. For the app, it needs more detail because it handles personal data.",
            "As always, tailor it to the project, but don't skip it. Data problems are easy to cause and hard to fix.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **digital and data management approach** is new in PRINCE2 7th edition. It's created in **initiation** and covers how the project handles data, data protection, security and digital tools.",
          },
        },
      ],
      keyPoints: [
        "The digital and data management approach is new in PRINCE2 7th edition.",
        "It covers data, data protection, security, digital tools and archiving.",
        "Both project data and product data need managing.",
        "Good data improves forecasting and progress control.",
      ],
      knowledgeCheck: {
        id: "m10-s5-kc",
        question: "When is the digital and data management approach created?",
        options: ["Starting up a project", "Initiating a project", "Closing a project", "After the first stage boundary"],
        correctOption: 1,
        explanation:
          "Like the other management approaches, it's created during initiation.",
      },
      assessment: [
        {
          id: "m10-s5-a1",
          type: "single",
          prompt: "The app's customer order history is an example of what?",
          options: [
            { id: "a", label: "Project data" },
            { id: "b", label: "Product data" },
            { id: "c", label: "A baseline" },
            { id: "d", label: "A tolerance" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Data held in or created by the products, like customer records, is product data.",
          topic: "Practices",
        },
        {
          id: "m10-s5-a2",
          type: "multiple",
          prompt: "Which TWO would you expect in the digital and data management approach?",
          options: [
            { id: "a", label: "Data protection obligations" },
            { id: "b", label: "The quality review outcomes" },
            { id: "c", label: "The digital tools to be used" },
            { id: "d", label: "The project board's names" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The approach covers data, data protection, security and digital tools.",
          topic: "Practices",
        },
        {
          id: "m10-s5-a3",
          type: "boolean",
          prompt: "Using actual data from the project can make forecasts more reliable.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Actual spend, effort and delivery rates make forecasting more accurate than estimates alone.",
          topic: "Practices",
        },
        {
          id: "m10-s5-a4",
          type: "single",
          prompt: "Which management approach is new in PRINCE2 7th edition?",
          options: [
            { id: "a", label: "Risk management approach" },
            { id: "b", label: "Quality management approach" },
            { id: "c", label: "Digital and data management approach" },
            { id: "d", label: "Communication management approach" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The digital and data management approach was introduced in PRINCE2 7th edition.",
          topic: "Practices",
        },
      ],
    },
  ],
};
