import { useRef } from 'react'
import { useState, useEffect } from 'react'
import '../theme/index.css'


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

// ── SVG Components ────────────────────────────────────────────────────────────

const EyeLeftSVG = () => (
  <svg viewBox="0 0 304 315" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <ellipse cx="152" cy="157.5" rx="152" ry="157.5" fill="#FFD341"/>
    <ellipse cx="151.5" cy="157.5" rx="69.5" ry="101.5" fill="#15141F"/>
  </svg>
)

const EyeRightSVG = () => (
  <svg viewBox="0 0 304 315" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <ellipse cx="152" cy="157.5" rx="152" ry="157.5" fill="#FFD341"/>
    <ellipse cx="151.5" cy="157.5" rx="69.5" ry="101.5" fill="#15141F"/>
  </svg>
)

const NoseSVG = () => (
  <svg viewBox="0 0 353 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <path d="M353 80C353 124.183 308.228 160 253 160C197.772 160 153 124.183 153 80C153 35.8172 197.772 0 253 0C308.228 0 353 35.8172 353 80Z" fill="white"/>
    <path d="M200 80C200 124.183 155.228 160 100 160C44.7715 160 0 124.183 0 80C0 35.8172 44.7715 0 100 0C155.228 0 200 35.8172 200 80Z" fill="white"/>
  </svg>
)

const MouthSVG = () => (
  <svg viewBox="0 0 1118 356" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect y="25.4945" width="1118" height="330" rx="70" fill="#D85662"/>
    <path d="M1050.89 355.494L66.486 355.495C65.4814 355.495 65.0964 354.188 65.951 353.66C329.305 190.937 737.873 193.294 1051.34 353.615C1052.28 354.092 1051.93 355.494 1050.89 355.494Z" fill="#9A313B" stroke="#9A313B"/>
    <path d="M237.82 102.181L190.797 25.839L284.328 25.5242L237.82 102.181Z" fill="white"/>
    <path d="M883.343 102.676L836.32 26.3337L929.851 26.0188L883.343 102.676Z" fill="white"/>
  </svg>
)

// ── Tools Data ────────────────────────────────────────────────────────────────

const tools = [
  { name: 'Figma',       icon: <img src="src/assets/icons/Figma.svg" alt="Figma" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'VS Code',      icon: <img src="src/assets/icons/VS.svg" alt="VS Code" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Aseprite',     icon: <img src="src/assets/icons/aseperite.svg" alt="Aseprite" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Unity',        icon: <img src="src/assets/icons/unity.svg" alt="Unity" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'WordPress',    icon: <img src="src/assets/icons/wordpress.svg" alt="WordPress" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Godot',        icon: <img src="src/assets/icons/Godot.svg" alt="Godot" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'CSS',          icon: <img src="src/assets/icons/css.svg" alt="CSS" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Photoshop',    icon: <img src="src/assets/icons/Photoshop.svg" alt="Photoshop" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Illustrator',  icon: <img src="src/assets/icons/Illustrator.svg" alt="Illustrator" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'React',        icon: <img src="src/assets/icons/React.svg" alt="React" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Git',          icon: <img src="src/assets/icons/github.svg" alt="Git" style={{ height: '1em', width: 'auto' }} /> },
  { name: 'HTML',         icon: <img src="src/assets/icons/html.svg" alt="HTML" style={{ height: '1em', width: 'auto' }} /> },
]

// ── Tools Section ─────────────────────────────────────────────────────────────

export default function ToolsSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, 0.1)


  return (
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

        {/* ── Mouth + tool grid overlay ── */}
        <div style={{ position: 'relative' }}>

          {/* Mouth SVG background */}
          <MouthSVG />

          {/* Tool cards overlaid inside the mouth */}
          <div style={{
            position: 'absolute',
            /* sits in the upper pink area above the dark gum curve */
            top: '35%',
            left: '14%',
            right: '14%',
            bottom: '36%',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 10,
            alignItems: 'stretch',
            justifyItems: 'stretch',
          }}>
            {tools.map((t, i) => (
              <div
                key={t.name}
                 style={{
                  background: '#e0d9d6',   /* solid brown */
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  padding: '6px 4px',
                  cursor: 'inherit',
                  transition: 'transform 0.18s, background 0.18s',
                  animation: `toolPop 0.4s ${i * 0.05}s ease both`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.07)'
                  e.currentTarget.style.background = '#FFFFFF'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.background = '#e0d9d6'
                }}
              >
                <span style={{ fontSize: 'clamp(14px, 2vw, 22px)', lineHeight: 1 }}>
                  {t.icon}
                </span>
                <span
                  className="font-surgena"
                  style={{
                    fontSize: 'clamp(7px, 0.9vw, 11px)',
                    fontWeight: 600,
                    color: '#15141F',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    WebkitFontSmoothing: 'antialiased',
                  }}
                >
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}