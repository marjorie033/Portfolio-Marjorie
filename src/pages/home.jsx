import { useState, useEffect } from 'react'
import '../theme/index.css'
import ToolsSection from './tools-section.jsx'
import ProjectsSection from './projects-section.jsx'
import ContactSection from './contact-section.jsx'
import FloatingStar from '../theme/svgs.jsx'
import { useTransition } from '../theme/page-transition.jsx'
import SEO from '../widgets/SEO.jsx'
import { HeroBottomSVG } from "../theme/icons";


/* ── Responsive breakpoints ───────────────────────────────────────────────── */
// mobile  : < 640px
// tablet  : 640px – 1023px
// desktop : ≥ 1024px

/* ── Responsive hook ─────────────────────────────────────────────────────── */
function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === 'undefined') return 'desktop'
    const w = window.innerWidth
    if (w < 640) return 'mobile'
    if (w < 1024) return 'tablet'
    return 'desktop'
  })

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth
      if (w < 640) setBp('mobile')
      else if (w < 1024) setBp('tablet')
      else setBp('desktop')
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return bp
}

/* ── Home ─────────────────────────────────────────────────────────────────── */
export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const { navigateTo } = useTransition()
  const bp = useBreakpoint()

  const isMobile  = bp === 'mobile'
  const isTablet  = bp === 'tablet'
  const isDesktop = bp === 'desktop'

  useEffect(() => { setLoaded(true) }, [])

  /* ── derived sizing ── */
  const photoDiameter = isMobile ? 200 : isTablet ? 260 : 320
  const headingSize   = isMobile ? 'clamp(38px, 10vw, 56px)' : isTablet ? 'clamp(48px, 7vw, 76px)' : 'clamp(44px, 5.5vw, 76px)'
  const nameSize      = isMobile ? 'clamp(56px, 14vw, 80px)' : isTablet ? 'clamp(64px, 10vw, 96px)' : 'clamp(60px, 8.5vw, 118px)'
  const descSize      = isMobile ? 15 : 17

  return (
    
    <div style={{ background: '#15141F', minHeight: '100vh' }}>
      <SEO title="Home" />
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          background: '#FFFFFF',
          minHeight: '100vh',
          paddingTop: isMobile ? '90px' : isTablet ? '110px' : '150px',
          paddingBottom: isMobile ? '120px' : '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        {/* ── Decorative floating stars — fewer on mobile ── */}
        {!isMobile && (
          <>
            <FloatingStar color="#FFD341" size={isTablet ? 80 : 128} delay={0}   style={{ position: 'absolute', top: 140,  right:  '9%' }} />
            <FloatingStar color="#9089FC" size={isTablet ? 64 : 96}  delay={0.4} style={{ position: 'absolute', top: 260,  right: '16%'   }} />
            <FloatingStar color="#15141F" size={isTablet ? 52 : 72}  delay={1.2} style={{ position: 'absolute', top: 260,  left:  '30%'  }} />
          </>
        )}
        {isMobile && (
          <>
            <FloatingStar color="#FFD341" size={40} delay={0}   style={{ position: 'absolute', top: 100, right: '6%'  }} />
            <FloatingStar color="#9089FC" size={28} delay={0.5} style={{ position: 'absolute', top: 80,  left:  '6%'  }} />
            <FloatingStar color="#15141F" size={22} delay={1}   style={{ position: 'absolute', top: 200, left:  '12%' }} />
            <FloatingStar color="#FFD341" size={18} delay={0.8} style={{ position: 'absolute', top: 180, right: '18%' }} />
          </>
        )}

        {/* ── Main content ── */}
        <div
          style={{
            maxWidth: isDesktop ? 1200 : '100%',
            margin: '0 auto',
            padding: isMobile
              ? '40px 24px 50px'
              : isTablet
              ? '60px 48px 200px'
              : '60px 64px 200px 64px',
            width: '100%',
            display: 'grid',
            /* Mobile & tablet: single column; desktop: two columns */
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: isDesktop ? 80 : isTablet ? 48 : 32,
            alignItems: 'center',
          }}
        >

          {/* ── Photo — appears FIRST on mobile/tablet (order trick) ── */}
          {!isDesktop && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                minHeight: photoDiameter + 60,
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(20px)',
                transition: 'all 0.8s 0.2s',
              }}
            >
              <PhotoBlock
                diameter={photoDiameter}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </div>
          )}

          {/* ── LEFT: Text ── */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(30px)',
              transition: 'all 0.8s 0.2s',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >

            {/* HI! I'M */}
            <div
              className="font-oslla"
              style={{
                fontSize: headingSize,
                color: '#15141F',
                lineHeight: 1.05,
                marginBottom: 4,
                whiteSpace: 'nowrap',
              }}
            >
              HI! <span style={{ color: '#FFD341' }}>I&apos;M</span>
            </div>

            {/* MARJORIE */}
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                marginBottom: isMobile ? 24 : 36,
              }}
            >
              {/* Yellow parallelogram under MARJ */}
              <div
                style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '0%',
                  height: '90%',
                  width: '56%',
                  background: '#FFD341',
                  transform: 'skewX(-10deg)',
                  zIndex: 0,
                  borderRadius: 2,
                }}
              />
              <h1
                className="font-surgena"
                style={{
                  fontSize: nameSize,
                  color: '#15141F',
                  lineHeight: 0.92,
                  letterSpacing: '-3px',
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                }}
              >
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

            {/* Description */}
            <p
              className="font-halfre"
              style={{
                fontSize: descSize,
                color: '#3a3a3a',
                lineHeight: 1.7,
                maxWidth: isMobile ? '100%' : 480,
                marginBottom: isMobile ? 28 : 44,
                marginLeft: isMobile ? 'auto' : 0,
                marginRight: isMobile ? 'auto' : 0,
              }}
            >
              A 4th Year Computer Engineering student crafting interactive
              experiences through game development, UI/UX design, and web
              design/development — where creativity meets clean, functional code.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <a
                href="#"
                className="font-halfre"
                style={{
                  background: '#15141F',
                  color: '#FFFFFF',
                  padding: isMobile ? '13px 28px' : '15px 34px',
                  borderRadius: 999,
                  fontSize: isMobile ? 14 : 15,
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
                onClick={e => { e.preventDefault(); navigateTo('/projects') }}
                className="font-halfre"
                style={{
                  background: 'transparent',
                  color: '#15141F',
                  padding: isMobile ? '13px 28px' : '15px 34px',
                  borderRadius: 999,
                  fontSize: isMobile ? 14 : 15,
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

          {/* ── RIGHT: Photo — desktop only ── */}
          {isDesktop && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                minHeight: 420,
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(30px)',
                transition: 'all 0.8s 0.4s',
              }}
            >
              <PhotoBlock diameter={320} isMobile={false} isTablet={false} />
            </div>
          )}
        </div>

        {/* ── Cat ear divider ── */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <HeroBottomSVG />
        </div>
      </section>

      {/* ── OTHER SECTIONS ─────────────────────────────────────────────────── */}
      <ToolsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

/* ── Extracted photo block (shared between mobile/tablet top & desktop right) */
function PhotoBlock({ diameter, isMobile, isTablet }) {
  const badges = [
    { label: 'Game Dev', x: isMobile ? '-4%'  : '-8%', y: isMobile ? '8%'  : '14%', delay: '0s'   },
    { label: 'UI/UX',   x: isMobile ? '72%'  : '80%', y: isMobile ? '4%'  : '10%', delay: '0.3s' },
    { label: 'Web Dev', x: isMobile ? '68%'  : '76%', y: isMobile ? '72%' : '72%', delay: '0.6s' },
    { label: 'Front End Dev',   x: isMobile ? '68%'  : '-8%', y: isMobile ? '72%'  : '72%', delay: '0.3s' },

  ]

  return (
    <>
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          width: diameter + 40,
          height: diameter + 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,211,65,0.16) 0%, transparent 70%)',
        }}
      />

      {/* Portrait */}
      <div
        style={{
          width: diameter,
          height: diameter,
          borderRadius: '50%',
          border: `${isMobile ? 3 : 4}px solid #FFD341`,
          position: 'relative',
          zIndex: 2,
          boxShadow: '0 24px 64px rgba(0,0,0,0.13)',
          animation: 'float 3s ease-in-out infinite',
          overflow: 'hidden',
          background: '#1A1929',
        }}
      >
        <img
          src="../assets/my-photo.png"
          alt="Marjorie"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: 10,
            cursor: 'var(--default-cursor), auto',
          }}
        />
      </div>

      {/* Ellipse shadow */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '2%' : '6%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: diameter * 0.68,
          height: 24,
          background: 'rgba(0,0,0,0.09)',
          borderRadius: '50%',
          filter: 'blur(10px)',
          zIndex: 1,
        }}
      />

      {/* Floating role badges */}
      {badges.map(b => (
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
            padding: isMobile ? '5px 12px' : '7px 16px',
            fontSize: isMobile ? 11 : 13,
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
    </>
  )
}