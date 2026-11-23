import { createBank, examTopicModules } from "./build";

const { mc, two, questions } = createBank("fm", examTopicModules);

// Foundations (4)
mc(
  "Foundations",
  "Which is a characteristic of a project rather than business as usual?",
  "It is temporary, with a defined start and end",
  [
    "It repeats the same work on a regular cycle",
    "It is run by a single department working alone",
    "It carries little uncertainty because the work is familiar",
  ],
  "Projects are temporary: they exist to introduce a change and then close. Repeatable, familiar work run by one department describes business as usual. Projects are also cross-functional and uncertain.",
);
mc(
  "Foundations",
  "The York shop is fitted out and opens. Local customers start buying bread there each morning, and Fern & Flour's sales rise by 15%. Which of these is an outcome?",
  "Local customers buying bread from the York shop each morning",
  [
    "The fitted-out York shop with its new counter and ovens",
    "A 15% rise in Fern & Flour's total sales revenue",
    "The signed contract with the shopfitter for the fit-out",
  ],
  "An outcome is the change that results from using an output. The fitted-out shop is the output, customers buying there is the outcome, and the measurable 15% rise in sales is the benefit.",
);
mc(
  "Foundations",
  "Which performance target was added in PRINCE2 7th edition?",
  "Sustainability",
  ["Scope", "Risk", "Benefits"],
  "PRINCE2 7th edition has seven performance targets: benefits, cost, time, quality, scope, risk and sustainability. Sustainability is the new addition and is managed like the others, with targets and tolerances.",
);
two(
  "Foundations",
  "Which two statements about the five integrated elements of PRINCE2 7th edition are correct?",
  [
    "Project context shapes how the other elements are applied.",
    "The principles can be left out if the project is small.",
    "The practices are aspects of project management applied throughout the project.",
    "The processes are not used on agile projects.",
  ],
  [1, 3],
  "Project context shapes how principles, people, practices and processes are applied, and the practices are managed throughout the project. The principles always apply, and the processes are tailored rather than dropped, including on agile projects.",
);

// Principles (7)
mc(
  "Principles",
  "Which principle requires a project to have a justifiable reason to start, and for that reason to remain valid until the project closes?",
  "Ensure continued business justification",
  [
    "Manage by stages",
    "Focus on products",
    "Define roles, responsibilities and relationships",
  ],
  "Ensure continued business justification means there must be a valid reason to start the project and that the reason is checked throughout. It is recorded in the business case.",
);
mc(
  "Principles",
  "Halfway through the York fit-out, the landlord announces a rent rise that means the shop is unlikely ever to make a profit. Which principle is most at risk if the project simply carries on?",
  "Ensure continued business justification",
  [
    "Define roles, responsibilities and relationships",
    "Focus on products",
    "Learn from experience",
  ],
  "If the shop can no longer make a profit, the business case may no longer justify the project. The project board should review the business case and change direction or close the project early.",
);
mc(
  "Principles",
  "What is the purpose of the 'manage by exception' principle?",
  "To let each level act within agreed tolerances without asking the level above",
  [
    "To make the project board approve every decision the project manager takes",
    "To divide the project into management stages that are approved one at a time",
    "To record exceptions in the lessons log so they are reviewed at closure",
  ],
  "Manage by exception sets tolerances for each level of management. Each level can act freely within its tolerances and escalates only when a tolerance is forecast to be exceeded, which uses senior people's time efficiently.",
);
mc(
  "Principles",
  "Before planning any activities, the York project defines each product it will deliver and the quality each must meet. Which principle is being applied?",
  "Focus on products",
  [
    "Manage by stages",
    "Learn from experience",
    "Ensure continued business justification",
  ],
  "Focus on products means defining products and their quality requirements first, then working out the activities needed to create them. This keeps scope clear and makes acceptance easier.",
);
two(
  "Principles",
  "Which two statements about the 'learn from experience' principle are correct?",
  [
    "Lessons should be sought when starting up a project.",
    "Only the project manager is responsible for learning lessons.",
    "Lessons should be sought throughout the project and passed on at the end.",
    "A lesson is learned as soon as it is written in the lessons log.",
  ],
  [1, 3],
  "Lessons are sought at the start, during and at the end of a project, and learning is everyone's responsibility. Writing a lesson down is not enough: it is only learned when it changes what people do.",
);
mc(
  "Principles",
  "Which is a minimum requirement of the 'manage by stages' principle?",
  "There are at least two management stages: initiation and one or more",
  [
    "Every management stage must last the same length of time as the others",
    "The whole project is planned in detail before initiation starts",
    "Each stage is approved by the business layer rather than the board",
  ],
  "Every PRINCE2 project has an initiation stage and at least one further management stage. Stages can vary in length, and the project board authorises each one.",
);
mc(
  "Principles",
  "The pre-order app is a small project, so Sam, the project manager, combines several reports and keeps each management approach to a page. Which principle is Sam applying?",
  "Tailor to suit the project",
  ["Manage by exception", "Focus on products", "Learn from experience"],
  "Tailoring adapts PRINCE2 to the project's size, complexity, risk and context. Combining reports and keeping approaches short is appropriate tailoring, provided the principles are still applied.",
);

