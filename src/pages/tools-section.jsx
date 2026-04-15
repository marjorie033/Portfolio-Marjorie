import React, { useRef, useState, useEffect } from 'react';
import '../theme/index.css'
import { EyeLeftSVG, EyeRightSVG, NoseSVG, MouthDesktopSVG, MouthDesktopClosedSVG, MouthMobileSVG } from "../theme/icons";
import { tools, toolCardBase } from "../theme/data";

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return inView
}

function EyeTracker({ children }) {
  const [transform, setTransform] = useState('translate(0px, 0px)');
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Find center of the eye
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle between mouse and eye center
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      
      // Max distance the pupil can move (keep it inside the yellow)
      const distance = 30; 
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      setTransform(`translate(${tx}px, ${ty}px)`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pass the transform style to the SVG child
  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {React.cloneElement(children, { pupilStyle: { transform } })}
    </div>
  );
}


// Figma "Gentle" easing
const GENTLE = 'cubic-bezier(0.37, 0, 0.63, 1)'
const BOUNCE = 'cubic-bezier(0.34, 1.56, 0.64, 1)'


export default function ToolsSection() {

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, 0.1)

  return (
    <section
      ref={sectionRef}
      id="tools"
      style={{
        background: '#15141F',
        padding: '100px 24px 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Section heading ── */}
      <div style={{
        textAlign: 'center',
        marginBottom: 56,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `all 0.7s ${GENTLE}`,
      }}>
        <h2
          className="font-surgena"
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 600,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.5px',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Technologies and Tools I use
        </h2>
      </div>

      {/* ── Cat face container ── */}
      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(32px)',
          transition: `all 0.8s 0.15s ${GENTLE}`,
        }}
      >

        {/* ── Eyes row ── */}
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingLeft: '8%', paddingRight: '8%', marginBottom: -8 }}>
          
          <div style={{ width: '23%', animation: 'float 3.4s ease-in-out infinite' }}>
            <EyeTracker>
              <EyeLeftSVG />
            </EyeTracker>
          </div>

          <div style={{ width: '23%', animation: 'float 3.4s 0.5s ease-in-out infinite' }}>
            <EyeTracker>
              <EyeRightSVG />
            </EyeTracker>
          </div>

        </div>

        {/* ── Nose ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: -12,
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{ width: '22%', maxWidth: 180 }}>
            <NoseSVG />
          </div>
        </div>

        {/* ══ DESKTOP MOUTH ══ */}
{/* ══ DESKTOP MOUTH ══ */}
<div className="mouth-desktop" style={{ position: 'relative' }}>

  {/* Wrapper that always holds the full open-mouth height */}
  <div style={{ position: 'relative', width: '100%' }}>

 {/* Open mouth — slower + bouncy */}
<div style={{
  opacity: inView ? 1 : 0,
  transform: inView ? 'scaleY(1)' : 'scaleY(0.08)',
  transformOrigin: 'top center',
  transition: `transform 1s 0.4s ${GENTLE}, transform 1.0s 0.2s ${BOUNCE}`,
}}>
  <MouthDesktopSVG />
  <div className="tools-grid-desktop">
    {tools.map((t, i) => (
      <ToolCard
        key={t.name}
        tool={t}
        index={i}
        inView={inView}
        padding="6px 4px"
        iconSize="clamp(14px, 2vw, 22px)"
        labelSize="clamp(7px, 0.9vw, 11px)"
      />
    ))}
  </div>
</div>

 {/* Closed mouth — fades out a bit slower too */}
<div style={{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  opacity: inView ? 0 : 1,
  transform: inView ? 'scaleY(0.5)' : 'scaleY(1)',
  transformOrigin: 'top center',
  transition: `transform 8s ${GENTLE}, transform 0.8s ${GENTLE}`,
  pointerEvents: 'none',
}}>8
  <MouthDesktopClosedSVG style={{ width: '100%', display: 'block' }} />
</div>
</div>
  </div>

 {/* ══ MOBILE MOUTH ══ */}
          <div className="mouth-mobile" style={{ position: 'relative' }}>
            <MouthMobileSVG />

            <div className="tools-grid-mobile">
              {tools.map((t, i) => (
                <ToolCard key={t.name} tool={t} index={i} padding="10px 6px" iconSize="clamp(18px, 6vw, 28px)" labelSize="clamp(7px, 1.8vw, 9px)" />
              ))}
            </div>
          </div>
      </div>
      </section>
  )
}


// ── Reusable tool card ────────────────────────────────────────────────────────
function ToolCard({ tool, index, inView, padding, iconSize, labelSize }) {
  return (
    <div
      className="tool-card"
      style={{
        ...toolCardBase,
        padding,
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.7)',
        // Stagger each card after the mouth finishes opening (~0.75s)
        transition: `opacity 0.35s ${0.75 + index * 0.04}s ease, transform 0.35s ${0.75 + index * 0.04}s ease`,
      }}
    >
      <span style={{ fontSize: iconSize, lineHeight: 1 }}>
        {tool.icon}
      </span>
      <span
        className="font-surgena"
        style={{
          fontSize: labelSize,
          fontWeight: 600,
          color: '#15141F',
          textAlign: 'center',
          lineHeight: 1.2,
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {tool.name}
      </span>
    </div>
  )
}