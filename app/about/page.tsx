"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Users,
  Handshake,
  CheckCircle2,
  Cpu,
  Server,
  Smartphone,
  Battery,
  Monitor,
  Printer,
  Home,
  Gamepad2,
  Cable,
  ArrowRight,
  Sparkles,
  Shield,
  FileText,
  Calendar,
} from "lucide-react"

const principles = [
  {
    icon: Sparkles,
    title: "Awareness Creates Understanding",
    description: "Clear, practical guidance on why e-waste should not end up in municipal bins.",
  },
  {
    icon: Users,
    title: "Convenience Drives Action",
    description: "Bringing collection points directly to apartment gates, schools, and offices.",
  },
  {
    icon: Handshake,
    title: "Partnerships Create Pathways",
    description: "Connecting community drives directly with registered, authorized downstream recyclers.",
  },
]

const services = [
  {
    icon: Users,
    title: "Awareness Sessions",
    description: "Workshops and educational campaigns for schools, colleges, and residential societies.",
  },
  {
    icon: Calendar,
    title: "Collection Campaign Coordination",
    description: "Turnkey planning, participant communication, and on-site collection logistics.",
  },
  {
    icon: Handshake,
    title: "Downstream Partner Handover",
    description: "Documented handover to authorized recyclers under verified compliance agreements.",
  },
  {
    icon: FileText,
    title: "Campaign Reporting",
    description: "Straightforward reports showing collected quantities and partner handover details.",
  },
]

const acceptedItems = [
  { icon: Smartphone, label: "Phones & Tablets" },
  { icon: Monitor, label: "Laptops & Monitors" },
  { icon: Cable, label: "Chargers & Cables" },
  { icon: Printer, label: "Printers & Scanners" },
  { icon: Battery, label: "Dry Batteries & UPS" },
  { icon: Cpu, label: "Components & PCBs" },
  { icon: Home, label: "Small Appliances" },
  { icon: Gamepad2, label: "Electronic Toys" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Reverta</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
            Building the bridge between <span className="text-primary">awareness and action.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Most people want to dispose of old electronics responsibly, but knowing where to go and who to trust is often the biggest barrier. Reverta was conceived to make community participation effortless.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7" asChild>
              <Link href="/#contact">
                Organise a Drive
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-7" asChild>
              <Link href="/schools-communities">Community Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Origin & Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Origin</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Inspired by grassroots environmental action
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our direction is inspired by grassroots environmental awareness and collection initiatives associated with NGreenTech. We realized that while industrial recyclers operate large processing plants, everyday citizens are left without an accessible bridge to reach them.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Reverta focuses exclusively on that critical front end: creating awareness, organizing community collection campaigns, and coordinating handover to appropriate downstream partners.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-card border border-border">
              <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Our Role & Transparency
              </h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Reverta acts as a facilitator and campaign coordinator. We do not claim to operate an in-house recycling facility or hold authorisations we do not have. Downstream processing is carried out by verified partners.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
              <img
                src="/e-waste-people.jpg"
                alt="Volunteers and community members participating in an e-waste drive"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">What We Believe</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">How we create lasting impact</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">What We Facilitate</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Our Core Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-base mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Collection Scope</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Typical Items Accepted in Drives</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            From dead phones to tangle boxes of wires, here are common electronic items collected in community drives.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {acceptedItems.map((item) => (
              <div key={item.label} className="p-5 rounded-2xl bg-card border border-border flex flex-col items-center gap-3">
                <item.icon className="w-7 h-7 text-primary" />
                <span className="text-xs font-semibold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to organise a drive?</h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Reach out to our team to plan a collection campaign for your school, college, or housing society.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-xl px-7" asChild>
              <Link href="/#contact">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-7" asChild>
              <Link href="/blog">Read Disposal Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