// People (5)
mc(
  "People",
  "In PRINCE2 7th edition, how does leadership differ from management?",
  "Leadership focuses on direction, motivation and trust; management focuses on planning and control",
  [
    "Leadership is needed only from the project executive; management is needed from everyone else",
    "Leadership replaces the need for plans and controls once a team is motivated",
    "Leadership is about products and quality; management is about people",
  ],
  "Management is about planning, monitoring and control, while leadership is about setting direction, motivating people and building trust. Both are needed, and leadership is needed at every level of the project.",
);
mc(
  "People",
  "What is a stakeholder?",
  "Anyone who can affect, or is affected by, the project",
  [
    "Any member of the project board",
    "Any supplier that has a contract with the project",
    "Any person or organisation that funds the project",
  ],
  "Stakeholders include anyone who can affect, or is affected by, the project, inside or outside the organisation. Board members, suppliers and funders are stakeholders, but so are customers, staff and neighbours.",
);
two(
  "People",
  "Which two statements describe effective stakeholder engagement?",
  [
    "It is complete once the project brief has been approved.",
    "It is two-way, so the project listens as well as informs.",
    "It concentrates only on the stakeholders with the most influence.",
    "It continues throughout the project, because stakeholders and their views change.",
  ],
  [2, 4],
  "Engagement is two-way and continues for the whole project, because new stakeholders appear and existing ones change their views. Low-influence stakeholders still need suitable engagement.",
);
mc(
  "People",
  "The York counter staff worry that the new pre-order app will cut their hours, and some refuse to try it. What is the best response?",
  "Involve the staff early, listen and show how the app will help them",
  [
    "Delay all communication with the staff until the app is fully live",
    "Remove the counter staff from the stakeholder analysis",
    "Ask the senior supplier to instruct the staff to use the app",
  ],
  "Resistance usually comes from worry about what the change means. Involving people early, listening and showing the benefits builds the adoption the project needs to realise its benefits.",
);
mc(
  "People",
  "Why does PRINCE2 7th edition treat organisational change as part of the people element?",
  "Benefits only arise when people adopt and use the project's outputs",
  [
    "Organisational change replaces the need for a business case",
    "Outputs create benefits automatically as soon as they are handed over",
    "The supplier is responsible for embedding the change in the business",
  ],
  "A project's outputs do not create benefits on their own. People must adopt and use them, so the transition to business as usual is planned and led by the business, represented by the senior user.",
);

