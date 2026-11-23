import type { CourseModule } from "../types";

export const tailoringExamModule: CourseModule = {
  id: "pp-m8",
  slug: "tailoring-and-exam-technique",
  order: 8,
  title: "Tailoring and exam technique",
  shortTitle: "Tailoring & technique",
  tagline: "Adapt everything you're allowed to, prove everything you must, and sit the paper with a plan.",
  description:
    "The last module does two jobs: it teaches tailoring the way the syllabus demands — with reasons, limits and an auditor's eye — and it converts everything before it into an exam strategy for 68 weighted marks in 150 open-book minutes.",
  scene: "foundations",
  sessions: [
    {
      id: "tailoring-and-exam-technique/tailoring-with-a-reason",
      slug: "tailoring-with-a-reason",
      title: "Tailoring with a reason",
      summary:
        "What a three-person bakery board may compress, what it may never remove, and how to defend the difference to an external auditor.",
      durationMinutes: 13,
      objectives: [
        "Scale the implementation to the project's environment",
        "Identify the non-negotiable core of the method",
        "Justify tailoring choices in writing to an outsider's standard",
      ],
      sections: [
        {
          id: "pm8-s1-1",
          paragraphs: [
            "The tailoring principle is often misfiled as permission. It's actually an **accounting requirement**: you adapt the method to the project's environment — scale, complexity, importance, risk, team behaviour — and you can be asked, at any point, to show *why*.",
            "The Wholesale Kitchen is a good tailoring subject precisely because it looks informal: a small business, a three-person board, one senior user, a supplier already trusted. Compressing four stages where boundaries were thin, keeping one risk register instead of themed splits, folding external verification into Priya's booked audit week — all defensible in a single sentence each.",
          ],
        },
        {
          id: "pm8-s1-2",
          heading: "The line that never moves",
          paragraphs: [
            "The seven principles are not tailorable. Not because the method is proud, but because they're the parts that carry the governance: you can run the business case test on one page instead of ten, but a project that 'tailored' the re-test away at the stage boundary hasn't scaled PRINCE2 — it has left it and kept the logo.",
            "The exam's tailoring questions run this seam constantly. Their shape: 'For a project this size, which of these is a valid tailoring decision?' — and the wrong options are always either **principle abandonment dressed as simplicity** ('the board skips the case re-test, we all trust Tom') or **ceremony the environment doesn't need kept anyway** ('weekly 40-slide highlight decks for a 36-week build').",
          ],
          callout: {
            tone: "tip",
            title: "The one-page test for your own answers",
            body: "A tailoring choice is valid if you can write: 'We changed X because our environment is Y, and the purpose of X is still served by Z.' If Z is missing, you haven't tailored — you've deleted.",
          },
        },
        {
          id: "pm8-s1-3",
          heading: "Defending it to Priya",
          paragraphs: [
            "External verification is tailoring's examination, in every sense. Priya's 22 January review won't ask whether the board was three people or nine; it will follow a decision — say, the £5,000 contingency draw — and check that each tailoring choice along its path still let the required governance happen: was the case still re-testable, were tolerances still real, did registers still record the truth?",
            "So build the habit of writing tailoring decisions down with their reasons and their substitute mechanisms. A paragraph in the project initiation documentation — 'single senior user due to company size; product acceptance authority sits with Fern's nominated lead' — costs five minutes and answers audits for the whole lifecycle.",
          ],
        },
      ],
      keyPoints: [
        "Tailoring scales implementation and owes a written reason.",
        "The principles are the non-negotiable core; their paperwork is negotiable.",
        "Valid tailoring preserves each element's purpose through a simpler mechanism.",
        "Justify choices to an outsider's standard: follow one decision's path and check the governance still lives.",
      ],
      knowledgeCheck: {
        id: "pm8-s1-kc",
        question: "Which is a valid tailoring decision for this project?",
        options: [
          "Removing the stage-boundary case re-test because Tom attends every review anyway",
          "Running one lean risk register with the same fields the themed split would have used",
          "Letting the daily log lapse because Kit's marketing team uses chat",
          "Skipping defined roles because 'everyone here wears many hats'",
        ],
        correctOption: 1,
        explanation:
          "Register consolidation keeps the purpose intact with less apparatus — the pattern of legitimate tailoring. The others all delete a purpose (re-testing, decision evidence, clear authority) while keeping the vocabulary of busyness.",
      },
      assessment: [
        {
          id: "pm8-s1-a1",
          type: "single",
          prompt: "Priya's audit finds that product acceptance was handled by Fern's nominated lead without the documented quality-register entries. What does the tailoring theme say went wrong?",
          options: [
            { id: "a", label: "Nothing — a small business may accept informally" },
            { id: "b", label: "The tailoring compressed the paperwork but abandoned the evidence the purpose requires" },
            { id: "c", label: "The auditor is applying corporate standards a bakery shouldn't meet" },
            { id: "d", label: "Acceptance should always revert to the board" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "You may simplify how results are recorded, not whether they exist: the quality theme's purpose is verifiable acceptance, and the records are its proof. C blames the governance instrument; D over-centralises a delegated role.",
          topic: "Tailoring",
        },
        {
          id: "pm8-s1-a2",
          type: "multiple",
          prompt: "Which tailoring justifications pass the 'purpose preserved' test?",
          options: [
            { id: "a", label: "Three stages instead of four; boundaries still carry reports and decisions" },
            { id: "b", label: "No highlight reports; the board prefers surprise-free silence" },
            { id: "c", label: "One change authority for the project, with the board above it for over-budget items" },
            { id: "d", label: "Lessons captured in two short sessions rather than a standing workshop" },
          ],
          correctOptionIds: ["a", "c", "d"],
          explanation:
            "Each keeps the governance function in lighter clothing. Silence isn't a scaled-down report — it's the absence of the function the board's information depends on.",
          topic: "Tailoring",
        },
      ],
    },
    {
      id: "tailoring-and-exam-technique/sitting-the-68-mark-paper",
      slug: "sitting-the-paper",
      title: "Sitting the 68-mark paper",
      summary:
        "Time strategy for 150 minutes, open-book mechanics that actually save time, matching-set marking, and the traps that cost the most marks.",
      durationMinutes: 14,
      objectives: [
        "Run a three-pass time plan with a review buffer",
        "Use the scenario documents as lookup, not reading",
        "Eliminate on authority, sequence and arithmetic; survive the matching sets",
      ],
      sections: [
        {
          id: "pm8-s2-1",
          paragraphs: [
            "150 minutes, 68 marks, pass at 38. The arithmetic that should govern your evening: **roughly two minutes per mark** is a fantasy — you also have 56 items to read and two documents to navigate. The realistic frame is: 20 minutes scenario immersion, then about two minutes a question, with the last 12–15 minutes as a marked-review buffer.",
            "Three passes, always. Pass one answers the questions you'd bet on — usually the first half of your capacity in the first quarter of the time. Pass two works the flagged middle tier with the scenario open at the right page. Pass three is the buffer defending the borderline calls, not a fresh-eyes lottery.",
          ],
        },
        {
          id: "pm8-s2-2",
          heading: "Open book means indexed, not leisurely",
          paragraphs: [
            "The documents are the source of every answer, and the skill is **lookup speed**. Before pass one, run the anchor routine from module one and pencil-tab what matters: the tolerance table (±£8k/±2wk project, ±£4k/±1wk stage two), the contingency and change pots (£18k, £6k), the STATUS block, the role list. Ninety seconds that save twenty minutes.",
            "A related discipline: answer **this question**, not the Foundation question you can smell near it. 'What should Sam do first?' is a sequence question — two options may be things Sam will indeed do, and only one is first. If you find yourself approving an answer for being 'a good thing generally to do', you've answered a different exam.",
          ],
          callout: {
            tone: "exam",
            title: "The three discriminators, one last time",
            body: "When two options survive, the paper decides between them on **authority** (whose decision is it), **sequence** (what must precede what), or **arithmetic** (what the tolerances and baselines actually say). Ask all three in that order and the coin-flips become near-certainties.",
          },
        },
        {
          id: "pm8-s2-3",
          heading: "Matching sets, marked stem by stem",
          paragraphs: [
            "One mark per correct stem; options generally don't reuse; a five-option list for three stems leaves two distractors with purpose. Read the full set, place certainties, then eliminate within what remains. Each stem marks alone — so a blank stem is the only unforgivable answer, and a reasoned partial set is real money.",
            "Where sets usually sit: responses to situations (which risk response, which report, which authority). That means the set is secretly this course's modules five, six and seven in disguise — and candidates who studied matching sets as a format rather than as *content* keep mis-pairing escalate with profile-raising, or exception reports with highlight reports.",
          ],
          bullets: [
            "Never spend more than 90 seconds on a single one-mark item without a provisional answer",
            "Flag format: a certain answer with a 'check' mark still belongs in pass-three review; a guessed answer absolutely does",
            "The buffer defends passes one and two — it is not time to start the paper over",
            "Watch the clock by marks, not questions: the matching sets are three-mark anchors",
          ],
        },
        {
          id: "pm8-s2-4",
          heading: "The traps that actually cost marks",
          paragraphs: [
            "After all this course, the recurring failures are predictable: the sunk-cost continuation; the sensible decision with the wrong owner; the recovery plan drafted before it's commissioned; contingency quietly funding a deliberate change; and the exception report that waited for the next scheduled slot. Every one of these has a session in this course that names it — the last two weeks before your exam should be spent on those five seams and the scenario's arithmetic, not re-reading the method.",
            "You're not studying PRINCE2 any more. You're studying *this project* — and proving, 68 marks at a time, that you'd run it properly.",
          ],
        },
      ],
      keyPoints: [
        "Run three passes with a marked-review buffer; budget by marks, not question count.",
        "Open-book skill is indexed lookup: tab tolerances, pots, status and roles in the first minutes.",
        "Matching sets mark per stem — attempt all, place certainties, eliminate within the rest.",
        "The expensive traps are named seams: ownership, sequence, pots, timing, sunk cost.",
      ],
      knowledgeCheck: {
        id: "pm8-s2-kc",
        question: "Two options both describe correct future actions for a tolerance breach. The question asks what the project manager should do FIRST. How is it decided?",
        options: [
          "By picking the more complete-sounding option",
          "By the method's sequence: the breach is reported before any recovery is planned or started",
          "By whichever option the scenario documents mention first",
          "Both are acceptable; markers credit either",
        ],
        correctOption: 1,
        explanation:
          "'First' questions are sequence questions and the method's order is fixed: an exception that leaves delegation must be reported before the project's own recovery paper exists. Completeness, document order and split credit all miss what the question is testing.",
      },
      assessment: [
        {
          id: "pm8-s2-a1",
          type: "single",
          prompt: "With 20 minutes left and six flagged items including two matching sets, what is the buffer's correct use?",
          options: [
            { id: "a", label: "Start the two hardest unseen questions fresh" },
            { id: "b", label: "Defend the flags: verify each borderline call against the tabbed tolerance, authority and status facts" },
            { id: "c", label: "Check every answered question again, top to bottom" },
            { id: "d", label: "Complete blank stems only where you can reason to the full set" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The buffer exists to convert near-certainties into marks using your indexed evidence. Restarting hard items and full re-checks are the two classic ways candidates lose time they'd already earned, and blank stems always get an attempt — each stem marks alone.",
          topic: "Exam technique",
        },
        {
          id: "pm8-s2-a2",
          type: "boolean",
          prompt: "Because the paper is open book, deep recall of the processes matters less than knowing where the scenario states each tolerance.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["false"],
          explanation:
            "Both matter: the documents supply the facts, but only method knowledge tells you which fact is decisive and what the method then requires. Lookup without judgement is a slower way of guessing.",
          topic: "Exam technique",
        },
      ],
    },
  ],
};
