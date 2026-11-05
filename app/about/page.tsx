"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
  FileText,
  Calendar,
  Award,
  X,
  Maximize2,
} from "lucide-react"

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
  const [selectedAward, setSelectedAward] = useState<{
    image: string
    title: string
    subtitle: string
  } | null>(null)

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
          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm font-semibold px-2.5 sm:px-7" asChild>
              <Link href="/#contact" className="truncate">
                Organise Drive
                <ArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 shrink-0" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 sm:h-12 rounded-xl text-xs sm:text-sm px-2.5 sm:px-7 border border-border/80 bg-card/80 hover:bg-primary/10 hover:text-primary hover:border-primary/40 text-foreground transition-colors" asChild>
              <Link href="/schools-communities" className="truncate text-foreground hover:text-primary">Community Programs</Link>
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
              Our direction is inspired by grassroots environmental awareness and collection initiatives associated with NGreenTech. We realized that while industrial recyclers operate large processing plants, everyday citizens are often left without an accessible bridge to reach them.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Reverta focuses on that critical front end — creating awareness, organizing community collection campaigns, and coordinating safe handover to verified downstream partners who handle all recycling and recovery.
            </p>
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

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/50">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
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

      {/* Recognition & Awards */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-gradient-to-b from-background via-primary/[0.02] to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2.5">
              <div className="w-6 h-0.5 bg-primary rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Recognition</span>
              <div className="w-6 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Awards & Honors</h2>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Recognitions and certificates earned by Reverta and its initiative partners. Click to view full certificate.
            </p>
          </div>

          {/* Centered cards container (centers single item, expands nicely to 2 or 3 items) */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() =>
                setSelectedAward({
                  image: "/reverta-recognition-certificate.jpeg",
                  title: "Startup's Clarity Challenge 2026",
                  subtitle: "Top-Tier Ranking · Reverta + NGreenTech Program",
                })
              }
              className="group w-full max-w-xs rounded-2xl p-3 bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all text-left flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted/30 border border-border/40">
                <img
                  src="/reverta-recognition-certificate.jpeg"
                  alt="Reverta and NGreenTech E-Waste Program Certificate of Recognition"
                  className="w-full h-full object-contain p-1 group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-medium backdrop-blur-[1px]">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to expand</span>
                </div>
              </div>
              <div className="mt-3 px-1 text-center">
                <p className="text-xs font-semibold text-foreground leading-snug">
                  Startup&apos;s Clarity Challenge 2026
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Top-Tier Ranking · Reverta + NGreenTech Program
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal Modal for Certificate View */}
      <AnimatePresence>
        {selectedAward && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] bg-card rounded-2xl sm:rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-border/60">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{selectedAward.title}</h3>
                  <p className="text-xs text-muted-foreground">{selectedAward.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedAward(null)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative p-2 sm:p-4 bg-muted/20 flex-1 overflow-auto flex items-center justify-center">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/50">
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
