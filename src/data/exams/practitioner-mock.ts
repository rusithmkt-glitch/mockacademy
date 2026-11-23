import { createBank } from "./build";

/**
 * Topic labels for the Practitioner paper. Each maps to the module of the
 * practitioner course that teaches it, so topic results link straight to
 * the right lesson. Mark split mirrors the real paper: principles 8,
 * themes 35, processes 25 — 68 marks across 50 one-mark items and six
 * three-mark matching sets.
 */
export const practitionerTopicModules = {
  "Principles in practice": "principles-in-context",
  "Theme: Business Case": "business-case-and-organising",
  "Theme: Organisation": "business-case-and-organising",
  "Theme: Quality": "quality-and-plans",
  "Theme: Plans": "quality-and-plans",
  "Theme: Risk": "risk-and-change",
  "Theme: Change": "risk-and-change",
  "Theme: Progress": "progress-and-escalation",
  "Process: Starting Up a Project": "processes-in-context",
  "Process: Directing a Project": "processes-in-context",
  "Process: Initiating a Project": "processes-in-context",
  "Process: Controlling a Stage": "processes-in-context",
  "Process: Delivering a Product": "processes-in-context",
  "Process: Managing a Stage Boundary": "processes-in-context",
  "Process: Closing": "processes-in-context",
} as const;

const bank = createBank("prac", practitionerTopicModules);

const { mc, two, match } = bank;

// ---------------------------------------------------------------------------
// LO1 — Principles in context (8 x 1 mark)
// ---------------------------------------------------------------------------

mc(
  "Principles in practice",
  "Ruth's re-forecast at the stage boundary shows payback slipping from fourteen months to twenty. Tom insists on proceeding because £160,000 has already been spent. Which principle is being violated?",
  "Continue, brief the board and put a reduced-scope variant to them as an option",
  [
    "Stop the project immediately; the business case is no longer valid",
    "Proceed unchanged — the principle of learn from experience says sunk costs count",
    "Hand the decision to Sam, because the project manager owns the business case",
  ],
  "Continued business justification means the case is re-tested at each stage boundary. A worse forecast is not automatic closure: the right behaviour is to brief the board and weigh options, including re-scoping. Tom's sunk-cost argument and handing ownership to the project manager both break the principle. Note the executive, not the project manager, owns the business case.",
);

mc(
  "Principles in practice",
  "Before the refit starts, Sam gathers Dev, Kit and the Headingley shift lead for an hour to review what went wrong on the York shop project, and records the agreed actions in the risk and issue registers. Which best-principle behaviour does this demonstrate?",
  "Learning from experience, because past lessons are being converted into live registers and plans before work starts",
  [
    "Managing by exception, because the board was told about the York problems",
    "Focusing on products, because the meeting reviewed the York shop itself",
    "Tailoring to the environment, because the meeting was only an hour long",
  ],
  "Learn from experience is only real when past lessons change current behaviour. Harvesting the York lessons at the start — before plans and registers are built — is the practical form of the principle. The meeting length is tailoring at most; the substance is experience applied.",
);

mc(
  "Principles in practice",
  "The Northgate account manager phones Sam directly and asks for Thursday deliveries to start a week early. What is the correct PRINCE2 response, and why?",
  "Treat it as a possible change and raise it to the change authority, because only the board's defined authorities may alter approved scope",
  [
    "Agree it — Sam holds the contingency and the change looks small",
    "Refuse it — customer requests are never in scope once a plan is approved",
    "Pass it to Tom directly, because the executive answers to customers",
  ],
  "Focus on products and defined roles intersect here: delivery dates are part of approved plans, so an external request to alter them is a change. It may be sensible, but the decision belongs to the change authority the board appointed — not the project manager alone, and never a flat refusal by default.",
);

mc(
  "Principles in practice",
  "The gas upgrade has pushed stage two £5,000 over its allowance. The forecast still lands inside the ±£8,000 project tolerance. Sam pays from contingency with the executive's agreement and keeps the board's weekly email unchanged. What is the fair assessment of this?",
  "Broadly sound — the tolerance and escalation approach was followed, though the board should still see the contingency draw in the next report",
  [
    "A breach of manage by exception: the board should have been called to an emergency meeting",
  "Wrong: contingency may only be released by the project board as a whole",
    "A breach of focus on products: cost overruns always require re-planning",
  ],
  "Manage by exception draws a line: within tolerance, the project manager proceeds and reports; forecast breaches trigger escalation. Paying a forecast that stays inside the project tolerance from contingency, with executive agreement, is exactly the designed behaviour. Good practice is that the draw still appears in the next highlight report — no emergency meeting needed.",
);

mc(
  "Principles in practice",
  "Fern refuses to accept the trial-baked morning goods because the crumb differs from the Headingley recipe card, even though the blast chiller now holds temperature. Which principle gives her that standing, and through which document?",
  "Focus on products — acceptance criteria are fixed in the project product description, and the senior user defines quality",
  [
    "Continued business justification — because the refusal changes the business case",
    "Manage by exception — because any product failure is an exception report",
    "Tailor to the environment — because Fern founded the bakery",
  ],
  "PRINCE2 specifies acceptance up front, per product, and hands the definition of quality to the senior user side. The project product description is the vehicle. A single failing batch is a quality issue, not automatically a project exception; and standing behind agreed acceptance criteria is not tailoring or justification in disguise.",
);

