"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link2, Upload, Wand2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect Your Business",
    description: "Import your clients, projects, and existing data in minutes.",
    icon: Link2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Train Your Assistant",
    description: "Upload business documents and customize AI knowledge.",
    icon: Upload,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Automate Tasks",
    description: "Let AI handle repetitive work while you focus on growth.",
    icon: Wand2,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    number: "04",
    title: "Grow Faster",
    description: "Scale your business with intelligent automation.",
    icon: Rocket,
    gradient: "from-green-500 to-emerald-500",
  },
]

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="relative py-24" ref={containerRef}>
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
          <p className="text-sm font-medium uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Get Started in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Set up your AI assistant in minutes and start automating your business today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 md:left-1/2 md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className={`inline-block ${isEven ? "md:ml-auto" : ""}`}>
                      <div className="glass rounded-2xl p-6">
                        <span className="text-sm font-bold text-primary">{step.number}</span>
                        <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 blur-lg`} />
                    <div className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient}`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
