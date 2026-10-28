"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react"
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

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <div className="bg-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-border">
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
                    We have received your enquiry. Our team will contact you to discuss the details and arrange your collection drive.
                  </p>
                  <Button className="mt-6 rounded-xl" onClick={() => setIsSubmitted(false)}>
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                        Your Full Name *
                      </label>
                      <Input id="name" type="text" placeholder="Full name" required className="h-11 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="org" className="block text-xs font-medium text-foreground mb-1.5">
                        Organisation or Community Name *
                      </label>
                      <Input id="org" type="text" placeholder="Organisation or society name" required className="h-11 rounded-xl" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="Email address" required className="h-11 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1.5">
                        Phone Number *
                      </label>
                      <Input id="phone" type="tel" placeholder="Phone number" required className="h-11 rounded-xl" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="category" className="block text-xs font-medium text-foreground mb-1.5">
                        I am contacting Reverta as: *
                      </label>
                      <select
                        id="category"
                        required
                        className="w-full h-11 px-3 text-sm rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select an option</option>
                        <option value="school">School / College</option>
                        <option value="residential">Residential Community / RWA</option>
                        <option value="business">Business / Office</option>
                        <option value="partner">Downstream Partner / Recycler</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-xs font-medium text-foreground mb-1.5">
                        Location / PIN Code *
                      </label>
                      <Input id="location" type="text" placeholder="Location / PIN code" required className="h-11 rounded-xl" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quantity" className="block text-xs font-medium text-foreground mb-1.5">
                        Approximate Quantity of E-Waste
                      </label>
                      <Input id="quantity" type="text" placeholder="Estimated quantity or items" className="h-11 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-xs font-medium text-foreground mb-1.5">
                        Preferred Drive Date
                      </label>
                      <Input id="date" type="text" placeholder="Preferred date or month" className="h-11 rounded-xl" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Any additional details or questions..."
                      rows={3}
                      className="rounded-xl resize-none text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-md shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting Enquiry..." : "Submit Campaign Enquiry"}
                    </Button>
                    <p className="mt-2 text-center text-xs text-muted-foreground">
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
