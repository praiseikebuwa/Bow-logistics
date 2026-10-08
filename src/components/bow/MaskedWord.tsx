/** Splits a word into masked chars for the hero rise-in animation. */
export function MaskedWord({ word, base = 0 }: { word: string; base?: number }) {
  return (
    <span className="word-mask" aria-hidden="true">
      {word.split('').map((c, i) => (
        <span
          key={i}
          className="word-char"
          style={{ ['--d' as string]: `${base + i * 0.035}s` }}
        >
          {c}
        </span>
      ))}
    </span>
  )
}

/** Hand-drawn style inline SVG icon set — single stroke weight, no fills. */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconFood({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 3v6a2 2 0 0 0 2 2v10" />
      <path d="M8 3v6a2 2 0 0 1-2 2" />
      <path d="M6 3v5" />
      <path d="M17 3c-2 0-3 2.5-3 5.5S15.5 13 17 13v8" />
      <path d="M17 3v18" />
    </svg>
  )
}

export function IconShirt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M9 4 4 7l2 3 2-1v11h8V9l2 1 2-3-5-3a3 3 0 0 1-6 0Z" />
    </svg>
  )
}

export function IconDoc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h5M10 16h5" />
    </svg>
  )
}

export function IconStore({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 9 5.5 4h13L20 9" />
      <path d="M4 9a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0A2.4 2.4 0 0 0 20 9" />
      <path d="M5.5 11v9h13v-9" />
      <path d="M10 20v-5h4v5" />
    </svg>
  )
}

export function IconHome({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="m4 11 8-7 8 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-6h4v6" />
    </svg>
  )
}

export function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M4 13h16" />
    </svg>
  )
}

export function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function IconBolt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  )
}

export function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  )
}

export function IconHeadset({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19a4 4 0 0 1-4 3h-2" />
    </svg>
  )
}

export function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}

export function IconArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}
