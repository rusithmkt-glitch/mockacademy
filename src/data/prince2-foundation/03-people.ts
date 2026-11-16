import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const peopleModule: CourseModule = {
  id: "m3",
  slug: "people",
  order: 3,
  title: "People: leading and working together",
  shortTitle: "People",
  tagline: "Projects are delivered by people, for people. This is how you lead them.",
  description:
    "PRINCE2 7th edition puts people at the centre of every project. You'll see how leadership, teams, stakeholders, communication and culture decide whether Fern & Flour's York shop really succeeds.",
  scene: "people",
  sessions: [
    {
      id: "people/why-people-matter",
      slug: "why-people-matter",
      title: "Why people matter",
      summary:
        "Why PRINCE2 7th edition treats people as one of its five integrated elements, and what that means for your project.",
      durationMinutes: 12,
      objectives: [
        "Explain why people are one of the five integrated elements",
        "Describe the main themes the people element covers",
        "Recognise that products only create benefits when people use them",
      ],
      sections: [
        {
          id: "m3-s1-1",
          paragraphs: [
            "It's time to look at the element that makes everything else work: people.",
            "Let's say the York shop opens on time and on budget. The ovens are perfect, the counter is exactly 95cm high and the chiller holds 1–5°C. But three weeks later, sales are half the forecast and two of your new staff have already quit.",
          ],
          scenario: {
            question: "Was the project a success?",
            steps: [
              {
                title: "The products are fine",
                body: "Everything you asked the builder and shopfitter for has been delivered. On paper, the project did its job.",
              },
              {
                title: "The people side wasn't",
                body: "Nobody trained the York team on the new till. The staff who moved from Leeds felt they weren't asked. Your Leeds regulars never heard that York had opened.",
              },
              {
                title: "So the benefits didn't arrive",
                body: "The **£4,000 a week** of extra sales depends on people: staff who run the shop well and customers who choose to come in.",
              },
              {
                title: "That's the idea",
                body: "A project's products only create value when **people use them**. That's why PRINCE2 7th edition treats people as a core part of the method, not an afterthought.",
              },
            ],
          },
        },
        {
          id: "m3-s1-2",
          heading: "One of five integrated elements",
          paragraphs: [
            "In Module 1 you met the five integrated elements: **principles**, **people**, **practices**, **processes** and the **project context**. People was added as a named element in PRINCE2 7th edition to make a simple point: methods don't deliver projects, people do.",
            "The word *integrated* matters. People isn't a separate checklist you complete once. It runs through every principle, practice and process. Every decision is made, every plan is written and every product is built by someone.",
          ],
        },
        {
          id: "m3-s1-3",
          heading: "What the people element covers",
          paragraphs: [
            "Across this module, you'll work through the main themes of the people element:",
          ],
          bullets: [
            "**Leadership**: setting direction and getting people to follow it, at every level of the project",
            "**Teams**: turning people from different organisations into a group that works well together",
            "**Stakeholders**: everyone who affects, or is affected by, the project",
            "**Communication**: getting the right message to the right people, and listening back",
            "**Culture**: the shared habits and values that shape how people behave",
            "**Organisational change**: helping people adopt new ways of working so the benefits arrive",
          ],
        },
        {
          id: "m3-s1-4",
          heading: "Roles are only half the story",
          paragraphs: [
            "You've already seen that PRINCE2 defines clear **roles**, such as the project executive and the project manager. You'll look at them in detail in the Organising module.",
            "But a role description doesn't tell you how to motivate a tired team in week 10, or how to calm a landlord who's unhappy about the noise. That's what the people element is for. Roles say *who decides*; the people element is about *how people work together*.",
          ],
          callout: {
            tone: "tip",
            title: "A simple way to think about it",
            body: "The **Organising** practice gives you the structure. The **people** element is how you bring that structure to life.",
          },
        },
        {
          id: "m3-s1-5",
          heading: "People and change",
          paragraphs: [
            "Every project changes something for someone. For York, staff get new routines, Leeds loses some of Priya's time and customers find a new place to buy their bread.",
            "PRINCE2 7th edition stresses that delivering outputs isn't enough. The project should help people **adopt** the change, because that's where the outcomes and benefits come from.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Remember that **people** is one of the **five integrated elements**, alongside principles, practices, processes and project context. Expect questions on why people matter: products only lead to benefits when people use them.",
          },
        },
      ],
      keyPoints: [
        "People is one of the five integrated elements of PRINCE2 7th edition.",
        "It covers leadership, teams, stakeholders, communication, culture and organisational change.",
        "Roles define who decides; the people element is about how people work together.",
        "Products only create benefits when people adopt and use them.",
      ],
      knowledgeCheck: {
        id: "m3-s1-kc",
        question:
          "The York shop is delivered perfectly, but staff weren't trained and customers weren't told. Sales are low. What does this show?",
        options: [
          "The builder should have been held responsible",
          "The business case was written incorrectly",
          "Products only create benefits when people adopt and use them",
          "The project should have had more stages",
        ],
        correctOption: 2,
        explanation:
          "The outputs were fine, but the benefits depend on people. That's why PRINCE2 7th edition treats people as a core integrated element.",
      },
      assessment: [
        {
          id: "m3-s1-a1",
          type: "single",
          prompt: "Which of these is one of the five integrated elements of PRINCE2 7th edition?",
          options: [
            { id: "a", label: "Stakeholders" },
            { id: "b", label: "People" },
            { id: "c", label: "Leadership" },
            { id: "d", label: "Teams" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The five integrated elements are principles, people, practices, processes and project context. Leadership, teams and stakeholders are themes within the people element.",
          topic: "People",
        },
        {
          id: "m3-s1-a2",
          type: "boolean",
          prompt:
            "The people element only applies during the processes, not to the principles or practices.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "The elements are integrated. People runs through every principle, practice and process.",
          topic: "People",
        },
        {
          id: "m3-s1-a3",
          type: "multiple",
          prompt: "Which TWO are themes of the people element?",
          options: [
            { id: "a", label: "Stakeholder engagement" },
            { id: "b", label: "Investment appraisal" },
            { id: "c", label: "Leading organisational change" },
            { id: "d", label: "Product flow diagrams" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Stakeholder engagement and organisational change are people themes. Investment appraisal belongs to the business case, and product flow diagrams to planning.",
          topic: "People",
        },
        {
          id: "m3-s1-a4",
          type: "single",
          prompt: "How does the people element relate to the roles defined in PRINCE2?",
          options: [
            { id: "a", label: "It replaces the roles with informal teams" },
            { id: "b", label: "Roles define who decides; the people element covers how people work together" },
            { id: "c", label: "It only applies to the project board" },
            { id: "d", label: "It's only relevant to suppliers" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Roles give the structure of authority. The people element covers leadership, teamwork, engagement and culture that make the structure work.",
          topic: "People",
        },
      ],
    },
    {
      id: "people/leadership",
      slug: "leadership",
      title: "Leading the project",
      summary:
        "The difference between leading and managing, and how leadership works when the people you rely on don't report to you.",
      durationMinutes: 14,
      objectives: [
        "Distinguish leadership from management",
        "Explain why leadership is needed at every level of a project",
        "Describe how to lead across organisational boundaries",
      ],
      sections: [
        {
          id: "m3-s2-1",
          paragraphs: [
            "It's time to look at leadership, and why a good plan isn't enough on its own.",
            "Let's say it's week 6. Mistry Build's crew are behind, Oakline's fitters are waiting to start, and both firms blame each other. Sam is the project manager, but neither firm's staff report to Sam.",
          ],
          scenario: {
            question: "How can Sam get things moving?",
            steps: [
              {
                title: "Orders won't work",
                body: "Sam can't tell Mistry Build's crew what to do. They work for Dev, not for Fern & Flour. Shouting louder won't help.",
              },
              {
                title: "Bring them together",
                body: "Sam gets the site foreman and Kit from Oakline in the same room, with the plan on the table. What does each team need from the other?",
              },
              {
                title: "Agree a shared goal",
                body: "Both firms want the shop open by 1 December. They agree a new handover date for the shop floor and a daily ten-minute catch-up on site.",
              },
              {
                title: "That's the idea",
                body: "**Leadership** is about influence, not just authority. Sam leads people who don't report to Sam by building trust and a **shared purpose**.",
              },
            ],
          },
        },
        {
          id: "m3-s2-2",
          heading: "Leading and managing",
          paragraphs: [
            "Management and leadership overlap, but they're not the same thing.",
          ],
          bullets: [
            "**Management** is about planning, organising and controlling: making sure the work is done properly, on time and within budget",
            "**Leadership** is about direction and people: setting a vision, motivating, building trust and helping people through uncertainty",
          ],
          callout: {
            tone: "tip",
            title: "You need both",
            body: "A well-managed project with no leadership feels like box-ticking. A well-led project with no management feels exciting until the money runs out.",
          },
        },
        {
          id: "m3-s2-3",
          heading: "Leadership at every level",
          paragraphs: [
            "Leadership isn't only the project manager's job. Each level of the project needs it:",
          ],
          bullets: [
            "**You, as project executive**, lead by setting the direction and keeping the project tied to the reasons for doing it",
            "**Sam, as project manager**, leads day to day, keeps everyone focused on the stage plan and clears problems out of the way",
            "**The team managers**, such as the site foreman and Kit, lead their own teams through the detailed work",
          ],
        },
        {
          id: "m3-s2-4",
          heading: "Leading across boundaries",
          paragraphs: [
            "Most projects bring together people from different organisations. On York, that's your bakery staff, Mistry Build, Oakline Shopfitting and, later, Pixel & Pine for the app.",
            "When people don't report to you, you lead through influence. That means clear agreements about who does what, regular honest conversations, a shared goal everyone cares about, and keeping your promises so people trust you.",
          ],
        },
        {
          id: "m3-s2-5",
          heading: "Adapting your style",
          paragraphs: [
            "There's no single right leadership style. A brand-new Saturday assistant needs clear instructions. Priya, with 15 years of baking experience, needs to be trusted to get on with it.",
            "Good leaders read the situation and the person, and adjust. They're more directive in a crisis, such as the damp discovery, and more hands-off when the team is confident and things are running well.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Expect the idea that leadership is needed **at all levels** of a project, and that project managers often lead people **outside their line authority**, across organisational boundaries.",
          },
        },
      ],
      keyPoints: [
        "Management is about planning and control; leadership is about direction, motivation and trust.",
        "Leadership is needed at every level: executive, project manager and team managers.",
        "Project managers often lead people they have no line authority over.",
        "Good leaders adapt their style to the person and the situation.",
      ],
      knowledgeCheck: {
        id: "m3-s2-kc",
        question:
          "Sam needs Mistry Build and Oakline to work together, but neither firm reports to Sam. What's the best approach?",
        options: [
          "Ask you to sack one of the suppliers",
          "Build a shared goal and clear agreements through influence and trust",
          "Wait for the problem to solve itself",
          "Stop the project until the firms agree",
        ],
        correctOption: 1,
        explanation:
          "Leading across organisational boundaries relies on influence, shared purpose and clear agreements rather than formal authority.",
      },
      assessment: [
        {
          id: "m3-s2-a1",
          type: "single",
          prompt: "Which activity is most clearly an act of leadership rather than management?",
          options: [
            { id: "a", label: "Updating the stage plan with actual costs" },
            { id: "b", label: "Motivating a tired team around a shared goal" },
            { id: "c", label: "Recording a risk in the risk register" },
            { id: "d", label: "Checking a delivery against the order" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Motivation and shared purpose are leadership. The others are management activities.",
          topic: "People",
        },
        {
          id: "m3-s2-a2",
          type: "boolean",
          prompt: "In PRINCE2, leadership is only the responsibility of the project manager.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Leadership is needed at every level, including the project executive and team managers.",
          topic: "People",
        },
        {
          id: "m3-s2-a3",
          type: "multiple",
          prompt: "Which TWO help a project manager lead people from other organisations?",
          options: [
            { id: "a", label: "Clear agreements about who does what" },
            { id: "b", label: "Relying on formal line authority" },
            { id: "c", label: "A shared goal that everyone cares about" },
            { id: "d", label: "Avoiding regular conversations" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Without line authority, leaders rely on clear agreements, trust and a shared purpose.",
          topic: "People",
        },
        {
          id: "m3-s2-a4",
          type: "single",
          prompt:
            "Priya is highly experienced and confident. Which leadership approach suits Priya best?",
          options: [
            { id: "a", label: "Detailed instructions for every task" },
            { id: "b", label: "Daily inspections of Priya's work" },
            { id: "c", label: "Trust Priya to get on with it and stay available" },
            { id: "d", label: "Leave Priya out of decisions" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Good leaders adapt their style. Experienced, confident people usually need trust and support rather than close direction.",
          topic: "People",
        },
      ],
    },
    {
      id: "people/building-effective-teams",
      slug: "building-effective-teams",
      title: "Building effective teams",
      summary:
        "How to turn people from different organisations into a team that trusts each other and delivers together.",
      durationMinutes: 14,
      objectives: [
        "Explain why project teams need deliberate team-building",
        "Describe what makes a project team effective",
        "Recognise how to handle conflict and skills gaps in a team",
      ],
      sections: [
        {
          id: "m3-s3-1",
          paragraphs: [
            "It's time to look at what turns a group of people into a real team.",
            "Let's say you've hired Pixel & Pine to build the pre-order app. On day one, Ana's developers and Jo, your Leeds counter manager, sit in the same meeting. The developers talk about *sprints* and *APIs*. Jo talks about *the 7am rush*. Nobody quite understands anyone else.",
          ],
          scenario: {
            question: "How do you make this group work as one team?",
            steps: [
              {
                title: "Start with the why",
                body: "You explain the goal in plain words: regulars should be able to order a loaf by 8pm and collect it the next morning, with no queue.",
              },
              {
                title: "Make roles clear",
                body: "Ana leads the build. Jo explains how the counter really works and tests each version. Everyone knows what they're there for.",
              },
              {
                title: "Make it safe to speak up",
                body: "At the first review, Jo admits the collection screen is confusing. Ana thanks Jo, and the team fixes it in the next cycle.",
              },
              {
                title: "That's the idea",
                body: "Project teams are **temporary** and often **mixed**. They don't gel by accident. They need a **shared purpose**, **clear roles** and enough **trust** to raise problems early.",
              },
            ],
          },
        },
        {
          id: "m3-s3-2",
          heading: "Why project teams are different",
          paragraphs: [
            "A team in your Leeds shop has worked together for years. A project team usually hasn't. It's put together for a limited time, from different organisations, and it breaks up when the project ends.",
            "That means you can't rely on habits that build up over years. You need to deliberately help the team form, agree how it'll work and build trust quickly.",
          ],
        },
        {
          id: "m3-s3-3",
          heading: "What effective teams have in common",
          paragraphs: ["Teams that deliver well tend to share a few things:"],
          bullets: [
            "**A shared purpose**: everyone understands what the project is for and why it matters",
            "**Clear roles and responsibilities**: people know what they own and who to ask",
            "**Trust and psychological safety**: people can admit mistakes and raise bad news without fear",
            "**The right mix of skills**: gaps are spotted and filled through training, coaching or extra people",
            "**Agreed ways of working**: how often you meet, how decisions are made and how work is shared",
          ],
        },
        {
          id: "m3-s3-4",
          heading: "Teams develop over time",
          paragraphs: [
            "New teams go through a natural pattern. At first, people are polite and unsure. Then disagreements surface as they work out how to cooperate. With support, the team settles into agreed ways of working and finally performs well.",
            "Knowing this helps you stay calm when the app team argues in week 2. Some friction is normal. Your job is to help the team work through it, not to pretend it isn't happening.",
          ],
          callout: {
            tone: "tip",
            title: "Handling conflict",
            body: "Conflict about **ideas** can improve the work. Conflict about **people** damages it. Bring disagreements into the open early, focus on the problem and agree a way forward.",
          },
        },
        {
          id: "m3-s3-5",
          heading: "Skills and competences",
          paragraphs: [
            "Part of building a team is checking that it has the skills the work needs. When Sam plans the York fit-out, Sam asks: who has done a food-safe fit-out before? Who knows the new till system?",
            "Where there are gaps, the project can train people, pair them with someone experienced or bring in extra help. Developing people during the project also leaves your business stronger afterwards.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Look out for questions on what makes project teams effective: **shared purpose**, **clear roles**, **trust** and the **right skills**. Remember that project teams are **temporary** and often span several organisations.",
          },
        },
      ],
      keyPoints: [
        "Project teams are temporary and often drawn from several organisations.",
        "Effective teams share a purpose, clear roles, trust and the right mix of skills.",
        "Some conflict is normal as teams develop; bring it into the open early.",
        "Spot skills gaps and fill them through training, pairing or extra people.",
      ],
      knowledgeCheck: {
        id: "m3-s3-kc",
        question:
          "Jo is worried that the app's collection screen is confusing, but doesn't want to upset the developers. What does an effective team need here?",
        options: [
          "Psychological safety, so Jo can raise the problem openly",
          "A rule that only the team manager may comment on designs",
          "A longer project plan",
          "Fewer reviews, so the team can work faster",
        ],
        correctOption: 0,
        explanation:
          "Effective teams make it safe to raise problems early. Jo's feedback is exactly what the team needs to build the right product.",
      },
      assessment: [
        {
          id: "m3-s3-a1",
          type: "single",
          prompt: "Why do project teams usually need deliberate team-building?",
          options: [
            { id: "a", label: "Because they're always very large" },
            { id: "b", label: "Because they're temporary and often drawn from different organisations" },
            { id: "c", label: "Because PRINCE2 forbids permanent staff on projects" },
            { id: "d", label: "Because project managers choose every team member" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Project teams come together for a limited time and from different organisations, so trust and ways of working must be built quickly.",
          topic: "People",
        },
        {
          id: "m3-s3-a2",
          type: "multiple",
          prompt: "Select two characteristics of an effective project team.",
          options: [
            { id: "a", label: "A shared understanding of the project's purpose" },
            { id: "b", label: "Hiding problems until the stage ends" },
            { id: "c", label: "Clear roles and responsibilities" },
            { id: "d", label: "Avoiding all disagreement" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Shared purpose and clear roles are hallmarks of effective teams. Hiding problems and suppressing all disagreement both damage performance.",
          topic: "People",
        },
        {
          id: "m3-s3-a3",
          type: "boolean",
          prompt: "Some conflict is a normal part of a new team learning to work together.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Teams develop over time, and friction is common early on. The leader's job is to help the team work through it.",
          topic: "People",
        },
        {
          id: "m3-s3-a4",
          type: "single",
          prompt:
            "Nobody on the York team has used the new till system. What's the best response?",
          options: [
            { id: "a", label: "Ignore it and hope staff pick it up" },
            { id: "b", label: "Cancel the till purchase" },
            { id: "c", label: "Plan training or pair staff with someone experienced" },
            { id: "d", label: "Ask the builder to run the tills" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Building a team includes spotting skills gaps and filling them through training, coaching or extra help.",
          topic: "People",
        },
      ],
    },
    {
      id: "people/stakeholder-engagement",
      slug: "stakeholder-engagement",
      title: "Engaging stakeholders",
      summary:
        "How to find everyone who affects or is affected by your project, understand what they care about and keep them on side.",
      durationMinutes: 14,
      objectives: [
        "Define a stakeholder",
        "Analyse stakeholders by their interest and influence",
        "Explain why stakeholder engagement continues throughout a project",
      ],
      sections: [
        {
          id: "m3-s4-1",
          paragraphs: [
            "It's time to look beyond the project team to everyone else who has a stake in York.",
            "Let's say the building works are going well. Then a letter arrives from the council: a neighbour has complained about early-morning drilling, and the planning officer wants to talk about your shop sign before it goes up.",
          ],
          scenario: {
            question: "Could this have been avoided?",
            steps: [
              {
                title: "Who was forgotten",
                body: "Sam planned carefully for the builder, the shopfitter and your staff. But the neighbours and the planning officer weren't on anyone's list.",
              },
              {
                title: "What they cared about",
                body: "The neighbours cared about noise. The planning officer cared about the look of the street. Neither concern was hard to deal with, if you'd known.",
              },
              {
                title: "What engagement looks like",
                body: "A friendly note to neighbours with working hours and a phone number. An early chat with the planning officer, with a sketch of the sign.",
              },
              {
                title: "That's the idea",
                body: "A **stakeholder** is anyone who can affect, or is affected by, the project. You identify them early, understand what they care about and **engage** them throughout.",
              },
            ],
          },
        },
        {
          id: "m3-s4-2",
          heading: "Who are the stakeholders?",
          paragraphs: [
            "Stakeholders can be inside or outside your business, and supportive, neutral or opposed. For York, the list is longer than you might think:",
          ],
          bullets: [
            "**Inside the project**: you, Tom, Priya, Sam, Mistry Build, Oakline Shopfitting",
            "**Inside the business**: Leeds staff, staff moving to York, your accountant Ruth",
            "**Outside**: the landlord, the council planning officer, neighbours, your bank, suppliers",
            "**Customers**: Leeds regulars and new York customers",
            "**Competitors**: even the coffee chain two doors down affects your plans",
          ],
        },
        {
          id: "m3-s4-3",
          heading: "Interest and influence",
          paragraphs: [
            "You can't give everyone the same amount of attention, so you analyse them. A simple way is to ask two questions about each stakeholder: how **interested** are they in the project, and how much **influence** do they have over it?",
            "The landlord has high influence: they could refuse your fit-out plans. They need close engagement. Your Leeds regulars have high interest but little direct influence: keep them well informed. A supplier with low interest and low influence just needs monitoring.",
          ],
          callout: {
            tone: "tip",
            title: "Stakeholders change",
            body: "A neighbour with no interest in March may become very interested when the drilling starts in September. Revisit your analysis as the project moves on.",
          },
        },
        {
          id: "m3-s4-4",
          heading: "Planning engagement",
          paragraphs: [
            "Once you understand your stakeholders, you plan how to engage each one: what they need to know, what you need from them, who'll talk to them and how often.",
            "Engagement is **two-way**. It's not only about telling people things. The planning officer might suggest a sign design that gets approved first time. Leeds regulars might tell you what they'd love to see in York.",
          ],
        },
        {
          id: "m3-s4-5",
          heading: "Engagement never stops",
          paragraphs: [
            "Stakeholder engagement isn't a task you finish in the first week. People's views shift, new stakeholders appear and old ones lose interest. The coffee chain's arrival, for example, makes your existing customers even more important to keep close.",
            "Keep engaging throughout the project, and plan for the hand-over too. Once the shop opens, the York staff and customers become the people who'll make the benefits real.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Know that a stakeholder is **anyone who can affect, or is affected by,** the project, that stakeholders are analysed (for example by **interest** and **influence**), and that engagement is **continuous** and **two-way**.",
          },
        },
      ],
      keyPoints: [
        "A stakeholder is anyone who can affect, or is affected by, the project.",
        "Stakeholders are analysed, for example by their interest and influence.",
        "Engagement is two-way: you listen as well as inform.",
        "Engagement continues throughout the project, because stakeholders change.",
      ],
      knowledgeCheck: {
        id: "m3-s4-kc",
        question:
          "The landlord could block your fit-out plans and cares a lot about the building. How should you treat them?",
        options: [
          "Monitor them occasionally",
          "Send them the end project report only",
          "Avoid contact until the works are complete",
          "Engage them closely throughout the project",
        ],
        correctOption: 3,
        explanation:
          "A stakeholder with high influence and high interest needs close, regular engagement.",
      },
      assessment: [
        {
          id: "m3-s4-a1",
          type: "single",
          prompt: "Which best describes a stakeholder?",
          options: [
            { id: "a", label: "Anyone who has invested money in the project" },
            { id: "b", label: "Anyone who can affect, or is affected by, the project" },
            { id: "c", label: "A member of the project board" },
            { id: "d", label: "A supplier with a signed contract" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Stakeholders are a wide group, inside and outside the organisation, including people who simply feel the project's effects.",
          topic: "People",
        },
        {
          id: "m3-s4-a2",
          type: "boolean",
          prompt: "Stakeholder engagement is completed once the project has been initiated.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Engagement continues throughout the project because stakeholders and their views change.",
          topic: "People",
        },
        {
          id: "m3-s4-a3",
          type: "multiple",
          prompt: "Which TWO are external stakeholders of the York project?",
          options: [
            { id: "a", label: "The council planning officer" },
            { id: "b", label: "Sam, the project manager" },
            { id: "c", label: "Neighbours on the street" },
            { id: "d", label: "Priya, the head baker" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The planning officer and neighbours sit outside the business. Sam and Priya are part of the project team.",
          topic: "People",
        },
        {
          id: "m3-s4-a4",
          type: "single",
          prompt: "What does it mean to say engagement is two-way?",
          options: [
            { id: "a", label: "Every message is sent twice" },
            { id: "b", label: "Two people must approve each message" },
            { id: "c", label: "You listen to stakeholders as well as informing them" },
            { id: "d", label: "Only two stakeholders are engaged at a time" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Good engagement gathers views and ideas from stakeholders, not just pushes information to them.",
          topic: "People",
        },
      ],
    },
    {
      id: "people/communication",
      slug: "communication",
      title: "Communication",
      summary:
        "How to get the right message to the right people at the right time, and why listening matters as much as talking.",
      durationMinutes: 13,
      objectives: [
        "Explain why communication must be planned",
        "Choose suitable channels and timing for different audiences",
        "Describe the purpose of the communication management approach",
      ],
      sections: [
        {
          id: "m3-s5-1",
          paragraphs: [
            "It's time to look at communication, the thread that ties every stakeholder to the project.",
            "Let's say a rumour starts in the Leeds shop: \"They're opening York because Leeds is closing.\" By Friday, two of your best bakers are looking at job adverts.",
          ],
          scenario: {
            question: "What went wrong, and how do you fix it?",
            steps: [
              {
                title: "Silence filled with guesses",
                body: "The Leeds team had seen builders' invoices and heard whispers about York, but nobody had told them anything directly.",
              },
              {
                title: "Say it clearly, and soon",
                body: "You gather the team before opening the next morning. Leeds isn't closing. York is extra, and it might mean promotions.",
              },
              {
                title: "Listen back",
                body: "You ask what worries them. Someone asks who'll cover Priya's shifts on the York days. That becomes a question for Sam's plan.",
              },
              {
                title: "That's the idea",
                body: "Communication should be **planned**, **timely** and **two-way**. Choose the right **message**, **channel** and **timing** for each audience, and listen as well as talk.",
              },
            ],
          },
        },
        {
          id: "m3-s5-2",
          heading: "Right message, right channel, right time",
          paragraphs: [
            "Different people need different things. When you plan communication for each audience, think about:",
          ],
          bullets: [
            "**What** they need to know, and what you need from them",
            "**When** they need it, for example before a decision, not after",
            "**How**: a face-to-face chat, an email, a short message, a notice in the shop window",
            "**Who** should deliver it, because people trust some messengers more than others",
          ],
        },
        {
          id: "m3-s5-3",
          heading: "Formal and informal",
          paragraphs: [
            "Projects need both. Formal communication includes reports to the project board and agreed updates to suppliers. Informal communication is the quick chat on site, the phone call when something looks wrong.",
            "Informal channels are fast and build relationships, but they're easy to forget. Anything that leads to a decision should be confirmed in writing, so there's a clear record.",
          ],
          callout: {
            tone: "tip",
            title: "Bad news travels best early",
            body: "When Sam spots the damp, a phone call to you that afternoon is better than a perfect report a week later. Speed matters most when news is bad.",
          },
        },
        {
          id: "m3-s5-4",
          heading: "The communication management approach",
          paragraphs: [
            "PRINCE2 records how a project will communicate in its **communication management approach**. It's prepared during initiation and sits with the other management approaches.",
            "It describes who the stakeholders are, what information each needs, the methods and frequency of communication, and who's responsible. You'll see it again in the Organising module.",
          ],
        },
        {
          id: "m3-s5-5",
          heading: "Communication on the app",
          paragraphs: [
            "On the pre-order app, communication has its own rhythm. Ana's team shows a working version to Jo and some regulars at the end of every 2-week cycle. Feedback goes straight into the next cycle.",
            "Short, frequent and visual communication works well for iterative work. Showing people a real screen beats describing it in a long document.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "The **communication management approach** describes how and how often the project communicates with its stakeholders. Remember that good communication is **two-way**, not just broadcasting.",
          },
        },
      ],
      keyPoints: [
        "Plan what each audience needs, when, how and from whom.",
        "Communication is two-way: listen and gather feedback, not just inform.",
        "Confirm in writing anything that leads to a decision.",
        "The communication management approach records how the project will communicate.",
      ],
      knowledgeCheck: {
        id: "m3-s5-kc",
        question:
          "Where does PRINCE2 record how the project will communicate with its stakeholders?",
        options: [
          "In the risk register",
          "In the communication management approach",
          "In the daily log",
          "In the end project report",
        ],
        correctOption: 1,
        explanation:
          "The communication management approach sets out the stakeholders, their information needs, the methods and frequency of communication, and responsibilities.",
      },
      assessment: [
        {
          id: "m3-s5-a1",
          type: "single",
          prompt: "A rumour is spreading among Leeds staff. What's the best response?",
          options: [
            { id: "a", label: "Ignore it, because rumours fade" },
            { id: "b", label: "Explain the facts clearly and soon, and listen to concerns" },
            { id: "c", label: "Put a note in the end stage report" },
            { id: "d", label: "Ask the builder to explain the project" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Silence gets filled with guesses. Clear, timely, two-way communication is the fix.",
          topic: "People",
        },
        {
          id: "m3-s5-a2",
          type: "boolean",
          prompt:
            "Informal communication has no place on a PRINCE2 project.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Projects need both formal and informal communication. Informal conversations are fast and build relationships; decisions should then be confirmed in writing.",
          topic: "People",
        },
        {
          id: "m3-s5-a3",
          type: "multiple",
          prompt: "Which TWO would you expect the communication management approach to describe?",
          options: [
            { id: "a", label: "The information needs of each stakeholder group" },
            { id: "b", label: "The detailed cost of each product" },
            { id: "c", label: "The methods and frequency of communication" },
            { id: "d", label: "The quality review results" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The approach covers who needs what information, how and how often. Costs and quality records live elsewhere.",
          topic: "People",
        },
        {
          id: "m3-s5-a4",
          type: "single",
          prompt: "Why does the app team demo a working version every 2 weeks?",
          options: [
            { id: "a", label: "Because PRINCE2 forbids written reports" },
            { id: "b", label: "To get frequent, concrete feedback that shapes the next cycle" },
            { id: "c", label: "To replace the project board" },
            { id: "d", label: "To avoid talking to users" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Short, frequent, visual communication suits iterative work and keeps the product aligned with what users need.",
          topic: "People",
        },
      ],
    },
    {
      id: "people/culture-and-behaviours",
      slug: "culture-and-behaviours",
      title: "Culture and behaviours",
      summary:
        "How the habits and values of each organisation shape the way a project really runs, and how to build a healthy project culture.",
      durationMinutes: 12,
      objectives: [
        "Explain what is meant by culture on a project",
        "Recognise how different organisational cultures can clash",
        "Describe behaviours that support a healthy project culture",
      ],
      sections: [
        {
          id: "m3-s6-1",
          paragraphs: [
            "It's time to look at something you can't see on any plan: culture.",
            "Let's say Pixel & Pine's developers love to \"move fast and fix it later\". Your bakery runs on routine: the same recipes, the same checks, every single morning. In week 3, the agency pushes a new app version live on a Friday evening without telling Jo. On Saturday morning, orders go missing.",
          ],
          scenario: {
            question: "Is this a technical problem or a people problem?",
            steps: [
              {
                title: "Two ways of working",
                body: "For the agency, quick releases are normal and good. For the bakery, surprises before the Saturday rush are a disaster.",
              },
              {
                title: "Neither is wrong",
                body: "Speed helps the app improve quickly. Routine keeps food safe and customers happy. The trouble starts when nobody talks about the difference.",
              },
              {
                title: "Agree a project culture",
                body: "Ana and Jo agree: no releases after Thursday, and Jo gets a heads-up and a quick test before anything goes live.",
              },
              {
                title: "That's the idea",
                body: "Every organisation has its own **culture**: shared habits, values and unwritten rules. A project brings cultures together, so it needs to agree **how it will behave** as one team.",
              },
            ],
          },
        },
        {
          id: "m3-s6-2",
          heading: "What culture means",
          paragraphs: [
            "Culture is \"the way we do things round here\". It's the mix of values, habits, attitudes and unwritten rules that shape how people behave, often without them noticing.",
            "Your bakery's culture values care, consistency and early starts. Mistry Build's might value getting the job done whatever the weather. These cultures aren't good or bad. They're just different, and they all show up on a project.",
          ],
        },
        {
          id: "m3-s6-3",
          heading: "When cultures meet",
          paragraphs: [
            "A project is often the first time several organisations work closely together. Clashes tend to show up in a few places:",
          ],
          bullets: [
            "**Pace**: how quickly decisions are made and work is released",
            "**Risk**: how much uncertainty people are comfortable with",
            "**Openness**: whether bad news is shared or hidden",
            "**Formality**: whether things are agreed in a chat or in writing",
          ],
          callout: {
            tone: "tip",
            title: "Talk about it early",
            body: "A short conversation in week 1 about how each organisation likes to work can save weeks of frustration later.",
          },
        },
        {
          id: "m3-s6-4",
          heading: "Behaviours that help",
          paragraphs: [
            "Whatever the organisations involved, some behaviours make any project healthier:",
          ],
          bullets: [
            "**Openness**: sharing problems and bad news early",
            "**Accountability**: owning your commitments and mistakes",
            "**Collaboration**: solving problems together rather than blaming",
            "**Learning**: treating mistakes as lessons, not reasons to punish",
            "**Respect**: valuing what each person and organisation brings",
          ],
        },
        {
          id: "m3-s6-5",
          heading: "Leaders shape culture",
          paragraphs: [
            "Culture follows what leaders do, not what they say. If you snap at Sam for reporting the damp, people learn to hide bad news. If you thank Sam for raising it early, people learn that openness is safe.",
            "This links directly to the principles. Manage by exception only works if people escalate honestly. Learn from experience only works if mistakes can be discussed without blame.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Expect the idea that projects bring together **different organisational cultures**, and that a healthy project culture (open, collaborative, learning) supports the principles, especially **manage by exception** and **learn from experience**.",
          },
        },
      ],
      keyPoints: [
        "Culture is the shared values, habits and unwritten rules that shape behaviour.",
        "Projects bring different organisational cultures together, which can clash.",
        "Openness, accountability, collaboration and learning support a healthy project.",
        "Leaders shape culture through how they respond, especially to bad news.",
      ],
      knowledgeCheck: {
        id: "m3-s6-kc",
        question:
          "Sam reports the damp problem early, and you react angrily. What is the likely effect on the project's culture?",
        options: [
          "People will escalate problems even faster",
          "Nothing, because culture is set by the contract",
          "People will learn to hide bad news",
          "The builder will work more carefully",
        ],
        correctOption: 2,
        explanation:
          "Leaders shape culture by their reactions. Punishing bad news teaches people to hide it, which undermines manage by exception.",
      },
      assessment: [
        {
          id: "m3-s6-a1",
          type: "single",
          prompt: "Which best describes organisational culture?",
          options: [
            { id: "a", label: "The organisation's written procedures" },
            { id: "b", label: "The shared values, habits and unwritten rules that shape behaviour" },
            { id: "c", label: "The organisation chart" },
            { id: "d", label: "The project's quality register" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Culture is largely unwritten: it's the way people actually behave, shaped by shared values and habits.",
          topic: "People",
        },
        {
          id: "m3-s6-a2",
          type: "boolean",
          prompt:
            "When several organisations work on a project, their cultures may differ and need to be aligned.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Projects often bring different cultures together. Agreeing how the project will behave helps avoid clashes.",
          topic: "People",
        },
        {
          id: "m3-s6-a3",
          type: "multiple",
          prompt: "Which TWO behaviours support a healthy project culture?",
          options: [
            { id: "a", label: "Sharing problems early" },
            { id: "b", label: "Blaming individuals for mistakes" },
            { id: "c", label: "Treating mistakes as lessons" },
            { id: "d", label: "Keeping decisions secret" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Openness and learning make projects healthier. Blame and secrecy push problems underground.",
          topic: "People",
        },
        {
          id: "m3-s6-a4",
          type: "single",
          prompt: "Which principle depends most on people feeling safe to escalate honestly?",
          options: [
            { id: "a", label: "Focus on products" },
            { id: "b", label: "Manage by stages" },
            { id: "c", label: "Tailor to suit the project" },
            { id: "d", label: "Manage by exception" },
          ],
          correctOptionIds: ["d"],
          explanation:
            "Manage by exception relies on people raising forecast breaches of tolerance quickly, which only happens in an open culture.",
          topic: "People",
        },
      ],
    },
    {
      id: "people/organisational-change",
      slug: "organisational-change",
      title: "Leading organisational change",
      summary:
        "Why delivering the project's products isn't the finish line, and how to help people adopt the change so the benefits arrive.",
      durationMinutes: 14,
      objectives: [
        "Explain the link between organisational change and benefits",
        "Describe how to prepare people for the transition to business as usual",
        "Recognise and respond to resistance to change",
      ],
      sections: [
        {
          id: "m3-s7-1",
          paragraphs: [
            "It's time to think about what happens when the project hands over its products.",
            "Let's say the pre-order app goes live. It works perfectly. But after a month, only 20 customers use it. The Leeds counter staff still take phone orders on paper, because \"it's quicker\".",
          ],
          scenario: {
            question: "Why isn't the app delivering its benefits?",
            steps: [
              {
                title: "The output exists",
                body: "The app is built, tested and live. The project delivered exactly what was asked for.",
              },
              {
                title: "The habits didn't change",
                body: "Staff weren't shown how the app saves them time. Customers weren't told it existed. Paper orders felt safer.",
              },
              {
                title: "Lead the change",
                body: "Jo trains the counter team, puts a QR code on every bag and stops taking phone orders after a two-week changeover. Within a month, 300 customers use the app.",
              },
              {
                title: "That's the idea",
                body: "Projects deliver **outputs**, but benefits come from **outcomes**: people working differently. Leading the change means helping people **adopt** the new way, not just delivering it.",
              },
            ],
          },
        },
        {
          id: "m3-s7-2",
          heading: "From outputs to benefits",
          paragraphs: [
            "You'll meet these terms properly in the Business case module, but here's the chain in short. A project delivers **outputs**, like the app. When people use them, you get **outcomes**, like customers ordering ahead. Those outcomes lead to **benefits**, like shorter queues and more sales.",
            "The weak link is almost always people. If nobody changes how they work, the chain breaks before any benefit appears.",
          ],
        },
        {
          id: "m3-s7-3",
          heading: "Preparing for the transition",
          paragraphs: [
            "Moving from the project to normal day-to-day running is called the transition to **business as usual**. It needs planning, just like the build:",
          ],
          bullets: [
            "**Readiness**: are people trained, and are processes and support in place?",
            "**Timing**: when is the least disruptive moment to switch? Not the week before Christmas",
            "**Support**: who helps people in the first weeks, and how do they ask for help?",
            "**Ownership**: who in the business owns the new way of working after the project closes?",
          ],
        },
        {
          id: "m3-s7-4",
          heading: "Understanding resistance",
          paragraphs: [
            "People rarely resist change because they're difficult. They resist because they're worried: about losing skills, status or control, about extra work, or about the unknown.",
            "The best response is to understand the worry, involve people early and show them what's in it for them. The counter staff came round when they saw the app meant no more scribbled phone orders at 6am.",
          ],
          callout: {
            tone: "tip",
            title: "Involve people early",
            body: "People support what they help to create. Jo testing each version of the app made the counter team feel it was *their* app, not something forced on them.",
          },
        },
        {
          id: "m3-s7-5",
          heading: "Who leads the change",
          paragraphs: [
            "The project can prepare people, but lasting change has to be led by the business. In PRINCE2, the people who'll use the products are represented on the project board by the **senior user**, who is responsible for making sure the products are used and the benefits realised.",
            "For York, Priya leads the bakery staff through their new routines. For the app, Jo leads the counter team. Sam supports both, but the change belongs to the business.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Remember that projects deliver **outputs**, but benefits depend on people **adopting** the change. The **senior user** role is responsible for the users' side, including making sure the benefits are realised.",
          },
        },
      ],
      keyPoints: [
        "Benefits come from people using the outputs, not from the outputs alone.",
        "Plan the transition to business as usual: readiness, timing, support and ownership.",
        "Resistance usually comes from worry; involve people early and show the benefits.",
        "The business, represented by the senior user, leads lasting change.",
      ],
      knowledgeCheck: {
        id: "m3-s7-kc",
        question:
          "The app is live and works well, but few customers use it. What's the main lesson?",
        options: [
          "Benefits depend on people adopting the change, not just on the output",
          "The app should have been built in fewer cycles",
          "The project should never have been started",
          "The supplier failed to deliver the product",
        ],
        correctOption: 0,
        explanation:
          "The output was delivered, but the change wasn't adopted. Leading organisational change is what turns outputs into benefits.",
      },
      assessment: [
        {
          id: "m3-s7-a1",
          type: "single",
          prompt: "What usually lies behind resistance to change?",
          options: [
            { id: "a", label: "A lack of intelligence" },
            { id: "b", label: "A poor business case" },
            { id: "c", label: "Worry about losing skills, status, control or certainty" },
            { id: "d", label: "Too many project stages" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Resistance is usually rooted in reasonable worries. Understanding them is the first step to addressing them.",
          topic: "People",
        },
        {
          id: "m3-s7-a2",
          type: "multiple",
          prompt: "Select two things that help the transition to business as usual.",
          options: [
            { id: "a", label: "Training people before the switch" },
            { id: "b", label: "Switching during the busiest week of the year" },
            { id: "c", label: "Clear ownership of the new way of working after closure" },
            { id: "d", label: "Withholding information until go-live" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Readiness and clear ownership support a smooth transition. Poor timing and secrecy increase resistance.",
          topic: "People",
        },
        {
          id: "m3-s7-a3",
          type: "boolean",
          prompt: "Once a project's outputs are delivered, the benefits will follow automatically.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Benefits depend on people adopting the outputs. Without that change, outcomes and benefits don't appear.",
          topic: "People",
        },
        {
          id: "m3-s7-a4",
          type: "single",
          prompt:
            "Which project board role represents the people who'll use the products and is responsible for realising the benefits?",
          options: [
            { id: "a", label: "Senior supplier" },
            { id: "b", label: "Senior user" },
            { id: "c", label: "Project support" },
            { id: "d", label: "Team manager" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The senior user represents the users and is responsible for making sure the products are used and the expected benefits are realised.",
          topic: "People",
        },
      ],
    },
  ],
};
