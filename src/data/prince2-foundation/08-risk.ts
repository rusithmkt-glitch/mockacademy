import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const riskModule: CourseModule = {
  id: "m8",
  slug: "risk",
  order: 8,
  title: "Risk",
  shortTitle: "Risk",
  tagline: "Spot the uncertainties early and decide what to do about them.",
  description:
    "The risk practice in PRINCE2 7th edition helps you manage uncertainty, both threats and opportunities. You'll identify, assess and respond to the York project's risks, from damp walls to a new coffee chain down the road.",
  scene: "risk",
  sessions: [
    {
      id: "risk/threats-and-opportunities",
      slug: "threats-and-opportunities",
      title: "Threats and opportunities",
      summary:
        "What a risk is in PRINCE2, why it can be positive or negative, and how to describe one clearly.",
      durationMinutes: 13,
      objectives: [
        "Define a risk in PRINCE2 terms",
        "Distinguish threats from opportunities",
        "Describe a risk using cause, event and effect",
      ],
      sections: [
        {
          id: "m8-s1-1",
          paragraphs: [
            "It's time to think about what might happen, before it does.",
            "Let's say Dev mentions, during the first site visit, that the back wall \"looks a bit damp\". Nothing's wrong yet. The plaster's fine. But if there is damp, fixing it could cost thousands and add weeks.",
          ],
          scenario: {
            question: "Is this a problem yet?",
            steps: [
              {
                title: "Not yet",
                body: "Nothing has gone wrong. It's something that **might** happen. That makes it a risk, not an issue.",
              },
              {
                title: "It could go either way",
                body: "Meanwhile, the landlord hints the shop next door might come up for rent. That's uncertain too, but it could be good news: more space for seating.",
              },
              {
                title: "Write them down clearly",
                body: "You note both: the damp as a **threat** to cost and time, and the extra space as an **opportunity** for more sales.",
              },
              {
                title: "That's the idea",
                body: "A **risk** is an uncertain event that, if it happens, affects the project's objectives. Negative risks are **threats**; positive risks are **opportunities**.",
              },
            ],
          },
        },
        {
          id: "m8-s1-2",
          heading: "Risks vs issues",
          paragraphs: [
            "A **risk** is something that might happen. An **issue** is something that has happened, or is happening, and needs management attention.",
            "If the damp survey confirms damp, the risk has become an issue. You'll learn how to handle issues in the next module.",
          ],
        },
        {
          id: "m8-s1-3",
          heading: "Cause, event, effect",
          paragraphs: [
            "Describing a risk clearly makes it easier to manage. A useful format splits it into three parts:",
          ],
          bullets: [
            "**Cause**: the situation that gives rise to the risk. \"The building is over 100 years old and the back wall shows signs of moisture...\"",
            "**Event**: the uncertain thing that might happen. \"...there may be rising damp needing treatment...\"",
            "**Effect**: the impact on the objectives. \"...which would add up to £5,000 and two weeks to Stage 2.\"",
          ],
          callout: {
            tone: "tip",
            title: "Why it helps",
            body: "Splitting a risk this way shows where to act. You can't change the building's age (the cause), but you can survey early (the event) or set money aside (the effect).",
          },
        },
        {
          id: "m8-s1-4",
          heading: "Opportunities count too",
          paragraphs: [
            "PRINCE2 7th edition treats opportunities as seriously as threats. A project that only manages threats misses chances to deliver more.",
            "Other York opportunities: a supplier offering a discount for early payment, or a local food festival in November that could launch the shop.",
          ],
        },
        {
          id: "m8-s1-5",
          heading: "Risk appetite and tolerance",
          paragraphs: [
            "**Risk appetite** is how much risk the business is willing to take. **Risk tolerance** sets the limits on that, beyond which risks must be escalated.",
            "Fern & Flour is a small business, so your risk appetite is fairly low. A risk that could delay opening past Christmas, your busiest time, would need to be escalated to the board straight away.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "A **risk** is an uncertain event that would affect objectives if it occurs. **Threats** are negative; **opportunities** are positive. Describe risks by **cause**, **event** and **effect**. A risk that has happened becomes an **issue**.",
          },
        },
      ],
      keyPoints: [
        "A risk is an uncertain event that would affect objectives if it happened.",
        "Threats have negative effects; opportunities have positive ones.",
        "Describe risks by cause, event and effect.",
        "Risk appetite and tolerance set how much risk the business accepts.",
      ],
      knowledgeCheck: {
        id: "m8-s1-kc",
        question: "The landlord says the shop next door might become available. What is this?",
        options: ["A threat", "An opportunity", "An issue", "A concession"],
        correctOption: 1,
        explanation:
          "It's an uncertain event with a potentially positive effect, so it's an opportunity.",
      },
      assessment: [
        {
          id: "m8-s1-a1",
          type: "single",
          prompt: "What is the difference between a risk and an issue?",
          options: [
            { id: "a", label: "A risk is uncertain; an issue has happened or is happening" },
            { id: "b", label: "A risk is always negative; an issue is always positive" },
            { id: "c", label: "Risks are managed by suppliers; issues by the board" },
            { id: "d", label: "There is no difference" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "A risk might happen. An issue is something that has happened and needs attention.",
          topic: "Practices",
        },
        {
          id: "m8-s1-a2",
          type: "single",
          prompt: "\"...which would add £5,000 and two weeks to Stage 2.\" Which part of the risk description is this?",
          options: [
            { id: "a", label: "Cause" },
            { id: "b", label: "Event" },
            { id: "c", label: "Effect" },
            { id: "d", label: "Proximity" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The effect describes the impact on the project's objectives.",
          topic: "Practices",
        },
        {
          id: "m8-s1-a3",
          type: "boolean",
          prompt: "PRINCE2 7th edition manages only threats, not opportunities.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Risks include both threats and opportunities, and both should be managed.",
          topic: "Practices",
        },
        {
          id: "m8-s1-a4",
          type: "multiple",
          prompt: "Which TWO are parts of a well-described risk?",
          options: [
            { id: "a", label: "Cause" },
            { id: "b", label: "Concession" },
            { id: "c", label: "Event" },
            { id: "d", label: "Baseline" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Risks are described by cause, event and effect.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "risk/risk-management-approach",
      slug: "risk-management-approach",
      title: "The risk management approach",
      summary:
        "How the project decides in advance how risks will be identified, assessed, handled and escalated.",
      durationMinutes: 12,
      objectives: [
        "Describe the purpose of the risk management approach",
        "Explain the purpose of the risk register",
        "Explain the risk budget",
      ],
      sections: [
        {
          id: "m8-s2-1",
          paragraphs: [
            "It's time to agree, as a team, how risks will be managed on York.",
            "Let's say Sam rates the damp risk as \"high\". Dev calls it \"medium\". Priya hadn't heard about it at all. Everyone's using a different scale, and nobody's sure who should act.",
          ],
          scenario: {
            question: "What's missing?",
            steps: [
              {
                title: "A common scale",
                body: "Sam proposes a simple 1–5 scale for probability and impact, with examples of what each number means for York.",
              },
              {
                title: "Clear roles",
                body: "Every risk gets an owner. Anything that could cost more than £1,000 or a week's delay goes to the board.",
              },
              {
                title: "A single list",
                body: "All risks go in one register that Ellie keeps up to date, and Sam reviews it every week.",
              },
              {
                title: "That's the idea",
                body: "The **risk management approach** sets out how risk will be managed on this project: the procedure, scales, roles, tools and reporting.",
              },
            ],
          },
        },
        {
          id: "m8-s2-2",
          heading: "What it covers",
          paragraphs: [
            "The risk management approach is created during **initiation** and forms part of the PID. It typically covers:",
          ],
          bullets: [
            "The **procedure** for managing risks",
            "The **scales** for probability, impact and proximity",
            "The **risk appetite** and **risk tolerance**, and when to escalate",
            "The **roles and responsibilities**, including risk owners",
            "The **tools**, **records** and **reporting** to use",
            "Use of a **risk budget**",
          ],
        },
        {
          id: "m8-s2-3",
          heading: "The risk register",
          paragraphs: [
            "The **risk register** records every identified risk. It's created during initiation. Each entry usually includes:",
          ],
          bullets: [
            "A **risk identifier** and the **author**",
            "The **category** and **description** (cause, event, effect)",
            "**Probability**, **impact** and **proximity**",
            "The **risk response category** and planned actions",
            "The **risk owner**, **risk actionee** and current **status**",
          ],
          callout: {
            tone: "note",
            title: "Before initiation",
            body: "Risks spotted in starting up a project, before the register exists, are recorded in the **daily log** and moved across later.",
          },
        },
        {
          id: "m8-s2-4",
          heading: "The risk budget",
          paragraphs: [
            "A **risk budget** is money set aside to fund risk responses, such as fallback plans, if needed. York has a £5,000 risk budget.",
            "It's separate from the **change budget**, which pays for requested changes. Keeping them apart stops the change budget being used up on risks, or the other way round.",
          ],
        },
        {
          id: "m8-s2-5",
          heading: "Fit the approach to the project",
          paragraphs: [
            "For York, the approach is two pages, a 1–5 scale and a spreadsheet register. A project building a hospital would need formal risk workshops, software and independent risk reviews.",
            "Tailor the approach to the size and risk of the project, but always make sure everyone uses the same procedure and scales.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **risk management approach** is created in **initiation**. It covers procedure, scales, risk appetite and tolerance, roles, tools, reporting and the **risk budget**. The **risk register** records each risk's details, owner and status.",
          },
        },
      ],
      keyPoints: [
        "The risk management approach describes how risk will be managed on the project.",
        "It's created during initiation and is part of the PID.",
        "The risk register records each risk's description, assessment, response, owner and status.",
        "The risk budget funds risk responses and is separate from the change budget.",
      ],
      knowledgeCheck: {
        id: "m8-s2-kc",
        question: "Where would Sam record a risk spotted during starting up a project, before the risk register exists?",
        options: ["The quality register", "The daily log", "The end stage report", "The benefits management approach"],
        correctOption: 1,
        explanation:
          "Before the risk register is created in initiation, risks are noted in the daily log.",
      },
      assessment: [
        {
          id: "m8-s2-a1",
          type: "single",
          prompt: "What is the risk budget used for?",
          options: [
            { id: "a", label: "Funding requested changes to scope" },
            { id: "b", label: "Funding responses to risks, such as fallback plans" },
            { id: "c", label: "Paying the project manager" },
            { id: "d", label: "Covering normal estimating errors" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The risk budget funds risk responses. Requested changes are paid from the change budget.",
          topic: "Practices",
        },
        {
          id: "m8-s2-a2",
          type: "boolean",
          prompt: "The risk management approach is created during initiation.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Like the other management approaches, it's created during initiation as part of the PID.",
          topic: "Practices",
        },
        {
          id: "m8-s2-a3",
          type: "multiple",
          prompt: "Which TWO would you expect in a risk register entry?",
          options: [
            { id: "a", label: "Risk owner" },
            { id: "b", label: "Quality review outcome" },
            { id: "c", label: "Proximity" },
            { id: "d", label: "Acceptance record" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Risk register entries include owner and proximity, among other details.",
          topic: "Practices",
        },
        {
          id: "m8-s2-a4",
          type: "single",
          prompt: "Why should everyone use the same probability and impact scales?",
          options: [
            { id: "a", label: "So that risks can be compared and prioritised consistently" },
            { id: "b", label: "Because PRINCE2 requires a 1–10 scale" },
            { id: "c", label: "So that the supplier owns every risk" },
            { id: "d", label: "To avoid recording opportunities" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Common scales let the team compare and prioritise risks consistently.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "risk/identify-and-assess",
      slug: "identify-and-assess",
      title: "Identify and assess",
      summary:
        "The first two steps of the risk management procedure: finding risks and working out how much they matter.",
      durationMinutes: 14,
      objectives: [
        "Name the steps in the risk management procedure",
        "Describe ways to identify risks",
        "Assess risks using probability, impact and proximity",
      ],
      sections: [
        {
          id: "m8-s3-1",
          paragraphs: [
            "It's time to find the York project's risks and work out which ones matter most.",
            "Let's say Sam runs a one-hour risk workshop with the board and team managers. Within 20 minutes, the whiteboard has 30 sticky notes. They can't all be top priority.",
          ],
          scenario: {
            question: "How do you sort them?",
            steps: [
              {
                title: "Find them",
                body: "The team uses the lessons from the Leeds shop, a checklist of common building risks and their own experience. The sticky notes cover the damp, delayed deliveries, staff hiring and more.",
              },
              {
                title: "Score them",
                body: "Each risk gets a probability and impact score from 1 to 5. Damp: probability 3, impact 4. A late menu board: probability 2, impact 1.",
              },
              {
                title: "Check the timing",
                body: "The damp would show up in weeks 4–6, so it's close. Hiring York staff is months away. Closer risks need attention first.",
              },
              {
                title: "That's the idea",
                body: "The risk management procedure starts with **identify** and **assess**. Assessment uses **probability**, **impact** and **proximity** to prioritise.",
              },
            ],
          },
        },
        {
          id: "m8-s3-2",
          heading: "The risk management procedure",
          paragraphs: ["PRINCE2 7th edition's risk procedure has five steps:"],
          bullets: [
            "**Identify**: find the risks and describe them",
            "**Assess**: estimate and evaluate them",
            "**Plan**: choose responses",
            "**Implement**: carry out the responses",
            "**Communicate**: share risk information throughout, not just at the end",
          ],
          callout: {
            tone: "tip",
            title: "Communicate runs throughout",
            body: "The first four steps happen in order for each risk. **Communicate** runs alongside all of them throughout the project.",
          },
        },
        {
          id: "m8-s3-3",
          heading: "Identify",
          paragraphs: [
            "Identifying risks means finding them and describing them clearly. Useful techniques include:",
          ],
          bullets: [
            "**Reviewing lessons** from previous projects",
            "**Checklists** of common risks",
            "**Workshops** and brainstorming",
            "**Prompt lists**, like political, economic, social, technological, legal and environmental factors",
          ],
        },
        {
          id: "m8-s3-4",
          heading: "Assess",
          paragraphs: [
            "Assessing a risk means estimating it and then evaluating it. Estimate each risk on three dimensions:",
          ],
          bullets: [
            "**Probability**: how likely it is to happen",
            "**Impact**: how much it would affect the objectives",
            "**Proximity**: when it might happen",
          ],
          callout: {
            tone: "note",
            title: "A probability impact grid",
            body: "Plotting risks on a grid of probability against impact makes the biggest ones easy to spot. The damp sits near the top right.",
          },
        },
        {
          id: "m8-s3-5",
          heading: "Evaluate the overall picture",
          paragraphs: [
            "Evaluating means looking at the **overall risk exposure** of the project, not just each risk on its own. Five small risks to the opening date could add up to a big one.",
            "Sam compares the overall exposure with the risk appetite. If it's too high, the board needs to know before it approves the project plan.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The risk procedure is **identify**, **assess**, **plan**, **implement** and **communicate**. Assess risks by **probability**, **impact** and **proximity**, and evaluate the **overall risk exposure** against the risk appetite.",
          },
        },
      ],
      keyPoints: [
        "The risk procedure is identify, assess, plan, implement and communicate.",
        "Communicate runs alongside the other steps throughout the project.",
        "Risks are estimated by probability, impact and proximity.",
        "Evaluating looks at the overall risk exposure, not just individual risks.",
      ],
      knowledgeCheck: {
        id: "m8-s3-kc",
        question: "Which assessment dimension describes when a risk might happen?",
        options: ["Probability", "Impact", "Proximity", "Appetite"],
        correctOption: 2,
        explanation:
          "Proximity describes how soon a risk might occur.",
      },
      assessment: [
        {
          id: "m8-s3-a1",
          type: "single",
          prompt: "Which step of the risk procedure runs throughout the others?",
          options: [
            { id: "a", label: "Identify" },
            { id: "b", label: "Assess" },
            { id: "c", label: "Implement" },
            { id: "d", label: "Communicate" },
          ],
          correctOptionIds: ["d"],
          explanation:
            "Communicate isn't a final step. It runs alongside identify, assess, plan and implement.",
          topic: "Practices",
        },
        {
          id: "m8-s3-a2",
          type: "multiple",
          prompt: "Which TWO are useful ways to identify risks?",
          options: [
            { id: "a", label: "Reviewing lessons from previous projects" },
            { id: "b", label: "Waiting for issues to happen" },
            { id: "c", label: "Running a risk workshop" },
            { id: "d", label: "Only asking the supplier" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Lessons, checklists, workshops and prompt lists all help identify risks.",
          topic: "Practices",
        },
        {
          id: "m8-s3-a3",
          type: "boolean",
          prompt: "Evaluating risks includes looking at the project's overall risk exposure.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Several small risks can add up, so the overall exposure is considered against risk appetite.",
          topic: "Practices",
        },
        {
          id: "m8-s3-a4",
          type: "single",
          prompt: "What is the correct order of the first four risk procedure steps?",
          options: [
            { id: "a", label: "Assess, identify, implement, plan" },
            { id: "b", label: "Identify, assess, plan, implement" },
            { id: "c", label: "Plan, identify, assess, implement" },
            { id: "d", label: "Identify, plan, assess, implement" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The order is identify, assess, plan and implement, with communicate running throughout.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "risk/plan-and-implement-responses",
      slug: "plan-and-implement-responses",
      title: "Plan and implement responses",
      summary:
        "The response options for threats and opportunities, and how to choose and carry them out.",
      durationMinutes: 15,
      objectives: [
        "Describe the response options for threats",
        "Describe the response options for opportunities",
        "Choose a proportionate response",
      ],
      sections: [
        {
          id: "m8-s4-1",
          paragraphs: [
            "It's time to decide what to do about the York risks.",
            "Let's say the damp is your top threat. Sam lays out the options at a board meeting. Each one costs something different and leaves a different amount of risk behind.",
          ],
          scenario: {
            question: "What could you do about the damp?",
            steps: [
              {
                title: "Reduce it",
                body: "Pay £400 for a damp survey in week 1. If there's damp, you'll know early and can plan the treatment before the plaster goes on.",
              },
              {
                title: "Prepare a fallback",
                body: "Set aside £5,000 from the risk budget in case treatment is needed. If the damp is found, the money is ready.",
              },
              {
                title: "Transfer some of it",
                body: "Ask Mistry Build to fix the price for any damp work in the contract, so overruns are Dev's problem, not yours.",
              },
              {
                title: "That's the idea",
                body: "Each threat or opportunity has a range of **risk responses**. Choose the one that's proportionate: worth what it costs compared with the risk it addresses.",
              },
            ],
          },
        },
        {
          id: "m8-s4-2",
          heading: "Responses to threats",
          paragraphs: ["PRINCE2 7th edition offers these responses to threats:"],
          bullets: [
            "**Avoid**: change the plan so the threat can't happen, or can't affect the project. Choose a different shop.",
            "**Reduce**: make the threat less likely or less severe. Do an early damp survey.",
            "**Prepare contingent plans**: plan what to do if it happens, often a **fallback** funded from the risk budget.",
            "**Transfer**: pass some of the financial impact to a third party, like a fixed-price contract or insurance.",
            "**Accept**: decide to take the risk and monitor it. A late menu board isn't worth spending on.",
            "**Share**: agree with a supplier to share the gains and losses, which applies to threats and opportunities.",
          ],
        },
        {
          id: "m8-s4-3",
          heading: "Responses to opportunities",
          paragraphs: ["For opportunities, the responses are mirror images:"],
          bullets: [
            "**Exploit**: change the plan to make sure the opportunity happens",
            "**Enhance**: make it more likely or more valuable",
            "**Share**: agree to share the gains with a supplier or partner",
            "**Reject**: decide not to pursue it, perhaps because it's not worth the effort",
          ],
          callout: {
            tone: "tip",
            title: "The shop next door",
            body: "If the next-door shop comes up, you could **enhance** the chance by telling the landlord early that you're interested. Or you could **reject** it if York is busy enough already.",
          },
        },
        {
          id: "m8-s4-4",
          heading: "Choosing a response",
          paragraphs: [
            "A good response is proportionate. Spending £5,000 to remove a risk that could cost £500 doesn't make sense.",
            "Responses can also create new risks, called **secondary risks**. A fixed-price contract might make Dev cut corners elsewhere. And after the response, some **residual risk** usually remains.",
          ],
        },
        {
          id: "m8-s4-5",
          heading: "Implement",
          paragraphs: [
            "Once responses are agreed, they're carried out and monitored. The planned survey is booked, the fallback money is earmarked and the register is updated.",
            "Sam checks whether each response is working. If the survey finds damp, the risk becomes an issue, and the fallback plan is triggered.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Threat responses: **avoid**, **reduce**, **prepare contingent plans** (fallback), **transfer**, **accept**, **share**. Opportunity responses: **exploit**, **enhance**, **share**, **reject**. Responses should be **proportionate**, and may leave **residual** or **secondary** risks.",
          },
        },
      ],
      keyPoints: [
        "Threat responses are avoid, reduce, prepare contingent plans, transfer, accept and share.",
        "Opportunity responses are exploit, enhance, share and reject.",
        "Responses should be proportionate to the risk.",
        "Responses can leave residual risk and create secondary risks.",
      ],
      knowledgeCheck: {
        id: "m8-s4-kc",
        question: "Paying £400 for an early damp survey to make the problem less severe is which response?",
        options: ["Avoid", "Reduce", "Accept", "Exploit"],
        correctOption: 1,
        explanation:
          "Reduce makes a threat less likely or less severe. The survey lets you deal with damp early, reducing its impact.",
      },
      assessment: [
        {
          id: "m8-s4-a1",
          type: "single",
          prompt: "Taking out insurance against a flood at the York shop is which response?",
          options: [
            { id: "a", label: "Avoid" },
            { id: "b", label: "Transfer" },
            { id: "c", label: "Enhance" },
            { id: "d", label: "Reject" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Transfer passes some of the financial impact of a threat to a third party, like an insurer.",
          topic: "Practices",
        },
        {
          id: "m8-s4-a2",
          type: "multiple",
          prompt: "Which TWO are responses to opportunities?",
          options: [
            { id: "a", label: "Exploit" },
            { id: "b", label: "Avoid" },
            { id: "c", label: "Enhance" },
            { id: "d", label: "Transfer" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Opportunity responses are exploit, enhance, share and reject.",
          topic: "Practices",
        },
        {
          id: "m8-s4-a3",
          type: "boolean",
          prompt: "A risk response can create new risks.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "These are called secondary risks and should be identified and managed too.",
          topic: "Practices",
        },
        {
          id: "m8-s4-a4",
          type: "single",
          prompt: "Which response sets aside a plan and money to use only if the threat happens?",
          options: [
            { id: "a", label: "Prepare contingent plans" },
            { id: "b", label: "Accept" },
            { id: "c", label: "Exploit" },
            { id: "d", label: "Share" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Contingent plans, such as a fallback, are prepared in advance and used only if the risk occurs.",
          topic: "Practices",
        },
      ],
    },
    {
      id: "risk/communicate-and-risk-roles",
      slug: "communicate-and-risk-roles",
      title: "Communicating risk and risk roles",
      summary:
        "Who owns and acts on each risk, and how risk information is shared with the board and stakeholders.",
      durationMinutes: 12,
      objectives: [
        "Distinguish the risk owner from the risk actionee",
        "Describe how risks are communicated",
        "Explain who is responsible for risk at each level",
      ],
      sections: [
        {
          id: "m8-s5-1",
          paragraphs: [
            "It's time to make sure every York risk has someone looking after it.",
            "Let's say the damp survey is agreed at the board, but three weeks later it hasn't happened. Sam thought Dev was booking it. Dev thought Sam was. Nobody was clearly in charge of it.",
          ],
          scenario: {
            question: "How do you stop this happening?",
            steps: [
              {
                title: "Name an owner",
                body: "Dev becomes the **risk owner** for the damp. Dev is responsible for managing and monitoring the risk and its responses.",
              },
              {
                title: "Name an actionee",
                body: "The site foreman becomes the **risk actionee** for the survey: the person who actually books it and makes sure it happens.",
              },
              {
                title: "Keep everyone informed",
                body: "Sam includes the top five risks in every highlight report, so the board can see what's changing.",
              },
              {
                title: "That's the idea",
                body: "Every risk has a **risk owner** who manages it, and responses may have **risk actionees** who carry them out. Risk information is **communicated** throughout the project.",
              },
            ],
          },
        },
        {
          id: "m8-s5-2",
          heading: "Risk owner and risk actionee",
          paragraphs: [
            "The **risk owner** is responsible for managing a particular risk: monitoring it and making sure the responses are carried out. They should be the person best placed to keep an eye on it.",
            "A **risk actionee** carries out a specific response, on behalf of the owner. One risk might have several actionees for different actions.",
          ],
          callout: {
            tone: "tip",
            title: "Can they be the same?",
            body: "Yes. On a small project, the owner and actionee are often the same person. The point is that each risk and each action has a clear name next to it.",
          },
        },
        {
          id: "m8-s5-3",
          heading: "Who does what",
          paragraphs: ["Risk responsibilities by role:"],
          bullets: [
            "**Business layer**: sets the risk appetite and project risk tolerance",
            "**Project executive**: is accountable for all aspects of risk management on the project",
            "**Senior user** and **senior supplier**: own risks that relate to their interests",
            "**Project manager**: creates the risk management approach and register and manages risk day to day",
            "**Team managers**: help identify and manage risks in their work packages",
            "**Project support**: helps maintain the risk register",
          ],
        },
        {
          id: "m8-s5-4",
          heading: "Communicating risk",
          paragraphs: ["Risk information is shared through the project's normal reports:"],
          bullets: [
            "**Checkpoint reports**: team managers tell the project manager about risks in their work",
            "**Highlight reports**: the project manager updates the board on key risks",
            "**End stage reports**: summarise the risks at the end of each stage",
            "**Exception reports**: explain risks behind a forecast tolerance breach",
          ],
        },
        {
          id: "m8-s5-5",
          heading: "Keep it alive",
          paragraphs: [
            "A risk register written in initiation and never looked at again is no use. Risks change. New ones appear; old ones close or turn into issues.",
            "When the coffee chain announces it's opening two doors down, that's a new threat to your sales forecast. It goes straight into the register and up to the board.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **risk owner** manages and monitors a risk; the **risk actionee** carries out a specific response. The **project executive** is accountable for risk management on the project. Risk is communicated through **checkpoint**, **highlight**, **end stage** and **exception** reports.",
          },
        },
      ],
      keyPoints: [
        "The risk owner manages and monitors a risk.",
        "The risk actionee carries out specific risk responses.",
        "The project executive is accountable for risk management on the project.",
        "Risk information is shared through checkpoint, highlight, end stage and exception reports.",
      ],
      knowledgeCheck: {
        id: "m8-s5-kc",
        question: "The site foreman books the damp survey on behalf of Dev. What is the foreman's risk role?",
        options: ["Risk owner", "Risk actionee", "Change authority", "Project assurance"],
        correctOption: 1,
        explanation:
          "The risk actionee carries out a specific response on behalf of the risk owner.",
      },
      assessment: [
        {
          id: "m8-s5-a1",
          type: "single",
          prompt: "Who sets the risk appetite for the project?",
          options: [
            { id: "a", label: "The team manager" },
            { id: "b", label: "Project support" },
            { id: "c", label: "The business layer" },
            { id: "d", label: "The risk actionee" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The business layer sets the risk appetite and project-level risk tolerance.",
          topic: "Practices",
        },
        {
          id: "m8-s5-a2",
          type: "boolean",
          prompt: "The risk owner and risk actionee can be the same person.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "They're often the same person on small projects. What matters is clear responsibility.",
          topic: "Practices",
        },
        {
          id: "m8-s5-a3",
          type: "single",
          prompt: "Who is accountable for risk management on the project?",
          options: [
            { id: "a", label: "The project executive" },
            { id: "b", label: "Project support" },
            { id: "c", label: "Each team manager" },
            { id: "d", label: "The quality review chair" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The executive is accountable for all aspects of risk management on the project.",
          topic: "Practices",
        },
        {
          id: "m8-s5-a4",
          type: "multiple",
          prompt: "Which TWO reports are used to communicate risk to the project board?",
          options: [
            { id: "a", label: "Highlight report" },
            { id: "b", label: "Checkpoint report" },
            { id: "c", label: "End stage report" },
            { id: "d", label: "Daily log" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Highlight and end stage reports go to the board. Checkpoint reports go to the project manager, and the daily log is the project manager's informal record.",
          topic: "Practices",
        },
      ],
    },
  ],
};
