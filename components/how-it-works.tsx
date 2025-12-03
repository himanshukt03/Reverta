"use client"

import { motion } from "framer-motion"
import { Calendar, Truck, Settings, ShieldCheck, Recycle, FileText, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Book",
    description: "Schedule online or call",
    detail: "Easy booking in 2 minutes",
  },
  {
    icon: Truck,
    title: "Collect",
    description: "We pick up from you",
    detail: "Free doorstep service",
  },
  {
    icon: Settings,
    title: "Process",
    description: "Items sorted & logged",
    detail: "Full inventory tracking",
  },
  {
    icon: ShieldCheck,
    title: "Destroy",
    description: "Secure data wiping",
    detail: "NSA-grade protocols",
  },
  {
    icon: Recycle,
    title: "Recycle",
    description: "Material recovery",
    detail: "Zero landfill policy",
  },
  {
    icon: FileText,
    title: "Report",
    description: "Get your certificate",
    detail: "Complete documentation",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Simple Steps to <span className="text-primary">Responsible</span> Recycling
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Our streamlined process makes e-waste recycling easy and hassle-free.
          </p>
        </motion.div>

        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />

            <div className="grid grid-cols-6 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center group"
                >
                  {/* Step circle */}
                  <div className="relative mx-auto">
                    <div className="w-32 h-32 rounded-full bg-card border-2 border-border flex items-center justify-center mx-auto shadow-lg group-hover:border-primary/50 group-hover:shadow-xl transition-all duration-300">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-9 h-9 text-primary" />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-bold text-foreground text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    <p className="mt-2 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative"
              >
                <div className="flex items-center gap-4 bg-card rounded-2xl p-4 border border-border">
                  {/* Step number and icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Check mark */}
                  <CheckCircle2 className="w-5 h-5 text-primary/30 flex-shrink-0" />
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && <div className="absolute left-7 top-[4.5rem] w-0.5 h-4 bg-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
