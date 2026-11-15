# Phase 3 setup: backend, database, authentication and administration

MockAcademy now runs on Supabase (Postgres, Auth, RLS) for learner data and
Sanity for course content. The web app only needs environment variables to
switch from the bundled demo content to the live backend.

Everything in this guide is a **manual step you perform once** in the Supabase
and Sanity dashboards. Nothing here is committed with credentials.

---

## 1. Environment variables

Copy `.env.example` to `.env.local` and fill in real values. `.env.local` is
git-ignored and must never be committed.

| Variable | Scope | Used for |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Browser + server | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser + server | Public anon key; safe to expose, RLS enforces access |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only | Knowledge-check persistence and maintenance scripts. Never import in client code. |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Browser + server | Embedded Studio and content queries |
| `NEXT_PUBLIC_SANITY_DATASET` | Browser + server | Usually `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Server | GROQ API version (defaults to `2026-01-01`) |
| `SANITY_API_READ_TOKEN` | Server only | Optional: read token for private datasets |
| `SANITY_API_WRITE_TOKEN` | Server only | Only needed by `npm run seed:sanity` |

When Supabase variables are missing, pages that depend on accounts, exams or
progress show a **setup notice** instead of demo data. Public lesson content
still renders from the bundled course until Sanity is connected.

---

## 2. Supabase project

1. Create a project at [supabase.com](https://supabase.com).
2. Copy the project URL, anon key and service-role key from **Project Settings →
   API** into `.env.local`.
3. Install the Supabase CLI if you want to apply migrations from the terminal:

   ```bash
   npx supabase login
   npx supabase link --project-ref <your-project-ref>
   npx supabase db push
   ```

   Or paste the files in `supabase/migrations/` into the **SQL Editor** and run
   them **in filename order**:

   | File | Purpose |
   | --- | --- |
   | `20260101000000_identity.sql` | Profiles, `user_roles`, role helpers, sign-up trigger, RLS |
   | `20260101000100_exams.sql` | Exam sets, questions, options, attempts, responses, results, RLS |
   | `20260101000200_progress.sql` | Session progress, knowledge-check attempts, `record_knowledge_check` |
   | `20260101000300_rpcs.sql` | Server-authoritative exam RPCs (start, save, submit, fetch) |
   | `20260101000400_admin_rpcs.sql` | Admin RPCs (overview, users, role changes, question bank) |

4. Verify in **Table Editor** that `profiles`, `user_roles`, `exam_sets`,
   `exam_questions`, `exam_options`, `exam_attempts`, `exam_responses`,
   `exam_results`, `session_progress` and `knowledge_check_attempts` exist and
   show RLS enabled (lock icon).

### Auth settings

In **Authentication → URL configuration**:

- Site URL: `http://localhost:3000` for local development, your production
  origin when you deploy.
- Redirect URLs: add `http://localhost:3000/reset-password` (and the
  production equivalent). Password reset emails link back to `/reset-password`.

In **Authentication → Providers → Email**, keep email + password enabled.
Email confirmation is optional; if it is on, new students must confirm before
signing in (the app shows a friendly message).

Password policy: Supabase enforces a minimum of 6 characters by default. The
app's forms ask for at least 8.

### Create the first super administrator

Roles are written only by the database. After you have registered your own
account (through `/register`), open the **SQL Editor** and run:

```sql
update public.user_roles
set role = 'super_administrator'
where user_id = (
  select id from auth.users where email = 'you@example.com'
);
```

Sign out and back in (or refresh) so the new role is picked up. You can then
grant administrator access from **Admin → Administrators**. Only a super
administrator can promote or demote other administrators, and nobody can
change their own role.

### Seed the exam bank

The five bundled paper blueprints are seeded with the service-role key:

```bash
npm run seed:supabase
```

The script is safe to re-run: it upserts exam sets by slug and skips papers that
already have attempts, so student results are never orphaned. It writes
questions and options with the bundled answer keys into the database only —
answer keys are never sent to the browser before submission.

---

## 3. Sanity content studio