mc(
  "Principles in practice",
  "Sam proposes dropping the formal highlight report and running the board entirely as pub-table conversations, arguing that is how Fern & Flour works. Which assessment is correct?",
  "Partly acceptable — communication style may be tailored, but the board must still receive planned, minuted information at defined intervals",
  [
    "Fully acceptable — tailoring to the environment overrides every reporting requirement",
    "Unacceptable — highlight reports are fixed-format documents that cannot change at all",
    "Only acceptable if Tom signs a waiver to the project plan",
  ],
  "Tailoring reaches method weight, not method existence. A lighter, conversational style of reporting can suit a two-founder business, but roles, boundaries and the information the board needs at each boundary remain. 'Tailoring overrides everything' and 'format is sacred' are the twin errors to reject.",
);

mc(
  "Principles in practice",
  "When the project board meets, Dev asks for two extra weeks of oven commissioning to protect output quality, while Fern asks for the 9 February go-live to be held. Which principle tells the board how to decide?",
  "Balance the six performance targets — time, cost, quality, scope, benefits and risk — rather than answering with a single priority",
  [
    "Manage by exception — because the two requests conflict",
    "Learn from experience — because York had the same argument",
    "Focus on products — because commissioning is a product",
  ],
  "The seventh-edition phrasing of the trade-off question: projects succeed when the pressures on the performance targets are balanced deliberately. A commissioning extension touches time and quality; the go-live date touches time, benefits and the Northgate risk. Weighing them together is the principle; the other options dodge the decision.",
);

two(
  "Principles in practice",
  "Which two statements are genuine examples of PRINCE2 principles being applied on the Wholesale Kitchen project?",
  [
    "The board re-tests the business case at every stage boundary before authorising the next",
    "Sam keeps every decision verbal so the registers stay short",
    "Acceptance criteria for the accreditation product were agreed with Priya's published standard before design",
    "Tom approves all work packages so the executive stays close to the work",
  ],
  [1, 3],
  "Re-testing justification at boundaries and fixing acceptance against an external standard are live applications of continued business justification and focus on products. Keeping decisions verbal destroys the record the method depends on, and a board member approving individual work packages inverts the delegated structure — work packages are approved at project manager level.",
);

// ---------------------------------------------------------------------------
// LO2 — Theme: Business Case (3 x 1 mark + 1 x 3-mark set)
// ---------------------------------------------------------------------------

mc(
  "Theme: Business Case",
  "The business case now carries four variants after Ruth's re-forecast, and the board has chosen the reduced-scope option. What must happen to the other three?",
  "Keep them with the business case as the decision record, showing what was weighed and rejected",
  [
    "Delete them — the register should hold only the chosen option",
    "Move them into the risk register as potential threats",
    "Send them to the project closure file for the end of project",
  ],
  "The business case is maintained, not rewritten silently. Options considered and rejected are the audit trail of the decision and inform later re-tests. They are neither risks nor closure material.",
);

mc(
  "Theme: Business Case",
  "Northgate has signed only a letter of intent. The £45,000-a-month benefit rests on that contract completing. Where does the business case need to reflect this?",
  "As an explicit assumption with the associated risk tracked, so benefit forecasts carry the uncertainty",
  [
    "Nowhere — a letter of intent is a contractual fact for planning purposes",
    "In the quality register, because the benefit is a measurable standard",
    "By lowering the benefit value until the contract is signed, hiding the upside",
  ],
  "Benefits stated in a business case stand on assumptions; unstated assumptions become unmanaged risk. Recording the dependency openly lets the board judge payback honestly. Pretending certainty or quietly deleting upside both distort the case.",
);

mc(
  "Theme: Business Case",
  "After go-live, who is accountable for realising the wholesale income benefits that arrive after the project closes?",
  "The business — Fern & Flour's owners, guided by the benefits management approach handed over at closure",
  [
    "Sam, for twelve months after the project closes",
    "Northgate, because they buy the volume",
    "The project board, which re-meets quarterly for post-project review",
  ],
  "Projects create outputs; the business owns outcomes. The benefits management approach spells out who measures, when and against what baseline after handover. Keeping the project board or its manager artificially alive inverts that split.",
);

match(
  "Theme: Business Case",
  "Match each piece of Wholesale Kitchen information to the document that properly holds it.",
  [
    "The statement that payback is fourteen months after go-live, re-checked at every stage boundary",
    "The commitment that a named operations lead will report wholesale margins from month four",
    "The reason the project exists: the Headingley ovens are full and Northgate will walk to Manchester",
  ],
  [
    "The business case",
    "The benefits management approach",
    "The project brief",
    "The project plan",
    "The risk register",
    "The quality register",
  ],
  [0, 1, 2],
  "The business case carries the reasons and the measurable desirability, including payback. The benefits management approach names the post-project owners and measurement timings. The brief captures the business need and reviewable justification early, before full detailing — which is what the Headingley-capacity story is.",
);

// ---------------------------------------------------------------------------
// LO2 — Theme: Organisation (3 x 1 mark)
// ---------------------------------------------------------------------------

