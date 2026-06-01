"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const integrations = [
  { name: "OpenAI", logo: "◯" },
  { name: "Google Workspace", logo: "G" },
  { name: "Slack", logo: "#" },
  { name: "Gmail", logo: "M" },
  { name: "Zoom", logo: "Z" },
  { name: "Stripe", logo: "S" },
  { name: "PayPal", logo: "P" },
  { name: "Notion", logo: "N" },
  { name: "Trello", logo: "T" },
  { name: "GitHub", logo: "◉" },
]

export function IntegrationsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Integrations</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Works With Your <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Seamlessly connect with the platforms you already use.
          </p>
        </motion.div>

        {/* Integration Logos */}
        <div className="relative overflow-hidden py-4">
          {/* First Row */}
          <div className="flex animate-[scroll_40s_linear_infinite] gap-8">
            {[...integrations, ...integrations].map((integration, index) => (
              <motion.div
                key={`${integration.name}-${index}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: (index % integrations.length) * 0.05 }}
                className="flex shrink-0 flex-col items-center gap-3"
              >
                <div className="glass flex h-16 w-16 items-center justify-center rounded-xl text-2xl font-bold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
                  {integration.logo}
                </div>
                <span className="text-sm text-muted-foreground">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Integrations</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <p className="text-3xl font-bold text-foreground">API</p>
            <p className="text-sm text-muted-foreground">Full Access</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <p className="text-3xl font-bold text-foreground">Webhook</p>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
