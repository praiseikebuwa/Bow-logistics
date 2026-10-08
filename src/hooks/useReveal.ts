import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref's subtree:
 * every element with `.rv` gets `.rv-in` when it scrolls into view (once).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll<HTMLElement>('.rv')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}

export const WHATSAPP_NUMBER_DISPLAY = '0707 0013 545'
export const WHATSAPP_LINK =
  'https://wa.me/2347070013545?text=' +
  encodeURIComponent("Hi BOW Logistics! I'd like to place an order / get a quote.")
