import type { MetadataRoute } from "next"

const siteUrl = "https://reverta.in"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: siteUrl,
      lastModified: now,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
    },
  ]
}
