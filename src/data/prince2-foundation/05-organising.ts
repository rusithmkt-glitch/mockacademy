import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const organisingModule: CourseModule = {
  id: "m5",
  slug: "organising",
  order: 5,
  title: "Organising",
  shortTitle: "Organising",
  tagline: "Who decides, who manages and who delivers, and how they work together.",
  description:
    "The organising practice in PRINCE2 7th edition sets up a clear structure of roles. You'll build the York project team from the business layer down to the people on site, then plan how it deals with suppliers and stakeholders.",
  scene: "people",
  sessions: [
    {
      id: "organising/three-project-interests",
      slug: "three-project-interests",
      title: "The three project interests",
      summary:
        "Why every project must balance the business, user and supplier interests, and who represents each one.",
      durationMinutes: 13,
      objectives: [
        "Name the three project interests",
        "Describe what each interest cares about",
        "Explain why all three must be represented in decision-making",
      ],
      sections: [
        {
          id: "m5-s1-1",
          paragraphs: [
            "It's time to start the organising practice with a simple idea: every project serves three interests.",
            "Let's say you're choosing the York counter. Priya wants a long counter with space for bread, cakes and a chilled display. Dev says the long counter means moving a wall, adding two weeks. Ruth points out that it adds £4,000 the business case didn't allow for.",
          ],
          scenario: {
            question: "Whose view should win?",
            steps: [
              {
                title: "The user view",
                body: "Priya and the staff will work behind that counter every day. A cramped one slows service and hurts sales.",
              },
              {
                title: "The supplier view",
                body: "Dev knows what's buildable, how long it takes and what it costs. Ignoring that leads to nasty surprises.",
              },
              {
                title: "The business view",
                body: "You and Ruth need the shop to be worth the money. Every extra pound has to earn its keep.",
              },
              {
                title: "That's the idea",
                body: "Every project has three interests: **business**, **user** and **supplier**. Good decisions balance all three, so each must be **represented** when decisions are made.",
              },
            ],
          },
        },
        {
          id: "m5-s1-2",
          heading: "Business, user and supplier",
          paragraphs: ["Each interest asks a different question:"],
          bullets: [
            "**Business**: is the project worth the investment? Does it deliver value for money?",
            "**User**: will the products meet the needs of the people who'll use them, and will they deliver the expected benefits?",
            "**Supplier**: can the products be built to the required standard, with the resources and skills available?",
          ],
        },
        {
          id: "m5-s1-3",
          heading: "Who the users and suppliers are",
          paragraphs: [
            "**Users** are the people who will use the products, gain from them, be affected by them or look after them afterwards. For York, that's Priya, the bakers and counter staff, and arguably your customers.",
            "**Suppliers** are the people who provide the skills and resources to build the products. They can be inside or outside the business. Mistry Build and Oakline Shopfitting are external suppliers. If your own staff painted the shop, they'd be an internal supplier.",
          ],
          callout: {
            tone: "tip",
            title: "One person, two interests",
            body: "In a small business, one person can represent more than one interest. You could be both the business and the user voice on a tiny project. But all three interests still need to be considered.",
          },
        },
        {
          id: "m5-s1-4",
          heading: "Customer and supplier",
          paragraphs: [
            "PRINCE2 7th edition describes projects as having a **customer** side and a **supplier** side. The customer specifies and pays for the products; the supplier provides them.",
            "Fern & Flour is the customer; Mistry Build is a supplier. Each has its own reasons for being on the project. You want a profitable shop. Dev wants a profitable job and a good reference. Both sides need to be satisfied for the project to go smoothly.",
          ],
        },
        {
          id: "m5-s1-5",
          heading: "Represented on the board",
          paragraphs: [
            "The three interests are represented on the **project board**: the **project executive** for the business, the **senior user** for the users and the **senior supplier** for the suppliers.",
            "Back at the counter, the board weighs all three views. They agree a slightly shorter counter that keeps the chilled display but avoids moving the wall. Nobody gets everything, but the decision works for the project.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The three project interests are **business**, **user** and **supplier**. They're represented on the project board by the **project executive**, **senior user** and **senior supplier**.",
          },
        },
      ],
      keyPoints: [
        "Every project has three interests: business, user and supplier.",
        "Business asks about value; users about fitness for use; suppliers about buildability.",
        "Suppliers can be internal or external to the organisation.",
        "All three interests are represented on the project board.",
      ],
      knowledgeCheck: {
        id: "m5-s1-kc",
        question: "Which role represents the supplier interest on the project board?",
        options: ["The senior user", "The senior supplier", "The project manager", "The team manager"],
        correctOption: 1,
        explanation:
          "The senior supplier represents those designing, developing and delivering the products.",
      },
      assessment: [
        {
          id: "m5-s1-a1",
          type: "single",
          prompt: "Which question reflects the user interest?",
          options: [
            { id: "a", label: "Is the project worth the investment?" },
            { id: "b", label: "Can we build it with the skills available?" },
            { id: "c", label: "Will the products meet the needs of the people who'll use them?" },
            { id: "d", label: "Is the contract profitable for us?" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The user interest is about whether the products will meet users' needs and lead to the expected benefits.",
          topic: "Practices",
        },
        {
          id: "m5-s1-a2",
          type: "boolean",
          prompt: "A supplier must always be an external company.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Suppliers can be internal or external. What matters is that they provide the skills and resources to build the products.",
          topic: "Practices",
        },
        {
          id: "m5-s1-a3",
          type: "multiple",
          prompt: "Which TWO are users of the York project's products?",
          options: [
            { id: "a", label: "Priya and the York bakers" },
            { id: "b", label: "Mistry Build's crew" },
            { id: "c", label: "The York counter staff" },
            { id: "d", label: "Oakline's fitters" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The bakers and counter staff will use the shop. The builders and fitters are suppliers.",
          topic: "Practices",
        },
        {
          id: "m5-s1-a4",
          type: "single",
          prompt: "Why must all three interests be represented in decision-making?",
          options: [
            { id: "a", label: "So that every decision is unanimous" },
            { id: "b", label: "So that decisions balance value, fitness for use and buildability" },
            { id: "c", label: "Because PRINCE2 requires three board meetings per stage" },
            { id: "d", label: "So that the supplier can approve the business case" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Projects succeed when decisions balance the business, user and supplier perspectives.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "organising/levels-of-organisation",
      slug: "levels-of-organisation",
      title: "Levels of organisation",
      summary:
        "The four levels that structure every PRINCE2 project, from the business layer that commissions it to the teams that deliver it.",
      durationMinutes: 13,
      objectives: [
        "Name the four levels of organisation",
        "Describe what happens at each level",
        "Explain how authority is delegated between levels",
      ],
      sections: [
        {
          id: "m5-s2-1",
          paragraphs: [
            "It's time to see how the York project is structured from top to bottom.",
            "Let's say a new member of the Oakline team asks, \"Who's actually in charge here?\" Kit answers, \"I am. Well, Sam's in charge of me. And the board's in charge of Sam. And the directors set the whole thing up.\"",
          ],
          scenario: {
            question: "So who's in charge?",
            steps: [
              {
                title: "The business layer",
                body: "You and Tom, as Fern & Flour's directors, decided to open York, set the overall budget and limits, and appointed the project executive.",
              },
              {
                title: "Directing",
                body: "The **project board** directs the project: it makes the key decisions, approves each stage and provides resources. It doesn't manage day to day.",
              },
              {
                title: "Managing and delivering",
                body: "**Sam** manages the project day to day within the limits the board sets. **Kit** and the **site foreman** deliver the work with their teams.",
              },
              {
                title: "That's the idea",
                body: "PRINCE2 has four levels: the **business layer**, **directing**, **managing** and **delivering**. Each level sets limits for the one below and steps in only when those limits are at risk.",
              },
            ],
          },
        },
        {
          id: "m5-s2-2",
          heading: "The four levels",
          paragraphs: ["Each level has a distinct job:"],
          bullets: [
            "**Business layer**: sits outside the project. It commissions the project, sets its objectives and project tolerances, and appoints the project executive",
            "**Directing**: the project board. It's accountable for the project's success, makes key decisions and delegates day-to-day management",
            "**Managing**: the project manager. Runs the project day to day within the tolerances set by the board",
            "**Delivering**: team managers and their teams. Build the products to time, cost and quality",
          ],
        },
        {
          id: "m5-s2-3",
          heading: "The business layer",
          paragraphs: [
            "The **business layer** is PRINCE2 7th edition's name for the part of the organisation that sits above the project. In a large company, it could be a programme or a senior leadership team. At Fern & Flour, it's you and Tom as directors.",
            "The business layer isn't part of the project management team. It sets the direction and limits, then lets the project get on with it, stepping in only when project tolerances are at risk.",
          ],
          callout: {
            tone: "tip",
            title: "Two hats",
            body: "You sit in the business layer as a director and on the project board as executive. That's common in small firms. Just be clear which hat you're wearing for each decision.",
          },
        },
        {
          id: "m5-s2-4",
          heading: "Delegation and escalation",
          paragraphs: [
            "Authority flows down; exceptions flow up. The business layer gives the board project tolerances. The board gives Sam stage tolerances. Sam gives each team manager work package tolerances.",
            "As long as things stay within limits, each level gets on with its job. When a limit is forecast to be broken, the problem is escalated to the level above. This is manage by exception in action.",
          ],
        },
        {
          id: "m5-s2-5",
          heading: "Roles, not jobs",
          paragraphs: [
            "Remember that these are **roles**. One person can hold more than one role, and one role can sometimes be shared. What matters is that every responsibility is covered and everyone knows who holds it.",
            "On York, Sam is project manager. On the pre-order app, which is a separate project, Sam might be project manager again, while Ana is team manager.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The four levels are **business layer**, **directing** (project board), **managing** (project manager) and **delivering** (team managers). The business layer sits **outside** the project management team and sets **project tolerances**.",
          },
        },
      ],
      keyPoints: [
        "There are four levels: business layer, directing, managing and delivering.",
        "The business layer commissions the project and sits outside the project management team.",
        "Authority is delegated down through tolerances; exceptions are escalated up.",
        "Roles can be combined or shared, as long as every responsibility is covered.",
      ],
      knowledgeCheck: {
        id: "m5-s2-kc",
        question: "Which level is responsible for day-to-day management of the project?",
        options: ["The business layer", "Directing", "Managing", "Delivering"],
        correctOption: 2,
        explanation:
          "The managing level, held by the project manager, runs the project day to day within the tolerances set by the board.",
      },
      assessment: [
        {
          id: "m5-s2-a1",
          type: "single",
          prompt: "Who sets the project tolerances?",
          options: [
            { id: "a", label: "The business layer" },
            { id: "b", label: "The project manager" },
            { id: "c", label: "The team manager" },
            { id: "d", label: "Project support" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The business layer sets project-level tolerances. The board sets stage tolerances, and the project manager sets work package tolerances.",
          topic: "Practices",
        },
        {
          id: "m5-s2-a2",
          type: "boolean",
          prompt: "The business layer is part of the project management team.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "The business layer sits outside the project. It commissions the project and appoints the executive.",
          topic: "Practices",
        },
        {
          id: "m5-s2-a3",
          type: "single",
          prompt: "Kit leads the Oakline fitters building the counter. Which level is this?",
          options: [
            { id: "a", label: "Directing" },
            { id: "b", label: "Managing" },
            { id: "c", label: "Business layer" },
            { id: "d", label: "Delivering" },
          ],
          correctOptionIds: ["d"],
          explanation:
            "Team managers and their teams make up the delivering level.",
          topic: "Practices",
        },
        {
          id: "m5-s2-a4",
          type: "multiple",
          prompt: "Select two responsibilities of the directing level.",
          options: [
            { id: "a", label: "Making key decisions and authorising stages" },
            { id: "b", label: "Building the products" },
            { id: "c", label: "Being accountable for the project's success" },
            { id: "d", label: "Writing checkpoint reports" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The project board directs: it's accountable for success and makes key decisions. Building products and checkpoint reports belong to the delivering level.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "organising/the-project-board",
      slug: "the-project-board",
      title: "The project board",
      summary:
        "The three roles on the project board, what each is responsible for and what makes a board effective.",
      durationMinutes: 14,
      objectives: [
        "Describe the roles of project executive, senior user and senior supplier",
        "Explain why there is only one project executive",
        "Recognise the qualities of an effective project board",
      ],
      sections: [
        {
          id: "m5-s3-1",
          paragraphs: [
            "It's time to set up the York project board.",
            "Let's say Tom suggests, \"Why don't we both be the executive? Then we share the decisions.\" It sounds fair. You're equal partners in the business, after all.",
          ],
          scenario: {
            question: "Should you and Tom share the executive role?",
            steps: [
              {
                title: "Picture a tough call",
                body: "The damp pushes Stage 2 over tolerance. You want to carry on; Tom wants to pause. With two executives, who decides?",
              },
              {
                title: "Accountability gets blurred",
                body: "If York struggles, each of you could say the other made the call. Nobody is clearly answerable for the result.",
              },
              {
                title: "One executive, one voice",
                body: "You become project executive. Tom advises you as a director in the business layer and stays closely involved, but the final decision on the board is yours.",
              },
              {
                title: "That's the idea",
                body: "The project board has **one project executive**, who is **ultimately accountable**, plus one or more **senior users** and **senior suppliers**. The board isn't a democracy.",
              },
            ],
          },
        },
        {
          id: "m5-s3-2",
          heading: "The project executive",
          paragraphs: [
            "The **project executive** represents the business interest and is ultimately accountable for the project. That's you.",
          ],
          bullets: [
            "Owns the business case and secures the funding",
            "Chairs the board and makes the final decision when views differ",
            "Makes sure the project stays aligned with the business's goals",
            "Appoints, or approves, the project manager and the rest of the project management team",
          ],
          callout: {
            tone: "tip",
            title: "Only one",
            body: "The executive role is **never shared**. One person must be clearly accountable for the project's success.",
          },
        },
        {
          id: "m5-s3-3",
          heading: "Senior user and senior supplier",
          paragraphs: [
            "The **senior user** represents the people who'll use the products. Priya specifies what the users need, makes sure the products meet those needs and is accountable for showing that the user benefits are realised.",
            "The **senior supplier** represents the people who'll design and build the products. Dev Mistry commits supplier resources, makes sure the work is technically sound and is accountable for the quality of what the suppliers deliver.",
          ],
        },
        {
          id: "m5-s3-4",
          heading: "More than one user or supplier",
          paragraphs: [
            "Unlike the executive, the senior user and senior supplier roles **can be shared** by more than one person. If Oakline's work is a big part of the project, Kit's managing director could join Dev as a second senior supplier.",
            "Keep the board small, though. A board of eight people won't make quick decisions. Each member should be able to speak for their area and commit resources.",
          ],
        },
        {
          id: "m5-s3-5",
          heading: "What makes a good board",
          paragraphs: ["An effective project board has members who have:"],
          bullets: [
            "**Authority** to make decisions and commit resources",
            "**Credibility** within their part of the project",
            "**The ability to delegate**, leaving day-to-day management to the project manager",
            "**Availability** to make decisions when they're needed",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The project board has **one project executive** (never shared), and one or more **senior users** and **senior suppliers**. The executive owns the business case and has the final say. The board is accountable for the project's success.",
          },
        },
      ],
      keyPoints: [
        "The project board is made up of the project executive, senior user(s) and senior supplier(s).",
        "There is only one project executive, who is ultimately accountable.",
        "The senior user represents users; the senior supplier represents suppliers.",
        "Good board members have authority, credibility, availability and the ability to delegate.",
      ],
      knowledgeCheck: {
        id: "m5-s3-kc",
        question: "Which project board role can never be shared between two people?",
        options: ["Senior user", "Senior supplier", "Project executive", "All of them can be shared"],
        correctOption: 2,
        explanation:
          "The project executive is a single role, so that one person is clearly accountable for the project.",
      },
      assessment: [
        {
          id: "m5-s3-a1",
          type: "single",
          prompt: "Who is accountable for the quality of the products delivered by suppliers?",
          options: [
            { id: "a", label: "The senior user" },
            { id: "b", label: "The senior supplier" },
            { id: "c", label: "Project support" },
            { id: "d", label: "The business layer" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The senior supplier is accountable for the quality of the products the suppliers deliver.",
          topic: "Practices",
        },
        {
          id: "m5-s3-a2",
          type: "boolean",
          prompt: "Decisions on the project board are made by majority vote.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "The board isn't a democracy. The executive listens to the others but has the final say.",
          topic: "Practices",
        },
        {
          id: "m5-s3-a3",
          type: "multiple",
          prompt: "Which TWO are responsibilities of the senior user?",
          options: [
            { id: "a", label: "Specifying the needs of the users" },
            { id: "b", label: "Committing supplier resources" },
            { id: "c", label: "Showing that the user benefits are realised" },
            { id: "d", label: "Owning the business case" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The senior user specifies user needs and is accountable for demonstrating user benefits. Supplier resources and the business case belong to other roles.",
          topic: "Practices",
        },
        {
          id: "m5-s3-a4",
          type: "single",
          prompt: "Which is a quality of an effective project board member?",
          options: [
            { id: "a", label: "Managing the project day to day" },
            { id: "b", label: "Writing every product description personally" },
            { id: "c", label: "Having authority to make decisions and commit resources" },
            { id: "d", label: "Avoiding delegation" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Board members need authority, credibility, availability and the ability to delegate.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "organising/assurance-and-change-authority",
      slug: "assurance-and-change-authority",
      title: "Project assurance and change authority",
      summary:
        "How the project board checks the project independently, and how it delegates decisions about changes.",
      durationMinutes: 13,
      objectives: [
        "Explain the purpose of project assurance",
        "Explain why project assurance must be independent of the project manager",
        "Describe the role of the change authority",
      ],
      sections: [
        {
          id: "m5-s4-1",
          paragraphs: [
            "It's time to look at two roles that support the project board.",
            "Let's say every highlight report from Sam says \"all on track\". You're baking from 4am and trust Sam completely. But a nagging voice asks: how would you know if it wasn't?",
          ],
          scenario: {
            question: "How can the board be confident without doing the checking itself?",
            steps: [
              {
                title: "Ask someone independent",
                body: "You ask Ruth, your accountant, to check the project's spending against the plan each month and report directly to you on what they find.",
              },
              {
                title: "Cover each interest",
                body: "Priya asks Jo to check that the fit-out really works for the counter staff. Dev's own quality manager checks the building work.",
              },
              {
                title: "Report to the board",
                body: "Ruth spots that the contingency for the damp hasn't been counted in the forecast. Sam updates it, and the board sees the real picture.",
              },
              {
                title: "That's the idea",
                body: "**Project assurance** gives the board independent confidence that the project is on track. It's done for the board, so it must be **independent of the project manager**.",
              },
            ],
          },
        },
        {
          id: "m5-s4-2",
          heading: "What project assurance does",
          paragraphs: [
            "Each board member is responsible for assurance of their own interest. They can do it themselves or delegate it to someone else. There are three areas:",
          ],
          bullets: [
            "**Business assurance**: for the executive. Is the project still value for money? Are costs and risks under control?",
            "**User assurance**: for the senior user. Will the products meet users' needs?",
            "**Supplier assurance**: for the senior supplier. Is the work technically sound and to the right standard?",
          ],
        },
        {
          id: "m5-s4-3",
          heading: "Why independence matters",
          paragraphs: [
            "Project assurance checks the project manager's work, so it **can't be delegated to the project manager**. Sam can't independently assure Sam's own reports.",
            "Assurance also isn't just criticism. Good assurance advises the project manager too, for example on which company standards apply or how to handle a tricky supplier.",
          ],
          callout: {
            tone: "note",
            title: "Not the same as quality assurance",
            body: "Project assurance is done for the **project board**. Quality assurance, which you'll see in the Quality module, is done for the **wider business**, independently of the project.",
          },
        },
        {
          id: "m5-s4-4",
          heading: "The change authority",
          paragraphs: [
            "Changes come up all the time. Should the board meet for every £200 change to a shelf? No. The board can delegate some change decisions to a **change authority**.",
            "The change authority is a person or group who can approve requests for change and off-specifications within agreed limits. For York, you agree that Sam can approve changes up to £500 each, paid from the **change budget** of £3,000. Anything bigger comes to the board.",
          ],
        },
        {
          id: "m5-s4-5",
          heading: "Deciding the right level",
          paragraphs: [
            "How much to delegate depends on how many changes are expected. A project with few expected changes may keep all decisions with the board. A project like the pre-order app, where small changes happen every cycle, needs more delegation.",
            "The project board is always the ultimate authority for changes. It just chooses how much of that authority to hand down, and to whom. You'll see this again in the Issues module.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "**Project assurance** is independent of the project manager and covers **business**, **user** and **supplier** interests. The **change authority** is delegated by the board to decide on requests for change and off-specifications within limits, often using a **change budget**.",
          },
        },
      ],
      keyPoints: [
        "Project assurance gives the board independent confidence that the project is on track.",
        "It covers business, user and supplier assurance, one for each board role.",
        "Project assurance can't be delegated to the project manager.",
        "The board can delegate change decisions to a change authority within agreed limits.",
      ],
      knowledgeCheck: {
        id: "m5-s4-kc",
        question: "Why can't Sam carry out project assurance for the York project?",
        options: [
          "Because Sam isn't an accountant",
          "Because assurance must be independent of the project manager",
          "Because assurance is only needed at closure",
          "Because the supplier must do all assurance",
        ],
        correctOption: 1,
        explanation:
          "Project assurance checks the project manager's work on behalf of the board, so it must be independent of the project manager.",
      },
      assessment: [
        {
          id: "m5-s4-a1",
          type: "multiple",
          prompt: "Which TWO are areas of project assurance?",
          options: [
            { id: "a", label: "Business assurance" },
            { id: "b", label: "Team assurance" },
            { id: "c", label: "User assurance" },
            { id: "d", label: "Manager assurance" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The three areas are business, user and supplier assurance, matching the three board roles.",
          topic: "Practices",
        },
        {
          id: "m5-s4-a2",
          type: "boolean",
          prompt: "Board members may delegate their project assurance responsibilities to others.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Board members can delegate assurance, but not to the project manager.",
          topic: "Practices",
        },
        {
          id: "m5-s4-a3",
          type: "single",
          prompt: "What does a change authority do?",
          options: [
            { id: "a", label: "Approves the project initiation documentation" },
            { id: "b", label: "Builds the changed products" },
            { id: "c", label: "Decides on requests for change and off-specifications within delegated limits" },
            { id: "d", label: "Sets the project tolerances" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The change authority is delegated by the board to decide on changes within agreed limits.",
          topic: "Practices",
        },
        {
          id: "m5-s4-a4",
          type: "single",
          prompt: "Who is the ultimate authority for approving changes on a project?",
          options: [
            { id: "a", label: "The team manager" },
            { id: "b", label: "Project support" },
            { id: "c", label: "The senior supplier alone" },
            { id: "d", label: "The project board" },
          ],
          correctOptionIds: ["d"],
          explanation:
            "The project board is the ultimate authority. It can delegate some change decisions to a change authority.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "organising/project-and-team-managers",
      slug: "project-and-team-managers",
      title: "Project manager and team manager",
      summary:
        "What the project manager and team managers are responsible for, and how work is passed between them.",
      durationMinutes: 13,
      objectives: [
        "Describe the responsibilities of the project manager",
        "Describe the responsibilities of a team manager",
        "Explain how work packages connect the two roles",
      ],
      sections: [
        {
          id: "m5-s5-1",
          paragraphs: [
            "It's time to look at the people who run the project day to day.",
            "Let's say Sam is on site every morning, checking the plaster, chasing deliveries and telling the crew where to put the shelves. The site foreman is getting irritated, and Sam is too busy to update the plan or talk to the landlord.",
          ],
          scenario: {
            question: "What's going wrong?",
            steps: [
              {
                title: "Two jobs, one person",
                body: "Sam is trying to manage the project and supervise the building crew. The foreman's job is being done twice, and Sam's own job isn't being done at all.",
              },
              {
                title: "Hand over the detail",
                body: "Sam agrees a **work package** with the foreman: what to build, by when, for how much and how to report progress.",
              },
              {
                title: "Step back",
                body: "The foreman runs the crew and sends Sam a short weekly update. Sam has time again to manage the plan, the risks, the suppliers and the board.",
              },
              {
                title: "That's the idea",
                body: "The **project manager** manages the whole project day to day. **Team managers** manage the building of specific products. **Work packages** pass work between them.",
              },
            ],
          },
        },
        {
          id: "m5-s5-2",
          heading: "The project manager",
          paragraphs: [
            "The **project manager** runs the project day to day on behalf of the board, within the tolerances the board sets. There's only one project manager, and the role isn't shared.",
          ],
          bullets: [
            "Plans each stage and monitors progress",
            "Authorises work packages and agrees them with team managers",
            "Manages risks, issues and changes, escalating when tolerances are at risk",
            "Reports to the board and keeps stakeholders informed",
            "Leads the project team and keeps everyone focused on the plan",
          ],
        },
        {
          id: "m5-s5-3",
          heading: "The team manager",
          paragraphs: [
            "A **team manager** makes sure the products in a work package are built on time, to budget and to the right quality. They lead their team and report progress to the project manager.",
            "On York, the site foreman manages the building works and Kit manages the fit-out. On the pre-order app, Ana is the team manager for the development team.",
          ],
          callout: {
            tone: "tip",
            title: "An optional role",
            body: "The team manager role is optional. On a small project, the project manager can manage the team directly. It's often used when the team is from a different organisation or has specialist skills.",
          },
        },
        {
          id: "m5-s5-4",
          heading: "Work packages and checkpoint reports",
          paragraphs: [
            "Work passes from the project manager to a team manager in a **work package**. It describes the products to deliver, the tolerances, how quality will be checked and how often to report.",
            "The team manager reports back with **checkpoint reports** at the agreed frequency. If the work is forecast to go outside its tolerances, the team manager raises it with the project manager straight away.",
          ],
        },
        {
          id: "m5-s5-5",
          heading: "Combining roles",
          paragraphs: [
            "Some roles can be combined, but not all. The **project manager and project executive roles can't be combined**, because the executive needs to hold the project manager to account. That's one reason you don't manage York yourself.",
            "The project manager can, however, take on the team manager role or project support on a small project. What matters is that every responsibility is clearly covered.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "There is **one project manager**, who manages day to day within stage tolerances. The **team manager** role is optional and reports via **checkpoint reports**. The project executive and project manager roles **can't be combined**.",
          },
        },
      ],
      keyPoints: [
        "The project manager runs the project day to day within the board's tolerances.",
        "Team managers make sure their products are built on time, to budget and to quality.",
        "Work packages pass work down; checkpoint reports pass progress back up.",
        "The project executive and project manager roles can't be combined.",
      ],
      knowledgeCheck: {
        id: "m5-s5-kc",
        question:
          "Which report does a team manager use to update the project manager on a work package?",
        options: ["Highlight report", "End stage report", "Checkpoint report", "Exception report"],
        correctOption: 2,
        explanation:
          "Team managers send checkpoint reports to the project manager at the frequency agreed in the work package.",
      },
      assessment: [
        {
          id: "m5-s5-a1",
          type: "boolean",
          prompt: "The team manager role is optional on a PRINCE2 project.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "The project manager can manage the team directly, especially on smaller projects.",
          topic: "Practices",
        },
        {
          id: "m5-s5-a2",
          type: "single",
          prompt: "Which two roles can never be combined?",
          options: [
            { id: "a", label: "Project manager and team manager" },
            { id: "b", label: "Project manager and project support" },
            { id: "c", label: "Project executive and project manager" },
            { id: "d", label: "Project executive and senior user" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The executive holds the project manager to account, so the two roles must be held by different people.",
          topic: "Practices",
        },
        {
          id: "m5-s5-a3",
          type: "multiple",
          prompt: "Select two responsibilities of the project manager.",
          options: [
            { id: "a", label: "Authorising work packages" },
            { id: "b", label: "Owning the business case" },
            { id: "c", label: "Managing risks and issues day to day" },
            { id: "d", label: "Setting project tolerances" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The project manager authorises work packages and manages risks and issues. The executive owns the business case and the business layer sets project tolerances.",
          topic: "Practices",
        },
        {
          id: "m5-s5-a4",
          type: "single",
          prompt: "What does a work package give the team manager?",
          options: [
            { id: "a", label: "The products to deliver, the tolerances and how to report" },
            { id: "b", label: "Authority to change the business case" },
            { id: "c", label: "A seat on the project board" },
            { id: "d", label: "Approval of the project plan" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "A work package describes the work, its tolerances, how quality is checked and how progress is reported.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "organising/project-support",
      slug: "project-support",
      title: "Project support",
      summary:
        "The role that keeps the project's records, tools and administration running, and how roles are combined on small projects.",
      durationMinutes: 12,
      objectives: [
        "Describe the responsibilities of project support",
        "Explain why project support and project assurance should be kept separate",
        "Recognise how roles can be combined on a small project",
      ],
      sections: [
        {
          id: "m5-s6-1",
          paragraphs: [
            "It's time to meet the role that keeps everything organised behind the scenes.",
            "Let's say it's week 9. The builder emails an updated drawing, the shopfitter has a slightly different one and Priya is working from a printout from week 3. Nobody's sure which version of the counter drawing is current.",
          ],
          scenario: {
            question: "Who should keep track of all this?",
            steps: [
              {
                title: "The problem",
                body: "Three versions of one drawing, all slightly different. If Oakline builds from the wrong one, the counter could end up the wrong height.",
              },
              {
                title: "One place, one version",
                body: "Ellie, your part-time office manager, sets up a shared folder. Every drawing gets a version number, and old ones move to an archive.",
              },
              {
                title: "Keep the records",
                body: "Ellie also updates the risk and issue registers after each meeting, books the board meetings and pulls together Sam's highlight reports.",
              },
              {
                title: "That's the idea",
                body: "**Project support** provides administration, records and tools, including keeping track of which **version** of each product is current. It frees the project manager to manage.",
              },
            ],
          },
        },
        {
          id: "m5-s6-2",
          heading: "What project support does",
          paragraphs: ["Typical project support responsibilities include:"],
          bullets: [
            "**Administration**: arranging meetings, keeping minutes, managing documents",
            "**Records**: maintaining the registers and logs the project uses",
            "**Configuration management**: tracking product versions and their status",
            "**Tools and data**: running the project's systems, spreadsheets and dashboards",
            "**Specialist advice**: on planning tools, templates or the organisation's standards",
          ],
        },
        {
          id: "m5-s6-3",
          heading: "Who does it",
          paragraphs: [
            "Project support is the project manager's responsibility. On a small project, Sam might do it alone. On a bigger one, it could be a person like Ellie, a team or a central project office that supports several projects at once.",
            "The role can be shared or combined with other roles, which makes it one of the most flexible in PRINCE2.",
          ],
        },
        {
          id: "m5-s6-4",
          heading: "Keep support and assurance apart",
          paragraphs: [
            "There's one important limit. **Project support and project assurance should be kept separate**. Project support works for the project manager; project assurance checks the project manager's work for the board.",
            "If Ellie both kept the risk register and assured the board that risks were well managed, Ellie would be checking Ellie's own work. That's not independent, so Ruth provides business assurance instead.",
          ],
          callout: {
            tone: "note",
            title: "Project support vs project office",
            body: "Many organisations have a permanent **project office** that supports several projects. It can provide project support to York, but it still works for the project manager, not the board.",
          },
        },
        {
          id: "m5-s6-5",
          heading: "Combining roles on small projects",
          paragraphs: [
            "For a tiny project, such as a one-day pop-up stall at the York Christmas market, the whole structure could be three or four people:",
          ],
          bullets: [
            "You as project executive and senior user combined",
            "A friend who runs market stalls as senior supplier",
            "Sam as project manager, also doing project support and team management",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "**Project support** is the project manager's responsibility and can be shared or combined. It should be kept **separate from project assurance** to protect independence. The **executive and senior user** roles can be combined; the **executive and project manager** roles can't.",
          },
        },
      ],
      keyPoints: [
        "Project support handles administration, records, tools and configuration management.",
        "It is the project manager's responsibility and can be shared or combined.",
        "Project support and project assurance should be kept separate.",
        "On small projects, several roles can be held by one person, within the rules.",
      ],
      knowledgeCheck: {
        id: "m5-s6-kc",
        question: "Why should project support and project assurance be held by different people?",
        options: [
          "Because project support is always external",
          "To keep project assurance independent of the work it checks",
          "Because project assurance needs more staff",
          "Because PRINCE2 forbids combining any roles",
        ],
        correctOption: 1,
        explanation:
          "Project support works for the project manager. Assurance checks that work for the board, so combining them would undermine independence.",
      },
      assessment: [
        {
          id: "m5-s6-a1",
          type: "single",
          prompt: "Who is responsible for project support?",
          options: [
            { id: "a", label: "The project executive" },
            { id: "b", label: "The project manager" },
            { id: "c", label: "The senior user" },
            { id: "d", label: "The business layer" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Project support is the project manager's responsibility, even when someone else carries it out.",
          topic: "Practices",
        },
        {
          id: "m5-s6-a2",
          type: "multiple",
          prompt: "Which TWO are typical project support activities?",
          options: [
            { id: "a", label: "Keeping track of product versions" },
            { id: "b", label: "Approving stage plans" },
            { id: "c", label: "Maintaining the project's registers and logs" },
            { id: "d", label: "Owning the business case" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Version control and record-keeping are classic project support tasks. Approvals and the business case belong to the board.",
          topic: "Practices",
        },
        {
          id: "m5-s6-a3",
          type: "boolean",
          prompt: "The project executive and senior user roles can be held by the same person.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "These roles can be combined, for example when the business funding the project is also its main user.",
          topic: "Practices",
        },
        {
          id: "m5-s6-a4",
          type: "single",
          prompt: "Which combination of roles should be avoided?",
          options: [
            { id: "a", label: "Project manager and project support" },
            { id: "b", label: "Project manager and team manager" },
            { id: "c", label: "Project support and project assurance" },
            { id: "d", label: "Project executive and senior user" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Project assurance must stay independent of the project manager's work, which project support carries out.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "organising/commercial-and-communication",
      slug: "commercial-and-communication",
      title: "Commercial and communication approaches",
      summary:
        "How the project plans its relationships with suppliers and how it will keep every stakeholder informed.",
      durationMinutes: 14,
      objectives: [
        "Explain the purpose of the commercial management approach",
        "Explain the purpose of the communication management approach",
        "Recognise how customer and supplier interests are aligned through contracts",
      ],
      sections: [
        {
          id: "m5-s7-1",
          paragraphs: [
            "It's time to plan how the project deals with suppliers and stakeholders.",
            "Let's say Mistry Build's quote says \"building works: £40,000\". In week 5, Dev sends a bill for £1,200 of extra skips. \"Waste removal wasn't included,\" Dev says. You thought it was.",
          ],
          scenario: {
            question: "How could this have been avoided?",
            steps: [
              {
                title: "Unclear terms",
                body: "Nobody wrote down what the £40,000 included, how extras would be priced or who approved them. Both of you assumed something different.",
              },
              {
                title: "Plan the relationship",
                body: "Before the next contract, for Oakline, Sam sets out how suppliers are chosen, what each contract covers, how extras are agreed and how disputes are handled.",
              },
              {
                title: "Plan the conversations",
                body: "Sam also writes down who needs what information and when: the board, the suppliers, the landlord, the staff and the neighbours.",
              },
              {
                title: "That's the idea",
                body: "The **commercial management approach** plans how the project works with its suppliers. The **communication management approach** plans how it engages its stakeholders.",
              },
            ],
          },
        },
        {
          id: "m5-s7-2",
          heading: "The commercial management approach",
          paragraphs: [
            "PRINCE2 7th edition includes a **commercial management approach**, prepared during initiation. It explains how products will be bought in and how supplier relationships will be managed. It usually covers:",
          ],
          bullets: [
            "**Sourcing**: which products are made in-house and which are bought",
            "**Selection**: how suppliers are chosen, for example by quote or tender",
            "**Contracts**: the type of contract, what's included and how payments work",
            "**Managing suppliers**: how performance is monitored and changes are agreed",
            "**Responsibilities**: who can sign contracts and approve extra costs",
          ],
        },
        {
          id: "m5-s7-3",
          heading: "Two sides, two business cases",
          paragraphs: [
            "In a customer–supplier project, each side has its own reasons. Fern & Flour wants a great shop for £85,000. Mistry Build wants to make a profit and keep a good client.",
            "A good contract aligns these interests. For the app, you might pay Pixel & Pine per 2-week cycle, so both sides can review progress regularly and either can stop if it isn't working.",
          ],
          callout: {
            tone: "tip",
            title: "Contracts and tolerances",
            body: "Make sure supplier contracts reflect the project's controls. If Stage 2's tolerance is ±£3,000, a contract that lets the builder add £5,000 of extras without approval undermines it.",
          },
        },
        {
          id: "m5-s7-4",
          heading: "The communication management approach",
          paragraphs: [
            "You met communication in the People module. In the organising practice, the **communication management approach** turns that into a plan. It's prepared during initiation and typically sets out:",
          ],
          bullets: [
            "**Stakeholders** and their information needs",
            "**Methods** and **frequency**: board meetings, highlight reports, site notices, newsletters",
            "**Responsibilities**: who communicates with whom",
            "**Feedback**: how stakeholders can raise concerns and ideas",
          ],
        },
        {
          id: "m5-s7-5",
          heading: "Reviewing the approaches",
          paragraphs: [
            "Both approaches are reviewed at each stage boundary. The cast changes as the project moves on. In Stage 3, Oakline becomes the main supplier, and York staff and new customers become key stakeholders.",
            "Keep both proportionate. For York, each approach might be a page or two. For a large multi-supplier project, they'd be far more detailed.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **commercial management approach** covers how products are sourced and supplier relationships managed. The **communication management approach** covers how the project engages its stakeholders. Both are prepared during **initiation** and reviewed at **stage boundaries**.",
          },
        },
      ],
      keyPoints: [
        "The commercial management approach plans sourcing, contracts and supplier management.",
        "Customer and supplier each have their own business reasons; contracts should align them.",
        "The communication management approach plans how stakeholders are engaged.",
        "Both approaches are prepared during initiation and reviewed at each stage boundary.",
      ],
      knowledgeCheck: {
        id: "m5-s7-kc",
        question:
          "Which management approach would explain how suppliers are chosen and how extra costs are agreed?",
        options: [
          "The commercial management approach",
          "The risk management approach",
          "The quality management approach",
          "The benefits management approach",
        ],
        correctOption: 0,
        explanation:
          "The commercial management approach covers sourcing, contracts and how supplier relationships, including extras, are managed.",
      },
      assessment: [
        {
          id: "m5-s7-a1",
          type: "single",
          prompt: "When is the communication management approach prepared?",
          options: [
            { id: "a", label: "After the project closes" },
            { id: "b", label: "During initiation" },
            { id: "c", label: "During each quality review" },
            { id: "d", label: "Only when an exception is raised" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Like the other management approaches, it's prepared during initiation and reviewed at stage boundaries.",
          topic: "Practices",
        },
        {
          id: "m5-s7-a2",
          type: "multiple",
          prompt: "Which TWO would you expect in the commercial management approach?",
          options: [
            { id: "a", label: "How suppliers will be selected" },
            { id: "b", label: "The quality review schedule" },
            { id: "c", label: "Who can approve extra supplier costs" },
            { id: "d", label: "The lessons log" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Supplier selection and authority over extra costs are commercial matters.",
          topic: "Practices",
        },
        {
          id: "m5-s7-a3",
          type: "boolean",
          prompt: "In a customer–supplier project, the supplier may have its own business reasons for the work.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Each side has its own justification. Good contracts align the two.",
          topic: "Practices",
        },
        {
          id: "m5-s7-a4",
          type: "single",
          prompt: "Why are these approaches reviewed at each stage boundary?",
          options: [
            { id: "a", label: "Because suppliers and stakeholders change as the project moves on" },
            { id: "b", label: "Because they must be rewritten from scratch each stage" },
            { id: "c", label: "Because the supplier owns them" },
            { id: "d", label: "Because they replace the stage plan" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Different stages involve different suppliers and stakeholders, so the approaches are kept current.",
          topic: "Practices",
        },
      ],
    },
  ],
};
