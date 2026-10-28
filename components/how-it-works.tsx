"use client"

import { motion } from "framer-motion"
import { MessageSquare, Calendar, Users, Truck, CheckCircle2, Shield } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "1. Get in Touch",
    description: "Tell us about your school, apartment community, or workplace.",
  },
  {
    icon: Calendar,
    title: "2. Plan the Drive",
    description: "We decide accepted items, convenient dates, and pickup logistics.",
  },
  {
    icon: Users,
    title: "3. Spread the Word",
    description: "We provide simple posters, checklists, and messages for residents.",
  },
  {
    icon: Truck,
    title: "4. Collect & Hand Over",
    description: "Items are collected and safely handed over to our verified partner.",
  },
  {
    icon: CheckCircle2,
    title: "5. Review Results",
    description: "You receive a clear summary of collected items and handover records.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

        {/* Desktop 5-step grid */}
        <div className="mt-16 hidden lg:block">
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group bg-card p-6 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile slim vertical timeline with connecting line */}
        <div className="mt-10 lg:hidden relative max-w-md mx-auto">
          {/* Continuous vertical connecting line */}
          <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />

          <div className="space-y-3 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-3.5 bg-card rounded-xl p-3 border border-border/80 shadow-xs relative"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 z-10 ring-2 ring-background">
                  <step.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{step.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transparent Promise Note */}
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
