"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, TrendingUp, Recycle, Leaf, Users, TreePine } from "lucide-react"

const metrics = [
  { value: 50000, suffix: "+", label: "Tonnes of E-Waste", unit: "to recycle per year", icon: Recycle },
  { value: 50000, suffix: "+", label: "Metric Tons CO₂", unit: "to save annually", icon: Leaf },
  { value: 10000, suffix: "+", label: "Green Jobs", unit: "to create", icon: Users },
  { value: 5000, suffix: "+", label: "Trees Equivalent", unit: "to preserve", icon: TreePine },
]

const testimonials = [
  {
    quote:
      "Reverta transformed our corporate e-waste disposal process. Their data destruction certificate gave us complete peace of mind and compliance confidence.",
    author: "Priya Sharma",
    role: "IT Director",
    company: "TechCorp India",
  },
  {
    quote:
      "Exceptional service from initial pickup to final certification. The team is professional, punctual, and truly committed to environmental responsibility.",
    author: "Rahul Mehta",
    role: "Operations Manager",
    company: "GreenLeaf Ltd",
  },
  {
    quote:
      "A trusted partner for all our e-waste needs. Their transparent processes and detailed reporting have made sustainability simple for our organization.",
    author: "Anita Desai",
    role: "Sustainability Head",
    company: "EcoFirst Corp",
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 1000
      const steps = 40
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Impact() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <>
      {/* ═══════════════════════════════ IMPACT SECTION ═══════════════════════════════ */}
      <section
        id="impact"
        className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
      >
        {/* Decorative blurred circles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-white/10 blur-[140px]" />
          <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full bg-white/10 blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8">
              <TrendingUp className="w-4 h-4" />
              Our Aspirational Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Building a Sustainable Future
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-6 lg:p-8 text-center transition hover:bg-white/15"
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <metric.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-2 text-sm sm:text-base font-semibold">{metric.label}</p>
                <p className="text-xs opacity-70">{metric.unit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TESTIMONIALS SECTION ═══════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Client Stories</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">What Our Partners Say</h2>
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl border border-border bg-card shadow-xl p-8 lg:p-12">
              <Quote className="w-10 h-10 text-primary/30 mb-6" />

              <div className="relative min-h-[160px]">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeTestimonial === index ? 1 : 0,
                      y: activeTestimonial === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                    className={activeTestimonial === index ? "relative" : "absolute inset-0 pointer-events-none"}
                  >
                    <p className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-lg text-primary">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeTestimonial === index
                          ? "bg-primary w-8"
                          : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
