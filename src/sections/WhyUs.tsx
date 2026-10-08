import { IconShield, IconBolt, IconPin, IconHeadset } from '@/components/bow/MaskedWord'

const REASONS = [
  { icon: IconShield, title: 'Safe & Trusted', desc: 'Your items are in good hands.' },
  { icon: IconBolt, title: 'Fast Service', desc: 'On time, every time.' },
  { icon: IconPin, title: 'Covering All of Abuja', desc: 'From estates to business districts.' },
  { icon: IconHeadset, title: 'Friendly Support', desc: 'Here to help, always.' },
]

export default function WhyUs() {
  return (
    <section className="relative bg-[#161616] text-[#FFFDF6]">
      {/* angled divider from paper */}
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="block h-8 w-full bg-[#FFFDF6] md:h-12" aria-hidden="true">
        <path d="M0 48 1440 0v48H0Z" fill="#161616" />
      </svg>

      <div className="mx-auto max-w-5xl px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <p className="rv text-xs font-bold tracking-[0.3em] text-[#FFD939]">WHY BOW</p>
        <h2 className="rv font-display mt-3 text-5xl font-bold uppercase leading-none tracking-tight md:text-7xl">
          More than <span className="text-[#FFD939]">delivery…</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="rv flex items-start gap-5"
              style={{ ['--d' as string]: `${i * 0.08}s` }}
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-[#FFD939]/40 bg-[#FFD939]/10 text-[#FFD939]">
                <r.icon className="size-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#FFFDF6]/60">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
