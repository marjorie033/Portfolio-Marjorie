import { useState } from 'react'

export default function UnderConstructionBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '10px 16px',
        background: 'repeating-linear-gradient(45deg, #f5b400, #f5b400 14px, #1a1a1a 14px, #1a1a1a 28px)',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        textShadow: '0 1px 2px rgba(0,0,0,0.6)',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.25)',
      }}
    >
      <span
        style={{
          background: 'rgba(0,0,0,0.75)',
          padding: '6px 14px',
          borderRadius: '6px',
        }}
      >
        🚧 This site is currently under construction — some pages may be incomplete.
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss notice"
        style={{
          background: 'rgba(0,0,0,0.75)',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '6px 10px',
          cursor: 'inherit',
          fontWeight: 700,
        }}
      >
        ✕
      </button>
    </div>
  )
}