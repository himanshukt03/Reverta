"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Recycle, ClipboardCheck, MapPin, FileText, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    icon: ShieldCheck,
    question: "How does Reverta keep my data secure?",
    answer:
      "All data-bearing devices are logged on arrival, wiped using certified software, and physically destroyed when requested. You also receive a tamper-proof certificate of destruction for compliance records.",
  },
  {
    icon: Recycle,
    question: "What kinds of electronics can I recycle?",
    answer:
      "From enterprise servers, laptops, and networking gear to home appliances, mobile devices, batteries, lamps, and peripherals—if it plugs in or stores data, we can collect, recycle, or refurbish it.",
  },
  {
    icon: ClipboardCheck,
    question: "What does the pickup process look like?",
    answer:
      "Schedule online or via phone, receive instant confirmation, and our trained crew arrives with sealed containers. Every item is barcoded, tracked through dismantling, and reported back to you.",
  },
  {
    icon: FileText,
    question: "Do I get regulatory documentation?",
    answer:
      "Yes. Reverta provides manifest copies, e-waste transfer notes, and recycling impact summaries so audits, ESG reports, and statutory filings stay up to date.",
  },
  {
    icon: MapPin,
    question: "Where can I drop off e-waste?",
    answer:
      "Use our collection point locator to find Reverta hubs across Southern India or book a home and office pickup for bulky loads.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-primary uppercase tracking-[0.2em]"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-3xl sm:text-4xl font-bold text-foreground"
          >
            Everything you need to know
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg sm:text-xl text-muted-foreground"
          >
            Transparent workflows, ISO-certified facilities, and dedicated support teams keep your organisation compliant,
            circular, and confident.
          </motion.p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="border-b border-border/60 pb-2"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left py-3"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                </div>
                <Plus
                  className={`w-5 h-5 text-primary transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                  aria-hidden
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`content-${faq.question}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="pl-8 pr-4 pb-4 text-base text-muted-foreground"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-card/60 p-6"
        >
          <div>
            <p className="text-lg font-semibold text-foreground">Still have questions?</p>
            <p className="text-sm text-muted-foreground">
              Reach our customer success desk for instant pickups, compliance clarifications, or sustainability reports.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button className="h-12 rounded-xl bg-primary text-primary-foreground" asChild>
              <Link href="/locator">Find a collection point</Link>
            </Button>
            <Button variant="outline" className="h-12 rounded-xl border-border" asChild>
              <Link href="/#contact">Talk to the team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
