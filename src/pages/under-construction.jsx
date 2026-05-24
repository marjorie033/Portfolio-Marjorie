import { useState, useEffect } from 'react'

export default function UnderConstructionModal() {
  const [visible, setVisible] = useState(true)
  const [animateOut, setAnimateOut] = useState(false)

  // Lock body scroll while modal is open
  useEffect(() => {
    if (visible) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = original }
    }
  }, [visible])

  // Close on Escape key
  useEffect(() => {
    if (!visible) return
    const handler = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [visible])

  const handleClose = () => {
    setAnimateOut(true)
    setTimeout(() => setVisible(false), 220)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="uc-title"
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(26, 26, 46, 0.55)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: animateOut
          ? 'ucOverlayOut 0.22s ease forwards'
          : 'ucOverlayIn 0.28s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 440,
          background: '#F1EAE9',
          borderRadius: 20,
          padding: '36px 32px 28px',
          boxShadow:
            '0 20px 60px rgba(26,26,46,0.35), 0 0 0 4px #E8A820',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          animation: animateOut
            ? 'ucPanelOut 0.22s ease forwards'
            : 'ucPanelIn 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) both',
          overflow: 'hidden',
        }}
      >
        {/* Decorative top hazard stripe */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background:
              'repeating-linear-gradient(45deg, #FFD341 0 12px, #1a1a2e 12px 24px)',
          }}
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Dismiss notice"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E8A820'
            e.currentTarget.style.color = '#F1EAE9'
            e.currentTarget.style.transform = 'scale(1.08)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#1a1a2e'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            color: '#1a1a2e',
            border: 'none',
            borderRadius: '50%',
            cursor: 'inherit',
            fontSize: 18,
            fontWeight: 700,
            transition: 'background 0.2s, color 0.2s, transform 0.2s',
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Icon */}
        <div
          style={{
            width: 72,
            height: 72,
            margin: '8px auto 18px',
            borderRadius: '50%',
            background: '#FFD341',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 36,
            boxShadow: '0 6px 18px rgba(232, 168, 32, 0.35)',
            border: '4px solid #E8A820',
          }}
        >
          🚧
        </div>

        {/* Heading */}
        <h2
          id="uc-title"
          style={{
            margin: '0 0 10px',
            fontSize: 22,
            fontWeight: 800,
            color: '#1a1a2e',
            letterSpacing: '-0.4px',
          }}
        >
          Under Construction
        </h2>

        {/* Body text */}
        <p
          style={{
            margin: '0 0 24px',
            fontSize: 14,
            lineHeight: 1.6,
            color: '#3a3a4a',
            fontWeight: 500,
          }}
        >
          Welcome! This portfolio is still a work in progress. Some pages and
          features may be incomplete. Thanks for stopping by — feel free to
          look around!
        </p>

        {/* Action button */}
        <button
          onClick={handleClose}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E8A820'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow =
              '0 6px 18px rgba(232,168,32,0.45)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#1a1a2e'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow =
              '0 3px 10px rgba(26,26,46,0.22)'
          }}
          style={{
            background: '#1a1a2e',
            color: '#F1EAE9',
            border: 'none',
            borderRadius: 22,
            padding: '11px 32px',
            fontSize: 13.5,
            fontWeight: 700,
            cursor: 'inherit',
            letterSpacing: '0.3px',
            boxShadow: '0 3px 10px rgba(26,26,46,0.22)',
            transition:
              'background 0.2s, transform 0.2s, box-shadow 0.2s',
          }}
        >
          Got it
        </button>
      </div>

      <style>{`
        @keyframes ucOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ucOverlayOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes ucPanelIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ucPanelOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to   { opacity: 0; transform: scale(0.92) translateY(10px); }
        }
      `}</style>
    </div>
  )
}