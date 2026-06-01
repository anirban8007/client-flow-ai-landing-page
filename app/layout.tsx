import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "ClientFlow AI Assistant | Smart AI Business Assistant",
  description:
    "Automate client communication, manage projects, generate invoices, and streamline your workflow with one intelligent AI platform. Your 24/7 virtual business assistant.",
  keywords: [
    "AI assistant",
    "business automation",
    "client management",
    "invoice generation",
    "project management",
    "AI chatbot",
    "productivity",
  ],
  authors: [{ name: "ClientFlow" }],
  openGraph: {
    title: "ClientFlow AI Assistant | Smart AI Business Assistant",
    description:
      "Automate client communication, manage projects, generate invoices, and streamline your workflow with one intelligent AI platform.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f0a1e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
