import { useEffect, useState } from 'react'
import { IconWhatsApp } from '@/components/bow/MaskedWord'
import { WHATSAPP_LINK } from '@/hooks/useReveal'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with BOW Logistics on WhatsApp"
      className={`fab-ring fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 grid size-14 place-items-center rounded-full bg-[#161616] text-[#FFD939] shadow-[0_8px_24px_rgba(22,22,22,0.4)] transition-all duration-300 active:scale-90 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <IconWhatsApp className="size-7" />
    </a>
  )
}
