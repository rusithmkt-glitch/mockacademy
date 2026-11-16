import { cache } from "react";
import type {
  CalloutTone,
  CheckQuestion,
  CheckQuestionType,
  Course,
  CourseModule,
  KnowledgeCheck,
  LessonArtKey,
  LessonCallout,
  LessonScene,
  LessonSection,
  SceneVariant,
  Session,
} from "@/data/types";
import { fetchPublished } from "@/lib/sanity/client";

interface CmsCallout {
  title?: string | null;
  body?: string | null;
  tone?: string | null;
}

interface CmsScenario {
  question?: string | null;
  steps?: { title?: string | null; body?: string | null }[] | null;
}

interface CmsSection {
  id?: string | null;
  heading?: string | null;
  paragraphs?: string[] | null;
  bullets?: string[] | null;
  scenario?: CmsScenario | null;
  callout?: CmsCallout | null;
}

interface CmsScene {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  art?: string | null;
  captions?: string[] | null;
  durationSeconds?: number | null;
}

interface CmsCheckOption {
  id?: string | null;
  label?: string | null;
}

interface CmsCheckQuestion {
  questionId?: string | null;
  type?: string | null;
  prompt?: string | null;
  options?: CmsCheckOption[] | null;
  correctOptionIds?: string[] | null;
  explanation?: string | null;
  topic?: string | null;
}

interface CmsKnowledgeCheck {
  id?: string | null;
  sessionKey?: string | null;
  passPercent?: number | null;
  questions?: CmsCheckQuestion[] | null;
}

interface CmsSession {
  id?: string | null;
  slug?: string | null;
  order?: number | null;
  title?: string | null;
  summary?: string | null;
  durationMinutes?: number | null;
  objectives?: string[] | null;
  keyPoints?: string[] | null;
  sections?: CmsSection[] | null;
  scenes?: CmsScene[] | null;
  check?: CmsKnowledgeCheck | null;
}

interface CmsModule {
  id?: string | null;
  slug?: string | null;
  order?: number | null;
  title?: string | null;
  shortTitle?: string | null;
  tagline?: string | null;
  description?: string | null;
  sceneVariant?: string | null;
  sessions?: CmsSession[] | null;
}

interface CmsCourse {
  id?: string | null;
  slug?: string | null;
  title?: string | null;
  shortTitle?: string | null;
  level?: string | null;
  description?: string | null;
  overview?: string[] | null;
  outcomes?: string[] | null;
  benefits?: { title?: string | null; body?: string | null }[] | null;
  examDetails?: Partial<Course["examDetails"]> | null;
  modules?: CmsModule[] | null;
}

const COURSE_BY_SLUG_QUERY = /* groq */ `
  *[_type == "course" && slug.current == $slug][0]{
    "id": _id,
    "slug": slug.current,
    title,
    shortTitle,
    level,
    description,
    "overview": coalesce(overview, []),
    "outcomes": coalesce(outcomes, []),
    "benefits": coalesce(benefits[]{title, body}, []),
    examDetails,
    "modules": *[_type == "courseModule" && references(^._id)] | order(order asc) {
      "id": _id,
      "slug": slug.current,
      title,
      shortTitle,
      order,
      "tagline": coalesce(tagline, ""),
      "description": coalesce(description, ""),
      "sceneVariant": coalesce(sceneVariant, "foundations"),
      "sessions": *[_type == "session" && references(^._id)] | order(order asc) {
        "id": _id,
        "slug": slug.current,
        order,
        title,
        summary,
        "durationMinutes": coalesce(durationMinutes, 15),
        "objectives": coalesce(objectives, []),
        "keyPoints": coalesce(keyPoints, []),
        "sections": coalesce(sections[]{
          "id": sectionId,
          heading,
          "paragraphs": coalesce(paragraphs, []),
          "bullets": coalesce(bullets, []),
          "scenario": select(
            defined(scenario.question) && count(scenario.steps) > 0 => scenario{question, "steps": steps[]{title, body}},
            null
          ),
          "callout": select(
            defined(callout.title) && defined(callout.body) => callout{title, body, tone},
            null
          )
        }, []),
        "scenes": coalesce(scenes[]{
          "id": _key,
          title,
          description,
          "art": illustration->artKey,
          "captions": coalesce(captions, []),
          "durationSeconds": coalesce(durationSeconds, 18)
        }, []),
        "check": knowledgeCheck->{
          "id": _id,
          "sessionKey": sessionKey,
          "passPercent": coalesce(passPercent, 60),
          "questions": coalesce(questions[]{
            questionId,
            type,
            prompt,
            options,
            "correctOptionIds": coalesce(correctOptionIds, []),
            explanation,
            topic
          }, [])
        }
      }
    }
  }
`;

