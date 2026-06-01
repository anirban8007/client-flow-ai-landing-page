import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { TrustSection } from "@/components/landing/trust-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ShowcaseSection } from "@/components/landing/showcase-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { IntegrationsSection } from "@/components/landing/integrations-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <BenefitsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