mc(
  "Theme: Organisation",
  "Nadia keeps proposing her depot-and-driver contract at handover meetings, and it is starting to distract the team. What should Sam do with her interest?",
  "Review the stakeholder engagement approach and work to move her from current level to a supported, informed position on her interest",
  [
    "Ban her from handover meetings to protect the team's focus",
    "Accept the proposal as a project change to keep her quiet",
    "Ask Tom to answer her directly, as she is an external supplier",
  ],
  "Stakeholder management is about desired levels of engagement, not suppression. Nadia is a supplier with a commercial interest — the engagement approach exists precisely to place people like her. Silencing, buying off, or ducking the relationship all lose value or create risk.",
);

mc(
  "Theme: Organisation",
  "Airedale Services holds the gas commissioning certificates and works under Dev's firm. Whose responsibility is it to ensure Airedale's handover documents reach the project on time?",
  "Dev, as the team manager accountable for the work package — subcontractor management sits inside supplier arrangements",
  [
    "Priya, because the auditor needs the certificates",
    "Sam, because the project manager chases everything",
    "Airedale's own contracts manager, with no project interface",
  ],
  "Work packages are agreed with team managers, and supplier-side management of their own subcontractors is their job — within the package's requirements. Sam's route is through Dev, not by skipping the line to Airedale, and the auditor receives what she needs when it is produced, but does not own its creation.",
);

mc(
  "Theme: Organisation",
  "The project board is Tom (executive), Fern (senior user) and Dev (senior supplier). Ruth attends occasionally. Which gap should be challenged at the next boundary?",
  "No defined day-to-day benefits owner while benefits re-forecasting is informally Ruth's — a role that should be explicit",
  [
    "Tom holding both executive and change authority roles, which PRINCE2 forbids",
    "Fern being both founder and senior user, which breaks supplier independence",
    "Ruth attending at all — external accountants may not sit in board meetings",
  ],
  "The four board duties can be combined in fewer people where it still works (executive and change authority may sit together in small projects). What must not be left vague is who owns benefits day to day. Fern's dual standing is fine; Ruth's attendance is fine — the missing explicit assignment is the real gap.",
);

// ---------------------------------------------------------------------------
// LO2 — Theme: Quality (3 x 1 mark + 1 x 3-mark set)
// ---------------------------------------------------------------------------

mc(
  "Theme: Quality",
  "Accreditation is described as 'must-meet'. The audit is 22 January and the trial-bake non-conversions are still open. What does a must-meet standard mean when it threatens to fail?",
  "The project cannot deliver a signable outcome while it is unmet — the board must weigh re-planning or early closure, not a relaxation of the standard",
  [
    "It can be traded away against time or cost if the board agrees",
    "It applies to the retail shop only, so wholesale can launch without it",
    "It becomes aspirational once the audit date is fixed",
  ],
  "Must-meet quality criteria are legal or contractual constraints: not tradeable by the project. Aspirational criteria can be balanced against the other targets; must-meet ones shape the plan instead of being shaped by it. Trading accreditation would end the project's purpose.",
);

mc(
  "Theme: Quality",
  "The failed morning-goods batch is logged, the chiller's engineer is due Thursday, and Fern wants re-bakes before sign-off. Which quality management step does the re-bake represent?",
  "Quality control — inspecting and correcting the actual product against its acceptance criteria",
  [
    "Quality planning — because the criteria were agreed in advance",
    "Quality assurance — because an engineer from outside the team checks the chiller",
    "Quality improvement — because it is logged in the quality register",
  ],
  "Control checks products (weighing, tasting, re-baking); assurance checks that the right processes are being followed (the engineer fixing the chiller's method leans toward assurance, but the re-bake Fern demands is a product check); planning sets criteria up front; logging happens in all of them.",
);

mc(
  "Theme: Quality",
  "Kit wants the order portal's acceptance criteria signed before each two-week cycle. The Headingley trial run of the app, however, keeps producing new 'nice to have' requests from the shop staff. What is the right response?",
  "Log them as change requests against a frozen product description — quality criteria are defined, then controlled",
  [
    "Add them — user requests are free to include inside the timeboxed cycle",
    "Refuse all of them permanently — the portal description can never change",
    "Let the shop staff raise them directly to Northgate's portal users",
  ],
  "Description-based quality means the standard is agreed before building, and post-agreement requests become changes handled through the change authority. Neither an open door for every wish nor a stone tablet serves the principle; controlled acceptance does.",
);

match(
  "Theme: Quality",
  "Match each Wholesale Kitchen quality activity to its quality management technique.",
  [
    "Weighing ten loaves from each trial batch against the 800g ±40g acceptance criteria",
    "Checking that the project actually follows the cleaning-schedule process Priya's standard requires, before the audit",
    "Writing the 98% on-time target and how it will be measured into the portal product description before Kit builds",
  ],
  [
    "Quality control (verifying products)",
    "Quality assurance (checking processes)",
    "Quality planning (defining standards first)",
    "Change control",
    "Risk assessment",
    "Progress control",
  ],
  [0, 1, 2],
  "Control inspects the product, assurance audits that agreed processes are being used, and planning fixes criteria and measurement before delivery. Each stem is a textbook instance of one — the remaining options describe neighbouring disciplines the real exam distracts with.",
);

// ---------------------------------------------------------------------------
// LO2 — Theme: Plans (3 x 1 mark)
// ---------------------------------------------------------------------------

