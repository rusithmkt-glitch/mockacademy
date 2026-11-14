import type { CourseModule } from "../types";

export const peopleModule: CourseModule = {
  id: "m2",
  slug: "people",
  order: 2,
  title: "People in projects",
  shortTitle: "People",
  tagline: "Leadership, communication and the human side of delivery.",
  description:
    "Projects are delivered by people. Learn how to lead teams, engage stakeholders and support the changes your project creates.",
  scene: "people",
  sessions: [
    {
      id: "m2-s1",
      slug: "leading-successful-teams",
      title: "Leading successful teams",
      summary:
        "What effective leadership looks like in a project and how to build a team that takes ownership.",
      durationMinutes: 15,
      objectives: [
        "Distinguish leadership from management",
        "Describe how teams develop over the life of a project",
        "Identify ways a project manager can build trust and ownership",
      ],
      sections: [
        {
          id: "m2-s1-1",
          heading: "Leadership is not the same as management",
          paragraphs: [
            "Management focuses on planning, monitoring and controlling work. Leadership focuses on direction, motivation and helping people perform at their best. A project manager needs both: processes provide control, while leadership turns a group of individuals into a team that owns the outcome.",
            "PRINCE2 places people alongside principles, practices and processes because delivery depends on how people behave, communicate and respond to change. Clear roles and responsibilities are necessary, but they are not sufficient on their own.",
          ],
        },
        {
          id: "m2-s1-2",
          heading: "Teams develop over time",
          paragraphs: [
            "Teams rarely perform at their best immediately. They move through stages of forming, storming, norming and performing, and membership may change during a project. A project manager who understands this can set expectations early, surface conflict constructively and give the team increasing autonomy as confidence grows.",
            "Practical leadership behaviours include setting a clear vision, agreeing how the team will work, recognising progress, removing blockers and modelling the standards expected. These behaviours are especially important in temporary organisations where relationships are built quickly.",
          ],
          callout: {
            tone: "tip",
            title: "In the exam",
            body: "When a question describes low morale or unclear direction, look for the leadership response rather than a heavier reporting mechanism.",
          },
        },
        {
          id: "m2-s1-3",
          heading: "Ownership beats compliance",
          paragraphs: [
            "A team that merely follows instructions will deliver what was asked, not necessarily what is needed. Ownership grows when people understand the purpose of the project, have the information and authority to act, and see how their work contributes to the business case.",
            "Combining clear roles with genuine involvement is central to the people element of PRINCE2. Control and empowerment are not opposites; they are complementary when tolerances and decision rights are clear.",
          ],
        },
      ],
      keyPoints: [
        "Project managers need both management control and people leadership.",
        "Teams develop through predictable stages and need different support at each.",
        "Clear purpose and delegated authority build ownership.",
      ],
      knowledgeCheck: {
        id: "m2-s1-kc",
        question:
          "Which behaviour best demonstrates project leadership rather than task management?",
        options: [
          "Updating the risk register every Friday.",
          "Setting a clear vision and helping the team resolve blockers.",
          "Requiring written approval for every team decision.",
          "Producing a more detailed stage plan.",
        ],
        correctOption: 1,
        explanation:
          "Leadership is about direction, motivation and enabling the team. The other options are primarily management or control activities.",
      },
    },
    {
      id: "m2-s2",
      slug: "stakeholders-and-communication",
      title: "Stakeholders and communication",
      summary:
        "Identify the people who can influence the project, then plan communication that actually reaches them.",
      durationMinutes: 14,
      objectives: [
        "Explain why stakeholder analysis matters",
        "Describe the purpose of the communication management approach",
        "Choose appropriate communication for different audiences",
      ],
      sections: [
        {
          id: "m2-s2-1",
          heading: "Know who matters",
          paragraphs: [
            "Stakeholders are anyone with an interest in, or influence over, the project: customers, users, suppliers, senior managers, operational teams and regulators. Early identification helps the project understand expectations, surface resistance and avoid surprises later.",
            "Stakeholder analysis goes beyond a list of names. It considers interest, influence, attitude and what each group needs from the project. This informs how and when to engage them, and who is best placed to do so.",
          ],
        },
        {
          id: "m2-s2-2",
          heading: "Plan communication deliberately",
          paragraphs: [
            "The communication management approach sets out who needs what information, when, in what format, and who is responsible for providing it. It is more than a schedule of meetings: it is a plan for building understanding and maintaining support.",
            "Communication should be two-way. Listening to concerns and responding to feedback is often more valuable than broadcasting status updates. The project board also needs concise, decision-focused information, while delivery teams may need detailed operational detail.",
          ],
          callout: {
            tone: "note",
            title: "Think audience first",
            body: "A highlight report for the board and a daily stand-up for the team serve different purposes. Match the channel and level of detail to the audience.",
          },
        },
      ],
      keyPoints: [
        "Stakeholder analysis considers interest, influence and attitude.",
        "The communication management approach defines who gets what, when and how.",
        "Effective communication is two-way and audience-specific.",
      ],
      knowledgeCheck: {
        id: "m2-s2-kc",
        question:
          "What is the main purpose of the communication management approach?",
        options: [
          "To record every email sent on the project.",
          "To define who needs what information, when and how.",
          "To replace the need for stakeholder engagement.",
          "To list the project's reporting lines only.",
        ],
        correctOption: 1,
        explanation:
          "It defines the communication needs of stakeholders and how the project will meet them. It does not replace engagement or merely record messages.",
      },
    },
    {
      id: "m2-s3",
      slug: "culture-and-change",
      title: "Culture and change",
      summary:
        "Why the same project can succeed in one organisation and stall in another — and what you can influence.",
      durationMinutes: 13,
      objectives: [
        "Explain how organisational culture affects a project",
        "Describe the difference between delivering outputs and achieving adoption",
        "Identify actions that support organisational change",
      ],
      sections: [
        {
          id: "m2-s3-1",
          heading: "Culture shapes behaviour",
          paragraphs: [
            "Organisational culture is the set of shared values, norms and behaviours that determine how work really gets done. A project that relies on collaboration may struggle in a culture of siloed decision-making; a highly formal governance model may frustrate a fast-moving, innovative team.",
            "PRINCE2 does not prescribe a culture, but it expects the project to work within the organisation's context. Understanding culture helps the project manager choose realistic ways of working and anticipate resistance.",
          ],
        },
        {
          id: "m2-s3-2",
          heading: "Delivery is not adoption",
          paragraphs: [
            "A project can deliver exactly what was specified and still fail if people do not use the new product or service. Adoption depends on awareness, capability, motivation and support after handover.",
            "Project teams should consider organisational change management from the outset: who will be affected, what will change for them, what support they need, and how readiness will be assessed. These considerations belong in the business case and the benefits management approach, not in a final-week communications burst.",
          ],
        },
      ],
      keyPoints: [
        "Culture influences how a project should be governed and run.",
        "Outputs must be adopted before outcomes and benefits can be achieved.",
        "Change management should start early and be reflected in the business case.",
      ],
      knowledgeCheck: {
        id: "m2-s3-kc",
        question:
          "A project delivers its new system on time, but staff continue using the old process. What is the most likely gap?",
        options: [
          "The product was not defined in enough detail.",
          "The project failed to plan for adoption and organisational change.",
          "The project board met too frequently.",
          "The stage plan was not product-based.",
        ],
        correctOption: 1,
        explanation:
          "Delivery alone does not create benefits. Adoption and change support are needed for the organisation to realise the intended outcomes.",
      },
    },
  ],
};