// Business case (5)
mc(
  "Business case",
  "Who owns the business case?",
  "Project executive",
  ["Senior user", "Project manager", "Project assurance"],
  "The project executive owns the business case and is accountable for the project delivering value. The project manager prepares it, the senior user specifies the benefits and project assurance checks it independently.",
);
mc(
  "Business case",
  "Which role specifies the expected benefits and is accountable for demonstrating that they have been realised?",
  "Senior user",
  ["Senior supplier", "Project manager", "Change authority"],
  "The senior user represents the people who will use the products, so they specify the benefits and are accountable for showing that the benefits are realised.",
);
mc(
  "Business case",
  "When is the business case first created, in outline?",
  "In starting up a project",
  [
    "In initiating a project",
    "In managing a stage boundary",
    "In controlling a stage",
  ],
  "An outline business case is prepared in starting up a project, as part of the project brief. It is developed into the detailed business case in initiating a project and updated at each stage boundary.",
);
mc(
  "Business case",
  "What is a dis-benefit?",
  "A measurable result of an outcome that stakeholders see as negative",
  [
    "A planned benefit in the business case that has not yet been realised",
    "A threat that would reduce the expected benefits if it happened",
    "A cost increase that has gone beyond the project's cost tolerance",
  ],
  "A dis-benefit is a measurable negative result of an outcome, such as extra delivery traffic from the York shop. It has happened or will happen, unlike a threat, which is uncertain.",
);
two(
  "Business case",
  "Which two statements about the benefits management approach are correct?",
  [
    "It defines how and when the benefits will be measured.",
    "It identifies who is responsible for measuring each benefit.",
    "It is used only while the project is running.",
    "It replaces the business case once the project is authorised.",
  ],
  [1, 2],
  "The benefits management approach defines what will be measured, how, when and by whom. Many benefits are measured after the project closes, and the approach supports the business case rather than replacing it.",
);

// Organising (5)
mc(
  "Organising",
  "Which three interests must be represented on the project board?",
  "Business, user and supplier",
  [
    "Business, customer and finance",
    "User, supplier and project manager",
    "Executive, assurance and support",
  ],
  "The project board represents the business interest (project executive), the user interest (senior user) and the supplier interest (senior supplier).",
);
mc(
  "Organising",
  "Which level of organisation commissions the project and sets the project tolerances?",
  "Business layer",
  ["Directing", "Managing", "Delivering"],
  "The business layer sits outside the project management team. It commissions the project, sets project tolerances and appoints the project executive. The project board directs, the project manager manages and teams deliver.",
);
mc(
  "Organising",
  "Which two roles must not be combined?",
  "Project executive and project manager",
  [
    "Project manager and project support",
    "Project manager and team manager",
    "Project executive and senior user",
  ],
  "The project executive directs the project and the project manager manages it day to day, so combining them would remove the separation between direction and management. The other combinations are allowed.",
);
mc(
  "Organising",
  "What is the purpose of project assurance?",
  "To give the board independent confidence that the project is well run",
  [
    "To support the project manager with administration and records",
    "To check every product against its quality specification for the team",
    "To approve requests for change within the change budget",
  ],
  "Project assurance acts for the project board, independently of the project manager, to check that the project is on track and well run. Administration is project support's job and change decisions belong to the change authority.",
);
mc(
  "Organising",
  "Priya, the head baker, will run the York shop day to day once it opens. Which project board role is Priya best suited to?",
  "Senior user",
  ["Project executive", "Senior supplier", "Change authority"],
  "The senior user represents the people who will use the project's products. Priya and the York team will work in the shop every day, so Priya is well placed to specify needs and confirm the products are fit for use.",
);

// Plans (4)
mc(
  "Plans",
  "Which level of plan is optional in PRINCE2?",
  "Team plan",
  ["Project plan", "Stage plan", "Initiation stage plan"],
  "Every PRINCE2 project has a project plan and stage plans, including the initiation stage plan. Team plans are optional and are used when a team manager needs to plan the work of a work package.",
);
mc(
  "Plans",
  "What can an exception plan replace?",
  "A project plan or a stage plan",
  [
    "A team plan, but only with board approval",
    "A work package that is behind schedule",
    "The business case and its benefits",
  ],
  "An exception plan replaces the project plan or a stage plan when tolerances are forecast to be exceeded. Team plans are not replaced by exception plans.",
);
mc(
  "Plans",
  "What is the first step in product-based planning?",
  "Writing the project product description",
  [
    "Estimating the effort for each activity",
    "Scheduling the work on a timeline",
    "Agreeing the stage tolerances",
  ],
  "Product-based planning starts by describing the final product in the project product description, then breaks it down into products, writes product descriptions and creates a product flow diagram. Activities come after.",
);
mc(
  "Plans",
  "Using MoSCoW, the pre-order app team marks loyalty points as 'won't have this time'. What does this mean?",
  "They will not be delivered now but may be considered later",
  [
    "They have been rejected permanently and will never be built",
    "They must be delivered if any time is left over",
    "They are essential for the app to launch",
  ],
  "MoSCoW ranks requirements as must have, should have, could have and won't have this time. A 'won't have this time' item is out of scope for now but may return in a later release.",
);

