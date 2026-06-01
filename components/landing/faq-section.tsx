"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the AI assistant work?",
    answer:
      "ClientFlow AI uses advanced natural language processing to understand your requests and automate tasks. It learns from your business data to provide personalized responses and can handle client communication, generate invoices, manage projects, and more.",
  },
  {
    question: "Can I customize AI responses?",
    answer:
      "Yes! You can fully customize how the AI responds to different types of inquiries. Train it with your business documents, set tone preferences, and create custom response templates for common scenarios.",
  },
  {
    question: "Does it support multiple team members?",
    answer:
      "Absolutely. Our Professional and Enterprise plans support unlimited team members with role-based permissions. Each team member can have their own workspace while sharing client data and projects.",
  },
  {
    question: "Can it generate invoices automatically?",
    answer:
      "Yes, ClientFlow AI can generate professional invoices based on your projects and time tracking. Simply describe what you need, and the AI will create branded invoices with accurate calculations and send them directly to clients.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, comply with SOC 2 and GDPR standards, and never share your data with third parties. Your business information is stored securely and backed up regularly.",
  },
]

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass overflow-hidden rounded-xl"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/30"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/50 px-5 py-4">
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="relative py-24" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about ClientFlow AI.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
