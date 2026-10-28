"use client"

import { motion } from "framer-motion"
import { MessageSquare, Calendar, Users, Truck, CheckCircle2, Shield } from "lucide-react"

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Get in Touch",
    description: "Tell us about your school, apartment community, or workplace.",
  },
  {
    num: "02",
    icon: Calendar,
    title: "Plan the Drive",
    description: "We align on accepted materials, convenient dates, and pickup logistics.",
  },
  {
    num: "03",
    icon: Users,
    title: "Spread the Word",
    description: "We provide simple posters, checklists, and announcements for residents.",
  },
  {
    num: "04",
    icon: Truck,
    title: "Collect & Hand Over",
    description: "Items are collected and safely routed to our verified recycling partner.",
  },
  {
    num: "05",
    icon: CheckCircle2,
    title: "Review Results",
    description: "You receive a clear summary of collected items and handover receipts.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From awareness to <span className="text-primary">responsible handover</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Organising a collection drive is straightforward and stress-free. Here is how we do it together.
          </p>
        </motion.div>

        {/* Desktop 5-Card Grid: ModelCards Component Style with Green Theme */}
        <div className="mt-14 hidden md:block">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative bg-card rounded-2xl border border-border/80 p-7 min-h-[290px] overflow-hidden shadow-xs hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
              >
                {/* Corner polygon slice matching the CSS clip-path */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.08] pointer-events-none transition-colors group-hover:bg-primary/[0.14]"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                />

                {/* Big watermark step number */}
                <span className="absolute top-3.5 right-4 font-bold text-primary/25 group-hover:text-primary/35 transition-colors text-5xl leading-none select-none pointer-events-none font-sans">
                  {step.num}
                </span>

                {/* Card Icon in Reverta Green */}
                <div className="w-11 h-11 text-primary mb-6 flex items-center justify-start flex-shrink-0">
                  <step.icon className="w-10 h-10 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-foreground text-lg mb-2.5 leading-snug group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile slim vertical timeline with continuous connecting line */}
        <div className="mt-10 md:hidden relative max-w-md mx-auto">
          {/* Continuous vertical connecting line */}
          <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />

          <div className="space-y-3 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-3.5 bg-card rounded-xl p-3.5 border border-border/80 shadow-xs relative"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 z-10 ring-2 ring-background">
                  <step.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">{step.title}</h3>
                    <span className="text-xs font-bold text-primary/40 font-mono">{step.num}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simplified Bottom Toast / Note */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-muted/40 border border-border/80 flex items-start gap-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">Our Transparent Promise</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
              We focus on community awareness, campaign planning, and convenient collection. We do not claim to operate an in-house recycling facility. All processing and recovery is handled by verified, authorized downstream partners under documented arrangements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
