import { IconWhatsApp } from '@/components/bow/MaskedWord'
import { WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from '@/hooks/useReveal'

function Skyline() {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-16 w-full md:h-24" aria-hidden="true">
      <path
        fill="#161616"
        d="M0 120V70h40v-20h25v20h30V40h15l5-18 5 18h15v30h45V55h35v15h30V45h50v25h40V35h20V20h8V8l6-8 6 8v12h8v15h20v35h40V55h35v15h45V50h30v20h35V40h45v30h40V58h35v12h45V42h50v28h40V55h35v15h40V45h45v25h40v50H0Z"
      />
    </svg>
  )
}

export default function FinalCTA() {
  return (
    <footer className="relative bg-[#FFD939] text-[#161616]">
      {/* angled divider from black */}
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="block h-8 w-full bg-[#161616] md:h-12" aria-hidden="true">
        <path d="M1440 48 0 0v48Z" fill="#FFD939" />
      </svg>

      <div className="mx-auto max-w-5xl px-5 pb-14 pt-12 text-center md:px-8 md:pt-16">
        <p className="rv text-xs font-bold tracking-[0.3em] text-[#161616]/60">
          CHAT WITH US ON WHATSAPP
        </p>
        <h2 className="rv font-display mt-4 text-6xl font-bold uppercase leading-none tracking-tight md:text-8xl">
          We move<br />your world.
        </h2>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="rv font-display mt-8 inline-block text-4xl font-bold tracking-tight underline decoration-[#161616]/30 decoration-4 underline-offset-8 md:text-6xl"
          style={{ ['--d' as string]: '0.1s' }}
        >
          {WHATSAPP_NUMBER_DISPLAY}
        </a>

        <div className="rv mt-10" style={{ ['--d' as string]: '0.2s' }}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#161616] px-9 py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-[#FFD939] shadow-[0_10px_30px_rgba(22,22,22,0.35)] transition-transform duration-200 active:scale-95"
          >
            <IconWhatsApp className="size-6" />
            Place your order
          </a>
          <p className="mt-4 text-xs font-bold tracking-[0.18em] text-[#161616]/60">
            PLACE YOUR ORDER • GET A QUOTE • ASK A QUESTION
          </p>
        </div>
      </div>

      <Skyline />

      <div className="bg-[#161616] px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 text-center">
        <p className="font-display text-sm font-semibold tracking-[0.22em] text-[#FFD939]">
          BOW LOGISTICS — BUSINESS ON WHEELS
        </p>
        <p className="mt-1 text-[11px] font-medium tracking-wide text-[#FFFDF6]/50">
          Fast • Reliable • Affordable — Delivery across Abuja
        </p>
      </div>
    </footer>
  )
}
