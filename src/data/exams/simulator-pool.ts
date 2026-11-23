import { createBank, examTopicModules } from "./build";

const { mc, two, questions } = createBank("sim", examTopicModules);

// Foundations (8)
mc(
  "Foundations",
  "PRINCE2 describes a project as a temporary organisation created for what purpose?",
  "To deliver business products according to an agreed business case",
  [
    "To run an organisation's routine, day-to-day operations more efficiently",
    "To manage a group of related programmes over several years",
    "To provide ongoing support for products already in use",
  ],
  "A project is a temporary organisation that delivers business products to an agreed business case. Routine operations and ongoing support are business as usual.",
);
mc(
  "Foundations",
  "Which statement about PRINCE2 is correct?",
  "It manages and controls the project but does not cover the specialist work",
  [
    "It includes detailed techniques for building the specialist products",
    "It is suitable only for large public-sector projects",
    "It cannot be used with iterative ways of working",
  ],
  "PRINCE2 provides the management and control around a project. The specialist work, such as baking or software development, uses its own methods. PRINCE2 works for any size or sector and with iterative delivery.",
);
mc(
  "Foundations",
  "In PRINCE2 7th edition, what are the former 'themes' now called?",
  "Practices",
  ["Principles", "Processes", "Management approaches"],
  "PRINCE2 7th edition renamed themes as practices and strategies as management approaches. The seven practices are business case, organising, plans, quality, risk, issues and progress.",
);
mc(
  "Foundations",
  "Why are the seven performance targets described as connected?",
  "Changing one, such as scope, usually affects the others",
  [
    "They are all owned and set by the project manager",
    "They are only measured once the project has closed",
    "They must all be given exactly the same tolerance",
  ],
  "The performance targets affect each other, so project decisions are trade-offs. Adding scope to the York shop, for example, is likely to raise cost and lengthen the timescale.",
);
mc(
  "Foundations",
  "Which is NOT one of the seven performance targets in PRINCE2 7th edition?",
  "Stakeholders",
  ["Sustainability", "Benefits", "Risk"],
  "The seven performance targets are benefits, cost, time, quality, scope, risk and sustainability. Stakeholders are managed through the people element, not as a performance target.",
);
mc(
  "Foundations",
  "Which delivery approach best suits a project whose requirements are expected to change as the work progresses?",
  "Iterative-incremental",
  ["Linear-sequential", "Business as usual", "Fixed-price contracting"],
  "Iterative-incremental delivery builds and refines products in repeated cycles, which suits uncertain or evolving requirements. Linear-sequential suits clear, stable requirements.",
);
two(
  "Foundations",
  "Which two are characteristics of a project?",
  ["Cross-functional", "Repeatable", "Uncertain", "Permanent"],
  [1, 3],
  "Projects are characterised by change, being temporary, cross-functional, unique and uncertain. Repeatable and permanent describe business as usual.",
);
mc(
  "Foundations",
  "What does PRINCE2 7th edition mean by project context?",
  "The setting the project works in, such as its sector and scale",
  [
    "The project's detailed schedule, resource plan and stage budgets",
    "The full list of products the project will deliver to users",
    "The terms of reference and meeting rules for the project board",
  ],
  "Project context is one of the five integrated elements. It covers the setting the project works in, and it shapes how PRINCE2 is tailored.",
);

