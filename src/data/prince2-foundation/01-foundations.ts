import type { CourseModule } from "../types";

export const foundationsModule: CourseModule = {
  id: "m1",
  slug: "foundations",
  order: 1,
  title: "Foundations of PRINCE2",
  shortTitle: "Foundations",
  tagline: "The principles and context behind every PRINCE2 project.",
  description:
    "Start with the big picture: what PRINCE2 is, the principles that hold it together, and how projects fit into the wider organisation.",
  scene: "foundations",
  sessions: [
    {
      id: "m1-s1",
      slug: "what-is-prince2",
      title: "What is PRINCE2?",
      summary:
        "A clear introduction to the method, its purpose, and the four elements that make it work.",
      durationMinutes: 14,
      objectives: [
        "Define PRINCE2 and explain why organisations use it",
        "Describe the four integrated elements of the method",
        "Explain what PRINCE2 means by a project",
      ],
      sections: [
        {
          id: "m1-s1-1",
          heading: "A method, not a rulebook",
          paragraphs: [
            "PRINCE2 — PRojects IN Controlled Environments — is a structured project management method used across the UK public and private sectors. It describes what needs to happen, when it should happen, and who is accountable for it, while leaving teams free to tailor the detail to their project.",
            "The method is built around controlled delivery: a clear business justification, defined roles and responsibilities, plans broken into manageable stages, and decisions made at the right level. It is deliberately generic, so it can be applied to a one-month digital project or a multi-year infrastructure programme.",
          ],
        },
        {
          id: "m1-s1-2",
          heading: "The four integrated elements",
          paragraphs: [
            "PRINCE2 brings together four elements. The seven principles are the guiding obligations that shape how the method is applied. People recognises that projects succeed or fail through the way teams and stakeholders work together. The seven practices cover the aspects of a project that must be managed, such as plans, quality and risk. The seven processes describe the activities that move a project from an idea to closure.",
            "No element works alone. A process without principles becomes bureaucracy; principles without people become an aspiration. The Foundation exam regularly tests how these elements fit together, so learn them as one system rather than four separate lists.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Expect definition-style questions: what PRINCE2 is, what each element contributes, and which element a given activity belongs to.",
          },
        },
        {
          id: "m1-s1-3",
          heading: "What counts as a project?",
          paragraphs: [
            "PRINCE2 defines a project as a temporary organisation created to deliver one or more business products according to an agreed business case. Three words matter: temporary, because the team is disbanded once delivery is complete; products, because the focus is on defined outputs; and business case, because the investment must remain justified.",
            "This separates a project from business as usual. Operational work is ongoing and repeatable. A project has a defined start, a defined end, and a reason for existing that can be reviewed at every stage.",
          ],
        },
      ],
      keyPoints: [
        "PRINCE2 is a structured, tailorable method for managing projects.",
        "Its four integrated elements are principles, people, practices and processes.",
        "A project is a temporary organisation delivering products against an agreed business case.",
      ],
      knowledgeCheck: {
        id: "m1-s1-kc",
        question: "What is the primary role of the PRINCE2 principles?",
        options: [
          "They list the documents required on every project.",
          "They provide guiding obligations that shape how the method is applied.",
          "They replace the need for a project board on small projects.",
          "They define the order in which processes must be run.",
        ],
        correctOption: 1,
        explanation:
          "The principles are guiding obligations. They always apply, even when the practices and processes are tailored to suit the project.",
      },
      assessment: [
        {
          id: "m1-s1-a1",
          type: "single",
          prompt:
            "Which element of PRINCE2 describes the activities that move a project from an idea to closure?",
          options: [
            { id: "a", label: "The principles" },
            { id: "b", label: "The people element" },
            { id: "c", label: "The practices" },
            { id: "d", label: "The processes" },
          ],
          correctOptionIds: ["d"],
          explanation:
            "Processes describe the activities that take a project from mandate through to closure. Practices cover what must be managed, not the sequence of activities.",
          topic: "Foundations",
        },
        {
          id: "m1-s1-a2",
          type: "multiple",
          prompt:
            "Which of these are integrated elements of the PRINCE2 method? Select all that apply.",
          options: [
            { id: "a", label: "Principles" },
            { id: "b", label: "People" },
            { id: "c", label: "Practices" },
            { id: "d", label: "Budgets" },
          ],
          correctOptionIds: ["a", "b", "c"],
          explanation:
            "The four integrated elements are principles, people, practices and processes. A budget is a project constraint, not a PRINCE2 element.",
          topic: "Foundations",
        },
        {
          id: "m1-s1-a3",
          type: "boolean",
          prompt:
            "A project is a temporary organisation created to deliver one or more business products against an agreed business case.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "That is the PRINCE2 definition of a project: temporary, product-focused and justified by a business case.",
          topic: "Foundations",
        },
      ],
    },
    {
      id: "m1-s2",
      slug: "seven-principles",
      title: "The seven principles",
      summary:
        "The non-negotiable behaviours that keep a PRINCE2 project controlled and justifiable.",
      durationMinutes: 16,
      objectives: [
        "Name all seven PRINCE2 principles",
        "Explain the intent of each principle",
        "Recognise how principles apply when a project is tailored",
      ],
      sections: [
        {
          id: "m1-s2-1",
          heading: "Seven guiding obligations",
          paragraphs: [
            "The principles are the foundation of the method. They are universal, self-validating and empowering: if a project is not applying them, it is not being managed according to PRINCE2.",
          ],
          bullets: [
            "Continued business justification — there must be a justifiable reason to start, and it must remain valid.",
            "Learn from experience — lessons are sought, recorded and acted on throughout.",
            "Defined roles and responsibilities — everyone understands what they are accountable for.",
            "Manage by stages — work is planned, monitored and controlled stage by stage.",
            "Manage by exception — authority is delegated with clear tolerances and escalation.",
            "Focus on products — effort is directed at defined, agreed outputs.",
            "Tailor to the project environment — the method is adapted to scale, risk and complexity.",
          ],
        },
        {
          id: "m1-s2-2",
          heading: "Why they are mandatory",
          paragraphs: [
            "Tailoring changes how the method is applied, not whether the principles apply. A small project may use lighter documentation and fewer formal meetings, but it still needs a justifiable business case, defined roles and decisions made by exception.",
            "In the exam, a scenario that describes a project ignoring a principle — for example, continuing with no valid business case — is usually testing whether you can identify which principle has been breached.",
          ],
          callout: {
            tone: "tip",
            title: "Memory aid",
            body: "Justification, Learning, Roles, Stages, Exception, Products, Tailoring. Seven principles, seven practices, seven processes — keep the pattern in mind.",
          },
        },
      ],
      keyPoints: [
        "All seven principles apply to every PRINCE2 project.",
        "Tailoring changes application, never the principles themselves.",
        "Continued business justification is reviewed throughout the project, not just at the start.",
      ],
      knowledgeCheck: {
        id: "m1-s2-kc",
        question:
          "A project board allows the project manager to continue within agreed time and cost limits without seeking approval. Which principle does this demonstrate?",
        options: [
          "Focus on products",
          "Learn from experience",
          "Manage by exception",
          "Tailor to the project environment",
        ],
        correctOption: 2,
        explanation:
          "Manage by exception delegates authority within tolerances, with escalation only when those tolerances are forecast to be breached.",
      },
    },
    {
      id: "m1-s3",
      slug: "projects-in-context",
      title: "Projects in context",
      summary:
        "Projects do not exist in isolation. Understand business as usual, programmes, portfolios and the project ecosystem.",
      durationMinutes: 13,
      objectives: [
        "Distinguish projects from business as usual",
        "Explain the relationship between projects, programmes and portfolios",
        "Describe the main parts of the project ecosystem",
      ],
      sections: [
        {
          id: "m1-s3-1",
          heading: "Projects and business as usual",
          paragraphs: [
            "Business as usual keeps the organisation running: services, operations and repeatable processes. Projects exist to create a change — a new product, service or capability — and then hand it over. Once the change is embedded, the work becomes business as usual again.",
            "That handover is why PRINCE2 places so much emphasis on products, acceptance and closure. Delivering something is not enough; the organisation must be able to use it and realise the intended benefits.",
          ],
        },
        {
          id: "m1-s3-2",
          heading: "Programmes and portfolios",
          paragraphs: [
            "A programme is a group of related projects managed together to achieve benefits that would not be possible individually. A portfolio is the organisation's complete collection of projects, programmes and other change initiatives, prioritised against strategic objectives.",
            "A project may sit inside a programme, which in turn sits inside a portfolio. Each level has its own governance and reporting needs, which is one reason PRINCE2 projects must be tailored to their environment.",
          ],
        },
        {
          id: "m1-s3-3",
          heading: "The project ecosystem",
          paragraphs: [
            "Every project operates within a wider ecosystem: customers and users, suppliers, regulators, internal governance bodies, and the organisation's culture. These factors influence how the project should be structured and how much formality is appropriate.",
            "The Foundation syllabus expects you to recognise that PRINCE2 is not applied in a vacuum. Context shapes tailoring, risk appetite and the level of control the project board needs.",
          ],
        },
      ],
      keyPoints: [
        "A project creates change; business as usual sustains it.",
        "A programme coordinates related projects for shared benefits; a portfolio prioritises all change work.",
        "The project ecosystem shapes governance, tailoring and stakeholder expectations.",
      ],
      knowledgeCheck: {
        id: "m1-s3-kc",
        question: "Which statement best describes a programme?",
        options: [
          "A single large project with more than one stage.",
          "A group of related projects managed together to achieve benefits.",
          "The complete set of projects in an organisation.",
          "A temporary team created to deliver one product.",
        ],
        correctOption: 1,
        explanation:
          "A programme is a group of related projects managed collectively to deliver benefits. The complete set of change work is the portfolio.",
      },
    },
    {
      id: "m1-s4",
      slug: "tailoring-prince2",
      title: "Tailoring PRINCE2",
      summary:
        "How to scale the method sensibly without losing the control it is designed to provide.",
      durationMinutes: 15,
      objectives: [
        "Explain why tailoring is essential",
        "Identify what can and cannot be tailored",
        "Describe factors that influence the approach",
      ],
      sections: [
        {
          id: "m1-s4-1",
          heading: "Fit the method to the project",
          paragraphs: [
            "Tailoring is the deliberate adaptation of PRINCE2 to the project's size, complexity, risk, duration and organisational context. A two-week internal improvement project should not carry the same documentation burden as a regulated, multi-supplier programme.",
            "The aim is not to remove control. It is to apply the right level of control, in the right form, at the right time. Tailoring decisions should be recorded and revisited as the project evolves.",
          ],
        },
        {
          id: "m1-s4-2",
          heading: "What can be tailored",
          paragraphs: [
            "Practices can be simplified, combined or scaled. Processes can be merged for small projects, roles can be combined where conflicts are managed, and documents can be reduced to the information actually needed. Reporting frequency and formality can also be adjusted.",
            "What cannot be tailored away are the seven principles. Every project still needs continued justification, defined roles, staged control, exception-based delegation and a focus on products.",
          ],
          callout: {
            tone: "note",
            title: "Tailoring in practice",
            body: "Record the tailoring decisions and their rationale in the project initiation documentation so the project board can see the reasoning.",
          },
        },
      ],
      keyPoints: [
        "Tailoring adapts scale and formality to the project's context.",
        "Principles are never optional, however light the approach.",
        "Tailoring decisions should be documented and reviewed.",
      ],
      knowledgeCheck: {
        id: "m1-s4-kc",
        question:
          "When tailoring PRINCE2 for a small, low-risk project, what must always be maintained?",
        options: [
          "A full set of seven separate process documents.",
          "The seven PRINCE2 principles.",
          "A dedicated project assurance role.",
          "A separate project board for each stage.",
        ],
        correctOption: 1,
        explanation:
          "Tailoring may reduce formality, but the seven principles always apply.",
      },
    },
  ],
};
