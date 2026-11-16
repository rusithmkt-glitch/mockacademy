import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const principlesModule: CourseModule = {
  id: "m2",
  slug: "principles",
  order: 2,
  title: "The seven principles",
  shortTitle: "Principles",
  tagline: "The seven rules every PRINCE2 project follows, whatever its size.",
  description:
    "Each principle gets its own session. You'll see what it means, why it matters and how it plays out as Fern & Flour opens its York shop.",
  scene: "foundations",
  sessions: [
    {
      id: "principles/continued-business-justification",
      slug: "continued-business-justification",
      title: "Ensure continued business justification",
      summary:
        "Why a project needs a good reason to start, and why that reason has to stay valid until the very end.",
      durationMinutes: 14,
      objectives: [
        "Explain what continued business justification means",
        "Describe the three tests of a good business case: desirable, viable and achievable",
        "Recognise when a project should change direction or stop",
      ],
      sections: [
        {
          id: "m2-s1-1",
          paragraphs: [
            "It's time to meet the first, and arguably most important, principle.",
            "Let's say it's week 8 of the York project. Costs are running 15% over, and you've just heard that a national coffee chain has signed a lease two doors down from your new shop.",
          ],
          scenario: {
            question: "Should you carry on?",
            steps: [
              {
                title: "The original reason",
                body: "You chose York because there was no independent bakery near the station. You forecast an extra **£4,000 of sales a week**, paying back the investment in about two years.",
              },
              {
                title: "What's changed",
                body: "The coffee chain could take a good share of your morning customers. And the fit-out is now costing more than planned.",
              },
              {
                title: "Run the numbers again",
                body: "With lower sales and higher costs, payback stretches from two years to four. Is that still acceptable to you and Tom, your co-director?",
              },
              {
                title: "That's the principle",
                body: "A project needs a **justifiable reason** to start, and that reason must **stay valid** throughout. If it doesn't, you change the project or stop it.",
              },
            ],
          },
        },
        {
          id: "m2-s1-2",
          heading: "Worth starting, and worth continuing",
          paragraphs: [
            "The reason for doing a project is written down in the **business case**. It sets out what you'll spend, what you'll gain and what could go wrong.",
            "The key word in this principle is **continued**. Checking the business case once, at the start, isn't enough. It's reviewed whenever a major decision is made, and especially at the end of each stage, before more money is committed.",
          ],
        },
        {
          id: "m2-s1-3",
          heading: "Desirable, viable and achievable",
          paragraphs: [
            "A project is justified when it passes three tests. Here's how they look for the York shop:",
          ],
          bullets: [
            "**Desirable**: do the benefits outweigh the costs and risks? Is £4,000 a week worth £85,000 and the risk of a slow first year?",
            "**Viable**: can the project actually deliver? Can you get the lease, the builder and the staff you need?",
            "**Achievable**: once it's delivered, will it really produce the benefits? Will York customers come, and can your team run two shops at once?",
          ],
          callout: {
            tone: "tip",
            title: "A quick way to remember",
            body: "**Desirable** asks \"is it worth it?\", **viable** asks \"can we build it?\" and **achievable** asks \"will it pay off?\"",
          },
        },
        {
          id: "m2-s1-4",
          heading: "Stopping can be a success",
          paragraphs: [
            "If the justification disappears, the right answer may be to change the project or close it early. That isn't failure. Stopping a project that's no longer worth it saves money, time and people for something better.",
            "For York, you might shrink the scope (fewer seats, more takeaway), change the opening date, or decide to walk away before Stage 3 and sublet the shop. Each is a business decision, made using an up-to-date business case.",
          ],
        },
        {
          id: "m2-s1-5",
          heading: "Even when you have to do it",
          paragraphs: [
            "Some projects feel compulsory. Let's say a new law requires every bakery to label allergens digitally by next year. You can't choose not to comply.",
            "You still need business justification, though. There may be several ways to comply, from simple printed codes to a new till system, and the business case shows which option gives the best value for the money spent.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Two favourite exam points: the justification must be **documented and reviewed throughout**, not just at the start, and **compulsory projects still need a business case** to justify the option chosen.",
          },
        },
      ],
      keyPoints: [
        "Every project needs a justifiable reason to start and to continue.",
        "The justification is recorded in the business case and reviewed throughout, especially at stage ends.",
        "A good business case shows the project is desirable, viable and achievable.",
        "If the justification is lost, the project should change direction or close early.",
      ],
      knowledgeCheck: {
        id: "m2-s1-kc",
        question:
          "Halfway through the York project, a coffee chain opens nearby and forecast sales fall sharply. What does this principle require?",
        options: [
          "Finish the shop anyway, because the money is already committed",
          "Review the business case and decide whether to continue, change or stop",
          "Wait until the shop opens and then measure the sales",
          "Ask the builder to work faster to reduce costs",
        ],
        correctOption: 1,
        explanation:
          "Business justification has to remain valid throughout. A big change like this means updating the business case and making a fresh decision.",
      },
      assessment: [
        {
          id: "m2-s1-a1",
          type: "single",
          prompt: "When should a project's business justification be checked?",
          options: [
            { id: "a", label: "Only before the project starts" },
            { id: "b", label: "Only when the project closes" },
            { id: "c", label: "Throughout the project, especially at the end of each stage" },
            { id: "d", label: "Only when costs exceed the budget" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The principle is about continued justification. It's checked at every major decision point, and the end of each stage is a key one.",
          topic: "Principles",
        },
        {
          id: "m2-s1-a2",
          type: "boolean",
          prompt: "A project required by law doesn't need a business case.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Compulsory projects still need business justification, to show which way of meeting the requirement gives the best value.",
          topic: "Principles",
        },
        {
          id: "m2-s1-a3",
          type: "single",
          prompt:
            "You ask: \"Once the York shop is open, will customers actually come and will the extra sales really happen?\" Which test of the business case is this?",
          options: [
            { id: "a", label: "Desirable" },
            { id: "b", label: "Viable" },
            { id: "c", label: "Achievable" },
            { id: "d", label: "Tolerable" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Achievable asks whether using the project's outputs will really lead to the expected outcomes and benefits.",
          topic: "Principles",
        },
        {
          id: "m2-s1-a4",
          type: "single",
          prompt:
            "Fern & Flour closes the York project before fit-out because it's no longer worth doing. How should this be seen?",
          options: [
            { id: "a", label: "As a failure of the project manager" },
            { id: "b", label: "As the business justification principle working as intended" },
            { id: "c", label: "As a breach of manage by stages" },
            { id: "d", label: "As something PRINCE2 doesn't allow" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Stopping a project that's lost its justification protects the organisation's money. That's exactly what the principle is for.",
          topic: "Principles",
        },
      ],
    },
    {
      id: "principles/learn-from-experience",
      slug: "learn-from-experience",
      title: "Learn from experience",
      summary:
        "How a project looks for lessons before it starts, while it runs and when it closes, and why writing them down isn't enough.",
      durationMinutes: 12,
      objectives: [
        "Explain when and where a project should look for lessons",
        "Describe who is responsible for learning from experience",
        "Distinguish recording a lesson from acting on it",
      ],
      sections: [
        {
          id: "m2-s2-1",
          paragraphs: [
            "It's time to look at how projects get better at being projects.",
            "Let's say you're about to sign the builder's contract for York. Your friend, who opened a café in Harrogate last year, rings you. \"Whatever you do,\" they say, \"check the permit for the kitchen extraction fan before the builders start. It cost us six weeks.\"",
          ],
          scenario: {
            question: "When should a project look for lessons?",
            steps: [
              {
                title: "Before you start",
                body: "Ask people who've done it before. Your friend's call is one source. Sam also digs out your notes from the Leeds fit-out five years ago.",
              },
              {
                title: "While you're working",
                body: "In week 4 the shelving arrives in the wrong size. Sam works out why, and from then on every order is checked against the drawings before it's placed.",
              },
              {
                title: "When you finish",
                body: "At closure, Sam writes up what worked and what didn't, so your third shop goes even more smoothly.",
              },
              {
                title: "That's the principle",
                body: "Projects **seek, record and act on lessons** from start to finish, not just at the end.",
              },
            ],
          },
        },
        {
          id: "m2-s2-2",
          heading: "Lessons are sought, not stumbled upon",
          paragraphs: [
            "The important word is **seek**. Projects are unique, so it's tempting to assume nobody has faced your problems before. Usually someone has. This principle expects everyone on the project to go looking for that experience, rather than waiting for it to turn up.",
            "Learning is everyone's responsibility, from you as the person paying for the project to the shopfitter's apprentice. Sam keeps the lessons in a **lessons log**, so nothing useful gets lost.",
          ],
        },
        {
          id: "m2-s2-3",
          heading: "Where lessons come from",
          paragraphs: ["Lessons can come from inside or outside the organisation:"],
          bullets: [
            "**Your own past projects**: the Leeds opening, last year's kitchen refit",
            "**Other organisations**: your friend's café in Harrogate",
            "**Suppliers and partners**: your builder has fitted out dozens of food shops",
            "**The people on the project**: what Priya learned in a previous job",
            "**Industry guidance**: trade bodies, regulators and published case studies",
          ],
        },
        {
          id: "m2-s2-4",
          heading: "Recording isn't learning",
          paragraphs: [
            "Writing a lesson in a log doesn't mean it's been learned. A lesson counts when it **changes what people do**. The extraction-fan warning only helps if checking the permit is added to the plan before work begins.",
            "Lessons are also passed on. At the end of a stage or the end of the project, Sam can produce a **lessons report** so the wider business can use them, not just this project team.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Know the difference: the **lessons log** records lessons during the project, while a **lessons report** passes lessons on to others. Lessons should be sought at the start, during and at the end of a project.",
          },
        },
        {
          id: "m2-s2-5",
          heading: "Learning in short cycles",
          paragraphs: [
            "Iterative projects learn especially fast. When Fern & Flour builds its pre-order app, the team will hold a short review after every cycle: what went well, what didn't and what to change next time. The principle is the same; the rhythm is just quicker.",
          ],
        },
      ],
      keyPoints: [
        "Lessons are actively sought at the start, during and at the end of a project.",
        "Learning from experience is everyone's responsibility.",
        "A lesson is only learned when it changes what people do.",
        "The lessons log records lessons. A lessons report passes them on.",
      ],
      knowledgeCheck: {
        id: "m2-s2-kc",
        question: "Who is responsible for learning from experience on the York project?",
        options: [
          "Only the project manager",
          "Only the person paying for the project",
          "Everyone involved in the project",
          "An outside auditor at the end",
        ],
        correctOption: 2,
        explanation:
          "Learning from experience is everyone's job. Sam keeps the lessons log, but anyone can and should contribute lessons.",
      },
      assessment: [
        {
          id: "m2-s2-a1",
          type: "single",
          prompt: "When should lessons be sought on a PRINCE2 project?",
          options: [
            { id: "a", label: "Only at the end, during closure" },
            { id: "b", label: "At the start, during the project and at the end" },
            { id: "c", label: "Only when something goes wrong" },
            { id: "d", label: "Only at the start, when planning" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Lessons are sought before the project starts, applied while it runs and passed on when it closes.",
          topic: "Principles",
        },
        {
          id: "m2-s2-a2",
          type: "boolean",
          prompt: "Once a lesson has been written in the lessons log, it has been learned.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "A lesson is only learned when it leads to a change in what people do, such as an extra check added to the plan.",
          topic: "Principles",
        },
        {
          id: "m2-s2-a3",
          type: "multiple",
          prompt: "Which of these are good sources of lessons for the York project? Select all that apply.",
          options: [
            { id: "a", label: "Notes from the Leeds shop fit-out" },
            { id: "b", label: "A friend who opened a café elsewhere" },
            { id: "c", label: "The builder's experience of other food shops" },
            { id: "d", label: "Only official PRINCE2 guidance" },
          ],
          correctOptionIds: ["a", "b", "c"],
          explanation:
            "Lessons come from past projects, other organisations, suppliers and team members, not just from formal guidance.",
          topic: "Principles",
        },
        {
          id: "m2-s2-a4",
          type: "single",
          prompt: "What is the main purpose of a lessons report?",
          options: [
            { id: "a", label: "To record every lesson as it happens during the project" },
            { id: "b", label: "To pass lessons on so others can benefit from them" },
            { id: "c", label: "To approve the next stage" },
            { id: "d", label: "To report daily progress to the team" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The lessons log records lessons during the project. The lessons report shares them with the wider organisation.",
          topic: "Principles",
        },
      ],
    },
    {
      id: "principles/roles-responsibilities-relationships",
      slug: "roles-responsibilities-relationships",
      title: "Define roles, responsibilities and relationships",
      summary:
        "Why everyone needs to know who decides what, the three interests every project must represent, and why relationships matter as much as structure.",
      durationMinutes: 14,
      objectives: [
        "Explain why a project needs an agreed structure of roles and responsibilities",
        "Name the three project interests: business, user and supplier",
        "Explain why relationships were added to this principle in the 7th edition",
      ],
      sections: [
        {
          id: "m2-s3-1",
          paragraphs: [
            "It's time to sort out who does what.",
            "Let's say it's week 5. Priya, your head baker, pops into the York shop and asks the builder for a bigger oven. The builder says \"no problem\" and adds £3,000 to the bill. Sam only hears about it a week later.",
          ],
          scenario: {
            question: "What went wrong?",
            steps: [
              {
                title: "Priya's view",
                body: "Priya will be the one using the kitchen every day, so Priya assumed it was their call to make.",
              },
              {
                title: "The builder's view",
                body: "Someone from Fern & Flour asked for it. The customer is always right, so the builder got on with it.",
              },
              {
                title: "The real problem",
                body: "Nobody had agreed who could approve changes, or how much they could spend. The question \"who decides?\" had no answer.",
              },
              {
                title: "That's the principle",
                body: "Every project needs an **agreed structure**: who's accountable, who's responsible for what, and how those people work together.",
              },
            ],
          },
        },
        {
          id: "m2-s3-2",
          heading: "Three interests around the table",
          paragraphs: [
            "Every project serves three groups, and all three need a voice when decisions are made:",
          ],
          bullets: [
            "**Business**: is it worth the money? At Fern & Flour, that's you, the person investing.",
            "**User**: will it work for the people who'll use it? That's Priya and the bakers and counter staff who'll work in York.",
            "**Supplier**: can it be built, and how? That's your builder and the shopfitter.",
          ],
          callout: {
            tone: "note",
            title: "Coming up",
            body: "These three interests shape the project board, the group that directs the project. You'll meet it properly in the organising practice.",
          },
        },
        {
          id: "m2-s3-3",
          heading: "Roles, not job titles",
          paragraphs: [
            "PRINCE2 talks about **roles**, not jobs. A role is a set of responsibilities on the project. Priya's job is head baker, but on the York project Priya's role is to represent the users.",
            "On a small project, one person can hold more than one role. On a large one, a role might be shared between several people. What matters is that every responsibility has an owner, and everyone knows who that owner is.",
          ],
        },
        {
          id: "m2-s3-4",
          heading: "Why relationships matter",
          paragraphs: [
            "In the 7th edition, this principle gained a new word: **relationships**. A neat chart of roles isn't enough if the people in it don't talk, trust each other or sort out disagreements.",
            "Relationships also reach beyond the project team. Your landlord, the council's planning officer, your neighbours on the street and your Leeds regulars are all stakeholders. Knowing how you'll work with each of them is part of defining the project's structure.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Remember the full 7th edition name: define roles, responsibilities **and relationships**. Also expect questions on the three project interests: **business, user and supplier**.",
          },
        },
        {
          id: "m2-s3-5",
          heading: "So who should have decided about the oven?",
          paragraphs: [
            "With clear roles, the oven request would go like this: Priya raises it with Sam. Sam works out what it would do to cost, time and the business case. Then the person or group with authority for changes of that size makes the decision. The builder only starts once it's approved.",
            "You'll see exactly how that works in the issues practice. For now, the point is simple: the answer to \"who decides?\" should never be a surprise.",
          ],
        },
      ],
      keyPoints: [
        "A project needs an agreed structure of accountability and responsibility.",
        "The business, user and supplier interests must all be represented in decisions.",
        "PRINCE2 uses roles, not job titles. One person can hold more than one role.",
        "The 7th edition adds relationships: people and stakeholders must work well together.",
      ],
      knowledgeCheck: {
        id: "m2-s3-kc",
        question: "What are the three project interests that must be represented on every PRINCE2 project?",
        options: [
          "Business, user and supplier",
          "Cost, time and quality",
          "Executive, manager and team",
          "Customer, regulator and investor",
        ],
        correctOption: 0,
        explanation:
          "Every project serves the business interest (is it worth it?), the user interest (will it work for us?) and the supplier interest (can it be built?).",
      },
      assessment: [
        {
          id: "m2-s3-a1",
          type: "single",
          prompt: "Priya will work in the York kitchen every day. Which project interest does Priya represent?",
          options: [
            { id: "a", label: "Business" },
            { id: "b", label: "User" },
            { id: "c", label: "Supplier" },
            { id: "d", label: "Assurance" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Users are the people who'll use the project's products. Priya represents the bakers and staff who'll work in the new shop.",
          topic: "Principles",
        },
        {
          id: "m2-s3-a2",
          type: "boolean",
          prompt: "On a small PRINCE2 project, one person can hold more than one role.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Roles can be combined or shared, as long as every responsibility has a clear owner.",
          topic: "Principles",
        },
        {
          id: "m2-s3-a3",
          type: "single",
          prompt: "Which word was added to this principle's name in the 7th edition?",
          options: [
            { id: "a", label: "Responsibilities" },
            { id: "b", label: "Accountability" },
            { id: "c", label: "Relationships" },
            { id: "d", label: "Stakeholders" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The 7th edition principle is define roles, responsibilities and relationships, recognising that how people work together matters as much as the structure.",
          topic: "Principles",
        },
        {
          id: "m2-s3-a4",
          type: "single",
          prompt: "Why did the oven problem in week 5 happen?",
          options: [
            { id: "a", label: "The builder lacked the right skills" },
            { id: "b", label: "Nobody had agreed who could approve changes" },
            { id: "c", label: "The business case wasn't desirable" },
            { id: "d", label: "The project had too many stages" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Without agreed roles and responsibilities, nobody knew who could approve a change, so the decision was made by the wrong people.",
          topic: "Principles",
        },
      ],
    },
    {
      id: "principles/manage-by-stages",
      slug: "manage-by-stages",
      title: "Manage by stages",
      summary:
        "How breaking a project into management stages gives you control, and why you only commit to one stage at a time.",
      durationMinutes: 13,
      objectives: [
        "Explain what a management stage is and why it gives control",
        "Describe the minimum number of management stages",
        "Explain how detailed and high-level planning work together",
      ],
      sections: [
        {
          id: "m2-s4-1",
          paragraphs: [
            "It's time to look at how you keep a project under control without committing everything at once.",
            "Let's say you've decided to go ahead with York. Tom, your co-director, asks a simple question: \"Are we signing off the whole £85,000 today?\"",
          ],
          scenario: {
            question: "How much would you commit on day one?",
            steps: [
              {
                title: "Everything at once",
                body: "You'd be spending money before you know whether the lease is signed, the planning permission is granted or the damp survey is clear. That's a big gamble.",
              },
              {
                title: "Break it up",
                body: "Instead, split the project into three: **Stage 1**, plan properly and sign the lease. **Stage 2**, the building work. **Stage 3**, fit-out, staff training and opening.",
              },
              {
                title: "Decide at each boundary",
                body: "At the end of each stage you check how it went, look at the business case again and approve only the next stage.",
              },
              {
                title: "That's the principle",
                body: "A PRINCE2 project is **planned, monitored and controlled one stage at a time**.",
              },
            ],
          },
        },
        {
          id: "m2-s4-2",
          heading: "Management stages",
          paragraphs: [
            "A **management stage** is a section of the project that's approved and managed as a unit. At the end of each one there's a decision point, where the people directing the project decide whether to carry on.",
            "This lets you commit money and people in manageable chunks. If the damp survey comes back bad in Stage 1, you've only spent the cost of Stage 1, not the whole budget.",
          ],
        },
        {
          id: "m2-s4-3",
          heading: "Plan near things in detail, far things in outline",
          paragraphs: [
            "You can't plan week 12 in detail on day one. Too much will change. So PRINCE2 uses two levels of plan at once:",
          ],
          bullets: [
            "A **project plan**, in outline, for the whole project: the three stages, the main products, the overall budget and opening date",
            "A **stage plan**, in detail, for the current stage only: who does what, week by week",
          ],
          callout: {
            tone: "tip",
            title: "Think headlights",
            body: "Like driving at night, you can see the road just ahead clearly and the road further away only dimly. Each stage plan is written when you get close enough to see it well.",
          },
        },
        {
          id: "m2-s4-4",
          heading: "How many stages?",
          paragraphs: [
            "Every PRINCE2 project has **at least two** management stages: an **initiation stage**, where the project is planned properly, and at least one more stage to deliver the work.",
            "Beyond that, it depends on the project. Shorter stages mean more decision points and more control, but more time spent reviewing. Riskier, more complex projects usually need more stages. York has three.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Remember the minimum of **two** management stages, and that the **initiation stage** always comes first. Stage length depends on risk and complexity, not on a fixed rule.",
          },
        },
        {
          id: "m2-s4-5",
          heading: "Stages and the work don't have to line up",
          paragraphs: [
            "Management stages are about decision points, not about types of work. The specialist work doesn't have to fit neatly inside them. The electrician might start in Stage 2 and finish in Stage 3.",
            "On the pre-order app, one management stage might contain several short development cycles. The board still makes its decisions stage by stage, while the team works in its own rhythm inside each stage.",
          ],
        },
      ],
      keyPoints: [
        "A project is planned, monitored and controlled one management stage at a time.",
        "Each stage ends with a decision point where the project is reviewed before the next stage is approved.",
        "There are at least two management stages: initiation plus at least one more.",
        "The project plan is in outline. Each stage plan is in detail.",
      ],
      knowledgeCheck: {
        id: "m2-s4-kc",
        question: "Why is the York project approved one stage at a time?",
        options: [
          "Because builders prefer to be paid monthly",
          "So money is committed in manageable chunks, with a decision point at the end of each stage",
          "Because PRINCE2 limits every stage to one month",
          "So the project manager doesn't have to write a project plan",
        ],
        correctOption: 1,
        explanation:
          "Stages give control. You only commit to what you can plan with confidence, and you get a chance to review before committing more.",
      },
      assessment: [
        {
          id: "m2-s4-a1",
          type: "single",
          prompt: "What is the minimum number of management stages in a PRINCE2 project?",
          options: [
            { id: "a", label: "One" },
            { id: "b", label: "Two" },
            { id: "c", label: "Three" },
            { id: "d", label: "There is no minimum" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Every project has an initiation stage plus at least one further stage to deliver the work.",
          topic: "Principles",
        },
        {
          id: "m2-s4-a2",
          type: "boolean",
          prompt: "Shorter management stages give more control but need more time spent on reviews and decisions.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "More stages mean more decision points. That's useful on risky projects but adds management effort.",
          topic: "Principles",
        },
        {
          id: "m2-s4-a3",
          type: "single",
          prompt: "Which plan describes the current stage in detail?",
          options: [
            { id: "a", label: "The project plan" },
            { id: "b", label: "The stage plan" },
            { id: "c", label: "The business case" },
            { id: "d", label: "The lessons log" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project plan covers the whole project in outline. The stage plan covers the current stage in detail.",
          topic: "Principles",
        },
        {
          id: "m2-s4-a4",
          type: "single",
          prompt: "Which stage is always the first management stage of a PRINCE2 project?",
          options: [
            { id: "a", label: "The delivery stage" },
            { id: "b", label: "The closing stage" },
            { id: "c", label: "The initiation stage" },
            { id: "d", label: "The exception stage" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The initiation stage, where the project is properly planned and justified, is always the first management stage.",
          topic: "Principles",
        },
      ],
    },
    {
      id: "principles/manage-by-exception",
      slug: "manage-by-exception",
      title: "Manage by exception",
      summary:
        "How agreed tolerances let people get on with the job, and when a problem has to be passed up to the next level.",
      durationMinutes: 15,
      objectives: [
        "Explain how tolerances support manage by exception",
        "Describe the four levels of authority and who sets which tolerances",
        "Explain when an issue must be escalated",
      ],
      sections: [
        {
          id: "m2-s5-1",
          paragraphs: [
            "It's time to look at how much the people in charge really need to know.",
            "Let's say Sam rings you every day. Tuesday: a £40 delivery charge. Wednesday: the shade of the paint. Thursday: whether the builder can start at 8 rather than 7.30.",
          ],
          scenario: {
            question: "Is this good management?",
            steps: [
              {
                title: "Too much",
                body: "You're running the Leeds shop and baking from 4am. You don't need every detail, and Sam can't work if every small decision waits for you.",
              },
              {
                title: "Too little",
                body: "But if the damp repair is about to add £6,000, you'd want to know straight away, not at the end of the month.",
              },
              {
                title: "Agree the limits",
                body: "So you agree that Stage 2 should cost **£40,000, give or take £3,000**, and finish within a week of its target date. Inside those limits, Sam decides. If either is forecast to be broken, Sam tells you at once.",
              },
              {
                title: "That's the principle",
                body: "Set **tolerances** for each level of authority, let people work within them, and **escalate** only when a tolerance is forecast to be exceeded.",
              },
            ],
          },
        },
        {
          id: "m2-s5-2",
          heading: "Tolerances across all seven targets",
          paragraphs: [
            "Tolerances can be set for any of the seven performance targets. For Stage 2 of the York project, they might look like this:",
          ],
          bullets: [
            "**Time**: up to one week late",
            "**Cost**: £40,000, plus or minus £3,000",
            "**Scope**: the kitchen and counter are must-haves, while the window seat is optional",
            "**Quality**: kitchen surfaces must meet food-safety standards, with no tolerance at all",
            "**Risk**: any single threat that could cost more than £5,000 must be reported",
            "**Benefits**: forecast weekly sales can fall up to 10% below plan before you're told",
            "**Sustainability**: at least 85% of building waste recycled",
          ],
        },
        {
          id: "m2-s5-3",
          heading: "Four levels of authority",
          paragraphs: [
            "Manage by exception works through layers. Each level sets tolerances for the level below and only gets involved when those tolerances are threatened:",
          ],
          bullets: [
            "**The business layer** sets tolerances for the whole project. At Fern & Flour, that's you and Tom as the company's directors.",
            "**The project board** directs the project and sets tolerances for each stage. It agrees Stage 2's limits with Sam.",
            "**The project manager** runs each stage day to day and sets tolerances for each package of work given to a team. Sam agrees limits with the builder's site foreman.",
            "**The teams** do the specialist work within those limits.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Who sets which tolerance is a favourite question. **Project** tolerances come from the business layer, **stage** tolerances from the project board, and **work package** tolerances from the project manager.",
          },
        },
        {
          id: "m2-s5-4",
          heading: "Escalate on the forecast, not the damage",
          paragraphs: [
            "An exception is raised as soon as a tolerance is **forecast** to be exceeded, not after it's happened. When the builder finds damp and the cost forecast for Stage 2 jumps to £45,000, Sam escalates that day. The board then has time to choose: approve the extra cost, cut scope elsewhere or rethink the stage.",
            "If the problem is small enough to stay inside tolerance, Sam deals with it and simply reports it in the next regular update.",
          ],
        },
        {
          id: "m2-s5-5",
          heading: "Why it works",
          paragraphs: [
            "Managing by exception makes good use of senior people's time. They set the direction and the limits, then step back. The people closest to the work can act quickly, and there's a clear path for escalation when it's needed.",
            "It doesn't mean silence, though. Sam still sends regular progress updates. Manage by exception simply means the board isn't asked to make decisions that sit within someone else's limits.",
          ],
        },
      ],
      keyPoints: [
        "Tolerances are agreed limits around the seven performance targets.",
        "The business layer sets project tolerances, the project board sets stage tolerances and the project manager sets work package tolerances.",
        "Escalate as soon as a tolerance is forecast to be exceeded.",
        "Regular reporting continues. Only decisions outside tolerance are passed up.",
      ],
      knowledgeCheck: {
        id: "m2-s5-kc",
        question:
          "Sam forecasts that Stage 2 will finish three days late. The time tolerance is one week. What should Sam do?",
        options: [
          "Escalate to the project board immediately",
          "Stop the work until the board meets",
          "Manage it within the stage and mention it in the regular progress update",
          "Escalate to the business layer",
        ],
        correctOption: 2,
        explanation:
          "Three days is within the one-week tolerance, so it's Sam's to manage. It's reported as normal, not escalated.",
      },
      assessment: [
        {
          id: "m2-s5-a1",
          type: "single",
          prompt: "Who sets the tolerances for a management stage?",
          options: [
            { id: "a", label: "The business layer" },
            { id: "b", label: "The project board" },
            { id: "c", label: "The project manager" },
            { id: "d", label: "The team manager" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project board sets stage tolerances for the project manager. The business layer sets project tolerances.",
          topic: "Principles",
        },
        {
          id: "m2-s5-a2",
          type: "boolean",
          prompt: "An exception should be raised only after a tolerance has actually been exceeded.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Exceptions are raised as soon as a breach is forecast, so decision-makers have time to act.",
          topic: "Principles",
        },
        {
          id: "m2-s5-a3",
          type: "multiple",
          prompt: "Which of these can have tolerances set? Select all that apply.",
          options: [
            { id: "a", label: "Cost" },
            { id: "b", label: "Benefits" },
            { id: "c", label: "Sustainability" },
            { id: "d", label: "Team morale" },
          ],
          correctOptionIds: ["a", "b", "c"],
          explanation:
            "Tolerances can be set for any of the seven performance targets: benefits, cost, time, quality, scope, risk and sustainability.",
          topic: "Principles",
        },
        {
          id: "m2-s5-a4",
          type: "single",
          prompt: "The forecast cost of the whole York project now exceeds the tolerance set by the directors. Who should decide what happens?",
          options: [
            { id: "a", label: "The project manager" },
            { id: "b", label: "The builder" },
            { id: "c", label: "The business layer" },
            { id: "d", label: "The team manager" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Project tolerances are set by the business layer, so a forecast breach of project tolerance goes to the business layer for a decision.",
          topic: "Principles",
        },
      ],
    },
    {
      id: "principles/focus-on-products",
      slug: "focus-on-products",
      title: "Focus on products",
      summary:
        "Why PRINCE2 starts by defining what will be delivered, and what a good product description captures.",
      durationMinutes: 13,
      objectives: [
        "Explain why PRINCE2 focuses on products before activities",
        "Describe what a product description should include",
        "Recognise how a product focus helps control scope and quality",
      ],
      sections: [
        {
          id: "m2-s6-1",
          paragraphs: [
            "It's time to look at why being specific about what you want saves so much trouble.",
            "Let's say you tell the shopfitter, \"Make the counter look nice.\" Two weeks later it arrives: beautiful solid oak, but too low for the till, and with no space for a chilled display.",
          ],
          scenario: {
            question: "Whose fault is it?",
            steps: [
              {
                title: "You knew what you wanted",
                body: "In your head, it was obvious: counter height, a chiller for cream cakes and room for the card reader.",
              },
              {
                title: "The shopfitter delivered what they heard",
                body: "\"Nice.\" And it is nice. It just isn't what you needed.",
              },
              {
                title: "Nobody wrote it down",
                body: "There was no shared description of what the counter was for, what it must include or how you'd check it.",
              },
              {
                title: "That's the principle",
                body: "**Define and agree the products**, and the standard they must meet, **before** the work starts.",
              },
            ],
          },
        },
        {
          id: "m2-s6-2",
          heading: "Products before activities",
          paragraphs: [
            "Many people plan a project by listing tasks. PRINCE2 starts somewhere else: with the **products**, the things the project must deliver. Once you know exactly what's needed, working out the activities becomes much easier.",
            "A product is anything the project creates that can be described in advance. That includes the things the customer sees, like the counter and the kitchen, and the management products that help run the project, like plans and reports.",
          ],
        },
        {
          id: "m2-s6-3",
          heading: "What a product description captures",
          paragraphs: [
            "Each important product gets a **product description**. For the counter, it would cover:",
          ],
          bullets: [
            "**Purpose**: to serve customers quickly and show off the cakes",
            "**What it's made up of**: worktop, till area, card reader point, chilled display",
            "**Quality criteria**: 95cm high, chiller holds 1–5°C, wipe-clean surfaces",
            "**How it's checked**: measured and temperature-tested on delivery",
            "**Who checks and approves it**: Priya checks it, and the decision to accept it is agreed in advance",
          ],
          callout: {
            tone: "tip",
            title: "Make it measurable",
            body: "\"Nice\" can't be tested. \"95cm high\" can. Good quality criteria are specific enough that two people would agree whether they've been met.",
          },
        },
        {
          id: "m2-s6-4",
          heading: "Why it helps",
          paragraphs: ["A clear focus on products pays off right across the project:"],
          bullets: [
            "**Clear expectations**: the shopfitter knows exactly what to build",
            "**Scope control**: anything not described isn't part of the job unless it's approved",
            "**Better planning**: once you know the products, you can work out the activities, people and costs",
            "**Easier acceptance**: you check the product against what was agreed, not against a feeling",
          ],
        },
        {
          id: "m2-s6-5",
          heading: "Products on the pre-order app",
          paragraphs: [
            "Focusing on products works for iterative projects too. On the pre-order app, products might start as short statements of what users need: \"A customer can order a loaf by 8pm and collect it the next morning.\" Detail is added as each one comes up for development.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Focus on products means defining **what** is delivered, and its quality, **before** planning the work. If an answer says to start by listing activities, it's the wrong one.",
          },
        },
      ],
      keyPoints: [
        "PRINCE2 defines products first and works out activities from them.",
        "A product description covers purpose, composition, quality criteria and how the product will be checked and approved.",
        "Clear products help control scope, set expectations and make acceptance easier.",
        "The principle applies to iterative projects too, with detail added as work comes up.",
      ],
      knowledgeCheck: {
        id: "m2-s6-kc",
        question:
          "Which would have prevented the problem with the counter?",
        options: [
          "A longer project plan",
          "A product description agreed before the work started",
          "A bigger budget",
          "More frequent progress meetings",
        ],
        correctOption: 1,
        explanation:
          "A product description would have set out the counter's purpose, what it must include and the measurable criteria it had to meet.",
      },
      assessment: [
        {
          id: "m2-s6-a1",
          type: "single",
          prompt: "How does PRINCE2 recommend starting to plan a project?",
          options: [
            { id: "a", label: "By listing all the activities" },
            { id: "b", label: "By defining the products to be delivered" },
            { id: "c", label: "By booking the suppliers" },
            { id: "d", label: "By setting the budget" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Focus on products means defining what will be delivered first, then working out the activities needed to deliver it.",
          topic: "Principles",
        },
        {
          id: "m2-s6-a2",
          type: "multiple",
          prompt: "Which of these belong in a product description? Select all that apply.",
          options: [
            { id: "a", label: "The product's purpose" },
            { id: "b", label: "Measurable quality criteria" },
            { id: "c", label: "How the product will be checked" },
            { id: "d", label: "The project manager's salary" },
          ],
          correctOptionIds: ["a", "b", "c"],
          explanation:
            "A product description explains what the product is for, what it's made up of, the quality criteria and how it will be checked and approved.",
          topic: "Principles",
        },
        {
          id: "m2-s6-a3",
          type: "boolean",
          prompt: "Plans and reports can also be products in PRINCE2.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "PRINCE2 treats management products, such as plans and reports, as products too, alongside specialist products like the counter.",
          topic: "Principles",
        },
        {
          id: "m2-s6-a4",
          type: "single",
          prompt: "Which quality criterion for the counter is best?",
          options: [
            { id: "a", label: "It should look nice" },
            { id: "b", label: "It should be high quality" },
            { id: "c", label: "It should be 95cm high" },
            { id: "d", label: "It should please the customers" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Good quality criteria are measurable. Anyone can check whether a counter is 95cm high.",
          topic: "Principles",
        },
      ],
    },
    {
      id: "principles/tailor-to-suit-the-project",
      slug: "tailor-to-suit-the-project",
      title: "Tailor to suit the project",
      summary:
        "How to adapt PRINCE2 so it fits the project, what can and can't be changed, and where tailoring decisions are recorded.",
      durationMinutes: 13,
      objectives: [
        "Explain why PRINCE2 must be tailored",
        "Identify what can be tailored and what can't",
        "Describe where tailoring decisions are recorded",
      ],
      sections: [
        {
          id: "m2-s7-1",
          paragraphs: [
            "It's time for the principle that holds all the others together.",
            "Let's say Sam's last job was a £2 million office move, with 40-page plan templates and a board that met every week. Sam arrives at Fern & Flour with exactly the same templates.",
          ],
          scenario: {
            question: "Should Sam use them as they are?",
            steps: [
              {
                title: "Too heavy",
                body: "Forty-page documents for an £85,000 project would take more time to write than they'd save. Nobody would read them.",
              },
              {
                title: "Too light",
                body: "But throwing them all away would leave nobody sure who decides, or how you'll know if things go wrong.",
              },
              {
                title: "Just right",
                body: "A four-page plan, a monthly board meeting in the Leeds shop, a short weekly email update and a shared spreadsheet for risks.",
              },
              {
                title: "That's the principle",
                body: "**Adapt PRINCE2 to fit the project**: its size, complexity, risk, people and setting.",
              },
            ],
          },
        },
        {
          id: "m2-s7-2",
          heading: "What can be tailored",
          paragraphs: ["Almost every part of the method can be adapted to fit:"],
          bullets: [
            "**Processes**: small projects can combine some of them",
            "**Practices**: risk management can be a simple spreadsheet rather than specialist software",
            "**Roles**: one person can hold more than one role",
            "**Management products**: reports can be emails, and some documents can be merged",
            "**Terms**: if your business calls stages \"phases\", you can use that word",
          ],
        },
        {
          id: "m2-s7-3",
          heading: "What can't be tailored",
          paragraphs: [
            "The **principles**. All seven apply to every PRINCE2 project. Tailoring changes how they're applied, never whether they're applied.",
            "Tailoring also isn't an excuse to skip things. Dropping the business case because it's \"too much paperwork\" isn't tailoring. Writing it as a one-page summary is.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Tailoring is about fit. It can make the method lighter **or** heavier. A large, risky project may need more control than the standard approach, not less.",
          },
        },
        {
          id: "m2-s7-4",
          heading: "What drives tailoring",
          paragraphs: [
            "Tailoring decisions come from the project context you met in Module 1. The main things to weigh up are:",
          ],
          bullets: [
            "**Scale and complexity**: York is small and simple, so the method can be light",
            "**Risk**: a riskier project needs tighter control",
            "**People**: an experienced team needs less detailed direction",
            "**The organisation**: its standards, culture and existing ways of working",
            "**The delivery approach**: the pre-order app will be built iteratively, so planning and reporting will look different",
          ],
        },
        {
          id: "m2-s7-5",
          heading: "Writing it down",
          paragraphs: [
            "Tailoring decisions are recorded in the **project initiation documentation**, the document that sets out how the project will be run. That way, everyone knows how the method is being applied, and the decisions can be reviewed at each stage boundary if things change.",
          ],
        },
      ],
      keyPoints: [
        "PRINCE2 must be adapted to fit each project's context.",
        "Processes, practices, roles, management products and terms can all be tailored.",
        "The seven principles always apply and can't be tailored away.",
        "Tailoring decisions are recorded in the project initiation documentation.",
      ],
      knowledgeCheck: {
        id: "m2-s7-kc",
        question: "Which statement about tailoring PRINCE2 is correct?",
        options: [
          "Tailoring means removing the principles that don't fit",
          "Tailoring can only make the method lighter",
          "Tailoring adapts how the method is applied, while all seven principles still apply",
          "Tailoring is only allowed on small projects",
        ],
        correctOption: 2,
        explanation:
          "Tailoring adapts processes, practices, roles, products and terms to fit the project. The principles are never removed.",
      },
      assessment: [
        {
          id: "m2-s7-a1",
          type: "boolean",
          prompt: "Tailoring can make PRINCE2 more formal for a large, high-risk project.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Tailoring is about fit. A risky or complex project may need more control, not less.",
          topic: "Principles",
        },
        {
          id: "m2-s7-a2",
          type: "single",
          prompt: "Where are tailoring decisions recorded?",
          options: [
            { id: "a", label: "In the lessons log" },
            { id: "b", label: "In the project initiation documentation" },
            { id: "c", label: "In the daily log" },
            { id: "d", label: "They don't need to be recorded" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project initiation documentation describes how the project will be managed, including how PRINCE2 has been tailored.",
          topic: "Principles",
        },
        {
          id: "m2-s7-a3",
          type: "single",
          prompt: "Which of these is an example of tailoring, rather than ignoring PRINCE2?",
          options: [
            { id: "a", label: "Skipping the business case because it's too much paperwork" },
            { id: "b", label: "Writing the business case as a one-page summary" },
            { id: "c", label: "Letting anyone approve any change" },
            { id: "d", label: "Not recording any lessons" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "A shorter business case still provides justification, so it's tailoring. The other options abandon a principle.",
          topic: "Principles",
        },
        {
          id: "m2-s7-a4",
          type: "multiple",
          prompt: "Which of these can be tailored? Select all that apply.",
          options: [
            { id: "a", label: "The format of progress reports" },
            { id: "b", label: "How roles are combined" },
            { id: "c", label: "The terms the project uses" },
            { id: "d", label: "Whether the principles apply" },
          ],
          correctOptionIds: ["a", "b", "c"],
          explanation:
            "Reports, roles and terms can all be adapted. Whether the principles apply can't. They always do.",
          topic: "Principles",
        },
      ],
    },
  ],
};