// Principles (14)
mc(
  "Principles",
  "A project must remain desirable, viable and achievable. Which principle does this support?",
  "Ensure continued business justification",
  [
    "Focus on products",
    "Define roles, responsibilities and relationships",
    "Tailor to suit the project",
  ],
  "A business case shows the project is desirable, viable and achievable. Ensure continued business justification requires this to be true at the start and throughout.",
);
mc(
  "Principles",
  "The York project board authorises only one stage at a time, after reviewing progress at the end of each stage. Which principle is this?",
  "Manage by stages",
  ["Manage by exception", "Learn from experience", "Focus on products"],
  "Manage by stages means planning, monitoring and controlling the project one management stage at a time, with a decision point at each stage end.",
);
mc(
  "Principles",
  "Which principle was extended in PRINCE2 7th edition to include relationships?",
  "Define roles, responsibilities and relationships",
  [
    "Ensure continued business justification",
    "Learn from experience",
    "Manage by exception",
  ],
  "The 7th edition principle is define roles, responsibilities and relationships. It recognises that people need to work well together, not just know their roles.",
);
mc(
  "Principles",
  "PRINCE2 uses roles rather than job titles. What does this allow?",
  "People to hold several roles, or share one, if all duties are covered",
  [
    "Each person on the project to hold exactly one role, with no sharing",
    "Job titles to be used in place of role descriptions in the PID",
    "Roles to be left unfilled on small projects to reduce overheads",
  ],
  "Because PRINCE2 defines roles, not jobs, roles can be combined or shared to suit the project, provided all responsibilities are covered and no conflicting roles are combined.",
);
mc(
  "Principles",
  "Before the York project begins, Sam reads the notes from Fern & Flour's earlier pop-up stall project. Which principle is Sam applying?",
  "Learn from experience",
  [
    "Ensure continued business justification",
    "Focus on products",
    "Tailor to suit the project",
  ],
  "Seeking lessons from previous projects at the start is part of learn from experience. Lessons are also sought during the project and passed on at the end.",
);
mc(
  "Principles",
  "Which statement about manage by exception is correct?",
  "Each level escalates only when a tolerance is forecast to be exceeded",
  [
    "The project board receives no reports until an exception happens",
    "Only time and cost can be given tolerances",
    "The project manager sets the project tolerances",
  ],
  "Each level works within its tolerances and escalates when a breach is forecast. Regular reporting continues, tolerances can cover all seven performance targets, and project tolerances are set by the business layer.",
);
mc(
  "Principles",
  "How does the 'focus on products' principle help control scope?",
  "Agreeing what will be delivered, and to what quality, defines scope",
  [
    "It removes the need for a business case once products are agreed",
    "It lets the team start work before any products have been defined",
    "It means activities are planned first and products are agreed later",
  ],
  "Defining products first sets clear expectations about what will be delivered. This controls scope, reduces rework and makes acceptance easier.",
);
two(
  "Principles",
  "Which two statements about the PRINCE2 principles are correct?",
  [
    "They can be removed if the project is low risk.",
    "They are a set of mandatory document templates.",
    "They are universal and apply to every project.",
    "They have been proven in practice over many years.",
  ],
  [3, 4],
  "The principles are universal, apply to every PRINCE2 project and are proven in practice. They are not templates and can never be removed, though how they are applied is tailored.",
);
mc(
  "Principles",
  "The York project plan is kept at a high level, while each stage plan is produced in detail. Which principle explains this?",
  "Manage by stages",
  [
    "Manage by exception",
    "Define roles, responsibilities and relationships",
    "Ensure continued business justification",
  ],
  "Manage by stages recognises the limited planning horizon: the project plan is in outline and each stage is planned in detail when it is close.",
);
mc(
  "Principles",
  "If a project's business justification is no longer valid, what should happen?",
  "The project should change direction or be closed early",
  [
    "The project should continue so the money spent is not wasted",
    "The business case should be rewritten to match the current costs",
    "The project manager should lower quality to cut costs",
  ],
  "Under ensure continued business justification, a project that can no longer be justified should be changed so it is justified again, or closed early.",
);
mc(
  "Principles",
  "Which principle requires PRINCE2 to be adapted to the project's environment, size, complexity and risk?",
  "Tailor to suit the project",
  ["Focus on products", "Manage by exception", "Learn from experience"],
  "Tailor to suit the project means PRINCE2 is adapted to each project's context, so the method stays useful rather than bureaucratic.",
);
mc(
  "Principles",
  "When is a lesson truly learned?",
  "When it changes the way people work",
  [
    "When it is recorded in the lessons log",
    "When it is included in the end project report",
    "When the project board has read it",
  ],
  "Recording a lesson is only the start. A lesson is learned when it leads to a change in behaviour, on this project or on future ones.",
);
mc(
  "Principles",
  "The pre-order app team defines the features and acceptance tests for each release before building it. Which principle is this?",
  "Focus on products",
  ["Manage by stages", "Learn from experience", "Manage by exception"],
  "Focus on products applies to iterative work too. Detail is added as each release approaches, but products are still defined before the work to create them.",
);
mc(
  "Principles",
  "Which is a benefit of applying the 'define roles, responsibilities and relationships' principle?",
  "Everyone knows who decides, who does the work and who to consult",
  [
    "The project board no longer needs to meet",
    "Job titles can be used instead of roles",
    "Stakeholders outside the project team no longer need to be consulted",
  ],
  "Clear roles, responsibilities and relationships mean decisions are made by the right people, with business, user and supplier interests all represented.",
);

// People (10)
mc(
  "People",
  "Which statement best describes the people element of PRINCE2 7th edition?",
  "It covers how people lead, work together and adopt change",
  [
    "It is a list of every role and job title on the project, with names",
    "It replaces the organising practice and its role descriptions",
    "It applies only to the project board and the business layer",
  ],
  "Roles define who decides. The people element covers leadership, teams, stakeholders, communication, culture and change, which is how people actually work together.",
);
mc(
  "People",
  "Sam leads a team of shopfitters employed by another company and has no line authority over them. What will Sam rely on most?",
  "Leadership that builds trust and motivation",
  [
    "A contract clause allowing Sam to discipline the team",
    "The project executive managing the team directly",
    "Tighter work package tolerances",
  ],
  "Project managers often lead people they do not line-manage, so influence comes from leadership: clear direction, trust and motivation.",
);
mc(
  "People",
  "Which most helps a temporary project team to work effectively?",
  "A shared purpose, clear roles and trust",
  [
    "Avoiding any disagreement within the team",
    "Keeping the team unaware of the business case",
    "Drawing every member from one department",
  ],
  "Effective teams share a purpose, understand their roles, trust each other and have the right mix of skills. Some disagreement is normal and can be healthy.",
);
mc(
  "People",
  "Conflict appears in a newly formed York project team. What is the best approach?",
  "Bring it into the open early and resolve it constructively",
  [
    "Ignore it, because it will usually fade once the work starts",
    "Replace the people involved straight away",
    "Escalate it to the business layer",
  ],
  "Some conflict is normal as teams form. Dealing with it openly and early stops it from damaging trust and progress.",
);
mc(
  "People",
  "What is the purpose of analysing stakeholders, for example by interest and influence?",
  "To decide how to engage each stakeholder in a suitable way",
  [
    "To decide which stakeholders can be ignored for the whole project",
    "To choose the members of the project board",
    "To set the tolerances for each stage",
  ],
  "Stakeholder analysis helps plan the right level and style of engagement for each stakeholder. The analysis is revisited as stakeholders change.",
);
mc(
  "People",
  "Which management approach describes how the project will communicate with its stakeholders?",
  "Communication management approach",
  [
    "Commercial management approach",
    "Quality management approach",
    "Digital and data management approach",
  ],
  "The communication management approach records what each audience needs, when, how and from whom. It is prepared in initiation and reviewed at each stage boundary.",
);
mc(
  "People",
  "Which is good practice when a conversation leads to a decision?",
  "Confirm the decision in writing",
  [
    "Keep it verbal to save time",
    "Share it only with the project board",
    "Record it only at the end of the stage",
  ],
  "Anything that leads to a decision should be confirmed in writing, so there is a clear, shared record of what was agreed.",
);
mc(
  "People",
  "What does PRINCE2 7th edition mean by culture?",
  "The shared values, habits and unwritten rules that shape behaviour",
  [
    "The formal organisation chart showing who reports to whom",
    "The set of management products the project has chosen to use",
    "The written policies and procedures issued by the business layer",
  ],
  "Culture is how things are really done. Projects often bring different cultures together, so leaders need to understand and shape it.",
);
mc(
  "People",
  "A York team manager honestly reports a delay and is criticised in front of the whole team. What is the most likely effect?",
  "People become less willing to report bad news early",
  [
    "Future delays become much less likely to happen",
    "Progress reports become more accurate over time",
    "Tolerances become easier to set for each stage",
  ],
  "Leaders shape culture by how they respond to bad news. Punishing honesty discourages early warnings, which makes manage by exception harder.",
);
two(
  "People",
  "Which two statements about organisational change are correct?",
  [
    "Outputs create benefits as soon as they are delivered.",
    "The transition into business as usual should be planned.",
    "Resistance often comes from people's worries about the change.",
    "The supplier should lead lasting change in the business.",
  ],
  [2, 3],
  "Benefits only arise once people use the outputs, so the transition needs planning. Resistance usually comes from worry, and lasting change is led by the business, represented by the senior user.",
);

