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

export const metadata: Metadata = {
  title: "Reverta | Your Trusted E-Waste Solution",
  description:
    "Reverta Sustainable Solutions - Secure data destruction and responsible recycling for a sustainable future. ISO certified e-waste management.",
  keywords: ["e-waste", "recycling", "electronic waste", "data destruction", "sustainability", "circular economy"],
    generator: 'v0.app',
  icons: {
    icon: "/logos/reverta_iconWhite.png",
    shortcut: "/logos/reverta_iconWhite.png",
    apple: "/logos/reverta_iconWhite.png",
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
      <body className={`${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
