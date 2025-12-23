import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const siteUrl = "https://reverta.in"
const companyName = "Reverta Sustainable Solutions"
const companyLegalName = "Reverta Sustainable Solutions Private Limited"
const companyTagline = "Your trusted pan-India e-waste recycling partner"
const companyPhone = "+91 11 2345 6789"
const companyEmail = "info@reverta.in"
const companyAddress =
  "2nd Floor, 66, 1st Main Rd, above Axis Bank, 2nd Stage, 3rd Stage, Basaveshwar Nagar, Bengaluru, Karnataka 560079"
const companyCoordinates = { latitude: 12.9945, longitude: 77.5385 }

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reverta Sustainable Solutions | Trusted E-Waste Company in India",
    template: "%s | Reverta Sustainable Solutions",
  },
  description:
    `${companyName} delivers secure data destruction, ITAD, and responsible e-waste recycling with ISO-compliant processes across India. Trusted reverta ewaste company for pickups, reporting, and zero-landfill outcomes.`,
  keywords: [
    "reverta sustainable solutions",
    "reverta ewaste",
    "reverta ewaste company",
    "e-waste management india",
    "electronic waste recycling",
    "secure data destruction",
    "IT asset disposition",
    "ewaste pickup near me",
    "bengaluru e-waste recycler",
    "iso 14001 ewaste",
  ],
  generator: "v0.app",
  applicationName: companyName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${companyName} | Trusted E-Waste Company in India`,
    description:
      `${companyName} provides certified e-waste recycling, IT asset disposition, and secure data destruction with nationwide pickup coverage.`,
    url: siteUrl,
    siteName: companyName,
    images: [
      {
        url: "/people-recycling.svg",
        width: 1600,
        height: 900,
        alt: `${companyName} technicians dismantling electronics for responsible recycling`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | E-Waste & ITAD`,
    description:
      `${companyName} handles e-waste collection, certified recycling, and data destruction across India with zero-landfill outcomes.`,
    images: ["/people-recycling.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Reverta" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness'],
              name: companyName,
              legalName: companyLegalName,
              url: siteUrl,
              telephone: companyPhone,
              email: companyEmail,
              slogan: companyTagline,
              image: `${siteUrl}/logos/reverta_fullLogoBlack.png`,
              logo: `${siteUrl}/logos/reverta_fullLogoBlack.png`,
              sameAs: [
                'https://www.facebook.com',
                'https://www.linkedin.com',
                'https://www.twitter.com',
                'https://www.instagram.com',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: companyAddress,
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560079',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: companyCoordinates.latitude,
                longitude: companyCoordinates.longitude,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: companyPhone,
                  contactType: 'customer support',
                  email: companyEmail,
                  areaServed: 'IN',
                  availableLanguage: ['en', 'hi'],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: companyName,
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/?s={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
