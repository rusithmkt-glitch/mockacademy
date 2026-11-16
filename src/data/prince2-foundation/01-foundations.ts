import type { CourseModule } from "../types";

export const foundationsModule: CourseModule = {
  id: "m1",
  slug: "foundations",
  order: 1,
  title: "Foundations of PRINCE2 7th edition",
  shortTitle: "Foundations",
  tagline: "What a project is, what PRINCE2 does, and the five elements that make up the method.",
  description:
    "Meet Fern & Flour, the Leeds bakery opening a second shop in York. You'll use its project to learn what PRINCE2 7th edition is for, what makes work a project, the seven performance targets and the five integrated elements.",
  scene: "foundations",
  sessions: [
    {
      id: "foundations/what-is-prince2",
      slug: "what-is-prince2",
      title: "What is PRINCE2?",
      summary:
        "Meet Fern & Flour, see why projects need a method, and find out what PRINCE2 7th edition does and doesn't do.",
      durationMinutes: 12,
      objectives: [
        "Explain what PRINCE2 is and why organisations use it",
        "Separate project management from the specialist work it controls",
        "Recognise the main changes in PRINCE2 7th edition",
      ],
      sections: [
        {
          id: "m1-s1-1",
          paragraphs: [
            "It's time to look at why projects need a method at all.",
            "Let's say you own **Fern & Flour**, a busy bakery in Leeds. Customers keep asking when you'll open in York, and you've finally found an empty shop near the station. You have savings set aside, a builder a friend recommended, and one goal: open before the Christmas rush.",
          ],
          scenario: {
            question: "What could go wrong?",
            steps: [
              {
                title: "Week 3",
                body: "The builder finds damp in the back wall. Fixing it adds £6,000 and two weeks. *Who gets to decide?*",
              },
              {
                title: "Week 5",
                body: "Your head baker asks for a bigger oven. *Is that part of the job, or a new one?*",
              },
              {
                title: "Week 8",
                body: "Costs are 15% over. *Is opening in York still worth it?*",
              },
              {
                title: "What these have in common",
                body: "None of these are baking problems. They're **project** problems: who decides, what's being delivered, and whether it's still worth doing. That's exactly what PRINCE2 helps you manage.",
              },
            ],
          },
        },
        {
          id: "m1-s1-2",
          heading: "So what is PRINCE2?",
          paragraphs: [
            "PRINCE2 (PRojects IN Controlled Environments) is a method for managing projects. It gives everyone involved a shared way of working: who makes which decisions, how work is planned and checked, and what happens when things drift off course.",
            "It's deliberately generic. The same method that could guide your York shop could guide a hospital moving to a new booking system or a council building a bridge. What changes from project to project is how much of the method you use, and how formally you use it.",
          ],
        },
        {
          id: "m1-s1-3",
          heading: "Running the project, not doing the work",
          paragraphs: [
            "PRINCE2 won't teach you to bake bread, treat damp or fit a shop counter. That's **specialist work**: the hands-on skills that create what the project delivers.",
            "PRINCE2 covers the **management** of the project: planning the work, handing parts of it to the right people, keeping an eye on progress, and stepping in when something drifts. It sits around the specialist work and keeps it under control.",
          ],
          bullets: [
            "**Specialist work** at Fern & Flour: treating the damp wall, wiring the ovens, designing the shopfront, baking test batches",
            "**Project management** at Fern & Flour: agreeing the budget, scheduling the builder, checking the work meets the standard, deciding what to do about the £6,000 surprise",
          ],
        },
        {
          id: "m1-s1-4",
          heading: "Why organisations use it",
          paragraphs: [
            "You could open the York shop without a method. Plenty of people do. But when money, deadlines and several people are involved, a shared approach saves a lot of arguments.",
          ],
          bullets: [
            "**A common language**: everyone means the same thing by \"stage\", \"risk\" or \"tolerance\"",
            "**Clear accountability**: there's no doubt about who decides on the damp wall",
            "**Decisions at the right level**: small problems are fixed quickly, big ones go to the people who own the money",
            "**A constant check on value**: the project only continues while it's still worth doing",
            "**Lessons carried forward**: what you learn in York makes the next shop easier",
            "**It scales**: the same method works for a bakery or a multinational",
          ],
        },
        {
          id: "m1-s1-5",
          heading: "What's new in PRINCE2 7th edition",
          paragraphs: [
            "PRINCE2 7th edition was released in 2023. The seven principles survived intact, but several parts of the method were reshaped to reflect how projects are run today.",
          ],
          bullets: [
            "**People** became one of the method's core elements, recognising that projects succeed or fail through the people involved",
            "**Project context** became an element too, so adapting the method to each situation is built in",
            "The old \"themes\" are now called **practices**",
            "The old \"strategies\" are now called **management approaches**, with new ones for commercial, digital and data, and sustainability management",
            "**Sustainability** joined the list of performance targets every project is measured against",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Since January 2026 the exam has been called **PRINCE2 Project Management (Version 7)**. If you're using older study materials, watch out for 6th edition terms such as \"themes\" and \"strategies\". The exam uses 7th edition language throughout.",
          },
        },
      ],
      keyPoints: [
        "PRINCE2 is a method for managing projects of any size, in any sector.",
        "It manages and controls the project. It doesn't do the specialist work.",
        "PRINCE2 7th edition makes people and project context core elements of the method.",
        "Themes are now called practices, and strategies are now called management approaches.",
      ],
      knowledgeCheck: {
        id: "m1-s1-kc",
        question:
          "Your head baker is perfecting the sourdough recipe for the York shop. In PRINCE2 terms, what kind of work is this?",
        options: [
          "Project management",
          "Specialist work",
          "Project assurance",
          "Tailoring",
        ],
        correctOption: 1,
        explanation:
          "Perfecting a recipe is hands-on work that creates something the project delivers, so it's specialist work. PRINCE2 manages that work but doesn't tell you how to do it.",
      },
      assessment: [
        {
          id: "m1-s1-a1",
          type: "single",
          prompt: "Which statement best describes PRINCE2?",
          options: [
            { id: "a", label: "A method for managing projects that can be adapted to any project" },
            { id: "b", label: "A set of techniques for doing specialist work" },
            { id: "c", label: "A software tool for scheduling tasks" },
            { id: "d", label: "A method designed only for large IT projects" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "PRINCE2 is a generic method for managing projects. It can be adapted to any size, sector or type of project, and it doesn't cover specialist techniques.",
          topic: "Foundations",
        },
        {
          id: "m1-s1-a2",
          type: "boolean",
          prompt: "PRINCE2 tells your builder how to treat a damp wall.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "Treating damp is specialist work. PRINCE2 helps you decide whether to approve the extra cost and time, but not how the repair is done.",
          topic: "Foundations",
        },
        {
          id: "m1-s1-a3",
          type: "multiple",
          prompt: "Which of these are changes introduced in PRINCE2 7th edition? Select all that apply.",
          options: [
            { id: "a", label: "Themes are now called practices" },
            { id: "b", label: "Strategies are now called management approaches" },
            { id: "c", label: "The principles were removed" },
            { id: "d", label: "Sustainability became a performance target" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "The 7th edition renamed themes as practices and strategies as management approaches, and added sustainability as a performance target. The seven principles remain.",
          topic: "Foundations",
        },
        {
          id: "m1-s1-a4",
          type: "single",
          prompt:
            "The builder reports that fixing the damp wall will add £6,000. Which of these is project management rather than specialist work?",
          options: [
            { id: "a", label: "Removing the damaged plaster" },
            { id: "b", label: "Deciding whether the extra cost is still worth it" },
            { id: "c", label: "Choosing the right damp-proof membrane" },
            { id: "d", label: "Baking a test batch in the new oven" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Deciding whether to approve extra cost is a management decision about the project. The other options are hands-on specialist tasks.",
          topic: "Foundations",
        },
      ],
    },
    {
      id: "foundations/what-makes-a-project",
      slug: "what-makes-a-project",
      title: "What makes a project?",
      summary:
        "Tell a project apart from business as usual using five characteristics, and learn the key words in how PRINCE2 describes a project.",
      durationMinutes: 13,
      objectives: [
        "Distinguish a project from business as usual",
        "Name and recognise the five characteristics of a project",
        "Explain the key words in how PRINCE2 describes a project",
      ],
      sections: [
        {
          id: "m1-s2-1",
          paragraphs: [
            "It's time to work out what is, and isn't, a project.",
            "Let's say it's Monday morning at the Leeds shop. You have three things on your list: order this week's flour, set up the rota for the new Saturday assistant, and get the York shop open by 1 December.",
          ],
          scenario: {
            question: "Which of these is a project?",
            steps: [
              {
                title: "Ordering flour",
                body: "You do it every week, the same way, with the same supplier. It's routine. This is **business as usual**.",
              },
              {
                title: "The Saturday rota",
                body: "It's a small change, but it's part of running the shop day to day. Your normal way of working handles it. Still **business as usual**.",
              },
              {
                title: "Opening in York",
                body: "You've never done it before. It has a deadline, needs builders, bakers and your accountant to work together, and could go wrong in a dozen ways. This is a **project**.",
              },
              {
                title: "It's not about size",
                body: "A project isn't just a big task. It's work that creates change, has a clear end, and needs a temporary team to deliver it.",
              },
            ],
          },
        },
        {
          id: "m1-s2-2",
          heading: "Business as usual",
          paragraphs: [
            "**Business as usual** is the ongoing work that keeps an organisation running: baking, serving, cleaning, ordering, paying staff. It's repeatable, and it's managed by the people who run the business day to day.",
            "Projects exist to **change** business as usual. Once the York shop opens, running it becomes part of business as usual too. Part of every project's job is to hand over what it delivers so the business can use it.",
          ],
        },
        {
          id: "m1-s2-3",
          heading: "The five characteristics of a project",
          paragraphs: [
            "So how do you spot a project? Look for five tell-tale characteristics. Here's how each one shows up in the York shop:",
          ],
          bullets: [
            "**Change**: it creates something new for the business, a second shop and a new way of trading",
            "**Temporary**: the project team disbands once the shop opens and is handed over",
            "**Cross-functional**: builders, bakers, a shopfitter and your accountant must work together, each bringing different skills",
            "**Unique**: you've never opened in York before, so even with experience, this one is different",
            "**Uncertainty**: damp walls, late deliveries and price rises can all happen, and you can't know for sure in advance",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Questions often describe a situation and ask which characteristic it shows. People from different teams working together points to **cross-functional**. Not knowing whether the builder will finish on time points to **uncertainty**.",
          },
        },
        {
          id: "m1-s2-4",
          heading: "How PRINCE2 describes a project",
          paragraphs: [
            "PRINCE2 has a precise way of describing a project. Rather than memorise a sentence, learn the three key words it's built on:",
          ],
          bullets: [
            "**Temporary organisation**: a project is a team of people brought together for a limited time, with its own roles and decision-making, then disbanded",
            "**Products**: the project exists to deliver one or more things the business needs, such as the fitted shop, the trained staff and the opening-day stock",
            "**Business case**: there must be an agreed reason that makes it worth doing, and that reason is checked throughout",
          ],
        },
        {
          id: "m1-s2-5",
          heading: "Outputs, outcomes and benefits",
          paragraphs: [
            "Projects deliver products, but nobody wants a shop for its own sake. PRINCE2 separates three ideas you'll meet again in the business case practice:",
          ],
          bullets: [
            "**Output**: what the project produces. The fitted York shop.",
            "**Outcome**: the change that results from using it. Customers in York buying your bread every day.",
            "**Benefit**: the measurable improvement that makes it worthwhile. An extra £4,000 of sales a week.",
          ],
          callout: {
            tone: "tip",
            title: "A quick way to remember",
            body: "The output is what you **build**, the outcome is what **changes**, and the benefit is what you **gain**.",
          },
        },
      ],
      keyPoints: [
        "Business as usual is ongoing and repeatable. Projects change it.",
        "Projects show five characteristics: change, temporary, cross-functional, unique and uncertainty.",
        "PRINCE2 describes a project using three key ideas: a temporary organisation, products and a business case.",
        "Outputs are what you build, outcomes are what changes, and benefits are what you gain.",
      ],
      knowledgeCheck: {
        id: "m1-s2-kc",
        question:
          "The York project brings together a builder, a shopfitter, your head baker and your accountant. Which characteristic of a project does this show?",
        options: ["Unique", "Temporary", "Cross-functional", "Uncertainty"],
        correctOption: 2,
        explanation:
          "People with different skills, usually from different teams or organisations, working together is what makes a project cross-functional.",
      },
      assessment: [
        {
          id: "m1-s2-a1",
          type: "multiple",
          prompt: "Which of these are characteristics of a project? Select all that apply.",
          options: [
            { id: "a", label: "Temporary" },
            { id: "b", label: "Repeatable" },
            { id: "c", label: "Unique" },
            { id: "d", label: "Uncertainty" },
          ],
          correctOptionIds: ["a", "c", "d"],
          explanation:
            "The five characteristics are change, temporary, cross-functional, unique and uncertainty. Repeatable work is business as usual.",
          topic: "Foundations",
        },
        {
          id: "m1-s2-a2",
          type: "single",
          prompt: "Which of these is most likely to be a project at Fern & Flour?",
          options: [
            { id: "a", label: "Baking 400 loaves every morning" },
            { id: "b", label: "Placing the weekly flour order" },
            { id: "c", label: "Launching an online pre-order service for the first time" },
            { id: "d", label: "Cleaning the ovens every Friday" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Launching a new service is a one-off change with a clear end, so it's a project. The other options are routine business as usual.",
          topic: "Foundations",
        },
        {
          id: "m1-s2-a3",
          type: "boolean",
          prompt: "Once the York shop opens and is handed over, running it becomes business as usual.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "Projects change business as usual. After handover, day-to-day running of the new shop is ongoing work, not part of the project.",
          topic: "Foundations",
        },
        {
          id: "m1-s2-a4",
          type: "single",
          prompt: "Customers in York buying from the new shop every day is an example of what?",
          options: [
            { id: "a", label: "An output" },
            { id: "b", label: "An outcome" },
            { id: "c", label: "A benefit" },
            { id: "d", label: "A product description" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The fitted shop is the output. Customers using it is the outcome: the change that results. The extra sales it brings would be the benefit.",
          topic: "Foundations",
        },
      ],
    },
    {
      id: "foundations/performance-targets",
      slug: "performance-targets",
      title: "The seven performance targets",
      summary:
        "The seven things every PRINCE2 project is measured against, how they pull against each other, and how they lead to tolerances.",
      durationMinutes: 13,
      objectives: [
        "Name the seven performance targets",
        "Explain why the targets have to be balanced against each other",
        "Describe how a target becomes a tolerance",
      ],
      sections: [
        {
          id: "m1-s3-1",
          paragraphs: [
            "It's time to look at how you'll know whether the project is going well.",
            "Let's say your accountant sits you down a week before the builders start. \"You're about to spend most of your savings,\" she says. \"How will we know if the York project is on track?\"",
          ],
          scenario: {
            question: "What would you measure?",
            steps: [
              {
                title: "Money and the calendar",
                body: "Are we spending what we planned, £85,000? And will we open by 1 December? That's **cost** and **time**.",
              },
              {
                title: "What and how well",
                body: "Are we delivering everything we agreed, to the standard we agreed? That's **scope** and **quality**.",
              },
              {
                title: "The reason we're doing it",
                body: "Will the shop still bring in the extra sales we're counting on, and are the risks under control? That's **benefits** and **risk**.",
              },
              {
                title: "Our footprint",
                body: "Are we keeping our promises on energy and waste, like the electric ovens? That's **sustainability**.",
              },
              {
                title: "Seven measures",
                body: "That's seven things to keep an eye on. PRINCE2 calls them **performance targets**, and every project is measured against them.",
              },
            ],
          },
        },
        {
          id: "m1-s3-2",
          heading: "The seven performance targets",
          paragraphs: [
            "Every PRINCE2 project sets targets in the same seven areas. Here's what they look like for the York shop:",
          ],
          bullets: [
            "**Benefits**: York must add £4,000 of sales a week within a year of opening",
            "**Cost**: the fit-out budget is £85,000",
            "**Time**: the shop must open by 1 December, before the Christmas rush",
            "**Quality**: the kitchen must achieve a top food hygiene rating at its first inspection",
            "**Scope**: what's included (kitchen, counter, seating for 20) and what isn't (no delivery van)",
            "**Risk**: how much uncertainty you're willing to accept, for example no single threat that could cost more than £10,000",
            "**Sustainability**: all-electric ovens, and at least 90% of packaging recyclable",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Learn all seven: **benefits, cost, time, quality, scope, risk and sustainability**. Older study materials list six and leave out sustainability, which was added in the 7th edition.",
          },
        },
        {
          id: "m1-s3-3",
          heading: "Targets pull against each other",
          paragraphs: [
            "The targets are connected. Change one and the others move.",
            "If you want to open two weeks earlier, the builder may need to bring in a second team, so **cost** goes up. If Priya, your head baker, wants a bigger oven, **scope** grows and so may **time**. If you switch to cheaper packaging to save money, you may miss your **sustainability** target.",
            "That's why decisions on a project are trade-offs. Part of managing a project is making those trade-offs openly, with the right people involved, rather than letting them happen by accident.",
          ],
        },
        {
          id: "m1-s3-4",
          heading: "From targets to tolerances",
          paragraphs: [
            "A target on its own is a single number, and real projects rarely hit numbers exactly. So PRINCE2 lets you set a **tolerance** around each target: an allowed range above or below it.",
            "For example, cost might be \"£85,000, plus or minus £4,000\". As long as the forecast stays inside that range, Sam, your project manager, gets on with the job without asking you. If it's forecast to go outside, Sam must tell you straight away.",
          ],
          callout: {
            tone: "note",
            title: "Coming up",
            body: "This idea of acting freely inside agreed limits is called **manage by exception**. You'll meet it as a principle in the next module and see how it works in the progress practice.",
          },
        },
      ],
      keyPoints: [
        "Every project is measured against seven performance targets: benefits, cost, time, quality, scope, risk and sustainability.",
        "Sustainability was added as a performance target in the 7th edition.",
        "The targets are connected, so project decisions are trade-offs.",
        "A tolerance is an allowed range around a target, so people can act without constant approval.",
      ],
      knowledgeCheck: {
        id: "m1-s3-kc",
        question:
          "You decide the York shop must run on 100% renewable electricity. Which performance target is this?",
        options: ["Quality", "Scope", "Sustainability", "Benefits"],
        correctOption: 2,
        explanation:
          "Targets about environmental impact, such as energy use and waste, belong to sustainability, the performance target added in the 7th edition.",
      },
      assessment: [
        {
          id: "m1-s3-a1",
          type: "multiple",
          prompt: "Which of these are PRINCE2 performance targets? Select all that apply.",
          options: [
            { id: "a", label: "Benefits" },
            { id: "b", label: "Sustainability" },
            { id: "c", label: "Popularity" },
            { id: "d", label: "Scope" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "The seven performance targets are benefits, cost, time, quality, scope, risk and sustainability. Popularity isn't one of them.",
          topic: "Foundations",
        },
        {
          id: "m1-s3-a2",
          type: "single",
          prompt:
            "The York plan includes a kitchen, a counter and seating for 20, but not a delivery van. Which performance target does this describe?",
          options: [
            { id: "a", label: "Quality" },
            { id: "b", label: "Scope" },
            { id: "c", label: "Cost" },
            { id: "d", label: "Risk" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Scope defines what the project will and won't deliver. Quality is about the standard those things must meet.",
          topic: "Foundations",
        },
        {
          id: "m1-s3-a3",
          type: "boolean",
          prompt:
            "A tolerance is an allowed range around a target, inside which the project manager can carry on without asking for a decision.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "Tolerances give people room to work. Only a forecast breach of tolerance needs to be passed up for a decision.",
          topic: "Foundations",
        },
        {
          id: "m1-s3-a4",
          type: "single",
          prompt: "You ask the builder to finish two weeks early. Which target is most likely to be affected as a result?",
          options: [
            { id: "a", label: "Cost" },
            { id: "b", label: "Benefits" },
            { id: "c", label: "Sustainability" },
            { id: "d", label: "None. Targets are independent of each other." },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Finishing sooner usually means extra people or overtime, so cost rises. The targets are connected, which is why project decisions are trade-offs.",
          topic: "Foundations",
        },
      ],
    },
    {
      id: "foundations/five-integrated-elements",
      slug: "five-integrated-elements",
      title: "The five integrated elements",
      summary:
        "How principles, people, practices, processes and project context fit together into one method.",
      durationMinutes: 16,
      objectives: [
        "Name the five integrated elements of PRINCE2",
        "Explain what each element contributes",
        "Decide which element a given activity belongs to",
      ],
      sections: [
        {
          id: "m1-s4-1",
          paragraphs: [
            "It's time to see how the whole method fits together.",
            "Let's say you hire **Sam**, an experienced project manager, to run the York opening. On Sam's first morning, over coffee in the Leeds shop, Sam asks you five questions.",
          ],
          scenario: {
            question: "What is Sam really asking about?",
            steps: [
              {
                title: "\"What rules do we never break?\"",
                body: "Sam wants to know the non-negotiables, like only carrying on while the project is still worth it. These are the **principles**.",
              },
              {
                title: "\"Who's involved, and how will we work together?\"",
                body: "You, Priya, the builder, your staff and your customers. Getting the best from them is the **people** element.",
              },
              {
                title: "\"What do we need to keep track of throughout?\"",
                body: "The business case, the plan, quality, risks and so on. These are the **practices**.",
              },
              {
                title: "\"What happens, step by step, from now until opening day?\"",
                body: "The journey from idea to closure. These are the **processes**.",
              },
              {
                title: "\"What's special about this project?\"",
                body: "A small family bakery, a local builder, a fixed Christmas deadline. That's the **project context**, and it shapes how everything else is applied. Five questions, five integrated elements.",
              },
            ],
          },
        },
        {
          id: "m1-s4-2",
          heading: "Principles",
          paragraphs: [
            "The **principles** are the foundation of the method. There are seven, they apply to every PRINCE2 project, and they can't be left out. If a project isn't following all seven, it isn't really using PRINCE2.",
          ],
          bullets: [
            "Ensure continued business justification",
            "Learn from experience",
            "Define roles, responsibilities and relationships",
            "Manage by stages",
            "Manage by exception",
            "Focus on products",
            "Tailor to suit the project",
          ],
          callout: {
            tone: "note",
            title: "Coming up",
            body: "Module 2 gives each principle its own session.",
          },
        },
        {
          id: "m1-s4-3",
          heading: "People",
          paragraphs: [
            "Projects change things, and change happens through people. The **people** element covers leadership, building effective teams, working with stakeholders, communication, organisational culture and helping people adopt the change.",
            "In the 7th edition, people sit at the centre of the method. The best plan in the world won't open the York shop if your builder and your head baker aren't talking to each other.",
          ],
        },
        {
          id: "m1-s4-4",
          heading: "Practices",
          paragraphs: [
            "The **practices** are the aspects of project management you keep working on from start to finish. There are seven:",
          ],
          bullets: [
            "**Business case**: is the York shop still worth doing?",
            "**Organising**: who decides what, and who does what?",
            "**Plans**: what will be delivered, how, by whom and when?",
            "**Quality**: what standard must the shop meet, and how will you check it?",
            "**Risk**: what might happen, good or bad, and what will you do about it?",
            "**Issues**: what's happened that needs dealing with, including requests for change?",
            "**Progress**: where are you now, where are you heading, and should you carry on?",
          ],
        },
        {
          id: "m1-s4-5",
          heading: "Processes",
          paragraphs: [
            "The **processes** describe the journey through the project, from the first idea to closure. There are seven, and each has a clear purpose:",
          ],
          bullets: [
            "**Starting up a project**: is the idea of a York shop worth looking into properly?",
            "**Directing a project**: how you, as the person paying, make the key decisions throughout",
            "**Initiating a project**: building the detailed plan and the full business case",
            "**Controlling a stage**: Sam's day-to-day management of each stage",
            "**Managing product delivery**: the builder and other teams doing and handing over the work",
            "**Managing a stage boundary**: reviewing one stage and planning the next",
            "**Closing a project**: handing over the shop and confirming the project is complete",
          ],
        },
        {
          id: "m1-s4-6",
          heading: "Project context",
          paragraphs: [
            "The **project context** is the setting a project runs in: the organisation, its size and culture, the suppliers involved, the sector and its rules, and the way the work will be delivered.",
            "PRINCE2 expects you to apply the other four elements in a way that fits that context. A family bakery will run its project very differently from a supermarket chain, and both can still be doing PRINCE2 properly.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Expect questions asking which element something belongs to. **Universal obligations** are principles. **Things managed throughout** are practices. **Activities from start to finish** are processes. **Applying the method to suit the situation** is project context.",
          },
        },
      ],
      keyPoints: [
        "PRINCE2 has five integrated elements: principles, people, practices, processes and project context.",
        "The seven principles always apply and can't be left out.",
        "The seven practices are managed throughout the project. The seven processes describe its journey.",
        "Project context shapes how the other elements are applied.",
      ],
      knowledgeCheck: {
        id: "m1-s4-kc",
        question:
          "Sam is deciding how formally to run the York project, given that Fern & Flour is a small family business. Which element is Sam mainly thinking about?",
        options: ["Principles", "Processes", "Project context", "Practices"],
        correctOption: 2,
        explanation:
          "Adapting the method to the organisation, its size and its situation is about the project context.",
      },
      assessment: [
        {
          id: "m1-s4-a1",
          type: "single",
          prompt: "Which element of PRINCE2 describes the activities that take a project from its first idea to closure?",
          options: [
            { id: "a", label: "Principles" },
            { id: "b", label: "People" },
            { id: "c", label: "Practices" },
            { id: "d", label: "Processes" },
          ],
          correctOptionIds: ["d"],
          explanation:
            "Processes describe the journey through the project. Practices are the aspects that are managed continually along the way.",
          topic: "Foundations",
        },
        {
          id: "m1-s4-a2",
          type: "multiple",
          prompt: "Which of these are PRINCE2 practices? Select all that apply.",
          options: [
            { id: "a", label: "Organising" },
            { id: "b", label: "Issues" },
            { id: "c", label: "Closing a project" },
            { id: "d", label: "Quality" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "Organising, issues and quality are practices. Closing a project is one of the seven processes.",
          topic: "Foundations",
        },
        {
          id: "m1-s4-a3",
          type: "boolean",
          prompt: "On a small project, it's acceptable to leave out one or two of the PRINCE2 principles.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "All seven principles apply to every PRINCE2 project. You can adapt how practices and processes are used, but the principles can't be dropped.",
          topic: "Foundations",
        },
        {
          id: "m1-s4-a4",
          type: "single",
          prompt:
            "Priya and the builder keep disagreeing about the kitchen layout, and the work is slowing down. Which element is most concerned with this?",
          options: [
            { id: "a", label: "People" },
            { id: "b", label: "Processes" },
            { id: "c", label: "Project context" },
            { id: "d", label: "Principles" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "How team members work together, communicate and resolve conflict is the focus of the people element.",
          topic: "Foundations",
        },
      ],
    },
    {
      id: "foundations/project-context",
      slug: "project-context",
      title: "Project context",
      summary:
        "Why no two projects are run the same way, the factors that shape how PRINCE2 is applied, and the three delivery approaches.",
      durationMinutes: 15,
      objectives: [
        "Identify the factors that make up a project's context",
        "Explain what can and can't be tailored",
        "Describe linear-sequential, iterative-incremental and hybrid delivery",
      ],
      sections: [
        {
          id: "m1-s5-1",
          paragraphs: [
            "It's time to look at why no two projects are run the same way.",
            "Let's say a national supermarket chain is also opening a new store in York, the same autumn as you. Their project manager pops into your shop for a coffee and you get talking.",
          ],
          scenario: {
            question: "Would they run their project the same way as Fern & Flour?",
            steps: [
              {
                title: "Size",
                body: "Their budget is £3 million. Yours is £85,000. They have a team of thirty. You have Sam, Priya and a builder.",
              },
              {
                title: "Where the project sits",
                body: "Their store is one of 40 openings managed as part of a wider programme, reporting to a regional director. Yours stands alone, and you make the final call.",
              },
              {
                title: "Suppliers",
                body: "They have formal contracts with national firms and a procurement team. You have a quote from a local builder and a handshake.",
              },
              {
                title: "Same method, different setting",
                body: "Both projects can use PRINCE2 properly. They just apply it differently. That's what **project context** is about.",
              },
            ],
          },
        },
        {
          id: "m1-s5-2",
          heading: "What makes up the context",
          paragraphs: [
            "The project context is everything about a project's setting that affects how it should be managed. The main factors are:",
          ],
          bullets: [
            "**The organisation**: is the project standalone, or part of a larger programme or portfolio? Who commissions it and sets its direction?",
            "**Commercial relationships**: is the work done in-house, or by outside suppliers under contract?",
            "**Scale and complexity**: how big, how risky and how many moving parts?",
            "**Sector and regulation**: rules that must be followed, such as food hygiene and building regulations",
            "**People and culture**: how decisions are usually made, and how people are used to working",
            "**Sustainability**: the environmental and social commitments the organisation has made",
            "**The delivery approach**: how the specialist work will be carried out (more on this below)",
          ],
        },
        {
          id: "m1-s5-3",
          heading: "Tailoring: adapting, not dropping",
          paragraphs: [
            "Because every context is different, PRINCE2 expects you to **tailor** it: to adapt the method so it fits. Tailoring is so important that it's one of the seven principles.",
            "At Fern & Flour, tailoring might look like this:",
          ],
          bullets: [
            "Sam's progress updates are a short weekly email, not a formal report",
            "The decision-making group is three people meeting monthly in the Leeds shop",
            "Risks are tracked in a shared spreadsheet",
            "Some processes run together, because the project is small",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Tailoring changes **how** the method is applied: processes, practices, roles, reports and terms. It never removes the principles. An answer that drops a principle is always wrong.",
          },
        },
        {
          id: "m1-s5-4",
          heading: "Three delivery approaches",
          paragraphs: [
            "Later in the course, Fern & Flour takes on a second project: an **online pre-order app**, so regulars can order their bread before they leave home. It needs a very different style of delivery from the shop fit-out.",
          ],
          bullets: [
            "**Linear-sequential**: the work moves through steps in order. Design the shop, then build, then fit out, then open. It suits projects where you can define the end result clearly up front.",
            "**Iterative-incremental**: the work is delivered in short cycles, each adding something usable and learning from feedback. The app launches with simple ordering, then adds payments and loyalty points. It suits projects where needs will become clearer as you go.",
            "**Hybrid**: a mix of both. The York shop is built in sequence, but its opening-week menu is tried and improved in small batches.",
          ],
          callout: {
            tone: "tip",
            title: "Why this matters",
            body: "PRINCE2 works with any delivery approach, including agile ones. The delivery approach is part of the project context, so it shapes how you plan, report and control the work.",
          },
        },
      ],
      keyPoints: [
        "Project context covers the organisation, suppliers, scale, sector, people, sustainability and delivery approach.",
        "PRINCE2 is tailored to fit its context. The principles are never removed.",
        "Delivery can be linear-sequential, iterative-incremental or hybrid.",
        "PRINCE2 can be used with agile and other iterative ways of working.",
      ],
      knowledgeCheck: {
        id: "m1-s5-kc",
        question: "Which of these can't be removed when PRINCE2 is tailored?",
        options: [
          "The weekly progress report format",
          "The principles",
          "The number of people on the project team",
          "The project management software",
        ],
        correctOption: 1,
        explanation:
          "Tailoring adapts practices, processes, roles and reports to suit the project. The seven principles always apply.",
      },
      assessment: [
        {
          id: "m1-s5-a1",
          type: "single",
          prompt:
            "The pre-order app will launch with simple ordering, then add payments and loyalty points in later releases, based on customer feedback. Which delivery approach is this?",
          options: [
            { id: "a", label: "Linear-sequential" },
            { id: "b", label: "Iterative-incremental" },
            { id: "c", label: "Business as usual" },
            { id: "d", label: "Exception-based" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Delivering in short cycles, each adding something usable and learning from feedback, is iterative-incremental delivery.",
          topic: "Project context",
        },
        {
          id: "m1-s5-a2",
          type: "multiple",
          prompt: "Which of these are part of a project's context? Select all that apply.",
          options: [
            { id: "a", label: "Whether suppliers work under contract" },
            { id: "b", label: "Food hygiene regulations" },
            { id: "c", label: "The size and complexity of the project" },
            { id: "d", label: "The project manager's favourite colour" },
          ],
          correctOptionIds: ["a", "b", "c"],
          explanation:
            "Commercial relationships, sector rules and scale all shape how a project should be managed. Personal preferences don't.",
          topic: "Project context",
        },
        {
          id: "m1-s5-a3",
          type: "boolean",
          prompt: "PRINCE2 can only be used on projects that follow a linear-sequential delivery approach.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "PRINCE2 can be used with linear-sequential, iterative-incremental and hybrid delivery. The approach is part of the context the method is tailored to.",
          topic: "Project context",
        },
        {
          id: "m1-s5-a4",
          type: "single",
          prompt: "Fern & Flour replaces formal progress reports with a short weekly email. What is this an example of?",
          options: [
            { id: "a", label: "Ignoring the principles" },
            { id: "b", label: "Tailoring the method to suit the project" },
            { id: "c", label: "Business as usual" },
            { id: "d", label: "A delivery approach" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Adapting how reports are produced to fit a small project is tailoring. The information still flows; only the format changes.",
          topic: "Project context",
        },
      ],
    },
  ],
};
