import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const STATIC_BUILD_DATE = new Date("2026-10-22T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moussa-diakite.vercel.app";

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projets/${p.slug}`,
    lastModified: STATIC_BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: STATIC_BUILD_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: STATIC_BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
