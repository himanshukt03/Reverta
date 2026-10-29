import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resource Center & Guides | E-Waste Best Practices",
  description:
    "Guides, checklists, and safe handling tips for household gadgets, school awareness campaigns, and data sanitisation before electronic recycling.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Resource Center | Reverta Sustainable Solutions",
    description:
      "Educational articles and actionable guides on responsible e-waste handling, safe disposal tips, and verified recycling standards.",
    url: "https://reverta.in/blog",
    type: "website",
    images: [
      {
        url: "https://reverta.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reverta E-Waste Guides and Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resource Center | Reverta Sustainable Solutions",
    description:
      "Guides and checklists for organising electronic waste drives and safe device handling.",
    images: ["https://reverta.in/og-image.png"],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