// Business case (10)
mc(
  "Business case",
  "What is the purpose of the business case practice?",
  "To help decide if the project is, and stays, desirable, viable and achievable",
  [
    "To set out the detailed schedule and the budget for each management stage",
    "To define the quality criteria and quality checks for each product",
    "To agree the contracts and payment terms with external suppliers",
  ],
  "The business case practice establishes and maintains the justification for the project, so decisions about starting, continuing or stopping are based on value.",
);
mc(
  "Business case",
  "Which of these is a benefit of the pre-order app?",
  "A 10% reduction in unsold bread",
  [
    "The pre-order app itself",
    "Customers ordering their bread the night before",
    "The date the app goes live",
  ],
  "A benefit is a measurable improvement. The app is the output, customers ordering ahead is the outcome, and less unsold bread is the benefit.",
);
mc(
  "Business case",
  "Why should a business case include a 'do nothing' option?",
  "It provides a baseline to compare the other options against",
  [
    "It must always be the option that is recommended to the board",
    "It removes the need for an investment appraisal",
    "It is required only for projects within a programme",
  ],
  "Comparing options, including doing nothing, shows whether the project gives better value than leaving things as they are.",
);
mc(
  "Business case",
  "When is the detailed business case produced?",
  "In initiating a project",
  [
    "In starting up a project",
    "In controlling a stage",
    "In closing a project",
  ],
  "The outline business case from starting up is developed into the detailed business case during initiating a project, and it becomes part of the PID.",
);
mc(
  "Business case",
  "Which is NOT normally part of a business case?",
  "The detailed work package for each team",
  [
    "Expected benefits and dis-benefits, with their timings",
    "Costs and timescale",
    "Major risks",
  ],
  "A business case covers reasons, options, benefits, dis-benefits, timescale, costs, investment appraisal and major risks. Work packages are planning and control products.",
);
mc(
  "Business case",
  "Why does each benefit need a baseline measurement?",
  "So the improvement can be measured and proved",
  [
    "So the benefit can be realised before the project closes",
    "So the project manager can set the stage tolerances",
    "So the benefit can be transferred to the supplier",
  ],
  "Without a starting measurement, there is no way to show how much things have improved. The benefits management approach records baselines and measures.",
);
mc(
  "Business case",
  "When is the business case reviewed?",
  "At stage ends, at exceptions, for major changes and at closure",
  [
    "Only once, when the project board first approves it at initiation",
    "Only at the end of the project, in closing a project",
    "Only when the project manager decides it needs updating",
  ],
  "The business case is reviewed regularly to confirm the project is still justified. Changes and risks are also judged by their effect on it.",
);
mc(
  "Business case",
  "Which role independently checks, on behalf of the project board, that the business case remains valid?",
  "Project assurance",
  ["Project support", "Team manager", "Change authority"],
  "Business assurance, part of project assurance, checks the business case independently for the project executive. The executive remains responsible for it.",
);
mc(
  "Business case",
  "How is sustainability treated in PRINCE2 7th edition?",
  "As a performance target with its own targets and tolerances",
  [
    "As an optional appendix to the end project report",
    "As the responsibility of the supplier alone",
    "As something considered only after the project closes",
  ],
  "Sustainability is one of the seven performance targets. It is planned, measured and controlled like cost or time, across the product's whole life.",
);
two(
  "Business case",
  "Which two statements about sustainability on the York project are correct?",
  [
    "It can be managed with targets and tolerances, like cost and time.",
    "It covers environmental impact only.",
    "The sustainability management approach plans how targets will be met and reported.",
    "It is assessed only once the project has closed.",
  ],
  [1, 3],
  "Sustainability has targets and tolerances and is planned through the sustainability management approach. It covers environmental, social and economic impact, throughout the project and beyond.",
);