mc(
  "Theme: Plans",
  "The order portal is delivered by Kit in two-week cycles with daily stand-ups, while the refit follows a single sequenced plan. What does this say about how the project is planned?",
  "Correct tailoring — each product is planned in the way that suits its delivery method, inside the same project plan",
  [
    "A weakness — one project must run one consistent planning technique",
    "A breach of planning — iterative delivery belongs in a separate project",
    "Acceptable only if the cycles fit exactly into one-week stage boundaries",
  ],
  "PRINCE2 plans by product and tailors technique to the work: sequential for construction, cyclic for software, both slotted under management stages. Consistency of method matters at the level of control (stages, tolerances, reporting), not at the level of scheduling style.",
);

mc(
  "Theme: Plans",
  "Sam builds the stage two plan now, and will shape stage three in detail only after the boundary review. Which planning principle is at work?",
  "Rolling-wave planning with progressive elaboration — plan one stage ahead in detail, hold the rest at outline",
  [
    "Fixed-scope planning — the 36-week plan was signed at initiation and cannot move",
    "Critical chain scheduling — the stages are buffered by the audit date",
    "Management stage compression — the rest of the plan is not really needed",
  ],
  "Detail comes when uncertainty has burned off: stages are planned to the next decision point. The whole 36 weeks was never fully detailed at initiation — that would be an illusion of precision, not a PRINCE2 plan.",
);

mc(
  "Theme: Plans",
  "The accreditation product cannot start until the chiller is fixed, the cleaning schedules are written and trial bakes pass. Priya's audit date is immovable. How should the plans treat the audit slot?",
  "As a hard external constraint the schedule must plan against — a mandatory dependency on an immovable event",
  [
    "As an activity that can be crashed by paying Priya's body overtime",
    "As a milestone that may float if the stage tolerance allows",
    "As a risk to be transferred to Northgate's contract timeline",
  ],
  "External fixed dates constrain the plan rather than being planned around. Treating an unmovable audit as crashable, floatable or transferable misstates the real schedule pressure — the correct move is to design the project around the constraint.",
);

// ---------------------------------------------------------------------------
// LO2 — Theme: Risk (3 x 1 mark + 1 x 3-mark set)
// ---------------------------------------------------------------------------

mc(
  "Theme: Risk",
  "The chiller's calibration drifting has already spoiled one batch. In PRINCE2 terms, what is it now, and what replaced it?",
  "An issue — it was a risk while it was uncertain; now that it has occurred, it is tracked as an issue with a fix",
  [
    "Still a risk, because it may happen again",
    "A change request, because the chiller needs adjusting",
    "A project exception, because a product failed",
  ],
  "Risks are future-uncertain; issues are present reality. The same event crosses categories as it matures, and re-labelling matters because the responses differ: risk response planning versus issue resolution. A failed batch is neither (yet) a scope change nor a tolerance breach.",
);

mc(
  "Theme: Risk",
  "Airedale Services is two weeks late supplying commissioning certificates, threatening the audit. The risk register shows this threat was identified at initiation with a response, but nobody was named to act on it. What is the register defect?",
  "No risk owner — a risk response without an accountable person is a plan nobody executes",
  [
    "Nothing is defective; suppliers answer for their own risks",
    "The risk should have been deleted once the refit finished",
    "The risk was misclassified as an issue from the start",
  ],
  "Every risk needs an owner for its response, just as every response type is a strategy, not an action. Supplier exposure does not remove the need for a named owner; and the register is maintained, not tidied into silence.",
);

mc(
  "Theme: Risk",
  "Fern & Flour decides to hire the two refrigerated vans instead of buying them, so that a breakdown in a launch week can be swapped within hours. In risk-response terms, this is what?",
  "Reducing the impact of a threat by designing the product differently",
  [
    "Transferring the threat to a third party entirely",
    "Avoiding the threat by removing delivery from scope",
    "Accepting the threat with no action",
  ],
  "Careful distinction: hiring changes exposure by reducing impact (fast swap, capital freed). Transfer would be paying an insurer or carrier to take the consequence. The threat is not avoided — vans remain in scope — and it is certainly not passive acceptance.",
);

match(
  "Theme: Risk",
  "Match each Wholesale Kitchen response to its risk-response category.",
  [
    "Insuring the blast chiller so a catastrophic repair is paid by the insurer",
    "Adding six clear weeks of dual-running before Northgate's contract start",
    "Dropping the Kirkstall retail counter from the plan so the audit can never be jeopardised by late fit-out",
  ],
  [
    "Transfer the threat",
    "Reduce the threat (time buffer)",
    "Avoid the threat (remove the exposure)",
    "Share the opportunity",
    "Escalate the threat",
    "Accept the threat",
  ],
  [0, 1, 2],
  "Insurance shifts the consequence, not the event — transfer. The dual-running buffer shrinks the likelihood the timing threat bites — reduce. Deleting the retail counter removes the exposure itself — avoid. Escalation (outside project tolerance) and passive acceptance are the other threat strategies the exam contrasts.",
);

// ---------------------------------------------------------------------------
// LO2 — Theme: Change (2 x 1 mark + 1 x 3-mark set)
// ---------------------------------------------------------------------------

