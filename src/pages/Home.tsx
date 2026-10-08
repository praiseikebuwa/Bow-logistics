import { useReveal } from '@/hooks/useReveal'
import Hero from '@/sections/Hero'
import Ticker from '@/sections/Ticker'
import Services from '@/sections/Services'
import WhyUs from '@/sections/WhyUs'
import FinalCTA from '@/sections/FinalCTA'
import FloatingWhatsApp from '@/components/bow/FloatingWhatsApp'

export default function Home() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="min-h-screen bg-[#161616]">
      <Hero />
      <Ticker />
      <Services />
      <WhyUs />
      <FinalCTA />
      <FloatingWhatsApp />
    </div>
  )
}