1. Create a project and a `production` dataset at
   [sanity.io/manage](https://www.sanity.io/manage).
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to
   `.env.local`.
3. Under **API → CORS origins**, add `http://localhost:3000` (and your
   production origin) with credentials allowed so the embedded Studio at
   `/studio` can authenticate.
4. Create an **Editor** API token and add it as `SANITY_API_WRITE_TOKEN` for the
   seed script. Restrict token access to content editors only.

The Studio is embedded at `/studio` and uses the schemas in
`src/sanity/schemaTypes/` at runtime, so **no separate schema deploy step is
required** for the hosted app. If you also want `sanity deploy` for a standalone
Studio URL, run `npx sanity login` and `npx sanity deploy`; add that URL as an
allowed CORS origin.

### Seed the course into Sanity

```bash
npm run seed:sanity
```

This writes one `course`, six `courseModule` documents, 23 `session` documents,
23 `knowledgeCheck` documents and the eight illustration documents used by the
lesson player. Documents use stable IDs, so re-running updates rather than
duplicates them. After seeding, the learning pages read published Sanity
content; if nothing is published, they fall back to the bundled course so local
development never shows an empty syllabus.

Publish the course and its modules/sessions in the Studio when content is ready.
Draft content is never served to students: the app queries with
`perspective: "published"`.

---

## 4. Local development

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run seed:supabase        # optional, after migrations
npm run seed:sanity          # optional, after creating a Sanity project
npm run dev                  # http://localhost:3000
```

Useful checks:

```bash
npm test          # unit tests
npx tsc --noEmit  # type check
npm run lint      # eslint
npm run build     # production build
```

Without any environment variables, the app still runs: marketing pages and the
bundled course render, and exam/dashboard/admin screens show a setup notice.

---

## 5. Security model (summary)

- **Server-authoritative exams.** Starting, saving, submitting and scoring run
  in Postgres RPCs using `auth.uid()` and `now()`. The browser never receives
  correct answers or explanations for an active attempt. Attempts 1–2 use
  immediate feedback; attempt 3 (configurable, default 3 per paper) is formal.
- **Timers.** `exam_attempts.started_at` and `expires_at` are server timestamps.
  Submissions after expiry are rejected/finalised by the database, so refreshing
  or reconnecting cannot extend time.
- **No trusted client values.** Attempt numbers and scores are computed in the
  database. Question/option ownership and exam membership are validated on every
  save.
- **Roles.** `user_roles` is read-only to clients and written only by
  `admin_*` RPCs, which re-check the caller's role. The UI never sends a role
  the server accepts blindly.
- **RLS everywhere.** Answer keys, replies and results are protected by row-level
  policies and column grants; students can only read their own attempts,
  progress and results. RLS is never disabled as a workaround.
- **Secrets.** The service-role key and Sanity write token are server-only and
  never exposed through `NEXT_PUBLIC_*`. Error messages never include SQL or
  database internals.
- **Knowledge checks.** Answers are scored on the server and persisted through
  the service-role-only `record_knowledge_check` RPC after the action confirms
  the signed-in student.

---

## 6. Administration

Sign in as an administrator and open `/admin` from the header. The workspace
shows real metrics (`admin_overview`), the question bank per paper, exam-set
publishing and policy settings, course-content status with a link to `/studio`,
and account/role management for super administrators.

Non-admins are redirected away from `/admin`; students are redirected to their
dashboard. Every admin action re-checks the role in the database, so hiding UI
is never the only protection.

---

## 7. Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| "Setup required" notice on exams, dashboard or admin | Supabase variables missing in `.env.local` |
| Admin link missing after promotion | Sign out and back in to refresh the session/profile |
| Reset email links to the wrong host | Add the origin and `/reset-password` to Supabase redirect URLs |
| `npm run seed:sanity` reports a missing token | Create an Editor token and set `SANITY_API_WRITE_TOKEN` |
| Learning pages still show bundled content | No published course in Sanity, or Sanity env vars missing |
| Exam shows "not ready" | The paper has fewer active questions than its configured question count |
