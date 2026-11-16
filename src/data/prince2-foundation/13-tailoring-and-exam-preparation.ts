import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const tailoringModule: CourseModule = {
  id: "m13",
  slug: "tailoring-and-exam-preparation",
  order: 13,
  title: "Tailoring and exam preparation",
  shortTitle: "Tailoring and exam",
  tagline: "Make PRINCE2 fit the project, then get ready for the Foundation exam.",
  description:
    "PRINCE2 7th edition is designed to be tailored to every project's context. You'll compare how York, the app and a tiny market stall would use the method differently, then bring everything together to prepare for the Foundation exam.",
  scene: "foundations",
  sessions: [
    {
      id: "tailoring-and-exam-preparation/tailoring-prince2",
      slug: "tailoring-prince2",
      title: "Tailoring PRINCE2",
      summary:
        "What tailoring means, what can and can't be tailored, and who decides how PRINCE2 is applied.",
      durationMinutes: 13,
      objectives: [
        "Explain what tailoring means in PRINCE2 7th edition",
        "Identify which parts of PRINCE2 can be tailored",
        "Describe who is responsible for tailoring decisions",
      ],
      sections: [
        {
          id: "m13-s1-1",
          paragraphs: [
            "It's time to make PRINCE2 fit, rather than fitting your project to PRINCE2.",
            "Let's say Tom wants to run a pop-up stall at the York Christmas market: one weekend, £1,500, three people. Sam starts drafting a full PID. Tom laughs. \"It's a gazebo and some mince pies.\"",
          ],
          scenario: {
            question: "Does a tiny project need all of PRINCE2?",
            steps: [
              {
                title: "Keep the principles",
                body: "The stall still needs a reason (sell, and promote York), clear roles, a plan and some idea of what could go wrong. The principles all apply.",
              },
              {
                title: "Lighten everything else",
                body: "The PID is one page. The board is a five-minute chat between you and Tom. The risk register is three lines on the same page.",
              },
              {
                title: "Write down the choices",
                body: "Sam notes how the method has been simplified, so everyone knows what's expected.",
              },
              {
                title: "That's the idea",
                body: "**Tailoring** means adapting PRINCE2 to the project's context. Every principle still applies, but the practices, processes, roles and products are scaled to fit.",
              },
            ],
          },
        },
        {
          id: "m13-s1-2",
          heading: "What can be tailored",
          paragraphs: ["Almost everything can be tailored, except the principles:"],
          bullets: [
            "**Practices**: how much detail is needed, using the organisation's own procedures",
            "**Processes**: combining or simplifying activities",
            "**Roles**: combining roles, within the rules you've learned",
            "**Management products**: merging, simplifying or using different formats",
            "**Terminology**: using the organisation's own words, as long as the meaning is clear",
          ],
          callout: {
            tone: "note",
            title: "The principles stay",
            body: "The seven principles are **not** tailored. If a project doesn't apply all seven, it isn't really a PRINCE2 project.",
          },
        },
        {
          id: "m13-s1-3",
          heading: "Why tailor",
          paragraphs: [
            "Applying PRINCE2 the same way to every project causes problems. Too much process on a small project wastes time and annoys people. Too little on a big one leaves it out of control.",
            "Tailoring also helps PRINCE2 work alongside other methods, such as an agile approach on the app, or a supplier's own building standards.",
          ],
        },
        {
          id: "m13-s1-4",
          heading: "Who tailors",
          paragraphs: [
            "The **project manager** proposes how the method will be tailored. The **project board** approves it, and project assurance checks it's appropriate.",
            "The business layer may have its own standards that limit or guide tailoring. A large company might insist on a standard risk register template, for example.",
          ],
        },
        {
          id: "m13-s1-5",
          heading: "Recording tailoring",
          paragraphs: [
            "Tailoring decisions are agreed in **initiation** and recorded in the **PID**. They're reviewed at each stage boundary, because what suits one stage may not suit the next.",
            "For York, the PID notes that highlight reports are a one-page email every two weeks, the board can decide by phone and the quality register is a spreadsheet tab.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Tailoring adapts PRINCE2 to the project's context. The **principles are not tailored**. The **project manager** proposes tailoring, the **board** approves it, and it's recorded in the **PID**.",
          },
        },
      ],
      keyPoints: [
        "Tailoring adapts PRINCE2 to the project's context.",
        "Practices, processes, roles, products and terminology can be tailored; principles can't.",
        "The project manager proposes tailoring and the board approves it.",
        "Tailoring decisions are recorded in the PID and reviewed at stage boundaries.",
      ],
      knowledgeCheck: {
        id: "m13-s1-kc",
        question: "Which part of PRINCE2 can't be tailored?",
        options: ["The practices", "The processes", "The principles", "The management products"],
        correctOption: 2,
        explanation:
          "The principles always apply. Everything else can be tailored to fit the project.",
      },
      assessment: [
        {
          id: "m13-s1-a1",
          type: "single",
          prompt: "Where are tailoring decisions recorded?",
          options: [
            { id: "a", label: "The daily log" },
            { id: "b", label: "The PID" },
            { id: "c", label: "The checkpoint report" },
            { id: "d", label: "The project mandate" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Tailoring decisions are recorded in the project initiation documentation.",
          topic: "Project context",
        },
        {
          id: "m13-s1-a2",
          type: "boolean",
          prompt: "An organisation may use its own terminology when tailoring PRINCE2.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Terminology can be tailored, as long as the meaning stays clear.",
          topic: "Project context",
        },
        {
          id: "m13-s1-a3",
          type: "multiple",
          prompt: "Which TWO can be tailored?",
          options: [
            { id: "a", label: "Management products" },
            { id: "b", label: "The principle of continued business justification" },
            { id: "c", label: "Roles" },
            { id: "d", label: "The principle of learning from experience" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Products and roles can be tailored. Principles always apply.",
          topic: "Project context",
        },
        {
          id: "m13-s1-a4",
          type: "single",
          prompt: "Who approves the project's tailoring?",
          options: [
            { id: "a", label: "The team manager" },
            { id: "b", label: "Project support" },
            { id: "c", label: "The project board" },
            { id: "d", label: "The quality review chair" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The project manager proposes tailoring and the board approves it.",
          topic: "Project context",
        },
      ],
    },
    {
      id: "tailoring-and-exam-preparation/prince2-in-different-contexts",
      slug: "prince2-in-different-contexts",
      title: "PRINCE2 in different contexts",
      summary:
        "How the same method looks different for a small project, an agile project, a commercial project and a project in a programme.",
      durationMinutes: 13,
      objectives: [
        "Recognise factors that affect how PRINCE2 is applied",
        "Compare PRINCE2 on small, agile and commercial projects",
        "Explain how a project fits within a programme or portfolio",
      ],
      sections: [
        {
          id: "m13-s2-1",
          paragraphs: [
            "It's time to compare three Fern & Flour projects side by side.",
            "Let's say Tom asks why the York shop, the pre-order app and the Christmas stall all look so different, if they all use PRINCE2.",
          ],
          scenario: {
            question: "What makes them different?",
            steps: [
              {
                title: "York",
                body: "Big, risky, mostly linear, external suppliers and fixed contracts. It needs three stages, formal registers and careful change control.",
              },
              {
                title: "The app",
                body: "Uncertain requirements, built in 2-week cycles. Stages are groups of cycles, scope flexes and the backlog doubles as the plan.",
              },
              {
                title: "The stall",
                body: "Tiny, simple, low risk. Two stages (a quick plan, then the weekend) and a one-page PID.",
              },
              {
                title: "That's the idea",
                body: "The **project context** shapes how PRINCE2 is applied. Size, complexity, risk, delivery approach, commercial setting and the wider organisation all matter.",
              },
            ],
          },
        },
        {
          id: "m13-s2-2",
          heading: "Factors that shape tailoring",
          paragraphs: ["PRINCE2 7th edition highlights factors such as:"],
          bullets: [
            "**Scale and complexity** of the project",
            "**Risk** and the organisation's risk appetite",
            "**Delivery approach**: linear, iterative or hybrid",
            "**Commercial context**: whether suppliers are internal or external",
            "**Organisational context**: standalone, part of a programme, or in a larger portfolio",
            "**Sustainability** and the organisation's own policies",
          ],
        },
        {
          id: "m13-s2-3",
          heading: "Agile and iterative projects",
          paragraphs: [
            "On the app, PRINCE2 provides the governance: the business case, the board, stages and tolerances. The team uses agile methods to build the product.",
            "Typical tailoring: time and cost fixed per stage, tolerance on scope, a prioritised backlog, frequent demos instead of written reports and a product owner working closely with Ana's team.",
          ],
        },
        {
          id: "m13-s2-4",
          heading: "Programmes and portfolios",
          paragraphs: [
            "Some projects sit within a **programme**, a group of related projects working towards a bigger goal. Others are part of a **portfolio**, the organisation's full set of projects and programmes.",
            "If Fern & Flour grew into a national chain, opening five shops might become a programme. The programme would act as the business layer for each shop project, setting its tolerances and tracking benefits across them all.",
          ],
          callout: {
            tone: "tip",
            title: "The business layer can be a programme",
            body: "In PRINCE2 7th edition, the business layer can be a company's directors, a programme or a portfolio office. The project's relationship with it is the same.",
          },
        },
        {
          id: "m13-s2-5",
          heading: "Commercial projects",
          paragraphs: [
            "When suppliers are external, contracts shape how the project is run. Supplier tolerances, reporting and change control need to match the contract.",
            "If a supplier uses its own method, that's fine. The work package and the commercial management approach connect it to the PRINCE2 project.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "**Project context** shapes tailoring: scale, complexity, risk, delivery approach, commercial and organisational context. PRINCE2 works with **agile** delivery and within **programmes** and **portfolios**, which can act as the **business layer**.",
          },
        },
      ],
      keyPoints: [
        "The project context shapes how PRINCE2 is applied.",
        "Factors include scale, complexity, risk, delivery approach and commercial setting.",
        "PRINCE2 provides governance around agile delivery.",
        "Projects can sit within programmes or portfolios, which can act as the business layer.",
      ],
      knowledgeCheck: {
        id: "m13-s2-kc",
        question: "Fern & Flour runs five shop openings as a group of related projects. What is this group called?",
        options: ["A portfolio", "A programme", "A stage", "A work package"],
        correctOption: 1,
        explanation:
          "A programme is a group of related projects working towards a bigger goal.",
      },
      assessment: [
        {
          id: "m13-s2-a1",
          type: "single",
          prompt: "Which is a factor that shapes how PRINCE2 is tailored?",
          options: [
            { id: "a", label: "The project manager's favourite colour" },
            { id: "b", label: "The project's scale and complexity" },
            { id: "c", label: "The number of principles" },
            { id: "d", label: "The exam pass mark" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Scale and complexity are key factors in tailoring.",
          topic: "Project context",
        },
        {
          id: "m13-s2-a2",
          type: "boolean",
          prompt: "PRINCE2 can't be used when the team builds products using agile methods.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "PRINCE2 provides project management and governance around agile delivery.",
          topic: "Project context",
        },
        {
          id: "m13-s2-a3",
          type: "multiple",
          prompt: "Which TWO could act as the business layer for a project?",
          options: [
            { id: "a", label: "A programme" },
            { id: "b", label: "A team manager" },
            { id: "c", label: "The company's directors" },
            { id: "d", label: "Project support" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The business layer can be a programme, portfolio or senior management, but not a project role.",
          topic: "Project context",
        },
        {
          id: "m13-s2-a4",
          type: "single",
          prompt: "What typically connects a supplier using its own method to a PRINCE2 project?",
          options: [
            { id: "a", label: "The work package and commercial management approach" },
            { id: "b", label: "The daily log" },
            { id: "c", label: "The lessons report" },
            { id: "d", label: "Nothing; suppliers must use PRINCE2" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Work packages and the commercial management approach link the supplier's work to the project.",
          topic: "Project context",
        },
      ],
    },
    {
      id: "tailoring-and-exam-preparation/exam-preparation",
      slug: "exam-preparation",
      title: "Preparing for the Foundation exam",
      summary:
        "What to expect from the PRINCE2 7th edition Foundation exam and how to revise the whole course effectively.",
      durationMinutes: 15,
      objectives: [
        "Describe the format of the Foundation exam",
        "Plan an effective revision approach",
        "Use exam techniques to answer questions accurately",
      ],
      sections: [
        {
          id: "m13-s3-1",
          paragraphs: [
            "It's time to bring everything together for the exam.",
            "Let's say Sam has decided to take the Foundation exam after running York. Sam knows the project inside out, but worries about remembering the exact terms under time pressure.",
          ],
          scenario: {
            question: "How should Sam prepare?",
            steps: [
              {
                title: "Know the format",
                body: "Sam checks the current exam details with the exam provider: number of questions, time allowed, pass mark and whether it's closed book.",
              },
              {
                title: "Revise the structure",
                body: "Sam reviews the five integrated elements: principles, people, practices, processes and project context, using the key points at the end of each session.",
              },
              {
                title: "Practise",
                body: "Sam takes the MockAcademy mock exams, reviews every wrong answer and goes back to the matching session.",
              },
              {
                title: "That's the idea",
                body: "Good exam preparation combines **knowing the format**, **revising the structure** and **practising under exam conditions**.",
              },
            ],
          },
        },
        {
          id: "m13-s3-2",
          heading: "The exam format",
          paragraphs: [
            "At the time of writing, the PRINCE2 7th edition Foundation exam is typically a **60-question**, **multiple-choice**, **closed-book** exam lasting **60 minutes**, with a pass mark of **36 out of 60** (60%).",
            "Exam rules can change, and online and in-person formats may differ. Always confirm the current details with your exam provider before you book.",
          ],
          callout: {
            tone: "note",
            title: "Independent course",
            body: "MockAcademy isn't an exam provider. Our mock exams are designed to help you practise, not to reproduce real exam questions.",
          },
        },
        {
          id: "m13-s3-3",
          heading: "What to revise",
          paragraphs: ["Focus your revision on the areas the exam tests most:"],
          bullets: [
            "The **seven principles** and what each one means in practice",
            "The **people** element: leadership, teams, stakeholders and culture",
            "The **seven practices**: business case, organising, plans, quality, risk, issues and progress",
            "The **seven processes**, their purpose, activities and outputs",
            "The **project context** and **tailoring**",
            "**Roles** and **management products**: who creates, approves and uses what",
          ],
        },
        {
          id: "m13-s3-4",
          heading: "Exam technique",
          paragraphs: ["A few habits make a big difference:"],
          bullets: [
            "**Read every word**: watch for NOT, TWO and \"first\" in the question",
            "**Eliminate wrong answers** before choosing the right one",
            "**Think PRINCE2**, not your own workplace: answer as the method describes",
            "**Don't get stuck**: flag hard questions and come back to them",
            "**Use all the time**: check your flagged answers at the end",
          ],
          callout: {
            tone: "tip",
            title: "Use Fern & Flour",
            body: "When a question feels abstract, picture York. Who would decide this? Which report would Sam send? The story makes the method easier to recall.",
          },
        },
        {
          id: "m13-s3-5",
          heading: "Your revision plan",
          paragraphs: [
            "Revisit the **key points** from each module, retake the **knowledge checks** you got wrong and complete at least two full **mock exams** under timed conditions.",
            "Aim to score well above the pass mark in practice. That gives you a buffer for nerves on the day. Good luck, and enjoy putting PRINCE2 7th edition to work on your own projects.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The Foundation exam is typically **60 multiple-choice questions** in **60 minutes**, closed book, with a pass mark of **36/60**. Check the current details with your exam provider. Read carefully, eliminate wrong answers and think as PRINCE2 describes.",
          },
        },
      ],
      keyPoints: [
        "The Foundation exam is typically 60 questions in 60 minutes, closed book, pass mark 36.",
        "Confirm the current exam details with your exam provider.",
        "Revise principles, people, practices, processes, project context, roles and products.",
        "Practise with timed mock exams and review every wrong answer.",
      ],
      knowledgeCheck: {
        id: "m13-s3-kc",
        question: "In a question asking which TWO statements are true, what should you do first?",
        options: [
          "Pick the first two options",
          "Read the question carefully and note that two answers are needed",
          "Choose the longest answers",
          "Skip it",
        ],
        correctOption: 1,
        explanation:
          "Reading every word, including how many answers are needed, avoids simple mistakes.",
      },
      assessment: [
        {
          id: "m13-s3-a1",
          type: "single",
          prompt: "What is typically the pass mark for the PRINCE2 7th edition Foundation exam?",
          options: [
            { id: "a", label: "30 out of 60" },
            { id: "b", label: "36 out of 60" },
            { id: "c", label: "42 out of 60" },
            { id: "d", label: "50 out of 60" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The pass mark is typically 36 out of 60 (60%). Always confirm with your exam provider.",
          topic: "Project context",
        },
        {
          id: "m13-s3-a2",
          type: "boolean",
          prompt: "When answering exam questions, you should answer as PRINCE2 describes, rather than how your own workplace does things.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "The exam tests knowledge of the method as described, not local practice.",
          topic: "Project context",
        },
        {
          id: "m13-s3-a3",
          type: "multiple",
          prompt: "Which TWO are good exam techniques?",
          options: [
            { id: "a", label: "Eliminate clearly wrong answers first" },
            { id: "b", label: "Spend as long as needed on the first hard question" },
            { id: "c", label: "Flag hard questions and return to them" },
            { id: "d", label: "Leave as soon as you've answered every question" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Eliminating wrong answers and flagging hard questions help you use time well.",
          topic: "Project context",
        },
        {
          id: "m13-s3-a4",
          type: "single",
          prompt: "What are the five integrated elements of PRINCE2 7th edition?",
          options: [
            { id: "a", label: "Principles, people, practices, processes, project context" },
            { id: "b", label: "Plans, risks, issues, quality, progress" },
            { id: "c", label: "Business, user, supplier, manager, team" },
            { id: "d", label: "Starting, directing, initiating, controlling, closing" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The five integrated elements are principles, people, practices, processes and project context.",
          topic: "Project context",
        },
      ],
    },
  ],
};
