import type { CourseModule } from "../types";

export const riskAndChangeModule: CourseModule = {
  id: "pp-m5",
  slug: "risk-and-change",
  order: 5,
  title: "Risk and change management in practice",
  shortTitle: "Risk & change",
  tagline: "Choose the response, own the record, price the change.",
  description:
    "The two themes with the most marks on the paper, worked as triage: picking a risk response and its fallback, telling a risk from an issue the moment it stops being uncertain, and routing a customer request to the right budget with the right authority.",
  scene: "risk",
  sessions: [
    {
      id: "risk-and-change/handling-risks-not-recording-them",
      slug: "handling-risks-not-recording-them",
      title: "Handling risks, not recording them",
      summary:
        "Response families chosen against real facts — the boiler quote, the cold-chain window — with fallback positions and the moment escalate becomes the answer.",
      durationMinutes: 14,
      objectives: [
        "Select a proportionate response from the six families",
        "Attach a fallback position to every primary response",
        "Pair response choices with the budget line that funds them",
      ],
      sections: [
        {
          id: "pm5-s1-1",
          paragraphs: [
            "Anyone can log 'boiler quote may overrun — medium/high'. The paper asks the next sentence: **so what do we do?** Every risk gets a response from the six families — **avoid, mitigate, transfer, explore, accept, escalate** — and the choice must fit the cause, the effect, and who can actually act.",
            "Damp in an old wall? **Avoid**: pick the unit that isn't Victorian and delete the cause. A late boiler delivery squeezing the 9 February date? **Mitigate**: order with a milestone deposit now. Cold-chain breakdown during trial runs, where Kirkham Cold Logistics owns the vans? **Transfer**: a penalty-backed clause. The £18,000 contingency is the method's way of saying *mitigate and accept, funded* — the pot is the fallback.",
          ],
        },
        {
          id: "pm5-s1-2",
          heading: "Fallback is half the answer",
          paragraphs: [
            "A response without a fallback is a wish with a verb. The theme expects both: primary action, plus what you do if it fails or the risk hits anyway. Mitigation on the boiler delivery fails and the date still slides? The pre-agreed fallback is the **accept** behaviour: absorb within tolerance, revise the stage plan, inform the board.",
            "Escalate has the strictest meaning on the paper and the loosest in the wild. It is not 'raise the profile'. It is: **this is outside my delegated tolerance, so it becomes the next authority's risk** — with the register handed upward, not a worried email.",
          ],
          callout: {
            tone: "exam",
            title: "The escalate trap",
            body: "'Escalate the risk to the board' as an answer is correct only when the risk's effect would breach the stage or project tolerance. Mitigating a nuisance within tolerance and escalating it anyway wastes authority; escalating means crossing a delegation line, not expressing concern.",
          },
        },
        {
          id: "pm5-s1-3",
          heading: "Probability and impact, used honestly",
          paragraphs: [
            "Assessment feeds prioritisation — it is not a score to defend. A high/low risk that costs £40 to monitor monthly may deserve a *smaller* response than a medium/high that could breach the stage tolerance. The paper's favourite version of this compares two risks with **identical scores** and asks which gets the bigger funded response: the one whose effect touches a tighter constraint.",
            "And remember the good kind: an opportunity — a supplier discount for early payment — earns an **explore** response with the same rigour as a threat. Projects that only manage threats are, in theme language, leaving benefits in the field.",
          ],
        },
      ],
      keyPoints: [
        "Six response families; the chosen one must fit who can act and what the effect touches.",
        "Every primary response ships with a fallback — contingency is funded accept.",
        "Escalate means transferring past a delegation line, not raising volume.",
        "Scoring prioritises; it does not by itself size the response.",
      ],
      knowledgeCheck: {
        id: "pm5-s1-kc",
        question: "The stage's contingency exists and a boiler overrun would breach the ±£4,000 tolerance if unmanaged. Which pair describes the method's answer?",
        options: [
          "Avoid the boiler entirely and bake electric",
          "Mitigate with early order and deposit; fallback is the funded contingency, escalation only if the forecast still pierces tolerance",
          "Accept silently and wait for the quote",
          "Escalate immediately; anything involving £5,000 is board business",
        ],
        correctOption: 1,
        explanation:
          "Primary action reduces the hit, the pot absorbs what remains, and the board sees it only if the forecast crosses the line. The other options skip a step the theme explicitly requires.",
      },
      assessment: [
        {
          id: "pm5-s1-a1",
          type: "single",
          prompt: "Nadia's fleet could fail its temperature certification mid-trials — an effect outside Sam's tolerance and owned by Kirkham's directorate. The proportionate response is:",
          options: [
            { id: "a", label: "Mitigate: buy a spare reefer unit with change budget" },
            { id: "b", label: "Transfer: outsource all despatch next month" },
            { id: "c", label: "Escalate: it belongs to an authority that can actually fix its cause" },
            { id: "d", label: "Accept: certification lapses are rare enough" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The cause sits outside the project's reach and the effect beyond its tolerance — the definition of escalate. Buying a reefer with change money mislabels a risk as scope, and accepting is deciding nothing.",
          topic: "Themes",
        },
        {
          id: "pm5-s1-a2",
          type: "multiple",
          prompt: "Which responses pair correctly with their funding logic?",
          options: [
            { id: "a", label: "Mitigation costs counted in the stage plan's ordinary budget" },
            { id: "b", label: "Realised-threat absorption drawn from stage contingency" },
            { id: "c", label: "Opportunity exploitation funded quietly from stage contingency" },
            { id: "d", label: "Escalated risks repaid to the board as a levy" },
          ],
          correctOptionIds: ["a", "b"],
          explanation:
            "Planned mitigation is planned cost; contingency catches realised risk. Exploiting an opportunity that changes scope must travel the change route with the change budget — a quiet contingency draw hides a decision. Escalation moves ownership, never money.",
          topic: "Themes",
        },
        {
          id: "pm5-s1-a3",
          type: "boolean",
          prompt: "'Escalate' and 'raise the profile of a risk at the next highlight report' mean the same thing in the method.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "Escalation crosses a delegation boundary and transfers ownership. Reporting a risk upward that you still own is profile-raising, not escalation — the paper tests exactly this seam.",
          topic: "Themes",
        },
      ],
    },
    {
      id: "risk-and-change/issues-live-here-now",
      slug: "issues-live-here-now",
      title: "Issues live here now",
      summary:
        "The chiller calibration failure has stopped being hypothetical: triage, ownership of resolution versus ownership of the register, and re-ranking under time pressure.",
      durationMinutes: 12,
      objectives: [
        "Move a realised risk to an issue without double-handing the record",
        "Separate who owns the issue from who owns the register",
        "Re-prioritise the issue log when the stage clock changes",
      ],
      sections: [
        {
          id: "pm5-s2-1",
          paragraphs: [
            "The calibration fault on the new bay is not a story about risk registers — it **happened**, it blocks batch trials, and trials feed the 9 February promise. That's an issue: real, current, needing a response with a name against it.",
            "The tidy conversion most candidates miss: a realised risk doesn't live in two places. The risk entry closes with a forward reference to the issue; the issue carries the response work. Registers that keep both alive spawn double-counted status reports, and status reports are where exam options love to hide the error.",
          ],
        },
        {
          id: "pm5-s2-2",
          heading: "Owners and librarians",
          paragraphs: [
            "The **project manager owns the register** — its completeness, its currency, its routing. That has never once meant the project manager owns the *fix*. Calibration recovery belongs with Dev's engineers and the manufacturer's visit; the issue entry names them, with a date.",
            "When the issue's effect would breach stage tolerance even after the best recovery, the board owns it as an exception. Same fact, three owners, in strict order: register (Sam), resolution (named practitioner), escalation consequence (board).",
          ],
          callout: {
            tone: "tip",
            title: "Spotting the ownership trap",
            body: "Questions will offer 'the project manager resolves the issue' as the sensible-sounding answer. Sensible is not correct: owners resolve, managers route and record. Read for the verb.",
          },
        },
        {
          id: "pm5-s2-3",
          heading: "Re-ranking when the clock shortens",
          paragraphs: [
            "Issue priority isn't a personality trait of the log — it's recomputed against the live constraint. With the bay down, the cosmetic-packaging complaint that sat comfortably at medium now outranks nothing, while the calibration issue that delays trials jumps. The theme's behaviour under pressure: **re-assess against the date**, not against the original scores.",
          ],
        },
      ],
      keyPoints: [
        "A realised risk closes into an issue; one live record, not two.",
        "Register ownership, resolution ownership and escalation ownership are three distinct hands.",
        "Issue priority is re-ranked against the current constraint, not remembered from intake.",
        "Read the verb of an answer: resolve, route, record and escalate are different jobs.",
      ],
      knowledgeCheck: {
        id: "pm5-s2-kc",
        question: "The calibration issue, even with Dev's fastest recovery, is forecast to cost the stage nine days. Stage tolerance is ±1 week. Whose issue is it now?",
        options: [
          "Sam's alone — issue resolution never leaves the project manager",
          "Sam owns the record, Dev's named engineer owns recovery, and the board owns the tolerance-breach decision",
          "Fern's — the senior user owns all delays to trials",
          "Priya's — the auditor's visit makes it external",
        ],
        correctOption: 1,
        explanation:
          "The three-hand model holds: register, resolution, and once the forecast pierces tolerance, the exception decision. Each hand stays in its lane even as the issue crosses all three.",
      },
      assessment: [
        {
          id: "pm5-s2-a1",
          type: "single",
          prompt: "Two weeks on, the closed risk and the open issue for the same calibration fault both appear 'live' in the combined status. What's the defect?",
          options: [
            { id: "a", label: "Nothing — double entries are the standard" },
            { id: "b", label: "The realised risk should have closed with a reference to the issue" },
            { id: "c", label: "The issue should have stayed in the risk register" },
            { id: "d", label: "The board should have absorbed both into the exception report" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Clean conversion keeps the picture honest. A live risk entry for a realised event is stale bookkeeping that distorts every report built on it.",
          topic: "Themes",
        },
        {
          id: "pm5-s2-a2",
          type: "boolean",
          prompt: "Owning the issue register means owning issue resolution dates.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "The register's owner ensures issues are recorded, routed and re-ranked. Dates and work belong to the named issue owners — the method separates the librarian from the resolver deliberately.",
          topic: "Themes",
        },
      ],
    },
    {
      id: "risk-and-change/change-budget-arithmetic",
      slug: "change-budget-arithmetic",
      title: "Change budget arithmetic",
      summary:
        "Northgate's 1,600-loaf request as a full change walk: scope test, budget test, authority pack, and the multi-baseline impact record.",
      durationMinutes: 13,
      objectives: [
        "Triage a incoming change against scope before cost",
        "Route the decision to the correct change authority",
        "Record a decided change across every affected baseline",
      ],
      sections: [
        {
          id: "pm5-s3-1",
          paragraphs: [
            "The change theme is triage with a paper trail. Northgate's request for an extra 1,600 loaves weekly arrives friendly and time-sensitive — which is precisely how unscreened changes slip past governance. The first question has nothing to do with money: **is this a change to the agreed scope at all?**",
            "If yes — and a new bay's duty cycle says it is — it becomes a **issue/change entry with impact analysis before decision**, not an engineering debate after one. The pack the authority sees: what changes in products, dates, cost, benefits, risks; what it costs to do and to refuse; the recommendation.",
          ],
        },
        {
          id: "pm5-s3-2",
          heading: "£6,000 of change, not a penny of contingency",
          paragraphs: [
            "The pots are answers to different questions. **Contingency** pays when uncertainty materialises — the boiler quote, the calibration repair. **Change budget** pays when the business deliberately alters scope — Northgate's volume. Paying a chosen change from contingency makes an unapproved decision look like an accident; funding an accident from the change budget hides the risk's real cost.",
            "If a change would exceed the £6,000 pot, or pierce a baseline the board itself is delegated to, it climbs to the board — with Tom's business-case veto quietly doing its job, because a change that spoils the case is refused on the case's terms.",
          ],
          bullets: [
            "Triage: in scope? then impact-analyse before anyone says 'yes, but…'",
            "Budget test: change budget for deliberate change, contingency for realised risk",
            "Authority test: within delegated budget and tolerance, the project's change authority decides; beyond it, the board",
            "Recording test: the decision updates *all* affected baselines and registers, in one dated act",
          ],
          callout: {
            tone: "exam",
            title: "The answer that fails impact analysis",
            body: "Options like 'implement it and note the cost later' fail twice: the decision was made before the pack existed, and the baselines — products, schedule, possibly the case — never officially moved. Sequence is substance here.",
          },
        },
        {
          id: "pm5-s3-3",
          heading: "Approved is not the end of the paperwork",
          paragraphs: [
            "A change's afterlife is where records earn their keep. Approved volume change re-sizes the delivery plan (products), moves commissioning forward (schedule), draws from the £6,000 (cost), changes payback arithmetic (case, for the board's next re-test), and seeds fresh uncertainty (risks: is the second bay's throughput modelled?). One decision, five updates, one date.",
            "The theme's promise: nothing about the project stays secretly changed. If an auditor like Priya can't follow a change from request to each updated baseline, the record has failed — and an exam option that leaves a register untouched after a scope decision is inviting you to agree.",
          ],
        },
      ],
      keyPoints: [
        "Change triage asks 'is this scope change?' before 'what does it cost?'.",
        "Change budget funds decisions; contingency catches events — never blur the pots.",
        "Authority is a function of the pot and the tolerance the change would cross.",
        "Approval means dated, complete updates across every affected baseline.",
      ],
      knowledgeCheck: {
        id: "pm5-s3-kc",
        question: "Northgate's request is analysed, priced at £5,200, and inside stage baselines after re-sequencing. Who decides?",
        options: [
          "The board — anything touching bread volume is strategic",
          "The project's change authority, within its £6,000 delegated change budget",
          "Sam alone, since the plan re-sequenced cleanly",
          "Northgate, since they fund the line's first orders",
        ],
        correctOption: 1,
        explanation:
          "Within budget and baseline delegation, the change authority decides on the pack's evidence. Escalating every priced change collapses the delegation; a customer deciding is the very conflict the route exists to prevent.",
      },
      assessment: [
        {
          id: "pm5-s3-a1",
          type: "single",
          prompt: "The bay duty-cycle change is funded from the £18,000 contingency to 'keep it off the board's desk'. Which harm does the theme name first?",
          options: [
            { id: "a", label: "Contingency runs out before real risks materialise — and a deliberate change is recorded as an accident" },
            { id: "b", label: "Priya's audit automatically fails over mislabelled drawings" },
            { id: "c", label: "Northgate must be told the request was refused" },
            { id: "d", label: "No harm; pots are interchangeable within tolerance" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "The pots answer different governance questions. Blurring them depletes risk protection and disguises an unapproved decision — the record stops telling the truth about who chose what.",
          topic: "Themes",
        },
        {
          id: "pm5-s3-a2",
          type: "multiple",
          prompt: "An approved scope change lands on a project mid-stage. Which records must reflect it?",
          options: [
            { id: "a", label: "The affected product descriptions and delivery plan" },
            { id: "b", label: "The stage plan and its schedule baseline" },
            { id: "c", label: "Only the finance spreadsheet Ruth keeps privately" },
            { id: "d", label: "The risk register, for uncertainty the change creates" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "Changes propagate across all affected baselines and registers, dated together. A private spreadsheet isn't a baseline, and new uncertainty always needs its entries.",
          topic: "Themes",
        },
      ],
    },
  ],
};
