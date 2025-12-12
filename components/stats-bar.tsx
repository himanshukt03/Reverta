"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: "ISO Certified",
    label: "14001 & 27001 Standards",
    color: "text-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    icon: Shield,
    value: "Zero Landfill",
    label: "Our Commitment to You",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    value: "100% Secure",
    label: "Data Destruction",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
]

export function StatsBar() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 mt-10 lg:mt-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative rounded-2xl lg:rounded-[2.25rem] border border-border/60 bg-background/80 backdrop-blur-xl shadow-[0px_24px_60px_-30px_rgba(15,23,42,0.65)] overflow-hidden">
          {/* Soft gradient accent blending with background */}
          <div className="absolute inset-x-8 top-0 h-px rounded-full bg-linear-to-r from-primary/40 via-secondary/30 to-primary/35" />

          <div className="grid md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`flex items-center gap-4 p-5 lg:p-7 bg-linear-to-br from-background/30 via-card/20 to-muted/30 transition-all duration-300 ${
                  index !== 0 ? "border-t md:border-t-0 md:border-l border-border/50" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${stat.bg} flex items-center justify-center shrink-0 ring-1 ring-border/50`}
                >
                  <stat.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-lg lg:text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
