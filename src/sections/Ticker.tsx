const ITEMS = ['FAST', 'RELIABLE', 'AFFORDABLE', 'DELIVERY ACROSS ABUJA']

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden bg-[#161616] py-4" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display px-6 text-xl font-semibold uppercase tracking-[0.2em] text-[#FFD939] md:text-2xl">
                  {t}
                </span>
                <svg viewBox="0 0 24 24" className="size-3 text-[#FFD939]/60" fill="currentColor">
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
