import { useState } from "react";
import { WavyUnderline } from "../../theme/icons";
import { headingStyle, panelStyle } from "./shared-style.js";
import { educations } from "./portfolio-data.jsx";

// ─── Education Detail Overlay — MOBILE ONLY ───────────────────────────────────

function EducationOverlay({ edu, onClose }) {
  if (!edu) return null;

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
          left: 0,
          right: 0,
          bottom: 0,
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
            fontSize: 16,
            fontWeight: 700,
            cursor: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#E8A820"; e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a2e"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          ✕
        </button>

        {/* School logo */}
        <div style={{
          width: 72, height: 72,
          borderRadius: 14,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
          marginBottom: 20,
          flexShrink: 0,
        }}>
          <img
            src={edu.img}
            alt={edu.school}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* School name */}
        <p className="font-surgena" style={{
          margin: "0 0 4px",
          fontSize: 18,
          fontWeight: 800,
          color: "#1a1a2e",
          lineHeight: 1.25,
        }}>
          {edu.school}
        </p>

        {/* Years */}
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888", fontWeight: 500, letterSpacing: "0.3px" }}>
          {edu.years}
        </p>

        {/* Degree */}
        <p style={{ margin: "0 0 20px", fontSize: 13, color: "#555", fontWeight: 600 }}>
          {edu.degree}
        </p>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "#c4bda8", marginBottom: 20 }} />

        {/* Description */}
        <p className="font-halfre" style={{
          margin: 0,
          fontSize: 13.5,
          color: "#2a2a2a",
          lineHeight: 1.75,
        }}>
          {edu.desc}
        </p>
      </div>
    </>
  );
}

// ─── Education Panel ──────────────────────────────────────────────────────────

const mobileHeadingStyle = { ...headingStyle, paddingTop: 0 };

export default function EducationPanel({ visible, activeIdx, onSelect, isMobile = false }) {
  const [hovered, setHovered] = useState(null);

  // ── Mobile: 2-column grid + overlay on click ──────────────────────────────
  if (isMobile) {
    const selectedEdu = activeIdx !== null ? educations[activeIdx] : null;

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
          minHeight: "100%",
          padding: "32px 20px 36px",
        }}>
          <div style={{ marginBottom: 4 }}>
            <h2 className="font-oslla" style={mobileHeadingStyle}>Education</h2>
            <WavyUnderline />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px 16px",
            marginTop: 28,
            paddingBottom: 16,
          }}>
            {educations.map((edu, i) => {
              const isActive  = i === activeIdx;
              const isHovered = hovered === i;

              return (
                <div
                  key={i}
                  onClick={() => onSelect(i === activeIdx ? null : i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    cursor: "inherit",
                  }}
                >
                  <span className="font-halfre" style={{
                    fontSize: 15, fontWeight: 800,
                    color: "#1a1a2e", letterSpacing: "0.3px",
                    textAlign: "center",
                  }}>
                    {edu.years}
                  </span>

                  <div style={{
                    width: 100, height: 100,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: isActive ? "3px solid #FFD341" : "3px solid #E7E0CA",
                    boxShadow: isActive || isHovered
                      ? "0 6px 22px rgba(0,0,0,0.22)"
                      : "0 2px 8px rgba(0,0,0,0.10)",
                    transform: isHovered ? "scale(1.06)" : "scale(1)",
                    transition: "transform 0.2s, box-shadow 0.2s, border 0.2s",
                    background: "#fff",
                  }}>
                    <img
                      src={edu.img}
                      alt={edu.school}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <p style={{
                    margin: 0,
                    fontSize: 11, fontWeight: 600,
                    color: "#1a1a2e", textAlign: "center",
                    lineHeight: 1.3, opacity: 0.75,
                  }}>
                    {edu.school}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Overlay — mobile only */}
        <EducationOverlay edu={selectedEdu} onClose={() => onSelect(null)} />
      </>
    );
  }

  // ── Desktop: original timeline layout, no overlay ─────────────────────────
  return (
    <div style={panelStyle(visible, isMobile)}>
      <div style={{ marginBottom: 4 }}>
        <h2 className="font-oslla" style={headingStyle}>Education</h2>
        <WavyUnderline />
      </div>

      <div style={{ position: "relative", marginTop: 36, paddingBottom: 32 }}>

        <div style={{
          position: "absolute",
          left: "50%", top: 0, bottom: 0,
          width: 2,
          background: "#c4bda8",
          transform: "translateX(-50%)",
          zIndex: 0,
        }} />

        {educations.map((edu, i) => {
          const isLeft    = edu.side === "left";
          const isActive  = i === activeIdx;
          const isHovered = hovered === i;

          return (
            <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 44, position: "relative" }}>

              {/* Left half */}
              <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: isLeft ? "flex-end" : "center",
                paddingRight: isLeft ? 42 : 0,
                paddingLeft:  isLeft ? 0  : 42,
              }}>
                {isLeft ? (
                  <div
                    onClick={() => onSelect(i === activeIdx ? null : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width: 96, height: 96,
                      borderRadius: "50%",
                      overflow: "hidden",
                      cursor: "inherit",
                      border: isActive ? "3px solid #FFD341" : "3px solid #E7E0CA",
                      boxShadow: isActive || isHovered ? "0 6px 22px rgba(0,0,0,0.22)" : "0 2px 8px rgba(0,0,0,0.10)",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.2s, box-shadow 0.2s, border 0.2s",
                      background: "#fff", flexShrink: 0,
                    }}
                  >
                    <img src={edu.img} alt={edu.school} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <span className="font-halfre" style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", letterSpacing: "0.5px", paddingLeft: 8 }}>
                    {edu.years}
                  </span>
                )}
              </div>

              {/* Center dot */}
              <div style={{
                position: "absolute",
                left: "50%", transform: "translateX(-50%)",
                width: isActive ? 14 : 10,
                height: isActive ? 14 : 10,
                borderRadius: "50%",
                background: isActive ? "#FFD341" : "#c4bda8",
                border: isActive ? "2px solid #1a1a2e" : "2px solid #fff",
                zIndex: 2,
                transition: "all 0.25s ease",
                boxShadow: isActive ? "0 0 0 3px rgba(255,211,65,0.35)" : "none",
                flexShrink: 0,
              }} />

              {/* Right half */}
              <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft:  isLeft ? 42 : 0,
                paddingRight: isLeft ? 42 : 0,
              }}>
                {!isLeft ? (
                  <div
                    onClick={() => onSelect(i === activeIdx ? null : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width: 96, height: 96,
                      borderRadius: "50%",
                      overflow: "hidden",
                      cursor: "inherit",
                      border: isActive ? "3px solid #FFD341" : "3px solid #E7E0CA",
                      boxShadow: isActive || isHovered ? "0 6px 22px rgba(0,0,0,0.22)" : "0 2px 8px rgba(0,0,0,0.10)",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.2s, box-shadow 0.2s, border 0.2s",
                      background: "#fff", flexShrink: 0,
                    }}
                  >
                    <img src={edu.img} alt={edu.school} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <span className="font-halfre" style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", letterSpacing: "0.5px", paddingRight: 8 }}>
                    {edu.years}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}