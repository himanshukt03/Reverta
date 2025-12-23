"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Phone, Clock, Navigation, Building2, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const mockCenters = [
  {
    name: "Reverta Sustainable Solutions Main Facility",
    address:
      "Reverta Sustainable Solutions, 2nd Floor, 66, 1st Main Rd, above Axis Bank, 2nd Stage, 3rd Stage, Basaveshwar Nagar, Bengaluru, Karnataka 560079",
    phone: "+91 11 2345 6789",
    hours: "Mon-Sat: 9AM - 6PM",
    type: "Main Hub",
  },

]

export function Locator() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [availability, setAvailability] = useState<boolean | null>(null)
  const [checkedPincode, setCheckedPincode] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const pin = searchQuery.trim()
    setShowResults(false)
    if (!pin) return

    // simple client-side validation for 6-digit PIN code
    if (!/^\d{6}$/.test(pin)) {
      setIsSearching(false)
      setAvailability(null)
      setCheckedPincode(pin)
      setShowResults(true)
      return
    }

    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      const isBengaluru = /^56\d{4}$/.test(pin)
      setAvailability(isBengaluru)
      setCheckedPincode(pin)
      setShowResults(true)
    }, 800)
  }

  const handleScheduleClick = () => {
    const el = document.getElementById("contact")
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      // fallback: update hash to navigate
      window.location.hash = "#contact"
    }
  }

  return (
    <section id="locator" className="py-20 lg:py-32 bg-muted/30 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Find Us</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Collection Point <span className="text-primary">Locator</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Check to see if we are available in your area
          </p>
        </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="flex gap-3 p-2 bg-card rounded-2xl border border-border shadow-lg">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter 6-digit PIN code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-0 bg-transparent focus-visible:ring-0 text-base"
                />
              </div>
              <Button
                type="submit"
                className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 font-semibold"
                disabled={isSearching}
              >
                {isSearching ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Searching
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">Search</span>
                  </span>
                )}
              </Button>
            </div>
          </form>

          
        </motion.div>

        {showResults && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-12 max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              {(!/^[0-9]{6}$/.test(checkedPincode) || availability === null) && checkedPincode && (
                <div>
                  <p className="text-lg font-medium text-foreground">Please enter a valid 6-digit PIN code.</p>
                </div>
              )}

              {availability === true && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Yes — we're available in your area!</h3>
                  <p className="text-sm text-muted-foreground">PIN: {checkedPincode}. Schedule a pickup or find the nearest collection point.</p>
                  <div className="mt-4">
                    <Button className="rounded-xl" onClick={handleScheduleClick}>
                      Schedule Pickup
                    </Button>
                  </div>
                </div>
              )}

              {availability === false && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-destructive">
                    <X className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">We're not available in your area yet.</h3>
                  <p className="text-sm text-muted-foreground">PIN: {checkedPincode}. We're coming soon — stay tuned!</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}
