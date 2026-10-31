import { MetadataRoute } from "next";
import { OPPORTUNITIES } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://studentgrowthhub.org";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/opportunities`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/get-involved`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const opportunityRoutes: MetadataRoute.Sitemap = OPPORTUNITIES.map((opp) => ({
    url: `${baseUrl}/opportunities/${opp.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...opportunityRoutes];
}

