"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpenCheck, Info, X, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface Article {
  title: string
  summary: string
  category: string
  content: string[]
}

const articles: Article[] = [
  {
    title: "How Households Can Prep Old Gadgets for a Drive",
    summary: "A quick three-step routine before dropping off old phones, laptops, and chargers.",
    category: "Safe Disposal Tips",
    content: [
      "Back up photos and important files, then perform a factory reset. Most smartphones, laptops, and tablets have an 'Erase all content' option in their settings.",
      "Remove SIM cards, microSD memory cards, and cases. Keep chargers and cables bundled with rubber bands or twist ties so they do not tangle.",
      "Place smaller items in a cardboard box or clean bag. Keeping dry batteries separate from laptops helps campaign teams weigh and sort items safely.",
    ],
  },
  {
    title: "Understanding Registered Downstream Recyclers",
    summary: "Why electronic waste must only go to verified, government-authorized processing facilities.",
    category: "Recycling Standards",
    content: [
      "Authorized recyclers follow strict pollution control guidelines. They safely drain lithium batteries, extract toxic flame retardants, and recover precious metals without burning or acid leaching.",
      "Unlike the unorganized scrap sector, registered facilities provide verifiable documentation such as Form-6 manifests and recycling logs.",
      "Reverta partners exclusively with verified downstream recyclers so every item collected from your school or community reaches a safe destination.",
    ],
  },
  {
    title: "Organising a School or Campus E-Waste Drive",
    summary: "Simple steps for teachers, student councils, and environmental clubs to run a successful drive.",
    category: "Community Action",
    content: [
      "Announce the collection drive two weeks ahead of time. Share a one-page checklist of what students can bring from home.",
      "Set up labeled collection cartons near the main reception or library for small electronics, cables, and dry batteries.",
      "Celebrate the total weight collected with morning assembly announcements or certificates, encouraging long-term environmental habits.",
    ],
  },
  {
    title: "Protecting Your Personal Data Before Handover",
    summary: "Practical tips to make sure no personal information leaves your desk.",
    category: "Data Privacy",
    content: [
      "Always sign out of iCloud, Google accounts, and email profiles before wiping phones or tablets.",
      "For desktop and laptop hard drives, use standard disk-formatting tools or remove the drive if you wish to retain your storage media.",
      "When in doubt, consult our team during campaign planning for simple step-by-step device clearing guides.",
    ],
  },
]

export default function BlogPage() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center px-4 py-10">
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeArticle.title} article`}
            className="relative w-full max-w-2xl rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <button
              type="button"
              aria-label="Close article"
              className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition"
              onClick={() => setActiveArticle(null)}
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {activeArticle.category}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-foreground leading-tight">{activeArticle.title}</h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {activeArticle.content.map((paragraph, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="flex-1">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Resource Centre</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Learn to dispose <span className="text-primary">responsibly.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Practical guides for households, schools, and apartment societies that want to understand e-waste and organise responsible collection campaigns.
          </p>

          {/* Legal Awareness Disclaimer */}
          <div className="mt-8 p-4 rounded-2xl bg-muted/40 border border-border/80 max-w-2xl mx-auto flex items-start gap-3 text-left">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Notice:</strong> Our educational content is intended for general community awareness and does not constitute formal legal or regulatory advice. For statutory e-waste rules and producer mandates, please refer directly to official Ministry (MoEFCC) and CPCB guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {articles.map((article) => (
              <article key={article.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{article.category}</span>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{article.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setActiveArticle(article)}
                  >
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Want to run a drive for your community?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We provide all the guides, announcements, and logistics coordination needed to make your campaign a success.
          </p>
          <div className="mt-6">
            <Button size="lg" className="rounded-xl px-7" asChild>
              <Link href="/#contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
