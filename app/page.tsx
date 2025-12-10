import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Partners } from "@/components/partners"
import { HowItWorks } from "@/components/how-it-works"
import { Impact } from "@/components/impact"
import { Locator } from "@/components/locator"
import { Contact } from "@/components/contact"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Partners />
      <HowItWorks />
      <Impact />
      <Locator />
      <Contact />
      <Faq />
      <Footer />
    </main>
  )
}
