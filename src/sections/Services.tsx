import {
  IconFood,
  IconShirt,
  IconDoc,
  IconStore,
  IconHome,
  IconBriefcase,
  IconArrow,
} from '@/components/bow/MaskedWord'
import { WHATSAPP_LINK } from '@/hooks/useReveal'

const SERVICES = [
  { icon: IconFood, title: 'Food & Groceries', desc: 'From your favourite spots to your doorstep.' },
  { icon: IconShirt, title: 'Clothes & Packages', desc: 'Fashion, gifts, and more.' },
  { icon: IconDoc, title: 'Documents', desc: 'Letters, files, important papers.' },
  { icon: IconStore, title: 'Store Pickups', desc: 'We buy and deliver for you.' },
  { icon: IconHome, title: 'Personal Errands', desc: 'Anything you need, we handle it.' },
  { icon: IconBriefcase, title: 'Business Deliveries', desc: 'For your growing business.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#FFFDF6]">
      {/* angled divider from black */}
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="block h-8 w-full bg-[#161616] md:h-12" aria-hidden="true">
        <path d="M1440 48 0 0v48Z" fill="#FFFDF6" />
      </svg>

      <div className="mx-auto max-w-5xl px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <p className="rv text-xs font-bold tracking-[0.3em] text-[#161616]/60">WHAT WE DO</p>
        <h2 className="rv font-display mt-3 text-5xl font-bold uppercase leading-none tracking-tight text-[#161616] md:text-7xl">
          Our <span className="bg-[#FFD939] px-2">Services</span>
        </h2>

        <div className="mt-10 border-t-2 border-[#161616]/10">
          {SERVICES.map((s, i) => (
            <a
              key={s.title}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rv service-row group flex min-h-[72px] items-center gap-4 border-b-2 border-[#161616]/10 px-3 py-5 md:gap-6 md:px-4"
              style={{ ['--d' as string]: `${i * 0.06}s` }}
              aria-label={`${s.title} — order on WhatsApp`}
            >
              <span className="font-display w-8 shrink-0 text-sm font-semibold text-[#161616]/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#161616] text-[#FFD939]">
                <s.icon className="size-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="font-display block text-xl font-semibold uppercase tracking-wide text-[#161616] md:text-2xl">
                  {s.title}
                </span>
                <span className="block text-sm font-medium text-[#161616]/60">{s.desc}</span>
              </span>
              <IconArrow className="service-arrow size-5 shrink-0 text-[#161616]/50" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
