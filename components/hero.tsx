"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Recycle, Play, ChevronDown, Sparkles, Shield, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background */}
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
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tl from-secondary/15 to-secondary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl hidden lg:block"
      />

      {/* ====== MOBILE HERO (Completely different layout) ====== */}
      <div className="lg:hidden relative z-10 flex-1 flex flex-col pt-20">
        {/* Mobile Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-5 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 backdrop-blur-sm text-primary px-4 py-2.5 rounded-full text-sm font-semibold mb-6 border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              India's Trusted E-Waste Partner
            </motion.div>

            <h1 className="text-[2.5rem] leading-[1.1] font-bold text-foreground tracking-tight">
              Recycle
              <span className="block text-primary">Responsibly</span>
            </h1>

            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Reverta Sustainable Solutions Private Limited company is committed to building a sustainable future by
              responsibly collecting, recycling, and repurposing electronic waste.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-6"
          >
            {[
              { icon: Shield, label: "100% Secure" },
              { icon: Leaf, label: "Eco-Certified" },
              { icon: Sparkles, label: "Free Pickup" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-foreground border border-border"
              >
                <item.icon className="w-3.5 h-3.5 text-primary" />
                {item.label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 px-4"
          >
            <Button
              size="lg"
              className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold shadow-lg shadow-primary/25"
              asChild
            >
              <Link href="#contact">
                Schedule Free Pickup
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full h-14 rounded-2xl border-2 border-border text-foreground hover:bg-muted text-base font-medium bg-card/50 backdrop-blur-sm"
              asChild
            >
              <Link href="#process">
                <Play className="mr-2 w-4 h-4" />
                See How It Works
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative px-5 pb-6"
        >
          <div className="relative bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-3xl p-5 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-bold text-foreground">50,000+</p>
                <p className="text-sm text-muted-foreground">Tonnes recycled responsibly</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">10+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Years</p>
              </div>
              <div className="text-center border-x border-border/50">
                <p className="text-lg font-bold text-foreground">500+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">ISO</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Certified</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center pb-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="p-2"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* ====== DESKTOP HERO ====== */}
      <div className="hidden lg:flex relative z-10 flex-1 items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                Your Trusted
                <span className="block mt-2">
                  <span className="text-primary">E-Waste</span> Solution
                </span>
              </h1>

              <p className="mt-8 text-lg xl:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Reverta Sustainable Solutions Private Limited company is committed to building a sustainable future by
                responsibly collecting, recycling, and repurposing electronic waste.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="#contact">
                    Schedule Pickup
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-2xl border-2 border-border hover:border-primary/30 text-foreground hover:bg-primary/5 px-8 text-base font-medium bg-card/50 backdrop-blur-sm transition-all"
                  asChild
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main image card */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <img
                    src="/modern-sustainable-recycling-facility-with-green-t.jpg"
                    alt="Reverta sustainable recycling facility"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-6 -right-6 bg-card rounded-2xl p-5 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <Recycle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">50k+</p>
                      <p className="text-xs text-muted-foreground">Tonnes Recycled</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-2xl px-6 py-4 shadow-xl"
                >
                  <p className="text-xs font-medium opacity-90">Certified Partner</p>
                  <p className="text-lg font-bold">ISO 14001 & 27001</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
