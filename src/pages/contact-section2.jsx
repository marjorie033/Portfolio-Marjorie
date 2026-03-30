import React from 'react'
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

const Star = ({ color, size, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path
      d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z"
      fill={color}
    />
  </svg>
)



export default function ContactSection2() {
  const { navigateTo } = useTransition();
  return (
    <>
      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          position: 'relative',
          overflow: 'hidden',
          // Height driven by the SVG's natural aspect ratio (1024/1440 ≈ 71%)
          // paddingTop trick keeps the white-blob area proportional on all screens
          minHeight: 'clamp(420px, 56vw, 720px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

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
      
      {/* ── FOOTER ───────────────────────────────────────────────── */}
      {/* <footer id="footer"
      style={{
        background: '#15141F',
        padding: '18px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p
          className="font-halfre"
          style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: 13,
            margin: 0,
          }}
        >
          © 2026 Marjorie P. Matilos. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: 10 }}>
          {socials.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#FFD341'
                e.currentTarget.style.color = '#15141F'
                e.currentTarget.style.borderColor = '#FFD341'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </footer> */}
    </>
  )
}