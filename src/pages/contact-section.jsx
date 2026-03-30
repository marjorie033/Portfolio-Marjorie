import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import FloatingStar from '../theme/svgs.jsx'
import { useTransition } from '../theme/page-transition.jsx';

// ── Contact + Footer Section ──────────────────────────────────────────────────

const CatBottomTailSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    style={{ display: 'block', position: 'absolute', inset: 0 }}
  >
    <rect width="1440" height="1024" fill="#FFFFFF" />
    <path
      d="M1439 0H1C0.447715 0 0 0.447718 0 1V91.0851C0 91.5117 0.280654 91.8948 0.683888 92.0339C552.264 282.299 867.176 288.321 1439.31 92.0333C1439.72 91.8947 1440 91.511 1440 91.0839V1C1440 0.447715 1439.55 0 1439 0Z"
      fill="#15141F" stroke="#15141F"
    />
    <path
      d="M36.2394 236.465C83.7035 187.712 175.28 133.991 181.768 130.212C182.02 130.065 182.287 130.054 182.562 130.15C296.99 170.116 447.456 203.486 581.05 215.969C582.16 216.072 582.349 217.662 581.279 217.973C546.826 227.958 352.833 287.044 273.315 373.421C205.497 447.088 140.831 537.868 140.831 640.335C140.831 726.925 128.755 771.292 206.805 818.277C328.912 891.784 507.367 791.066 651.992 776.5C791 762.5 927 909.5 1048.5 851C1170 792.5 1056.5 717.324 1056.5 673C1056.5 621.017 1097.5 591.835 1163.5 609C1229.5 626.165 1312.04 720.461 1338.5 786.5C1370.15 865.474 1299.54 998.219 1181 1023.71C997.877 1063.09 839.924 993.416 651.992 994.5C474.526 995.524 198.979 1109.11 47 1023.71C-101.199 940.437 -26.5555 753.596 -53.8708 594.35C-78.4001 451.345 -68.1812 343.722 36.2394 236.465Z"
      fill="#15141F" stroke="#15141F"
    />
  </svg>
)

// const Star = ({ color, size, style }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
//     <path
//       d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z"
//       fill={color}
//     />
//   </svg>
// )


// const socials = [
//   {
//     name: 'GitHub',
//     href: 'https://github.com/',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
//       </svg>
//     ),
//   },
//   {
//     name: 'Behance',
//     href: 'https://behance.net/',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M7.5 11.5c.828 0 1.5-.672 1.5-1.5S8.328 8.5 7.5 8.5H5v3h2.5zm.5 1.5H5v3.5h3c.966 0 1.75-.784 1.75-1.75S8.966 13 8 13zM22 9h-5V7.5h5V9zm-2.5 2.5c-.69 0-1.25.56-1.25 1.25H20.5c0-.69-.56-1.25-1-1.25zM2 6v12h8.5c1.933 0 3.5-1.567 3.5-3.5 0-1.176-.584-2.213-1.473-2.838.463-.551.723-1.253.723-2.012C13.25 7.343 11.907 6 10.25 6H2zm12 6.5c0-2.485 2.015-4.5 4.5-4.5S23 10.015 23 12.5v.5h-5.25c0 .69.56 1.25 1.25 1.25.44 0 .826-.227 1.044-.567l1.88.557C21.478 15.12 20.307 16 18.5 16c-2.485 0-4.5-2.015-4.5-3.5z"/>
//       </svg>
//     ),
//   },
//   {
//     name: 'LinkedIn',
//     href: 'https://linkedin.com/',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//       </svg>
//     ),
//   },
// ]

export default function ContactSection() {
    const { navigateTo } = useTransition();

      return (
        <>
        {/* ── CONTACT ──────────────────────────────────────────────── */}
        <section
        id="contact"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'clamp(420px, 56vw, 720px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* ── SVG as absolute background layer ── */}
        <CatBottomTailSVG />

        {/* ── Content centered on top of the white blob ── */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: 640,
          width: '100%',
        }}>

         {/* Decorative stars */}
        <FloatingStar color="#FFD341" size={128} delay={0}   style={{ position: 'absolute', top: -40,  left:  '-10%' }} />
        <FloatingStar color="#9089FC" size={96}  delay={0.4} style={{ position: 'absolute', top: -60,  right: '8%'   }} />
        <FloatingStar color="#9089FC" size={80}  delay={0.8} style={{ position: 'absolute', top: -10,  right: '-8%'  }} />
        <FloatingStar color="#15141F" size={72}  delay={1.2} style={{ position: 'absolute', top: 60,   right: '-6%'  }} />

          {/* Available for work */}
          <p
            className="font-surgena"
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#FFD341',
              margin: '0 0 20px',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            Available for work
          </p>

          {/* Headline */}
          <h2
            className="font-surgena"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 600,
              color: '#15141F',
              lineHeight: 1.1,
              margin: '0 0 24px',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            Let&apos;s create something<br />
            purr&#8209;fect together.
          </h2>

          {/* Description */}
          <p
            className="font-halfre"
            style={{
              fontSize: 15,
              color: '#737279',
              lineHeight: 1.75,
              maxWidth: 460,
              margin: '0 auto 40px',
            }}
          >
            Open to full-time roles, freelance projects, and collaborations.
            Experienced in WordPress web design and development, building clean,
            responsive, and user-friendly websites. Let&apos;s work together.
          </p>

          {/* CTA Button */}
           <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigateTo("/contact");}}
            className="font-halfre"
            style={{
              display: 'inline-block',
              background: '#FFD341',
              color: '#15141F',
              padding: '14px 36px',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: 0.3,
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(255,211,65,0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,211,65,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,211,65,0.4)'
            }}
          >
            Let&apos;s connect →
          </a>
        </div>
      </section>
    </>
  )
}