"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingDown, Zap, Clock, Users, Heart } from "lucide-react"

const benefits = [
  {
    icon: TrendingDown,
    value: "70%",
    label: "Reduce Administrative Work",
    description: "Automate repetitive tasks and paperwork",
  },
  {
    icon: Zap,
    value: "10x",
    label: "Respond to Clients Faster",
    description: "AI-powered instant responses",
  },
  {
    icon: Clock,
    value: "Seconds",
    label: "Generate Reports",
    description: "Complex analytics in real-time",
  },
  {
    icon: Users,
    value: "2x",
    label: "Team Productivity",
    description: "Focus on high-value activities",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Consistent, professional service",
  },
]

export function BenefitsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24" ref={containerRef}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Measurable <span className="gradient-text">Results</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real improvements our customers experience with ClientFlow AI.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass h-full rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/50">
                  {/* Icon */}
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Value */}
                  <p className="text-3xl font-bold gradient-text">{benefit.value}</p>

                  {/* Label */}
                  <p className="mt-2 font-medium text-foreground">{benefit.label}</p>

                  {/* Description */}
                  <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
