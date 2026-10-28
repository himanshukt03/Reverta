"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GraduationCap,
  Building2,
  Gift,
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
  HeartHandshake,
} from "lucide-react"

export default function SchoolsAndCommunitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Community Action & Rewards</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
            Bring responsible e-waste action to your <span className="text-primary">community.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            One campaign can bring hundreds of people together. We help schools, colleges, apartment societies, and local brands turn e-waste disposal into an engaging community experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7" asChild>
              <Link href="/#contact">
                Organise a Campaign
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-7" asChild>
              <Link href="#reward-partners">Reward Partnerships</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary rounded-full" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">For Schools & Colleges</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Turn sustainability into a practical student experience.
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Rather than just talking about climate change in textbooks, invite students to lead their own campus collection drive. It builds leadership, teamwork, and environmental responsibility.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Awareness Workshops</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Interactive sessions explaining the circular economy and safe recycling.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Student-Led Collection Drives</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Designated campus collection days where students bring old household gadgets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Certificates & Educational Visits</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Recognition for top contributors and opportunities for partner learning experiences.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="rounded-xl" asChild>
                  <Link href="/#contact">
                    Plan a School Drive
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
                <img
                  src="/e-waste-people.jpg"
                  alt="Students and volunteers participating in campus e-waste drive"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Communities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
                <img
                  src="/people-recycling.jpg"
                  alt="Apartment residents participating in an e-waste declutter drive"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary rounded-full" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">For Apartments & RWAs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Help your residents declutter their homes responsibly.
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Almost every home has a box of tangled chargers, broken phones, and forgotten keyboards. An apartment collection weekend gives everyone an effortless way to clear space without harming the environment.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Clear Resident Communication</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Simple flyers and WhatsApp message templates detailing accepted items.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Clubhouse or Gate Drop-Off</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Designated collection bins set up over a convenient weekend.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Community Impact Tally</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">A shared summary showing total kilograms diverted by your community.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="rounded-xl" asChild>
                  <Link href="/#contact">
                    Plan an Apartment Drive
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reward Partners Section */}
      <section id="reward-partners" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Reward Partnerships</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Turn good actions into <span className="text-primary">shared value</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We invite local businesses, brands, and service providers to partner with our community drives. Connect with conscious consumers through meaningful incentives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">Reach Engaged Households</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect directly with residential societies and school families who actively care about sustainability and clean living.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">Offer Real Incentives</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Provide discounts, trial passes, educational coupons, or sample products to reward residents for participating in drives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">Tangible Visibility</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feature your brand on drive communication materials and campaign reports with measurable engagement tracking.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-xl px-8" asChild>
              <Link href="/#contact">
                Discuss a Reward Partnership
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Simple 4-Step Process for Campaigns */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground">How getting started works</h3>
            <p className="text-sm text-muted-foreground mt-1">Four simple steps from first message to documented results.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step 1</p>
              <h4 className="font-semibold text-foreground text-sm">Tell Us Your Goal</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Share your campus size, location, and preferred timeline.</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step 2</p>
              <h4 className="font-semibold text-foreground text-sm">Agree on the Plan</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">We provide checklists, announcement templates, and date options.</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step 3</p>
              <h4 className="font-semibold text-foreground text-sm">Run the Drive</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Residents drop off devices; items are safely collected.</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step 4</p>
              <h4 className="font-semibold text-foreground text-sm">Review Summary</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Receive a verified handover summary and community appreciation.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
