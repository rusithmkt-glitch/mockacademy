import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mockacademy.vercel.app" }],
        destination: "https://www.mockacademy.org/:path*",
        permanent: true,
      },
    ];
  },
  outputFileTracingIncludes: {
    "/api/share-card": ["./src/app/api/share-card/fonts/**"],
    "/opengraph-image": ["./src/app/api/share-card/fonts/**"],
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
