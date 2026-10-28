"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[94dvh] flex flex-col justify-center overflow-hidden">
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tl from-secondary/15 to-secondary/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* ====== MOBILE HERO ====== */}
      <div className="lg:hidden relative z-10 flex flex-col justify-center px-6 pt-28 pb-14 min-h-[85dvh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.18] tracking-tight">
            <span className="block">Responsible recycling,</span>
            <span className="text-primary block mt-1">Made simple.</span>
          </h1>

          <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
            Old electronics often stay tucked in drawers because people don&apos;t know where to take them. Reverta helps schools, communities, and offices run effortless collection drives and coordinates safe handover to verified recycling partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-7 flex flex-col gap-2.5 max-w-md"
        >
          <Button
            className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold shadow-sm"
            asChild
          >
            <Link href="#contact">
              Organise a Drive
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="w-full h-11 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-foreground text-sm font-medium"
            asChild
          >
            <Link href="/schools-communities">
              Schools & Communities
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* ====== DESKTOP HERO ====== */}
      <div className="hidden lg:flex relative z-10 flex-1 items-center pt-32 xl:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Content */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-bold text-foreground leading-[1.15] tracking-tight">
                <span className="block whitespace-nowrap">Responsible recycling,</span>
                <span className="text-primary block mt-1 whitespace-nowrap">Made simple.</span>
              </h1>

              <p className="mt-5 text-base xl:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Old electronics often stay tucked in cupboards because people aren&apos;t sure where to take them. Reverta helps schools, apartment societies, and workplaces organise community collection drives with clear communication and verified partner handover.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  className="h-11 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground px-5 text-sm font-semibold shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="#contact">
                    Organise a Drive
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 rounded-xl border border-border/80 bg-background/80 hover:bg-muted text-foreground px-5 text-sm font-medium transition-all"
                  asChild
                >
                  <Link href="/schools-communities">Schools & Communities</Link>
                </Button>
              </div>
            </motion.div>

            {/* Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="relative">
                {/* Image without white shade overlay */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border/50">
                  <img
                    src="/reverta-hero.jpg"
                    alt="Responsible recycling made simple with Reverta"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Trust-Signaling Pill Hanging Out on the Left */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 -left-6 sm:-left-8 bg-card/95 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl border border-border flex items-center gap-2.5 z-20"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-foreground tracking-tight">Verified Recycling Partners</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
