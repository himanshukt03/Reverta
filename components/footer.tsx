"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "Schools & Communities", href: "/schools-communities" },
  { label: "Resource Center", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

const programs = [
  { label: "Schools & Colleges", href: "/schools-communities" },
  { label: "Residential Communities", href: "/schools-communities" },
  { label: "Reward Partnerships", href: "/schools-communities" },
  { label: "Workplace Drives", href: "/#contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <img src="/logos/reverta_fullLogoWhite.png" alt="Reverta logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm font-semibold text-primary">Make responsible e-waste participation easier.</p>
            <p className="text-sm opacity-70 max-w-md leading-relaxed">
              Reverta Sustainable Solutions helps households, schools, residential communities, and businesses organise responsible e-waste collection campaigns, coordinating safe handover to verified downstream partners.
            </p>
            <div className="space-y-2 pt-2 text-xs opacity-80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 9652409397</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>hello@reverta.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-background/90">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-background/90">Community Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Reverta Sustainable Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:opacity-100 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-100 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
