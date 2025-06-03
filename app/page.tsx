import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Racing from "@/components/racing"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gruas Torres Web",
  description:
    "Professional roadside assistance and towing service led by Armando Torres, TC Cuatromil competitor. 24/7 support and quick response times.",
  keywords: "roadside assistance, towing service, TC Cuatromil, Armando Torres, emergency towing",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutUs />
      <Services />
      <Racing />
      <Contact />
    </main>
  )
}
