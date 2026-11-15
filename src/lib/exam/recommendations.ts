import type { ExamTopic, TopicResult } from "./types";
import { topicModuleMap } from "@/data/exams/config";
import { course } from "@/lib/course";

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
 * module. This keeps recommendations data-driven instead of hand-written.
 */
export function getRecommendedLessons(
  topics: TopicResult[],
  limit = 3,
): RecommendedLesson[] {
  const seen = new Set<string>();
  const recommendations: RecommendedLesson[] = [];

  for (const topic of [...topics].sort((a, b) => a.percent - b.percent)) {
    if (topic.percent >= 100) continue;
    const moduleId = topicModuleMap[topic.topic];
    if (!moduleId || seen.has(moduleId)) continue;
    const courseModule = course.modules.find((item) => item.id === moduleId);
    const session = courseModule?.sessions[0];
    if (!courseModule || !session) continue;

    seen.add(moduleId);
    recommendations.push({
      moduleId,
      moduleTitle: courseModule.title,
      topic: topic.topic,
      percent: topic.percent,
      sessionTitle: session.title,
      href: `/learning/prince2-foundation/${courseModule.slug}/${session.slug}`,
    });
    if (recommendations.length === limit) break;
  }

  return recommendations;
}
