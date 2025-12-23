"use client"

import { motion } from "framer-motion"
import { Truck, ShieldCheck, Recycle, RefreshCw, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "E-Waste Collection | Reverta Sustainable Solutions",
    description:
      "Convenient doorstep pickup for residential and commercial clients. We handle all types of electronic waste with professional care and proper documentation.",
    features: ["Free Pickup", "Same-Day Available", "All Electronics"],
    link: "#contact",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Data Destruction | Reverta Sustainable Solutions",
    description:
      "NSA-certified data wiping and physical destruction services. Your sensitive information is completely secure with our military-grade protocols.",
    features: ["Certificate Provided", "On-Site Options", "R2 Certified"],
    link: "#contact",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Recycle,
    title: "Recycling & Recovery | Reverta Sustainable Solutions",
    description:
      "Advanced material recovery processes to extract valuable components. We maximize resource recovery while minimizing environmental impact.",
    features: ["Zero Landfill", "Material Reports", "Eco-Certified"],
    link: "#contact",
    accent: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: RefreshCw,
    title: "Asset Refurbishment | Reverta Sustainable Solutions",
    description:
      "Give your old electronics a second life. We refurbish and redistribute functional devices responsibly, creating value from what others discard.",
    features: ["Asset Reports", "Tax Benefits", "IT Audit Ready"],
    link: "#contact",
    accent: "from-purple-500/20 to-pink-500/20",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Comprehensive E-Waste <span className="text-primary">Solutions</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
            End-to-end electronic waste management services tailored to your specific needs.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card with gradient background on hover */}
              <div className="relative bg-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-border hover:border-primary/20 transition-all duration-500 h-full overflow-hidden">
                {/* Subtle gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon and title row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <Link
                      href={service.link}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Get a custom quote for your needs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
