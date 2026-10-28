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
const companyTagline = "E-Waste Awareness & Collection Coordination"
const companyPhone = "+91 9652409397"
const companyEmail = "hello@reverta.in"
const companyAddress =
  "2nd Floor, 66, 1st Main Rd, above Axis Bank, 2nd Stage, 3rd Stage, Basaveshwar Nagar, Bengaluru, Karnataka 560079"
const companyCoordinates = { latitude: 12.9945, longitude: 77.5385 }

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reverta Sustainable Solutions | E-Waste Awareness & Collection Coordination",
    template: "%s | Reverta Sustainable Solutions",
  },
  description:
    "Reverta helps households, schools, residential communities and businesses organise responsible e-waste awareness and collection campaigns, coordinating safe handover to verified downstream partners.",
  keywords: [
    "reverta sustainable solutions",
    "reverta ewaste",
    "e-waste collection drive",
    "school e-waste campaign",
    "apartment e-waste collection",
    "community e-waste drive bengaluru",
    "responsible e-waste awareness",
  ],
  generator: "v0.app",
  applicationName: companyName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${companyName} | E-Waste Awareness & Collection Coordination`,
    description:
      "Reverta helps households, schools, residential communities and businesses organise responsible e-waste awareness and collection campaigns.",
    url: siteUrl,
    siteName: companyName,
    images: [
      {
        url: "/people-recycling.jpg",
        width: 1600,
        height: 900,
        alt: `${companyName} community e-waste collection and awareness initiative`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | E-Waste Awareness & Collection`,
    description:
      "Reverta coordinates community collection drives and connects e-waste to verified downstream partners.",
    images: ["/people-recycling.jpg"],
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
    <html lang="en" suppressHydrationWarning>
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
              "@context": "https://schema.org",
              "@type": ["Organization"],
              name: companyName,
              legalName: companyLegalName,
              url: siteUrl,
              telephone: companyPhone,
              email: companyEmail,
              slogan: companyTagline,
              image: `${siteUrl}/logos/reverta_fullLogoBlack.png`,
              logo: `${siteUrl}/logos/reverta_fullLogoBlack.png`,
              sameAs: [
                "https://www.facebook.com",
                "https://www.linkedin.com",
                "https://www.twitter.com",
                "https://www.instagram.com",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: companyAddress,
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560079",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: companyCoordinates.latitude,
                longitude: companyCoordinates.longitude,
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: companyPhone,
                  contactType: "campaign support",
                  email: companyEmail,
                  areaServed: "IN",
                  availableLanguage: ["en", "hi", "kn"],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
