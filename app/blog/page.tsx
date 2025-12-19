"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { PenSquare, BookOpenCheck, Building, Recycle, X } from "lucide-react"

interface Article {
  title: string
  summary: string
  category: string
  content: string[]
}

const articles: Article[] = [
  {
    title: "How Households Can Prep Old Gadgets for Recycling",
    summary: "Declutter drawers responsibly with a three-step routine before every drop-off or pickup.",
    category: "Safe Disposal Tips",
    content: [
      "Unplug the device 24 hours before collection so any swollen batteries cool down. Back up photos or documents, then perform a secure reset—most phones, laptops, and routers have a 'erase all content' option tucked into settings.",
      "Remove protective cases, SIM cards, and memory cards, but keep chargers and cables bundled with a reusable tie. Sorting accessories prevents cables from wrapping around shredder blades and lets refurbishers quickly test functionality.",
      "Label the bag or box with the device category (phones, laptops, mixed accessories). Clear labeling helps collection teams weigh items accurately for extended producer responsibility (EPR) reporting and reduces how long material sits idle.",
    ],
  },
  {
    title: "Benefits of Certified E-Waste Recycling",
    summary: "Understand what happens once your device leaves your desk and why certification matters.",
    category: "Recycling Benefits",
    content: [
      "Certified recyclers use depollution checklists that safely drain batteries, capture refrigerants, and track every component. This discipline prevents toxins from leaching into soil and makes sure valuable metals reach official smelters.",
      "Audit-friendly partners issue Form-6 manifests, data destruction certificates, and extended producer responsibility credits. These documents protect you during ISO, ESG, or government inspections and demonstrate cradle-to-cradle accountability.",
      "Choosing certified vendors also stimulates India's urban mining ecosystem. Each metric ton of recovered circuit boards can offset up to 2 tons of primary mining emissions, so your decision adds measurable climate impact.",
    ],
  },
  {
    title: "Compliance Checklist for Small Businesses",
    summary: "Track the paperwork and partners you need to stay audit-ready all year.",
    category: "Regulatory Updates",
    content: [
      "Maintain an asset disposal register that logs serial numbers, pickup dates, carrier names, and weight. Pair it with purchase invoices to prove responsible transfer when the Pollution Control Board requests evidence.",
      "Map vendors to their certifications—look for CPCB authorization numbers, ISO 14001, and data-security attestations. Review them annually and keep digital copies in your compliance drive.",
      "Schedule quarterly pickups instead of stockpiling. Smaller, frequent movements reduce fire risk and keep your annual returns (Form-2 or Form-4) aligned with real inventory levels.",
    ],
  },
  {
    title: "Hosting a Community Collection Drive",
    summary: "Mobilize neighbors or employees to keep devices out of landfills with a repeatable plan.",
    category: "Community Action",
    content: [
      "Announce the drive two weeks in advance with a simple checklist of acceptable items. Encourage households to wipe data and bring devices in transparent bags for faster triage.",
      "Set up three labeled bins—small electronics, cables, and batteries. Volunteers can quickly route each category to its safest processing stream.",
      "Publish the results: total kilograms diverted, number of participants, and the downstream recycler. Celebrating tangible impact nudges people to declutter again within six months.",
    ],
  },
]

const categories = [
  { title: "Recycling Basics", description: "Plain-language explainers for households and first-time recyclers." },
  { title: "Enterprise Playbooks", description: "Guides for IT teams managing refresh cycles, audits, and pickups." },
  { title: "Regulatory Tracker", description: "Summaries of the latest Indian EPR targets, forms, and deadlines." },
  { title: "Success Stories", description: "Proof that landfill diversion and data security can scale together." },
]

const complianceReminders = [
  {
    icon: PenSquare,
    text: "Document every asset transfer with Form-6 or delivery challans to close the audit trail.",
  },
  {
    icon: BookOpenCheck,
    text: "Train teams yearly on battery safety, data wipes, and labeling standards.",
  },
  {
    icon: Building,
    text: "Renew recycler MoUs and authorization certificates before they expire.",
  },
  {
    icon: Recycle,
    text: "Share quarterly diversion metrics with leadership to keep ESG goals visible.",
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
            className="relative w-full max-w-3xl rounded-[32px] border border-border/40 bg-gradient-to-b from-background via-card to-card/95 p-6 sm:p-10 shadow-[0_25px_80px_rgba(15,23,42,0.35)] max-h-[85vh] overflow-y-auto"
          >
            <button
              type="button"
              aria-label="Close article"
              className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition"
              onClick={() => setActiveArticle(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-primary/80">
              {activeArticle.category}
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-foreground leading-tight">{activeArticle.title}</h3>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground/90">
              {activeArticle.content.map((paragraph, index) => (
                <div key={`${activeArticle.title}-${index}`} className="flex items-start gap-5">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm sm:text-base flex-1 leading-relaxed">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-primary uppercase tracking-[0.3em]"
          >
            Resource Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-4xl sm:text-5xl font-bold text-foreground"
          >
            Practical Guides to Recycle Smarter Every Month
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground"
          >
            Blog articles cover recycling benefits, industry updates, disposal tips, and FAQs so anyone—families, facilities
            teams, or compliance leads—can act with confidence.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-12 rounded-full bg-primary text-primary-foreground" asChild>
              <a href="#articles">Start Reading</a>
            </Button>
            <Button variant="outline" className="h-12 rounded-full border-border" asChild>
              <a href="#compliance">See Regulatory Notes</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="rounded-2xl border border-border/60 p-6 bg-card/70">
              <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="articles" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
              <p className="text-sm text-muted-foreground">
                Curated guidance across recycling, compliance, and sustainability—no access requests needed.
              </p>
            </div>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.title} className="rounded-3xl border border-border/60 p-6 bg-card/80 shadow-lg flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{article.category}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{article.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{article.summary}</p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-primary hover:text-primary/80 text-left"
                  onClick={() => setActiveArticle(article)}
                >
                  Read more →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Regulatory Updates & Compliance Best Practices</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Stay ahead of evolving Indian e-waste mandates with plain guidance you can apply during quarterly reviews or
              your next collection drive.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li>
                • Track annual EPR targets in a shared sheet so procurement, sustainability, and finance stay aligned on
                obligations.
              </li>
              <li>
                • Align pickup receipts with Form-2 or Form-4 filings; mismatched numbers are the top reason for inspection
                callbacks.
              </li>
              <li>
                • Rotate community awareness sessions—battery safety one month, right-to-repair the next—to keep recycling
                behavior consistent.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-lg space-y-4">
            {complianceReminders.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="w-8 h-8 text-primary" />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
