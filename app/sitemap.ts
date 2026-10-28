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
      url: `${siteUrl}/schools-communities`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: now,
    },
  ]
}
