import { createContext, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"

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


const CatLogo = () => (
  <svg
    width="72"
    height="76"
    viewBox="0 0 146 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52.5557 30.4453C59.1724 28.6038 66.207 27.6123 73.5 27.6123C81.9883 27.6123 90.1262 28.9559 97.6631 31.4189L145.898 3.47656L142.8 79.1084C143.587 82.8863 144 86.7823 144 90.7646C144 125.643 112.436 153.917 73.5 153.917C34.5639 153.917 3 125.643 3 90.7646C3 88.3943 3.14668 86.0545 3.43066 83.752L0 0L52.5557 30.4453Z"
      fill="#15141F"
    />
    <ellipse cx="42.0891" cy="80.2508" rx="16.7525" ry="18.3459" fill="#FFD341" />
    <ellipse cx="104.911" cy="80.2508" rx="16.7525" ry="18.3459" fill="#FFD341" />
    <ellipse cx="41.7401" cy="80.2508" rx="7.32921" ry="10.5842" fill="#1E1E1E" />
    <ellipse cx="104.562" cy="80.2508" rx="7.32921" ry="10.5842" fill="#1E1E1E" />
    <ellipse cx="63.7277" cy="117.648" rx="9.77228" ry="8.46735" fill="white" />
    <ellipse cx="83.2723" cy="117.648" rx="9.77228" ry="8.46735" fill="white" />
  </svg>
)



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


export function TransitionProvider({ children }) {
  const panelRef = useRef(null)
  const catRef = useRef(null)
  const navigate = useNavigate()

  const navigateTo = (path) => {
    const panel = panelRef.current
    const cat = catRef.current
    if (!panel || !cat) return navigate(path)

    const tl = gsap.timeline()

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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFD341',
          pointerEvents: 'none',
        }}
      >
        <div ref={catRef}>
          <CatLogo />
        </div>
      </div>
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)