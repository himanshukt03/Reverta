import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | E-Waste Awareness & Community Facilitation",
  description:
    "Learn about Reverta Sustainable Solutions: our mission to make e-waste collection effortless for communities, schools, and offices in Bengaluru through verified downstream partnerships.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Reverta Sustainable Solutions",
    description:
      "Learn about Reverta's grassroots e-waste collection facilitation, transparent downstream handover, and community partnerships.",
    url: "https://reverta.in/about",
    type: "website",
    images: [
      {
        url: "https://reverta.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Reverta Sustainable Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Reverta Sustainable Solutions",
    description:
      "Learn about Reverta's grassroots e-waste collection facilitation and verified partner network.",
    images: ["https://reverta.in/og-image.png"],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

