import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import FloatingStar from '../theme/svgs.jsx'
import { useTransition } from '../theme/page-transition.jsx';
import { CatBottomTailSVG, CatBottomTailMobileSVG  } from "../theme/icons";
import '../theme/index.css'

// ── Contact + Footer Section ──────────────────────────────────────────────────

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
        {/* ── SVG background layers — desktop vs mobile ── */}
        <span className="contact-svg-desktop">
          <CatBottomTailSVG />
        </span>
        <span className="contact-svg-mobile">
          <CatBottomTailMobileSVG />
        </span>

        {/* ── Content centered on top of the white blob ── */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '190px 24px 134px',
          maxWidth: 640,
          width: '100%',
        }}>

         {/* Decorative stars */}
        <FloatingStar color="#FFD341" size={128} delay={0}   style={{ position: 'absolute', top: 130,  left:  '10%' }} />
        <FloatingStar color="#9089FC" size={96}  delay={0.4} style={{ position: 'absolute', top: 160,  right: '8%'   }} />
        <FloatingStar color="#9089FC" size={80}  delay={0.8} style={{ position: 'absolute', top: 110,  right: '-8%'  }} />
        <FloatingStar color="#15141F" size={72}  delay={1.2} style={{ position: 'absolute', top: 180,   right: '-1%'  }} />

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