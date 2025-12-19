"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Recycle,
  Leaf,
  Award,
  Users,
  FileCheck2,
  Building,
  ArrowRight,
  Target,
  Handshake,
  Eye,
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
} from "lucide-react"
import { FloatingButtons } from "@/components/floating-buttons"

/* ───────────────────────────────────────── data ─────────────────────────────────────────── */

const values = [
  {
    icon: Target,
    title: "Zero Landfill",
    description: "Every device recycled, refurbished, or disposed with verified downstream partners.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "We design take-back programs and measurable sustainability roadmaps.",
  },
  {
    icon: Eye,
    title: "Transparent Ops",
    description: "Live tracking, manifest sharing, and audit-ready docs for every pickup.",
  },
  {
    icon: Handshake,
    title: "Community First",
    description: "Campus programs and household initiatives keep e-waste out of landfills.",
  },
]

const services = [
  {
    icon: Recycle,
    title: "E-Waste Collection",
    points: ["Scheduled pickups", "Drop-off centres", "Customized logistics"],
  },
  {
    icon: ShieldCheck,
    title: "Data Destruction",
    points: ["Certified wiping", "Physical shredding", "Destruction certificates"],
  },
  {
    icon: Cpu,
    title: "Recycling & Recovery",
    points: ["Manual & automated dismantling", "Metal & plastic recovery", "Component harvesting"],
  },
  {
    icon: Monitor,
    title: "Asset Refurbishment",
    points: ["Viable device restoration", "Resale programs", "Donation partnerships"],
  },
]

const acceptedItems = [
  { icon: Server, label: "Servers & Networking" },
  { icon: Monitor, label: "Computers & Monitors" },
  { icon: Smartphone, label: "Mobile Devices" },
  { icon: Printer, label: "Printers & Peripherals" },
  { icon: Battery, label: "Batteries & UPS" },
  { icon: Cpu, label: "Circuit Boards" },
  { icon: Home, label: "Home Appliances" },
  { icon: Gamepad2, label: "Electric toys" },
  { icon: Cable, label: "All kinds of e-waste" },
]

const credentials = [
  "Government-authorized handler of hazardous & electronic waste",
  "ISO 14001 (Environmental) & ISO 27001 (Information Security) certified",
  "Data-security protocols aligned with global best practices",
  "Full compliance documentation for every transaction",
]

const milestones = [
  { step: "1", title: "Book a Pickup", detail: "Online, phone, or WhatsApp—instant confirmation." },
  { step: "2", title: "Collection", detail: "Sealed containers, barcoded assets, secure transit." },
  { step: "3", title: "Processing", detail: "Devices logged, segregated, and routed at our facility." },
  { step: "4", title: "Data Destruction", detail: "All data-bearing devices securely wiped or shredded." },
  { step: "5", title: "Recycling", detail: "Manual + mechanical dismantling for maximum recovery." },
  { step: "6", title: "Reporting", detail: "Compliance certificates & impact reports delivered." },
]

/* ───────────────────────────────────────── page ─────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════════════════════════════ WHO WE ARE HERO ═══════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white pt-20">
        {/* Image on right side with gradient fade - starts below navbar */}
        <div className="absolute top-20 bottom-0 right-0 hidden lg:block w-[50%]">
          <img src="/ewaste-scaled.webp" alt="Reverta team at work" className="w-full h-full object-cover" />
          {/* Gradient overlay: starts fading from the left edge of image container */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        </div>

        {/* Content on left */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          <div
            className="max-w-xl lg:max-w-lg xl:max-w-xl rounded-3xl bg-white/90 backdrop-blur-md p-6 shadow-xl lg:bg-transparent lg:backdrop-blur-0 lg:p-0 lg:shadow-none"
          >
            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[3px] bg-primary rounded-full" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">About Us</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.15] tracking-tight"
            >
              Who We Are
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-foreground/75 leading-relaxed max-w-lg"
            >
              Reverta is an innovative e-waste management company dedicated to providing safe, 
              compliant, and socially responsible solutions for electronic waste recycling. 
              Our certified professionals and cutting-edge technology ensure your electronics 
              are disposed of securely and sustainably.
            </motion.p>

            {/* Stats row - Clear labels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-6 sm:gap-10"
            >
              {[
                { value: "100%", label: "Compliance Rate" },
                { value: "ISO", label: "Certified" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                asChild
              >
                <Link href="/#contact">
                  Schedule Pickup
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-6 rounded-full text-foreground hover:bg-foreground/5 font-medium"
                asChild
              >
                <Link href="/#services">View Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ VISION & VALUES ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Our Vision & Values</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">What drives us forward</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border/60 bg-card p-6 text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SERVICES ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Comprehensive E-Waste Management</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Our Services</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Turnkey solutions for businesses, institutions, and households.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                <ul className="mt-3 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ ACCEPTED ITEMS ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">What We Recycle</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Accepted Items</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center xl:flex xl:flex-wrap xl:justify-center">
            {acceptedItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-5 text-center xl:flex-none xl:w-40"
              >
                <item.icon className="w-8 h-8 text-primary" />
                <span className="text-xs font-medium text-foreground text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CREDENTIALS ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Certifications & Credentials</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Compliance is in our DNA</h2>
          </div>
          <ul className="space-y-4">
            {credentials.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5"
              >
                <Award className="w-6 h-6 text-primary shrink-0" />
                <span className="text-foreground">{c}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════ HOW IT WORKS ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">How It Works</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Easy, Transparent, Reliable</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Your e-waste never ends up in landfills—every item is responsibly recycled and repurposed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {m.step}
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ IMPACT ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Driving Positive Change</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Our Aspirational Impact</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { value: "50,000+", label: "Tonnes of e-waste to be recycled yearly" },
              { value: "50,000", label: "Metric tons of CO₂ to be saved" },
              { value: "10,000", label: "Green jobs to be created" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-card p-8"
              >
                <p className="text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY RECYCLE ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Why Recycle with Reverta?</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground">Benefits at a Glance</h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Protect Environment", desc: "Divert toxins from soil & water." },
              { icon: ShieldCheck, title: "Secure Data", desc: "Certified destruction of sensitive info." },
              { icon: Users, title: "Support Jobs", desc: "Enable circular economies & livelihoods." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to recycle responsibly?</h2>
          <p className="mt-4 text-muted-foreground">
            Schedule a pickup, get a quote, or join our sustainability mission today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-12 rounded-full bg-primary text-primary-foreground px-8" asChild>
              <Link href="/#contact">
                Schedule Pickup <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="h-12 rounded-full border-border px-8" asChild>
              <Link href="/blog">Visit Resource Center</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
