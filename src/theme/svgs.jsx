import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function FloatingStar({ color, size, style, delay = 0 }) {
  const starRef = useRef(null)

  useEffect(() => {
    const el = starRef.current
    if (!el) return

    gsap.to(el, {
      y: -18,
      duration: 2.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay,
    })

    gsap.to(el, {
      rotation: 20,
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay,
    })

    gsap.to(el, {
      scale: 1.15,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay,
    })
  }, [])

  return (
    <span
      ref={starRef}
      style={{
        position: 'absolute',
        fontFamily: "'Oslla', sans-serif",
        fontSize: `${size}px`,
        color,
        lineHeight: 1,
        display: 'inline-block',
        userSelect: 'none',
        pointerEvents: 'none',
        ...style,
      }}
    >
      *
    </span>
  )
}