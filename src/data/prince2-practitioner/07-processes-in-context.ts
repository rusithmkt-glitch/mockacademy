import type { CourseModule } from "../types";

export const processesInContextModule: CourseModule = {
  id: "pp-m7",
  slug: "processes-in-context",
  order: 7,
  title: "The seven processes, end to end",
  shortTitle: "Processes",
  tagline: "The lifecycle as a sequence of decisions with named owners and dated records.",
  description:
    "Twenty-five marks on the paper come from the processes — and none of them ask you to name one. They ask what happens next, by whom, with which record, when a real situation lands on a real stage. Three walks through the Wholesale Kitchen's lifecycle at that depth.",
  scene: "delivery",
  sessions: [
    {
      id: "processes-in-context/startup-and-initiation-under-pressure",
      slug: "startup-and-initiation",
      title: "Startup and initiation under real conditions",
      summary:
        "Starting Up as the appointment-and-decision process, Initiating as the one that commits the business — and the records that must exist before anyone starts building.",
      durationMinutes: 15,
      objectives: [
        "Order the startup artefacts and the two gates they feed",
        "State who may appoint whom, and when the delegation begins",
        "Name the initiation outputs that the first stage runs on",
      ],
      sections: [
        {
          id: "pm7-s1-1",
          paragraphs: [
            "The Wholesale Kitchen did not begin when the first quote arrived. It began when someone with money answered three questions: **should we do this, should we do it this way, and is it sensible to do it at all?** Starting Up a Project exists to make those questions answerable — a lightweight brief, an outline of products, a realistic first look at the business case — and then to get a **decision**, not momentum.",
            "Note the sequence the paper loves: the executive (Tom) is identified before anything else is commissioned; the project brief and the appointment of the project manager (Sam) come in the startup's second movement; initiation only runs once the board decides it's worth funding. A candidate answer that has Sam writing a full plan *during* startup has the order backwards — initiation is a process with its own decision gate at the end.",
          ],
        },
        {
          id: "pm7-s1-2",
          heading: "What must exist before work starts",
          paragraphs: [
            "Startup keeps its records deliberately thin: project brief, business case outline, daily log, the session's lessons from the York shop, and the stage plan for initiation itself. The temptation to answer 'what should exist at this point?' with the *initiation* artefacts — full risk and issue registers, quality register, complete plan — is the topic's most reliable mark-loser. Registers get *created* during initiation; only the daily log and the brief's spine exist at startup.",
            "By the end of Initiating, the board receives the initiation pack: the project plan, the refined business case, the registers, the quality approach with the 800g±40g, 98% criteria translated into performance, the communication approach, and the risk position with the £18,000 contingency sized against it. The **initiation decision** is a go/no-go on that whole spine — and the delegation to Sam's first stage starts from that minute.",
          ],
          callout: {
            tone: "exam",
            title: "Two decisions, two gates",
            body: "Startup ends with 'is this worth a proper look?' Initiation ends with 'is this worth commissioning stage one?' Questions about what happens 'next' turn entirely on which gate the evidence sits before. Merge the gates in your head and the wrong answer always looks reasonable.",
          },
        },
        {
          id: "pm7-s1-3",
          heading: "Delegation is created, not assumed",
          paragraphs: [
            "Sam has no authority at project start — the brief's author and the board's commissioning decision *create* it, with ±figures attached. It's a useful drill to read any scenario fact and ask 'before or after the initiation decision?' The gas boiler uncertainty was risk-registered during initiation; the chiller bay's product description existed only after the products were analysed.",
            "The processes ask the same question in different clothes: **which activity produces this record, and which decision unlocks the next activity?** Learn the lifecycle as a chain of unlocks and twenty-five marks stop being trivia.",
          ],
        },
      ],
      keyPoints: [
        "Startup answers 'worth a look'; initiation answers 'worth commissioning' — two gates, two decisions.",
        "Registers are initiation outputs; startup deliberately travels light.",
        "The project manager's authority and tolerances are created at commissioning, never assumed.",
        "Read every fact as before-or-after a gate; the sequence carries the marks.",
      ],
      knowledgeCheck: {
        id: "pm7-s1-kc",
        question: "The board is about to decide on commissioning the first stage. Which set must be complete and on the table?",
        options: [
          "Project brief and business case outline only",
          "Project plan, refined case, registers, quality and communication approaches",
          "Work packages issued to Dev with checkpoint dates",
          "The end-stage-two report and the re-forecast case",
        ],
        correctOption: 1,
        explanation:
          "That is the initiation pack at its decision gate. The brief and outline belong one gate earlier; work packages belong after the first stage runs; the stage-two status belongs several gates later — the paper loves answers pulled from the wrong moment.",
      },
      assessment: [
        {
          id: "pm7-s1-a1",
          type: "single",
          prompt: "During startup, Fern insists the bay is procured 'this week, to keep momentum'. Against the process logic, this fails because:",
          options: [
            { id: "a", label: "Procurement is always Dev's job" },
            { id: "b", label: "Startup deliberately avoids committing resources before the two decisions exist" },
            { id: "c", label: "The chiller bay isn't a recognised product type" },
            { id: "d", label: "Momentum is not a word the method permits" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Startup's whole economy is 'decide before you spend'. A committed purchase before the commissioning gate pre-empts the initiation pack, the case and the decision itself.",
          topic: "Processes",
        },
        {
          id: "pm7-s1-a2",
          type: "boolean",
          prompt: "The executive's appointment of the project manager happens inside Starting Up a Project.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "Named project management is one of startup's purposes: the brief's author is appointed by the executive during the process, ahead of initiation proper.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "processes-in-context/control-delivery-and-boundaries",
      slug: "control-delivery-boundaries",
      title: "Control, delivery and boundaries",
      summary:
        "Controlling a Stage versus Managing Product Delivery in practice, and what actually happens — in order — at the end of stage two.",
      durationMinutes: 15,
      objectives: [
        "Keep work-package delegation and stage control in their correct lanes",
        "Describe the boundary's sequence and its two plans",
        "Use the scenario's end-of-stage-two facts as a walk-through",
      ],
      sections: [
        {
          id: "pm7-s2-1",
          paragraphs: [
            "Three processes share the middle of the project and candidates share their confusion. **Controlling a Stage** is Sam's process: issue a work package, monitor it against its agreed contents, take checkpoints, handle what comes back. **Managing Product Delivery** is Dev's side of the handshake — accept the package, execute it, deliver the products, report. The seam is the package itself: Sam owns *when and to whom work is delegated and how returns are judged*; Dev owns *doing the work inside the package's tolerance*.",
            "The chiller calibration slip entered the project through a checkpoint Dev's crew reported — the two processes talking to each other exactly as designed. A candidate who says 'the project manager identified the fault' has the seam wrong; one who says 'the board should schedule calibration' has the level wrong.",
          ],
        },
        {
          id: "pm7-s2-2",
          heading: "The boundary, in order",
          paragraphs: [
            "End of stage two, walked properly: Sam assembles the **end-stage report** — where the stage lands against ±£4,000 and ±1 week, with the boiler draw and the calibration consequence measured, the Northgate request's priced impact if it lands here, and the products accepted against the 98% criterion. Alongside it comes the **next stage plan**, built with the same tolerance logic and reusing what stage two taught the estimates.",
            "The board then does its one genuinely singular act: approve, reject, or send the boundary back — with the re-tested business case, the updated risk position and the next delegation all on the same paper. The **next stage's commission** starts the moment the approval is dated. 'We continued into stage three while the board considered' is not patience; it's an unauthorised stage, and the paper knows it.",
          ],
          callout: {
            tone: "tip",
            title: "Two plans, one meeting",
            body: "The boundary is the only point that carries both a closing statement and an opening commission. Questions split them constantly — 'which report contains the completed stage's forecast?' is not the same answer as 'who signs off the next stage's plan', even though the papers land together.",
          },
        },
        {
          id: "pm7-s2-3",
          heading: "What exception does to the sequence",
          paragraphs: [
            "If the stage forecast pierces tolerance, the boundary machinery is replaced by the exception route — report, board decision, commissioned exception plan — and the *next* stage may be re-cut around the recovery. The scenario's near-miss is the lesson: £5,000 against an £18,000 pot stays inside the normal rhythm; the same fact against an exhausted pot leaves the rhythm entirely.",
          ],
          bullets: [
            "Normal boundary: end-stage report → next stage plan → board decision → commission",
            "Exception path: report → board decision on approach → commissioned exception plan → re-cut or revised tolerance",
            "Never: continuing on trust while either paper is unsigned",
          ],
        },
      ],
      keyPoints: [
        "Stage control and product delivery meet at the work package; each owns its side of it.",
        "Checkpoints are how delivery reality enters the project's information bloodstream.",
        "A boundary is two acts — closing statement and opening commission — with one signature.",
        "Exception replaces the boundary rhythm; tolerance arithmetic decides which world you're in.",
      ],
      knowledgeCheck: {
        id: "pm7-s2-kc",
        question: "Dev's crew reports at a checkpoint that calibration recovery needs an extra week. Whose immediate process move is this?",
        options: [
          "The board's: change the stage plan that afternoon",
          "Sam's, inside Controlling a Stage: assess against package and stage tolerance, then act or escalate",
          "Fern's, as senior user: accept or reject the delay",
          "Priya's: audit it before it compounds",
        ],
        correctOption: 1,
        explanation:
          "A return is Controlling a Stage input. The project manager weighs it against delegation and tolerance — the only door through which it may reach the board is the exception arithmetic, not anyone's preference.",
      },
      assessment: [
        {
          id: "pm7-s2-a1",
          type: "single",
          prompt: "Stage three's plan is approved on 4 March; stage two's work closed on 20 February and the team 'kept things rolling' in between. Which statement fits the method?",
          options: [
            { id: "a", label: "Fine — two weeks is immaterial at this scale" },
            { id: "b", label: "A breach: work outside a commissioned stage has no delegation, tolerance or authority behind it" },
            { id: "c", label: "Acceptable if the daily log records the rolling" },
            { id: "d", label: "The board's fault for taking two weeks" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The commission's date gap is the project's governance gap; recording it doesn't fill it. Boards take the time they take — the method's answer is that nothing runs on assumed authority.",
          topic: "Processes",
        },
        {
          id: "pm7-s2-a2",
          type: "multiple",
          prompt: "Which contents belong in the end-stage report?",
          options: [
            { id: "a", label: "The stage's performance against its time and cost tolerances" },
            { id: "b", label: "Products completed and accepted, with quality evidence" },
            { id: "c", label: "The next stage's full resource plan line by line" },
            { id: "d", label: "Open risks, issues and any change decisions priced during the stage" },
          ],
          correctOptionIds: ["a", "b", "d"],
          explanation:
            "Closing looks backward with evidence: tolerance position, accepted products, live registers. The opening document — the next stage's plan — travels alongside as its own paper; blending them is the exam's 'which process output is this?' test.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "processes-in-context/directing-and-closing-eyes-open",
      slug: "directing-and-closing",
      title: "Directing and closing with your eyes open",
      summary:
        "The board's standing decisions through the lifecycle, controlled versus premature closure, and what stays true after the last meeting.",
      durationMinutes: 13,
      objectives: [
        "Recognise Directing a Project's four recurring decisions",
        "Run closure properly when a project has hit trouble",
        "Separate the project's end from the benefits' beginning",
      ],
      sections: [
        {
          id: "pm7-s3-1",
          paragraphs: [
            "Directing a Project has the smallest footprint of the seven and the largest accountability: the board authorises initiation, the stage boundaries, exceptions and closure — and otherwise **does not do the project**. The recurring shape on the paper: a decision arrives at the board's door with an exception report's skeleton, the board chooses among its bounded options, the date is recorded, delegation resumes or changes.",
            "Tom's judgement calls through the Wholesale Kitchen year — proceed past the re-forecast, accept the revised stage-three tolerance after the calibration week, commission the Northgate change within budget — are all the *same process*, which is why questions on it are answered by recognising a decision type, not memorising a diagram.",
          ],
        },
        {
          id: "pm7-s3-2",
          heading: "Premature closure is still closure",
          paragraphs: [
            "If the board had stopped the project at the stage-two re-forecast, the closing process would begin **immediately, in full**: products assessed against the criteria (what of the bay actually works, what's accepted), the registers brought to rest, the financial position closed out, lessons captured *while the team is still together*, and the follow-on recommendations written — because a stopped project's most valuable output may be the analysis that tells the business what to rebuild instead.",
            "The trap answers: 'stop and redeploy first, wrap the paperwork later' (the later never comes, and the lessons leave with the people), and 'call it a failure' (the method's closure has no shame clause; the records serve the next project either way).",
          ],
          callout: {
            tone: "exam",
            title: "Closure's dual address",
            body: "Closure speaks to two audiences at once: the corporate world that wants its money and resources back with a true account, and the future projects that want the lessons. Answers that serve only one are half the marks.",
          },
        },
        {
          id: "pm7-s3-3",
          heading: "The project ends; the case doesn't",
          paragraphs: [
            "After the final report and the disband, Ruth's benefit-measurement plan continues on its own calendar: wholesale volume, chilled losses, payback actually delivered. The closing process hands that forward with open items, residual risks and the lessons log — it does not pretend benefits arrive with the last invoice.",
            "Which supplies the topic's subtlest correct answer: when a question asks what happens *after* closure, it is almost always about the **business as usual** owners, not the project's. Products survive projects; so do their problems.",
          ],
        },
      ],
      keyPoints: [
        "Directing is four standing decisions on exception-shaped paper, with dated delegation.",
        "Premature closure runs the full closing process — especially the lessons while the team exists.",
        "Closure addresses corporate and future projects simultaneously.",
        "Benefits and their risks outlive the project; the handover says who holds them now.",
      ],
      knowledgeCheck: {
        id: "pm7-s3-kc",
        question: "The board stops the project at the stage-two gate. What does the method require next?",
        options: [
          "Immediate redeployment, with a short close-out email from Sam",
          "The full closing process run now: product status, registers, financials, lessons, end project report",
          "A stage-three plan explaining why the case failed",
          "Priya's audit upgraded to a formal closure review",
        ],
        correctOption: 1,
        explanation:
          "Stopped projects close properly, in sequence, while people and evidence are still around. An email isn't closure; a stage plan is what you produce when continuing; and audits don't inherit the project's own duties.",
      },
      assessment: [
        {
          id: "pm7-s3-a1",
          type: "single",
          prompt: "One month after closure, the chill-chain loss rate spikes. Which thread of the method's design answers where this goes?",
          options: [
            { id: "a", label: "Sam reopens the project; its records still exist" },
            { id: "b", label: "Business as usual owns live products; the closure handover named those owners and residual risks" },
            { id: "c", label: "Nothing — the project's registers are archived and closed" },
            { id: "d", label: "The board reconsiders the closure vote" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Closure disbands the project, not the products. The end report's forward hand — owners, residual risks, benefit measures — is precisely what makes a post-project problem someone's actionable item rather than an orphan.",
          topic: "Processes",
        },
        {
          id: "pm7-s3-a2",
          type: "boolean",
          prompt: "Recurring board decisions on exception reports are the main activity of Directing a Project.",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          correctOptionIds: ["true"],
          explanation:
            "The process is essentially the board's standing decision points — initiation, boundaries, exceptions, closure — exercised on the papers the other processes put in front of it.",
          topic: "Processes",
        },
      ],
    },
  ],
};