// Organising (10)
mc(
  "Organising",
  "Why can there be only one project executive?",
  "So that one person is ultimately accountable for the project",
  [
    "So the senior user cannot attend board meetings",
    "So the project manager reports straight to the business layer instead",
    "So project assurance can be delegated",
  ],
  "PRINCE2 has a single project executive to give clear accountability. Shared accountability tends to lead to slow or unclear decisions.",
);
mc(
  "Organising",
  "Which project board role represents those who will design, develop or provide the project's products?",
  "Senior supplier",
  ["Senior user", "Project executive", "Team manager"],
  "The senior supplier represents the supplier interest and is accountable for the quality of what suppliers deliver. Team managers sit at the delivering level, not on the board.",
);
mc(
  "Organising",
  "At which level of organisation does the project manager work?",
  "Managing",
  ["Directing", "Delivering", "Business layer"],
  "The four levels are business layer, directing (project board), managing (project manager) and delivering (team managers and teams).",
);
mc(
  "Organising",
  "Which statement about project assurance is correct?",
  "It must be independent of the project manager",
  [
    "It can be delegated to the project manager",
    "It is another name for project support",
    "It is provided only by the business layer",
  ],
  "Project assurance acts for the project board and must be independent of the project manager. It cannot be delegated to the project manager and is kept separate from project support.",
);
mc(
  "Organising",
  "What is a change authority?",
  "A person or group the board lets decide on changes within agreed limits",
  [
    "The supplier who designs and builds any products that need to change",
    "The business layer team that approves the business case",
    "The project support role that keeps the issue register and logs up to date",
  ],
  "The project board can delegate change decisions to a change authority, with limits and often a change budget. Larger changes still go to the board.",
);
mc(
  "Organising",
  "Which role is responsible for administration, records and configuration management?",
  "Project support",
  ["Project assurance", "Senior supplier", "Change authority"],
  "Project support provides administration, records, tools and configuration management. It is the project manager's responsibility and can be combined with that role.",
);
mc(
  "Organising",
  "Which statement about combining roles is correct?",
  "The project manager and project support roles can be combined",
  [
    "The project executive and project manager roles can be combined",
    "The project manager can carry out project assurance",
    "Two directors can share the project executive role",
  ],
  "Project support can be held by the project manager. The executive and project manager roles cannot be combined, assurance must be independent of the project manager, and there is only one executive.",
);
mc(
  "Organising",
  "Fern & Flour's directors want one person on the York project board who is accountable for the shop's success. Who should normally be the project executive?",
  "A senior person who represents the business and can make decisions",
  [
    "Priya, because Priya will run the shop once it opens",
    "The shopfitter, because it will design and build the shop",
    "Sam, because Sam manages the project day to day",
  ],
  "The project executive represents the business interest and needs the authority to make decisions. Priya represents users, the shopfitter represents suppliers and Sam, as project manager, cannot also be the executive.",
);
mc(
  "Organising",
  "Which management approach describes how products and services will be sourced from suppliers?",
  "Commercial management approach",
  [
    "Communication management approach",
    "Benefits management approach",
    "Risk management approach",
  ],
  "The commercial management approach covers sourcing, contracts and supplier management, so that customer and supplier business reasons are aligned.",
);
mc(
  "Organising",
  "Which statement about the business layer is correct?",
  "It sits outside the project team and commissions the project",
  [
    "It is the formal PRINCE2 name for the project board",
    "It manages the project day to day on behalf of the project board",
    "It builds the specialist products for the project",
  ],
  "The business layer commissions the project, sets its tolerances and appoints the project executive, but sits outside the project management team.",
);

// Plans (8)
mc(
  "Plans",
  "Which plan is produced near the end of the previous stage?",
  "Stage plan",
  ["Project plan", "Team plan", "Exception plan"],
  "Each stage plan is produced near the end of the previous stage, in managing a stage boundary, so it uses the latest information. Exception plans are produced only when needed.",
);
mc(
  "Plans",
  "What does a product breakdown structure show?",
  "The products to be delivered, arranged in a hierarchy",
  [
    "The order in which the products will be created",
    "The activities to be done and the dependencies between them",
    "The cost of each product",
  ],
  "A product breakdown structure breaks the final product into its component products. The order of creation is shown in the product flow diagram.",
);
mc(
  "Plans",
  "What does a product flow diagram show?",
  "The sequence in which products are developed and their dependencies",
  [
    "The products arranged in a hierarchy, from the final product down",
    "The quality criteria and quality checks for each product",
    "Who is responsible for producing and approving each product",
  ],
  "A product flow diagram shows the order in which products are created and how they depend on each other. It follows the product breakdown structure.",
);
mc(
  "Plans",
  "Which statement about management stages is correct?",
  "Management stages never overlap, but delivery work can cross them",
  [
    "Management stages always match the technical phases of the work",
    "Management stages must all be the same length",
    "All delivery work must stop at every stage boundary",
  ],
  "Management stages are sequential decision points for the board. Technical work, such as a long build, can run across a stage boundary.",
);
mc(
  "Plans",
  "What does a project's budget include?",
  "The cost of the plan, plus any risk budget and change budget",
  [
    "Only the cost of the specialist work",
    "Only the cost of the current stage",
    "The cost of the plan, plus any business layer overheads",
  ],
  "The project budget covers the planned costs and any separate risk and change budgets set aside for risk responses and approved changes.",
);
mc(
  "Plans",
  "Which estimating technique uses a known rate, such as cost per square metre of shop floor, to calculate an estimate?",
  "Parametric",
  ["Top-down", "Expert judgement", "Bottom-up"],
  "Parametric estimating uses a measurable relationship, such as a cost per unit, to calculate the estimate.",
);
mc(
  "Plans",
  "What is good practice when estimating?",
  "Use more than one estimating technique and compare the results",
  [
    "Use one estimating technique throughout, for consistency",
    "Leave all estimating to the business layer",
    "Estimate only once, at the very start of the project",
  ],
  "Comparing results from different techniques, such as top-down and bottom-up, gives more reliable estimates and highlights assumptions.",
);
mc(
  "Plans",
  "What does a PRINCE2 plan describe?",
  "What will be delivered, how, by whom, when and for how much",
  [
    "Only the start and end dates of each planned activity",
    "Only the costs and the approvals needed to proceed",
    "Only the products and the quality criteria they must meet",
  ],
  "A plan covers what, how, by whom, when and for how much. A schedule is only part of a plan.",
);

