# MockAcademy

A free PRINCE2® Foundation learning site: six modules, 23 illustrated lessons,
knowledge checks and timed mock exams. Built with Next.js App Router, Supabase
(Postgres, Auth, RLS) and Sanity.

## Quick start

```bash
npm install
cp .env.example .env.local   # add Supabase and Sanity values
npm run dev
```

Without environment variables the app still runs: public pages and the bundled
course render, while exam, dashboard and admin screens show a setup notice.

## Features

- **Learning path** — modules, sessions, animated lesson scenes and
  CMS-authored content with a bundled fallback.
- **Knowledge checks** — scored and saved on the server when signed in.
- **Mock exams** — server-authoritative attempts, server timers, immediate
  feedback for the first two attempts and a formal third attempt, results with
  explanations after submission.
- **Student dashboard** — real progress, recent attempts and topic performance.
- **Administration** — metrics, question bank editor, exam-set publishing,
  course status and role management at `/admin`.
- **Content Studio** — embedded Sanity Studio at `/studio`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm test` | Unit tests (Vitest) |
| `npm run seed:supabase` | Import exam sets/questions into Supabase |
| `npm run seed:sanity` | Import the course into Sanity |

## Setup

Full instructions — environment variables, migrations, Auth configuration,
Sanity schemas and seeding, first super-administrator creation, security model
and troubleshooting — are in [docs/phase-3-setup.md](docs/phase-3-setup.md).

## Stack

Next.js 16 (App Router, Cache Components), React 19, TypeScript, Tailwind CSS,
Supabase (`@supabase/ssr`), Sanity 6 with `next-sanity`, GSAP and Lenis.

PRINCE2® is a registered trademark of PeopleCert. MockAcademy is an
independent study resource and is not affiliated with PeopleCert.
