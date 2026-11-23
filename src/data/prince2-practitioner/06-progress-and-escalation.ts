import type { CourseModule } from "../types";

export const progressEscalationModule: CourseModule = {
  id: "pp-m6",
  slug: "progress-and-escalation",
  order: 6,
  title: "Progress, forecasts and exceptions",
  shortTitle: "Progress",
  tagline: "Report the future you can evidence, and turn surprises into scheduled decisions.",
  description:
    "The progress theme is where every other theme's numbers arrive. Two sessions: forecasting and reporting the way a board actually reads, then the exception mechanics that decide who may approve what when the drift crosses the line.",
  scene: "delivery",
  sessions: [
    {
      id: "progress-and-escalation/forecasting-like-the-board-reads-you",
      slug: "forecasting-like-the-board-reads-you",
      title: "Forecasting like the board reads you",
      summary:
        "Tolerances as the grid you forecast against, drift versus spike, and what the end-of-stage-two status should honestly say.",
      durationMinutes: 13,
      objectives: [
        "Frame every forecast against its tolerance, not its plan",
        "Tell a one-off spike from a trend that will breach",
        "Compose a status that lets the board decide without a summons",
      ],
      sections: [
        {
          id: "pm6-s1-1",
          paragraphs: [
            "Read the scenario's STATUS block the way a board would. End of stage two: the gas boiler added **£5,000, drawn from contingency**; the chiller calibration fault is an **open issue**; Northgate has tabled the **1,600-loaf change request**; Priya's audit is booked for **22 January**. Four facts, and each belongs to a different theme's register — which is exactly what makes the progress theme the one that has to say them together, truthfully, in one page.",
            "A good forecast is a sentence with three parts: **where we now expect to land, against which tolerance, by when we'll know more**. 'Bay commissioning now forecasts eight days late against the stage's ±1 week; the recovery plan runs to next Thursday and we'll re-state at the boundary.' The board can act on that. 'Things are a bit behind' cannot be acted on at all.",
          ],
        },
        {
          id: "pm6-s1-2",
          heading: "Drift, spike, and the line you mustn't blur",
          paragraphs: [
            "A spike is an event: the boiler quote. Funded from contingency, it dents spend without bending the cost trend. Drift is a direction: two-day slips that repeat, each inside tolerance, cumulatively marching past it. Boards forgive spikes. They are blindsided by drift — because the reports said 'within tolerance' every week while the sum was moving.",
            "The practitioner behaviour: report the **cumulative position against the remaining tolerance**, not just this period's movement. That sentence — where the total now sits inside what's still allowed — is the one highlight reports exist to carry.",
          ],
          callout: {
            tone: "tip",
            title: "Trend beats snapshot",
            body: "When a question shows the same small overrun three periods running, the theme's expected answer is never 'continue to monitor'. Re-forecast, state the cumulative breach date, and act while it's still inside your delegation.",
          },
        },
        {
          id: "pm6-s1-3",
          heading: "The reporting rhythm of this project",
          paragraphs: [
            "Between boundaries, the board's window is the **highlight report**: exception positions, tolerances status, the headline forecast — not the fire-hose of weekly manager detail. Sam's daily lens is the checkpoint cadence on work packages; Dev's crews report against package tolerances, which is how the chiller calibration slip surfaced as an issue days after it began, not at the audit.",
            "Every rhythm has an escalation door: an exception report breaks the schedule whenever the forecast crosses a delegated line. The board is never told 'we'll mention it at the next one'.",
          ],
          bullets: [
            "Checkpoint: work package progress against its own small tolerances",
            "Highlight report: period rhythm, tolerance health, exceptions and forecasts",
            "Boundary report: stage close, re-forecast case, options, next stage's plan",
            "Exception report: off-rhythm, the day a forecast pierces delegation",
          ],
        },
      ],
      keyPoints: [
        "Forecast against tolerance, state the date you'll know more, keep the plan out of the verdict.",
        "Spikes are events; drift is a direction — cumulative reporting is the defence.",
        "Four reporting rhythms, four audiences: checkpoints, highlights, boundaries, exceptions.",
        "An exception report never waits for the next scheduled slot.",
      ],
      knowledgeCheck: {
        id: "pm6-s1-kc",
        question: "Three consecutive highlight reports each show stage spend 'within tolerance', £900 under budget each time cumulatively. What should the fourth show?",
        options: [
          "The same sentence; the period position hasn't changed",
          "The cumulative line against remaining tolerance, with a forecast and a breach date if the trend holds",
          "A request to raise the stage tolerance to match reality",
          "Nothing further — small drift is noise the board shouldn't see",
        ],
        correctOption: 1,
        explanation:
          "The theme's duty is the whole-picture line: where the total now sits inside what remains allowed, and where the trend lands. Restating the period, shopping for bigger tolerance, or muting a direction are the three classic board-blindsiders.",
      },
      assessment: [
        {
          id: "pm6-s1-a1",
          type: "single",
          prompt: "The calibration issue now forecasts nine days of stage delay against a ±1 week tolerance. Which report carries it, and when?",
          options: [
            { id: "a", label: "Next highlight report, in its normal slot" },
            { id: "b", label: "An exception report, raised the day that forecast is credible" },
            { id: "c", label: "The boundary report; nine days is a boundary-level matter" },
            { id: "d", label: "The issue register only; reports are for financials" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "A forecast breach of a delegated tolerance ends the waiting schedule. Highlight and boundary reports keep rhythm; exceptions break it deliberately, and a breach this specific is credible the day the recovery maths says so.",
          topic: "Themes",
        },
        {
          id: "pm6-s1-a2",
          type: "boolean",
          prompt: "The boiler's £5,000 spike and the repeated two-day slips are both progress-theme events, but only the slips demand cumulative reporting.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "The spike is an absorbed event with a contingency trail; the slips are a direction. The theme's job is to keep both visible and to make the direction impossible to miss.",
          topic: "Themes",
        },
      ],
    },
    {
      id: "progress-and-escalation/exception-quietly-handled",
      slug: "exception-quietly-handled",
      title: "Exception, quietly handled",
      summary:
        "Exception reports, plans and who approves what — plus the difference between a crisis and an exception, which is most of the marks on this topic.",
      durationMinutes: 13,
      objectives: [
        "Write an exception report the board can decide from",
        "Distinguish the board's options when a tolerance breaches",
        "Recognise an exception that never needed to become a crisis",
      ],
      sections: [
        {
          id: "pm6-s2-1",
          paragraphs: [
            "An exception report is not an alarm. It's a **decision document** with a fixed skeleton: what has happened or is firmly forecast, which tolerance it pierces and by how much, what it means for the case and the products, the options with their prices, and a recommendation. The board should be able to choose from it *in the meeting*, without an adjournment to go find out.",
            "Compare the Wholesale Kitchen's two near-misses. The boiler: contingency contained it, no tolerance pierced, no exception — correctly a recorded draw on a highlight report. Had contingency been short and the stage forecast past ±£4,000 — same £5,000 fact, different frame — an exception report the same week.",
          ],
        },
        {
          id: "pm6-s2-2",
          heading: "The board's four real choices",
          paragraphs: [
            "When a stage breaches its delegation, the board's options are bounded and knowable: **approve an exception plan** (commission the recovery Sam would draft), **give revised tolerance within the existing project delegation**, **escalate to corporate** (their own project tolerance is pierced — that's Tom's ladder rung upward), or **stop**. What the board may *not* do is nothing: the delegation is broken, and silence is a decision with a price too.",
            "And who drafts the exception plan? Sam, once commissioned — because the board decides *that* and *within what limits*, while the plan of how is method work the project manager does. Questions that swap these hands are the most common single trap on this topic.",
          ],
          callout: {
            tone: "exam",
            title: "Exception ≠ emergency",
            body: "An exception is a governance event, not a tone of voice. Half of candidate answers import panic the paper didn't put there: nine days forecast past a one-week tolerance is a Wednesday-afternoon exception report, not a war council.",
          },
        },
        {
          id: "pm6-s2-3",
          heading: "Crisis is a different animal",
          paragraphs: [
            "A realised emergency — the cold chain fails with trials loaded in the bay, product lost, dates dead — is an **issue first**: immediate containment, named owner, the register catching up. It becomes an exception when the *forecast consequence* crosses tolerance, and the containment fact goes into the exception pack as evidence, not as excuse.",
            "The clean mental model: issue is *what happened*, exception is *what that now obliges the next level of authority to decide*. Candidates who merge them either escalate every wobble or fail to escalate quiet disasters that are still forecastable.",
          ],
          bullets: [
            "Contain, then compute: immediate response first, tolerance arithmetic in the same breath",
            "The exception pack carries the issue's measured consequence, not its temperature graph",
            "Rebuild the case view before the board votes: an exception that survives is often re-scoped, not rescued whole",
          ],
        },
      ],
      keyPoints: [
        "Exception reports are decision documents: facts, breach, options, recommendation.",
        "The board's bounded four: exception plan, revised tolerance, escalate, stop.",
        "Commissioning belongs to the board; drafting the recovery plan belongs to the project manager.",
        "Issue answers 'what happened'; exception answers 'who must now decide'.",
      ],
      knowledgeCheck: {
        id: "pm6-s2-kc",
        question: "A stage's forecast breaches its tolerance by two days and £1,500. The board's *first* legitimate move is to:",
        options: [
          "wait for the actual figures at the stage boundary",
          "decide it's within the project's larger tolerance so no decision is needed",
          "choose among exception plan, revised stage tolerance, escalation, or closure",
          "instruct Dev to absorb the overrun in Mistry Build's margin",
        ],
        correctOption: 2,
        explanation:
          "A broken delegation demands a decision from the level that granted it — in one of the four recognised shapes. Waiting, hand-waving upward tolerance, and instructing a supplier all dodge the choice the theme assigns the board.",
      },
      assessment: [
        {
          id: "pm6-s2-a1",
          type: "single",
          prompt: "Sam drafts a full exception plan the day the breach is forecast, before anyone at board level responds. What went wrong?",
          options: [
            { id: "a", label: "Nothing — speed is the theme's ask" },
            { id: "b", label: "The plan needed Priya's audit sign-off first" },
            { id: "c", label: "Exception plans are commissioned by the board; drafting unprompted spends tolerance the decision may not authorise" },
            { id: "d", label: "The exception report should have gone to corporate instead" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The sequence is report → decision to commission → plan. Skipping the commission burns days and presumes the board's answer, which may be 'revised tolerance, carry on' or 'stop'.",
          topic: "Themes",
        },
        {
          id: "pm6-s2-a2",
          type: "multiple",
          prompt: "Which elements belong in an exception report's pack?",
          options: [
            { id: "a", label: "The pierced tolerance, by how much, and the forecast date" },
            { id: "b", label: "Consequences for products, benefits and the case" },
            { id: "c", label: "The named individuals at fault for the overrun" },
            { id: "d", label: "Options with costs, and a recommendation" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "The pack is built for deciding, not attributing. Facts, consequences, priced options — a culpability paragraph changes nothing the board can choose and poisons the next report's candour.",
          topic: "Themes",
        },
        {
          id: "pm6-s2-a3",
          type: "boolean",
          prompt: "If a stage exception's consequences would also breach the project's own tolerance, the board may settle it entirely within its own authority.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "The board's delegation stops where the project tolerance begins. A consequence beyond it is the board's own exception — upward, to corporate, on the same decision-document logic.",
          topic: "Themes",
        },
      ],
    },
  ],
};
