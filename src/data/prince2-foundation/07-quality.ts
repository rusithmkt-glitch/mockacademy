import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const qualityModule: CourseModule = {
  id: "m7",
  slug: "quality",
  order: 7,
  title: "Quality",
  shortTitle: "Quality",
  tagline: "Agree what good looks like, then check every product against it.",
  description:
    "The quality practice in PRINCE2 7th edition makes sure the products are fit for purpose. You'll turn the York team's expectations into measurable criteria, plan how each product is checked and run a quality review on the counter design.",
  scene: "planning",
  sessions: [
    {
      id: "quality/quality-planning-and-control",
      slug: "quality-planning-and-control",
      title: "Quality planning and quality control",
      summary:
        "The two halves of the quality practice: agreeing what quality means up front, then checking products against it.",
      durationMinutes: 13,
      objectives: [
        "Explain what quality means in PRINCE2",
        "Distinguish quality planning from quality control",
        "Explain the difference between quality assurance and project assurance",
      ],
      sections: [
        {
          id: "m7-s1-1",
          paragraphs: [
            "It's time to make sure the York shop is good enough. But good enough for whom, and how will you know?",
            "Let's say the chiller cabinet arrives and Oakline says it's finished. Priya opens it and says it isn't cold enough. Kit says it's \"within the normal range\". Nobody ever agreed what the right temperature was.",
          ],
          scenario: {
            question: "Who's right?",
            steps: [
              {
                title: "No agreed standard",
                body: "Without a written standard, it's Priya's opinion against Kit's. The argument could go on for weeks.",
              },
              {
                title: "Agree it up front",
                body: "Next time, you write down \"chiller holds 1–5°C\" before Oakline orders anything. Everyone signs up to it.",
              },
              {
                title: "Then check it",
                body: "When the chiller is installed, Jo checks it with a thermometer over a full day. It either meets the standard or it doesn't.",
              },
              {
                title: "That's the idea",
                body: "The quality practice has two parts. **Quality planning** agrees what quality means and how it'll be checked. **Quality control** checks the products against it.",
              },
            ],
          },
        },
        {
          id: "m7-s1-2",
          heading: "What quality means",
          paragraphs: [
            "In PRINCE2, quality is about whether a product is **fit for purpose**: it meets the requirements and expectations agreed for it.",
            "That's not the same as \"the best possible\". A marble counter would be higher grade than a laminate one, but if laminate meets the agreed needs, it's the right quality.",
          ],
        },
        {
          id: "m7-s1-3",
          heading: "Quality planning",
          paragraphs: ["Quality planning happens early, mostly in starting up and initiation. It covers:"],
          bullets: [
            "Understanding the customer's **quality expectations**",
            "Turning them into measurable **acceptance criteria**",
            "Writing **product descriptions** with **quality specifications** for each product",
            "Agreeing the **quality management approach**",
          ],
        },
        {
          id: "m7-s1-4",
          heading: "Quality control",
          paragraphs: [
            "Quality control happens during delivery. Each product is checked against its quality specifications using the agreed methods, and the results are recorded.",
            "When a product passes, it's approved and can be handed over. When it fails, it's fixed and checked again, or the issue is escalated if it can't be fixed within tolerance.",
          ],
        },
        {
          id: "m7-s1-5",
          heading: "Quality assurance vs project assurance",
          paragraphs: [
            "**Quality assurance** checks that the project is following the organisation's quality standards and policies. It's done for the **wider business**, independently of the project management team.",
            "**Project assurance**, as you saw in Organising, is done for the **project board**. Both are independent of the project manager, but they serve different audiences.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Quality has two parts: **quality planning** and **quality control**. **Quality assurance** is independent of the **project management team** and serves the wider business. **Project assurance** serves the **project board**.",
          },
        },
      ],
      keyPoints: [
        "Quality means a product is fit for purpose and meets agreed requirements.",
        "Quality planning agrees what quality means and how it'll be checked.",
        "Quality control checks products against their quality specifications.",
        "Quality assurance serves the wider business; project assurance serves the board.",
      ],
      knowledgeCheck: {
        id: "m7-s1-kc",
        question: "Which part of the quality practice checks products against their quality specifications?",
        options: ["Quality planning", "Quality control", "Benefits review", "Stage planning"],
        correctOption: 1,
        explanation:
          "Quality control checks each product against its agreed quality specifications and records the result.",
      },
      assessment: [
        {
          id: "m7-s1-a1",
          type: "single",
          prompt: "What does quality mean in PRINCE2?",
          options: [
            { id: "a", label: "Using the most expensive materials" },
            { id: "b", label: "A product being fit for purpose and meeting agreed requirements" },
            { id: "c", label: "Finishing ahead of schedule" },
            { id: "d", label: "Having no risks" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Quality is about fitness for purpose against agreed requirements, not the highest grade.",
          topic: "Practices",
        },
        {
          id: "m7-s1-a2",
          type: "boolean",
          prompt: "Quality assurance is carried out independently of the project management team.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Quality assurance checks the project against the organisation's standards, independently of the project management team.",
          topic: "Practices",
        },
        {
          id: "m7-s1-a3",
          type: "multiple",
          prompt: "Which TWO are part of quality planning?",
          options: [
            { id: "a", label: "Agreeing acceptance criteria" },
            { id: "b", label: "Testing the installed chiller" },
            { id: "c", label: "Writing product descriptions with quality specifications" },
            { id: "d", label: "Recording the test result in the quality register" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Agreeing criteria and writing product descriptions are planning. Testing and recording results are quality control.",
          topic: "Practices",
        },
        {
          id: "m7-s1-a4",
          type: "single",
          prompt: "Who does project assurance serve?",
          options: [
            { id: "a", label: "The project board" },
            { id: "b", label: "The team manager" },
            { id: "c", label: "The supplier's sales team" },
            { id: "d", label: "Project support" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Project assurance gives the board independent confidence. Quality assurance serves the wider business.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "quality/quality-expectations-and-acceptance-criteria",
      slug: "quality-expectations-and-acceptance-criteria",
      title: "Quality expectations and acceptance criteria",
      summary:
        "How to turn what the customer hopes for into measurable criteria the final product will be accepted against.",
      durationMinutes: 13,
      objectives: [
        "Explain what customer quality expectations are",
        "Write measurable acceptance criteria",
        "Prioritise acceptance criteria",
      ],
      sections: [
        {
          id: "m7-s2-1",
          paragraphs: [
            "It's time to work out what \"a great York shop\" really means.",
            "Let's say you ask everyone what they expect. Priya says \"a kitchen that's quick to work in\". Jo says \"a counter that doesn't get crowded\". Tom says \"it should feel like Leeds\". All good, but none of them can be tested.",
          ],
          scenario: {
            question: "How do you turn these into something you can check?",
            steps: [
              {
                title: "Capture the expectations",
                body: "Write each one down in the customer's own words. These are the **customer's quality expectations**.",
              },
              {
                title: "Make them measurable",
                body: "\"Quick to work in\" becomes \"oven, bench and sink within three steps of each other\". \"Doesn't get crowded\" becomes \"queue space for 12 people inside\".",
              },
              {
                title: "Agree the priority",
                body: "Food safety items must be met. \"Feels like Leeds\" matters but is judged by you and Priya on a walk-through.",
              },
              {
                title: "That's the idea",
                body: "**Quality expectations** are what the customer wants in their own words. **Acceptance criteria** are measurable, prioritised versions that decide whether the final product is accepted.",
              },
            ],
          },
        },
        {
          id: "m7-s2-2",
          heading: "Customer's quality expectations",
          paragraphs: [
            "The customer's quality expectations describe the qualities the project's product should have. They're captured in **starting up a project**, usually by the senior user, and recorded in the project product description.",
            "They also cover standards the product must meet, such as building regulations and food hygiene rules.",
          ],
        },
        {
          id: "m7-s2-3",
          heading: "Acceptance criteria",
          paragraphs: ["Good acceptance criteria are **measurable** and **prioritised**. For York, they include:"],
          bullets: [
            "Chiller cabinet holds 1–5°C over a 24-hour test",
            "Counter height 95cm",
            "Queue space for 12 customers inside",
            "Food hygiene inspection passed",
            "Shop open to customers by 1 December",
          ],
          callout: {
            tone: "tip",
            title: "Include more than the building",
            body: "Acceptance criteria can cover things like opening date, running costs, staff training and accessibility, not just physical features.",
          },
        },
        {
          id: "m7-s2-4",
          heading: "Prioritising criteria",
          paragraphs: [
            "Not every criterion is equally important. If the project runs short of money, which ones can give a little? Prioritising them up front, for example with MoSCoW, makes those trade-offs easier.",
            "Food safety and the hygiene inspection are must-haves. A second seating area is a could-have, and it's the first thing dropped if the budget gets tight.",
          ],
        },
        {
          id: "m7-s2-5",
          heading: "Who accepts",
          paragraphs: [
            "The project product description also says **who** will accept the final product and **how**. For York, Priya accepts on behalf of the users, after a full trial day with real customers.",
            "If the acceptance criteria are met, the product is accepted, and the project can move towards closing.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "**Customer's quality expectations** are captured in **starting up a project** and recorded in the **project product description**. **Acceptance criteria** are **measurable** and **prioritised**, and the final product is accepted against them.",
          },
        },
      ],
      keyPoints: [
        "Quality expectations describe what the customer wants, in their own words.",
        "Acceptance criteria turn expectations into measurable, prioritised tests.",
        "Both are recorded in the project product description.",
        "The project product description also says who accepts the final product and how.",
      ],
      knowledgeCheck: {
        id: "m7-s2-kc",
        question: "Which is a well-written acceptance criterion?",
        options: [
          "The shop should feel welcoming",
          "The chiller holds 1–5°C over a 24-hour test",
          "The counter should look nice",
          "The kitchen should be quick",
        ],
        correctOption: 1,
        explanation:
          "Acceptance criteria must be measurable. A temperature range over a set test period can be checked objectively.",
      },
      assessment: [
        {
          id: "m7-s2-a1",
          type: "single",
          prompt: "Where are the customer's quality expectations recorded?",
          options: [
            { id: "a", label: "The daily log" },
            { id: "b", label: "The project product description" },
            { id: "c", label: "The checkpoint report" },
            { id: "d", label: "The lessons report" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project product description records the customer's quality expectations and acceptance criteria.",
          topic: "Practices",
        },
        {
          id: "m7-s2-a2",
          type: "boolean",
          prompt: "Acceptance criteria should be prioritised.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Prioritising criteria helps the project make trade-offs if time or money runs short.",
          topic: "Practices",
        },
        {
          id: "m7-s2-a3",
          type: "multiple",
          prompt: "Which TWO are measurable acceptance criteria?",
          options: [
            { id: "a", label: "Counter height 95cm" },
            { id: "b", label: "A lovely atmosphere" },
            { id: "c", label: "Queue space for 12 customers inside" },
            { id: "d", label: "As good as Leeds" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Height and queue capacity can be measured. The others are expectations that still need turning into criteria.",
          topic: "Practices",
        },
        {
          id: "m7-s2-a4",
          type: "single",
          prompt: "In which process are the customer's quality expectations first captured?",
          options: [
            { id: "a", label: "Closing a project" },
            { id: "b", label: "Managing product delivery" },
            { id: "c", label: "Starting up a project" },
            { id: "d", label: "Managing a stage boundary" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "They're captured in starting up a project, as part of the project product description.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "quality/product-descriptions-and-quality-specifications",
      slug: "product-descriptions-and-quality-specifications",
      title: "Product descriptions and quality specifications",
      summary:
        "How a product description defines each product and the specifications it will be checked against.",
      durationMinutes: 13,
      objectives: [
        "Describe what a product description contains",
        "Explain quality specifications and quality tolerance",
        "Identify who should help write a product description",
      ],
      sections: [
        {
          id: "m7-s3-1",
          paragraphs: [
            "It's time to describe each product clearly enough that the team can build it and check it.",
            "Let's say Oakline is about to build the serving counter. Kit asks, \"What finish do you want? What's it got to hold? Who's checking it?\" Sam realises none of that has been written down.",
          ],
          scenario: {
            question: "What should Kit be given before starting?",
            steps: [
              {
                title: "What it's for",
                body: "The counter serves customers and displays cakes and bread. It has to be easy to clean and work at all day.",
              },
              {
                title: "What it's made of",
                body: "A worktop, a chilled display, a till point and storage underneath.",
              },
              {
                title: "How good it must be",
                body: "Height 95cm, with 2cm tolerance. Worktop is food-safe and wipe-clean. The chilled display holds 1–5°C. Jo and Priya will check it.",
              },
              {
                title: "That's the idea",
                body: "A **product description** defines a product's purpose, composition and **quality specifications**, and says who will check it and how.",
              },
            ],
          },
        },
        {
          id: "m7-s3-2",
          heading: "What a product description contains",
          paragraphs: ["A product description typically includes:"],
          bullets: [
            "**Purpose**: why the product is needed",
            "**Composition**: its parts",
            "**Derivation**: what it's based on, like a design drawing",
            "**Format and presentation**: how it should look",
            "**Quality specifications**: the measurable standards it must meet",
            "**Quality tolerance**: how much variation is acceptable",
            "**Quality method**: how it'll be checked",
            "**Quality responsibilities**: who produces, reviews and approves it",
          ],
        },
        {
          id: "m7-s3-3",
          heading: "Quality specifications and tolerance",
          paragraphs: [
            "**Quality specifications** are the measurable standards a product must meet. PRINCE2 7th edition uses this term; you may see older materials call them quality criteria.",
            "**Quality tolerance** is the acceptable range. The counter can be 93–97cm high and still pass. A worktop that isn't food-safe fails, because there's no tolerance on safety.",
          ],
        },
        {
          id: "m7-s3-4",
          heading: "Who writes them",
          paragraphs: [
            "The project manager is responsible for product descriptions but rarely writes them alone. The best ones are written with the people who'll use the product and the people who'll build it.",
            "Priya and Jo explain what they need at the counter. Kit explains what's practical. Sam brings it together and the senior user and senior supplier agree it.",
          ],
          callout: {
            tone: "tip",
            title: "In proportion",
            body: "Not every product needs a full description. A simple coat hook might need one line. The counter, the oven and the chiller need proper ones.",
          },
        },
        {
          id: "m7-s3-5",
          heading: "When they're written",
          paragraphs: [
            "The project product description is written in starting up a project. Descriptions for the main products are written during initiation and stage planning, before the work is handed out.",
            "Product descriptions are then included in work packages, so the team manager knows exactly what to build and how it'll be checked.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "A **product description** includes the product's **purpose**, **composition**, **quality specifications**, **quality tolerance**, **quality method** and **quality responsibilities**. They're included in **work packages**.",
          },
        },
      ],
      keyPoints: [
        "A product description defines purpose, composition and quality specifications.",
        "Quality tolerance sets the acceptable range for a specification.",
        "Users and suppliers should help write product descriptions.",
        "Product descriptions go into work packages so teams know what to build and how it'll be checked.",
      ],
      knowledgeCheck: {
        id: "m7-s3-kc",
        question:
          "The counter can be between 93cm and 97cm high and still pass. What is this an example of?",
        options: ["Quality tolerance", "Project tolerance", "A risk response", "A concession"],
        correctOption: 0,
        explanation:
          "Quality tolerance is the acceptable range for a quality specification.",
      },
      assessment: [
        {
          id: "m7-s3-a1",
          type: "multiple",
          prompt: "Which TWO would you expect in a product description?",
          options: [
            { id: "a", label: "Quality method" },
            { id: "b", label: "Stage tolerances" },
            { id: "c", label: "Quality responsibilities" },
            { id: "d", label: "Risk budget" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Product descriptions include how the product will be checked and who is responsible for producing, reviewing and approving it.",
          topic: "Practices",
        },
        {
          id: "m7-s3-a2",
          type: "boolean",
          prompt: "The project manager should always write product descriptions without involving users or suppliers.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Good product descriptions involve the people who will use and build the product.",
          topic: "Practices",
        },
        {
          id: "m7-s3-a3",
          type: "single",
          prompt: "How are product descriptions passed to team managers?",
          options: [
            { id: "a", label: "In the end project report" },
            { id: "b", label: "In work packages" },
            { id: "c", label: "In the lessons log" },
            { id: "d", label: "In the highlight report" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Work packages include the product descriptions for the products to be delivered.",
          topic: "Practices",
        },
        {
          id: "m7-s3-a4",
          type: "single",
          prompt: "What are quality specifications?",
          options: [
            { id: "a", label: "The project's overall budget" },
            { id: "b", label: "Measurable standards a product must meet" },
            { id: "c", label: "The list of project risks" },
            { id: "d", label: "The board's meeting dates" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Quality specifications are the measurable standards each product is checked against.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "quality/quality-management-approach-and-register",
      slug: "quality-management-approach-and-register",
      title: "Quality management approach and register",
      summary:
        "How the project documents its quality standards and procedures, and keeps a record of every quality check.",
      durationMinutes: 12,
      objectives: [
        "Describe the purpose of the quality management approach",
        "Describe the purpose of the quality register",
        "Explain how approval records support acceptance",
      ],
      sections: [
        {
          id: "m7-s4-1",
          paragraphs: [
            "It's time to agree how quality will be managed across the whole York project, and how you'll prove it was done.",
            "Let's say the food hygiene inspector visits in week 22 and asks to see evidence that the chiller was tested and the kitchen surfaces approved. Sam knows the checks happened, but the notes are scattered across emails and texts.",
          ],
          scenario: {
            question: "How do you make quality easy to prove?",
            steps: [
              {
                title: "Agree the rules",
                body: "In initiation, Sam writes down which standards apply, how products will be checked and who approves them. That's the **quality management approach**.",
              },
              {
                title: "Plan the checks",
                body: "Every planned check goes on a list: the product, the method, who's involved and the target date.",
              },
              {
                title: "Record the results",
                body: "After each check, Ellie notes the result and date. The chiller test shows \"passed, 3°C average, 14 November\".",
              },
              {
                title: "That's the idea",
                body: "The **quality management approach** sets out how quality will be managed. The **quality register** records every planned and completed quality activity.",
              },
            ],
          },
        },
        {
          id: "m7-s4-2",
          heading: "The quality management approach",
          paragraphs: [
            "The quality management approach is created during **initiation** and is part of the PID. It describes:",
          ],
          bullets: [
            "The **standards** and policies that apply, like food hygiene rules",
            "The **procedures** for quality planning and quality control",
            "The **tools and techniques** used, like tests and reviews",
            "The **records** that will be kept",
            "The **roles and responsibilities** for quality, including quality assurance",
          ],
        },
        {
          id: "m7-s4-3",
          heading: "The quality register",
          paragraphs: [
            "The **quality register** is a log of all quality activities. It's created during initiation and updated throughout the project, usually by project support.",
            "Each entry shows the product, the method, the people involved, the planned and actual dates, and the result. It gives the board and assurance a quick view of what's been checked.",
          ],
          callout: {
            tone: "tip",
            title: "It's a summary",
            body: "The quality register doesn't hold the evidence itself. It points to the **quality records**, like test sheets and review notes, that prove each check happened.",
          },
        },
        {
          id: "m7-s4-4",
          heading: "Approval and acceptance records",
          paragraphs: [
            "When a product passes its quality checks, an **approval record** confirms it's complete. At the end of the project, an **acceptance record** confirms the users and operations have accepted the final product.",
            "For York, Priya signs the acceptance record after the trial day. That's the evidence the board needs before closing the project.",
          ],
        },
        {
          id: "m7-s4-5",
          heading: "Keep it proportionate",
          paragraphs: [
            "For York, the quality management approach is two pages and the quality register is a simple spreadsheet. A hospital build would need much more.",
            "The aim is the same either way: everyone knows how quality will be checked, and there's a clear trail showing it was.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **quality management approach** is created in **initiation** and describes standards, procedures, tools, records and roles. The **quality register** records planned and actual quality activities. **Approval records** and **acceptance records** confirm products are complete and accepted.",
          },
        },
      ],
      keyPoints: [
        "The quality management approach describes how quality will be managed across the project.",
        "It's created during initiation as part of the PID.",
        "The quality register records every planned and completed quality activity.",
        "Approval and acceptance records provide evidence that products passed and were accepted.",
      ],
      knowledgeCheck: {
        id: "m7-s4-kc",
        question: "Which document records the planned and actual dates and results of quality checks?",
        options: ["Quality register", "Issue register", "Risk register", "Lessons log"],
        correctOption: 0,
        explanation:
          "The quality register lists every quality activity, with dates, people involved and results.",
      },
      assessment: [
        {
          id: "m7-s4-a1",
          type: "single",
          prompt: "When is the quality management approach created?",
          options: [
            { id: "a", label: "Starting up a project" },
            { id: "b", label: "Initiating a project" },
            { id: "c", label: "Closing a project" },
            { id: "d", label: "After every quality review" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "It's created during initiation and forms part of the PID.",
          topic: "Practices",
        },
        {
          id: "m7-s4-a2",
          type: "boolean",
          prompt: "The quality register stores the full evidence of each quality check.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "The quality register summarises activities and points to the quality records, which hold the evidence.",
          topic: "Practices",
        },
        {
          id: "m7-s4-a3",
          type: "multiple",
          prompt: "Which TWO would the quality management approach describe?",
          options: [
            { id: "a", label: "The standards that apply" },
            { id: "b", label: "The current risk exposure" },
            { id: "c", label: "The roles and responsibilities for quality" },
            { id: "d", label: "The latest highlight report" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "It covers standards, procedures, tools, records and quality roles.",
          topic: "Practices",
        },
        {
          id: "m7-s4-a4",
          type: "single",
          prompt: "What confirms that the users have accepted the final product?",
          options: [
            { id: "a", label: "A checkpoint report" },
            { id: "b", label: "An acceptance record" },
            { id: "c", label: "An issue report" },
            { id: "d", label: "A daily log entry" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The acceptance record confirms that the final product has been accepted.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "quality/quality-reviews",
      slug: "quality-reviews",
      title: "Quality reviews",
      summary:
        "A structured way of checking a product with a small group of people, and the roles and outcomes involved.",
      durationMinutes: 13,
      objectives: [
        "Describe the purpose of a quality review",
        "Name the roles in a quality review",
        "Describe the possible outcomes of a quality review",
      ],
      sections: [
        {
          id: "m7-s5-1",
          paragraphs: [
            "It's time to check a product that can't simply be measured with a thermometer.",
            "Let's say Oakline has produced the detailed counter design. It needs checking before anyone cuts wood. But how do you check a drawing? You need the right people looking at it in a structured way.",
          ],
          scenario: {
            question: "How should the review run?",
            steps: [
              {
                title: "Prepare",
                body: "Kit sends the design to Priya, Jo and Dev a few days before. Each one checks it against the product description and notes any questions.",
              },
              {
                title: "Meet",
                body: "Sam chairs a short meeting. Kit presents the design. Each reviewer raises their points, and Ellie records the actions.",
              },
              {
                title: "Agree an outcome",
                body: "Two small changes are needed: move the till point and add a step-free gap at the end. The design is conditionally complete.",
              },
              {
                title: "That's the idea",
                body: "A **quality review** is a structured check of a product by a small group, with clear **roles** and an agreed **outcome**.",
              },
            ],
          },
        },
        {
          id: "m7-s5-2",
          heading: "The roles",
          paragraphs: ["A quality review has four roles:"],
          bullets: [
            "**Chair**: runs the review and makes sure it reaches a conclusion",
            "**Presenter**: represents the product's producers and introduces the product",
            "**Reviewer**: checks the product against its quality specifications",
            "**Administrator**: supports the chair and records the results and actions",
          ],
          callout: {
            tone: "tip",
            title: "Roles, again",
            body: "These are roles, not jobs. On a small review, the chair can also be the administrator. The presenter shouldn't chair, so the producer isn't judging their own work.",
          },
        },
        {
          id: "m7-s5-3",
          heading: "The steps",
          paragraphs: ["A quality review usually follows four steps:"],
          bullets: [
            "**Prepare**: reviewers check the product beforehand and note questions",
            "**Review**: the group meets, walks through the points and agrees actions",
            "**Follow up**: the presenter makes the agreed changes, and reviewers confirm them",
            "**Sign off**: the chair confirms the product is complete and the result is recorded",
          ],
        },
        {
          id: "m7-s5-4",
          heading: "The outcomes",
          paragraphs: ["A quality review ends with one of three outcomes:"],
          bullets: [
            "**Complete**: the product meets its quality specifications as it is",
            "**Conditionally complete**: it will be complete once the agreed actions are done",
            "**Incomplete**: it needs another review after significant rework",
          ],
        },
        {
          id: "m7-s5-5",
          heading: "Why it works",
          paragraphs: [
            "Quality reviews catch problems early, when they're cheap to fix. Moving the till point on a drawing costs nothing; moving it after the counter is built costs hundreds.",
            "They also build shared ownership. Priya and Jo helped shape the counter, so they're much more likely to be happy with it on opening day.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Quality review roles are **chair**, **presenter**, **reviewer** and **administrator**. Outcomes are **complete**, **conditionally complete** and **incomplete**. Results are recorded in the **quality register**.",
          },
        },
      ],
      keyPoints: [
        "A quality review is a structured check of a product by a small group.",
        "The roles are chair, presenter, reviewer and administrator.",
        "The steps are prepare, review, follow up and sign off.",
        "The outcome is complete, conditionally complete or incomplete.",
      ],
      knowledgeCheck: {
        id: "m7-s5-kc",
        question: "In a quality review, who introduces the product and represents its producers?",
        options: ["Chair", "Presenter", "Reviewer", "Administrator"],
        correctOption: 1,
        explanation:
          "The presenter introduces the product and represents the people who produced it.",
      },
      assessment: [
        {
          id: "m7-s5-a1",
          type: "single",
          prompt: "A review agrees that the design will be complete once two small changes are made. What is the outcome?",
          options: [
            { id: "a", label: "Complete" },
            { id: "b", label: "Conditionally complete" },
            { id: "c", label: "Incomplete" },
            { id: "d", label: "Exception" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Conditionally complete means the product is complete once agreed actions are carried out.",
          topic: "Practices",
        },
        {
          id: "m7-s5-a2",
          type: "multiple",
          prompt: "Which TWO are roles in a quality review?",
          options: [
            { id: "a", label: "Chair" },
            { id: "b", label: "Risk owner" },
            { id: "c", label: "Administrator" },
            { id: "d", label: "Change authority" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The four roles are chair, presenter, reviewer and administrator.",
          topic: "Practices",
        },
        {
          id: "m7-s5-a3",
          type: "boolean",
          prompt: "Reviewers should check the product before the review meeting.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Reviewers prepare by checking the product beforehand and noting questions.",
          topic: "Practices",
        },
        {
          id: "m7-s5-a4",
          type: "single",
          prompt: "Where are the results of a quality review recorded?",
          options: [
            { id: "a", label: "The risk register" },
            { id: "b", label: "The quality register" },
            { id: "c", label: "The business case" },
            { id: "d", label: "The communication management approach" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The quality register records the results of quality activities, including reviews.",
          topic: "Practices",
        },
      ],
    },
  ],
};