const SCENE_VARIANTS: SceneVariant[] = [
  "foundations",
  "people",
  "starting",
  "planning",
  "risk",
  "delivery",
];

const ART_KEYS: LessonArtKey[] = [
  "principles",
  "team",
  "lifecycle",
  "business-case",
  "planning",
  "risk",
  "progress",
  "products",
];

const MODULE_ART: Record<SceneVariant, LessonArtKey> = {
  foundations: "principles",
  people: "team",
  starting: "lifecycle",
  planning: "planning",
  risk: "risk",
  delivery: "products",
};

const QUESTION_TYPES: CheckQuestionType[] = ["single", "multiple", "boolean"];
const CALLOUT_TONES: CalloutTone[] = ["tip", "exam", "note"];

function asText(value: string | null | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

function asStrings(value: string[] | null | undefined): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    : [];
}

function mapSection(raw: CmsSection): LessonSection | null {
  const paragraphs = asStrings(raw.paragraphs);
  const bullets = asStrings(raw.bullets);
  const heading = asText(raw.heading);
  if (paragraphs.length === 0 && bullets.length === 0) return null;

  const callout: LessonCallout | null =
    raw.callout && asText(raw.callout.title) && asText(raw.callout.body)
      ? {
          title: asText(raw.callout.title),
          body: asText(raw.callout.body),
          tone: CALLOUT_TONES.includes(raw.callout.tone as CalloutTone)
            ? (raw.callout.tone as CalloutTone)
            : "note",
        }
      : null;

  const scenarioSteps = (raw.scenario?.steps ?? []).flatMap((step) => {
    const body = asText(step?.body);
    if (!body) return [];
    const title = asText(step?.title);
    return [title ? { title, body } : { body }];
  });
  const scenarioQuestion = asText(raw.scenario?.question);
  const scenario =
    scenarioQuestion && scenarioSteps.length > 0
      ? { question: scenarioQuestion, steps: scenarioSteps }
      : undefined;

  return {
    id: asText(raw.id) || heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    heading: heading || undefined,
    paragraphs,
    bullets: bullets.length > 0 ? bullets : undefined,
    scenario,
    callout: callout ?? undefined,
  };
}

function mapAssessment(raw: CmsCheckQuestion[] | null | undefined): CheckQuestion[] {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((question) => {
    const prompt = asText(question.prompt);
    const options = Array.isArray(question.options)
      ? question.options
          .filter((option) => asText(option?.id) && asText(option?.label))
          .map((option) => ({ id: asText(option.id), label: asText(option.label) }))
      : [];
    const correctOptionIds = asStrings(question.correctOptionIds).filter((id) =>
      options.some((option) => option.id === id),
    );
    if (!prompt || options.length < 2 || correctOptionIds.length === 0) return [];

    const type = QUESTION_TYPES.includes(question.type as CheckQuestionType)
      ? (question.type as CheckQuestionType)
      : "single";

    return [
      {
        id: asText(question.questionId) || prompt.slice(0, 32),
        type,
        prompt,
        options,
        correctOptionIds,
        explanation: asText(question.explanation),
        topic: asText(question.topic) || "General",
      },
    ];
  });
}

function legacyKnowledgeCheck(
  id: string,
  questions: CheckQuestion[],
): KnowledgeCheck {
  const first = questions[0];
  return {
    id,
    question: first?.prompt ?? "",
    options: first?.options.map((option) => option.label) ?? [],
    correctOption: first
      ? Math.max(
          0,
          first.options.findIndex((option) => option.id === first.correctOptionIds[0]),
        )
      : 0,
    explanation: first?.explanation ?? "",
  };
}

