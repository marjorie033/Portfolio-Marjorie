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

  // Which card is on top (0 = first project)
  const [topIndex, setTopIndex]   = useState(0)
  // How far the top card has been dragged (px, positive = down)
  const [dragY, setDragY]         = useState(0)
  // Is paw visible
  const [pawVisible, setPawVisible] = useState(false)
  // Paw position: rises from bottom then drags down with card
  const [pawY, setPawY]           = useState(0)
  // Phase: 'idle' | 'rising' | 'dragging' | 'done'
  const [phase, setPhase]         = useState('idle')

  const CARD_HEIGHT  = 380   // approximate card height px
  const DRAG_THRESH  = 120   // px dragged before card snaps away

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect    = sectionRef.current.getBoundingClientRect()
      const winH    = window.innerHeight
      const secH    = sectionRef.current.offsetHeight
      // scrolled px past section top
      const scrolled = Math.max(-rect.top, 0)
      // total scrollable range inside section
      const range    = secH - winH
      // overall 0→1 progress through section
      const progress = Math.min(scrolled / range, 1)

      // Each card gets an equal slice of the scroll range
      const total     = projects.length
      const sliceSize = 1 / total
      const cardIndex = Math.min(Math.floor(progress / sliceSize), total - 1)
      // progress within the current card's slice (0→1)
      const cardProg  = (progress - cardIndex * sliceSize) / sliceSize

      setTopIndex(cardIndex)

      // Paw logic within each card's slice:
      // 0.00→0.35 — paw rises from bottom of card
      // 0.35→0.65 — paw holds at center (grip)
      // 0.65→1.00 — paw + card drag downward
      if (cardProg < 0.35) {
        // Rising — paw comes up from +200px to 0
        const t = cardProg / 0.35
        setPawVisible(true)
        setPawY(200 - t * 200)
        setDragY(0)
        setPhase('rising')
      } else if (cardProg < 0.65) {
        // Gripping — paw steady
        setPawVisible(true)
        setPawY(0)
        setDragY(0)
        setPhase('gripping')
      } else {
        // Dragging — card + paw go down together
        const t = (cardProg - 0.65) / 0.35
        const drag = t * (CARD_HEIGHT + 200)
        setPawVisible(true)
        setPawY(drag)
        setDragY(drag)
        setPhase('dragging')
      }

      // Last card fully dragged: hide paw
      if (cardIndex === total - 1 && cardProg > 0.98) {
        setPawVisible(false)
        setPhase('done')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Visible cards = top card + up to 2 cards behind it for stack illusion
  const visibleCards = projects
    .slice(topIndex)
    .slice(0, 3)

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        background: '#15141F',
        // tall enough for each card to have its own scroll slice
        minHeight: `${projects.length * 220}vh`,
        position: 'relative',
      }}
    >
      {/* Sticky viewport — stays in view while section scrolls */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>

        {/* Heading */}
        <h2 className="font-surgena" style={{
          fontSize: 'clamp(26px, 3.5vw, 44px)',
          fontWeight: 600,
          color: '#FFFFFF',
          margin: '0 0 48px',
          textAlign: 'center',
          WebkitFontSmoothing: 'antialiased',
          position: 'relative',
          zIndex: 10,
        }}>
          My Featured Projects
        </h2>

        {/* Card stack area */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 560,
          // height = card height + stack offsets
          height: CARD_HEIGHT + 60,
          padding: '0 24px',
        }}>
          {/* Render up to 3 cards in the stack, back to front */}
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

          {/* Cat paw — centered on card, rises then drags down */}
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