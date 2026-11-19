import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { examSets } from "@/data/mock-exams";

const base = "https://www.mockacademy.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/learning",
    "/learning/prince2-foundation",
    "/mock-exams",
    "/guides",
    "/register",
    "/login",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...examSets.map((exam) => ({
      url: `${base}/mock-exams/${exam.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      lastModified: new Date(guide.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
