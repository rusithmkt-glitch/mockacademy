import type { CourseModule } from "../types";

const trueFalse = [
  { id: "true", label: "True" },
  { id: "false", label: "False" },
];

export const deliveringClosingModule: CourseModule = {
  id: "m12",
  slug: "delivering-and-closing",
  order: 12,
  title: "Delivering and closing a project",
  shortTitle: "Delivering and closing",
  tagline: "Run each stage, build the products, review the boundaries and close well.",
  description:
    "These PRINCE2 7th edition processes cover the project from the first delivery stage to the final handover. You'll manage York's building and fit-out stages, see Oakline deliver its work package, review the stage boundary after the damp and close the project after opening day.",
  scene: "delivery",
  sessions: [
    {
      id: "delivering-and-closing/controlling-a-stage",
      slug: "controlling-a-stage",
      title: "Controlling a stage",
      summary:
        "How the project manager runs each stage day to day: assigning work, monitoring progress and dealing with issues.",
      durationMinutes: 14,
      objectives: [
        "Describe the purpose of controlling a stage",
        "Name the main activities in controlling a stage",
        "Explain when the project manager escalates",
      ],
      sections: [
        {
          id: "m12-s1-1",
          paragraphs: [
            "It's time to follow Sam through a typical week in Stage 2.",
            "Let's say it's Monday. The board has authorised Stage 2: the building works, £40,000 and 10 weeks. Now it's Sam's job to make it happen, without running back to the board every day.",
          ],
          scenario: {
            question: "What does Sam do this week?",
            steps: [
              {
                title: "Hand out work",
                body: "Sam authorises a work package for the site foreman: strip-out, damp survey and replastering, with tolerances and a weekly checkpoint report.",
              },
              {
                title: "Watch progress",
                body: "On Friday, the foreman's checkpoint report shows the strip-out is done. Sam updates the stage plan and checks the forecast.",
              },
              {
                title: "Handle what comes up",
                body: "A delivery of plasterboard is late. Sam notes it in the daily log and juggles the order of work. No escalation needed.",
              },
              {
                title: "That's the idea",
                body: "**Controlling a stage** is how the project manager assigns work, monitors progress, deals with issues and reports to the board, within stage tolerances.",
              },
            ],
          },
        },
        {
          id: "m12-s1-2",
          heading: "Purpose",
          paragraphs: [
            "The purpose of controlling a stage is to **assign work**, **monitor** it, **deal with issues**, **report progress** to the board and **take corrective action** so the stage stays within tolerance.",
            "It's used in every delivery stage and in the initiation stage too, if it's long enough to need it.",
          ],
        },
        {
          id: "m12-s1-3",
          heading: "Main activities",
          paragraphs: ["The activities fall into three groups:"],
          bullets: [
            "**Work packages**: authorise a work package, review its status and receive completed work packages",
            "**Monitoring and reporting**: review the stage status and report highlights to the board",
            "**Issues**: capture and examine issues and risks, take corrective action and escalate issues and risks when needed",
          ],
        },
        {
          id: "m12-s1-4",
          heading: "Corrective action or escalation",
          paragraphs: [
            "If a problem can be solved within stage tolerance, the project manager takes **corrective action**: moving work around, using a little of the cost tolerance or adjusting a work package.",
            "If the stage is forecast to go outside tolerance, the project manager **escalates** to the board with an exception report. That's what Sam did with the damp.",
          ],
          callout: {
            tone: "tip",
            title: "Don't wait",
            body: "Escalate as soon as a breach is **forecast**, not once it's happened. The board has more options the earlier it knows.",
          },
        },
        {
          id: "m12-s1-5",
          heading: "Controlling a stage with iterative delivery",
          paragraphs: [
            "For the app, controlling a stage looks a little different. Each 2-week cycle is like a work package. Sam reviews the team's demo and the backlog at the end of each cycle, rather than detailed task lists.",
            "The principle is the same: assign work, monitor progress, deal with issues and keep the board informed.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Controlling a stage is the project manager's process for **day-to-day management** within stage tolerances. Activities cover **work packages**, **monitoring and reporting**, and **issues and risks**. Forecast breaches are escalated with an **exception report**.",
          },
        },
      ],
      keyPoints: [
        "Controlling a stage is the project manager's day-to-day process.",
        "It covers work packages, monitoring and reporting, and issues.",
        "Problems within tolerance get corrective action; forecast breaches are escalated.",
        "It works with both linear and iterative delivery.",
      ],
      knowledgeCheck: {
        id: "m12-s1-kc",
        question: "A late plasterboard delivery can be absorbed within the stage tolerance. What does Sam do?",
        options: [
          "Send an exception report to the board",
          "Take corrective action and note it in the daily log",
          "Close the stage early",
          "Ask the business layer for more money",
        ],
        correctOption: 1,
        explanation:
          "Within tolerance, the project manager takes corrective action. No escalation is needed.",
      },
      assessment: [
        {
          id: "m12-s1-a1",
          type: "single",
          prompt: "Which report does the project manager send to the board during controlling a stage, at regular intervals?",
          options: [
            { id: "a", label: "Checkpoint report" },
            { id: "b", label: "Highlight report" },
            { id: "c", label: "End project report" },
            { id: "d", label: "Lessons report" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The project manager reports highlights to the board at the frequency set in the stage plan.",
          topic: "Processes",
        },
        {
          id: "m12-s1-a2",
          type: "multiple",
          prompt: "Which TWO are controlling a stage activities?",
          options: [
            { id: "a", label: "Authorise a work package" },
            { id: "b", label: "Authorise the project" },
            { id: "c", label: "Escalate issues and risks" },
            { id: "d", label: "Prepare the outline business case" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Authorising work packages and escalating issues are part of controlling a stage.",
          topic: "Processes",
        },
        {
          id: "m12-s1-a3",
          type: "boolean",
          prompt: "The project manager should wait until a tolerance has actually been exceeded before escalating.",
          options: trueFalse,
          correctOptionIds: ["false"],
          explanation:
            "Escalate as soon as a breach is forecast, so the board has the most options.",
          topic: "Processes",
        },
        {
          id: "m12-s1-a4",
          type: "single",
          prompt: "What is the purpose of controlling a stage?",
          options: [
            { id: "a", label: "To decide whether the project is worthwhile" },
            { id: "b", label: "To assign and monitor work, deal with issues and keep the stage within tolerance" },
            { id: "c", label: "To hand over the final product" },
            { id: "d", label: "To appoint the project board" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Controlling a stage covers assigning and monitoring work, handling issues and reporting, within tolerance.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "delivering-and-closing/managing-product-delivery",
      slug: "managing-product-delivery",
      title: "Managing product delivery",
      summary:
        "How team managers accept, carry out and hand back work packages, and how they stay connected to the project manager.",
      durationMinutes: 13,
      objectives: [
        "Describe the purpose of managing product delivery",
        "Name its three activities",
        "Explain the link between the project manager and team manager",
      ],
      sections: [
        {
          id: "m12-s2-1",
          paragraphs: [
            "It's time to see the project from Kit's side.",
            "Let's say Stage 3 has started. Sam sends Kit the fit-out work package: counter, shelving, chiller installation and seating, within £24,000 ±£1,000 and six weeks.",
          ],
          scenario: {
            question: "What does Kit do with it?",
            steps: [
              {
                title: "Agree it",
                body: "Kit reads the work package, checks the product descriptions and realises the chiller lead time is five weeks. They agree to order it on day one, and Kit accepts.",
              },
              {
                title: "Do the work",
                body: "Kit's team builds the counter and shelving, runs the quality checks and sends Sam a checkpoint report each Friday.",
              },
              {
                title: "Hand it back",
                body: "When everything's built and checked, Kit hands the products over with the quality records and tells Sam the work package is complete.",
              },
              {
                title: "That's the idea",
                body: "**Managing product delivery** is how team managers **accept**, **execute** and **deliver** work packages, keeping the project manager informed throughout.",
              },
            ],
          },
        },
        {
          id: "m12-s2-2",
          heading: "Purpose",
          paragraphs: [
            "The purpose of managing product delivery is to control the link between the project manager and the team manager, by agreeing what's needed, how it'll be done and when it's complete.",
            "It's the team manager's process, and it's where the products actually get built.",
          ],
        },
        {
          id: "m12-s2-3",
          heading: "The three activities",
          paragraphs: ["Managing product delivery has three activities:"],
          bullets: [
            "**Accept a work package**: agree the work, its tolerances and constraints, and plan it, often with a team plan",
            "**Execute a work package**: build the products, run the quality checks, report progress and raise issues",
            "**Deliver a work package**: hand over the products and confirm the work package is complete",
          ],
          callout: {
            tone: "tip",
            title: "Accepting means agreeing",
            body: "Accepting isn't just saying yes. It's the team manager's chance to push back if the work, time or money isn't realistic.",
          },
        },
        {
          id: "m12-s2-4",
          heading: "Staying connected",
          paragraphs: [
            "The team manager reports with **checkpoint reports**. If the work package is forecast to go outside its tolerances, the team manager raises an issue with the project manager straight away.",
            "Quality results go in the **quality register**, usually via project support. Approved products are handed over according to the work package.",
          ],
        },
        {
          id: "m12-s2-5",
          heading: "Any team, any method",
          paragraphs: [
            "Managing product delivery works whatever the team's method. Kit's team works in a linear way. Ana's team works in 2-week cycles. Both accept, execute and deliver their work packages.",
            "It also works across organisations. Kit works for Oakline, not Fern & Flour. The work package is the agreement that connects the two sides.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Managing product delivery has three activities: **accept**, **execute** and **deliver** a work package. It's the **team manager's** process. Team managers report with **checkpoint reports** and raise issues when a work package is forecast to exceed tolerance.",
          },
        },
      ],
      keyPoints: [
        "Managing product delivery is the team manager's process.",
        "Its activities are accept, execute and deliver a work package.",
        "Team managers report through checkpoint reports and raise forecast breaches as issues.",
        "It works for any team, any method and across organisations.",
      ],
      knowledgeCheck: {
        id: "m12-s2-kc",
        question: "Which managing product delivery activity includes building the products and running the quality checks?",
        options: ["Accept a work package", "Execute a work package", "Deliver a work package", "Authorise a work package"],
        correctOption: 1,
        explanation:
          "Execute a work package is where products are built, checked and reported on.",
      },
      assessment: [
        {
          id: "m12-s2-a1",
          type: "single",
          prompt: "Who carries out managing product delivery?",
          options: [
            { id: "a", label: "The project board" },
            { id: "b", label: "The business layer" },
            { id: "c", label: "The team manager" },
            { id: "d", label: "Project assurance" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "Managing product delivery is the team manager's process.",
          topic: "Processes",
        },
        {
          id: "m12-s2-a2",
          type: "boolean",
          prompt: "A team manager may produce a team plan when accepting a work package.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "Team plans are optional and are often produced when accepting a work package.",
          topic: "Processes",
        },
        {
          id: "m12-s2-a3",
          type: "multiple",
          prompt: "Which TWO are managing product delivery activities?",
          options: [
            { id: "a", label: "Accept a work package" },
            { id: "b", label: "Authorise a work package" },
            { id: "c", label: "Deliver a work package" },
            { id: "d", label: "Review the stage status" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Accept, execute and deliver belong to managing product delivery. Authorising and reviewing stage status belong to controlling a stage.",
          topic: "Processes",
        },
        {
          id: "m12-s2-a4",
          type: "single",
          prompt: "Kit forecasts the fit-out will exceed its work package cost tolerance. What should Kit do?",
          options: [
            { id: "a", label: "Send an exception report to the board" },
            { id: "b", label: "Raise an issue with the project manager" },
            { id: "c", label: "Keep going and report it at the end" },
            { id: "d", label: "Ask the business layer directly" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Team managers raise forecast work package breaches as issues with the project manager.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "delivering-and-closing/managing-a-stage-boundary",
      slug: "managing-a-stage-boundary",
      title: "Managing a stage boundary",
      summary:
        "How the project manager prepares the board to decide whether to continue, at the end of each stage or after an exception.",
      durationMinutes: 13,
      objectives: [
        "Describe the purpose of managing a stage boundary",
        "Name the main activities and outputs",
        "Explain how exception plans use this process",
      ],
      sections: [
        {
          id: "m12-s3-1",
          paragraphs: [
            "It's time to reach the end of Stage 2.",
            "Let's say the building works finished in week 11, a week late and at £44,500 under the approved exception plan. Before Kit's team starts the fit-out, the board needs to decide whether York is still worth it.",
          ],
          scenario: {
            question: "What does the board need to know?",
            steps: [
              {
                title: "How did Stage 2 go?",
                body: "Sam's **end stage report** covers what was delivered, the actual cost and time, the issues and risks, and the lessons learned.",
              },
              {
                title: "Is it still worth it?",
                body: "Sam updates the **business case**. Costs are up and the coffee chain may hit sales, but the payback is still under three years.",
              },
              {
                title: "What's next?",
                body: "Sam presents the **Stage 3 plan**: fit-out and opening for £32,000, and an updated project plan showing the new total.",
              },
              {
                title: "That's the idea",
                body: "**Managing a stage boundary** gives the board what it needs to review the current stage, check the business case and decide whether to authorise the next stage.",
              },
            ],
          },
        },
        {
          id: "m12-s3-2",
          heading: "Purpose",
          paragraphs: [
            "The purpose of managing a stage boundary is to give the board enough information to **review the current stage**, **approve the next stage plan**, **review the updated project plan** and **confirm the project is still justified**.",
            "It happens near the end of every stage except the last, and also when an exception plan is needed.",
          ],
        },
        {
          id: "m12-s3-3",
          heading: "Main activities",
          paragraphs: ["Managing a stage boundary includes:"],
          bullets: [
            "**Plan the next stage**, or **produce an exception plan** if requested",
            "**Update the project plan**",
            "**Update the business case**",
            "**Report stage end**, with an end stage report and any lessons",
          ],
        },
        {
          id: "m12-s3-4",
          heading: "Exception plans",
          paragraphs: [
            "When the board asks for an exception plan, the project manager uses managing a stage boundary to prepare it, even though the stage isn't over.",
            "That's what happened in week 5, when the damp pushed Stage 2 out of tolerance. Sam prepared the Stage 2 exception plan, updated the business case and project plan, and the board approved it.",
          ],
          callout: {
            tone: "tip",
            title: "Also review the approaches",
            body: "Stage boundaries are a good time to review the management approaches and the team. Stage 3 needs Oakline and York staff more than builders, so the communication approach changes.",
          },
        },
        {
          id: "m12-s3-5",
          heading: "Lessons at the boundary",
          paragraphs: [
            "The end stage report should include **lessons**. Stage 2 taught you to survey old buildings for damp before signing contracts.",
            "If a lesson is useful for the wider business, a **lessons report** passes it on. Tom could use the damp lesson when looking at a third shop.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Managing a stage boundary happens near the end of each stage **except the last**, and when an **exception plan** is needed. It produces the **next stage plan** (or exception plan), the updated **project plan** and **business case**, and the **end stage report**.",
          },
        },
      ],
      keyPoints: [
        "Managing a stage boundary prepares the board to decide whether to continue.",
        "It happens near the end of every stage except the last, and for exception plans.",
        "It updates the project plan and business case and plans the next stage.",
        "It produces the end stage report, including lessons.",
      ],
      knowledgeCheck: {
        id: "m12-s3-kc",
        question: "When does managing a stage boundary NOT take place?",
        options: [
          "At the end of the initiation stage",
          "At the end of a middle stage",
          "At the end of the final stage",
          "When an exception plan is requested",
        ],
        correctOption: 2,
        explanation:
          "At the end of the final stage, the project uses closing a project instead.",
      },
      assessment: [
        {
          id: "m12-s3-a1",
          type: "single",
          prompt: "Which report summarises how a stage performed?",
          options: [
            { id: "a", label: "Checkpoint report" },
            { id: "b", label: "End stage report" },
            { id: "c", label: "Issue report" },
            { id: "d", label: "Daily log" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "The end stage report summarises a stage's performance and is produced in managing a stage boundary.",
          topic: "Processes",
        },
        {
          id: "m12-s3-a2",
          type: "multiple",
          prompt: "Which TWO are updated in managing a stage boundary?",
          options: [
            { id: "a", label: "The project plan" },
            { id: "b", label: "The project mandate" },
            { id: "c", label: "The business case" },
            { id: "d", label: "The acceptance record" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "The project plan and business case are updated at each stage boundary.",
          topic: "Processes",
        },
        {
          id: "m12-s3-a3",
          type: "boolean",
          prompt: "Exception plans are prepared using managing a stage boundary.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "When the board requests an exception plan, the project manager prepares it using managing a stage boundary.",
          topic: "Processes",
        },
        {
          id: "m12-s3-a4",
          type: "single",
          prompt: "Why does the board review the business case at each stage boundary?",
          options: [
            { id: "a", label: "To confirm the project is still justified" },
            { id: "b", label: "To approve each quality review" },
            { id: "c", label: "To appoint new team managers" },
            { id: "d", label: "Because the business case is created then" },
          ],
          correctOptionIds: ["a"],
          explanation:
            "Stage boundaries are where the board checks continued business justification.",
          topic: "Processes",
        },
      ],
    },
    {
      id: "delivering-and-closing/closing-a-project",
      slug: "closing-a-project",
      title: "Closing a project",
      summary:
        "How to close a project in a controlled way: handing over, evaluating and passing on what remains.",
      durationMinutes: 14,
      objectives: [
        "Describe the purpose of closing a project",
        "Name the main activities in closing a project",
        "Explain how premature closure works",
      ],
      sections: [
        {
          id: "m12-s4-1",
          paragraphs: [
            "It's time to close the York project.",
            "Let's say the shop opened on 1 December. Customers are queuing, the chiller holds at 3°C and Priya is delighted. Sam's tempted to say \"done\" and move on to the app.",
          ],
          scenario: {
            question: "What still needs to happen?",
            steps: [
              {
                title: "Hand over properly",
                body: "Priya and Jo confirm the shop is accepted. Warranties, manuals and keys pass to the York team. Oakline's snagging list is agreed.",
              },
              {
                title: "Look back",
                body: "Sam writes an **end project report**: how York did against its plan, budget and business case, and the lessons learned.",
              },
              {
                title: "Look ahead",
                body: "The benefit reviews at 6 and 12 months are handed to you and Tom in the business layer. Open issues and risks go to whoever will deal with them.",
              },
              {
                title: "That's the idea",
                body: "**Closing a project** confirms the products are accepted, hands them over, evaluates the project and passes on any remaining actions, so the project can close cleanly.",
              },
            ],
          },
        },
        {
          id: "m12-s4-2",
          heading: "Purpose",
          paragraphs: [
            "The purpose of closing a project is to provide a **fixed point** at which acceptance of the project product is confirmed, and to recognise that the objectives have been achieved, or that the project has nothing more to contribute.",
          ],
        },
        {
          id: "m12-s4-3",
          heading: "Main activities",
          paragraphs: ["Closing a project includes:"],
          bullets: [
            "**Prepare planned closure**: confirm the products have been delivered and accepted",
            "**Prepare premature closure**: if the board asks the project to close early",
            "**Hand over products** to the users and operations",
            "**Evaluate the project**: produce the end project report and lessons report",
            "**Recommend project closure** to the board",
          ],
        },
        {
          id: "m12-s4-4",
          heading: "Premature closure",
          paragraphs: [
            "Not every project closes as planned. If the business case stops being viable, the board can ask for **premature closure**.",
            "Say the landlord had sold the building halfway through Stage 2. Sam would record what had been done, save anything useful, hand over what could be used and close the project in a controlled way, rather than just stopping.",
          ],
          callout: {
            tone: "tip",
            title: "Closing early isn't failure",
            body: "Stopping a project that's no longer worth it is good management. It saves money and frees people for better work.",
          },
        },
        {
          id: "m12-s4-5",
          heading: "After closure",
          paragraphs: [
            "Once the board authorises closure, the project management team is released. The project's records are archived according to the digital and data management approach.",
            "Benefits realised after closure are tracked by the business layer, using the benefits management approach. York's payback is measured over two years, long after the project has closed.",
          ],
          callout: {
            tone: "exam",
            title: "Exam focus",
            body: "Closing a project confirms **acceptance**, **hands over products**, **evaluates the project** (end project report and lessons report) and **recommends closure**. **Premature closure** is possible if the board decides. Post-project benefit reviews are owned by the **business layer**.",
          },
        },
      ],
      keyPoints: [
        "Closing a project provides a fixed point to confirm acceptance and close.",
        "Its activities include handover, evaluation and recommending closure.",
        "The board can request premature closure if the project is no longer justified.",
        "Benefits realised after closure are tracked by the business layer.",
      ],
      knowledgeCheck: {
        id: "m12-s4-kc",
        question: "Which report reviews how the project performed against its plan and business case at closure?",
        options: ["End stage report", "End project report", "Highlight report", "Checkpoint report"],
        correctOption: 1,
        explanation:
          "The end project report evaluates the project's performance at closure.",
      },
      assessment: [
        {
          id: "m12-s4-a1",
          type: "single",
          prompt: "Who authorises project closure?",
          options: [
            { id: "a", label: "The project manager" },
            { id: "b", label: "The team manager" },
            { id: "c", label: "The project board" },
            { id: "d", label: "Project support" },
          ],
          correctOptionIds: ["c"],
          explanation:
            "The project manager recommends closure; the board authorises it in directing a project.",
          topic: "Processes",
        },
        {
          id: "m12-s4-a2",
          type: "boolean",
          prompt: "A project can be closed before all its products are delivered.",
          options: trueFalse,
          correctOptionIds: ["true"],
          explanation:
            "The board can request premature closure if the project is no longer justified.",
          topic: "Processes",
        },
        {
          id: "m12-s4-a3",
          type: "multiple",
          prompt: "Which TWO are closing a project activities?",
          options: [
            { id: "a", label: "Hand over products" },
            { id: "b", label: "Accept a work package" },
            { id: "c", label: "Evaluate the project" },
            { id: "d", label: "Plan the initiation stage" },
          ],
          correctOptionIds: ["a", "c"],
          explanation:
            "Handing over products and evaluating the project are closing activities.",
          topic: "Processes",
        },
        {
          id: "m12-s4-a4",
          type: "single",
          prompt: "Who is responsible for benefit reviews after the project has closed?",
          options: [
            { id: "a", label: "The project manager" },
            { id: "b", label: "The business layer" },
            { id: "c", label: "The team manager" },
            { id: "d", label: "The quality review chair" },
          ],
          correctOptionIds: ["b"],
          explanation:
            "Post-project benefit reviews are owned by the business layer.",
          topic: "Processes",
        },
      ],
    },
  ],
};
