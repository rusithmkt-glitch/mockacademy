import type { ReferenceMaterial } from "@/lib/exam/types";

/**
 * The Practitioner paper is open book: every question is answered against
 * this project scenario and the accompanying people document, mirroring the
 * real exam's Project Scenario and Additional Information pack.
 */
export const practitionerReferenceMaterials: ReferenceMaterial[] = [
  {
    title: "Project scenario — Fern & Flour: The Wholesale Kitchen project",
    body: `BACKGROUND
Fern & Flour is an artisan bakery in Leeds, run by its two founders. The Headingley shop is at capacity: ovens are full by 10am most days and the queue for wholesale trays is growing. Northgate Coffee, a chain of thirty cafés across West Yorkshire, has signed a letter of intent to buy sourdough loaves and morning goods daily, at 1,200 loaves a week. Fern & Flour has leased a disused industrial unit at Thorn Edge, Kirkstall, and appointed the project manager, Sam, to set up a wholesale kitchen there. This paper covers the project at the end of its second delivery stage.

THE BUSINESS CASE
The board approved a £240,000 investment: £150,000 for the unit refit, £55,000 for two deck ovens and a blast chiller, £25,000 for two refrigerated vans and £10,000 for an order portal and accreditation preparation. The forecast wholesale income is £45,000 a month from the fourth month of trading. Payback is expected fourteen months after go-live. If the project does not deliver, Northgate has said it will contract with a supplier in Manchester instead, and the founders expect retail growth to stall against a full-capacity oven.

PRODUCTS IN SCOPE
The refit of the Thorn Edge unit, including a gas upgrade to industrial pressure. Installation and commissioning of two deck ovens and one blast chiller. Purchase and licensing of two refrigerated vans. An order portal integrated with Fern & Flour's existing pre-order app. Food safety accreditation from an accredited external auditing body, audited on site. Training and recruitment of twelve bakers. Explicitly out of scope: any work on the Headingley shop, a shopfront for Kirkstall, and the marketing campaign, which the business is handling as day-to-day work.

TIMESCALE
The project runs for 36 weeks in four stages: initiation, refit, equipment and trial bakes, and accreditation and handover. Go-live is fixed at 9 February, because Northgate's contract starts on 1 March and the founders want six clear weeks of dual-running. The retail Christmas trade is at its peak in December, so no noisy construction work is scheduled between 30 November and 4 January.

BUDGET AND TOLERANCES
The board set a project tolerance of ±£8,000 on cost and ±2 weeks on time, and gave Sam a contingency reserve of £18,000 plus a separate change budget of £6,000 held by the executive. Stage two carries a tighter tolerance of ±£4,000 and ±1 week, agreed at the stage boundary. The founders review the business case at every stage boundary, alongside the updated benefits forecast.

QUALITY EXPECTATIONS
Loaves must leave the bakery at 800g with a tolerance of ±40g, matching the recipe card the Headingley shop already bakes to. On-time delivery to Northgate is a target of 98% of drops per month. Accreditation is a must-meet: no wholesale tray may legally leave the unit before the external audit is passed. The acceptance criteria for every major product are recorded in its project product description, and non-conversions are logged in the quality register.

STATUS AT THE END OF STAGE TWO
The refit finished on 20 December, two days late, and the gas upgrade came in £5,000 over the allowance, paid from the contingency reserve with the executive's agreement. Both ovens are installed; the blast chiller was commissioned last week. Trial bakes began on Monday, and one batch of morning goods failed because the chiller's calibration drifted — the issue is recorded, and the supplier's engineer is due on site Thursday. On Tuesday, Northgate asked for 1,600 loaves a week instead of 1,200. Sam logged it as a change request, and the impact assessment on cost, time and the chiller's capacity is due at next Monday's checkpoint. The accreditation audit is booked for 22 January and cannot be moved.`,
  },
  {
    title: "Additional information — the people on this project",
    rows: [
      {
        label: "Tom — project executive",
        value: "Co-founder of Fern & Flour and the business's money. Chaired the first project board at a pub table and wants to keep the boards short. Will only keep funding the project while payback stays under eighteen months. Has final sign-off on the change budget.",
      },
      {
        label: "Fern — senior user",
        value: "The other founder and head baker. Guards the recipe closely and has said the wholesale loaf must taste exactly like the retail one. Worried that volume work will dull the brand. Will block any product that falls outside the recipe card.",
      },
      {
        label: "Ruth — benefits and finance lead",
        value: "A management accountant engaged two days a month. Re-forecasts the benefits at every stage boundary before the board meets. Quiet in meetings, but her exception report last quarter changed a supplier decision.",
      },
      {
        label: "Sam — project manager",
        value: "Ran the York shop fit-out for Fern & Flour last year. Reports to the board weekly by email and calls a fifteen-minute checkpoint every Monday with the team. Holds the £18,000 contingency within the project tolerance.",
      },
      {
        label: "Dev — senior supplier (Mistry Build)",
        value: "Built the Headingley and York shop fit-outs. Reliable on site, slow to answer email, and subcontracts the gas work to Airedale Services, who hold the commissioning certificates.",
      },
      {
        label: "Nadia — refrigerated vehicle supplier (Kirkham Cold Logistics)",
        value: "Sells and licenses the vans. Has offered a depot-and-driver contract if Fern & Flour doubles its delivery volume, and keeps mentioning it at handover meetings.",
      },
      {
        label: "Kit — software supplier (Oakline)",
        value: "Builds the order portal in two-week cycles with daily stand-ups. Works to a signed contract with Fern & Flour and wants acceptance criteria agreed before each cycle begins.",
      },
      {
        label: "Priya — external auditor (accreditation body)",
        value: "Assesses the Thorn Edge unit against the food safety standard. Her audit on 22 January is fixed; missing it means waiting six weeks for the next slot. She expects documented cleaning schedules and traceable batches before she arrives.",
      },
      {
        label: "Northgate Coffee — key customer",
        value: "Thirty cafés across West Yorkshire. Signed a letter of intent, not a contract, that depends on a 9 February go-live. Has started asking for menu support beyond bread.",
      },
    ],
  },
];