// Quality (8)
mc(
  "Quality",
  "What are acceptance criteria?",
  "Measurable criteria the project product must meet to be accepted",
  [
    "The customer's general quality expectations, in their own words",
    "The checks the supplier carries out while the work is being done",
    "The list of signatures needed before the project can be closed",
  ],
  "Acceptance criteria turn quality expectations into measurable, prioritised tests, recorded in the project product description.",
);
mc(
  "Quality",
  "What does quality tolerance mean in a product description?",
  "The acceptable range for a quality specification",
  [
    "The time allowed to carry out a quality review",
    "The number of defects found in a quality review",
    "The budget for quality activities",
  ],
  "Quality tolerance sets the acceptable range, such as a counter height of 90 cm plus or minus 2 cm. A product within the range meets its specification.",
);
mc(
  "Quality",
  "Why should users and suppliers help write product descriptions?",
  "So they reflect what users need and suppliers can build",
  [
    "So the project manager no longer needs to approve them",
    "So the business case no longer needs to be updated",
    "So quality reviews are not needed for those products",
  ],
  "Involving users and suppliers makes product descriptions realistic and complete, which improves quality and acceptance.",
);
mc(
  "Quality",
  "When is the quality management approach created?",
  "In initiating a project, as part of the PID",
  [
    "In starting up a project, as part of the project brief",
    "At the end of each stage, in the end stage report",
    "In closing a project, as part of handover",
  ],
  "The quality management approach is prepared during initiation and describes how quality will be managed across the project.",
);
mc(
  "Quality",
  "What is a quality review?",
  "A structured check of a product against its quality criteria",
  [
    "An independent audit of the whole project by the business layer",
    "A meeting where the project board approves the next stage plan",
    "An informal opinion on the product from the project manager",
  ],
  "A quality review is a structured, team-based check of a product. It follows set steps and roles and records the result.",
);
mc(
  "Quality",
  "Which is a possible result of a quality review?",
  "Conditionally complete",
  ["Partly approved", "Escalated", "Deferred to closure"],
  "A quality review result is complete, conditionally complete (actions to finish) or incomplete (the product needs another review).",
);
mc(
  "Quality",
  "In a quality review, which role introduces the product and represents the people who produced it?",
  "Presenter",
  ["Chair", "Reviewer", "Administrator"],
  "The presenter introduces the product and represents its producers. The chair leads the review, reviewers assess the product and the administrator records the results.",
);
two(
  "Quality",
  "Which two statements about quality control are correct?",
  [
    "It is carried out only by the business layer.",
    "It checks products against their quality specifications.",
    "It replaces the need for acceptance of the final product.",
    "It produces quality records as evidence.",
  ],
  [2, 4],
  "Quality control checks products against their specifications and produces quality records. It is done within the project, and acceptance of the final product is still needed.",
);

