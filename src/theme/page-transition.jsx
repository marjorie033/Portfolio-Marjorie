import { createContext, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { CatLogo} from "../theme/icons";

const TransitionContext = createContext(null)

// const CatSVG = () => (
//   <svg
//     viewBox="0 0 1438 1040"
//     preserveAspectRatio="xMidYMid slice"
//     style={{
//       width: "100%",
//       height: "100%",
//     }}
//   >
//     <defs>
//       <mask id="cat-mask">
//         {/* 1. The White Rect: Tells the mask to show the color everywhere */}
//         <rect x="-500%" y="-500%" width="1000%" height="1000%" fill="white" />
        
//         {/* 2. The Black Path: Tells the mask to "punch a hole" here */}
//         <path
//           d="M238.632 559.879C236.672 573.249 235.665 586.836 235.665 600.601C235.665 802.957 453.089 966.999 721.294 966.999C989.499 966.999 1206.92 802.957 1206.92 600.601C1206.92 577.486 1204.08 554.872 1198.66 532.944L1220 94.1738L887.749 256.292C835.829 242 779.769 234.202 721.294 234.202C671.06 234.202 622.608 239.957 577.032 250.64L215 74L238.632 559.879Z"
//           fill="black" 
//         />
//       </mask>
//     </defs>

//     {/* 3. The Actual Background Color */}
//     <rect
//       x="-500%"
//       y="-500%"
//       width="1000%"
//       height="1000%"
//       fill="#15141F"
//       mask="url(#cat-mask)"
//     />
//   </svg>
// );

// function PageTransition() {
//   const overlayRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const overlay = overlayRef.current;
//     if (!overlay) return;

//     const tl = gsap.timeline();

//     // Reset and start animation
//     tl.set(overlay, { 
//       display: "block", 
//       scale: 15, // Start with the hole so big you only see the page
//       opacity: 1 
//     })
//     .to(overlay, {
//       scale: 1, // Shrink until the cat head is visible and screen is dark
//       duration: 0.6,
//       ease: "power3.inOut",
//     })
//     .to(overlay, {
//       scale: 15, // Zoom back out to reveal the NEW page
//       duration: 0.8,
//       ease: "power3.inOut",
//       delay: 0.1, // Brief pause while content swaps
//       onComplete: () => {
//         gsap.set(overlay, { display: "none" });
//       }
//     });
//   }, [location.pathname]);

//   return (
//     <div
//       ref={overlayRef}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         display: "none",
//         pointerEvents: "none",
//         // We target the center of the cat path for the zoom origin
//         // In your 1438x1040 SVG, the head is roughly at 50% width and 60% height
//         transformOrigin: "50% 60%", 
//         overflow: "hidden"
//       }}
//     >
//       <CatSVG />
//     </div>
//   );
// }

const loadingPhrases = [
  "Loading...",
  "Almost there...",
  "Hold on...",
  "One sec...",
];


export function TransitionProvider({ children }) {
  const panelRef = useRef(null)
  const catRef = useRef(null)
  const navigate = useNavigate()
  const textRef = useRef(null)

  const navigateTo = (path) => {
    const panel = panelRef.current
    const cat = catRef.current
    if (!panel || !cat) return navigate(path)
    .to(cat, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: 'back.out(1.7)',
    }, '-=0.1')

    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: 'power2.out',
    }, '-=0.1')
        const tl = gsap.timeline()
    
    .to([cat, textRef.current], {
  scale: 1.15,
  opacity: 0,
  duration: 0.25,
  ease: 'power2.inOut',
})  

    /* 1. Cover screen FIRST before navigating */
    tl.set(panel, { display: 'flex', yPercent: -100, opacity: 1 })
      .set(cat, { scale: 0.5, opacity: 0 })

      /* 2. Panel sweeps down */
      .to(panel, {
        yPercent: 0,
        duration: 0.65,
        ease: 'power4.inOut',
      })

      /* 3. Cat pops in */
      .to(cat, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
      }, '-=0.1')

      /* 4. Navigate WHILE screen is covered */
      .add(() => navigate(path))

      /* 5. Hold */
      .to({}, { duration: 0.25 })

      /* 6. Cat fades out */
      .to(cat, {
        scale: 1.15,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.inOut',
      })

      /* 7. Panel sweeps off */
      .to(panel, {
        yPercent: 100,
        duration: 0.65,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.set(panel, { display: 'none' })
        },
      }, '-=0.1')
  }

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      {/* Overlay lives here, always mounted */}
      <div
  ref={panelRef}
  style={{
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    display: 'none',
    flexDirection: 'column',   // ← add this
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',               // ← add this
    backgroundColor: '#FFD341',
    pointerEvents: 'none',
  }}
>
  <div ref={catRef}>
    <CatLogo />
  </div>

  {/* Loading text */}
  <p
    ref={textRef}
    style={{
      fontFamily: "'Halfre', serif",
      fontSize: '13px',
      fontWeight: '700',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#15141F',
      opacity: 0,
      transform: 'translateY(8px)',
    }}
  >
    Loading...
  </p>
</div>
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)