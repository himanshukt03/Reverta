"use client"

import { motion } from "framer-motion"
import { Leaf, Shield, Award, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Award,
    title: "Government Authorized",
    description: "Fully licensed and certified e-waste recycler under all applicable regulations",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "NSA-standard data destruction protocols with certificate of destruction",
  },
  {
    icon: Leaf,
    title: "Zero Landfill Policy",
    description: "100% of collected materials are recycled, refurbished, or properly disposed",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "48-hour pickup and rapid processing with real-time tracking",
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
            className="relative order-2 lg:order-1"
          >
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl -z-10" />

            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/professional-recycling-facility-team-sorting-elect.jpg"
                alt="Reverta recycling facility"
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-2xl p-5 lg:p-6 shadow-xl border border-border"
            >
              <p className="text-3xl lg:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years of Excellence</p>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                ))}
              </div>
            </motion.div>

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

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
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
