"use client"

import { motion } from "framer-motion"
import { Users, Truck, Handshake, Recycle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "Awareness First",
  },
  {
    icon: Truck,
    title: "Convenient Drives",
  },
  {
    icon: Handshake,
    title: "Verified Handover",
  },
  {
    icon: Recycle,
    title: "Responsible Routing",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 w-full max-w-xl mx-auto lg:mx-0"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-card border border-border/50">
              <img
                src="/people-recycling.svg"
                alt="Community e-waste awareness and responsible recycling"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Reverta</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Connecting awareness with <span className="text-primary">real action.</span>
            </h2>

            <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Reverta is an e-waste awareness and collection coordination platform. Inspired by grassroots work alongside NGreenTech, we help schools, residential communities, and workplaces run hassle-free collection drives, ensuring every item is safely routed to verified downstream recycling partners.
            </p>

            {/* 2x2 simplified badges exactly like Image 2 */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{feature.title}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button className="h-11 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5 shadow-sm" asChild>
                <Link href="/#contact">
                  Organise a Drive
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-xl border-border hover:border-primary/30 text-foreground text-sm font-medium px-5 bg-transparent"
                asChild
              >
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