// Quality (4)
mc(
  "Quality",
  "Where are the customer's quality expectations and acceptance criteria recorded?",
  "Project product description",
  ["Quality register", "Quality management approach", "Work package"],
  "The project product description records the customer's quality expectations and the acceptance criteria, along with who will accept the final product and how.",
);
mc(
  "Quality",
  "What is the difference between quality assurance and project assurance?",
  "Quality assurance serves the wider business; project assurance serves the board",
  [
    "Quality assurance serves the project board; project assurance serves the wider business",
    "Quality assurance checks each product; project assurance tests the specialist team's skills",
    "There is no difference; they are two names for the same activity",
  ],
  "Quality assurance gives the wider organisation confidence that the project follows its quality standards. Project assurance works on behalf of the project board. They are related but have different audiences.",
);
mc(
  "Quality",
  "In a quality review, which role assesses the product and raises questions or comments about it?",
  "Reviewer",
  ["Chair", "Presenter", "Administrator"],
  "Reviewers assess the product against its quality criteria and raise questions. The chair runs the review, the presenter represents the producers and the administrator records the results.",
);
mc(
  "Quality",
  "What does the quality register record?",
  "Planned and completed quality activities, with their results",
  [
    "The customer's quality expectations for the final product",
    "Every issue raised about the quality of a product",
    "How quality will be managed across the whole project",
  ],
  "The quality register is a record of every planned and completed quality activity, with dates and results. Quality expectations are in the project product description and the overall approach is in the quality management approach.",
);

// Risk (5)
mc(
  "Risk",
  "Which is the best-described risk for the York fit-out?",
  "Because the chiller is imported, it may be held at the port and delay the opening",
  [
    "The chiller unit has been held at the port, so the opening is now delayed",
    "Importing equipment for the shop is risky and should be avoided",
    "The opening date might be missed",
  ],
  "A well-described risk states the cause, the uncertain event and the effect. The option saying the unit has already been held up is an issue, because it has happened. The others are too vague to manage.",
);
mc(
  "Risk",
  "What does risk proximity describe?",
  "How soon a risk might occur",
  [
    "How likely a risk is to occur",
    "How close the risk owner is to the work",
    "How severe the impact would be",
  ],
  "Risks are estimated by probability, impact and proximity. Proximity is about timing, which helps decide how urgently a response is needed.",
);
mc(
  "Risk",
  "Which response can be used for an opportunity?",
  "Enhance",
  ["Avoid", "Transfer", "Prepare contingent plans"],
  "Opportunity responses are exploit, enhance, share and reject. Avoid, transfer and prepare contingent plans are threat responses. Share can be used for both.",
);
mc(
  "Risk",
  "Which role carries out a specific risk response under the direction of the risk owner?",
  "Risk actionee",
  ["Project support", "Senior supplier", "Change authority"],
  "The risk owner manages and monitors a risk. A risk actionee is assigned to carry out a particular response and reports to the risk owner.",
);
two(
  "Risk",
  "Which two statements about the risk management approach are correct?",
  [
    "It is created during initiating a project.",
    "It describes how risk will be managed on this project.",
    "It is updated daily by the team managers.",
    "It holds the details of each identified risk.",
  ],
  [1, 2],
  "The risk management approach is prepared in initiating a project and describes how risk will be managed. The details of individual risks are kept in the risk register, not the approach.",
);

