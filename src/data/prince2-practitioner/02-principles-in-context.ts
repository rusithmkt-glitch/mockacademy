import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const principlesInContextModule: CourseModule = {
  id: "pp-m2",
  slug: "principles-in-context",
  order: 2,
  title: "The seven principles in context",
  shortTitle: "Principles in context",
  tagline: "When the principles pull in different directions, the method says what to do.",
  description:
    "At Foundation the principles are a list. At Practitioner they're a decision tool: who owns the business case when payback slips, what 'learn from experience' looks like with a live register, and how to name the principle behind every call you make.",
  scene: "people",
  sessions: [
    {
      id: "principles-in-context/when-principles-collide",
      slug: "when-principles-collide",
      title: "When principles collide",
      summary:
        "Continued business justification against sunk costs, delegated authority against escalation — worked on the Wholesale Kitchen re-forecast.",
      durationMinutes: 14,
      objectives: [
        "Re-test the business case using tolerance and forecast arithmetic",
        "Separate the executive's ownership from the project manager's influence",
        "Explain which principle governs a contested decision",
      ],
      sections: [
        {
          id: "pm2-s1-1",
          paragraphs: [
            "Stage 2 closes and Ruth, who owns benefits and finance, re-runs the numbers. Input costs rose faster than the model assumed, and payback slips from **fourteen months to twenty**.",
            "Tom, the executive, has a view: \"We've spent £240,000 already. We don't stop now.\" And there it is — two principles in a headlock. **Continued business justification** says the case must be worth it *from here on*, not that it was worth it *so far*. **Learn from experience** says the sunk money is a lesson for the next business case, not a reason for this one.",
          ],
          scenario: {
            question: "So — close the project?",
            steps: [
              {
                title: "That's one tempting wrong answer",
                body: "A worse forecast is **not** automatic closure. Kill the project on the headline and you discard the products, the contracts and the re-scoping options unread.",
              },
              {
                title: "Neither is 'carry on regardless'",
                body: "Tom's sunk-cost argument quietly *violates* the very principle it should be testing. 'We've spent it' is never, by itself, a justification to spend more.",
              },
              {
                title: "The right behaviour",
                body: "Brief the board with the re-forecast and the **options**: proceed, re-scope to restore payback (drop a product line, delay the bay), or stop and bank what's built. Ownership of the decision stays where the method put it — with the executive.",
              },
              {
                title: "Sam's part",
                body: "The project manager doesn't own the business case and must not pretend to. Sam's job is honest, quantified information fast — then implement whatever the board decides.",
              },
            ],
          },
        },
        {
          id: "pm2-s1-2",
          heading: "The ownership map, one more time",
          paragraphs: [
            "Most 'principle' questions on the paper are really ownership questions. Commit this to reflex: the **executive owns continued business justification**; the **board owns the stage boundary and exception decisions**; the **project manager owns running the work within delegated tolerance**; the **senior user owns acceptance of products** against the 800g±40g, 98% criteria.",
            "When an option assigns a decision to the wrong owner, it's wrong even when the decision itself sounds sensible.",
          ],
          callout: {
            tone: "exam",
            title: "The trap that repeats",
            body: "'Hand the decision to the project manager because they know the detail.' The method deliberately separates knowing from deciding. Delegation is bounded by tolerance — beyond it, the decision rises.",
          },
        },
        {
          id: "pm2-s1-3",
          heading: "Delegated authority has edges",
          paragraphs: [
            "Sam is trusted to run stage two inside ±£4,000 and ±1 week. The gas boiler draw of £5,000 came from the £18,000 contingency, so the baseline tolerance wasn't breached — Sam recorded, informed, and carried on. That is **manage by exception** working exactly as designed.",
            "Now imagine the repair forecast £19,000 — beyond contingency and into tolerance breach. The same principle now demands the opposite behaviour: an exception report upward, not a quiet fix. Exception management isn't a permission to act; it's a boundary that tells you **when to stop acting and start reporting**.",
          ],
        },
      ],
      keyPoints: [
        "Continued business justification tests the case from today forward, never backwards at sunk cost.",
        "The executive owns that test; the project manager only owns the information feeding it.",
        "Manage by exception cuts both ways: inside tolerance act, at breach escalate.",
        "Options assigned to the wrong owner are wrong answers, however sensible they sound.",
      ],
      knowledgeCheck: {
        id: "pm2-s1-kc",
        question:
          "Payback slips from fourteen to twenty months at a stage boundary. Tom argues for continuing because £240,000 is already spent. Which principle is being mishandled?",
        options: [
          "Focus on products, because the bread isn't baked yet",
          "Continued business justification, because the case must be valid from here forward",
          "Tailor to the environment, because bakeries are small",
          "Manage by exception, because nothing has breached tolerance",
        ],
        correctOption: 1,
        explanation:
          "Sunk cost is not justification. The principle requires the case to stand on *future* costs and benefits — with options to re-scope or stop, owned by the executive.",
      },
      assessment: [
        {
          id: "pm2-s1-a1",
          type: "single",
          prompt:
            "Given the re-forecast, what is the method's recommended next move?",
          options: [
            { id: "a", label: "Close the project immediately — an invalid case never continues" },
            { id: "b", label: "Proceed silently; the board commissioned fourteen months already" },
            { id: "c", label: "Brief the board with the re-forecast and options, including reduced scope" },
            { id: "d", label: "Let Sam re-approve the business case, since they hold the detail" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "A worse forecast triggers a decision pack, not an instant verdict. Immediate closure discards options; silent continuation ignores the test; and Sam neither owns nor approves the case.",
          topic: "Principles",
        },
        {
          id: "pm2-s1-a2",
          type: "boolean",
          prompt:
            "A £5,000 overrun drawn in-full from the stage's £18,000 contingency, leaving the ±£4,000 stage tolerance intact, requires an exception report to the board.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Contingency is inside the tolerance frame. The forecast no longer breaches the boundary, so there is no exception — just a recorded draw and an informed board.",
          topic: "Principles",
        },
        {
          id: "pm2-s1-a3",
          type: "single",
          prompt: "Which statement best captures delegated authority on this project?",
          options: [
            { id: "a", label: "Sam decides anything involving the supplier Mistry Build" },
            { id: "b", label: "Sam decides within ±£4,000 and ±1 week for the stage; beyond it, the board decides" },
            { id: "c", label: "Fern as senior user approves all spending decisions" },
            { id: "d", label: "Delegation ends at the stage boundary and restarts after" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Authority is bounded by the stage's tolerances — supplier origin and topic don't move the line. The board's commission spans stages; delegation persists across boundaries.",
          topic: "Principles",
        },
      ],
    },
    {
      id: "principles-in-context/principles-as-a-decision-test",
      slug: "principles-as-a-decision-test",
      title: "Principles as a decision test",
      summary:
        "Use the seven principles as a live checklist when proposals land — Kit's festival, Nadia's maintenance window — and justify tailoring by naming the principle behind it.",
      durationMinutes: 12,
      objectives: [
        "Run an incoming proposal through the principles quickly",
        "Distinguish legitimate tailoring from principle abandonment",
        "State the principle a decision rests on in one sentence",
      ],
      sections: [
        {
          id: "pm2-s2-1",
          paragraphs: [
            "Practitioner candidates memorise the principles and then forget them, because exam questions don't say *'apply the principles'*. They say: Kit Oakline suggests launching the wholesale line at a January food festival, two weeks before the contracted go-live. Nadia needs the chiller bay offline for a maintenance window in week 20. Handle it.",
            "The useful habit is a **three-question pass** before you reach for a register: Does it change the case? Does it change a baseline? Who owns the yes?",
          ],
        },
        {
          id: "pm2-s2-2",
          heading: "The three-question pass, applied",
          paragraphs: [
            "Kit's festival idea: it doesn't change the products, but it tempts a **timescale change** — moving go-live. **Focus on products** says judge the work by outputs, not events; the kitchen serves the 9 February contract, a festival is marketing. **Tailor to the environment** doesn't license re-planning around a nice-sounding date — tailoring changes the *implementation*, not the agreed baselines without a decision. The right home: raise it to Fern and the board as an opportunity, worth it or not.",
            "Nadia's window: it touches a **dependency** — batch baking trials need the bay available. That's a planning matter inside Sam's delegation unless the window breaches the ±1 week stage tolerance. **Manage by exception** tells you instantly whether it's yours or the board's.",
          ],
          callout: {
            tone: "tip",
            title: "Name it to claim it",
            body: "In review, the answers that score are the ones that can say 'this follows continued business justification because…'. If you can't name the principle behind your choice, the choice is a guess.",
          },
        },
        {
          id: "pm2-s2-3",
          heading: "Tailoring vs tearing",
          paragraphs: [
            "The wholesale kitchen project is small: a three-person board, one senior user, a supplier the team already trusts. Compressing the number of stages, keeping registers lean, running the audit as a single review instead of a committee — all legitimate tailoring. The **principles themselves are never tailorable**: you cannot tailor away continued business justification or defined roles.",
            "Priya's external audit on 22 January is a good test. You may tailor *how* you meet external verification — one thorough review is fine — but you cannot decide the audit isn't a real event feeding the business case. Record it, prepare for it, answer to it.",
          ],
          bullets: [
            "Tailor the **implementation** (stages, registers, meeting cadence) — never the **principles**",
            "Every tailoring choice should have a written reason tied to the project's environment",
            "'We're too small for that' is a reason only if the principle's purpose is still served some other way",
          ],
        },
        {
          id: "pm2-s2-4",
          heading: "Learn from experience, the working version",
          paragraphs: [
            "Before the refit started, Sam gathered Dev, Kit and the Headingley shift lead for an hour on the York shop's mistakes and converted them into live entries in the risk and issue registers — chiller calibration checks, gas quotes early, a buffer before go-live. That's the principle in its exam form: past lessons **changing current behaviour**, visible in records, not a meeting that produced goodwill.",
            "At closure, the reverse is owed: the lesson log updated so the next project starts warmer than this one did.",
          ],
        },
      ],
      keyPoints: [
        "Run proposals through a three-question pass: case, baselines, owner.",
        "Tailoring changes implementation; the seven principles are not tailorable.",
        "Learn from experience is only proven when records and plans change.",
        "Naming the principle behind a decision is what separates right answers from lucky ones.",
      ],
      knowledgeCheck: {
        id: "pm2-s2-kc",
        question: "Kit wants go-live moved earlier for a food festival. Which treatment fits the method?",
        options: [
          "Sam moves go-live; faster is always better for the business case",
          "It's raised as a proposal to the board, judged against products and baselines, not silently re-planned",
          "It's ignored; external events are outside PRINCE2",
          "Dev implements it; the supplier owns delivery dates",
        ],
        correctOption: 1,
        explanation:
          "Changing a contracted baseline is a board decision informed by the case. Unilateral moves — in either direction — skip the ownership the method insists on.",
      },
      assessment: [
        {
          id: "pm2-s2-a1",
          type: "multiple",
          prompt: "Which changes are legitimate tailoring for a project this size?",
          options: [
            { id: "a", label: "Running three stages instead of four where boundaries are thin" },
            { id: "b", label: "Dropping the executive role to save a meeting" },
            { id: "c", label: "Keeping one lean risk register rather than themed splits" },
            { id: "d", label: "Combining external verification with Priya's existing audit" },
          ],
          correctOptionIds: ["a", "c", "d"],
          explanation:
            "Stage count, register shape and verification timing scale with context. Removing the executive removes a defined-responsibility principle — that's not tailoring, it's amputation.",
          topic: "Principles",
        },
        {
          id: "pm2-s2-a2",
          type: "boolean",
          prompt: "'We're a small bakery, so we don't need business case re-tests' is a valid tailoring decision.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Scale may change the form — a page instead of a pack — but the principle of continued justification remains. The re-forecast exists precisely because Tom must be able to make that call.",
          topic: "Principles",
        },
      ],
    },
  ],
};
