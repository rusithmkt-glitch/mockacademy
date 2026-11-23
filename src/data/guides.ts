export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
  updated: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const guides: Guide[] = [
  {
    slug: "free-prince2-foundation-mock-exam",
    title: "Free PRINCE2 7th edition Foundation mock exams",
    metaTitle: "Free PRINCE2 Foundation Mock Exam (7th Edition)",
    description:
      "Sit a free PRINCE2 7th edition Foundation mock exam: 60 questions, 60 minutes, 60% pass mark. A fixed paper to track progress plus a random exam simulator.",
    intro: [
      "The fastest way to find out whether you are ready for the PRINCE2 Foundation exam is to sit a full paper under exam conditions. Reading feels productive; a timed mock tells you the truth.",
      "MockAcademy offers two free papers built around the PRINCE2 7th edition Foundation syllabus, plus an open-book Practitioner paper built around a project scenario. No payment, no trial, no card — just create a free account and start.",
    ],
    sections: [
      {
        heading: "The two papers, and when to use each",
        paragraphs: [
          "The Foundation Mock Exam is a fixed 60-question paper. The questions stay the same on every attempt, so your score works like a benchmark: sit it early for a baseline, then retake it after studying to measure real progress.",
          "The Foundation Exam Simulator draws 60 questions at random from a bank of 120 on every attempt. You cannot pass it from memory, which makes it the closer check of exam readiness in your final weeks.",
        ],
        bullets: [
          "Foundation papers: 60 multiple-choice questions, 60 minutes, 60% to pass, closed book. The Practitioner paper is 56 items worth 68 marks in 2 hours 30, open book, pass at 38 marks.",
          "Questions are original practice items written around the 7th edition syllabus — not copies of live exam questions.",
          "Answers save as you go, the timer runs on the server, and scoring happens securely after you submit.",
        ],
      },
      {
        heading: "How to get the most out of a mock",
        paragraphs: [
          "Treat the first attempt like the real thing: one sitting, no notes, no pausing. A comfortable open-book score tells you very little about exam day.",
          "Afterwards, the review is where the learning happens. Every question comes with an explanation, and your result breaks down by syllabus topic so you know exactly where to study next.",
        ],
        bullets: [
          "Note the topic behind each wrong answer, not just the correct letter.",
          "Study the weak topics in the free course, then retake the fixed paper to check they moved.",
          "Finish with simulator attempts — fresh questions every time prove the knowledge stuck.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the mock exam really free?",
        answer:
          "Yes. Every paper — Foundation and Practitioner — is free with a MockAcademy account, which is also free. There is no card requirement and no trial period.",
      },
      {
        question: "Are these real PeopleCert exam questions?",
        answer:
          "No. Every question is an original practice item written around the PRINCE2 7th edition Foundation syllabus. Real exam items are confidential and are never published.",
      },
      {
        question: "How many attempts do I get?",
        answer:
          "The fixed mock exam allows three attempts so your benchmark stays meaningful. The simulator allows ten, each with a full answer review.",
      },
    ],
    updated: "2026-11-17",
    primaryCta: { label: "Sit a free mock exam", href: "/mock-exams" },
    secondaryCta: { label: "Browse the free course", href: "/learning/prince2-foundation" },
  },
  {
    slug: "prince2-foundation-exam-format-pass-mark",
    title: "PRINCE2 Foundation exam format and pass mark (7th edition)",
    metaTitle: "PRINCE2 Foundation Exam Format & Pass Mark (7th Ed)",
    description:
      "PRINCE2 7th edition Foundation exam: 60 multiple-choice questions, 60 minutes, 36 marks to pass (60%), closed book. Format, rules and how to prepare.",
    intro: [
      "Before you book the PRINCE2 Foundation exam, know exactly what you are walking into. The 7th edition Foundation paper is short, sharp and entirely multiple choice — there are no essays and no trick formats.",
      "Here is the shape of the paper, and what each rule means for your preparation.",
    ],
    sections: [
      {
        heading: "The paper at a glance",
        paragraphs: [
          "The Foundation exam is a one-hour, closed-book paper of 60 multiple-choice questions. Each question is worth one mark, and you need 36 of 60 — 60% — to pass. There is no negative marking, so never leave a question blank.",
        ],
        bullets: [
          "60 questions, each with four options and one correct answer.",
          "60 minutes — one minute per question on average.",
          "Pass mark: 36 correct (60%).",
          "Closed book: no manual, no notes.",
          "Question styles include classic single-answer, negative phrasing (\"which is NOT…\"), and list questions (\"which two statements are correct?\").",
        ],
      },
      {
        heading: "What the 60% pass mark really demands",
        paragraphs: [
          "Sixty percent sounds gentle, but the syllabus is broad: principles, people, practices, processes and project context all appear. Candidates who fail usually do so because whole topics were skipped, not because the questions were obscure.",
          "Aim to score comfortably above the threshold in practice — around 70–75% on fresh questions — so exam-day nerves have room to cost you a few marks without costing you the pass.",
        ],
      },
      {
        heading: "Time management on the day",
        paragraphs: [
          "One minute per question is enough if you work in passes. Answer everything you know immediately, flag anything that needs thought, and return to the flagged questions with your remaining time.",
          "Do not spend four minutes wrestling one question while three easy ones sit unanswered at the end of the paper. Every mark is worth the same.",
        ],
        bullets: [
          "First pass: answer the questions you know cold.",
          "Second pass: work through your flagged questions.",
          "Final minutes: guess anything still blank — there is no penalty.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the PRINCE2 Foundation exam open book?",
        answer:
          "No. Foundation is closed book. The Practitioner exam is the one that allows the manual.",
      },
      {
        question: "How much does the exam cost?",
        answer:
          "PeopleCert sets the exam fee and it varies by region and booking route, often bundled with training. Check the current price with PeopleCert or an accredited training provider before booking. MockAcademy's practice papers are free.",
      },
      {
        question: "Do I need experience or prerequisites?",
        answer:
          "No. Foundation has no prerequisites — you do not need project management experience or prior qualifications to sit it.",
      },
    ],
    updated: "2026-11-17",
    primaryCta: { label: "Practise under exam conditions", href: "/mock-exams" },
    secondaryCta: { label: "Learn the syllabus free", href: "/learning/prince2-foundation" },
  },
  {
    slug: "prince2-7-principles-explained",
    title: "The seven PRINCE2 principles, explained simply",
    metaTitle: "The 7 PRINCE2 Principles Explained (7th Edition)",
    description:
      "The seven principles of PRINCE2 7th edition explained in plain English with a bakery example: justification, experience, roles, stages, exception, products, tailoring.",
    intro: [
      "The seven principles are the backbone of PRINCE2. Practices can be adjusted and processes can be scaled, but a project is only \"PRINCE2\" if all seven principles are applied. Learn these properly and much of the syllabus falls into place.",
      "To keep them concrete, imagine Fern & Flour, a Leeds bakery opening a second shop in York. Every principle below is applied to that one project.",
    ],
    sections: [
      {
        heading: "1. Continued business justification",
        paragraphs: [
          "There must be a justifiable reason to start the project — and that reason must stay valid throughout. Fern & Flour's business case is the projected profit from the York shop. If a competitor opens next door and the numbers stop working, the project should change or stop, not coast on momentum.",
        ],
      },
      {
        heading: "2. Learn from experience",
        paragraphs: [
          "Lessons are sought at the start, captured throughout and passed on at the end. The team reads the lessons log from the Leeds fit-out before planning York, so the same supplier mistakes are not repeated.",
        ],
      },
      {
        heading: "3. Defined roles and responsibilities",
        paragraphs: [
          "Everyone knows who decides, who does the work and who is consulted. The project board represents business, user and supplier interests; the project manager runs day-to-day work. One person can hold several roles, but every responsibility must be covered.",
        ],
      },
      {
        heading: "4. Manage by stages",
        paragraphs: [
          "The project is broken into management stages, each ending with a board decision to continue. York might run as an initiation stage, a fit-out stage and a launch stage. The board commits serious money one stage at a time, not all at once.",
        ],
      },
      {
        heading: "5. Manage by exception",
        paragraphs: [
          "Each level sets tolerances for the level below and only intervenes when a tolerance is forecast to be breached. If the fit-out is within its time and cost tolerances, the board leaves the project manager alone. If the chiller delivery slips past tolerance, it escalates.",
        ],
      },
      {
        heading: "6. Focus on products",
        paragraphs: [
          "PRINCE2 plans around what will be delivered, not just activities. \"A tested till system that meets the agreed quality criteria\" is a product; \"installing stuff\" is not. Agreeing products first defines scope and prevents surprises.",
        ],
      },
      {
        heading: "7. Tailor to suit the project",
        paragraphs: [
          "The method scales to the project's size, risk and context. A two-person bakery project uses the same seven principles as a rail programme — with lighter documents, combined roles and shorter stages. Tailoring is applying PRINCE2 sensibly, not skipping it.",
        ],
      },
    ],
    faq: [
      {
        question: "Did the principles change in the 7th edition?",
        answer:
          "The seven principles carry over from earlier editions with updated wording — for example, tailoring is expressed as \"tailor to suit the project\". The 7th edition also adds people as a central element and sustainability as a performance target.",
      },
      {
        question: "Can a project drop a principle if it is small?",
        answer:
          "No. All seven principles are universal. A small project tailors how they are applied — lighter documents, combined roles — but never removes them.",
      },
    ],
    updated: "2026-11-17",
    primaryCta: { label: "Study the principles free", href: "/learning/prince2-foundation/principles/continued-business-justification" },
    secondaryCta: { label: "Test yourself with a mock exam", href: "/mock-exams" },
  },
  {
    slug: "how-to-pass-prince2-foundation",
    title: "How to pass PRINCE2 Foundation: a four-week study plan",
    metaTitle: "How to Pass PRINCE2 Foundation — 4-Week Study Plan",
    description:
      "A practical four-week plan to pass PRINCE2 7th edition Foundation: baseline mock, targeted study, answer review and exam-condition simulations. Free resources.",
    intro: [
      "Most people can pass PRINCE2 Foundation with three to four weeks of focused part-time study. The trap is spending all of it reading and none of it testing yourself — the exam rewards recall and precision, not familiarity.",
      "This plan assumes about an hour on weekdays and a longer session at the weekend. All of the resources in it are free on MockAcademy.",
    ],
    sections: [
      {
        heading: "Week 1 — baseline and foundations",
        paragraphs: [
          "Start by sitting the fixed Foundation mock exam before you feel ready. The score will sting, and that is the point: it shows you the shape of the exam and your weakest topics from day one.",
          "Then study the foundations and principles modules. Everything else in PRINCE2 hangs off the seven principles, so time spent here pays back everywhere.",
        ],
      },
      {
        heading: "Week 2 — the practices",
        paragraphs: [
          "Work through the seven practices: business case, organising, plans, quality, risk, issues and progress. These carry the largest share of exam questions.",
          "After each session, do its knowledge check immediately — retrieval right after learning is what makes it stick. Note every miss in a running list of weak spots.",
        ],
      },
      {
        heading: "Week 3 — processes, people and your weak spots",
        paragraphs: [
          "Cover the seven processes from starting up to closing, plus the people element. Then revisit your weak-spot list with the matching lessons.",
          "Retake the fixed mock exam at the end of the week. Your score should have moved substantially; any topic still below 60% gets priority in week 4.",
        ],
      },
      {
        heading: "Week 4 — exam-condition simulations",
        paragraphs: [
          "Switch to the exam simulator, which draws a fresh paper every attempt. Sit at least two full attempts under real conditions: one sitting, closed book, timer running.",
          "Review every wrong answer's explanation, refresh the matching lesson, and stop studying new material two days before the exam. Arrive rested, not crammed.",
        ],
        bullets: [
          "Target 70–75% on fresh simulator papers before booking confidence.",
          "Practise the flag-and-return technique so time management is automatic.",
          "Re-read the seven principles the night before — they anchor dozens of questions.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I pass in one week?",
        answer:
          "Some do, usually with prior project experience and full-time study. If you are new to PRINCE2, three to four focused weeks is a far safer bet than one panicked one.",
      },
      {
        question: "Do I need to buy a training course?",
        answer:
          "No. Foundation has no mandatory training requirement — you can self-study and book the exam directly. A structured free course plus timed mock exams covers what the paper tests.",
      },
    ],
    updated: "2026-11-17",
    primaryCta: { label: "Start the free course", href: "/learning/prince2-foundation" },
    secondaryCta: { label: "Take your baseline mock", href: "/mock-exams" },
  },
  {
    slug: "prince2-foundation-vs-practitioner",
    title: "PRINCE2 Foundation vs Practitioner: which should you take?",
    metaTitle: "PRINCE2 Foundation vs Practitioner (7th Edition)",
    description:
      "PRINCE2 Foundation vs Practitioner compared: exam format, difficulty, prerequisites, cost and career value. Which certification to take first, and why.",
    intro: [
      "PRINCE2 has two certification levels. Foundation proves you know the method; Practitioner proves you can apply it to a realistic project scenario. They test different things, and the order is fixed: Foundation comes first.",
      "Here is how they differ, and how to decide what you actually need.",
    ],
    sections: [
      {
        heading: "Foundation: knowledge of the method",
        paragraphs: [
          "Foundation is a one-hour, closed-book paper of 60 multiple-choice questions with a 60% pass mark. It tests whether you understand the terminology, principles, practices and processes of PRINCE2 7th edition.",
          "There are no prerequisites. It suits people entering project work, preparing for a first project role, or adding a recognised certification to a CV.",
        ],
      },
      {
        heading: "Practitioner: applying the method",
        paragraphs: [
          "Practitioner is a longer, scenario-based exam that is open book (the manual is allowed). It gives you a fictional project and asks how PRINCE2 should be applied and tailored to it — judgement, not just recall.",
          "You must hold Foundation (or an accepted equivalent qualification) before sitting Practitioner. It suits people who will actually run or work within PRINCE2 projects.",
        ],
      },
      {
        heading: "Which one do you need?",
        paragraphs: [
          "If you are starting out or job-hunting, Foundation is the sensible first step: it is quicker to prepare for, cheaper, and it is the certificate most entry-level job ads name.",
          "If your employer runs PRINCE2 projects and you will manage work inside them, plan for Practitioner after Foundation. Many training providers sell them as a bundle; self-studiers can take them one at a time.",
        ],
        bullets: [
          "Foundation first — it is the prerequisite for Practitioner.",
          "Foundation: closed book, recall. Practitioner: open book, application.",
          "Check current exam fees and rules with PeopleCert before booking.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I skip Foundation and go straight to Practitioner?",
        answer:
          "Not without an accepted prior qualification. Foundation (or an equivalent recognised by PeopleCert) is required before Practitioner.",
      },
      {
        question: "Does Foundation expire?",
        answer:
          "Under PeopleCert's current certification rules, Foundation no longer has a renewal requirement, while Practitioner carries ongoing renewal requirements. Rules change — confirm the current position with PeopleCert.",
      },
    ],
    updated: "2026-11-17",
    primaryCta: { label: "Prepare for Foundation free", href: "/learning/prince2-foundation" },
    secondaryCta: { label: "Try a Foundation mock exam", href: "/mock-exams" },
  },
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
