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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reverta | Your Trusted E-Waste Solution",
    template: "%s | Reverta",
  },
  description:
    "Reverta Sustainable Solutions delivers secure data destruction and responsible e-waste recycling with ISO-compliant processes across India.",
  keywords: [
    "e-waste",
    "ewaste management",
    "reverta e-waste",
    "electronic waste recycling",
    "data destruction",
    "sustainability",
    "circular economy",
    "secure e-waste pickup",
    "IT asset disposition",
  ],
  generator: "v0.app",
  applicationName: "Reverta",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reverta | Your Trusted E-Waste Solution",
    description:
      "Reverta Sustainable Solutions delivers secure data destruction and responsible e-waste recycling with ISO-compliant processes across India.",
    url: siteUrl,
    siteName: "Reverta",
    images: [
      {
        url: "/people-recycling.svg",
        width: 1600,
        height: 900,
        alt: "Technicians dismantling electronics for responsible recycling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverta | Your Trusted E-Waste Solution",
    description:
      "Reverta Sustainable Solutions delivers secure data destruction and responsible e-waste recycling with ISO-compliant processes across India.",
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
      </head>
      <body className={`${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
