import { useEffect, useRef, useState } from 'react'
import { CatPawSVG } from "../theme/icons";
import '../theme/index.css'
import { projects } from "../theme/data";

// ── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({ project, stackIndex, dragY, isDragging }) {
  // stackIndex 0 = top card, 1 = second, etc.
  // Cards below are scaled down slightly and offset to give a stack feel
  const [isImageHovered, setIsImageHovered] = useState(false);
  const scale   = 1 - stackIndex * 0.04
  const offsetY = stackIndex * 14
  const opacity = stackIndex === 0 ? 1 : Math.max(0, 1 - stackIndex * 0.25)

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0,
      transformOrigin: 'top center',
      transform: `
        translateY(${stackIndex === 0 ? dragY : offsetY}px)
        scale(${scale})
      `,
      opacity,
      transition: isDragging && stackIndex === 0
        ? 'none'                          // top card follows scroll instantly
        : 'transform 0.4s ease, opacity 0.4s ease',
      zIndex: projects.length - stackIndex,
      pointerEvents: stackIndex === 0 ? 'auto' : 'none',
    }}>

      <div style={{
        background: '#FFFFFF',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
        border: '1.5px solid rgba(255,255,255,0.06)',
      }}>


        {/* Image area */}
        <a href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', textDecoration: 'none' }}>
    
        <div onMouseEnter={() => setIsImageHovered(true)}
             onMouseLeave={() => setIsImageHovered(false)}
            style={{
              position: "relative",
              height: 220,
              background: "#E0E0E0",
              overflow: "hidden", 
              cursor: "inherit",
            }}>
          {/* Status badge */}
          <div style={{
            position: 'absolute', top: 14, left: 14, zIndex: 2,
            background: project.accent,
            color: '#15141F',
            borderRadius: 999,
            padding: '5px 16px',
            fontSize: 13,
            fontWeight: 700,
            fontFamily: 'Surgena, cursive',
            WebkitFontSmoothing: 'antialiased',
          }}>
            {project.status}
          </div>

          {/* Date badge */}
          <div style={{
            position: 'absolute', top: 14, right: 14, zIndex: 2,
            background: 'rgb(255, 255, 255)',
            color: '#73643C',
            borderRadius: 999,
            padding: '5px 16px',
            fontSize: 13,
            fontFamily: 'Surgena, cursive',
            border: '1px solid rgba(0,0,0,0.08)',
            WebkitFontSmoothing: 'antialiased',
          }}>
            {project.date}
          </div>
          

          {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease", 
                  transform: isImageHovered ? "scale(1.1)" : "scale(1)", 
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #d4d4d4, #eaeaea)",
                  transition: "transform 0.5s ease",
                  transform: isImageHovered ? "scale(1.1)" : "scale(1)",
                }}
              />
            )}
          </div>
        </a>

        {/* Content */}
        <div style={{ padding: '20px 24px 26px' }}>
          <h3 className="font-halfre" style={{
            fontSize: 26, fontWeight: 600, color: '#15141F',
            margin: '0 0 8px', WebkitFontSmoothing: 'antialiased',
          }}>
            {project.title}
          </h3>
          <p className="font-halfre" style={{
            fontSize: 14, color: '#737279', lineHeight: 1.65, margin: '0 0 16px',
          }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} className="font-halfre" style={{
                background: project.accent,
                color: '#15141F',
                borderRadius: 999,
                padding: '4px 14px',
                fontSize: 12,
                fontWeight: 600,
                WebkitFontSmoothing: 'antialiased',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Projects Section ──────────────────────────────────────────────────────────

export default function ProjectsSection() {
const sectionRef = useRef(null)

  const [topIndex, setTopIndex]   = useState(0)
  const [dragY, setDragY]         = useState(0)
  const [pawVisible, setPawVisible] = useState(false)
  const [pawY, setPawY]           = useState(0)
  const [phase, setPhase]         = useState('idle')

  const CARD_HEIGHT  = 380
  const DRAG_THRESH  = 120

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect    = sectionRef.current.getBoundingClientRect()
      const winH    = window.innerHeight
      const secH    = sectionRef.current.offsetHeight
      const scrolled = Math.max(-rect.top, 0)
      const range    = secH - winH
      const progress = Math.min(scrolled / range, 1)

      const total     = projects.length
      const sliceSize = 1 / total
      const cardIndex = Math.min(Math.floor(progress / sliceSize), total - 1)
      const cardProg  = (progress - cardIndex * sliceSize) / sliceSize

      setTopIndex(cardIndex)

      if (cardProg < 0.35) {
        const t = cardProg / 0.35
        setPawVisible(true)
        setPawY(200 - t * 200)
        setDragY(0)
        setPhase('rising')
      } else if (cardProg < 0.65) {
        setPawVisible(true)
        setPawY(0)
        setDragY(0)
        setPhase('gripping')
      } else {
        const t = (cardProg - 0.65) / 0.35
        const drag = t * winH
        setPawVisible(true)
        setPawY(drag)
        setDragY(drag)
        setPhase('dragging')
      }

      if (cardIndex === total - 1 && cardProg > 0.98) {
        setPawVisible(false)
        setPhase('done')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const visibleCards = projects
    .slice(topIndex)
    .slice(0, 3)

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        background: '#15141F',
        minHeight: `${projects.length * 220}vh`,
        position: 'relative',
      }}
    >
      {/* Sticky viewport */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // ✅ Counteract any inherited padding/margin from parent sections
        padding: 0,
        margin: 0,
      }}>

        {/* Heading — tightened bottom margin */}
        <h2 className="font-surgena" style={{
          fontSize: 'clamp(26px, 3.5vw, 44px)',
          fontWeight: 600,
          color: '#FFFFFF',
          margin: '0 0 28px',           // ✅ was 48px, reduced to 28px
          textAlign: 'center',
          WebkitFontSmoothing: 'antialiased',
          position: 'relative',
          zIndex: 10,
          flexShrink: 0,               // ✅ prevent heading from being squished
        }}>
          My Featured Projects
        </h2>

        {/* Card stack area */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 560,
          height: CARD_HEIGHT + 60,
          // ✅ Use padding instead of margin so the centering flex layout
          //    accounts for side gutters symmetrically
          padding: '0 24px',
          boxSizing: 'border-box',     // ✅ ensures padding doesn't overflow maxWidth
          flexShrink: 0,               // ✅ prevent stack from being squished by flex
        }}>

          {[...visibleCards].reverse().map((project, revIdx) => {
            const stackIndex = visibleCards.length - 1 - revIdx
            const isTop = stackIndex === 0
            return (
              <ProjectCard
                key={project.title}
                project={project}
                stackIndex={stackIndex}
                dragY={isTop ? dragY : 0}
                isDragging={isTop && phase === 'dragging'}
              />
            )
          })}

          {/* Cat paw */}
          {pawVisible && (
            <div style={{
              position: 'absolute',
              bottom: -20,
              left: '50%',
              transform: `translateX(-50%) translateY(${pawY}px)`,
              width: 110,
              zIndex: 50,
              pointerEvents: 'none',
              filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.55))',
            }}>
              <CatPawSVG style={{ width: '100%', height: 'auto' }} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}