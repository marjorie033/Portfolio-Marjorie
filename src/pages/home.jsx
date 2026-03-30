import { useState, useEffect } from 'react'
import Header from '../widgets/header-bar.jsx'
import '../theme/index.css'
import ToolsSection from './tools-section.jsx'
import ProjectsSection from './projects-section.jsx'
import ContactSection from './contact-section.jsx'
import FloatingStar  from '../theme/svgs.jsx'
import { useTransition } from '../theme/page-transition.jsx';

// ── Cat Divider SVG ───────────────────────────────────────────────────────────
const HeroBottomSVG = () => (
  <svg
    width="100%"
    viewBox="0 0 1440 291"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{ display: 'block' }}
  >
    <rect x="0" y="180" width="1440" height="111" fill="#15141F" />
    <path
      d="M356.79 224.638C268.091 220.42 181.177 225.792 107.219 249.025C33.6832 272.126 -27.0679 312.893 -64.0042 379.46L0.74059 0.821178L356.79 224.638Z"
      fill="#15141F" stroke="#15141F"
    />
    <path
      d="M1083.18 224.638C1171.87 220.42 1258.79 225.792 1332.75 249.025C1406.28 272.126 1467.03 312.893 1503.97 379.46L1439.23 0.821178L1083.18 224.638Z"
      fill="#15141F" stroke="#15141F"
    />
    <path
      d="M356.79 224.638 Q720 140 1083.18 224.638 L1083.18 291 L356.79 291 Z"
      fill="#15141F"
    />
  </svg>
)