mc(
  "Theme: Change",
  "Northgate now wants 1,600 loaves a week instead of 1,200. Sam has logged the change request. What is the immediate next step in the change technique?",
  "Produce an impact assessment (a change report) covering cost, time, scope, quality, benefits and risk for the change authority to decide",
  [
    "Start chiller upgrades immediately to show good customer service",
    "Reject it — requirements are baselined at initiation",
    "Split the difference and deliver 1,400 without telling anyone",
  ],
  "The change technique is log, assess, decide, act. Assessment comes before any action; a baseline is firm precisely so that changes are visible and decided, not silently half-implemented.",
);

mc(
  "Theme: Change",
  "The blast chiller's engineer will cost £2,200 to attend. Tom's change budget stands at £6,000. Who approves the spend and where is it recorded?",
  "The change authority (defined by the board) approves; consumption is recorded against the change budget for board visibility",
  [
    "Sam approves it as a risk response using contingency, not the change budget",
    "Fern approves it alone — senior user decides all quality fixes",
    "Nobody approves it — warranty repairs fall outside governance",
  ],
  "Money to pay for approved changes is the change budget, controlled by the board's appointed authority (often the executive), and its drawdown is reported. Confusing contingency (for risks) with the change budget (for approved changes) is the classic practitioner trap.",
);

match(
  "Theme: Change",
  "Match each situation to the classification the registers should use.",
  [
    "The morning-goods batch has failed; the engineer is booked",
    "Nadia's depot contract would double delivery capability if Fern & Flour grows further",
    "Priya's audit on 22 January cannot move and the trial bakes are still failing",
  ],
  [
    "Issue — a present, known problem to resolve",
    "Opportunity — an upside that may be realised",
    "Threat — a future uncertain loss",
    "Change request — a proposed modification",
    "Exception — a forecast tolerance breach",
    "Non-conversion — a failed quality check",
  ],
  [0, 1, 2],
  "A realised problem is an issue; a favourable uncertainty is an opportunity; an unfavourable one not yet happened is a threat. The chiller failure could also be a non-conversion, but the register classification asked here is the change technique's categories; and the depot offer is not a change request because nothing has been proposed against the baseline yet.",
);

// ---------------------------------------------------------------------------
// LO2 — Theme: Progress (3 x 1 mark + 1 x 3-mark set)
// ---------------------------------------------------------------------------

mc(
  "Theme: Progress",
  "The refit finished two days late against a stage tolerance of ±1 week. No exception report was raised; the weekly email carried the status. Was this correct?",
  "Yes — progress within tolerance is reported, not escalated; exception reports are for forecast or actual breaches",
  [
    "No — any slippage, however small, requires an exception report to the board",
    "No — the project tolerance of ±2 weeks was breached at stage level",
    "Yes, but only because Dev approved the two-day slip in writing",
  ],
  "Manage by exception defines the reporting/escalation boundary. Two days is inside the agreed stage tolerance, so the mechanism worked as designed. Escalating every wobble would destroy the delegation on which the principle rests.",
);

two(
  "Theme: Progress",
  "Which two sources should Sam use at the Monday checkpoint to assess actual progress against the stage plan?",
  [
    "The work package status from each team manager, including deliverable completion and tolerances consumed",
    "Northgate's letter of intent",
    "The stage plan's baseline for time, cost and product completion",
    "Priya's personal opinion of the cleaning schedules",
  ],
  [1, 3],
  "Progress control compares work package and plan reality: agreed package status feeds the comparison, the stage plan provides the baseline. The letter of intent belongs to the business case, and the auditor's opinion is stakeholder information, not a progress measurement.",
);

mc(
  "Theme: Progress",
  "By January it is clear the accreditation work will take three more weeks than planned, breaching the ±2 week project tolerance as well as the stage tolerance. What must happen under the escalation route?",
  "An exception report goes to the board, which may choose to commission an exception plan or direct a response",
  [
    "Sam quietly re-baselines the stage plan and carries on within the new dates",
    "Only the weekly email is updated — the board will see it at the next scheduled boundary",
    "The project stops automatically, because project tolerances are absolute",
  ],
  "Forecast breaches at or beyond the project tolerance must be escalated: the board decides, sometimes by asking for an exception plan. Silent re-baselining defeats the entire control model; the next-scheduled-boundary excuse is exactly what exception reporting exists to prevent.",
);

match(
  "Theme: Progress",
  "Match each progress situation to the mechanism the theme prescribes.",
  [
    "The trial bakes are now forecast to overrun the ±2 week project tolerance, so Sam sends the board a focused report between meetings",
    "The board replies to that report asking for a revised plan for the remainder of the stage before it will decide",
    "Every Monday the team compares actual time, cost and product completion against the stage plan so performance is visible at the boundary",
  ],
  [
    "Exception report",
    "Exception plan",
    "Highlight report",
    "Work package",
    "End stage report",
    "Risk assessment",
  ],
  [0, 1, 2],
  "A forecast breach triggers the exception report; if the board wants options before deciding, it commissions an exception plan; the routine comparison of actual against baseline is the highlight report's job, fed by checkpoints. Work packages authorise specialist work, and the end stage report belongs at the boundary itself.",
);

// ---------------------------------------------------------------------------
// LO3 — Process: Starting Up a Project (3 x 1 mark)
// ---------------------------------------------------------------------------

