"use client"

import { motion } from "framer-motion"
import { Leaf, Shield, Award, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Award,
    title: "Government Authorized",
  },
  {
    icon: Shield,
    title: "ISO-Compliant Processes",
  },
  {
    icon: Leaf,
    title: "Zero Landfill Policy",
  },
  {
    icon: Zap,
    title: "Fast Processing",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 w-full max-w-xl lg:justify-self-end"
          >
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl -z-10" />

            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/people-recycling.svg"
                alt="Reverta Sustainable Solutions technicians dismantling electronics for responsible recycling in India"
                className="object-cover object-right w-full h-full"
              />
              {/* Softer overlay to reveal more image on the right */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-3 -left-3 w-20 h-20 bg-primary/10 rounded-2xl -z-10 sm:hidden" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
              Building a <span className="text-primary">Sustainable</span> Future
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Reverta Sustainable Solutions Private Limited is committed to transforming electronic waste management in
              India. Our vision is to achieve a zero-landfill future through responsible collection, recycling, and
              repurposing.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{feature.title}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6" asChild>
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-border hover:border-primary/30 text-foreground h-12 px-6 bg-transparent"
                asChild
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
