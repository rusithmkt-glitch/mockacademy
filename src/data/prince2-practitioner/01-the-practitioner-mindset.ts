import type { CourseModule } from "../types";

export const practitionerMindsetModule: CourseModule = {
  id: "pp-m1",
  slug: "the-practitioner-mindset",
  order: 1,
  title: "The Practitioner mindset",
  shortTitle: "Practitioner mindset",
  tagline: "Cross the bridge from knowing the method to proving you can apply it.",
  description:
    "The Practitioner paper doesn't ask what PRINCE2 is. It hands you a live project and asks what you would do. This module sets up how the scenario documents work, how the questions are shaped, and how to study for judgement instead of recall.",
  scene: "foundations",
  sessions: [
    {
      id: "the-practitioner-mindset/reading-the-scenario",
      slug: "reading-the-scenario",
      title: "Reading the scenario",
      summary:
        "How the Project Scenario and Additional Information documents work on the 68-mark, 150-minute open-book paper, and how to find any fact in seconds.",
      durationMinutes: 14,
      objectives: [
        "Describe the shape of the Practitioner paper and its two source documents",
        "Build a skim-then-anchor routine for a first read of a scenario",
        "Locate tolerance, status and people facts fast during an exam",
      ],
      sections: [
        {
          id: "pm1-s1-1",
          paragraphs: [
            "You've passed Foundation. You can name the principles, the themes and the processes. Now comes the paper that doesn't care about naming — it cares about **deciding**.",
            "The Practitioner exam gives you two documents: a **Project Scenario** and an **Additional Information** sheet describing the people involved. Every one of the 68 marks is answered against them. This is **open book** — not because the method is secret, but because the method is assumed. What's tested is whether you can use it on a messy, real project.",
            "Meet our scenario: **Fern & Flour**, the Leeds bakery, is building **The Wholesale Kitchen** — a second production line to supply coffee chains. £240,000 of funding, a payback forecast of fourteen months, a 36-week schedule split into four stages, and a go-live date of 9 February that the sales team has already promised customers.",
          ],
          scenario: {
            question: "The clock starts. What do you read first?",
            steps: [
              {
                title: "Not the background",
                body: "Skip the story you'd read anyway. Head straight for the numbers: **budget, tolerances and timescale**. They tell you what 'off course' even means.",
              },
              {
                title: "Then the current status",
                body: "Where is the project *right now*? A stage just closed, an issue is open, a customer wants something new. The status is where every question will live.",
              },
              {
                title: "Then the people",
                body: "Who is the executive, who owns the money, who does the work? On this paper, half of 'what should happen' is really 'who decides'.",
              },
              {
                title: "Anchor, don't memorise",
                body: "You don't need the facts in your head — you need to know **where they are**. Mark up the document so £240k, ±£8k and 9 February take three seconds to find.",
              },
            ],
          },
        },
        {
          id: "pm1-s1-2",
          heading: "The shape of the paper",
          paragraphs: [
            "68 marks in 150 minutes, with a pass mark of 38. Most items are one-mark multiple choice. Some are **matching sets**: a question stem with three statements and a shared list of options — one mark per correct pairing.",
            "That weighting changes your strategy. A Foundation paper rewards memory; this one rewards **navigation**. You'll spend marks reading, deciding and justifying, not reciting.",
          ],
          callout: {
            tone: "exam",
            title: "The numbers to internalise",
            body: "68 marks · 150 minutes · pass at 38 · open book. Roughly two minutes per available mark, before reading time. Pace is a skill like any other.",
          },
        },
        {
          id: "pm1-s1-3",
          heading: "A worked anchor: the gas boiler",
          paragraphs: [
            "Halfway through Stage 2, the quote for the new gas boiler comes back **£5,000 over**. Is that a crisis? The scenario answers before you ever reach the method: stage two has a tolerance of ±£4,000 and ±1 week, an £18,000 contingency, and the project itself tolerates ±£8,000.",
            "The draw is taken **from contingency**, not against the baseline — so the stage stays within tolerance, and the right behaviour is recorded management, not escalation. Every Practitioner question works like this: the fact that decides the answer is sitting in the documents, waiting for someone who knows where to look.",
          ],
          bullets: [
            "**Before you decide, locate**: money, date, tolerance, owner",
            "**Numbers beat adjectives**: 'over budget' means nothing until you know against which line",
            "**Status is dated**: the scenario tells you what has already happened — your answer must not re-decide it",
          ],
        },
        {
          id: "pm1-s1-4",
          heading: "The Additional Information document",
          paragraphs: [
            "The people sheet is short and deceptively valuable. Tom is the **executive** — the business case is theirs. Fern is **senior user** — the requirements and acceptance are theirs. Ruth handles benefits and finance, Sam runs the project day to day, Dev leads the supplier Mistry Build, Nadia runs the cold-chain logistics, Kit is external marketing, and Priya is the external auditor with a date already in the diary: 22 January.",
            "When a question asks 'what should the project manager do?', the people sheet is often what makes one option correct and three wrong. Authority is a fact in this scenario, not a matter of style.",
          ],
        },
      ],
      keyPoints: [
        "Every mark is answered against the Project Scenario and Additional Information documents.",
        "Read tolerances, current status and people first — they decide most answers.",
        "The paper is weighted: matching sets give one mark per correct stem.",
        "'Who decides?' is a scenario fact, not an opinion.",
      ],
      knowledgeCheck: {
        id: "pm1-s1-kc",
        question:
          "On the Practitioner paper, where does the fact that decides most answers come from?",
        options: [
          "Your memory of the PRINCE2 manual",
          "The Project Scenario and Additional Information documents",
          "The question's own wording alone",
          "Previous exam papers",
        ],
        correctOption: 1,
        explanation:
          "The paper is open book precisely because the scenario documents carry the decisive facts — tolerances, status and roles. Method knowledge tells you what to look for; the documents tell you what's true on this project.",
      },
      assessment: [
        {
          id: "pm1-s1-a1",
          type: "single",
          prompt:
            "The boiler quote is £5,000 over for stage two, which carries a £18,000 contingency. The draw comes from contingency. What does the project manager's next move most likely depend on?",
          options: [
            { id: "a", label: "Whether the stage's cost tolerance is still met after the draw" },
            { id: "b", label: "Whether Fern personally approves every overspend" },
            { id: "c", label: "Whether the go-live date is publicly advertised" },
            { id: "d", label: "Whether Priya's audit happens before the repair" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Contingency exists to absorb uncertainty without breaching tolerance. The decision hinges on the tolerance arithmetic, not on ceremony. Dates and audits are context, not triggers.",
          topic: "Processes",
        },
        {
          id: "pm1-s1-a2",
          type: "boolean",
          prompt:
            "Matching-set questions on the Practitioner paper award one mark per correct stem rather than all-or-nothing.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "Each stem in a matching set is separately markable, which is why partial knowledge still earns marks — and why you should attempt every stem.",
          topic: "Exam technique",
        },
      ],
    },
    {
      id: "the-practitioner-mindset/from-recall-to-judgement",
      slug: "from-recall-to-judgement",
      title: "From recall to judgement",
      summary:
        "How Practitioner questions differ from Foundation ones, how to approach matching sets, and why 'most appropriate' is the whole game.",
      durationMinutes: 12,
      objectives: [
        "Recognise the application verbs that mark Practitioner depth",
        "Work a matching set methodically rather than by gut feel",
        "Defend a chosen answer in one sentence using scenario facts",
      ],
      sections: [
        {
          id: "pm1-s2-1",
          paragraphs: [
            "Compare two questions about the same fact — Northgate Coffee's request for an extra 1,600 loaves a week.",
            "Foundation asks: *'Which theme records a formal proposal for a potential modification to a product?'* A knowledge check. Practitioner asks: *'Northgate's request would add a chiller bay inside the remaining stage tolerance. What should Sam do first?'* Now you must weigh options, own the sequence, and justify against the documents.",
            "The verbs shift too: instead of *define, list, describe*, the paper leans on **recommend, prioritise, decide, justify, determine**.",
          ],
        },
        {
          id: "pm1-s2-2",
          heading: "'Most appropriate' is a real standard",
          paragraphs: [
            "Practitioner options are rarely absurd. Three of four will be *things a competent manager might do*. The question is which one the method, this scenario and this moment make correct.",
            "The discriminator is usually one of three: **authority** (is this even your decision?), **sequence** (does something have to happen first?), or **evidence** (does the tolerance or baseline arithmetic already answer it?).",
          ],
          callout: {
            tone: "tip",
            title: "The one-sentence test",
            body: "If you can't say 'this is correct because the scenario says X and the method requires Y', you've picked by feel. Flag it, answer by elimination, and move on — review is for marked, not mazed.",
          },
        },
        {
          id: "pm1-s2-3",
          heading: "Matching sets without the panic",
          paragraphs: [
            "A matching set gives you a lead-in, three stems and a shared option list of five or six. One mark per correct stem; options don't reuse.",
            "The method: read all stems first, place the **certainty** (the pairing you'd bet money on), then re-read the leftovers — the correct homes for your second choices get easier once the obvious pairs are out. If a set covers exception reports, change budgets and quality registers, decide the category of each stem before choosing the member.",
          ],
          bullets: [
            "Don't start writing answers on stem one — **read the whole set** first",
            "Place certainties, then eliminate from what remains",
            "Track which options you've used; unused options are clues",
            "Never leave a stem blank: each correct stem marks independently",
          ],
        },
        {
          id: "pm1-s2-4",
          heading: "Study for judgement from day one",
          paragraphs: [
            "Reading about the themes won't train this muscle. Every session in this course ends with questions in the paper's register — a situation, a decision, a reason. Practise out loud: name the fact in the scenario, name the method rule, name the decision-maker.",
            "That's the entire skill, and it compounds quickly.",
          ],
        },
      ],
      keyPoints: [
        "Practitioner questions test recommend, prioritise and justify — not define and list.",
        "'Most appropriate' is decided by authority, sequence or the scenario's arithmetic.",
        "In matching sets, place certainties first and eliminate; every stem marks alone.",
        "Defend answers in one sentence: scenario fact + method rule + decision owner.",
      ],
      knowledgeCheck: {
        id: "pm1-s2-kc",
        question:
          "Two options in a question both look defensible. What discriminator does the paper most often rely on?",
        options: [
          "The longer option is usually correct",
          "Who has the authority to act, given the scenario's roles",
          "Whichever option repeats words from the manual",
          "The option that mentions the board",
        ],
        correctOption: 1,
        explanation:
          "Right action, wrong owner is the classic trap. The Additional Information document exists precisely so that 'who decides' can settle questions like this one.",
      },
      assessment: [
        {
          id: "pm1-s2-a1",
          type: "single",
          prompt:
            "A stage is forecast to breach its time tolerance. 'Escalate to the board' and 'produce an exception plan' are both options. What decides which comes first?",
          options: [
            { id: "a", label: "The board decides whether an exception plan is needed, so escalation comes first" },
            { id: "b", label: "Whichever the project manager prefers that week" },
            { id: "c", label: "The exception plan is always produced before anyone is told" },
            { id: "d", label: "The senior user arbitrates between the two" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Planning an exception response is a board-level commission — an unrequested exception plan burns time the project may not need. Sequence questions like this are resolved by authority.",
          topic: "Processes",
        },
        {
          id: "pm1-s2-a2",
          type: "multiple",
          prompt: "Which three approaches genuinely suit a matching set?",
          options: [
            { id: "a", label: "Read all stems before committing any pairing" },
            { id: "b", label: "Place your certain matches first, then eliminate" },
            { id: "c", label: "Pair stem one with option A to save time" },
            { id: "d", label: "Attempt every stem, since each marks separately" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "Set-level reading, certainty-first placement and full attempts exploit how the set is marked. Working stem one outward locks you in before the whole picture is known.",
          topic: "Exam technique",
        },
      ],
    },
  ],
};
