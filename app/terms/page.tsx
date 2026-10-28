import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Reverta Sustainable Solutions",
  description:
    "Review the terms and conditions for organising electronic waste collection drives, participant responsibilities, and downstream partner coordination with Reverta.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Terms of Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Last updated: October 2026. These terms outline how Reverta Sustainable Solutions operates and what you can expect when organising an e-waste campaign with us.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto space-y-10 text-foreground/80 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Scope of Services</h2>
            <p>
              Reverta Sustainable Solutions operates as an awareness, collection-facilitation, and downstream partner-coordination initiative. We assist schools, residential communities, and workplaces in planning and mobilising responsible electronic waste drives.
            </p>
            <p className="mt-2 text-muted-foreground">
              Reverta coordinates with authorised downstream recyclers who perform the physical recycling, material extraction, and treatment under appropriate statutory authorisations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Enquiries and Campaign Scheduling</h2>
            <p>
              Submitting an enquiry via our website or messaging channels does not constitute a guaranteed collection booking. Every campaign schedule, accepted item scope, and pickup arrangement is confirmed individually after discussing logistics with your community leads.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Personal Data on Devices</h2>
            <p>
              Participants donating electronics (phones, computers, memory drives) are strongly advised to back up and perform a factory reset / secure wipe of all personal data before depositing items into campaign collection bins. Reverta provides general guidance on device clearing, but the participant retains responsibility for backing up their personal files.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Downstream Partner Handover & Documentation</h2>
            <p>
              All materials collected during campaigns are routed directly to verified downstream recycling partners. Handover summaries, weight tallies, and recycling documentation provided to communities reflect the records provided by the handling downstream partner.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Sponsor and Reward Partnerships</h2>
            <p>
              Any promotional offers, discount coupons, or educational visits provided by third-party reward partners are subject to the specific terms and availability confirmed by that partner. Reverta facilitates these perks to encourage participation but does not guarantee third-party commercial redemptions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. General Website Use</h2>
            <p>
              Educational content published on our website is for general environmental awareness and should not be construed as statutory legal advice. For binding regulatory compliance or Extended Producer Responsibility (EPR) mandates, refer directly to official Ministry and CPCB notifications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-card border border-border text-sm">
              <p className="font-semibold text-foreground">Reverta Sustainable Solutions Private Limited</p>
              <p className="text-muted-foreground mt-1">2nd Floor, 66, 1st Main Rd, above Axis Bank, Basaveshwar Nagar, Bengaluru, Karnataka 560079</p>
              <p className="text-muted-foreground mt-1">Email: hello@reverta.in | Phone: +91 9652409397</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