two(
  "Process: Starting Up a Project",
  "Which two outcomes must Starting Up produce before the board can decide whether to fund initiation?",
  [
    "A project brief carrying an outline business case and the key prerequisites",
    "A full risk register with responses for every threat",
    "An appointment of the executive and a named project manager",
    "A stage plan for the whole project down to activity level",
  ],
  [1, 3],
  "SU assesses whether it is worth doing the project at all: a brief (whose outline business case tests feasibility) and appointed leadership are its core outputs. The full registers and detailed plans belong to Initiating; a project-wide activity plan would be a fiction this early.",
);

mc(
  "Process: Starting Up a Project",
  "During Starting Up, the available information from the York shop project shows fit-out delays are usually subcontractor-driven. Where is that used at this point?",
  "As an input to the outline business case and key risks/prerequisites in the brief, shaping how initiation will be approached",
  [
    "As the final risk register, closed before initiation begins",
    "Nowhere — lessons only apply to the next project, not this one",
    "As the detailed stage plans for Mistry Build",
  ],
  "SU harvests past experience as an input — the registers then get built during initiation. It is neither the finished article nor irrelevant; it steers how initiation is scoped.",
);

mc(
  "Process: Starting Up a Project",
  "SU includes an 'engagement with those who will build and use' step. On the Wholesale Kitchen, who best represents that at the pre-initiation workshop?",
  "Fern, Dev and Kit together, as future senior user and senior suppliers",
  [
    "Tom alone, because the executive holds all money decisions",
    "Northgate's account manager, because the customer is always the buyer",
    "Priya, because the auditor defines quality",
  ],
  "SU deliberately tests feasibility with the people who will actually do the work — the future user and supplier sides. The executive authorises, the customer benefits, and the auditor assures, but none of them substitute for the builder/user group the step calls for.",
);

// ---------------------------------------------------------------------------
// LO3 — Process: Directing a Project (3 x 1 mark)
// ---------------------------------------------------------------------------

mc(
  "Process: Directing a Project",
  "At the initiation-to-execution gate, Tom wants to authorise the project but only fund the next stage. Is that a legitimate board decision under Directing?",
  "Yes — the board authorises initiation, then one stage at a time; conditional or staged authorisation is the normal rhythm",
  [
    "No — authorising the project means funding every stage in it",
    "No — only a full steering committee may release stage money",
    "Yes, but only if the exception report justifies it",
  ],
  "DP's decision points are: authorise initiation, authorise the project (first stage), continue/stop at each boundary, respond to exceptions. Staged funding at boundaries is the designed control, not an irregularity.",
);

mc(
  "Process: Directing a Project",
  "The board has just been handed an exception report. Which is NOT a legitimate board response at that moment?",
  "Re-write the project plan itself and hand the new baseline back to Sam",
  [
    "Give a decision and let Sam absorb the change within tolerance",
    "Request an exception plan from Sam for the board to approve",
    "Stop the project and plan a controlled closure or early finish",
  ],
  "The board decides; the manager plans. Directing offers give direction, ask for an exception plan, or escalate/stop. Boards drafting plans would invert the delegation between DP and CS.",
);

mc(
  "Process: Directing a Project",
  "Between stage boundaries, Fern emails the board at midnight demanding a decision on a re-bake standard. The board has a standing 'ad hoc' duty. What does DP say about it?",
  "The board must be available to make ad hoc decisions that cannot wait — but it should not be doing the project manager's day-to-day approvals",
  [
    "Ad hoc decisions are forbidden; everything must wait for the boundary",
    "The executive alone decides anything emailed outside office hours",
    "Sam may decide anything the board does not answer within a day",
  ],
  "DP names four board duties plus ad hoc decision-making for questions above delegated authority. That is not a licence for the board to micro-manage work packages, nor a rule that urgent matters wait; delegation lines simply stay intact either way.",
);

// ---------------------------------------------------------------------------
// LO3 — Process: Initiating a Project (3 x 1 mark)
// ---------------------------------------------------------------------------

two(
  "Process: Initiating a Project",
  "Which two are genuine outputs of Initiating that the board receives to authorise the project?",
  [
    "The project plan covering at least the next stage in detail",
    "The signed contracts with Northgate and the van lessors",
    "The refined business case, tested against what initiation discovered",
    "The completed product delivery of the order portal",
  ],
  [1, 3],
  "Initiation produces the planning and justification package — plan, business case, definitions, approaches and the register baselines. Contracts with customers or suppliers are specialist work products, not IP outputs, and the portal is executed in a delivery stage, long after initiation closes.",
);

mc(
  "Process: Initiating a Project",
  "During initiation it emerges the blast chiller's capacity may not meet 1,600 loaves a week. IP's principle of 'planning with progressive detail' means the right response is to:",
  "Re-visit the approach and the outline designs at initiation, before the baseline is put to the board",
  [
    "Press on — details get fixed during the delivery stages anyway",
    "Escalate immediately as an exception report to the board",
    "Cut Northgate's volumes from scope to guarantee the plan holds",
  ],
  "Initiation exists to turn assumptions into a defensible plan. Findings like this change the approach at the point of lowest cost. Once authorised, changes become change requests; treating an initiation discovery as a later-stage fix wastes IP's purpose.",
);

