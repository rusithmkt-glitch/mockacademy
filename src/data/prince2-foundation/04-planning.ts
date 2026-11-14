import type { CourseModule } from "../types";

export const planningModule: CourseModule = {
  id: "m4",
  slug: "planning-and-quality",
  order: 4,
  title: "Organisation, plans and quality",
  shortTitle: "Planning",
  tagline: "The structures, plans and standards that make delivery predictable.",
  description:
    "Learn who does what, how PRINCE2 plans from products rather than tasks, and how quality is planned and controlled.",
  scene: "planning",
  sessions: [
    {
      id: "m4-s1",
      slug: "organisation",
      title: "Organisation",
      summary:
        "The project board, project manager, team managers and supporting roles explained.",
      durationMinutes: 18,
      objectives: [
        "Explain the three project interests represented on the board",
        "Describe the responsibilities of the key PRINCE2 roles",
        "Distinguish project assurance from project support",
      ],
      sections: [
        {
          id: "m4-s1-1",
          heading: "Three interests, one board",
          paragraphs: [
            "PRINCE2 organisation is designed to represent three interests: business, user and supplier. The executive represents the business and is ultimately accountable for the project. Senior users represent the people who will use the outputs. Senior suppliers represent those who provide the resources and expertise to deliver them.",
            "The project board combines these perspectives so that decisions balance value, usability and deliverability. A project board without one of these interests is a warning sign in exam scenarios.",
          ],
        },
        {
          id: "m4-s1-2",
          heading: "The core roles",
          paragraphs: [
            "The project manager runs the project on a day-to-day basis within the board's tolerances. Team managers take responsibility for producing products within a work package. Project assurance independently monitors the project on behalf of the board, checking that the project remains viable and controlled.",
            "Project support provides specialist help with planning, administration and information management. The change authority may be appointed to decide on changes within agreed limits, allowing the board to delegate rather than be involved in every request.",
          ],
        },
        {
          id: "m4-s1-3",
          heading: "Assurance is not support",
          paragraphs: [
            "Project assurance is independent of the project manager and reports to the board. Its job is to check that the project is being managed properly. Project support is a service to the project manager, helping with plans, registers and reporting. Keeping the two separate protects the independence of assurance.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "If a question asks who represents the business interest or who is accountable for the business case, the answer is the executive.",
          },
        },
      ],
      keyPoints: [
        "The board represents business, user and supplier interests.",
        "The executive is accountable; the project manager manages day to day.",
        "Project assurance is independent; project support assists the project manager.",
      ],
      knowledgeCheck: {
        id: "m4-s1-kc",
        question: "Which role represents the business interest on the project board?",
        options: ["Senior user", "Senior supplier", "Executive", "Project assurance"],
        correctOption: 2,
        explanation:
          "The executive represents the business interest and is accountable for the project's business case.",
      },
    },
    {
      id: "m4-s2",
      slug: "plans",
      title: "Plans",
      summary:
        "Project, stage and team plans — and the product-based planning technique behind them.",
      durationMinutes: 17,
      objectives: [
        "Describe the levels of plan in PRINCE2",
        "Explain the product-based planning technique",
        "Recognise the difference between estimating and scheduling",
      ],
      sections: [
        {
          id: "m4-s2-1",
          heading: "Three levels of plan",
          paragraphs: [
            "The project plan describes the whole project at a high level and provides the baseline for control. Each management stage has a stage plan, which is more detailed and is used by the project manager for day-to-day control. Team plans sit below stage plans and cover the work allocated to a team manager.",
            "Plans may also be created for exceptions, when tolerances are forecast to be breached. A plan is not only a schedule: it includes products, activities, resources, estimates, tolerances and assumptions.",
          ],
        },
        {
          id: "m4-s2-2",
          heading: "Plan from products",
          paragraphs: [
            "Product-based planning starts with what must be delivered, not with a list of activities. The technique has five steps: write the project product description, create the product breakdown structure, write product descriptions, create the product flow diagram, and then plan the activities and resources needed.",
            "Starting with products reduces the risk of missing something important. It also makes quality criteria and acceptance criteria explicit before work begins.",
          ],
          callout: {
            tone: "tip",
            title: "Remember the order",
            body: "Project product description → product breakdown structure → product descriptions → product flow diagram → activity plan.",
          },
        },
        {
          id: "m4-s2-3",
          heading: "Estimate, then schedule",
          paragraphs: [
            "Estimating predicts the effort, cost and duration of activities. Scheduling places those activities into a timeline, taking dependencies and resource availability into account. Both should be revisited as the project learns more.",
          ],
        },
      ],
      keyPoints: [
        "Project, stage and team plans provide progressively more detail.",
        "Product-based planning starts with required products, not activities.",
        "Estimating and scheduling are distinct steps in building a plan.",
      ],
      knowledgeCheck: {
        id: "m4-s2-kc",
        question:
          "In product-based planning, what is created immediately after the product breakdown structure?",
        options: [
          "The product flow diagram",
          "The product descriptions",
          "The stage plan",
          "The work packages",
        ],
        correctOption: 1,
        explanation:
          "The product breakdown structure is followed by product descriptions, then the product flow diagram and finally the activity plan.",
      },
    },
    {
      id: "m4-s3",
      slug: "quality",
      title: "Quality",
      summary:
        "Agree what good looks like, then build the checks that prove it has been achieved.",
      durationMinutes: 16,
      objectives: [
        "Distinguish quality planning, quality control and quality assurance",
        "Explain the role of acceptance criteria",
        "Describe the purpose of the quality management approach",
      ],
      sections: [
        {
          id: "m4-s3-1",
          heading: "Plan for quality",
          paragraphs: [
            "Quality planning defines the quality expectations, the standards to be met, and how each product will be reviewed. The project's quality management approach sets out the overall approach, while product descriptions carry the quality criteria and quality methods for individual products.",
            "Acceptance criteria are the measurable conditions that must be met for a product to be accepted. They should be agreed with the customer early, not invented at handover.",
          ],
        },
        {
          id: "m4-s3-2",
          heading: "Control and assure",
          paragraphs: [
            "Quality control is the day-to-day checking of products against their quality criteria — for example, reviews, inspections or tests. Quality assurance is the independent check that the project's quality processes are appropriate, effective and being followed.",
            "The distinction matters in the exam. Control asks whether the product is good. Assurance asks whether the way we are checking is sound, and whether the project is being managed properly.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Quality control is about the product. Quality assurance is about the project's approach and is independent of the project manager.",
          },
        },
      ],
      keyPoints: [
        "Quality planning defines expectations, standards and review methods.",
        "Quality control checks products against agreed criteria.",
        "Quality assurance independently checks that quality processes are sound.",
      ],
      knowledgeCheck: {
        id: "m4-s3-kc",
        question: "Which activity is an example of quality assurance?",
        options: [
          "Reviewing a design document against its quality criteria.",
          "Independently checking that the project's quality approach is being followed.",
          "Running a user acceptance test.",
          "Writing acceptance criteria for a product.",
        ],
        correctOption: 1,
        explanation:
          "Assurance is an independent check of the project's processes and controls. The other options are quality planning or control activities.",
      },
    },
    {
      id: "m4-s4",
      slug: "products-and-descriptions",
      title: "Products and descriptions",
      summary:
        "Why PRINCE2 focuses on products, and what every product description should contain.",
      durationMinutes: 14,
      objectives: [
        "Explain the principle focus on products",
        "Identify the fields of a product description",
        "Describe the purpose of a product breakdown structure",
      ],
      sections: [
        {
          id: "m4-s4-1",
          heading: "Products first",
          paragraphs: [
            "Focus on products is one of the seven principles. It means agreeing what will be delivered before deciding how to deliver it. Clear product definitions reduce ambiguity, support quality control and make progress easier to measure.",
            "A product can be a physical thing, a document, a service or an outcome. PRINCE2 distinguishes project products (delivered by the project) from products that are handed over during the project.",
          ],
        },
        {
          id: "m4-s4-2",
          heading: "What a product description contains",
          paragraphs: [
            "A product description defines a product precisely enough to build and review it. It includes the product's purpose, composition, derivation, quality criteria, quality method, quality responsibilities and any quality tolerances.",
            "The product breakdown structure shows the products needed and their hierarchy. The product flow diagram then shows the order in which they can be produced. Together they turn a high-level product into a controllable plan.",
          ],
          callout: {
            tone: "tip",
            title: "Quality criteria vs acceptance criteria",
            body: "Quality criteria describe the attributes a product must have. Acceptance criteria are the conditions the customer agrees must be met for formal acceptance.",
          },
        },
      ],
      keyPoints: [
        "Focus on products means defining outputs before activities.",
        "Product descriptions capture purpose, composition, quality criteria and responsibilities.",
        "The product breakdown structure and product flow diagram support planning.",
      ],
      knowledgeCheck: {
        id: "m4-s4-kc",
        question: "Which item is part of a product description?",
        options: [
          "The project's rationale and options",
          "Quality criteria, quality method and quality responsibilities",
          "The project board's meeting schedule",
          "The team's daily stand-up notes",
        ],
        correctOption: 1,
        explanation:
          "Product descriptions define the product, including quality criteria, quality methods and who is responsible for quality activities.",
      },
    },
  ],
};
