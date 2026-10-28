"use client"

import { motion } from "framer-motion"

const partners = [
  {
    name: "NgreenTech",
    logo: "/Ngreen-logo.png",
    note: "Strategic Partner of Reverta Sustainable Solutions",
  },
]

export function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Partners</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground"
          >
            Our Collaborators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground"
          >
            We work with mission-aligned organizations to expand responsible e-waste collection.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-6 shadow-sm w-full max-w-xs text-center"
            >
              <div className="h-16 flex items-center justify-center">
                <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-16 w-auto object-contain" />
              </div>
              <p className="text-base font-semibold text-foreground">{partner.name}</p>
              {partner.note ? <p className="text-xs text-muted-foreground">{partner.note}</p> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