mc(
  "Process: Initiating a Project",
  "Sam wants to compress initiation to one week to hit the February go-live. The board's correct treatment of this is:",
  "Test it — initiation must produce the full set of documents at the right weight, but how long it takes is a tailoring decision with the executive's sign-off",
  [
    "Refuse outright — initiation is always a fixed six weeks",
    "Allow it — speed is a performance target above all",
    "Delegate it — compression is entirely the project manager's call",
  ],
  "No PRINCE2 stage has a fixed calendar length; what is non-negotiable is that its products exist and stand up. The board (executive) authorising the project must be satisfied initiation did its job — which makes compression a board-level tailoring decision, not a whim or a technicality.",
);

// ---------------------------------------------------------------------------
// LO3 — Process: Controlling a Stage (3 x 1 mark)
// ---------------------------------------------------------------------------

mc(
  "Process: Controlling a Stage",
  "Sam issues the chiller-fix work to Dev inside a work package covering commissioning. Which CS activity is the ongoing control mechanism once the package is agreed?",
  "Analysing status and taking significant action — reviewing package progress against its tolerances and escalating or adjusting within authority",
  [
    "Authorising a stage — the board re-checks each package",
    "Enabling a specialist — Sam sits in on the repair",
    "Closing the project — every fix is a closure item",
  ],
  "Within a stage, CS's loop is: authorise package, execute work, analyse status, take action, escalate exceptions. The board is not in the package approval loop; the PM's oversight stops short of doing specialist work; and 'take significant action' is exactly the status-analysis duty named here.",
);

mc(
  "Process: Controlling a Stage",
  "Dev's team starts the chiller repair before Sam and Dev have signed the work package, arguing it is 'obviously urgent'. What control has been lost?",
  "The agreed, bounded agreement itself — a work package defines the work, tolerances and reporting, and without it there is no baseline to judge status",
  [
    "Nothing — urgent repairs never need a package",
    "Quality assurance, which only happens after signed packages",
    "The exception process, which is now closed",
  ],
  "Work packages are the contract for a slice of work; the 'urgent' shortcut removes the very boundaries (effort, tolerance, deliverables) CS relies on. Urgency is answered by tolerances and exception routes inside a properly scoped package, not by skipping it.",
);

mc(
  "Process: Controlling a Stage",
  "An issue surfaces mid-stage that will delay the trial bakes by two days, inside stage tolerance. Under CS the project manager's correct handling is:",
  "Log it, assess it, act or raise it within authority, and keep it on the issue log for boundary reporting — no board escalation required",
  [
    "Escalate to the board within the week, as all issues are board matters",
    "Fix it informally and leave the log clean",
    "Freeze all trial bakes until Northgate approves new dates",
  ],
  "CS's issue route is: raise, investigate, and either resolve within delegated authority (within tolerance) or escalate as an exception. In-tolerance problems are managed and visible — not escalated every one of them, and not fixed off the books.",
);

// ---------------------------------------------------------------------------
// LO3 — Process: Managing Product Delivery / Delivering a Product (3 x 1 mark)
// ---------------------------------------------------------------------------

mc(
  "Process: Delivering a Product",
  "Dev completes the oven installation and asks Sam to 'sign it off'. Under the product-delivery process, what actually happens?",
  "The team manager confirms the work package is complete; the project manager reviews it against the package and the product's acceptance criteria, then the defined acceptance authority accepts the product",
  [
    "Sam signs a completion certificate; no further acceptance step exists",
    "The board accepts every major product in a special session",
    "Fern accepts it automatically, as senior user, without inspection",
  ],
  "Delivery hands over: execute, review against the work package, then the project manager confirms acceptance with the person named to accept the product. Blanket PM sign-off, board ceremonies, and assumed acceptance all bypass the defined product-acceptance route.",
);

mc(
  "Process: Delivering a Product",
  "Kit's second portal cycle ends with two features unbuilt; the team proposes shipping the rest and adding them at month three. Whose decision is it, under the delivery process?",
  "The project manager's within the work package tolerance — and if it breaches the package's scope agreement, it becomes a change for the change authority",
  [
    "Northgate's — they use the portal most",
    "Tom's alone, because the executive owns all scope",
    "Nobody — the specialist team owns all product decisions",
  ],
  "Within agreed package tolerance the PM absorbs and reports; deviations from the package scope are changes, routed by authority. Customer, executive and team each have their place, but the described branch point is a PM-then-change-authority question.",
);

mc(
  "Process: Delivering a Product",
  "The handover of the refrigerated vans to day-to-day operations should be governed by which principle?",
  "Products are accepted against their descriptions, and operational readiness (licensing, trained drivers, maintenance) is a quality criterion checked before acceptance",
  [
    "Handover is informal once the invoice is paid",
    "Operations must accept whatever the project produces, since it is theirs next",
    "Only the finance lead can authorise any handover",
  ],
  "Acceptance follows the agreed criteria, whatever the handover type. 'Paid equals accepted' and 'operations swallows anything' skip the checks; finance sign-off is not a product-acceptance role.",
);

// ---------------------------------------------------------------------------
// LO3 — Process: Managing a Stage Boundary (3 x 1 mark + 1 x 3-mark set)
// ---------------------------------------------------------------------------

