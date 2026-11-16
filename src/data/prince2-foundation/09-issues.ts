import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const issuesModule: CourseModule = {
  id: "m9",
  slug: "issues",
  order: 9,
  title: "Issues",
  shortTitle: "Issues",
  tagline: "Handle problems, changes and surprises in a controlled way.",
  description:
    "The issues practice in PRINCE2 7th edition makes sure every problem, request and surprise is captured, assessed and decided on by the right person. You'll handle the York damp, a request for a bigger oven and an off-specification counter.",
  scene: "risk",
  sessions: [
    {
      id: "issues/what-is-an-issue",
      slug: "what-is-an-issue",
      title: "What is an issue?",
      summary:
        "The five types of issue in PRINCE2 7th edition and how each one should be handled.",
      durationMinutes: 13,
      objectives: [
        "Define an issue in PRINCE2 terms",
        "Name the five types of issue",
        "Decide whether to handle an issue formally or informally",
      ],
      sections: [
        {
          id: "m9-s1-1",
          paragraphs: [
            "It's time to deal with the things that actually happen.",
            "Let's say it's week 5 on York. On Monday the survey confirms damp. On Tuesday Priya asks for a bigger oven. On Wednesday the council announces road works outside the shop in November. By Thursday, Sam's inbox is full.",
          ],
          scenario: {
            question: "Are these all the same kind of thing?",
            steps: [
              {
                title: "A problem",
                body: "The damp is a problem that's now happening. It needs fixing, and it affects cost and time.",
              },
              {
                title: "A request",
                body: "Priya's bigger oven is a **request for change**: a proposal to change something that's already been agreed.",
              },
              {
                title: "Something outside",
                body: "The road works are an **external event**. Nobody on the project caused it, but it could hurt opening week.",
              },
              {
                title: "That's the idea",
                body: "An **issue** is any event that has happened, wasn't planned and needs management attention. PRINCE2 7th edition sorts issues into **types** so each one is handled the right way.",
              },
            ],
          },
        },
        {
          id: "m9-s1-2",
          heading: "The five types of issue",
          paragraphs: ["PRINCE2 7th edition describes five types of issue:"],
          bullets: [
            "**Request for change**: a proposal to change a baseline, like Priya's bigger oven",
            "**Off-specification**: something that should be provided, but isn't, or isn't going to be, like a counter built 5cm too low",
            "**Problem or concern**: anything else the project manager needs to resolve or escalate, like the damp",
            "**Business opportunity**: a chance to deliver more benefit, like a local café asking to buy your bread wholesale",
            "**External event**: something outside the project that affects it, like the road works",
          ],
        },
        {
          id: "m9-s1-3",
          heading: "Risk or issue?",
          paragraphs: [
            "Remember the difference: a **risk** might happen; an **issue** has happened. When the survey confirmed damp, the damp risk became an issue.",
            "One event can also create new risks. The road works are an issue now, but they create a risk that opening-week sales fall short.",
          ],
        },
        {
          id: "m9-s1-4",
          heading: "Formal or informal",
          paragraphs: [
            "Not every issue needs paperwork. If the project manager can deal with it within tolerance and without a change to a baseline, it can be handled **informally** and noted in the **daily log**.",
            "When Kit says a delivery of tiles will arrive a day late, with no effect on the stage plan, Sam just notes it. The damp, which threatens Stage 2's tolerance, needs **formal** handling in the issue register.",
          ],
          callout: {
            tone: "tip",
            title: "Not sure? Write it down",
            body: "If you're not sure whether an issue is serious, start it in the daily log. You can always move it to the issue register later.",
          },
        },
        {
          id: "m9-s1-5",
          heading: "Anyone can raise an issue",
          paragraphs: [
            "Anyone with an interest in the project can raise an issue: board members, team members, suppliers, even neighbours. Jo might notice that customers can't see the menu from the queue.",
            "The project manager makes sure every issue is captured and handled consistently, using the **issue management approach**.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The five issue types are **request for change**, **off-specification**, **problem or concern**, **business opportunity** and **external event**. Informal issues go in the **daily log**; formal ones in the **issue register**.",
          },
        },
      ],
      keyPoints: [
        "An issue is an unplanned event that has happened and needs management attention.",
        "The five types are request for change, off-specification, problem or concern, business opportunity and external event.",
        "Issues the project manager can handle within tolerance can be managed informally in the daily log.",
        "Formal issues are recorded in the issue register.",
      ],
      knowledgeCheck: {
        id: "m9-s1-kc",
        question: "Oakline builds the counter at 90cm instead of the agreed 95cm. What type of issue is this?",
        options: ["Request for change", "Off-specification", "Business opportunity", "External event"],
        correctOption: 1,
        explanation:
          "An off-specification is something that should be provided but isn't, or doesn't meet its specification.",
      },
      assessment: [
        {
          id: "m9-s1-a1",
          type: "single",
          prompt: "Priya asks to replace the agreed oven with a bigger model. What type of issue is this?",
          options: [
            { id: "a", label: "Request for change" },
            { id: "b", label: "Off-specification" },
            { id: "c", label: "External event" },
            { id: "d", label: "Problem or concern" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "A request for change is a proposal to change something already agreed in a baseline.",
          topic: "Practices",
        },
        {
          id: "m9-s1-a2",
          type: "boolean",
          prompt: "Every issue must be recorded in the issue register.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Issues that can be handled informally within tolerance can be recorded in the daily log instead.",
          topic: "Practices",
        },
        {
          id: "m9-s1-a3",
          type: "multiple",
          prompt: "Which TWO are PRINCE2 7th edition issue types?",
          options: [
            { id: "a", label: "Business opportunity" },
            { id: "b", label: "Secondary risk" },
            { id: "c", label: "External event" },
            { id: "d", label: "Residual risk" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Business opportunity and external event are issue types. Secondary and residual risks are risk concepts.",
          topic: "Practices",
        },
        {
          id: "m9-s1-a4",
          type: "single",
          prompt: "Who can raise an issue?",
          options: [
            { id: "a", label: "Only the project board" },
            { id: "b", label: "Only the project manager" },
            { id: "c", label: "Anyone with an interest in the project" },
            { id: "d", label: "Only team managers" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Anyone with an interest in the project can raise an issue.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "issues/baselines-and-change-control",
      slug: "baselines-and-change-control",
      title: "Baselines and change control",
      summary:
        "Why approved products are baselined, and how change control stops unauthorised changes creeping in.",
      durationMinutes: 13,
      objectives: [
        "Explain what a baseline is",
        "Explain the purpose of change control",
        "Describe the role of the product register",
      ],
      sections: [
        {
          id: "m9-s2-1",
          paragraphs: [
            "It's time to see why some things can't just be changed on a whim.",
            "Let's say Kit and Priya are chatting on site. Priya mentions it'd be nice to have the cake display a bit wider. Kit says, \"No problem, we'll do it.\" Two weeks later, the wider display means the till doesn't fit and the invoice is £800 higher.",
          ],
          scenario: {
            question: "What went wrong?",
            steps: [
              {
                title: "The design was agreed",
                body: "The counter design passed its quality review and was approved. Everyone was working from it.",
              },
              {
                title: "It was changed quietly",
                body: "A friendly chat changed it, without anyone checking the knock-on effects on the till, the cost or the plan.",
              },
              {
                title: "Control the change",
                body: "If the request had gone to Sam, the effect on the till and the £800 would have been spotted, and a decision made properly.",
              },
              {
                title: "That's the idea",
                body: "Once a product is approved, it becomes a **baseline**. Any change to a baseline goes through **change control**, so its impact is understood before it's agreed.",
              },
            ],
          },
        },
        {
          id: "m9-s2-2",
          heading: "What a baseline is",
          paragraphs: [
            "A **baseline** is an approved version of a product that's used as a reference point. Once something is baselined, it can only be changed through formal change control.",
            "Baselines include the plans, the business case, product descriptions and the products themselves, like the approved counter design.",
          ],
        },
        {
          id: "m9-s2-3",
          heading: "Why change control matters",
          paragraphs: ["Change control doesn't stop change. It makes sure changes are:"],
          bullets: [
            "**Captured**, so nothing changes without a record",
            "**Assessed** for their effect on cost, time, quality, scope, benefits, risk and sustainability",
            "**Decided** by someone with the authority to approve them",
            "**Implemented** in a controlled way, with every affected product updated",
          ],
          callout: {
            tone: "tip",
            title: "Change is normal",
            body: "Changes are expected on most projects, especially with iterative delivery. Change control isn't about saying no. It's about saying yes knowingly.",
          },
        },
        {
          id: "m9-s2-4",
          heading: "The product register",
          paragraphs: [
            "The **product register** keeps track of the project's products, their versions and their status. It records which version is the current baseline and who holds it.",
            "Remember Ellie's shared folder of drawings? That's the product register in practice. When the counter design changes from version 2 to version 3, the register shows which one the team should use.",
          ],
        },
        {
          id: "m9-s2-5",
          heading: "Configuration management",
          paragraphs: [
            "Keeping track of product versions is called **configuration management**. It's usually handled by project support, and the approach is described in the issue management approach.",
            "For the app, Ana's team uses a code repository to track versions. For York, it's a shared folder and a spreadsheet. The principle is the same: one current version, and a history of how it got there.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "A **baseline** is an approved version of a product, changed only through **change control**. The **product register** records products, versions and status. Change control makes sure changes are assessed and approved before they're made.",
          },
        },
      ],
      keyPoints: [
        "A baseline is an approved version of a product used as a reference point.",
        "Baselines can only be changed through formal change control.",
        "Change control makes sure changes are captured, assessed, decided and implemented properly.",
        "The product register tracks products, their versions and their status.",
      ],
      knowledgeCheck: {
        id: "m9-s2-kc",
        question: "Which record shows which version of the counter design is the current baseline?",
        options: ["Product register", "Risk register", "Lessons log", "Highlight report"],
        correctOption: 0,
        explanation:
          "The product register records each product's versions and status.",
      },
      assessment: [
        {
          id: "m9-s2-a1",
          type: "single",
          prompt: "What is a baseline?",
          options: [
            { id: "a", label: "A first draft that anyone can change" },
            { id: "b", label: "An approved version of a product used as a reference point" },
            { id: "c", label: "The minimum budget for a stage" },
            { id: "d", label: "A type of risk response" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "A baseline is an approved version that can only be changed through change control.",
          topic: "Practices",
        },
        {
          id: "m9-s2-a2",
          type: "boolean",
          prompt: "The purpose of change control is to prevent all changes.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Change control makes sure changes are assessed and approved, not that they're prevented.",
          topic: "Practices",
        },
        {
          id: "m9-s2-a3",
          type: "multiple",
          prompt: "Which TWO are examples of baselined products?",
          options: [
            { id: "a", label: "The approved stage plan" },
            { id: "b", label: "A casual conversation on site" },
            { id: "c", label: "The approved counter design" },
            { id: "d", label: "An unreviewed first sketch" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Baselines are approved products, including plans and designs.",
          topic: "Practices",
        },
        {
          id: "m9-s2-a4",
          type: "single",
          prompt: "What is configuration management?",
          options: [
            { id: "a", label: "Choosing the project board" },
            { id: "b", label: "Keeping track of product versions and their status" },
            { id: "c", label: "Running quality reviews" },
            { id: "d", label: "Setting tolerances" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Configuration management keeps track of products, versions and status.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "issues/issue-management-procedure",
      slug: "issue-management-procedure",
      title: "The issue management procedure",
      summary:
        "The five steps for handling formal issues, and the records used along the way.",
      durationMinutes: 15,
      objectives: [
        "Name the steps in the issue management procedure",
        "Describe the purpose of the issue register and issue report",
        "Describe the options for responding to requests for change and off-specifications",
      ],
      sections: [
        {
          id: "m9-s3-1",
          paragraphs: [
            "It's time to handle Priya's bigger oven request properly.",
            "Let's say Priya emails Sam: the oven in the plan is fine for now, but a bigger one would let York bake for a new wholesale customer too. It costs £3,000 more.",
          ],
          scenario: {
            question: "How should Sam handle it?",
            steps: [
              {
                title: "Capture",
                body: "Sam logs it in the issue register as a request for change and decides it needs formal handling, because it changes the approved equipment list.",
              },
              {
                title: "Assess",
                body: "Sam checks the effects. £3,000 more, no time change, but a bigger power supply is needed. It could also add £600 a week in wholesale sales.",
              },
              {
                title: "Recommend",
                body: "Sam recommends approving it, funded partly from the change budget, and writes an **issue report** for the board.",
              },
              {
                title: "Decide and implement",
                body: "The board approves. Sam updates the plans, the product descriptions and the business case, and Oakline orders the bigger oven.",
              },
            ],
          },
        },
        {
          id: "m9-s3-2",
          heading: "The five steps",
          paragraphs: ["The issue management procedure has five steps:"],
          bullets: [
            "**Capture**: record the issue and decide whether to handle it formally or informally",
            "**Assess**: understand its effect on the project's objectives and the business case",
            "**Recommend**: identify the options and recommend a response",
            "**Decide**: the right person decides, whether the project manager, the change authority or the board",
            "**Implement**: carry out the decision and update the affected plans and products",
          ],
          callout: {
            tone: "tip",
            title: "A memory aid",
            body: "Capture, Assess, Recommend, Decide, Implement spells **CARDI**. It's a handy way to remember the order.",
          },
        },
        {
          id: "m9-s3-3",
          heading: "Records",
          paragraphs: ["Issues use these records:"],
          bullets: [
            "**Daily log**: informal issues the project manager handles directly",
            "**Issue register**: every formal issue, with its type, date, status and priority",
            "**Issue report**: a fuller description of a formal issue, its effects and the recommendation, when a decision is needed",
          ],
        },
        {
          id: "m9-s3-4",
          heading: "Responding to a request for change",
          paragraphs: ["For a request for change, the decision-maker can:"],
          bullets: [
            "**Approve** it, funding it from the change budget, by cutting scope elsewhere or by asking for more money",
            "**Reject** it",
            "**Ask for an exception plan**, if the change would take the project outside tolerance",
            "**Request more information** before deciding",
          ],
        },
        {
          id: "m9-s3-5",
          heading: "Responding to an off-specification",
          paragraphs: ["For an off-specification, the options are:"],
          bullets: [
            "**Accept** it as it is, without corrective action. This is called a **concession**",
            "**Reject** it and have it fixed, funded from the change budget, through an exception plan or under the supplier's contract",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The issue procedure is **capture**, **assess**, **recommend**, **decide** and **implement**. An **issue report** supports decisions on formal issues. Accepting an off-specification without fixing it is a **concession**.",
          },
        },
      ],
      keyPoints: [
        "The issue procedure is capture, assess, recommend, decide and implement.",
        "Formal issues go in the issue register; issue reports support decisions.",
        "Requests for change can be approved, rejected, escalated by exception or deferred for more information.",
        "Accepting an off-specification without corrective action is a concession.",
      ],
      knowledgeCheck: {
        id: "m9-s3-kc",
        question:
          "The board decides to keep the counter at 93cm rather than rebuild it. What is this decision called?",
        options: ["A concession", "A baseline", "A risk transfer", "An exception plan"],
        correctOption: 0,
        explanation:
          "Accepting an off-specification without corrective action is a concession.",
      },
      assessment: [
        {
          id: "m9-s3-a1",
          type: "single",
          prompt: "Which step of the issue procedure comes after assess?",
          options: [
            { id: "a", label: "Capture" },
            { id: "b", label: "Recommend" },
            { id: "c", label: "Implement" },
            { id: "d", label: "Decide" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The order is capture, assess, recommend, decide, implement.",
          topic: "Practices",
        },
        {
          id: "m9-s3-a2",
          type: "multiple",
          prompt: "Which TWO are possible responses to a request for change?",
          options: [
            { id: "a", label: "Approve it" },
            { id: "b", label: "Grant a concession" },
            { id: "c", label: "Request more information" },
            { id: "d", label: "Transfer it" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Requests for change can be approved, rejected, escalated through an exception plan or deferred for more information. Concessions apply to off-specifications.",
          topic: "Practices",
        },
        {
          id: "m9-s3-a3",
          type: "boolean",
          prompt: "An issue report is needed for every issue in the daily log.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Issue reports are for formal issues needing a decision. Informal issues in the daily log don't need one.",
          topic: "Practices",
        },
        {
          id: "m9-s3-a4",
          type: "single",
          prompt: "During which step are the effects of an issue on the business case examined?",
          options: [
            { id: "a", label: "Capture" },
            { id: "b", label: "Assess" },
            { id: "c", label: "Decide" },
            { id: "d", label: "Implement" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The assess step looks at the issue's effects on the objectives and the business case.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "issues/change-authority-and-change-budget",
      slug: "change-authority-and-change-budget",
      title: "Change authority and change budget",
      summary:
        "How the board delegates change decisions, sets a change budget and prioritises issues by severity.",
      durationMinutes: 12,
      objectives: [
        "Explain how change authority is delegated",
        "Explain the purpose of the change budget",
        "Use priority and severity to decide who handles an issue",
      ],
      sections: [
        {
          id: "m9-s4-1",
          paragraphs: [
            "It's time to decide who can approve which changes on York.",
            "Let's say Sam brings five small change requests to the board meeting: a different tile colour, an extra plug socket, a second coat hook and two more. Each costs under £200. The board spends 40 minutes on them, and has no time left for the damp.",
          ],
          scenario: {
            question: "How could the board spend its time better?",
            steps: [
              {
                title: "Set limits",
                body: "The board agrees that Sam can approve any change up to £500 and with no effect on the opening date.",
              },
              {
                title: "Give a budget",
                body: "The board sets aside a **change budget** of £3,000. Sam uses it to pay for approved small changes.",
              },
              {
                title: "Escalate the big ones",
                body: "Anything over £500, or that affects the opening date, still comes to the board.",
              },
              {
                title: "That's the idea",
                body: "The board can delegate decisions on changes to a **change authority**, with a **change budget**, so it can focus on the decisions that really need it.",
              },
            ],
          },
        },
        {
          id: "m9-s4-2",
          heading: "Delegating change authority",
          paragraphs: [
            "The project board is the default change authority. It can delegate some of that authority, for example to the project manager or to a small group, with clear limits on what they can approve.",
            "The level of delegation is agreed in initiation and recorded in the issue management approach. It can be reviewed at each stage boundary.",
          ],
        },
        {
          id: "m9-s4-3",
          heading: "The change budget",
          paragraphs: [
            "The **change budget** is money set aside to pay for approved changes. It's separate from the risk budget, which pays for risk responses.",
            "Without one, every small change would need fresh approval for funds, or would quietly eat into the stage budget and push it towards its tolerance.",
          ],
          callout: {
            tone: "tip",
            title: "Watch for overuse",
            body: "If the change budget runs out quickly, it's a sign the requirements weren't clear enough. That's worth a lesson in the lessons log.",
          },
        },
        {
          id: "m9-s4-4",
          heading: "Priority and severity",
          paragraphs: [
            "Issues are given a **priority**, for example using MoSCoW, and a **severity**, which describes how serious they are. Severity decides who handles them:",
          ],
          bullets: [
            "**Low severity**: the project manager, from the daily log or issue register",
            "**Medium severity**: the change authority, within its limits",
            "**High severity**: the project board",
            "**Beyond project tolerance**: the business layer",
          ],
        },
        {
          id: "m9-s4-5",
          heading: "The issue management approach",
          paragraphs: [
            "All of this is written down in the **issue management approach**, created during initiation. It covers the procedure, the records, the change authority, the change budget and the scales for priority and severity.",
            "For the app, the approach gives Ana's team more freedom: they can reorder features in the backlog between cycles without a formal change, as long as the cycle's time and cost stay fixed.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **project board** is the default change authority and may delegate it. The **change budget** pays for approved changes and is separate from the **risk budget**. **Severity** determines who handles an issue. The **issue management approach** is created in **initiation**.",
          },
        },
      ],
      keyPoints: [
        "The project board can delegate change decisions to a change authority within limits.",
        "The change budget pays for approved changes and is separate from the risk budget.",
        "Priority and severity decide how urgently an issue is handled and by whom.",
        "The issue management approach is created in initiation.",
      ],
      knowledgeCheck: {
        id: "m9-s4-kc",
        question: "What pays for small approved changes on York, without asking the board for more money each time?",
        options: ["The risk budget", "The change budget", "Stage tolerance", "The benefits budget"],
        correctOption: 1,
        explanation:
          "The change budget is set aside to fund approved changes.",
      },
      assessment: [
        {
          id: "m9-s4-a1",
          type: "single",
          prompt: "Who is the default change authority on a project?",
          options: [
            { id: "a", label: "The project board" },
            { id: "b", label: "The team manager" },
            { id: "c", label: "Project support" },
            { id: "d", label: "The quality review chair" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The project board is the change authority unless it delegates that authority.",
          topic: "Practices",
        },
        {
          id: "m9-s4-a2",
          type: "boolean",
          prompt: "The change budget and risk budget are the same thing.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "They're separate. The change budget funds changes; the risk budget funds risk responses.",
          topic: "Practices",
        },
        {
          id: "m9-s4-a3",
          type: "single",
          prompt: "Which document describes the change authority and change budget arrangements?",
          options: [
            { id: "a", label: "The issue management approach" },
            { id: "b", label: "The benefits management approach" },
            { id: "c", label: "The daily log" },
            { id: "d", label: "The checkpoint report" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The issue management approach records how issues and changes are handled, including change authority and budget.",
          topic: "Practices",
        },
        {
          id: "m9-s4-a4",
          type: "multiple",
          prompt: "Which TWO are benefits of delegating change authority?",
          options: [
            { id: "a", label: "The board can focus on the most important decisions" },
            { id: "b", label: "Changes no longer need assessing" },
            { id: "c", label: "Small changes can be decided quickly" },
            { id: "d", label: "The board no longer needs to meet" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Delegation lets small changes be decided quickly and frees the board for bigger decisions. Changes still need assessing.",
          topic: "Practices",
        },
      ],
    },
  ],
};
