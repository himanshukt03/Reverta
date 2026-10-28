import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schools & Communities | Host an E-Waste Drive",
  description:
    "Organise an e-waste collection drive with student workshops, community drop-off points, and sustainability reward vouchers for schools, colleges, and apartment societies.",
  alternates: {
    canonical: "/schools-communities",
  },
  openGraph: {
    title: "Schools & Communities | Reverta Sustainable Solutions",
    description:
      "Turn electronic waste recycling into an engaging community initiative with turnkey planning, resident communication flyers, and reward partner perks.",
    url: "https://reverta.in/schools-communities",
    type: "website",
    images: [
      {
        url: "https://reverta.in/people-recycling.jpg",
        width: 1600,
        height: 900,
        alt: "School and community e-waste collection drive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schools & Communities | Reverta Sustainable Solutions",
    description:
      "Host an effortless e-waste collection campaign with student activities, society drop-off bins, and verified downstream recycling.",
    images: ["https://reverta.in/people-recycling.jpg"],
  },
}

export default function SchoolsCommunitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