two(
  "Process: Managing a Stage Boundary",
  "At the stage two review, which two documents must Sam take to the board to support the next-stage decision?",
  [
    "The updated business case with Ruth's re-forecast attached",
    "The original Starting Up project brief, unchanged",
    "The end stage report with lessons from the finished stage",
    "Northgate's letter of intent",
  ],
  [1, 3],
  "The boundary package is forward-looking and evidence-based: the refreshed business case and the end-stage report (performance plus lessons) steer the continue/stop decision. The SU brief is history, and the letter of intent belongs inside the business case as an assumption, not as a separate boundary document.",
);

mc(
  "Process: Managing a Stage Boundary",
  "The board at the boundary approves stage three and re-commits the business case. What else is mandatory at that same meeting?",
  "Reviewing the risks, issues and change budget consumption, and confirming or amending tolerances for the next stage",
  [
    "Replacing the project manager if any tolerance was used at all",
    "Re-baselining the project start date to the day of the meeting",
    "Releasing the final payment to all suppliers",
  ],
  "SB exists so the board re-decides with fresh eyes: performance, outlook, risks/issues, the health of the change budget and the next stage's tolerances. Personnel change, date-shifting and payment release are not boundary obligations.",
);

mc(
  "Process: Managing a Stage Boundary",
  "Sam plans stage three in detail at the boundary, but leaves stage four at outline. This is:",
  "Correct — planning to the next decision point, elaborating the stage the board is about to authorise",
  [
    "Incorrect — every stage must be equally detailed before its first week",
    "Incorrect — stage four should be fully planned now to expose uncertainty",
    "Correct only if stage four involves no external dependencies",
  ],
  "Progressive elaboration one stage ahead is the heartbeat of planning. Full detail early is waste; equal detail everywhere ignores that uncertainty decreases over time. Stage four's audit dependency does not exempt it from later re-planning either.",
);

match(
  "Process: Managing a Stage Boundary",
  "Match each boundary activity to the process whose primary output it feeds.",
  [
    "Assembling the end stage report and updated registers to hand the board its decision material",
    "Drawing the stage three plan with activity-level detail for the gas-and-oven work",
    "Confirming whether the £6,000 change budget can stand at the same level for the next stage",
  ],
  [
    "Managing a Stage Boundary",
    "Controlling a Stage",
    "Directing a Project",
    "Initiating a Project",
    "Closing a Project",
    "Starting Up a Project",
  ],
  [0, 1, 2],
  "Boundary reporting is SB's own output; the detailed next-stage plan comes from planning that stage inside the executive's authority, which CS-style planning feeds at the start of the authorised stage; and every decision the board takes at the boundary — including the change budget — is exercised through DP. Each stem is one canonical output of one process.",
);

// ---------------------------------------------------------------------------
// LO3 — Process: Closing a Project (4 x 1 mark)
// ---------------------------------------------------------------------------

mc(
  "Process: Closing",
  "Go-live passes and Northgate takes delivery. Fern asks to close quickly and 'deal with lessons later'. What does Closing require instead?",
  "A planned closure: confirm acceptance of all products, hand over to operations, and produce the hardening lessons report and project close report together",
  [
    "Closure whenever the customer stops raising tickets",
    "A formal board vote to reopen if anything later fails",
    "Transferring the project files to Northgate for safekeeping",
  ],
  "CP is a process, not an afterthought: products confirmed, benefits handed to the business with the benefits management approach, lessons harvested while people are still there. Ticket-driven closure and permanent file-transfers to customers miss the point entirely.",
);

mc(
  "Process: Closing",
  "Six months after closure, a chiller component fails and Fern wants the project team re-convened. Under the project's end arrangements, who should own this?",
  "Operations/the business — post-closure product life and warranty routes belong to the business, not a re-opened project",
  [
    "Sam, who remains accountable for all project products indefinitely",
    "The project board, which must sit again for six months",
    "Priya, as the original auditor",
  ],
  "Closure ends the project's temporary organisation. Ownership passes with the products; warranty and maintenance sit with the business per the handover. Keeping boards or managers permanently attached to closed work destroys the 'temporary' in project-based working.",
);

mc(
  "Process: Closing",
  "The end project report should say, above all, which of these?",
  "Whether the outputs were accepted and the business case's predictions are now the business's to realise, with performance measured against the baselines",
  [
    "Which team member performed best, for appraisal purposes",
    "Every issue the project ever raised, unedited",
    "The forecast business case that was approved at initiation",
  ],
  "CP reports against the approved baselines — tolerances, product acceptance, register state — and hands the benefit realisation onward. Personnel judgements, dump-file registers and stale initiation forecasts are not the report's purpose.",
);

mc(
  "Process: Closing",
  "The project is authorised to close early after a board decision that the revised business case no longer supports completion. What must still be completed before closure is valid?",
  "The planned closure steps: acceptance of usable products, register consolidation, lessons and the close report — early finish is still a controlled close",
  [
    "Nothing — early closure can skip all closure products",
    "A re-run of initiation under a new project number",
    "Approval of the original full-scope plan by the board",
  ],
  "Whether finishing early or in full, the closure process runs; abandoned work is still accepted, recorded, learned from and handed back. Skipping it leaves the business with no picture of what it owns.",
);

export const practitionerMockQuestions = bank.questions;
