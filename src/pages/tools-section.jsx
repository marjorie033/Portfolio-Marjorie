import { useRef } from 'react'
import { useState, useEffect } from 'react'
import '../theme/index.css'
import { EyeLeftSVG, EyeRightSVG, NoseSVG, MouthDesktopSVG, MouthMobileSVG } from "../theme/icons";
import { tools, toolCardBase } from "../theme/data";


// ── Intersection observer hook ────────────────────────────────────────────────
function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return inView
}


// ── Main export ───────────────────────────────────────────────────────────────

export default function ToolsSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, 0.1)

  return (
    <>

      <section
        ref={sectionRef}
        id="tools"
        style={{
          background: '#15141F',
          padding: '100px 24px 120px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Section heading ── */}
        <div style={{
          textAlign: 'center',
          marginBottom: 56,
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(24px)',
          transition: 'all 0.7s ease',
        }}>
          <h2
            className="font-surgena"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 600,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.5px',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            Technologies and Tools I use
          </h2>
        </div>

        {/* ── Cat face container ── */}
        <div
          style={{
            maxWidth: 860,
            margin: '0 auto',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(32px)',
            transition: 'all 0.8s 0.15s ease',
          }}
        >

          {/* ── Eyes row ── */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingLeft: '8%',
            paddingRight: '8%',
            marginBottom: -8,
          }}>
            <div style={{ width: '23%', animation: 'float 3.4s ease-in-out infinite' }}>
              <EyeLeftSVG />
            </div>
            <div style={{ width: '23%', animation: 'float 3.4s 0.5s ease-in-out infinite' }}>
              <EyeRightSVG />
            </div>
          </div>

          {/* ── Nose ── */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: -12,
            position: 'relative',
            zIndex: 2,
          }}>
            <div style={{ width: '22%', maxWidth: 180 }}>
              <NoseSVG />
            </div>
          </div>

          {/* ══ DESKTOP MOUTH ══ */}
          <div className="mouth-desktop" style={{ position: 'relative' }}>
            <MouthDesktopSVG />

            <div className="tools-grid-desktop">
              {tools.map((t, i) => (
                <ToolCard key={t.name} tool={t} index={i} padding="6px 4px" iconSize="clamp(14px, 2vw, 22px)" labelSize="clamp(7px, 0.9vw, 11px)" />
              ))}
            </div>
          </div>

          {/* ══ MOBILE MOUTH ══ */}
          <div className="mouth-mobile" style={{ position: 'relative' }}>
            <MouthMobileSVG />

            <div className="tools-grid-mobile">
              {tools.map((t, i) => (
                <ToolCard key={t.name} tool={t} index={i} padding="10px 6px" iconSize="clamp(18px, 6vw, 28px)" labelSize="clamp(9px, 2.5vw, 12px)" />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

// ── Reusable tool card ────────────────────────────────────────────────────────
function ToolCard({ tool, index, padding, iconSize, labelSize }) {
  return (
    <div
      className="tool-card"
      style={{
        ...toolCardBase,
        padding,
        animation: `toolPop 0.4s ${index * 0.05}s ease both`,
      }}
    >
      <span style={{ fontSize: iconSize, lineHeight: 1 }}>
        {tool.icon}
      </span>
      <span
        className="font-surgena"
        style={{
          fontSize: labelSize,
          fontWeight: 600,
          color: '#15141F',
          textAlign: 'center',
          lineHeight: 1.2,
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {tool.name}
      </span>
    </div>
  )
}