// Risk (10)
mc(
  "Risk",
  "What is an opportunity in PRINCE2?",
  "An uncertain event that would have a positive effect if it happened",
  [
    "An event that has already happened and improved the project's position",
    "A measurable benefit that has been recorded in the business case",
    "A request for change that the users have suggested to the board",
  ],
  "A risk can be a threat (negative) or an opportunity (positive). Both are uncertain. Something that has already happened is managed as an issue.",
);
mc(
  "Risk",
  "What is the risk management procedure?",
  "Identify, assess, plan, implement, with communicate running throughout",
  [
    "Capture, assess, recommend, decide, implement",
    "Assess, identify, implement, plan, with communicate at the end",
    "Identify, plan, assess, implement, with communicate only at stage ends",
  ],
  "The risk management procedure is identify, assess, plan and implement, with communicate running alongside all the other steps.",
);
mc(
  "Risk",
  "Which threat response passes part of the financial impact to a third party, such as through insurance?",
  "Transfer",
  ["Avoid", "Accept", "Reduce"],
  "Transfer moves some of the financial impact to a third party, for example by insuring the York shop's equipment.",
);
mc(
  "Risk",
  "Heavy rain could delay outdoor signage work at the York shop. The team reschedules the signage for midsummer so the threat can no longer affect it. Which response is this?",
  "Avoid",
  ["Reduce", "Accept", "Share"],
  "Avoid changes the plan so the threat can no longer happen or no longer affects the project. Reduce lowers its probability or impact.",
);
mc(
  "Risk",
  "What is a secondary risk?",
  "A new risk that arises from carrying out a risk response",
  [
    "A risk that remains after a response has been carried out",
    "A risk with a low probability",
    "A risk owned by a team manager",
  ],
  "A secondary risk is created by a response, such as a new supplier risk when work is moved to another firm. What remains of the original risk is residual risk.",
);
mc(
  "Risk",
  "What is residual risk?",
  "The risk that remains after a response has been carried out",
  [
    "A new risk that is created by carrying out a response",
    "A risk that has been closed because it can no longer happen",
    "A risk that has been transferred to an insurer or third party",
  ],
  "Responses rarely remove a risk completely. The remaining exposure is residual risk, which still needs monitoring.",
);
mc(
  "Risk",
  "When assessing risks, what does 'evaluate' look at?",
  "The project's overall risk exposure, not just individual risks",
  [
    "The probability of each individual risk, considered on its own",
    "Whether every risk on the risk register has an owner",
    "Which risks can now be removed from the risk register",
  ],
  "Estimating looks at each risk's probability, impact and proximity. Evaluating looks at the combined effect of all risks on the project.",
);
mc(
  "Risk",
  "Who is accountable for risk management on the project?",
  "Project executive",
  ["Project manager", "Risk owner", "Project support"],
  "The project executive is accountable for risk management on the project. The project manager runs the procedure day to day, and risk owners manage individual risks.",
);
mc(
  "Risk",
  "What is the risk budget used for?",
  "Funding planned responses to risks",
  [
    "Paying for approved requests for change",
    "Covering any overspend in a stage",
    "Paying for the project manager's time",
  ],
  "The risk budget is a sum set aside to fund risk responses. It is separate from the change budget, which pays for approved changes.",
);
mc(
  "Risk",
  "What do risk appetite and risk tolerance describe?",
  "How much risk the business is willing to accept",
  [
    "How many risks the register can hold",
    "How quickly risks must be closed",
    "How far the risk budget can be overspent before escalating",
  ],
  "Risk appetite is the business's attitude to risk, and risk tolerance sets the thresholds beyond which risks must be escalated.",
);

// Issues (8)
mc(
  "Issues",
  "What is an issue?",
  "An unplanned event that has happened and needs managing",
  [
    "An uncertain event that might happen later in the project",
    "A product that has been approved and baselined by the board",
    "A lesson that was captured from a previous similar project",
  ],
  "An issue has already happened, unlike a risk, which is uncertain. Issues include requests for change, off-specifications, problems or concerns, business opportunities and external events.",
);
mc(
  "Issues",
  "Which type of issue is a proposal to change a baseline?",
  "Request for change",
  ["Off-specification", "Problem or concern", "External event"],
  "A request for change proposes a change to a baselined product. An off-specification is something that does not meet its specification.",
);
mc(
  "Issues",
  "What is a baseline?",
  "An approved version of a product used as a reference point",
  [
    "The first draft of a product, before it is quality reviewed",
    "The minimum quality a product must meet to pass",
    "The original budget agreed for the whole project at initiation",
  ],
  "Once a product is approved and baselined, it can only be changed through change control. The product register tracks versions and status.",
);
mc(
  "Issues",
  "Where can the project manager record an issue that can be handled informally within tolerance?",
  "Daily log",
  ["Issue register", "Risk register", "Lessons log"],
  "Issues the project manager can resolve informally are recorded in the daily log. Formal issues go in the issue register.",
);
mc(
  "Issues",
  "Which register tracks the project's products, their versions and their status?",
  "Product register",
  ["Quality register", "Issue register", "Daily log"],
  "The product register records products, versions and status, supporting change control and configuration management.",
);
mc(
  "Issues",
  "Priya asks for a hot-drinks station that is not in the approved York counter design. The cost is above the change authority's limit. What should happen?",
  "Refer the request for change to the project board for a decision",
  [
    "Let the shopfitter add it now and simply invoice for it later",
    "Ask Sam to approve it and pay for it from the risk budget",
    "Record it in the issue register as an off-specification",
  ],
  "A request for change beyond the change authority's limits goes to the project board. The risk budget is not for changes, and an off-specification is something that fails its specification.",
);
mc(
  "Issues",
  "What is the purpose of change control?",
  "To make sure baseline changes are assessed and agreed before being made",
  [
    "To prevent any changes to products once the PID has been approved",
    "To let suppliers change their products whenever they see fit",
    "To record lessons about changes when the project is closed",
  ],
  "Change control does not stop change. It makes sure changes are properly assessed against the business case and agreed by the right authority.",
);
two(
  "Issues",
  "Which two statements about issue decisions are correct?",
  [
    "A request for change can be approved, rejected or deferred.",
    "Every issue must be decided by the business layer.",
    "Priority and severity help decide how, and by whom, an issue is handled.",
    "The change budget and the risk budget are the same fund.",
  ],
  [1, 3],
  "Requests for change can be approved, rejected or deferred, or escalated if beyond authority. Priority and severity guide who handles an issue. The change and risk budgets are separate.",
);

