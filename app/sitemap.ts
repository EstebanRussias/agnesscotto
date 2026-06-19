import type { MetadataRoute } from "next";
import { events } from "@/lib/events";

const baseUrl = "https://agnesscottodiperta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const eventUrls: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/evenements/${event.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/evenements`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...eventUrls,
  ];
}
