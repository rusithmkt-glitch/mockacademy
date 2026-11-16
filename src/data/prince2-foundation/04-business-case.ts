import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const businessCaseModule: CourseModule = {
  id: "m4",
  slug: "business-case",
  order: 4,
  title: "Business case",
  shortTitle: "Business case",
  tagline: "Why the project is worth doing, and how you prove it stays worth doing.",
  description:
    "The first of the seven practices in PRINCE2 7th edition. You'll build Fern & Flour's business case for York, plan how benefits will be measured and keep the justification alive from start to finish.",
  scene: "starting",
  sessions: [
    {
      id: "business-case/outputs-outcomes-benefits",
      slug: "outputs-outcomes-benefits",
      title: "Outputs, outcomes and benefits",
      summary:
        "The chain that connects what a project builds to the value it creates, and the difference between benefits and dis-benefits.",
      durationMinutes: 13,
      objectives: [
        "Distinguish outputs, outcomes and benefits",
        "Define a dis-benefit",
        "Explain the purpose of the business case practice",
      ],
      sections: [
        {
          id: "m4-s1-1",
          paragraphs: [
            "It's time to start the practices, beginning with the one that asks the biggest question: why are we doing this?",
            "Let's say Tom asks you to explain the York project in one sentence. You say, \"We're fitting out a shop.\" Tom frowns. \"That's what we're *building*. What do we actually *get*?\"",
          ],
          scenario: {
            question: "What does Fern & Flour actually get from York?",
            steps: [
              {
                title: "The output",
                body: "The project delivers a fitted, working shop: ovens, counter, chiller, seating and signage. That's the **output**.",
              },
              {
                title: "The outcome",
                body: "When the shop opens, York customers start buying your bread and coffee every morning. That change is the **outcome**.",
              },
              {
                title: "The benefit",
                body: "The outcome brings a measurable gain: around **£4,000 of extra sales a week**. That's the **benefit**, and it's why you're spending £85,000.",
              },
              {
                title: "That's the idea",
                body: "A project creates **outputs**. Using them creates **outcomes**. Outcomes lead to measurable **benefits**. The business case explains this chain and why it's worth the cost.",
              },
            ],
          },
        },
        {
          id: "m4-s1-2",
          heading: "Three words to get right",
          paragraphs: ["These three terms come up again and again in PRINCE2 7th edition:"],
          bullets: [
            "**Output**: a product the project delivers and hands over, such as the fitted shop or the pre-order app",
            "**Outcome**: the result of the change that comes from using the outputs, such as customers buying in York or ordering ahead",
            "**Benefit**: the measurable improvement from an outcome that's seen as positive by stakeholders, such as more sales or shorter queues",
          ],
          callout: {
            tone: "tip",
            title: "A quick test",
            body: "If you can **touch it or hand it over**, it's an output. If it describes **people working differently**, it's an outcome. If you can **measure the gain**, it's a benefit.",
          },
        },
        {
          id: "m4-s1-3",
          heading: "Dis-benefits",
          paragraphs: [
            "Not every result is welcome. A **dis-benefit** is a measurable result of an outcome that one or more stakeholders see as negative.",
            "For York, Priya will spend two days a week there for the first three months, so the Leeds shop loses some of its head baker's time. Some Leeds regulars may switch to York. These are dis-benefits, and an honest business case includes them.",
          ],
        },
        {
          id: "m4-s1-4",
          heading: "What the business case practice is for",
          paragraphs: [
            "The business case practice helps the project's decision-makers judge whether the project is, and remains, **desirable, viable and achievable**. It's how the principle of continued business justification is put into action.",
            "In practice, that means writing down the reasons for the project, the options considered, the costs, risks and benefits, and then keeping that picture up to date as the project moves on.",
          ],
        },
        {
          id: "m4-s1-5",
          heading: "Outputs on the app",
          paragraphs: [
            "The same chain works for the pre-order app. The **output** is the app itself. The **outcome** is regulars ordering the night before instead of queuing. The **benefits** might be shorter queues, less waste because you bake to order, and more repeat sales.",
            "Notice that benefits usually appear **after** the outputs are handed over. That's why some of them are measured long after the project has closed.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Know the difference between an **output** (a specialist product handed over), an **outcome** (the result of change from using the outputs) and a **benefit** (the measurable improvement from an outcome). A **dis-benefit** is a measurable result seen as negative by one or more stakeholders.",
          },
        },
      ],
      keyPoints: [
        "Outputs are the products a project delivers.",
        "Outcomes are the changes that come from using those outputs.",
        "Benefits are measurable improvements from outcomes; dis-benefits are measurable negatives.",
        "The business case practice tests whether the project is desirable, viable and achievable.",
      ],
      knowledgeCheck: {
        id: "m4-s1-kc",
        question: "\"Regulars now order bread the night before instead of queuing.\" What is this?",
        options: ["An output", "A dis-benefit", "A benefit", "An outcome"],
        correctOption: 3,
        explanation:
          "It describes a change in how people behave because of the app, so it's an outcome. The shorter queues and extra sales that follow are benefits.",
      },
      assessment: [
        {
          id: "m4-s1-a1",
          type: "single",
          prompt: "Which of these is an output of the York project?",
          options: [
            { id: "a", label: "£4,000 of extra sales each week" },
            { id: "b", label: "The fitted shop with its ovens and counter" },
            { id: "c", label: "York customers buying breakfast near the station" },
            { id: "d", label: "Shorter queues in Leeds" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The fitted shop is a product the project delivers and hands over, so it's an output.",
          topic: "Practices",
        },
        {
          id: "m4-s1-a2",
          type: "boolean",
          prompt:
            "A dis-benefit is a measurable result of an outcome that one or more stakeholders see as negative.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "That's the definition. For York, Leeds losing some of Priya's time is an example.",
          topic: "Practices",
        },
        {
          id: "m4-s1-a3",
          type: "multiple",
          prompt: "Which TWO are benefits of the pre-order app?",
          options: [
            { id: "a", label: "Less food waste because more is baked to order" },
            { id: "b", label: "The app's collection screen" },
            { id: "c", label: "Higher repeat sales from regulars" },
            { id: "d", label: "The app's test plan" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Less waste and higher repeat sales are measurable improvements. The screen and test plan are products.",
          topic: "Practices",
        },
        {
          id: "m4-s1-a4",
          type: "single",
          prompt: "What is the purpose of the business case practice?",
          options: [
            { id: "a", label: "To set the detailed schedule for each team" },
            { id: "b", label: "To help decide whether the project is and remains desirable, viable and achievable" },
            { id: "c", label: "To record every issue raised on the project" },
            { id: "d", label: "To define the quality review technique" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The business case practice supports decision-making about whether the project is worth doing, and still worth doing.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "business-case/building-the-business-case",
      slug: "building-the-business-case",
      title: "Building the business case",
      summary:
        "What goes into a business case, how options are compared, and how the case develops from outline to detailed.",
      durationMinutes: 15,
      objectives: [
        "List the main contents of a business case",
        "Explain why business options, including doing nothing, are compared",
        "Describe how the business case develops through the project",
      ],
      sections: [
        {
          id: "m4-s2-1",
          paragraphs: [
            "It's time to actually write the York business case.",
            "Let's say your bank wants to see it before agreeing a loan. You start with: \"York is a great idea and everyone's asking for it.\" Ruth, your accountant, reads it and hands it back. \"A bank won't lend on enthusiasm.\"",
          ],
          scenario: {
            question: "What does a convincing business case need?",
            steps: [
              {
                title: "The reasons",
                body: "Why now? Customers keep asking, the Leeds shop is at capacity and there's no independent bakery near York station.",
              },
              {
                title: "The options",
                body: "Do nothing. Do the minimum: a weekend market stall in York. Or do something: a full shop. Each is costed and compared.",
              },
              {
                title: "The numbers",
                body: "The full shop costs **£85,000**, brings around **£4,000 a week** in extra sales and pays back in about **two years**. The stall is cheaper but brings far less.",
              },
              {
                title: "That's the idea",
                body: "A business case brings together the **reasons**, **options**, **benefits**, **dis-benefits**, **costs**, **timescales** and **major risks**, so decision-makers can judge whether the investment is worth it.",
              },
            ],
          },
        },
        {
          id: "m4-s2-2",
          heading: "What goes in",
          paragraphs: ["A business case usually covers:"],
          bullets: [
            "**Executive summary**: the headline case in a few lines",
            "**Reasons**: why the project is needed",
            "**Business options**: the choices considered and why one is recommended",
            "**Expected benefits** and **dis-benefits**, with how they'll be measured",
            "**Timescale**: when the project runs and when benefits are expected",
            "**Costs**: the project costs and the running costs afterwards",
            "**Investment appraisal**: comparing costs with benefits over time",
            "**Major risks**: the main threats and opportunities affecting the case",
          ],
        },
        {
          id: "m4-s2-3",
          heading: "Always include doing nothing",
          paragraphs: [
            "Comparing options is at the heart of a business case. There are usually at least three: **do nothing**, **do the minimum** and **do something**.",
            "Doing nothing might sound pointless, but it gives you the baseline. If you do nothing, the Leeds queues get longer and a competitor may open in York first. Every other option is judged against that picture.",
          ],
          callout: {
            tone: "tip",
            title: "Why the stall lost",
            body: "The weekend stall cost £6,000 but could only reach a fraction of York's weekday commuters. The full shop cost more but delivered far more benefit per pound.",
          },
        },
        {
          id: "m4-s2-4",
          heading: "From outline to detailed",
          paragraphs: [
            "The business case isn't written once. It grows as you learn more:",
          ],
          bullets: [
            "**Starting up**: an **outline business case** is prepared as part of the project brief. It's enough to decide whether to invest in initiation",
            "**Initiating**: it's developed into a **detailed business case**, with firm costs, timescales and risks, and becomes part of the project initiation documentation",
            "**Stage boundaries**: it's updated with actual costs and new forecasts before the next stage is authorised",
            "**Closing**: it's used to confirm what was achieved and what benefits are still to come",
          ],
        },
        {
          id: "m4-s2-5",
          heading: "Who does what",
          paragraphs: [
            "The **project executive** owns the business case and is responsible for securing the funding. That's you. In practice, Sam usually prepares it on your behalf, with input from Ruth and others.",
            "The **senior user** specifies the benefits the users expect and is accountable for showing they're realised. The **senior supplier** confirms the supplier side is realistic. **Project assurance**, here Ruth, checks the case stays sound.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Remember the **outline business case** is created when starting up the project and refined into a **detailed business case** during initiation. The **project executive** owns it. Business options usually include **do nothing**, **do the minimum** and **do something**.",
          },
        },
      ],
      keyPoints: [
        "A business case covers reasons, options, benefits, dis-benefits, timescale, costs, investment appraisal and major risks.",
        "Compare options, including doing nothing, to find the best value.",
        "The case starts as an outline when starting up and becomes detailed during initiation.",
        "The project executive owns the business case; the senior user specifies the benefits.",
      ],
      knowledgeCheck: {
        id: "m4-s2-kc",
        question: "When is the outline business case first prepared?",
        options: [
          "When starting up the project, as part of the project brief",
          "At the end of the final stage",
          "Only after the first delivery stage is complete",
          "During each quality review",
        ],
        correctOption: 0,
        explanation:
          "The outline business case is prepared when starting up the project, then refined into a detailed business case during initiation.",
      },
      assessment: [
        {
          id: "m4-s2-a1",
          type: "single",
          prompt: "Who owns the business case?",
          options: [
            { id: "a", label: "The project manager" },
            { id: "b", label: "The senior supplier" },
            { id: "c", label: "The project executive" },
            { id: "d", label: "Project support" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The project executive owns the business case. The project manager often prepares it on the executive's behalf.",
          topic: "Practices",
        },
        {
          id: "m4-s2-a2",
          type: "boolean",
          prompt: "A business case should normally include a \"do nothing\" option.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Doing nothing gives a baseline against which the other options are compared.",
          topic: "Practices",
        },
        {
          id: "m4-s2-a3",
          type: "multiple",
          prompt: "Which TWO would you expect to find in a business case?",
          options: [
            { id: "a", label: "Investment appraisal" },
            { id: "b", label: "Daily notes from the site foreman" },
            { id: "c", label: "Expected dis-benefits" },
            { id: "d", label: "The quality review attendance list" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Investment appraisal and dis-benefits are standard business case contents. The others are records kept elsewhere.",
          topic: "Practices",
        },
        {
          id: "m4-s2-a4",
          type: "single",
          prompt: "During initiation, what happens to the business case?",
          options: [
            { id: "a", label: "It's discarded and replaced by the project plan" },
            { id: "b", label: "It's developed into a detailed business case" },
            { id: "c", label: "It's sent to the supplier to approve" },
            { id: "d", label: "Nothing; it isn't touched until closure" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The outline business case is refined into a detailed business case during initiation, with firmer costs, timescales and risks.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "business-case/benefits-management-approach",
      slug: "benefits-management-approach",
      title: "The benefits management approach",
      summary:
        "How you plan to measure benefits, who measures them and when, including the benefits that only appear after the project closes.",
      durationMinutes: 13,
      objectives: [
        "Explain the purpose of the benefits management approach",
        "Describe what makes a benefit measurable",
        "Recognise that many benefits are measured after project closure",
      ],
      sections: [
        {
          id: "m4-s3-1",
          paragraphs: [
            "It's time to plan how you'll prove the benefits are real.",
            "Let's say the York shop has been open for six months. Tom asks, \"So, are we making the £4,000 a week?\" You realise nobody ever agreed how to measure it, or what sales looked like before.",
          ],
          scenario: {
            question: "How should benefits be measured?",
            steps: [
              {
                title: "Start with a baseline",
                body: "Before York opens, record current weekly sales across the business. Without a starting point, you can't measure a change.",
              },
              {
                title: "Decide how and when",
                body: "Take weekly sales from the York till, review them monthly and compare them with the forecast at 3, 6 and 12 months after opening.",
              },
              {
                title: "Name who's responsible",
                body: "Priya, as senior user, is accountable for showing the benefits are realised. Ruth pulls the figures together.",
              },
              {
                title: "That's the idea",
                body: "The **benefits management approach** sets out **what** will be measured, **how**, **when** and by **whom**, including reviews that happen after the project has closed.",
              },
            ],
          },
        },
        {
          id: "m4-s3-2",
          heading: "What it contains",
          paragraphs: [
            "The **benefits management approach** is one of the management approaches prepared during initiation. It typically covers:",
          ],
          bullets: [
            "**The benefits** and dis-benefits expected, linked to the business case",
            "**Baselines**: what things look like before the change",
            "**Measures**: how each benefit will be measured",
            "**Timing**: when each benefit will be reviewed",
            "**Responsibilities**: who measures and who's accountable",
            "**Resources** needed to carry out the reviews",
          ],
        },
        {
          id: "m4-s3-3",
          heading: "Make benefits measurable",
          paragraphs: [
            "A benefit you can't measure is just a hope. \"Customers will love York\" isn't a benefit. \"Average York sales of £4,000 a week within six months of opening\" is.",
            "Good benefit descriptions say what will improve, by how much, by when and how you'll know. They also note which outcomes they depend on, so you can see where things might go wrong.",
          ],
          callout: {
            tone: "tip",
            title: "Measure what you can",
            body: "Some benefits are harder to count, like customer goodwill. Look for a sensible proxy, such as online reviews or repeat visits from loyalty cards.",
          },
        },
        {
          id: "m4-s3-4",
          heading: "Benefits after closure",
          paragraphs: [
            "Most benefits don't arrive until well after the outputs are handed over. The York project closes when the shop is open and running, but the real test of the £4,000 a week comes months later.",
            "That's why the benefits management approach looks beyond the project's end. Once the project closes, responsibility for the remaining reviews passes to the business. At Fern & Flour, that's you and Tom.",
          ],
        },
        {
          id: "m4-s3-5",
          heading: "Keeping it current",
          paragraphs: [
            "The benefits management approach is reviewed at each stage boundary, and any benefits already achieved are checked. At closure, it's updated so the business knows exactly which reviews are still to come.",
            "On the pre-order app, some benefits appear during the project. Once the first version is live, you can already measure how many orders come through it.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **benefits management approach** defines how and when benefits are **measured** and **reviewed**, often **after the project has closed**. It's created during **initiation**. The **senior user** is accountable for showing the users' benefits are realised.",
          },
        },
      ],
      keyPoints: [
        "The benefits management approach defines what, how, when and by whom benefits are measured.",
        "Benefits need baselines and clear measures to be provable.",
        "Many benefits are measured after the project closes, by the business.",
        "The senior user is accountable for showing the benefits are realised.",
      ],
      knowledgeCheck: {
        id: "m4-s3-kc",
        question:
          "Six months after opening, who is responsible for reviewing York's benefits, now that the project has closed?",
        options: [
          "The project manager, who stays on indefinitely",
          "The builder, under the contract",
          "The business, following the benefits management approach",
          "Nobody, because the project is closed",
        ],
        correctOption: 2,
        explanation:
          "After closure, the business takes responsibility for the benefit reviews set out in the benefits management approach.",
      },
      assessment: [
        {
          id: "m4-s3-a1",
          type: "single",
          prompt: "What is the main purpose of the benefits management approach?",
          options: [
            { id: "a", label: "To define how and when benefits will be measured and reviewed" },
            { id: "b", label: "To list the project's suppliers" },
            { id: "c", label: "To set the quality criteria for each product" },
            { id: "d", label: "To describe how issues are escalated" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "It sets out the measures, timing, responsibilities and resources for benefit reviews.",
          topic: "Practices",
        },
        {
          id: "m4-s3-a2",
          type: "boolean",
          prompt: "All benefits must be measured before the project closes.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Many benefits only appear after handover, so the approach includes reviews after closure.",
          topic: "Practices",
        },
        {
          id: "m4-s3-a3",
          type: "multiple",
          prompt: "Which TWO make a benefit measurable?",
          options: [
            { id: "a", label: "A baseline showing the starting point" },
            { id: "b", label: "An enthusiastic description" },
            { id: "c", label: "A clear measure and a target date" },
            { id: "d", label: "Approval from the supplier" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "A baseline, a measure and a target date make a benefit provable.",
          topic: "Practices",
        },
        {
          id: "m4-s3-a4",
          type: "single",
          prompt: "When is the benefits management approach first created?",
          options: [
            { id: "a", label: "During each quality review" },
            { id: "b", label: "During initiation" },
            { id: "c", label: "After the project closes" },
            { id: "d", label: "Only when an exception is raised" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Like the other management approaches, it's prepared during initiation and reviewed at stage boundaries.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "business-case/keeping-it-justified",
      slug: "keeping-it-justified",
      title: "Keeping the business case justified",
      summary:
        "How the business case is reviewed and updated through the project, and what happens when the numbers change.",
      durationMinutes: 13,
      objectives: [
        "Describe when the business case is reviewed",
        "Explain how changes and risks affect the business case",
        "Recognise when the project board should consider closing a project early",
      ],
      sections: [
        {
          id: "m4-s4-1",
          paragraphs: [
            "It's time to see the business case working as a living document.",
            "Let's say the damp in Stage 2 pushes the Stage 2 forecast to £45,000, and the coffee chain's opening means forecast York sales drop to £3,200 a week. Sam is preparing for the end of Stage 2.",
          ],
          scenario: {
            question: "Is York still worth doing?",
            steps: [
              {
                title: "Update the numbers",
                body: "Sam updates the business case: total cost now around **£90,000**, benefits around **£3,200 a week**. Payback stretches from two years to nearly three.",
              },
              {
                title: "Check the options again",
                body: "Could a bigger takeaway counter offset the coffee chain? Could Stage 3 be trimmed? Sam sets out the choices.",
              },
              {
                title: "The board decides",
                body: "You and the board agree the case is still acceptable, with a stronger focus on bread and cakes, which the coffee chain doesn't sell.",
              },
              {
                title: "That's the idea",
                body: "The business case is **reviewed and updated** at key points, especially **stage boundaries**, so every decision is based on current costs, benefits and risks.",
              },
            ],
          },
        },
        {
          id: "m4-s4-2",
          heading: "When it's reviewed",
          paragraphs: ["The business case gets a fresh look at several points:"],
          bullets: [
            "**At the end of each stage**, before the board authorises the next one",
            "**When an exception is raised**, because the exception plan may change costs or benefits",
            "**When a significant change is considered**, to see if it's worth it",
            "**At closure**, to confirm what was delivered and what benefits are still expected",
          ],
        },
        {
          id: "m4-s4-3",
          heading: "Changes, risks and the case",
          paragraphs: [
            "Every big decision on the project has a business case angle. Priya's bigger oven costs £3,000. Is it worth it? Only if it brings enough extra benefit, for example by letting York bake its own bread instead of shipping it from Leeds.",
            "Risks matter too. The business case summarises the **major risks** to the project's justification. If the overall risk picture gets worse, the case may no longer stack up, even if nothing has gone wrong yet.",
          ],
          callout: {
            tone: "tip",
            title: "Ask the question every time",
            body: "Before any big decision, ask: does this make the business case stronger or weaker? It keeps everyone focused on value, not just activity.",
          },
        },
        {
          id: "m4-s4-4",
          heading: "When to stop",
          paragraphs: [
            "If the business case can no longer be justified, the project board should change the project or stop it. Closing a project early is a valid business decision, not a failure.",
            "Let's say a bigger national chain had opened a bakery right next door instead. Forecast sales might fall so far that York could never pay back. Stopping before Stage 3 and subletting the shop could save tens of thousands of pounds.",
          ],
        },
        {
          id: "m4-s4-5",
          heading: "Who checks",
          paragraphs: [
            "The **project executive** is responsible for making sure the business case stays justified. The project manager keeps it updated, and **project assurance** checks it independently.",
            "At Fern & Flour, Ruth reviews the updated numbers at each stage end before the board meets. A second pair of eyes stops optimism from creeping in.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The business case is **reviewed at each stage boundary** and when exceptions or major changes occur. If it's no longer **desirable, viable and achievable**, the project board should consider changing direction or **closing the project early**.",
          },
        },
      ],
      keyPoints: [
        "The business case is reviewed at each stage end, at exceptions, at major changes and at closure.",
        "Changes and risks are judged by their effect on the business case.",
        "If the case can't be justified, change the project or close it early.",
        "The executive is responsible; project assurance checks independently.",
      ],
      knowledgeCheck: {
        id: "m4-s4-kc",
        question:
          "At the end of Stage 2, costs have risen and forecast sales have fallen. What should happen to the business case?",
        options: [
          "Nothing until the project closes",
          "It's updated so the board can decide whether to continue",
          "It's replaced by the stage plan",
          "The supplier rewrites it",
        ],
        correctOption: 1,
        explanation:
          "The business case is updated at stage boundaries so the board can make an informed decision about the next stage.",
      },
      assessment: [
        {
          id: "m4-s4-a1",
          type: "multiple",
          prompt: "Select two points at which the business case is typically reviewed.",
          options: [
            { id: "a", label: "At the end of each stage" },
            { id: "b", label: "At every checkpoint report" },
            { id: "c", label: "When an exception is raised" },
            { id: "d", label: "Only once, at the start" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Stage boundaries and exceptions are key review points. Checkpoint reports are team-level updates.",
          topic: "Practices",
        },
        {
          id: "m4-s4-a2",
          type: "boolean",
          prompt: "Closing a project early because it's no longer justified is a failure of PRINCE2.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Stopping a project that's no longer worth doing is a sensible business decision and exactly what the method intends.",
          topic: "Practices",
        },
        {
          id: "m4-s4-a3",
          type: "single",
          prompt: "Who is responsible for making sure the business case stays justified?",
          options: [
            { id: "a", label: "The team manager" },
            { id: "b", label: "The senior supplier" },
            { id: "c", label: "Project support" },
            { id: "d", label: "The project executive" },
          ],
          correctOptionIds: ["d"],
          explanation:
            "The executive owns the business case and is responsible for its continued justification.",
          topic: "Practices",
        },
        {
          id: "m4-s4-a4",
          type: "single",
          prompt: "Priya asks for a £3,000 oven upgrade. How should it be judged?",
          options: [
            { id: "a", label: "By its effect on the business case" },
            { id: "b", label: "By whether Priya is senior enough" },
            { id: "c", label: "By whether the builder can fit it" },
            { id: "d", label: "By the colour of the oven" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Significant changes are judged by whether their benefits justify their cost and risk, which is a business case question.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "business-case/sustainability",
      slug: "sustainability",
      title: "Sustainability",
      summary:
        "Why PRINCE2 7th edition treats sustainability as a performance target, and how to build it into the business case and the products.",
      durationMinutes: 13,
      objectives: [
        "Explain why sustainability is a performance target",
        "Describe how sustainability is reflected in the business case and products",
        "Recognise the purpose of the sustainability management approach",
      ],
      sections: [
        {
          id: "m4-s5-1",
          paragraphs: [
            "It's time to look at a performance target that's new in PRINCE2 7th edition: sustainability.",
            "Let's say Dev quotes for two kinds of ovens. The standard ones are £2,000 cheaper. The efficient ones cost more but use about 30% less energy. Sam asks which you want.",
          ],
          scenario: {
            question: "Is the cheaper oven the better deal?",
            steps: [
              {
                title: "The project view",
                body: "If you only look at the project budget, the standard ovens win. They save £2,000 now.",
              },
              {
                title: "The longer view",
                body: "The efficient ovens cut your energy bill by about £1,500 a year. Over ten years, that's far more than the £2,000 difference.",
              },
              {
                title: "The bigger picture",
                body: "Lower energy use also cuts emissions, and your customers increasingly care about that. It fits the kind of business you want Fern & Flour to be.",
              },
              {
                title: "That's the idea",
                body: "**Sustainability** is one of the seven performance targets. You set clear sustainability goals, build them into the business case and products, and manage them like cost or time.",
              },
            ],
          },
        },
        {
          id: "m4-s5-2",
          heading: "A performance target, not an add-on",
          paragraphs: [
            "In Module 1 you met the seven performance targets: **benefits, cost, time, quality, scope, risk and sustainability**. PRINCE2 7th edition added sustainability to the list to make it a normal part of project decisions.",
            "Like the others, sustainability can have targets and tolerances. The board might agree: \"York's energy use per loaf will be at least 20% lower than Leeds.\" If that's forecast to be missed by more than the tolerance, it's escalated like any other exception.",
          ],
        },
        {
          id: "m4-s5-3",
          heading: "What sustainability covers",
          paragraphs: [
            "Sustainability is broader than carbon. For York, it might include:",
          ],
          bullets: [
            "**Environmental**: energy-efficient ovens, LED lighting, reusing old display cabinets, less packaging",
            "**Social**: hiring locally, safe working on site, accessible shop design",
            "**Economic**: running costs over the shop's life, not just the build cost",
            "**Waste**: donating unsold bread each evening rather than throwing it away",
          ],
          callout: {
            tone: "tip",
            title: "Think whole life",
            body: "The project lasts months, but the shop's ovens will run for years. Sustainability asks you to think about the impact of your products over their **whole life**.",
          },
        },
        {
          id: "m4-s5-4",
          heading: "In the business case and products",
          paragraphs: [
            "Sustainability shows up throughout the project. The **business case** includes sustainability goals and their costs and benefits. **Product descriptions** can include sustainability requirements, for example \"the chiller must use a low-impact refrigerant\".",
            "The pre-order app has a sustainability angle too: baking to order means less waste. That's both a business benefit and a sustainability benefit.",
          ],
        },
        {
          id: "m4-s5-5",
          heading: "The sustainability management approach",
          paragraphs: [
            "PRINCE2 7th edition includes a **sustainability management approach**, one of the management approaches prepared during initiation. It explains how the project will meet its sustainability targets, how they'll be measured and reported, and who's responsible.",
            "On a small project like York, this could be a single page. What matters is that sustainability is planned, measured and reported, not just mentioned.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "**Sustainability** is one of the **seven performance targets** in PRINCE2 7th edition. It's managed like the others, with targets and tolerances, and planned in the **sustainability management approach**.",
          },
        },
      ],
      keyPoints: [
        "Sustainability is one of the seven performance targets in PRINCE2 7th edition.",
        "It can have targets and tolerances, managed like cost or time.",
        "It covers environmental, social and economic impacts over a product's whole life.",
        "The sustainability management approach plans how targets are met, measured and reported.",
      ],
      knowledgeCheck: {
        id: "m4-s5-kc",
        question:
          "Which of these is one of the seven performance targets in PRINCE2 7th edition?",
        options: ["Leadership", "Communication", "Sustainability", "Culture"],
        correctOption: 2,
        explanation:
          "The seven performance targets are benefits, cost, time, quality, scope, risk and sustainability.",
      },
      assessment: [
        {
          id: "m4-s5-a1",
          type: "boolean",
          prompt: "Sustainability can have targets and tolerances, just like cost and time.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "As a performance target, sustainability is planned, measured and controlled with tolerances.",
          topic: "Practices",
        },
        {
          id: "m4-s5-a2",
          type: "single",
          prompt: "Which management approach explains how sustainability targets will be met and measured?",
          options: [
            { id: "a", label: "The communication management approach" },
            { id: "b", label: "The sustainability management approach" },
            { id: "c", label: "The commercial management approach" },
            { id: "d", label: "The issue management approach" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The sustainability management approach covers how sustainability targets are achieved, measured and reported.",
          topic: "Practices",
        },
        {
          id: "m4-s5-a3",
          type: "multiple",
          prompt: "Which TWO are sustainability considerations for the York shop?",
          options: [
            { id: "a", label: "The energy use of the ovens over their life" },
            { id: "b", label: "The font on the menu boards" },
            { id: "c", label: "Donating unsold bread instead of binning it" },
            { id: "d", label: "The number of board meetings" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Whole-life energy use and waste are sustainability concerns. The others aren't.",
          topic: "Practices",
        },
        {
          id: "m4-s5-a4",
          type: "single",
          prompt: "Why might the more expensive, efficient ovens be the better choice?",
          options: [
            { id: "a", label: "Because the cheapest option is never allowed" },
            { id: "b", label: "Because suppliers prefer them" },
            { id: "c", label: "Because their whole-life costs and impacts are lower" },
            { id: "d", label: "Because they're quicker to install" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Sustainability asks you to look beyond the project budget to running costs and impacts over the product's whole life.",
          topic: "Practices",
        },
      ],
    },
  ],
};
