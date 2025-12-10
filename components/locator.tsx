"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Phone, Clock, Navigation, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const mockCenters = [
  {
    name: "Reverta Main Facility",
    address: "Industrial Area, Phase 1, New Delhi 110001",
    phone: "+91 11 2345 6789",
    hours: "Mon-Sat: 9AM - 6PM",
    type: "Main Hub",
  },
  {
    name: "Reverta South Hub",
    address: "Electronic City, Bangalore 560100",
    phone: "+91 80 2345 6789",
    hours: "Mon-Sat: 9AM - 6PM",
    type: "Collection Center",
  },
  {
    name: "Reverta West Center",
    address: "MIDC, Andheri East, Mumbai 400093",
    phone: "+91 22 2345 6789",
    hours: "Mon-Sat: 9AM - 6PM",
    type: "Collection Center",
  },
]

export function Locator() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearching(true)
      setTimeout(() => {
        setIsSearching(false)
        setShowResults(true)
      }, 800)
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
            Find the nearest Reverta collection center for convenient e-waste drop-off or pickup scheduling.
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
                  placeholder="Enter PIN code or city name..."
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

          {/* Quick links */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Delhi", "Mumbai", "Bangalore", "Chennai"].map((city) => (
              <button
                key={city}
                onClick={() => {
                  setSearchQuery(city)
                  setIsSearching(true)
                  setTimeout(() => {
                    setIsSearching(false)
                    setShowResults(true)
                  }, 800)
                }}
                className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {city}
              </button>
            ))}
          </div>
        </motion.div>

        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {mockCenters.map((center, index) => (
              <motion.div
                key={center.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Building2 className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {center.type}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground text-lg">{center.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{center.address}</p>

                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    {center.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {center.hours}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 rounded-xl border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-colors"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}
