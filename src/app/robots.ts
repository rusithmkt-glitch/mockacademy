import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard", "/studio", "/api/", "/login?", "/register?"],
    },
    sitemap: "https://www.mockacademy.org/sitemap.xml",
  };
}