// Progress (10)
mc(
  "Progress",
  "What is the purpose of the progress practice?",
  "To compare actual performance with the plan and control any deviation",
  [
    "To define the products and the quality criteria they must meet",
    "To decide whether the project is still worth carrying on with",
    "To identify and assess uncertain events that could affect the plan",
  ],
  "The progress practice monitors actual against planned performance, forecasts the outcome and controls deviations through tolerances and escalation.",
);
mc(
  "Progress",
  "Which report does the project manager send to the project board at regular intervals?",
  "Highlight report",
  ["Checkpoint report", "End project report", "Lessons report"],
  "Highlight reports give the board regular updates on stage progress. Checkpoint reports go from team managers to the project manager.",
);
mc(
  "Progress",
  "Who sets the project tolerances?",
  "The business layer",
  ["The project board", "The project manager", "The team manager"],
  "The business layer sets project tolerances when it commissions the project. The board then sets stage tolerances within them.",
);
mc(
  "Progress",
  "A York team manager forecasts that the counter build will exceed its work package tolerance. What should the team manager do?",
  "Raise an issue with the project manager",
  [
    "Send an exception report to the project board",
    "Take corrective action without telling anyone",
    "Ask the business layer for more tolerance",
  ],
  "Team managers escalate forecast work package breaches to the project manager by raising an issue. Escalation always goes to the level above.",
);
mc(
  "Progress",
  "Which is an event-driven report?",
  "End stage report",
  ["Highlight report", "Checkpoint report", "Weekly cost summary"],
  "End stage reports are produced when a stage ends, so they are event-driven. Highlight and checkpoint reports are produced at regular intervals.",
);
mc(
  "Progress",
  "Which registers are created during initiating a project?",
  "Issue, risk, quality and product registers",
  [
    "Daily log, lessons log and risk register",
    "Issue register and lessons log",
    "Risk register and daily log",
  ],
  "The four registers are set up in initiating a project. The daily log and lessons log are created earlier, in starting up a project.",
);
mc(
  "Progress",
  "Which management approach is new in PRINCE2 7th edition and covers data protection, digital tools and archiving?",
  "Digital and data management approach",
  [
    "Communication management approach",
    "Quality management approach",
    "Issue management approach",
  ],
  "The digital and data management approach covers project and product data, data protection, security, digital tools and archiving.",
);
mc(
  "Progress",
  "How does the project board control the project?",
  "Through authorisations, progress updates and exceptions",
  [
    "By attending the team's daily meetings and stand-ups",
    "By authorising each work package for the teams",
    "By keeping the logs and registers up to date",
  ],
  "The board controls through key authorisations, regular progress updates and exceptions. Work packages and day-to-day records belong to the project manager.",
);
mc(
  "Progress",
  "Which tolerances does the project manager set?",
  "Work package tolerances",
  ["Stage tolerances", "Project tolerances", "Benefits tolerances"],
  "The project manager sets tolerances for each work package, within the stage tolerances set by the project board.",
);
two(
  "Progress",
  "Which two statements about progress reports are correct?",
  [
    "Highlight reports are time-driven.",
    "Exception reports are produced at regular intervals.",
    "Reports should be honest and timely.",
    "Checkpoint reports go from the project manager to the board.",
  ],
  [1, 3],
  "Highlight reports are time-driven and all reports should be honest and timely. Exception reports are event-driven, and checkpoint reports go from team managers to the project manager.",
);

// Starting and initiating (10)
mc(
  "Starting and initiating",
  "Which management product is produced in starting up a project?",
  "Project brief",
  [
    "Project initiation documentation",
    "End stage report",
    "Project plan",
  ],
  "Starting up a project produces the project brief, including the outline business case, and the initiation stage plan. The PID and project plan come from initiation.",
);
mc(
  "Starting and initiating",
  "In starting up a project, which role is appointed first by the business layer?",
  "Project executive",
  ["Project manager", "Senior supplier", "Team manager"],
  "The business layer appoints the project executive, who then appoints the project manager. Together they design and appoint the rest of the project management team.",
);
mc(
  "Starting and initiating",
  "Why does PRINCE2 include an initiation stage?",
  "To set solid foundations before committing to major investment",
  [
    "To deliver the first specialist products to the users quickly",
    "To appoint the project executive and the project manager",
    "To confirm that the expected benefits have been realised",
  ],
  "Initiation lets the organisation understand the work, costs, risks and controls before committing to the full project.",
);
mc(
  "Starting and initiating",
  "Which process runs from the end of starting up a project until the project closes?",
  "Directing a project",
  [
    "Controlling a stage",
    "Initiating a project",
    "Managing product delivery",
  ],
  "Directing a project begins when the board receives the request to initiate and continues until the board authorises closure.",
);
mc(
  "Starting and initiating",
  "When the project board authorises initiation, what is it deciding?",
  "Whether to invest in initiation, based on the project brief",
  [
    "Whether to approve the full project and every one of its stages",
    "Whether the final product is ready to be handed over to users",
    "Whether the business layer should appoint the project executive",
  ],
  "Authorising initiation is the board's first decision. It commits resources only to the initiation stage, not to the whole project.",
);
mc(
  "Starting and initiating",
  "When can the project board give ad hoc direction?",
  "At any time it is needed between key decisions",
  [
    "Only at the end of each stage",
    "Only when the project manager raises an exception",
    "Only during initiation",
  ],
  "Ad hoc direction lets the board respond to requests, reports and changes in the business at any point in directing a project.",
);
mc(
  "Starting and initiating",
  "Which plan is created during starting up a project?",
  "Initiation stage plan",
  ["Project plan", "First delivery stage plan", "Exception plan"],
  "The initiation stage plan is prepared in starting up a project so the board can authorise initiation. The project plan is created during initiation.",
);
mc(
  "Starting and initiating",
  "Which is NOT produced during initiating a project?",
  "Project brief",
  ["Project plan", "Risk register", "Benefits management approach"],
  "The project brief is produced in starting up a project. Initiation produces the project plan, the registers, the management approaches including benefits management, and the PID.",
);
mc(
  "Starting and initiating",
  "In which process are lessons from previous projects first captured?",
  "Starting up a project",
  [
    "Initiating a project",
    "Managing a stage boundary",
    "Closing a project",
  ],
  "Starting up a project includes capturing previous lessons, which are recorded in the lessons log as soon as it is created.",
);
two(
  "Starting and initiating",
  "Which two statements about the project initiation documentation (PID) are correct?",
  [
    "It is produced by the business layer.",
    "It is assembled in initiating a project.",
    "It is never updated once it has been approved.",
    "It includes the project plan, business case and management approaches.",
  ],
  [2, 4],
  "The project manager assembles the PID in initiating a project, bringing together the business case, project plan and management approaches. It is updated at stage boundaries as needed.",
);

