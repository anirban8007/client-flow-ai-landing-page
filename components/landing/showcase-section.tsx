"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, BarChart3, FileText, Users, LineChart } from "lucide-react"

const screens = [
  {
    title: "AI Chat Interface",
    icon: MessageSquare,
    preview: (
      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/30" />
          <div className="rounded-xl bg-muted p-3">
            <div className="h-2 w-32 rounded bg-foreground/20" />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="rounded-xl bg-primary p-3">
            <div className="h-2 w-24 rounded bg-primary-foreground/50" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/30" />
          <div className="rounded-xl bg-muted p-3">
            <div className="space-y-1">
              <div className="h-2 w-40 rounded bg-foreground/20" />
              <div className="h-2 w-28 rounded bg-foreground/20" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Analytics Dashboard",
    icon: BarChart3,
    preview: (
      <div className="space-y-4">
        <div className="flex gap-2">
          {[60, 80, 45, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-muted p-2">
            <div className="h-2 w-12 rounded bg-foreground/20" />
            <div className="mt-1 h-4 w-16 rounded bg-primary/30" />
          </div>
          <div className="rounded-lg bg-muted p-2">
            <div className="h-2 w-12 rounded bg-foreground/20" />
            <div className="mt-1 h-4 w-16 rounded bg-green-500/30" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Invoice Generator",
    icon: FileText,
    preview: (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 rounded bg-primary/30" />
          <div className="h-4 w-16 rounded bg-muted" />
        </div>
        <div className="h-px bg-border" />
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between">
              <div className="h-3 w-24 rounded bg-foreground/10" />
              <div className="h-3 w-12 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
        <div className="h-px bg-border" />
        <div className="flex justify-between">
          <div className="h-4 w-12 rounded bg-foreground/20" />
          <div className="h-4 w-16 rounded bg-primary/30" />
        </div>
      </div>
    ),
  },
  {
    title: "Client Management",
    icon: Users,
    preview: (
      <div className="space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-muted p-2">
            <div className="h-8 w-8 rounded-full bg-primary/20" />
            <div className="flex-1">
              <div className="h-2 w-20 rounded bg-foreground/20" />
              <div className="mt-1 h-2 w-28 rounded bg-foreground/10" />
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Business Reports",
    icon: LineChart,
    preview: (
      <div className="space-y-3">
        <div className="flex items-end gap-1">
          <svg viewBox="0 0 100 40" className="h-16 w-full">
            <path
              d="M0,35 Q25,30 50,20 T100,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            <path
              d="M0,35 Q25,30 50,20 T100,10 V40 H0 Z"
              fill="currentColor"
              className="text-primary/10"
            />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Revenue", "Growth", "Users"].map((label) => (
            <div key={label} className="text-center">
              <div className="mx-auto h-3 w-8 rounded bg-foreground/10" />
              <div className="mx-auto mt-1 h-2 w-12 rounded bg-foreground/5" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export function ShowcaseSection() {
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
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Product Showcase</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Powerful Tools, <span className="gradient-text">Beautiful Interface</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience a seamless workflow with our intuitive dashboard and smart features.
          </p>
        </motion.div>

        {/* Screens Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {screens.map((screen, index) => {
            const Icon = screen.icon
            return (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="glass overflow-hidden rounded-2xl">
                  {/* Header */}
                  <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon className="h-4 w-4" />
                      <span>{screen.title}</span>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="p-4">{screen.preview}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
