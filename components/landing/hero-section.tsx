"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, Bot, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const chatMessages = [
  { role: "user", content: "Generate an invoice for ABC Company." },
  { role: "ai", content: "Invoice generated successfully and sent to the client." },
  { role: "user", content: "Show pending payments." },
  { role: "ai", content: "You currently have 12 pending invoices worth $8,400." },
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
        className="h-2 w-2 rounded-full bg-primary"
      />
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        className="h-2 w-2 rounded-full bg-primary"
      />
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        className="h-2 w-2 rounded-full bg-primary"
      />
    </div>
  )
}

function ChatMessage({ message, index }: { message: { role: string; content: string }; index: number }) {
  const isAI = message.role === "ai"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.3 }}
      className={`flex gap-3 ${isAI ? "flex-row" : "flex-row-reverse"}`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isAI ? "bg-gradient-to-br from-primary to-accent" : "bg-secondary"
        }`}
      >
        {isAI ? <Bot className="h-4 w-4 text-primary-foreground" /> : <span className="text-xs font-medium">You</span>}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
          isAI ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        <p className="text-sm">{message.content}</p>
      </div>
    </motion.div>
  )
}

function AnimatedChatInterface() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (visibleMessages >= chatMessages.length) {
      const resetTimeout = setTimeout(() => {
        setVisibleMessages(0)
      }, 4000)
      return () => clearTimeout(resetTimeout)
    }

    const showNextMessage = () => {
      setIsTyping(true)
      const typingDelay = chatMessages[visibleMessages]?.role === "ai" ? 1500 : 800

      setTimeout(() => {
        setIsTyping(false)
        setVisibleMessages((prev) => prev + 1)
      }, typingDelay)
    }

    const timeout = setTimeout(showNextMessage, 1000)
    return () => clearTimeout(timeout)
  }, [visibleMessages])

  return (
    <div className="glass glow relative overflow-hidden rounded-2xl border border-border/50">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-sm text-muted-foreground">ClientFlow AI Assistant</span>
      </div>

      {/* Chat Content */}
      <div className="flex h-[280px] flex-col gap-4 overflow-hidden p-4">
        <AnimatePresence mode="popLayout">
          {chatMessages.slice(0, visibleMessages).map((message, index) => (
            <ChatMessage key={`${message.content}-${index}`} message={message} index={index} />
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="rounded-2xl bg-secondary px-4 py-2.5">
              <TypingIndicator />
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border/50 p-4">
        <div className="flex items-center gap-2 rounded-xl bg-muted px-4 py-2.5">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Ask anything about your business...</span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-[100px]"
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Business Assistant</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="block">Meet Your</span>
              <span className="gradient-text block">AI-Powered</span>
              <span className="block">Business Assistant</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
            >
              Automate client communication, manage projects, generate invoices, and streamline your workflow with one
              intelligent AI platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
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
                className="group border-border bg-transparent text-foreground hover:bg-secondary"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center justify-center gap-8 lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">15K+</p>
                <p className="text-xs text-muted-foreground">Businesses</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">500K+</p>
                <p className="text-xs text-muted-foreground">Conversations</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 z-10 hidden rounded-xl border border-border/50 bg-card p-3 shadow-lg lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-500/20 p-1.5">
                  <div className="h-full w-full rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Invoice Sent</p>
                  <p className="text-xs text-muted-foreground">$2,400 to ABC Corp</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 bottom-16 z-10 hidden rounded-xl border border-border/50 bg-card p-3 shadow-lg lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 p-1.5">
                  <Sparkles className="h-full w-full text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Task Created</p>
                  <p className="text-xs text-muted-foreground">Project deadline reminder</p>
                </div>
              </div>
            </motion.div>

            <AnimatedChatInterface />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
