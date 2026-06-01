"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  MessageSquare,
  FileText,
  FolderKanban,
  BarChart3,
  PenTool,
  Calendar,
  Zap,
  Globe,
  Database,
  Calculator,
  Palette,
  ListChecks,
  Clock,
  TrendingUp,
  Brain,
  FileSignature,
  Mail,
  ClipboardList,
} from "lucide-react"

const features = [
  {
    title: "AI Client Support",
    description: "Automatically answer customer inquiries with intelligent, context-aware responses.",
    icon: MessageSquare,
    highlights: ["Instant responses", "Multi-language support", "Knowledge base integration"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Smart Invoice Generation",
    description: "Generate professional invoices through simple AI prompts.",
    icon: FileText,
    highlights: ["PDF export", "Tax calculations", "Custom branding"],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    title: "Project Management Assistant",
    description: "Manage projects using natural language commands.",
    icon: FolderKanban,
    highlights: ["Task creation", "Deadline tracking", "Progress monitoring"],
    gradient: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Business Analytics",
    description: "AI-generated insights and actionable recommendations.",
    icon: BarChart3,
    highlights: ["Revenue analysis", "Client trends", "Performance reports"],
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
  },
  {
    title: "AI Content Generator",
    description: "Create professional business documents in seconds.",
    icon: PenTool,
    highlights: ["Proposals", "Emails", "Contracts", "Follow-ups"],
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Meeting Summaries",
    description: "Convert meetings into actionable notes automatically.",
    icon: Calendar,
    highlights: ["AI summaries", "Key points extraction", "Action items"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400",
  },
]

const subFeatures = [
  { icon: Zap, label: "Lightning Fast" },
  { icon: Globe, label: "Multi-Language" },
  { icon: Database, label: "Secure Storage" },
  { icon: Calculator, label: "Smart Calculations" },
  { icon: Palette, label: "Custom Branding" },
  { icon: ListChecks, label: "Task Automation" },
  { icon: Clock, label: "24/7 Available" },
  { icon: TrendingUp, label: "Growth Analytics" },
  { icon: Brain, label: "AI-Powered" },
  { icon: FileSignature, label: "E-Signatures" },
  { icon: Mail, label: "Email Integration" },
  { icon: ClipboardList, label: "Reports" },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="features" className="relative py-24" ref={containerRef}>
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
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Powerful Features</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Business</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful AI tools designed to automate your workflow and help you focus on what matters most.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-primary/50">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>

                    {/* Description */}
                    <p className="mb-4 text-muted-foreground">{feature.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Sub-features Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-[scroll_30s_linear_infinite] gap-8">
            {[...subFeatures, ...subFeatures].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={`${item.label}-${index}`}
                  className="flex shrink-0 items-center gap-2 text-muted-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm whitespace-nowrap">{item.label}</span>
                </div>
              )
            })}
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