function mapSession(
  raw: CmsSession,
  moduleSlug: string,
  fallbackArt: LessonArtKey,
): Session | null {
  const sessionSlug = asText(raw.slug);
  const title = asText(raw.title);
  if (!sessionSlug || !title) return null;

  const sessionId = `${moduleSlug}/${sessionSlug}`;
  const sections = (raw.sections ?? [])
    .map((section) => mapSection(section))
    .filter((section): section is LessonSection => section !== null);
  const assessment = mapAssessment(raw.check?.questions);

  const scenes: LessonScene[] = (raw.scenes ?? []).flatMap((scene, index) => {
    const sceneTitle = asText(scene.title);
    const description = asText(scene.description);
    if (!sceneTitle || !description) return [];
    return [
      {
        id: asText(scene.id) || `${sessionId}-scene-${index + 1}`,
        title: sceneTitle,
        description,
        art: ART_KEYS.includes(scene.art as LessonArtKey)
          ? (scene.art as LessonArtKey)
          : fallbackArt,
        captions: asStrings(scene.captions),
        durationSeconds:
          typeof scene.durationSeconds === "number" && scene.durationSeconds > 0
            ? scene.durationSeconds
            : 18,
      },
    ];
  });

  return {
    id: sessionId,
    slug: sessionSlug,
    title,
    summary: asText(raw.summary),
    durationMinutes:
      typeof raw.durationMinutes === "number" && raw.durationMinutes > 0
        ? raw.durationMinutes
        : 15,
    objectives: asStrings(raw.objectives),
    sections,
    keyPoints: asStrings(raw.keyPoints),
    knowledgeCheck: legacyKnowledgeCheck(
      asText(raw.check?.id) || `${sessionId}-check`,
      assessment,
    ),
    assessment: assessment.length > 0 ? assessment : undefined,
    scenes: scenes.length > 0 ? scenes : undefined,
  };
}

function mapModule(raw: CmsModule): CourseModule | null {
  const slug = asText(raw.slug);
  const title = asText(raw.title);
  if (!slug || !title) return null;

  const scene = SCENE_VARIANTS.includes(raw.sceneVariant as SceneVariant)
    ? (raw.sceneVariant as SceneVariant)
    : "foundations";

  const sessions = (raw.sessions ?? [])
    .map((session) => mapSession(session, slug, MODULE_ART[scene]))
    .filter((session): session is Session => session !== null);

  return {
    id: asText(raw.id) || slug,
    slug,
    order: typeof raw.order === "number" ? raw.order : 0,
    title,
    shortTitle: asText(raw.shortTitle) || title,
    tagline: asText(raw.tagline),
    description: asText(raw.description),
    scene,
    sessions,
  };
}

function mapCourse(raw: CmsCourse): Course | null {
  const slug = asText(raw.slug);
  const title = asText(raw.title);
  if (!slug || !title) return null;

  const modules = (raw.modules ?? [])
    .map((module) => mapModule(module))
    .filter((module): module is CourseModule => module !== null)
    .sort((a, b) => a.order - b.order);

  return {
    id: asText(raw.id) || slug,
    slug,
    title,
    shortTitle: asText(raw.shortTitle) || title,
    level: asText(raw.level) || "Foundation",
    description: asText(raw.description),
    overview: asStrings(raw.overview),
    outcomes: asStrings(raw.outcomes),
    benefits: (raw.benefits ?? []).flatMap((benefit) =>
      asText(benefit.title) && asText(benefit.body)
        ? [{ title: asText(benefit.title), body: asText(benefit.body) }]
        : [],
    ),
    examDetails: {
      questions: raw.examDetails?.questions ?? 60,
      durationMinutes: raw.examDetails?.durationMinutes ?? 60,
      passMark: raw.examDetails?.passMark ?? "60%",
      format: raw.examDetails?.format ?? "Multiple choice",
    },
    modules,
  };
}

const loadCourse = cache(async (slug: string): Promise<Course | null> => {
  const doc = await fetchPublished<CmsCourse | null>(COURSE_BY_SLUG_QUERY, { slug });
  return doc ? mapCourse(doc) : null;
});

export function getPublishedCourse(slug = "prince2-foundation"): Promise<Course | null> {
  return loadCourse(slug);
}

export function getCmsSession(
  course: Course,
  moduleSlug: string,
  sessionSlug: string,
) {
  const courseModule = course.modules.find((module) => module.slug === moduleSlug);
  if (!courseModule) return undefined;
  const session = courseModule.sessions.find((item) => item.slug === sessionSlug);
  return session ? { module: courseModule, session } : undefined;
}
