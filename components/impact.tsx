"use client"

import { motion } from "framer-motion"
import { Users, Scale, FileCheck2, HeartHandshake, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const impactPillars = [
  {
    num: "01",
    icon: Users,
    title: "Community Reach",
    description: "Schools, residential societies, and workplaces participating in regular collection campaigns.",
  },
  {
    num: "02",
    icon: Scale,
    title: "Weighed & Documented",
    description: "Every collection is accurately weighed so communities know exactly how much they divert.",
  },
  {
    num: "03",
    icon: FileCheck2,
    title: "Verified Handover",
    description: "Proper receipts and transfer documentation from authorized downstream recyclers.",
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Partner Perks",
    description: "Connecting participating schools and residents with meaningful sponsor rewards and recognition.",
  },
]

const guarantees = [
  "Calibrated weighing at collection point",
  "Handover receipts from authorized recyclers",
  "Post-drive community summaries",
]

export function Impact() {
  return (
    <section id="impact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Impact Approach</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Real action, <span className="text-primary">honest reporting</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            We believe environmental metrics should be backed by real records, not inflated projections. Here is how we measure success for every drive.
          </p>
        </motion.div>

        {/* Variety Layout: Asymmetric Split Grid instead of 4 generic cards */}
        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Feature Panel: The Verification Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-br from-primary/10 via-card to-card rounded-3xl p-8 border border-primary/20 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>The Reverta Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                Documented from your gate to the downstream partner.
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Rather than relying on unverified estimates, we ensure every drive produces tangible records that schools, RWAs, and workplaces can share with pride.
              </p>

              <div className="mt-6 space-y-3">
                {guarantees.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span>Zero inflated projections</span>
              <span className="font-semibold text-primary">100% Verified Records</span>
            </div>
          </motion.div>

          {/* Right Panel: Unified 2x2 Connected Audit Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-card rounded-3xl border border-border overflow-hidden shadow-sm grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border"
          >
            <div className="divide-y divide-border flex flex-col justify-between">
              {impactPillars.slice(0, 2).map((item) => (
                <div
                  key={item.title}
                  className="p-7 hover:bg-muted/30 transition-colors flex flex-col justify-between flex-1 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-foreground/60">{item.num}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="divide-y divide-border flex flex-col justify-between">
              {impactPillars.slice(2, 4).map((item) => (
                <div
                  key={item.title}
                  className="p-7 hover:bg-muted/30 transition-colors flex flex-col justify-between flex-1 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-foreground/60">{item.num}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-card border border-border p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Make an impact in your neighborhood</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              A single weekend drive in your school or apartment complex can safely divert hundreds of kilograms of electronics from local landfills.
            </p>
          </div>
          <Button className="h-11 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 flex-shrink-0" asChild>
            <Link href="#contact">
              Plan a Drive
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
