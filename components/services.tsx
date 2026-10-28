"use client"

import { motion } from "framer-motion"
import { Users, Truck, Handshake, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Community Awareness",
    description:
      "Interactive workshops, student sessions, and practical guides to help everyone understand safe e-waste disposal.",
  },
  {
    icon: Truck,
    title: "Collection Drives",
    description:
      "Turnkey campaign planning and doorstep collection setups for schools, apartment societies, and workplaces.",
  },
  {
    icon: Handshake,
    title: "Verified Handover",
    description:
      "Routing every batch of collected electronics directly to authorized downstream recyclers with proper documentation.",
  },
  {
    icon: FileText,
    title: "Campaign Reporting",
    description:
      "Transparent summaries detailing total quantities collected and downstream partner handover records for peace of mind.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Simple, transparent <span className="text-primary">e-waste facilitation</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            We handle the awareness and collection logistics on the ground, connecting your community with trusted downstream recyclers.
          </p>
        </motion.div>

        {/* 2x2 Horizontal Feature Layout for distinct visual rhythm */}
        <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-card rounded-2xl p-6 border border-border/80 hover:border-primary/40 hover:shadow-sm transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Ready to plan a campaign for your organization?
            <span className="underline">Get in touch with us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