// ── Home ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const { navigateTo } = useTransition();

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div style={{ background: '#15141F', minHeight: '100vh' }}>

      {/* <Header /> */}

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          background: '#FFFFFF',
          minHeight: '100vh',
          paddingTop: '150px',
          paddingBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative stars */}
        {/* <span style={{ position: 'absolute', top: 140, right: '9%',  color: '#FFD341', fontSize: 32, pointerEvents: 'none', lineHeight: 1 }}>✦</span>
        <span style={{ position: 'absolute', top: 260, right: '16%', color: '#15141F', fontSize: 16, opacity: 0.2, pointerEvents: 'none', lineHeight: 1 }}>✦</span>
        <span style={{ position: 'absolute', top: 420, left: '5%',   color: '#FFD341', fontSize: 20, opacity: 0.5, pointerEvents: 'none', lineHeight: 1 }}>✦</span>
        <span style={{ position: 'absolute', top: 260, right: '26%', color: '#15141F', fontSize: 16, opacity: 0.2, pointerEvents: 'none', lineHeight: 1 }}>✦</span> */}

        <FloatingStar color="#FFD341" size={128} delay={0}   style={{ position: 'absolute', top: 140,  right:  '9%' }} />
        <FloatingStar color="#9089FC" size={96}  delay={0.4} style={{ position: 'absolute', top: 260,  right: '16%'   }} />
        <FloatingStar color="#9089FC" size={80}  delay={0.8} style={{ position: 'absolute', top: 420,  left: '5%'  }} />
        <FloatingStar color="#15141F" size={72}  delay={1.2} style={{ position: 'absolute', top: 260,   left: '30%'  }} />

        {/* ── Main content grid ── */}
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 64px 200px 64px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>

          {/* ── LEFT: Text ──────────────────────────────────────── */}
          <div style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s 0.2s',
          }}>

            {/* HI! I'M — Oslla */}
            <div
              className="font-oslla"
              style={{
                fontSize: 'clamp(44px, 5.5vw, 76px)',
                color: '#15141F',
                lineHeight: 1.05,
                marginBottom: 4,
                whiteSpace: 'nowrap',
              }}
            >
              HI! <span style={{ color: '#FFD341' }}>I&apos;M</span>
            </div>

            {/* MARJORIE — Surgena, yellow only under "MARJ" */}
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: 36 }}>

              {/* Yellow parallelogram --- sized to sit only under "MARJ" (~46% of the word) */}
              <div style={{
                position: 'absolute',
                left: '-6px',
                top: '0 %',
                height: '90%',
                width: '56%',
                background: '#FFD341',
                transform: 'skewX(-10deg)',
                zIndex: 0,
                borderRadius: 2,
              }} />

              <h1
                className="font-surgena"
                style={{
                  fontSize: 'clamp(60px, 8.5vw, 118px)',
                  color: '#15141F',
                  lineHeight: 0.92,
                  letterSpacing: '-3px',
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                {/* Split so we can hover each letter */}
                {'MARJORIE'.split('').map((c, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      transition: 'transform 0.18s',
                     cursor: 'inherit',
                      color: i < 4 ? '#FFFFFF' : '#15141F',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-7px) rotate(-3deg)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = '' }}
                  >
                    {c}
                  </span>
                ))}
              </h1>
            </div>

            {/* Description — Halfre */}
            <p
              className="font-halfre"
              style={{
                fontSize: 17,
                color: '#3a3a3a',
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: 44,
              }}
            >
              A 4th Year Computer Engineering student crafting interactive
              experiences through game development, UI/UX design, and web
              design/development — where creativity meets clean, functional code.
            </p>

            {/* Buttons — Halfre */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="#"
                className="font-halfre"
                style={{
                  background: '#15141F',
                  color: '#FFFFFF',
                  padding: '15px 34px',
                  borderRadius: 999,
                  fontSize: 15,
                  textDecoration: 'none',
                  display: 'inline-block',
                  border: '2px solid #15141F',
                  transition: 'transform 0.2s, background 0.2s',
                  letterSpacing: 0.3,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = '' }}
              >
                Download Resume
              </a>
              <a
                href="/projects"
                onClick={(e) => { e.preventDefault(); navigateTo("/projects");}}
                className="font-halfre"
                style={{
                  background: 'transparent',
                  color: '#15141F',
                  padding: '15px 34px',
                  borderRadius: 999,
                  fontSize: 15,
                  textDecoration: 'none',
                  border: '2px solid #15141F',
                  display: 'inline-block',
                  transition: 'all 0.2s',
                  letterSpacing: 0.3,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#15141F'
                  e.currentTarget.style.color = '#FFD341'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#15141F'
                }}
              >
                View My Works
              </a>
            </div>
          </div>

          {/* ── RIGHT: Portrait ─────────────────────────────────── */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minHeight: 420,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s 0.4s',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute',
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,211,65,0.16) 0%, transparent 70%)',
            }} />

            {/* Portrait circle */}
            <div style={{
              width: 320,
              height: 320,
              borderRadius: '50%',
              border: '4px solid #FFD341',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 24px 64px rgba(0,0,0,0.13)',
              animation: 'float 3s ease-in-out infinite',
              overflow: 'hidden',
              background: '#1A1929',
            }}>
              <img
                src="/src/assets/my-photo.png"
                alt="Marjorie"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Shadow */}
            <div style={{
              position: 'absolute',
              bottom: '6%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 220,
              height: 30,
              background: 'rgba(0,0,0,0.09)',
              borderRadius: '50%',
              filter: 'blur(10px)',
              zIndex: 1,
            }} />

            {/* Floating role badges */}
            {[
              { label: 'Game Dev', x: '-8%',  y: '14%', delay: '0s'   },
              { label: 'UI/UX',    x: '80%',  y: '10%', delay: '0.3s' },
              { label: 'Web Dev',  x: '76%',  y: '72%', delay: '0.6s' },
            ].map(b => (
              <div
                key={b.label}
                className="font-halfre"
                style={{
                  position: 'absolute',
                  left: b.x,
                  top: b.y,
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(21,20,31,0.12)',
                  borderRadius: 999,
                  padding: '7px 16px',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#15141F',
                  animation: `float 3s ${b.delay} ease-in-out infinite`,
                  zIndex: 3,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  whiteSpace: 'nowrap',
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Cat ear divider ── */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <HeroBottomSVG />
        </div>
      </section>
    

    {/* ── TOOLS SECTION ──────────────────────────────────────── */}
      <ToolsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}