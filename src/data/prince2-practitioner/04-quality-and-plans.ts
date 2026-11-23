import type { CourseModule } from "../types";

export const qualityAndPlansModule: CourseModule = {
  id: "pp-m4",
  slug: "quality-and-plans",
  order: 4,
  title: "Quality and plans under pressure",
  shortTitle: "Quality & plans",
  tagline: "Criteria that can fail, and plans whose numbers still hold when reality moves.",
  description:
    "The quality theme tested as evidence work — turning an acceptance criterion into a pass/fail record an auditor can read. The plans theme tested as arithmetic — dependencies, forecasts and the precise moment a slipping plan becomes somebody else's decision.",
  scene: "planning",
  sessions: [
    {
      id: "quality-and-plans/quality-from-method-to-records",
      slug: "quality-from-method-to-records",
      title: "Quality: from method to records",
      summary:
        "Writing acceptance criteria that can actually fail, logging quality results versus issues, and what Priya's audit will ask for.",
      durationMinutes: 13,
      objectives: [
        "Convert a quality expectation into a testable acceptance criterion",
        "Place a quality finding in the correct record",
        "Describe who verifies and who approves each product class",
      ],
      sections: [
        {
          id: "pm4-s1-1",
          paragraphs: [
            "The scenario states the standard beautifully compact: wholesale loaves must weigh **800g ± 40g**, with at least **98% of each batch meeting it**, before any chain contract counts the product accepted. That is an **expected business value** — the customer's language. The quality theme's work is the translation into **performance**: a named test, a named method, a named frequency, a named verifier.",
            "Bad translation: 'weigh loaves during production.' Unfailable, unverifiable, and the kind of wording Priya's 22 January audit exists to catch. Good translation: 'twenty consecutive loaves sampled from the bay line each shift, recorded against 760–840g, batch pass at ≥98%, results countersigned by Fern's nominated lead before despatch scheduling.'",
          ],
        },
        {
          id: "pm4-s1-2",
          heading: "Where findings go, and why it matters",
          paragraphs: [
            "A weight check that comes back 96% on a batch is a **quality result** — recorded, reviewed, and by itself not a crisis. The same shortfall repeating on the bay line after corrective action is an **issue** (something that has happened and needs management attention), and if it was *foreseen*, its root was a risk that just realised itself.",
            "The paper loves this triage because the records behave differently: quality register entries prove the method ran; issues demand a response and an owner; risks get re-scored. An answer that routes a realised problem into the risk register 'because it might happen again' is answering with half a thought.",
          ],
          callout: {
            tone: "exam",
            title: "Verify, then approve — two different jobs",
            body: "Verification proves the product was built right (Dev's supplier checks, Nadia's cold-chain sign-off on temperature logs). Approval proves it was the right thing to build — and for the bread, that sits with the senior user's nominated authority, not the builder and not Sam.",
          },
        },
        {
          id: "pm4-s1-3",
          heading: "The audit as an event, not an exam",
          paragraphs: [
            "Priya's external review is on the calendar for 22 January — inside the project's window, near the tail of stabilisation. Treat scheduled external verification as a **planned quality event**: the approach says how it's run, the plan gives it a slot, and the registers are its exhibit list.",
            "What the project manager does *before* an audit date is a fair exam question in itself. Not 'prepare a defensive file', but ensure the records the audit will read actually reflect the method: sampling logs complete, product descriptions current, issue closures dated.",
          ],
        },
      ],
      keyPoints: [
        "Expected business values become testable performance criteria with named method, frequency and verifier.",
        "Quality results, issues and realised risks are three different records with three different behaviours.",
        "Verification and approval are separate roles — builders verify, the business approves.",
        "Scheduled external verification is a planned event that the registers must be ready to evidence.",
      ],
      knowledgeCheck: {
        id: "pm4-s1-kc",
        question: "Which acceptance criterion is written at practitioner standard?",
        options: [
          "'Bread quality must be excellent for wholesale customers'",
          "'≥98% of sampled loaves per batch weigh 760–840g, sampled twenty-per-shift, countersigned before despatch'",
          "'Weights checked regularly by the baking team'",
          "'Northgate must be satisfied with each delivery'",
        ],
        correctOption: 1,
        explanation:
          "Only the second can pass or fail with a record attached. Adjectives can't be audited, 'regularly' can't be verified, and customer satisfaction without a measurement definition is a mood.",
      },
      assessment: [
        {
          id: "pm4-s1-a1",
          type: "single",
          prompt: "A batch samples at 96% within tolerance, for the third shift running after corrective action. Where does this land, primarily?",
          options: [
            { id: "a", label: "A new risk entry — it might keep happening" },
            { id: "b", label: "An issue with an owner and a required response" },
            { id: "c", label: "A routine quality result, no further action" },
            { id: "d", label: "A change request against the 98% criterion" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "It has happened, repeatedly, despite correction — that's an issue demanding management attention. Logging it as fresh risk ignores reality; logging it as routine ignores the pattern; 'adjusting the criterion' answers a performance failure by moving the goalposts.",
          topic: "Themes",
        },
        {
          id: "pm4-s1-a2",
          type: "boolean",
          prompt: "On the Wholesale Kitchen, approving the bread as fit for despatch is the senior user's authority, not Mistry Build's.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "The supplier verifies that products were built to spec; approval that the right thing was built belongs with the business — Fern's nominated authority for the bread.",
          topic: "Themes",
        },
      ],
    },
    {
      id: "quality-and-plans/plans-that-survive-change",
      slug: "plans-that-survive-change",
      title: "Plans that survive change",
      summary:
        "Product-based structure under stress: dependencies like the chiller bay, tolerance-aware forecasting, and when plan slippage stops being the project manager's problem.",
      durationMinutes: 14,
      objectives: [
        "Read a plan for the dependencies that will actually break",
        "Forecast stage completion against tolerance, not optimism",
        "Identify the moment an exception plan is commissioned",
      ],
      sections: [
        {
          id: "pm4-s2-1",
          paragraphs: [
            "The Wholesale Kitchen plan looks tidy: four stages, thirty-six weeks, go-live 9 February. Practitioner questions live in the **dependencies** the tidy version hides. Batch-baking trials *cannot start* until the chiller bay commissioning *has passed* its calibration — and the bay sits in Nadia's cold-chain world, where a maintenance window and a supplier engineer's diary are both real constraints the bread plan inherits without asking.",
            "Product-based planning is the method's defence: name the products, sequence them by what genuinely enables what, and the fragile edges appear *on paper* before they appear in week nineteen.",
          ],
        },
        {
          id: "pm4-s2-2",
          heading: "Forecast arithmetic beats plan optimism",
          paragraphs: [
            "At a boundary the board receives a *forecast*, and a forecast is tolerance-aware by duty. 'Two weeks late' inside a ±2-week project frame is a managed squeeze; 'two and a half weeks' is an exception the board must see the day it becomes predictable — even while the plan, as printed, still says 9 February.",
            "The distinction the paper tests again and again: the **plan** says what you intend; the **forecast** says what the evidence now implies. Only one of them drives escalation.",
          ],
          bullets: [
            "Sequence from the customer's fixed dates backward — 9 February and the 22 January audit are plan furniture, not wishes",
            "Put float where the uncertainty lives: bay commissioning, not the logo on the delivery van",
            "Re-plan a stage on real resource behaviour: Dev's crews serve Mistry Build's other jobs too",
          ],
          callout: {
            tone: "tip",
            title: "Exception plans are commissioned, not created",
            body: "When a stage is forecast to breach, the project manager raises the exception report; the board decides whether to commission an exception plan. Producing one unasked is a fast way to burn days the recovery doesn't need — and answers in the exam, it's the wrong *first* move.",
          },
        },
        {
          id: "pm4-s2-3",
          heading: "Baselines, versions and the change budget's shadow",
          paragraphs: [
            "Stage plans get refined as the stage runs — that's expected. What isn't expected: refinement quietly becoming *re-baselining* the project. The published stage plan is a baseline; drifting it stage by stage without a board decision hides the very information management by exception exists to surface.",
            "And when Northgate's 1,600-loaf request arrives, the plan question is not 'can we squeeze it in?' — it's **which products, which dependencies, which dates change**, priced before the decision. A plan absorbs; a baseline change is a decision. Answers that blur the two fail the same question.",
          ],
        },
      ],
      keyPoints: [
        "Dependencies across supply chains are where plans actually break — surface them structurally.",
        "Forecasts drive escalation; printed plans only drive work.",
        "Exception plans are commissioned by the board after an exception report.",
        "Refinement stays inside the baseline; changing the baseline is a decision with a price.",
      ],
      knowledgeCheck: {
        id: "pm4-s2-kc",
        question: "Batch trials are slipping because bay calibration keeps missing the engineer's window. What does the method expect first?",
        options: [
          "An exception plan drafted immediately by Sam",
          "A re-forecast of the stage against its ±1 week tolerance, escalating if breached",
          "Moving go-live quietly and telling customers later",
          "Adding a shift to bake around the bay regardless of cost",
        ],
        correctOption: 1,
        explanation:
          "Recovery options cost money or tolerance; the frame decides who chooses them. Forecast first, then act inside delegation or escalate the breach — not the other way round.",
      },
      assessment: [
        {
          id: "pm4-s2-a1",
          type: "single",
          prompt: "Stage two is now forecast to finish eight days and £3,000 over. Both stage tolerances are ±1 week / ±£4,000. Which is correct?",
          options: [
            { id: "a", label: "Both breaches — but they cancel, so no action" },
            { id: "b", label: "Time breach only; money inside tolerance; the board must see the exception" },
            { id: "c", label: "Inside tolerance on both; Sam manages it" },
            { id: "d", label: "Neither matters until the actual stage closes" },
          ],
          correctOptionIds: ["b"],
        explanation:
            "Eight days pierces ±1 week; £3,000 sits inside ±£4,000. One breached dimension is enough to trigger the exception route, and forecasts trigger it — not closings.",
          topic: "Themes",
        },
        {
          id: "pm4-s2-a2",
          type: "multiple",
          prompt: "Which practices make a product-based plan honest about change?",
          options: [
            { id: "a", label: "Pricing scope change against named products and dates before the board decides" },
            { id: "b", label: "Keeping the published stage baseline intact until changed formally" },
            { id: "c", label: "Letting weekly refinements silently move the project end date" },
            { id: "d", label: "Holding float around the genuinely uncertain commissioning work" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "Change gets priced, baselines move only by decision, and protection sits where uncertainty is. Silent end-date drift is exactly the information exception management must not lose.",
          topic: "Themes",
        },
      ],
    },
  ],
};
