import type { Course } from "./types";
import { prince2Foundation } from "./prince2-foundation";
import { prince2Practitioner } from "./prince2-practitioner";
import { examTopicModules } from "./exams/build";
import { practitionerTopicModules } from "./exams/practitioner-mock";

export interface RegistryCourse {
  course: Course;
  /** Exam topic label -> module slug that teaches it. */
  topicModules: Record<string, string>;
}

/**
 * Every learnable certification in one place. New exams (ACP, AgilePM, ITIL)
 * add an entry here plus their bank topic map, and the routes, results
 * recommendations and catalogue pick them up automatically.
 */
export const courses: Record<string, RegistryCourse> = {
  "prince2-foundation": {
    course: prince2Foundation,
    topicModules: { ...examTopicModules },
  },
  "prince2-practitioner": {
    course: prince2Practitioner,
    topicModules: { ...practitionerTopicModules },
  },
};

export function getCourseBySlug(slug: string): Course | undefined {
  return courses[slug]?.course;
}

export function getCourseTopicModules(slug: string): Record<string, string> {
  return courses[slug]?.topicModules ?? {};
}
