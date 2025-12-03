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
} from "lucide-react"

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

      {/* ═══════════════════════════════ PAGE HEADER ═══════════════════════════════ */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 sm:px-6 lg:px-8 border-b border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary"
          >
            About Reverta
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl sm:text-5xl font-extrabold text-foreground leading-tight"
          >
            Reverta Sustainable Solutions Private Limited
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We are an innovative e-waste management company dedicated to safe, compliant, and socially responsible
            recycling. Our network spans Southern India, empowering businesses and communities to close the loop.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════ VISION & VALUES ═══════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {acceptedItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-5 text-center"
              >
                <item.icon className="w-8 h-8 text-primary" />
                <span className="text-xs font-medium text-foreground">{item.label}</span>
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
    </main>
  )
}
