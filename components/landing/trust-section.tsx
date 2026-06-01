"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, MessageSquare, Trophy, Clock } from "lucide-react"

const stats = [
  { label: "Businesses", value: 15000, suffix: "+", icon: Users },
  { label: "Conversations", value: 500000, suffix: "+", icon: MessageSquare },
  { label: "Customer Satisfaction", value: 98, suffix: "%", icon: Trophy },
  { label: "Availability", value: 24, suffix: "/7", icon: Clock },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
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
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return (num / 1000).toFixed(0) + "K"
    return num.toString()
  }

  return (
    <span ref={ref}>
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Trusted by Thousands</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/50">
                  {/* Icon */}
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Value */}
                  <p className="text-3xl font-bold text-foreground sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>

                  {/* Label */}
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
