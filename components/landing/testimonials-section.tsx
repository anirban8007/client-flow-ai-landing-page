"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    content:
      "The AI assistant saves me several hours every week by handling client communication. I can focus on design work while ClientFlow manages the rest.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Agency Founder",
    content:
      "ClientFlow AI transformed our workflow and improved team efficiency by 40%. The automated invoicing alone has been a game-changer for our business.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Marketing Consultant",
    content:
      "The automated invoicing and reporting features are incredible. I've reclaimed hours of my week that I now spend with clients.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers have to say about ClientFlow AI.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass relative h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/50">
                {/* Quote Icon */}
                <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <span className="text-sm font-bold text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