// Issues (4)
mc(
  "Issues",
  "What is an off-specification?",
  "Something the project should provide but does not, or will not, provide",
  [
    "A proposal to change a product that has been baselined",
    "An uncertain event that might affect the project's objectives",
    "A change in the project's wider environment, such as new regulations",
  ],
  "An off-specification is a product that does not, or will not, meet its specification. A proposal to change a baseline is a request for change, and an uncertain event is a risk.",
);
mc(
  "Issues",
  "The shopfitter builds the York counter 20 cm shorter than its approved product description. The project board decides to accept it as it is, with no corrective action. What is this called?",
  "A concession",
  ["A request for change", "A business opportunity", "A new baseline"],
  "Accepting an off-specification without corrective action is a concession. The product is accepted even though it does not fully meet its specification.",
);
mc(
  "Issues",
  "What is the order of the PRINCE2 issue management procedure?",
  "Capture, assess, recommend, decide, implement",
  [
    "Identify, assess, plan, implement, communicate",
    "Capture, decide, assess, implement, close",
    "Assess, capture, recommend, implement, review",
  ],
  "Issues are captured, assessed, a recommendation is made, a decision is taken and the decision is implemented. Identify, assess, plan, implement and communicate is the risk management procedure.",
);
mc(
  "Issues",
  "What is the change budget used for?",
  "Paying for approved requests for change",
  [
    "Funding responses to identified risks",
    "Covering corrective action within stage tolerance",
    "Absorbing overspends on the stage plan",
  ],
  "The change budget pays for requests for change that have been approved, often by a change authority. It is separate from the risk budget, which funds risk responses.",
);

// Progress (5)
mc(
  "Progress",
  "Which report does a team manager send to the project manager at agreed intervals?",
  "Checkpoint report",
  ["Highlight report", "End stage report", "Exception report"],
  "Checkpoint reports give the project manager regular updates on a work package. Highlight reports go from the project manager to the project board.",
);
mc(
  "Progress",
  "Which tolerances does the project board set?",
  "Stage tolerances",
  [
    "Project tolerances",
    "Work package tolerances",
    "Business layer tolerances",
  ],
  "The business layer sets project tolerances, the project board sets stage tolerances and the project manager sets work package tolerances.",
);
mc(
  "Progress",
  "Sam forecasts that the current stage of the York project will finish two weeks beyond its time tolerance. What should Sam do?",
  "Escalate to the project board with an exception report",
  [
    "Take corrective action and report it at the end of the stage",
    "Ask the team manager to raise a checkpoint report",
    "Escalate the forecast directly to the business layer",
  ],
  "When a stage is forecast to exceed its tolerances, the project manager escalates to the project board with an exception report. Corrective action is only for problems within tolerance.",
);
mc(
  "Progress",
  "Which logs are created during starting up a project?",
  "Daily log and lessons log",
  [
    "Issue register and risk register",
    "Quality register and product register",
    "Risk register and lessons log",
  ],
  "The daily log and lessons log are created in starting up a project. The issue, risk, quality and product registers are created in initiating a project.",
);
mc(
  "Progress",
  "Which is a time-driven control?",
  "Highlight report",
  ["Exception report", "End stage report", "Issue report"],
  "Highlight reports are produced at regular intervals agreed with the project board, so they are time-driven. Exception, end stage and issue reports are produced when an event occurs.",
);

