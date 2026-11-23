import type { ExamTopic, TopicResult } from "./types";
import { getCourseBySlug, getCourseTopicModules } from "@/data/courses";

export interface RecommendedLesson {
  moduleId: string;
  moduleTitle: string;
  topic: ExamTopic;
  percent: number;
  sessionTitle: string;
  href: string;
}

/**
 * Maps the weakest exam topics to the first lesson in the matching course
 * module. This keeps recommendations data-driven instead of hand-written,
 * and works for every course registered in the catalogue.
 */
export function getRecommendedLessons(
  topics: TopicResult[],
  limit = 3,
  courseSlug = "prince2-foundation",
): RecommendedLesson[] {
  const course = getCourseBySlug(courseSlug);
  if (!course) return [];
  const topicModules = getCourseTopicModules(courseSlug);
  const seen = new Set<string>();
  const recommendations: RecommendedLesson[] = [];

  for (const topic of [...topics].sort((a, b) => a.percent - b.percent)) {
    if (topic.percent >= 100) continue;
    const moduleSlug = topicModules[topic.topic];
    if (!moduleSlug || seen.has(moduleSlug)) continue;
    const courseModule = course.modules.find((item) => item.slug === moduleSlug);
    const session = courseModule?.sessions[0];
    if (!courseModule || !session) continue;

    seen.add(moduleSlug);
    recommendations.push({
      moduleId: courseModule.slug,
      moduleTitle: courseModule.title,
      topic: topic.topic,
      percent: topic.percent,
      sessionTitle: session.title,
      href: `/learning/${courseSlug}/${courseModule.slug}/${session.slug}`,
    });
    if (recommendations.length === limit) break;
  }

  return recommendations;
}
