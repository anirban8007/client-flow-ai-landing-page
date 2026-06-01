"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for freelancers and solopreneurs",
    features: ["AI Chat Assistant", "Client Management", "1,000 AI Messages", "Email Support", "Basic Analytics"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "Best for growing businesses and teams",
    features: [
      "Unlimited Clients",
      "Advanced Analytics",
      "Invoice Automation",
      "Team Collaboration",
      "Priority Support",
      "Custom Branding",
      "API Access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/month",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited Usage",
      "Full API Access",
      "Custom AI Models",
      "Dedicated Support",
      "SSO & SAML",
      "Custom Integrations",
      "SLA Guarantee",
      "Onboarding Assistance",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="relative py-24" ref={containerRef}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass h-full rounded-2xl p-6 transition-all duration-300 ${
                  plan.popular ? "border-primary/50 glow" : "hover:border-primary/30"
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                {/* CTA Button */}
                <Button
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </Button>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
