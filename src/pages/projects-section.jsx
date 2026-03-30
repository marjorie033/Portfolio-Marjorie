import { useEffect, useRef, useState } from 'react'

// ── Cat Paw SVG ───────────────────────────────────────────────────────────────

const CatPawSVG = ({ style }) => (
  <svg style={style} viewBox="0 0 320 683" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.73318 81.5521C1.07148 53.1171 26.7193 29.4568 59.0192 28.7051C76.4746 28.2989 92.2998 34.667 103.264 45.0933C107.65 43.5344 112.148 42.1657 116.743 40.9964C125.92 24.2109 142.939 12.7485 162.665 12.2894C185.155 11.7661 204.795 25.6932 213.592 46.0162C215.802 46.873 217.98 47.7831 220.123 48.7448C228.928 40.5676 240.478 35.4855 253.223 35.1889C281.658 34.5272 305.266 57.9371 305.953 87.4763C306.346 104.33 299.191 119.537 287.693 129.614C289.686 138.192 290.841 147.279 291.063 156.841C291.587 179.369 286.856 200.761 278.024 219.777L288.653 676.538L46.7182 682.168L36.0881 225.361C26.0897 206.795 20.1603 185.667 19.6365 163.158C19.2902 148.274 21.3442 134.433 25.4254 121.779C11.3714 112.685 2.11914 98.1382 1.73318 81.5521Z" fill="#15141F"/>
    <path d="M53.195 14.8368C59.2685 14.6954 64.3941 23.2648 64.4712 26.5776C64.5483 29.8904 59.6873 32.6906 53.6138 32.8319C47.5403 32.9732 42.5543 30.4022 42.4772 27.0894C42.4001 23.7766 47.1215 14.9781 53.195 14.8368Z" fill="white"/>
    <path d="M162.956 3.28014C169.029 3.13881 174.155 11.7082 174.232 15.021C174.309 18.3338 169.448 21.1339 163.375 21.2753C157.301 21.4166 152.315 18.8456 152.238 15.5328C152.161 12.22 156.882 3.42147 162.956 3.28014Z" fill="white"/>
    <path d="M277.592 28.1442C283.359 30.0537 285.305 39.8477 284.263 42.9934C283.221 46.1392 277.702 47.1414 271.935 45.232C266.167 43.3225 262.336 39.2244 263.378 36.0787C264.419 32.9329 271.825 26.2347 277.592 28.1442Z" fill="white"/>
  </svg>
)

// ── Projects data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Know Your Trash',
    description: 'An educational game about waste segregation, featuring intuitive gameplay that teaches players to properly sort trash. Served as Lead Artist, responsible for the game’s visual style and assets.',
    tags: ['Lead Artist', 'Unity'],
    status: 'Live',
    date: 'February 2026',
    accent: '#FFD341',
    image: 'src/assets/projects/know-your-trash.png',
    link: 'https://settery.itch.io/know-your-trash',
  },
  {
    title: 'How to Swim your Fish',
    description: 'A fun underwater adventure game where players navigate a fish through obstacles and challenges. Served as Lead Artist, creating characters, environments, and visual assets',
    tags: ['Wire Framming', 'Godot', 'Lead Artist'],
    status: 'Live',
    date: 'February 2026',
    accent: '#7C6EEA',
    image: 'src/assets/projects/how-swim-your-fish.png',
    link: 'https://settery.itch.io/how-to-swim-your-fish',
  },
  {
    title: 'Thiana Guerra Photography',
    description: 'Contributed as the WordPress designer/dev for Thiana Guerra Photography, where I improved the overall user experience (UX) and developed all secondary pages. Worked alongside a senior developer responsible for the homepage and deployment.',
    tags: ['Wordpress', 'Web Designer/Developer'],
    status: 'Live',
    date: 'January 2026',
    accent: '#D85662',
    image: 'src/assets/projects/thiana.png',
    link: 'https://thianaguerraphoto.com/',
  },
  {
    title: 'Nature Spring Foundation',
    description: 'Contributed as a WordPress designer for the Nature’s Spring Foundation website, focusing on UI design, Responsiveness and layout, in collaboration with a senior developer responsible for deployment and publishing.',
    tags: ['Wordpress', 'Web Designer/Developer'],
    status: 'Live',
    date: 'January 2026',
    accent: '#FFD341',
    image: 'src/assets/projects/nsf.png',
    link: 'https://naturespringfoundation.org/',
  },
  {
    title: 'Anito',
    description: 'A Filipino mythology-inspired game where players guide a mortal child through a mystical world. Lead Artist and UI/UX designer creating characters and environments in Unity.',
    tags: ['Wire Framming', 'Unity', 'Lead Artist'],
    status: 'In Development',
    date: 'December 2025',
    accent: '#7C6EEA',
    image: 'src/assets/projects/anito.png',
  },
]

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

        {/* Progress dots */}
        {/* <div style={{
          display: 'flex',
          gap: 8,
          marginTop: 36,
          position: 'relative',
          zIndex: 10,
        }}>
          {projects.map((_, i) => (
            <div key={i} style={{
              width: i === topIndex ? 24 : 8,
              height: 8,
              borderRadius: 99,
              background: i === topIndex ? '#FFD341' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div> */}

        {/* Scroll hint — only shows on first card */}
        {/* {topIndex === 0 && phase !== 'dragging' && (
          <p className="font-halfre" style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: 13,
            marginTop: 20,
            letterSpacing: 1,
            animation: 'fadeUp 1s 0.5s both',
          }}>
            scroll to browse ↓
          </p>
        )} */}
      </div>
    </section>
  )
}