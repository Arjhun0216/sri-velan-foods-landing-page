"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MenuSection } from "@/components/menu-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <MenuSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
