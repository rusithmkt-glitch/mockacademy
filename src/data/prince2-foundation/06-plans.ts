import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const plansModule: CourseModule = {
  id: "m6",
  slug: "plans",
  order: 6,
  title: "Plans",
  shortTitle: "Plans",
  tagline: "What will be delivered, how, by whom, when and for how much.",
  description:
    "The plans practice in PRINCE2 7th edition explains how to plan around products, at the right level of detail for each audience. You'll plan the York shop from the project plan down to team plans, and see how the app's delivery approach shapes its plan.",
  scene: "planning",
  sessions: [
    {
      id: "plans/levels-of-plan",
      slug: "levels-of-plan",
      title: "Levels of plan",
      summary:
        "Why PRINCE2 uses project, stage and team plans, who each one is for and when an exception plan replaces one.",
      durationMinutes: 13,
      objectives: [
        "Name the levels of plan in PRINCE2",
        "Describe who uses each level and who approves it",
        "Explain the purpose of a plan",
      ],
      sections: [
        {
          id: "m6-s1-1",
          paragraphs: [
            "It's time to look at how PRINCE2 plans a project at different levels of detail.",
            "Let's say Sam brings one giant plan to the first board meeting. It's 400 lines long and includes \"order grout for staff toilet, Tuesday week 7\". You can't see whether the shop will open by 1 December.",
          ],
          scenario: {
            question: "What does each person need to see?",
            steps: [
              {
                title: "The board",
                body: "You need the big picture: the stages, the major products, the total cost and the opening date. That's the **project plan**.",
              },
              {
                title: "The project manager",
                body: "Sam needs enough detail to manage the current stage day to day. That's a **stage plan**, made just before each stage starts.",
              },
              {
                title: "The teams",
                body: "The site foreman needs the detailed task list for the building work, including the grout. That's a **team plan**.",
              },
              {
                title: "That's the idea",
                body: "PRINCE2 uses **levels of plan** so each audience gets the right amount of detail: the **project plan**, **stage plans** and optional **team plans**.",
              },
            ],
          },
        },
        {
          id: "m6-s1-2",
          heading: "What a plan is for",
          paragraphs: [
            "A plan describes **what** will be delivered, **how**, **by whom**, **when** and **for how much**. It's also the baseline the project is measured against.",
            "Without a plan, you can't tell whether the project is ahead or behind, or whether a problem matters. Planning also forces people to think things through before they spend money.",
          ],
        },
        {
          id: "m6-s1-3",
          heading: "The three levels",
          paragraphs: ["Each level has a different owner and audience:"],
          bullets: [
            "**Project plan**: an overview of the whole project, its stages, major products, costs and timeline. Created during initiation and approved by the **project board**",
            "**Stage plan**: the detail for one management stage, created near the end of the previous stage. Approved by the **project board**",
            "**Team plan**: optional detail for a work package, created by the **team manager**. Agreed with the project manager",
          ],
          callout: {
            tone: "tip",
            title: "Planning horizon",
            body: "It's hard to plan in detail very far ahead. That's why stage plans are written just before each stage starts, when the team knows much more.",
          },
        },
        {
          id: "m6-s1-4",
          heading: "Exception plans",
          paragraphs: [
            "When a stage or the project is forecast to go outside tolerance, the board may ask for an **exception plan**. It replaces the plan it's for and shows how the project will recover.",
            "When the damp pushes Stage 2's forecast to £45,000, Sam prepares a Stage 2 exception plan. The project board approves it. If the whole project were forecast to go outside its tolerances, the exception plan would replace the project plan and the **business layer** would approve it.",
          ],
          callout: {
            tone: "note",
            title: "Not for team plans",
            body: "There are **no exception plans for team plans**. If a work package goes outside tolerance, the project manager deals with it within the stage.",
          },
        },
        {
          id: "m6-s1-5",
          heading: "Plans are more than schedules",
          paragraphs: [
            "A PRINCE2 plan isn't just a Gantt chart. It includes the products, the activities, the resources, the costs, the tolerances, the assumptions and the risks.",
            "A one-page plan can be enough for a small project. The York project plan fits on four pages: a timeline, a stage list, a budget table and a list of key assumptions.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The levels are **project plan**, **stage plan** and **team plan** (optional). **Exception plans** replace a project or stage plan, never a team plan. The project board approves project and stage plans; the business layer approves a project-level exception plan.",
          },
        },
      ],
      keyPoints: [
        "A plan covers what, how, by whom, when and for how much.",
        "PRINCE2 has project plans, stage plans and optional team plans.",
        "Stage plans are produced near the end of the previous stage.",
        "Exception plans replace a project or stage plan, never a team plan.",
      ],
      knowledgeCheck: {
        id: "m6-s1-kc",
        question: "Which level of plan is optional in PRINCE2?",
        options: ["Project plan", "Stage plan", "Team plan", "Exception plan for a stage"],
        correctOption: 2,
        explanation:
          "Team plans are optional. They're produced by team managers when the work needs that level of detail.",
      },
      assessment: [
        {
          id: "m6-s1-a1",
          type: "single",
          prompt: "Who approves a stage plan?",
          options: [
            { id: "a", label: "The team manager" },
            { id: "b", label: "The project board" },
            { id: "c", label: "Project support" },
            { id: "d", label: "The senior supplier alone" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project board approves each stage plan when it authorises the stage.",
          topic: "Practices",
        },
        {
          id: "m6-s1-a2",
          type: "boolean",
          prompt: "An exception plan can be produced to replace a team plan.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Exception plans replace project or stage plans only.",
          topic: "Practices",
        },
        {
          id: "m6-s1-a3",
          type: "multiple",
          prompt: "Which TWO would you expect to find in a PRINCE2 plan?",
          options: [
            { id: "a", label: "The products to be delivered" },
            { id: "b", label: "Daily log entries" },
            { id: "c", label: "Costs and tolerances" },
            { id: "d", label: "Lessons from the end project report" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Plans include products, activities, resources, costs, tolerances, assumptions and risks.",
          topic: "Practices",
        },
        {
          id: "m6-s1-a4",
          type: "single",
          prompt: "Why are stage plans produced close to the start of each stage?",
          options: [
            { id: "a", label: "Because the board has no time earlier" },
            { id: "b", label: "Because detailed planning is only realistic over a short horizon" },
            { id: "c", label: "Because the project plan is created after them" },
            { id: "d", label: "Because team managers must approve them" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "It's hard to plan in detail far ahead. Planning each stage just before it starts uses the latest knowledge.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "plans/delivery-approaches",
      slug: "delivery-approaches",
      title: "Delivery approaches",
      summary:
        "How a linear, iterative or hybrid way of delivering products shapes the way a project is planned.",
      durationMinutes: 13,
      objectives: [
        "Describe linear-sequential and iterative-incremental delivery",
        "Recognise when a hybrid approach is useful",
        "Explain how the delivery approach affects planning",
      ],
      sections: [
        {
          id: "m6-s2-1",
          paragraphs: [
            "It's time to think about how the products will actually be built, because that shapes the plan.",
            "Let's say you're planning two things at once: the York shop and the pre-order app. Sam tries to plan them the same way, with every feature of the app designed up front, then built, then tested at the end.",
          ],
          scenario: {
            question: "Does one approach fit both?",
            steps: [
              {
                title: "The shop",
                body: "You can't fit the counter before the walls are plastered. The building work has to happen in a fixed order, and the design is clear before work starts.",
              },
              {
                title: "The app",
                body: "Nobody knows exactly what customers want from a pre-order app. Ana suggests building a simple version in 2 weeks, letting regulars try it and improving it each cycle.",
              },
              {
                title: "Different products, different approaches",
                body: "The shop suits a step-by-step approach. The app suits short cycles that deliver a working piece each time.",
              },
              {
                title: "That's the idea",
                body: "The **delivery approach** is how products are built. It can be **linear-sequential**, **iterative-incremental** or a **hybrid**. PRINCE2 7th edition works with any of them.",
              },
            ],
          },
        },
        {
          id: "m6-s2-2",
          heading: "Linear-sequential",
          paragraphs: [
            "In a **linear-sequential** approach, work moves through steps in order: design, build, test, hand over. Each step finishes before the next starts.",
            "It suits work where the requirements are clear and changes late on are expensive, like building and fitting out a shop.",
          ],
        },
        {
          id: "m6-s2-3",
          heading: "Iterative-incremental",
          paragraphs: [
            "In an **iterative-incremental** approach, products are built in small pieces over repeated cycles. Each cycle delivers something usable, and feedback shapes the next one.",
            "It suits work where requirements are uncertain or likely to change, like the pre-order app. Ana's team works in 2-week cycles, often called sprints, with a prioritised list of features.",
          ],
          callout: {
            tone: "tip",
            title: "Agile and PRINCE2",
            body: "Iterative-incremental delivery is often called agile. PRINCE2 provides the governance and management stages around it, while the team uses agile methods to build the products.",
          },
        },
        {
          id: "m6-s2-4",
          heading: "Hybrid approaches",
          paragraphs: [
            "Many projects mix approaches. A **hybrid** approach uses linear-sequential for some products and iterative-incremental for others.",
            "If you combined York and the app into one project, the building work would be linear, the app would be iterative, and a single project plan would show how both come together for opening day.",
          ],
        },
        {
          id: "m6-s2-5",
          heading: "How it affects the plan",
          paragraphs: ["The delivery approach changes several planning choices:"],
          bullets: [
            "**Stage length**: iterative work often has stages made up of a set number of cycles",
            "**Detail**: linear plans list products in detail up front; iterative plans fix time and cost and let scope flex",
            "**Tolerances**: iterative work often has zero tolerance on time and cost, with tolerance on scope instead",
            "**Products**: iterative plans describe features at a high level and refine them each cycle",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "PRINCE2 7th edition works with **linear-sequential**, **iterative-incremental** and **hybrid** delivery approaches. The delivery approach is chosen during starting up and initiation, and it shapes how plans, stages and tolerances are set.",
          },
        },
      ],
      keyPoints: [
        "The delivery approach describes how products are built.",
        "Linear-sequential suits clear, fixed requirements; iterative-incremental suits uncertain ones.",
        "Hybrid approaches mix both within one project.",
        "The delivery approach shapes stage length, detail and tolerances.",
      ],
      knowledgeCheck: {
        id: "m6-s2-kc",
        question:
          "Which delivery approach best suits the pre-order app, where customer needs are uncertain?",
        options: ["Linear-sequential", "Iterative-incremental", "Neither, PRINCE2 can't manage it", "Only a team plan"],
        correctOption: 1,
        explanation:
          "Iterative-incremental delivery builds in small cycles and uses feedback, which suits uncertain requirements.",
      },
      assessment: [
        {
          id: "m6-s2-a1",
          type: "single",
          prompt: "What is a feature of linear-sequential delivery?",
          options: [
            { id: "a", label: "Each step finishes before the next starts" },
            { id: "b", label: "Every cycle delivers a usable increment" },
            { id: "c", label: "Scope always flexes while time is fixed" },
            { id: "d", label: "Requirements are expected to change constantly" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Linear-sequential work moves through steps in order, with each one completed before the next begins.",
          topic: "Practices",
        },
        {
          id: "m6-s2-a2",
          type: "boolean",
          prompt: "PRINCE2 7th edition can be used with iterative-incremental delivery.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "PRINCE2 provides the project management around any delivery approach, including agile ones.",
          topic: "Practices",
        },
        {
          id: "m6-s2-a3",
          type: "single",
          prompt: "A project uses linear delivery for its building work and iterative delivery for its app. What is this called?",
          options: [
            { id: "a", label: "A programme" },
            { id: "b", label: "An exception" },
            { id: "c", label: "A hybrid approach" },
            { id: "d", label: "A team plan" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Mixing linear and iterative delivery within one project is a hybrid approach.",
          topic: "Practices",
        },
        {
          id: "m6-s2-a4",
          type: "multiple",
          prompt: "Which TWO are common in iterative-incremental planning?",
          options: [
            { id: "a", label: "Fixing time and cost and allowing scope to flex" },
            { id: "b", label: "Describing every feature in full detail before work begins" },
            { id: "c", label: "Refining features at the start of each cycle" },
            { id: "d", label: "Removing the need for a business case" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Iterative plans often fix time and cost, flex scope and refine features cycle by cycle.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "plans/management-stages",
      slug: "management-stages",
      title: "Management stages",
      summary:
        "How to divide a project into management stages, and how they differ from the technical work inside them.",
      durationMinutes: 13,
      objectives: [
        "Explain why projects are divided into management stages",
        "Decide on the number and length of stages",
        "Distinguish management stages from delivery steps",
      ],
      sections: [
        {
          id: "m6-s3-1",
          paragraphs: [
            "It's time to decide where the York project's decision points should be.",
            "Let's say Sam proposes two stages: initiation, then \"everything else\" for six months. Ruth is worried. \"So the board approves £80,000 in one go and doesn't formally look again until it's open?\"",
          ],
          scenario: {
            question: "Where should the board step in?",
            steps: [
              {
                title: "Look for big decisions",
                body: "After the building work, you'll know whether the damp has been fixed and what's left in the budget. That's a natural point to decide whether to fit out.",
              },
              {
                title: "Match the risk",
                body: "The building work is the riskiest part. A stage that ends when it finishes means the board reviews the project before committing the fit-out money.",
              },
              {
                title: "Agree the stages",
                body: "Sam proposes three: **Stage 1** initiation (£5,000), **Stage 2** building works (£40,000), **Stage 3** fit-out and opening (£32,000).",
              },
              {
                title: "That's the idea",
                body: "**Management stages** are sections of the project the board authorises one at a time. At the end of each, the board decides whether to continue.",
              },
            ],
          },
        },
        {
          id: "m6-s3-2",
          heading: "Why use stages",
          paragraphs: ["Management stages give the board:"],
          bullets: [
            "**Review and decision points**, to check the business case is still valid",
            "**Control**, by authorising one stage at a time",
            "**Planning horizons**, so detailed plans cover only what can be planned well",
            "**A way to scale risk**, using shorter stages where things are riskier",
          ],
        },
        {
          id: "m6-s3-3",
          heading: "How many stages",
          paragraphs: [
            "Every PRINCE2 project has **at least two management stages**: the **initiation stage** and at least one more stage that delivers products.",
            "Beyond that, it depends. Shorter stages give more control but mean more board decisions. Longer ones give the project manager more freedom. Think about the risk, the planning horizon, the board's availability and natural decision points.",
          ],
          callout: {
            tone: "tip",
            title: "Stages for the app",
            body: "For the app, Sam might make each management stage three 2-week cycles. The board reviews progress every six weeks and decides whether to keep investing.",
          },
        },
        {
          id: "m6-s3-4",
          heading: "Management stages vs delivery steps",
          paragraphs: [
            "Management stages are about decisions: they don't overlap, and each ends with a board review. Delivery steps are about technical work: design, build, test. These steps can overlap stages.",
            "The shopfitting design starts in Stage 2 while the builders are still on site, so it's ready in time. That's fine. The **management stage** boundary is still the board's review after the building works.",
          ],
        },
        {
          id: "m6-s3-5",
          heading: "Planning the stage boundary",
          paragraphs: [
            "Near the end of each stage, the project manager prepares for the boundary. Sam reports on the current stage, updates the business case and project plan, and drafts the next stage plan.",
            "The board then reviews everything and decides whether to authorise the next stage. You'll see this in detail with the managing a stage boundary process.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Every project has **at least two management stages**, including **initiation**. Management stages **don't overlap**, but delivery steps can cross stage boundaries. The board **authorises one stage at a time**.",
          },
        },
      ],
      keyPoints: [
        "Management stages are sections of the project authorised one at a time.",
        "Every project has at least two: initiation and at least one delivery stage.",
        "Stage length balances control, risk and the planning horizon.",
        "Management stages don't overlap; delivery work can cross stage boundaries.",
      ],
      knowledgeCheck: {
        id: "m6-s3-kc",
        question: "What is the minimum number of management stages in a PRINCE2 project?",
        options: ["One", "Two", "Three", "Four"],
        correctOption: 1,
        explanation:
          "Every project has at least the initiation stage and one further stage that delivers products.",
      },
      assessment: [
        {
          id: "m6-s3-a1",
          type: "boolean",
          prompt: "Management stages can overlap.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Management stages follow one another without overlap. Delivery work, however, can cross stage boundaries.",
          topic: "Practices",
        },
        {
          id: "m6-s3-a2",
          type: "single",
          prompt: "Which is a good reason to end a stage after the York building works?",
          options: [
            { id: "a", label: "It's the board's preferred day for meetings" },
            { id: "b", label: "It's a natural decision point before committing the fit-out money" },
            { id: "c", label: "PRINCE2 requires every stage to last three months" },
            { id: "d", label: "The team manager wants a holiday" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Stage boundaries work best at natural decision points, especially after high-risk work.",
          topic: "Practices",
        },
        {
          id: "m6-s3-a3",
          type: "multiple",
          prompt: "Which TWO are benefits of using management stages?",
          options: [
            { id: "a", label: "Review and decision points for the board" },
            { id: "b", label: "Removing the need for tolerances" },
            { id: "c", label: "Planning in detail only as far ahead as is sensible" },
            { id: "d", label: "Letting suppliers approve the business case" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Stages provide decision points and sensible planning horizons.",
          topic: "Practices",
        },
        {
          id: "m6-s3-a4",
          type: "single",
          prompt: "What is the effect of using shorter management stages?",
          options: [
            { id: "a", label: "Less board control" },
            { id: "b", label: "More board control, with more frequent decisions" },
            { id: "c", label: "No need for stage plans" },
            { id: "d", label: "No need for an initiation stage" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Shorter stages give the board more control at the cost of more frequent reviews.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "plans/product-based-planning",
      slug: "product-based-planning",
      title: "Product-based planning",
      summary:
        "How PRINCE2 starts every plan with the products, using a product breakdown structure, product descriptions and a product flow diagram.",
      durationMinutes: 15,
      objectives: [
        "Describe the steps in PRINCE2 planning",
        "Explain the purpose of the project product description",
        "Describe the product breakdown structure, product descriptions and product flow diagram",
      ],
      sections: [
        {
          id: "m6-s4-1",
          paragraphs: [
            "It's time to plan the York shop the PRINCE2 way, starting with the products, not the tasks.",
            "Let's say the first draft of Sam's plan lists 120 activities. Then Priya asks, \"Where's the menu board?\" It's not there. No activity mentioned it, so nobody planned it.",
          ],
          scenario: {
            question: "How do you make sure nothing is missed?",
            steps: [
              {
                title: "Start with the end product",
                body: "Describe the final product: an open, working York shop. Then ask what it's made of.",
              },
              {
                title: "Break it down",
                body: "The shop breaks into the building works, the fit-out, the equipment, the signage, the staff and the opening launch. Each breaks down further. The menu board appears under signage.",
              },
              {
                title: "Then work out the order",
                body: "You can't hang the menu board until the walls are painted. Once you know the products and their order, the activities follow naturally.",
              },
              {
                title: "That's the idea",
                body: "PRINCE2 uses **product-based planning**. You identify and describe the **products** first, then work out the activities, resources and schedule to deliver them.",
              },
            ],
          },
        },
        {
          id: "m6-s4-2",
          heading: "The planning steps",
          paragraphs: ["PRINCE2 7th edition planning follows these steps:"],
          bullets: [
            "**Define and analyse the products**",
            "**Organise the work packages**",
            "**Prepare estimates**",
            "**Prepare the schedule**",
            "**Prepare the budget**, including any risk budget, change budget and tolerances",
            "**Analyse the risks** in the plan",
            "**Document the plan**",
          ],
          callout: {
            tone: "note",
            title: "Not strictly in order",
            body: "These steps overlap and repeat. Analysing risks, for example, might mean going back and changing the schedule.",
          },
        },
        {
          id: "m6-s4-3",
          heading: "The project product description",
          paragraphs: [
            "The first product to describe is the final one. The **project product description** describes what the project must deliver to be accepted. It's created in **starting up a project**.",
            "For York, it covers the purpose of the shop, its main parts, the customer's quality expectations, the acceptance criteria (like \"chiller holds 1–5°C\" and \"counter height 95cm\") and who accepts it.",
          ],
        },
        {
          id: "m6-s4-4",
          heading: "Breaking down the products",
          paragraphs: ["Three techniques help define the products:"],
          bullets: [
            "**Product breakdown structure**: a hierarchy of every product the project needs, from the final product down to its parts",
            "**Product descriptions**: a description for each significant product, covering its purpose, composition, quality specifications and who checks it",
            "**Product flow diagram**: shows the order in which products are created and how they depend on each other",
          ],
          callout: {
            tone: "tip",
            title: "Include the hidden products",
            body: "Don't forget products you won't see in the finished shop, like the building permit, the food hygiene inspection and the staff rota. They need time and money too.",
          },
        },
        {
          id: "m6-s4-5",
          heading: "From products to a plan",
          paragraphs: [
            "Once the products are clear, Sam groups them into **work packages** for each team. Then come the estimates, the schedule and the budget.",
            "The York budget comes out at £85,000: £77,000 across the three stages, a £5,000 risk budget and a £3,000 change budget. Then Sam analyses the plan's risks and writes it up for the board.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "PRINCE2 is **product-based**: products first, then activities. The **project product description** is created in **starting up a project**. Techniques include the **product breakdown structure**, **product descriptions** and **product flow diagram**.",
          },
        },
      ],
      keyPoints: [
        "PRINCE2 plans start by defining and analysing products, then the activities.",
        "The project product description describes the final product and its acceptance criteria.",
        "A product breakdown structure, product descriptions and product flow diagram define the products.",
        "The budget includes stage costs plus any risk budget and change budget.",
      ],
      knowledgeCheck: {
        id: "m6-s4-kc",
        question: "Which technique shows the order in which products are created?",
        options: [
          "Product breakdown structure",
          "Product flow diagram",
          "Project product description",
          "Lessons log",
        ],
        correctOption: 1,
        explanation:
          "A product flow diagram shows the sequence and dependencies between products.",
      },
      assessment: [
        {
          id: "m6-s4-a1",
          type: "single",
          prompt: "In which process is the project product description created?",
          options: [
            { id: "a", label: "Starting up a project" },
            { id: "b", label: "Managing product delivery" },
            { id: "c", label: "Closing a project" },
            { id: "d", label: "Controlling a stage" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The project product description is created in starting up a project, as part of the project brief.",
          topic: "Practices",
        },
        {
          id: "m6-s4-a2",
          type: "boolean",
          prompt: "In PRINCE2, activities are identified before the products.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "PRINCE2 planning is product-based. Products are identified first; activities follow.",
          topic: "Practices",
        },
        {
          id: "m6-s4-a3",
          type: "multiple",
          prompt: "Which TWO would you expect in a product description?",
          options: [
            { id: "a", label: "The product's purpose" },
            { id: "b", label: "The board's meeting schedule" },
            { id: "c", label: "The quality specifications" },
            { id: "d", label: "The lessons from previous projects" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Product descriptions include purpose, composition, quality specifications and who checks the product.",
          topic: "Practices",
        },
        {
          id: "m6-s4-a4",
          type: "single",
          prompt: "Which planning step comes first?",
          options: [
            { id: "a", label: "Prepare the schedule" },
            { id: "b", label: "Prepare the budget" },
            { id: "c", label: "Define and analyse the products" },
            { id: "d", label: "Document the plan" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Planning starts with defining and analysing the products.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "plans/estimating-and-prioritising",
      slug: "estimating-and-prioritising",
      title: "Estimating and prioritising",
      summary:
        "Techniques for estimating effort and cost, and for prioritising what to deliver when time or money is tight.",
      durationMinutes: 14,
      objectives: [
        "Describe common estimating techniques",
        "Explain how prioritisation supports planning",
        "Apply MoSCoW prioritisation",
      ],
      sections: [
        {
          id: "m6-s5-1",
          paragraphs: [
            "It's time to put numbers on the plan and decide what matters most.",
            "Let's say Sam needs a cost for the fit-out before Oakline has quoted. Kit is busy and can't price it for three weeks, but the board wants a stage 3 estimate now.",
          ],
          scenario: {
            question: "How can Sam estimate without the final quote?",
            steps: [
              {
                title: "Compare",
                body: "The Leeds shop fit-out cost £26,000 five years ago. York is a bit bigger and prices have risen. That gives a starting point of about £30,000.",
              },
              {
                title: "Use a rate",
                body: "Kit mentions Oakline usually charges around £350 per square metre for a café fit-out. York is 90 square metres, so about £31,500.",
              },
              {
                title: "Ask the experts",
                body: "Sam asks Kit, Dev and Priya for their own estimates separately, then talks through the differences. The group settles on £32,000.",
              },
              {
                title: "That's the idea",
                body: "PRINCE2 7th edition describes several **estimating techniques**. Using more than one and comparing the results gives a more reliable estimate.",
              },
            ],
          },
        },
        {
          id: "m6-s5-2",
          heading: "Estimating techniques",
          paragraphs: ["Common estimating techniques include:"],
          bullets: [
            "**Top-down**: estimate the whole, then split it across the parts",
            "**Bottom-up**: estimate each part, then add them up",
            "**Comparative**: use similar past projects, like the Leeds fit-out",
            "**Parametric**: use a known rate, like cost per square metre",
            "**Data analytics**: use data from past projects to predict effort and cost",
            "**Expert judgement**: ask experienced people, sometimes using structured methods like Delphi or planning poker",
          ],
        },
        {
          id: "m6-s5-3",
          heading: "Why prioritise",
          paragraphs: [
            "Plans rarely have room for everything everyone wants. Prioritising tells the team what to deliver first, and what to drop if time or money runs short.",
            "This is especially important with iterative delivery. Ana's team delivers the most important app features first, so even if the project stopped early, the app would still be useful.",
          ],
        },
        {
          id: "m6-s5-4",
          heading: "MoSCoW",
          paragraphs: [
            "**MoSCoW** is a popular prioritisation technique. Here's how Priya ranks features for the pre-order app:",
          ],
          bullets: [
            "**Must have**: order and pay for collection at York",
            "**Should have**: save favourite orders",
            "**Could have**: loyalty stamps",
            "**Won't have this time**: home delivery",
          ],
          callout: {
            tone: "tip",
            title: "Other techniques",
            body: "PRINCE2 7th edition also mentions keeping a prioritised **backlog**, **pairwise** comparison and the **Kano** model, which looks at which features delight customers.",
          },
        },
        {
          id: "m6-s5-5",
          heading: "Estimates and tolerances",
          paragraphs: [
            "Estimates are never exact. That's one reason plans include **tolerances**. The board sets Stage 2 at £40,000 ±£3,000, which allows for estimates that are a little high or low without the board stepping in.",
            "When an estimate turns out to be badly wrong, like the damp adding £5,000, the forecast goes outside tolerance and an exception plan may be needed.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Estimating techniques include **top-down**, **bottom-up**, **comparative**, **parametric**, **data analytics** and **expert judgement**. Prioritisation techniques include **MoSCoW**. Tolerances allow for normal estimating uncertainty.",
          },
        },
      ],
      keyPoints: [
        "Use more than one estimating technique and compare the results.",
        "Techniques include top-down, bottom-up, comparative, parametric, data analytics and expert judgement.",
        "Prioritisation tells the team what to deliver first and what to drop.",
        "MoSCoW ranks features as must, should, could and won't have this time.",
      ],
      knowledgeCheck: {
        id: "m6-s5-kc",
        question:
          "Sam estimates the fit-out at £350 per square metre for a 90 square metre shop. Which technique is this?",
        options: ["Top-down", "Parametric", "Bottom-up", "Delphi"],
        correctOption: 1,
        explanation:
          "Parametric estimating uses a known rate, like cost per square metre, to calculate an estimate.",
      },
      assessment: [
        {
          id: "m6-s5-a1",
          type: "single",
          prompt: "What does the M in MoSCoW stand for?",
          options: [
            { id: "a", label: "Maybe" },
            { id: "b", label: "Must have" },
            { id: "c", label: "Measured" },
            { id: "d", label: "Milestone" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "MoSCoW stands for must have, should have, could have and won't have this time.",
          topic: "Practices",
        },
        {
          id: "m6-s5-a2",
          type: "single",
          prompt: "Which technique estimates each part separately, then adds them up?",
          options: [
            { id: "a", label: "Top-down" },
            { id: "b", label: "Comparative" },
            { id: "c", label: "Bottom-up" },
            { id: "d", label: "Parametric" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Bottom-up estimating builds the total from estimates of each part.",
          topic: "Practices",
        },
        {
          id: "m6-s5-a3",
          type: "boolean",
          prompt: "Using more than one estimating technique can make an estimate more reliable.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Comparing results from different techniques helps spot errors and builds confidence.",
          topic: "Practices",
        },
        {
          id: "m6-s5-a4",
          type: "multiple",
          prompt: "Which TWO are forms of expert judgement?",
          options: [
            { id: "a", label: "Delphi" },
            { id: "b", label: "Product flow diagram" },
            { id: "c", label: "Planning poker" },
            { id: "d", label: "Product breakdown structure" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Delphi and planning poker are structured ways of gathering expert judgement.",
          topic: "Practices",
        },
      ],
    },
  ],
};
