"use client"

import { motion } from "framer-motion"
import { Users, Truck, Handshake, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Users,
    badge: "Workshops & Guidance",
    title: "Community Awareness",
    description:
      "Interactive sessions, student activities, and clear sorting guides to help residents understand what can be safely recycled.",
  },
  {
    icon: Truck,
    badge: "Turnkey Logistics",
    title: "Collection Drives",
    description:
      "End-to-end campaign planning and doorstep collection setups for schools, apartment complexes, and workplaces.",
  },
  {
    icon: Handshake,
    badge: "Authorized Routing",
    title: "Verified Handover",
    description:
      "Routing every batch of collected electronics directly to authorized downstream recyclers with formal transfer receipts.",
  },
  {
    icon: FileText,
    badge: "Honest Records",
    title: "Campaign Reporting",
    description:
      "Transparent post-drive summaries detailing total kilograms collected and downstream partner handover documentation.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

        {/* 2x2 Feature Layout with distinct badges and accent structure */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-card rounded-2xl p-7 border border-border/70 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <service.icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