// Starting and initiating (5)
mc(
  "Starting and initiating",
  "What triggers starting up a project?",
  "A project mandate from the business layer",
  [
    "Approval of the project initiation documentation",
    "A request from the project manager to begin",
    "The project board authorising initiation",
  ],
  "Starting up a project is triggered by the project mandate, which comes from the business layer. Authorising initiation happens at the end of starting up.",
);
mc(
  "Starting and initiating",
  "What is the purpose of starting up a project?",
  "To check the project is viable and worthwhile before initiation",
  [
    "To produce the detailed project plan and full business case",
    "To deliver the first specialist products to the users",
    "To confirm that the users have accepted the final product",
  ],
  "Starting up a project is a short process to make sure the project is viable and worthwhile, so the project board can decide whether to authorise initiation. The detailed plan and business case come in initiation.",
);
mc(
  "Starting and initiating",
  "Which process produces the project initiation documentation (PID)?",
  "Initiating a project",
  [
    "Starting up a project",
    "Directing a project",
    "Managing a stage boundary",
  ],
  "Initiating a project assembles the PID, which brings together the business case, project plan, management approaches, controls and tailoring decisions.",
);
mc(
  "Starting and initiating",
  "Which is a project board activity in directing a project?",
  "Authorise the project",
  [
    "Authorise a work package",
    "Accept a work package",
    "Plan the initiation stage",
  ],
  "Directing a project includes authorising initiation, authorising the project, authorising stages or exception plans, giving ad hoc direction and authorising closure. Work packages are authorised by the project manager.",
);
two(
  "Starting and initiating",
  "Which two statements about initiating a project are correct?",
  [
    "It produces the project brief.",
    "It establishes solid foundations before major investment.",
    "It hands over the products to the users.",
    "It prepares the management approaches and the project plan.",
  ],
  [2, 4],
  "Initiating a project sets solid foundations, preparing the management approaches, project plan, controls and full business case. The project brief comes from starting up, and handover happens in closing.",
);

// Delivering and closing (5)
mc(
  "Delivering and closing",
  "Which process is carried out by team managers?",
  "Managing product delivery",
  [
    "Controlling a stage",
    "Managing a stage boundary",
    "Directing a project",
  ],
  "Managing product delivery is the team manager's process: accept, execute and deliver a work package. Controlling a stage and managing a stage boundary belong to the project manager.",
);
mc(
  "Delivering and closing",
  "Which is an activity in controlling a stage?",
  "Authorise a work package",
  [
    "Accept a work package",
    "Authorise a stage or exception plan",
    "Plan the initiation stage",
  ],
  "In controlling a stage, the project manager authorises work packages, reviews progress, reports highlights and handles issues and risks. Accepting a work package is a team manager activity.",
);
mc(
  "Delivering and closing",
  "When does managing a stage boundary take place?",
  "Near the end of every stage except the last, and for exception plans",
  [
    "Only at the end of the initiation stage, before delivery begins",
    "At the end of every stage, including the final delivery stage",
    "Only when a stage is forecast to exceed one of its tolerances",
  ],
  "Managing a stage boundary prepares the board to decide on the next stage, so it happens near the end of each stage except the last. It is also used to produce an exception plan.",
);
mc(
  "Delivering and closing",
  "Fern & Flour's directors decide to stop the pre-order app project because a delivery partner now offers the same service. What should happen?",
  "Close the project early, keeping useful work and recording lessons",
  [
    "Carry on, so that the money already spent is not wasted",
    "Ask Sam to create an exception plan to finish building the app",
    "Stop work straight away, with no closure activities at all",
  ],
  "When a project is no longer justified, the board can request premature closure. Closing a project still runs, so useful products are saved, the situation is evaluated and lessons are passed on.",
);
mc(
  "Delivering and closing",
  "Who is responsible for measuring benefits that are realised after the project has closed?",
  "The business layer",
  ["The project manager", "Project support", "The team manager"],
  "Many benefits appear after closure, when the project management team has been disbanded. The business layer tracks them, as set out in the benefits management approach.",
);

// Tailoring (2)
mc(
  "Tailoring",
  "Which part of PRINCE2 cannot be tailored?",
  "The principles",
  ["The processes", "The management products", "The roles"],
  "Processes, practices, roles, management products and terminology can all be tailored. The seven principles always apply; if any is missing, the project is not using PRINCE2.",
);
mc(
  "Tailoring",
  "Where are a project's tailoring decisions recorded?",
  "Project initiation documentation",
  ["Project product description", "Project mandate", "Checkpoint report"],
  "Tailoring decisions are recorded in the PID so everyone knows how PRINCE2 is being applied. They are reviewed at stage boundaries.",
);

export const foundationMockQuestions = questions;
