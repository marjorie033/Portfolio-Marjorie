import { useState } from "react";
import { WavyUnderline, PlusIcon } from "../../theme/icons";
import { headingStyle, panelStyle } from "./shared-style.js";
import { experiences } from "./portfolio-data.jsx";

// ─── Experiences Panel ────────────────────────────────────────────────────────

const TOTAL_SLOTS = 9;
const mobileHeadingStyle = { ...headingStyle, paddingTop: 0 };

// ── Experience Detail Overlay — MOBILE / TABLET ONLY ─────────────────────────
function ExperienceOverlay({ exp, onClose }) {
  if (!exp) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(21,20,31,0.60)",
          zIndex: 50,
          animation: "fadeInBg 0.25s ease",
        }}
      />

      {/* Bottom sheet */}
      <div
        style={{
          position: "fixed",
          left: 0, right: 0, bottom: 0,
          zIndex: 51,
          borderRadius: "20px 20px 0 0",
          padding: "28px 24px 40px",
          background: "#F1EAE9",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.25)",
          animation: "slideUpSheet 0.35s cubic-bezier(0.34,1.1,0.64,1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16, right: 16,
            width: 32, height: 32,
            borderRadius: "50%",
            background: "#1a1a2e",
            border: "none",
            color: "#F1EAE9",
            fontSize: 16, fontWeight: 700,
            cursor: "inherit",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#E8A820"; e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a2e"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          ✕
        </button>

        {/* Company logo */}
        <div style={{
          width: 72, height: 72,
          borderRadius: 14,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
          marginBottom: 20, flexShrink: 0,
        }}>
          <img src={exp.img} alt={exp.expTitle} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>

        {/* Title */}
        <p className="font-surgena" style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.25 }}>
          {exp.expTitle}
        </p>

        {/* Role / date */}
        <p style={{ margin: "0 0 20px", fontSize: 12, color: "#888", fontWeight: 500, letterSpacing: "0.3px" }}>
          {exp.expRole}
        </p>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "#c4bda8", marginBottom: 20 }} />

        {/* Description */}
        <p className="font-halfre" style={{ margin: "0 0 24px", fontSize: 13.5, color: "#2a2a2a", lineHeight: 1.75, flex: 1 }}>
          {exp.expDesc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[exp.tag1, exp.tag2].filter(Boolean).map((label) => (
            <span key={label} style={{
              background: "#1a1a2e", color: "#E7E0CA",
              fontSize: 11, fontWeight: 600,
              padding: "5px 14px", borderRadius: 20,
            }}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Main Panel ────────────────────────────────────────────────────────────────

export default function ExperiencesPanel({ visible, activeIdx, onSelect, isMobile = false }) {
  const [hovered, setHovered] = useState(null);

  const selectedExp = activeIdx !== null ? experiences[activeIdx] : null;

  // ── MOBILE / TABLET ───────────────────────────────────────────────────────
  // Centered layout, 2-col grid, bottom-sheet overlay on card click.
  if (isMobile) {
    return (
      <>
        <style>{`
          @keyframes fadeInBg     { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUpSheet { from { transform: translateY(100%); } to { transform: translateY(0); } }
        `}</style>

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          minHeight: "100%",
          padding: "32px 20px 36px",
        }}>
          <div style={{ marginBottom: 4 }}>
            <h2 className="font-oslla" style={mobileHeadingStyle}>Experiences</h2>
            <WavyUnderline />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginTop: 18 }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                onClick={() => onSelect(i === activeIdx ? null : i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderRadius: 14, overflow: "hidden",
                  cursor: "inherit", position: "relative",
                  height: 130,
                  outline: i === activeIdx ? "3px solid #FFD341" : "3px solid transparent",
                  outlineOffset: "2px",
                  boxShadow: hovered === i || i === activeIdx ? "0 6px 20px rgba(0,0,0,0.22)" : "0 2px 8px rgba(0,0,0,0.10)",
                  transition: "transform 0.2s, box-shadow 0.2s, outline 0.2s",
                  transform: hovered === i ? "scale(1.04)" : "scale(1)",
                }}
              >
                <img src={exp.img} alt={exp.expTitle} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: i === activeIdx ? "rgba(26,26,46,0.50)" : hovered === i ? "rgba(26,26,46,0.30)" : "rgba(26,26,46,0)",
                  transition: "background 0.25s",
                  display: "flex", alignItems: "flex-end", padding: "10px",
                }}>
                  <p style={{
                    margin: 0, fontSize: 11, fontWeight: 700, color: "#fff",
                    opacity: i === activeIdx || hovered === i ? 1 : 0,
                    transition: "opacity 0.25s", lineHeight: 1.3,
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  }}>
                    {exp.expTitle}<br />
                    <span style={{ fontWeight: 400, fontSize: 10 }}>{exp.expRole}</span>
                  </p>
                </div>
                {i === activeIdx && (
                  <div style={{ position: "absolute", top: 8, right: 8, width: 10, height: 10, borderRadius: "50%", background: "#FFD341", boxShadow: "0 0 0 2px #fff" }} />
                )}
              </div>
            ))}

            {Array.from({ length: Math.max(0, TOTAL_SLOTS - experiences.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                onMouseEnter={() => setHovered(`e${i}`)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "#FFD341", borderRadius: 14, height: 130,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#7B5800", cursor: "inherit",
                  transition: "opacity 0.2s, transform 0.2s",
                  transform: hovered === `e${i}` ? "scale(1.02)" : "scale(1)",
                  opacity: hovered === `e${i}` ? 0.8 : 1,
                }}
              >
                <PlusIcon />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-sheet overlay — mobile/tablet only */}
        <ExperienceOverlay exp={selectedExp} onClose={() => onSelect(null)} />
      </>
    );
  }

  // ── DESKTOP ───────────────────────────────────────────────────────────────
  return (
    <div style={panelStyle(visible)}>
      <div style={{ marginBottom: 4 }}>
        <h2 className="font-oslla" style={headingStyle}>Experiences</h2>
        <WavyUnderline />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 18 }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            onClick={() => onSelect(i === activeIdx ? null : i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderRadius: 14, overflow: "hidden",
              cursor: "inherit", position: "relative",
              height: 160,
              outline: i === activeIdx ? "3px solid #FFD341" : "3px solid transparent",
              outlineOffset: "2px",
              boxShadow: hovered === i || i === activeIdx ? "0 6px 20px rgba(0,0,0,0.22)" : "0 2px 8px rgba(0,0,0,0.10)",
              transition: "transform 0.2s, box-shadow 0.2s, outline 0.2s",
              transform: hovered === i ? "scale(1.04)" : "scale(1)",
            }}
          >
            <img src={exp.img} alt={exp.expTitle} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: i === activeIdx ? "rgba(26,26,46,0.50)" : hovered === i ? "rgba(26,26,46,0.30)" : "rgba(26,26,46,0)",
              transition: "background 0.25s",
              display: "flex", alignItems: "flex-end", padding: "10px",
            }}>
              <p style={{
                margin: 0, fontSize: 11, fontWeight: 700, color: "#fff",
                opacity: i === activeIdx || hovered === i ? 1 : 0,
                transition: "opacity 0.25s", lineHeight: 1.3,
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}>
                {exp.expTitle}<br />
                <span style={{ fontWeight: 400, fontSize: 10 }}>{exp.expRole}</span>
              </p>
            </div>
            {i === activeIdx && (
              <div style={{ position: "absolute", top: 8, right: 8, width: 10, height: 10, borderRadius: "50%", background: "#FFD341", boxShadow: "0 0 0 2px #fff" }} />
            )}
          </div>
        ))}

        {Array.from({ length: Math.max(0, TOTAL_SLOTS - experiences.length) }).map((_, i) => (
          <div
            key={`empty-${i}`}
            onMouseEnter={() => setHovered(`e${i}`)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "#FFD341", borderRadius: 14, height: 160,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#7B5800", cursor: "inherit",
              transition: "opacity 0.2s, transform 0.2s",
              transform: hovered === `e${i}` ? "scale(1.02)" : "scale(1)",
              opacity: hovered === `e${i}` ? 0.8 : 1,
            }}
          >
            <PlusIcon />
          </div>
        ))}
      </div>
    </div>
  );
}