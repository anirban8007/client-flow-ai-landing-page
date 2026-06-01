"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24" ref={containerRef}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 animated-gradient" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

          {/* Glow Effects */}
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/30 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-accent/30 blur-[100px]" />

          {/* Content */}
          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            >
              Let AI Handle the{" "}
              <span className="gradient-text">Busy Work</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground"
            >
              Spend less time on administration and more time growing your business. Start your free trial today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-background/50 text-foreground backdrop-blur-sm hover:bg-background/80"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Demo
              </Button>
            </motion.div>

            {/* Trust Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              14-day free trial • No credit card required • Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