// Delivering and closing (10)
mc(
  "Delivering and closing",
  "Which is an activity in managing product delivery?",
  "Accept a work package",
  [
    "Authorise a work package",
    "Review the stage status",
    "Report highlights",
  ],
  "Managing product delivery has three activities: accept, execute and deliver a work package. The other options are project manager activities in controlling a stage.",
);
mc(
  "Delivering and closing",
  "What does the project manager use to pass work to a team manager?",
  "A work package",
  ["A highlight report", "A project brief", "An issue report"],
  "A work package sets out the products, tolerances, constraints and reporting arrangements agreed between the project manager and team manager.",
);
mc(
  "Delivering and closing",
  "In controlling a stage, a problem arises that is still within stage tolerance. What should the project manager do?",
  "Take corrective action",
  [
    "Raise an exception report",
    "Ask the board to authorise an exception plan",
    "Close the stage early",
  ],
  "Within tolerance, the project manager takes corrective action. Only forecast breaches of stage tolerance are escalated to the board.",
);
mc(
  "Delivering and closing",
  "Which report is produced in managing a stage boundary?",
  "End stage report",
  ["Project brief", "Checkpoint report", "Project mandate"],
  "Managing a stage boundary produces the end stage report, including lessons, so the board can review the stage and decide on the next one.",
);
mc(
  "Delivering and closing",
  "Which activity is part of managing a stage boundary?",
  "Update the business case",
  [
    "Execute a work package",
    "Authorise the project",
    "Hand over products",
  ],
  "Managing a stage boundary plans the next stage, updates the project plan and business case, and reports the stage end.",
);
mc(
  "Delivering and closing",
  "What is the purpose of closing a project?",
  "To provide a fixed point for acceptance and closure",
  [
    "To measure every benefit before the project team disbands",
    "To plan the next project in the programme or portfolio",
    "To approve the plan for the final stage of the project",
  ],
  "Closing a project confirms acceptance, checks objectives have been met, hands over products and passes on lessons. Many benefits are measured later.",
);
mc(
  "Delivering and closing",
  "Which activity takes place in closing a project?",
  "Hand over products",
  [
    "Plan the next stage",
    "Accept a work package",
    "Authorise initiation",
  ],
  "Closing a project includes preparing closure, handing over products, evaluating the project and recommending closure.",
);
mc(
  "Delivering and closing",
  "Who authorises project closure?",
  "The project board",
  ["The project manager", "The business layer", "The senior supplier"],
  "The project manager recommends closure, and the project board authorises it in directing a project.",
);
mc(
  "Delivering and closing",
  "The pre-order app is built in two-week iterations. Can controlling a stage still be used?",
  "Yes, it works with both linear and iterative delivery",
  [
    "No, it is designed only for linear, waterfall-style projects",
    "Only if every stage is exactly two weeks long",
    "Only if there are no team managers",
  ],
  "Controlling a stage works with any delivery approach. Work packages can cover iterations or releases, and progress is still monitored against tolerances.",
);
mc(
  "Delivering and closing",
  "Which report does the project manager produce in closing a project?",
  "End project report",
  ["End stage report", "Highlight report", "Project brief"],
  "The end project report reviews how the project performed against its targets and the business case, and includes lessons.",
);

// Tailoring (4)
mc(
  "Tailoring",
  "Who approves the tailoring proposed by the project manager?",
  "The project board",
  ["The team manager", "Project support", "The senior supplier alone"],
  "The project manager proposes how PRINCE2 will be tailored and the project board approves it. The decisions are recorded in the PID.",
);
mc(
  "Tailoring",
  "When should tailoring decisions be reviewed?",
  "At stage boundaries",
  [
    "Only at project closure",
    "Never, once the PID is approved",
    "Only by the business layer at the start",
  ],
  "Tailoring is reviewed at each stage boundary, as the project and its context change.",
);
mc(
  "Tailoring",
  "A project sits within a programme. What role can the programme play?",
  "It can act as the business layer for the project",
  [
    "It replaces the project board",
    "It removes the need for a business case on the project",
    "It manages the project day to day",
  ],
  "A programme or portfolio can act as the business layer, commissioning the project and setting tolerances. The project still has its own board and business case.",
);
mc(
  "Tailoring",
  "How does PRINCE2 work with agile delivery?",
  "It provides governance and control around agile working",
  [
    "PRINCE2 cannot be used alongside agile methods",
    "Agile working replaces the need for the PRINCE2 principles",
    "PRINCE2 dictates the agile techniques the team must use",
  ],
  "PRINCE2 provides the direction, management and control, while agile methods shape how the team delivers. The principles still apply.",
);

export const simulatorPoolQuestions = questions;
