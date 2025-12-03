"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { PenSquare, BookOpenCheck, Building, Recycle } from "lucide-react"

const articles = [
  {
    title: "Designing an E-Waste Policy for Modern Campuses",
    summary:
      "Step-by-step guidance for universities and tech parks to deploy compliant collection drives, reporting workflows, and awareness campaigns.",
    category: "Guides",
    readTime: "8 min read",
  },
  {
    title: "What Recent Indian E-Waste Rules Mean for Enterprises",
    summary:
      "Break down new EPR obligations, documentation checklists, and how Reverta's portal keeps procurement and compliance teams audit-ready.",
    category: "Regulatory Updates",
    readTime: "6 min read",
  },
  {
    title: "Recovering Rare Materials to Strengthen the Circular Economy",
    summary:
      "Explore how responsible dismantling returns copper, gold, and critical minerals to manufacturing supply chains.",
    category: "Impact Stories",
    readTime: "7 min read",
  },
]

const categories = [
  { title: "Recycling Basics", description: "Foundational articles for households, SMEs, and first-time recyclers." },
  { title: "Enterprise Playbooks", description: "Templates for ITAD, audits, and multi-site operations." },
  { title: "Regulatory Tracker", description: "Explainers on EPR targets, documentation, and compliance duties." },
  { title: "Success Stories", description: "Case studies on CO2 savings, landfill diversion, and job creation." },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
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
            Insights to Keep Your Recycling Program Future-Ready
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground"
          >
            From regulatory explainers and compliance checklists to disposal tips for homes and enterprises, Reverta's blog
            helps every stakeholder act today.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-12 rounded-full bg-primary text-primary-foreground" asChild>
              <Link href="/#contact">Request a story or topic</Link>
            </Button>
            <Button variant="outline" className="h-12 rounded-full border-border" asChild>
              <Link href="/locator">Find a collection point</Link>
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

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
              <p className="text-sm text-muted-foreground">Curated updates across recycling, compliance, and sustainability.</p>
            </div>
            <Button variant="outline" className="rounded-full border-border" asChild>
              <Link href="mailto:hello@reverta.in">Submit a guest post</Link>
            </Button>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.title} className="rounded-3xl border border-border/60 p-6 bg-card/80 shadow-lg flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{article.category}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{article.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{article.summary}</p>
                <div className="mt-4 text-xs text-muted-foreground">{article.readTime}</div>
                <Button variant="ghost" className="mt-4 justify-start px-0" asChild>
                  <Link href="/#contact">Request full article</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Need compliance help right now?</h2>
            <p className="mt-4 text-base text-muted-foreground">
              The Reverta portal combines a knowledge base, regulatory tracker, and support desk. Download certificates,
              monitor pickup status, and receive ESG-ready impact summaries at any time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="h-12 rounded-xl bg-primary text-primary-foreground" asChild>
                <Link href="/#contact">Request portal access</Link>
              </Button>
              <Button variant="outline" className="h-12 rounded-xl border-border" asChild>
                <Link href="mailto:hello@reverta.in">Chat with sustainability desk</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <PenSquare className="w-8 h-8 text-primary" />
              <p className="text-sm text-muted-foreground">Blog + whitepapers updated every week</p>
            </div>
            <div className="flex items-center gap-3">
              <BookOpenCheck className="w-8 h-8 text-primary" />
              <p className="text-sm text-muted-foreground">Downloadable compliance templates</p>
            </div>
            <div className="flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              <p className="text-sm text-muted-foreground">Industry case studies & testimonials</p>
            </div>
            <div className="flex items-center gap-3">
              <Recycle className="w-8 h-8 text-primary" />
              <p className="text-sm text-muted-foreground">Impact calculator & landfill diversion tracker</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
