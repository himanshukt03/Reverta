"use client"

import { motion } from "framer-motion"
import { Users, Scale, FileCheck2, HeartHandshake, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const impactPillars = [
  {
    icon: Users,
    title: "Community Reach",
    description: "Schools, residential societies, and workplaces participating in regular collection campaigns.",
  },
  {
    icon: Scale,
    title: "Weighed & Documented",
    description: "Every collection is accurately weighed so communities know exactly how much they divert.",
  },
  {
    icon: FileCheck2,
    title: "Verified Handover",
    description: "Proper receipts and transfer documentation from authorized downstream recyclers.",
  },
  {
    icon: HeartHandshake,
    title: "Partner Perks",
    description: "Connecting participating schools and residents with meaningful sponsor rewards and recognition.",
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/35 border-y border-border/50 relative overflow-hidden">
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

        {/* 4 Pillars Grid (Original Clean Cards) */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactPillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Make an impact in your neighborhood</h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A single weekend drive in your school or apartment complex can safely divert hundreds of kilograms of electronics from local landfills.
            </p>
          </div>
          <Button size="lg" className="w-full sm:w-auto rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 flex-shrink-0" asChild>
            <Link href="/#contact">
              Plan a Drive
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
