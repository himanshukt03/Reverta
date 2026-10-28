"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 9652409397",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@reverta.in",
  },
]

// Security: 60-second rate-limiting cooldown per browser
const RATE_LIMIT_COOLDOWN_MS = 60 * 1000
const RATE_LIMIT_KEY = "reverta_last_form_submission_timestamp"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [minDate, setMinDate] = useState<string>("")
  const formMountTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    // Set min date to today so users cannot pick past dates
    const today = new Date().toISOString().split("T")[0]
    setMinDate(today)
    formMountTimeRef.current = Date.now()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Security Check 1: Honeypot trap check for automated spam bots
    const honeypot = (formData.get("_gotcha") as string) || ""
    if (honeypot.trim().length > 0) {
      // Silently reject bot without consuming SnapItForms submission quota
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
      }, 500)
      return
    }

    // Security Check 2: Time-to-fill bot protection (reject sub-second submissions)
    const elapsedMs = Date.now() - formMountTimeRef.current
    if (elapsedMs < 1500) {
      setErrorMessage("Submission detected too quickly. Please take a moment and try again.")
      return
    }

    // Security Check 3: Client-side rate-limiting cooldown (60 seconds)
    const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY)
    if (lastSubmission) {
      const timeSinceLast = Date.now() - parseInt(lastSubmission, 10)
      if (timeSinceLast < RATE_LIMIT_COOLDOWN_MS) {
        const remainingSeconds = Math.ceil((RATE_LIMIT_COOLDOWN_MS - timeSinceLast) / 1000)
        setErrorMessage(
          `Please wait ${remainingSeconds} second${remainingSeconds === 1 ? "" : "s"} before submitting another campaign enquiry.`
        )
        return
      }
    }

    // Validation Check 4: Input validation & trimming
    const name = ((formData.get("name") as string) || "").trim()
    const organization = ((formData.get("organization") as string) || "").trim()
    const email = ((formData.get("email") as string) || "").trim()
    const phone = ((formData.get("phone") as string) || "").trim()
    const category = ((formData.get("category") as string) || "").trim()
    const location = ((formData.get("location") as string) || "").trim()
    const quantity = ((formData.get("quantity") as string) || "").trim()
    const preferredDate = ((formData.get("preferred_date") as string) || "").trim()
    const message = ((formData.get("message") as string) || "").trim()

    if (!name || name.length < 2) {
      setErrorMessage("Please enter your full name (at least 2 characters).")
      return
    }

    if (!organization || organization.length < 2) {
      setErrorMessage("Please enter your organisation or community name.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.")
      return
    }

    const phoneRegex = /^[0-9+() -]{7,16}$/
    if (!phoneRegex.test(phone)) {
      setErrorMessage("Please enter a valid phone number (at least 7 digits).")
      return
    }

    if (!category) {
      setErrorMessage("Please select your organisation category.")
      return
    }

    if (!location || location.length < 2) {
      setErrorMessage("Please enter your location or PIN code.")
      return
    }

    const accessKey =
      process.env.NEXT_PUBLIC_SNAPITFORMS_ACCESS_KEY ||
      "sf_f57661411e90800ab9e359a1bfe00e78"

    setIsSubmitting(true)

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Campaign Enquiry: ${organization} (${name})`,
        name,
        organization,
        email,
        phone,
        category,
        location,
        quantity_in_kgs: quantity,
        preferred_drive_date: preferredDate,
        additional_details: message,
      }

      const response = await fetch("https://api.snapitforms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok && data.success !== false) {
        // Record timestamp for rate limiting
        localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString())
        setIsSubmitted(true)
        form.reset()
      } else {
        setErrorMessage(
          data.message ||
            "Unable to submit the enquiry. Please try again or email us directly at hello@reverta.in."
        )
      }
    } catch (err) {
      setErrorMessage(
        "Network connection error. Please check your internet or reach out directly at hello@reverta.in."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Let&apos;s organise a <span className="text-primary">collection drive</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Whether you represent a school, apartment community, business, or downstream partner, we would love to collaborate with you.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Reach Out Directly</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Have questions about what items can be collected or how a community drive works? Our team is always happy to help.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl lg:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-sm border border-border">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm leading-relaxed">
                    We have received your enquiry. Our team will contact you shortly to confirm logistics and plan your drive.
                  </p>
                  <Button className="mt-6 rounded-xl" onClick={() => setIsSubmitted(false)}>
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {/* Honeypot field for anti-spam bots */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-2.5 text-xs">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">
                        Your Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full name"
                        maxLength={70}
                        required
                        className="h-10 sm:h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-xs font-medium text-foreground mb-1">
                        Organisation or Community *
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="Organisation or society name"
                        maxLength={90}
                        required
                        className="h-10 sm:h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        maxLength={80}
                        required
                        className="h-10 sm:h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone number"
                        maxLength={16}
                        required
                        className="h-10 sm:h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="category" className="block text-xs font-medium text-foreground mb-1">
                        I am contacting Reverta as: *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        className="w-full h-10 sm:h-11 px-3 text-xs sm:text-sm rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select an option</option>
                        <option value="School / College">School / College</option>
                        <option value="Residential Community / RWA">Residential Community / RWA</option>
                        <option value="Business / Office">Business / Office</option>
                        <option value="Downstream Partner / Recycler">Downstream Partner / Recycler</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-xs font-medium text-foreground mb-1">
                        Location / PIN Code *
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Location / PIN code"
                        maxLength={60}
                        required
                        className="h-10 sm:h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Paired Quantity and Preferred Date side-by-side to save mobile vertical height */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="quantity" className="block text-xs font-medium text-foreground mb-1 truncate">
                        Quantity (in kgs)
                      </label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="text"
                        placeholder="e.g. 50 kg"
                        maxLength={50}
                        className="h-10 sm:h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferred_date" className="block text-xs font-medium text-foreground mb-1 truncate">
                        Preferred Date
                      </label>
                      <Input
                        id="preferred_date"
                        name="preferred_date"
                        type="date"
                        min={minDate}
                        className="h-10 sm:h-11 rounded-xl text-xs sm:text-sm cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Any additional details or questions..."
                      maxLength={1000}
                      rows={2}
                      className="rounded-xl resize-none text-xs sm:text-sm"
                    />
                  </div>

                  <div className="pt-1.5 sm:pt-2">
                    <Button
                      type="submit"
                      className="w-full h-11 sm:h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm shadow-md shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting Enquiry...
                        </span>
                      ) : (
                        "Submit Campaign Enquiry"
                      )}
                    </Button>
                    <p className="mt-2 text-center text-[11px] sm:text-xs text-muted-foreground">
                      We will review details and connect with you.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
