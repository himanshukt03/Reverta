import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Reverta Sustainable Solutions",
  description:
    "Learn how Reverta Sustainable Solutions protects your contact and enquiry data when you organise an e-waste campaign with us.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Privacy Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Last updated: October 2026. This policy explains how Reverta Sustainable Solutions handles information when you use our website or organise an e-waste campaign with us.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto space-y-10 text-foreground/80 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
            <p>
              We only collect information you voluntarily provide when contacting us or planning a campaign. This includes:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Your name and contact details (email address and phone number).</li>
              <li>Your organisation or residential society name and general location (PIN code).</li>
              <li>Information about the collection drive you would like to run (approximate material quantities and preferred dates).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>
              We use your contact details solely to:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Respond to your enquiries and coordinate community collection drives.</li>
              <li>Provide drive checklists, announcement materials, and collection logistics.</li>
              <li>Share post-campaign summary reports and handover records.</li>
            </ul>
            <p className="mt-3">
              We never sell or rent your personal information to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Cookies and Tracking</h2>
            <p>
              We do not use advertising cookies, profiling scripts, or intrusive third-party trackers. Our website is built purely to provide information and accept direct campaign enquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Coordination with Downstream Partners</h2>
            <p>
              When a collection campaign takes place, collection logistics and material handover are coordinated with verified downstream recycling partners. We only share operational information (such as collection pickup addresses and material manifests) strictly required to execute the handover safely and legally.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Data Retention & Security</h2>
            <p>
              We take appropriate security measures to safeguard enquiry records and prevent unauthorised access. You can request the review, update, or deletion of your contact records at any time by emailing us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please reach out to:
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
