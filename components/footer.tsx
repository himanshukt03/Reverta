"use client"

import type React from "react"
import Link from "next/link"
import { Leaf, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "Impact", href: "/#impact" },
  { label: "Resource Center", href: "/blog" },
  { label: "Find Locations", href: "/#locator" },
  { label: "Contact", href: "/#contact" },
]

const services = [
  { label: "E-Waste Collection", href: "/#services" },
  { label: "Data Destruction", href: "/#services" },
  { label: "Recycling & Recovery", href: "/#services" },
  { label: "Asset Refurbishment", href: "/#services" },
  { label: "Compliance Docs", href: "/#services" },
]

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
]

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block">
              <img src="/logos/reverta_fullLogoWhite.png" alt="Reverta logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm opacity-70 max-w-sm leading-relaxed">
              Reverta Sustainable Solutions Private Limited. Building a sustainable future through responsible e-waste
              recycling and circular economy practices.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-semibold mb-4">Subscribe to Our Newsletter</p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-primary">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl bg-background/10 border-background/20 text-background placeholder:text-background/50 h-11 focus-visible:ring-primary"
                    required
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="rounded-xl bg-primary hover:bg-primary/90 h-11 w-11 flex-shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider opacity-80">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider opacity-80">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider opacity-80">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider opacity-80">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-6 p-4 bg-background/5 rounded-xl">
              <p className="text-xs opacity-70 mb-2">Certifications</p>
              <p className="text-sm font-medium">ISO 14001 | ISO 27001</p>
              <p className="text-xs opacity-70 mt-1">Govt. Authorized E-Waste Recycler</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60 text-center sm:text-left">
            © {new Date().getFullYear()} Reverta Sustainable Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs opacity-50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" /> for a greener planet
          </p>
        </div>
      </div>
    </footer>
  )
}
