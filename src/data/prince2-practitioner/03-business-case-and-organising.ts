import type { CourseModule } from "../types";

export const businessCaseOrganisingModule: CourseModule = {
  id: "pp-m3",
  slug: "business-case-and-organising",
  order: 3,
  title: "Business case and organisation in depth",
  shortTitle: "Case & organisation",
  tagline: "The case as a living document, tolerances as the escalation grammar, stakeholders as moving targets.",
  description:
    "Two themes that Foundation teaches as lists and the Practitioner paper tests as one skill: deciding. Re-testing a case under pressure, working the tolerance arithmetic before the opinion, and keeping a stakeholder map honest when Northgate's appetite changes.",
  scene: "starting",
  sessions: [
    {
      id: "business-case-and-organising/re-testing-the-case",
      slug: "re-testing-the-case",
      title: "Re-testing the business case",
      summary:
        "What actually invalidates a case at a boundary, how disbenefits and sunk costs distort the argument, and what a decision pack must contain.",
      durationMinutes: 14,
      objectives: [
        "Re-test a case on future costs and benefits only",
        "Weigh merits, costs and disbenefits with scenario numbers",
        "Assemble the board's boundary decision pack",
      ],
      sections: [
        {
          id: "pm3-s1-1",
          paragraphs: [
            "The business case the board approved said £240,000 in, fourteen-month payback, driven by wholesale contracts already warming to Fern & Flour's bread. Ruth's re-forecast at the end of stage two says twenty. Something in the case's spine has shifted — the theme asks what you do about **that**, not about the money already gone.",
            "A case has three legs: **merits** (the benefits, with owners and measurement dates), **costs** (the remaining spend, not the historic spend), and **disbenefits** (the things this project genuinely makes worse). At re-test, all three are re-read *prospectively*.",
          ],
          callout: {
            tone: "exam",
            title: "The examiner's favourite distinction",
            body: "'We've already spent £240,000' is a historic cost and decides nothing. The only relevant money is what it will cost from today to done, measured against what today's benefits are actually worth.",
          },
        },
        {
          id: "pm3-s1-2",
          heading: "Disbenefits, the honest leg",
          paragraphs: [
            "The Wholesale Kitchen quietly creates real disadvantages: oven capacity at the Leeds shop gets squeezed during trials, the Headingley shift lead's team absorbs weekend overtime, and Nadia's cold-chain costs rise the moment loaves must move chilled. None of this kills the case — but a re-forecast that hides them isn't a re-forecast.",
            "Candidates often can't name a disbenefit when asked, because they've only ever studied 'costs'. Train it: for any project fact, ask *who is measurably worse off, and is that written down?* Ruth's view and Fern's operational pain belong in the pack side by side.",
          ],
          bullets: [
            "Merits: contracted wholesale volume, Ruth's benefit owner named, measured from go-live",
            "Costs: remaining spend to 9 February plus stabilisation, not spend to date",
            "Disbenefits: Leeds capacity squeeze, weekend overtime, chilled logistics burden",
          ],
        },
        {
          id: "pm3-s1-3",
          heading: "What the board receives at the boundary",
          paragraphs: [
            "Not a spreadsheet surprise. The method expects a **boundary decision pack**: the end-stage report, the re-forecast case, the options (proceed as planned, re-scope to restore payback, suspend, close), each with its cost, time and risk consequence — and a recommendation the board can accept, amend or reject.",
            "Re-scoping is the option candidates skip. Twenty-month payback on the *full* product list might fail the case, while fourteen months on the *contracted* loaves passes it. If the products driving payback are the ones Northgate and the chains signed for, the reduced-scope variant often wins the argument — that's focus on products doing the work of the business case theme.",
          ],
          scenario: {
            question: "Whose re-forecast is it, anyway?",
            steps: [
              {
                title: "Ruth runs the numbers",
                body: "Benefits and finance sit with Ruth on the board. The project manager doesn't own the case and shouldn't own its arithmetic alone.",
              },
              {
                title: "Sam supplies the shape",
                body: "What re-scoping would save, what it would cost in contracts and dates — only the project manager can put realistic options on the table.",
              },
              {
                title: "Tom owns the test",
                body: "The executive answers the only question that matters at a boundary: does this still deserve the business's money? The pack exists so that answer is informed, not improvised.",
              },
            ],
          },
        },
      ],
      keyPoints: [
        "Re-test the case prospectively: future costs against present benefits.",
        "Disbenefits are a formal leg of the case, not complaints.",
        "A boundary pack presents options with quantified consequences, not a verdict plus mood.",
        "Executive owns the test; numbers and options are a team output.",
      ],
      knowledgeCheck: {
        id: "pm3-s1-kc",
        question: "Which re-forecast framing follows the business case theme?",
        options: [
          "'Total spent to date is £240,000, so continuation is justified by the investment'",
          "'From today, completion costs £X against measurable wholesale benefits of £Y per year'",
          "'The original business case said fourteen months, so we are eight months late'",
          "'Payback is Ruth's problem, not the board's question'",
        ],
        correctOption: 1,
        explanation:
          "Only the prospective framing — remaining cost against real benefits — answers whether to continue. Historic spend and original promises describe the past; the theme governs the future.",
      },
      assessment: [
        {
          id: "pm3-s1-a1",
          type: "single",
          prompt: "The full scope forecasts twenty-month payback and fails the case. What should the pack do next?",
          options: [
            { id: "a", label: "Recommend closure; a failed case cannot be repaired" },
            { id: "b", label: "Quietly defer the stabilisation costs to the next financial year" },
            { id: "c", label: "Price a reduced-scope option that restores the case on contracted products" },
            { id: "d", label: "Ask Dev to find savings inside Mistry Build's quoted margin" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "A failing case triggers option work before any verdict. Closure is one option, not the automatic result; deferring costs is dishonest; squeezing the supplier is procurement, not case re-testing.",
          topic: "Themes",
        },
        {
          id: "pm3-s1-a2",
          type: "multiple",
          prompt: "Which items belong in the end-of-stage decision pack?",
          options: [
            { id: "a", label: "The re-forecast business case with merits, costs and disbenefits" },
            { id: "b", label: "Options with quantified time, cost and risk consequences" },
            { id: "c", label: "The project manager's private performance review of Dev" },
            { id: "d", label: "A recommendation the board can accept, amend or reject" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "The pack is for a business decision: the case, the options, a recommendation. Personnel commentary has no place in a boundary paper — it would contaminate the decision it isn't part of.",
          topic: "Themes",
        },
      ],
    },
    {
      id: "business-case-and-organising/tolerances-and-escalation",
      slug: "tolerances-and-escalation",
      title: "Tolerances and the escalation route",
      summary:
        "Project versus stage tolerances, the arithmetic that triggers escalation, and exactly what a project manager may do alone.",
      durationMinutes: 13,
      objectives: [
        "Compute whether a forecast breaches its tolerance",
        "Route a breach to the correct authority level",
        "Distinguish contingency use from tolerance breach",
      ],
      sections: [
        {
          id: "pm3-s2-1",
          paragraphs: [
            "Tolerances are the **grammar of escalation** in this method. On the Wholesale Kitchen: the project as a whole may move ±£8,000 and ±2 weeks; stage two may move ±£4,000 and ±1 week. Anything forecast inside those numbers is Sam's to handle; anything that pierces them **must** rise.",
            "The gas boiler is the clean lesson. A £5,000 overrun is bigger than the stage's £4,000 money tolerance — but the draw comes from the £18,000 stage contingency, which exists precisely to absorb forecasts like this. Baseline spend stays inside tolerance; there is no exception; the board is informed, not convened.",
          ],
        },
        {
          id: "pm3-s2-2",
          heading: "Do the arithmetic before you do the opinion",
          paragraphs: [
            "Exam questions love a fact that *sounds* like a breach and isn't, and a fact that sounds manageable and isn't. Train the reflex: which line does this hit (cost or time), against which frame (stage or project), and has contingency absorbed it or not?",
          ],
          bullets: [
            "£5,000 boiler, from £18,000 contingency → stage baseline intact → **record, inform**",
            "£19,000 repair, contingency exhausted → stage cost tolerance breached → **exception report to the board**",
            "Chiller bay three days late, stage tolerance ±1 week → inside → **Sam recovers it in stage planning**",
            "Go-live forecast 9 February + 3 weeks → project time tolerance (±2 weeks) breached → **board, and probably the customer promise too**",
          ],
          callout: {
            tone: "tip",
            title: "Forecast, don't confess",
            body: "Escalation triggers on the *forecast*, not the actual. Waiting until the overrun is certain to have happened isn't stoicism, it's a breach of the managing-a-stage-boundary duty to raise it as soon as it's predicted.",
          },
        },
        {
          id: "pm3-s2-3",
          heading: "The ladder has rungs with names",
          paragraphs: [
            "Escalation isn't one leap to the board. A team issue goes to Sam; a stage-level exception goes from Sam to the board; only things beyond *project* tolerance — or whole-case decisions — go from the board to corporate management, where Tom's seat actually is.",
            "Two failure modes cost marks here. First, the knight-in-shining-portfolio: Sam solving a board-owned breach alone because it's faster. Second, the carrier pigeon: routing a within-tolerance wobble upward to be safe, which erodes the delegation the method runs on and buries the board in non-decisions.",
          ],
        },
        {
          id: "pm3-s2-4",
          heading: "Contingency is not a slush fund",
          paragraphs: [
            "The £18,000 stage contingency answers **risks that occur**. The £6,000 change budget answers **approved changes to scope** — Northgate's extra volume, Kit's festival kit. Questions love mixing them: paying for a scope change out of contingency, or treating a realised risk as a change. The register it lands in, and the pot it draws from, are different by design.",
          ],
        },
      ],
      keyPoints: [
        "Tolerances decide who acts: inside them the project manager, beyond them the board.",
        "A breach is a forecast event — escalate on prediction, not confirmation.",
        "Contingency absorbs realised risks; the change budget pays for approved scope change.",
        "Escalation follows named rungs: team → project manager → board → corporate.",
      ],
      knowledgeCheck: {
        id: "pm3-s2-kc",
        question: "A repair forecast pushes stage-two spend £1,000 past its £4,000 tolerance, and the £18,000 contingency is already £17,500 drawn. Who decides what happens next?",
        options: [
          "Sam, because it's only £1,000",
          "The board, because the stage tolerance is forecast to breach",
          "Tom alone, as executive",
          "Dev, because the work is Mistry Build's",
        ],
        correctOption: 1,
        explanation:
          "Forecast breach of a delegated tolerance ends the delegation, whatever the size. The board decides — with Tom's vote, but as a board decision on an exception, not a solo executive call.",
      },
      assessment: [
        {
          id: "pm3-s2-a1",
          type: "single",
          prompt: "Go-live is now forecast 9 February plus two and a half weeks. Which statement is correct?",
          options: [
            { id: "a", label: "Inside project time tolerance, so Sam manages it quietly" },
            { id: "b", label: "A forecast breach of the ±2 week project tolerance — an escalation the board must see" },
            { id: "c", label: "Only a stage issue; the project tolerance doesn't track dates" },
            { id: "d", label: "A customer-promise matter, not a governance one" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Two and a half weeks pierces the ±2 week project frame. It happens to also be a commercial problem, but the governance trigger is the forecast breach itself.",
          topic: "Themes",
        },
        {
          id: "pm3-s2-a2",
          type: "boolean",
          prompt: "Drawing a realised risk from stage contingency means an exception report is always still required.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "If contingency holds the baseline inside tolerance, there is no exception — a recorded draw and an informed board is the method's whole ask.",
          topic: "Themes",
        },
        {
          id: "pm3-s2-a3",
          type: "single",
          prompt: "Northgate's 1,600-loaf request needs a chiller bay the scope didn't include. Which pot pays?",
          options: [
            { id: "a", label: "Stage contingency, because it's an uncertainty" },
            { id: "b", label: "The change budget, because it's an approved modification to scope" },
            { id: "c", label: "Project tolerance, because it exceeds one pot" },
            { id: "d", label: "Ruth's benefits reserve, because it drives volume" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Contingency answers 'what if a risk happens'; the change budget answers 'what if we deliberately change scope'. A customer volume request is the second kind.",
          topic: "Themes",
        },
      ],
    },
    {
      id: "business-case-and-organising/stakeholders-who-change-shape",
      slug: "stakeholders-who-change-shape",
      title: "Stakeholders who change shape",
      summary:
        "The engagement axis at Practitioner depth: a communication approach that revises itself, key customers with leverage, and supplier-versus-business views.",
      durationMinutes: 13,
      objectives: [
        "Spot an engagement approach that has gone stale against reality",
        "Handle a stakeholder whose interest has shifted from supportive to demanding",
        "Run the supplier-versus-user tension inside the method",
      ],
      sections: [
        {
          id: "pm3-s3-1",
          paragraphs: [
            "Foundation asks which interests matter — business, user, supplier. The paper asks what you **do** when a mapping you wrote six months ago stops matching the room. Because stakeholder power is not static: Northgate Coffee walked in as a pleasant chain account and walks out of stage two holding a 1,600-loaf weekly request that reshapes the delivery plan.",
            "The theme's answer is unglamorous and specific: the **communication management approach** is a living record. Interest, influence and engagement level are re-assessed at boundaries, and the approach re-plans itself when they move.",
          ],
          scenario: {
            question: "Northgate has always been supportive. Problem?",
            steps: [
              {
                title: "Supportive, plus leverage",
                body: "A stakeholder who wants something *and* can fund the whole line is a governance fact, not a relationship fact. The question moves from 'are they happy?' to 'whose decision is this, formally?'",
              },
              {
                title: "Inside scope is Fern's territory",
                body: "The senior user owns what the products must do. A bigger weekly volume is a requirements and capacity question for Fern before it's a build question for anyone.",
              },
              {
                title: "Baseline changes are board business",
                body: "If the answer touches scope, cost or timescale baselines, it travels the change route with a £6,000 change budget attached — not through Sam's good will and a handshake.",
              },
              {
                title: "And Ruth counts the why",
                body: "Whether the volume makes payback *better* is exactly the merits evidence Ruth needs before the board votes. The stakeholder map and the business case talk to each other.",
              },
            ],
          },
        },
        {
          id: "pm3-s3-2",
          heading: "The communication approach is a plan, not a poster",
          paragraphs: [
            "Draft versions list the meetings the team already had. A real approach says: who gets what, how often, in what depth — and crucially, **who is currently under-served**. Priya the external auditor sits on nobody's weekly list, yet holds a 22 January date that can change the board's view of the case. That's a mapping gap the paper would love you to catch before the audit does.",
          ],
          callout: {
            tone: "exam",
            title: "The question shape to practise",
            body: "'What should the project manager do first?' with stakeholder answers is nearly always: re-assess the engagement, route the decision to its formal owner, and update the communication approach — in that order. Calling a meeting is rarely 'first'.",
          },
        },
        {
          id: "pm3-s3-3",
          heading: "Supplier and business views, honestly opposed",
          paragraphs: [
            "Dev's Mistry Build wants the chiller bay procured early — it's clean margin and easy scheduling. Fern wants the bay *conditional* on contracted volumes, because idle capacity is her rent. Neither view is obstruction; they are the theme's two classic interests doing exactly what they're designed to do: argue, while the board decides.",
            "The organising skill is keeping the argument visible and the decision single. When supplier preference silently becomes the plan because it was easiest to implement, the project has lost its balance of interests — and a question like 'what has gone wrong here?' has its answer.",
          ],
        },
      ],
      keyPoints: [
        "Engagement levels and influence are re-assessed at boundaries, not just at initiation.",
        "A high-leverage supporter with a request is a routing question with a formal answer.",
        "The communication approach is judged by who is under-served, not by how neat it looks.",
        "Opposed business and supplier views are the system working — the board's job is the single decision.",
      ],
      knowledgeCheck: {
        id: "pm3-s3-kc",
        question: "The communication approach omits the external auditor holding a booked review date. What does that omission tell a practitioner reader?",
        options: [
          "Nothing; auditors never need project communications",
          "The mapping is stale: an influential stakeholder with a scheduled influence on the case is off the plan",
          "It's fine as long as Fern stays friendly with Priya informally",
          "Proof that the project should drop external verification as over-tailored",
        ],
        correctOption: 1,
        explanation:
          "External verification is an event that changes board thinking on the case. A communication approach that can't see it has a gap exactly where the paper likes to probe.",
      },
      assessment: [
        {
          id: "pm3-s3-a1",
          type: "single",
          prompt: "Northgate's volume request reaches Sam the week after a friendly partnership dinner. What is the method's route?",
          options: [
            { id: "a", label: "Implement it inside stage two; a supporter's wishes are free" },
            { id: "b", label: "Senior user weighs the requirements, then the formal change route decides scope, cost and dates" },
            { id: "c", label: "Decline it; scope is fixed at initiation forever" },
            { id: "d", label: "Pay from stage contingency since it arrived unexpectedly" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Engagement history decides nothing about routing: requirements belong with the senior user, baseline change with the change route and its budget. Contingency is for risks that occur, not scope we chose to accept.",
          topic: "Themes",
        },
        {
          id: "pm3-s3-a2",
          type: "multiple",
          prompt: "Which moves show a communication approach being used as a living record?",
          options: [
            { id: "a", label: "Re-scoring stakeholder influence at each stage boundary" },
            { id: "b", label: "Adding Priya's audit to the board's information schedule before January" },
            { id: "c", label: "Freezing the initiation map so decisions stay consistent" },
            { id: "d", label: "Checking who gained or lost say over products since the last stage" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "Living means re-assessing influence, closing information gaps around scheduled events, and noticing shifting say. Freezing a map is how projects get surprised by people they already knew.",
          topic: "Themes",
        },
      ],
    },
  ],
};
