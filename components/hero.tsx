"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden lg:min-h-[90vh] lg:flex lg:flex-col lg:justify-center">
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Blobs (Hidden on mobile to eliminate GPU compositor scroll jitter) */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="hidden sm:block absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl pointer-events-none will-change-transform"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 0.92, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="hidden sm:block absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tl from-secondary/15 to-secondary/5 rounded-full blur-3xl pointer-events-none will-change-transform"
      />

      {/* ====== MOBILE HERO ====== */}
      <div className="lg:hidden relative z-10 flex flex-col justify-start px-5 sm:px-6 pt-24 sm:pt-28 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-md mx-auto w-full"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.16] tracking-tight">
            <span className="block">Responsible recycling,</span>
            <span className="text-primary block mt-1">Made simple.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Effortless e-waste collection drives for schools, apartment societies, and workplaces with verified partner handover.
          </p>

          {/* Side-by-Side Action Buttons on Mobile */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 w-full">
            <Button
              className="w-full h-11 px-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-md shadow-primary/20 inline-flex items-center justify-center gap-1.5"
              asChild
            >
              <Link href="#contact" className="whitespace-nowrap">
                Organise a Drive
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full h-11 px-2 rounded-full border border-border bg-card/80 backdrop-blur-sm text-foreground text-xs font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/40 text-center flex items-center justify-center transition-colors"
              asChild
            >
              <Link href="/schools-communities" className="whitespace-nowrap truncate text-foreground hover:text-primary">
                Schools & Communities
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Arched / Dome Hero Image (Only on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 sm:mt-10 w-full max-w-md mx-auto"
        >
          <div className="relative aspect-[4/3] rounded-[36px] sm:rounded-[44px] overflow-hidden shadow-xl border border-border/70 bg-card transform-gpu">
            <img
              src="/reverta-hero.jpg"
              alt="Responsible recycling made simple with Reverta"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
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
                  className="h-11 rounded-xl border border-border/80 bg-card/80 hover:bg-primary/10 hover:text-primary hover:border-primary/40 text-foreground px-5 text-sm font-medium transition-colors"
                  asChild
                >
                  <Link href="/schools-communities" className="text-foreground hover:text-primary">Schools & Communities</Link>
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
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border/50">
                  <img
                    src="/reverta-hero.jpg"
                    alt="Responsible recycling made simple with Reverta"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
