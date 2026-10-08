import { MaskedWord, IconPin, IconWhatsApp, IconArrow } from '@/components/bow/MaskedWord'
import { WHATSAPP_LINK } from '@/hooks/useReveal'

function RouteScene() {
  return (
    <svg viewBox="0 0 360 150" className="w-full" aria-hidden="true">
      {/* road */}
      <path
        id="bow-road"
        d="M-10 118 C 60 118, 70 60, 140 66 S 240 118, 300 88 S 350 60, 380 62"
        fill="none"
        stroke="#161616"
        strokeWidth="3"
        className="road-line"
        strokeLinecap="round"
      />
      {/* origin pin */}
      <g transform="translate(18,96)">
        <circle r="9" fill="#161616" />
        <circle r="3.5" fill="#FFD939" />
      </g>
      {/* destination pin */}
      <g transform="translate(330,34)">
        <path
          d="M0 26 C -11 14 -15 8 -15 1 a15 15 0 1 1 30 0 c0 7 -4 13 -15 25Z"
          fill="#161616"
        />
        <circle cy="1" r="6" fill="#FFD939" />
      </g>
      {/* moving courier dot */}
      <g>
        <circle r="10" fill="#161616" opacity="0.15" />
        <circle r="6" fill="#161616" />
        <circle r="2.4" fill="#FFD939" />
        <animateMotion dur="5s" repeatCount="indefinite" rotate="0">
          <mpath href="#bow-road" />
        </animateMotion>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#FFD939] text-[#161616]">
      <div className="stripe-bg absolute inset-0" aria-hidden="true" />

      {/* top bar */}
      <div className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 pt-6 md:px-8">
        <div className="flex items-center gap-2.5">
          <div className="grid size-10 place-items-center rounded-full bg-[#161616]">
            <svg viewBox="0 0 24 24" className="size-5 text-[#FFD939]" fill="currentColor" aria-hidden="true">
              <circle cx="6" cy="17" r="2.6" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="18" cy="17" r="2.6" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M6 17h6l2.5-6H18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 8h3l2 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12h6M1.5 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="leading-none">
            <p className="font-display text-lg font-bold tracking-wide">BOW LOGISTICS</p>
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#161616]/70">
              BUSINESS ON WHEELS
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border-2 border-[#161616] px-3 py-1.5">
          <IconPin className="size-4" />
          <span className="font-display text-xs font-semibold tracking-[0.18em]">ABUJA</span>
        </div>
      </div>

      {/* headline */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-12 md:px-8 md:pt-16">
        <p className="rv mb-4 inline-block -rotate-1 bg-[#161616] px-3 py-1.5 text-[11px] font-bold tracking-[0.22em] text-[#FFD939]">
          YOUR ERRAND, OUR RESPONSIBILITY.
        </p>
        <h1
          aria-label="We pick. We buy. We deliver."
          className="font-display text-[17.5vw] font-bold uppercase leading-[0.98] tracking-tight md:text-8xl lg:text-9xl"
        >
          <span className="block">
            <MaskedWord word="WE" base={0.15} /> <MaskedWord word="PICK." base={0.3} />
          </span>
          <span className="block">
            <MaskedWord word="WE" base={0.5} /> <MaskedWord word="BUY." base={0.65} />
          </span>
          <span className="block text-transparent [-webkit-text-stroke:2.5px_#161616]">
            <MaskedWord word="WE" base={0.85} /> <MaskedWord word="DELIVER." base={1.0} />
          </span>
        </h1>
        <p
          className="rv mt-6 max-w-md text-base font-semibold leading-relaxed text-[#161616]/85 md:text-lg"
          style={{ ['--d' as string]: '1.3s' }}
        >
          Need something delivered or picked up? We've got you covered — fast, reliable
          and affordable, anywhere in Abuja.
        </p>

        {/* CTAs */}
        <div className="rv mt-8 flex flex-wrap items-center gap-4" style={{ ['--d' as string]: '1.45s' }}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#161616] px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#FFD939] transition-transform duration-200 active:scale-95"
          >
            <IconWhatsApp className="size-5" />
            Order on WhatsApp
          </a>
          <a
            href="#services"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#161616] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-200 active:bg-[#161616] active:text-[#FFD939] md:hover:bg-[#161616] md:hover:text-[#FFD939]"
          >
            Our services
            <IconArrow className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* route scene */}
      <div className="relative z-10 mx-auto mt-4 max-w-5xl px-5 md:px-8">
        <RouteScene />
      </div>

      {/* scroll hint */}
      <div className="float-hint relative z-10 mx-auto w-fit pb-6">
        <svg viewBox="0 0 24 24" className="size-6 text-[#161616]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* angled divider into black ticker */}
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="relative z-10 block h-8 w-full md:h-12" aria-hidden="true">
        <path d="M0 48 1440 0v48H0Z" fill="#161616" />
      </svg>
    </header>
  )
}
