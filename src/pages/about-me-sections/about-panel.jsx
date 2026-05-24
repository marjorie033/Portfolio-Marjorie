import { useState, useRef } from "react";
import { WavyUnderline } from "../../theme/icons";
import { headingStyle, btnStyle, panelStyle } from "./shared-style.js";

import devfest from "../../assets/images/devfest.png";
import ferret from "../../assets/images/ferret-coc.png";
import hosting from "../../assets/images/website-hosting.png";
import convention from "../../assets/images/ICpEP-Regional-Convention.jpg";
import matilos from "../../assets/images/MATILOS.png";
import coc from "../../assets/images/coc.jpg";
import akuni from "../../assets/images/akuni-completion.jpg";
import session1 from "../../assets/images/session1.jpg";
import session2 from "../../assets/images/session2.jpg";
import session3 from "../../assets/images/session3.jpg";
import session4 from "../../assets/images/session4.jpg";
import tek from "../../assets/images/26.jpg";

// ── Config ────────────────────────────────────────────────────────────────────
const PREVIEW_COUNT  = 3;   // certs shown in the About panel preview
const COLS           = 5;   // columns in the full-page grid
const ROWS           = 3;   // rows in the full-page grid
const TOTAL_SLOTS    = COLS * ROWS; // 15 total slots

// ── Plus icon ─────────────────────────────────────────────────────────────────
function PlusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12.5" y="4" width="3" height="20" rx="1.5" fill="#7B5800" />
      <rect x="4" y="12.5" width="20" height="3" rx="1.5" fill="#7B5800" />
    </svg>
  );
}

// ── Back arrow icon ───────────────────────────────────────────────────────────
function BackArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Full Certificates Page ────────────────────────────────────────────────────
function AllCertificatesPage({ certPaths, onBack, setSelectedCert, isMobile }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        minHeight: "100%",
        background: "#F1EAE9",
        padding: isMobile ? "56px 20px 40px" : "72px 40px 56px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: "panelSlideIn 0.4s ease both",
      }}
    >
      {/* ── Inner container to keep heading + grid aligned ── */}
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ── Heading block with proper spacing ── */}
        <div
          style={{
            marginBottom: isMobile ? 28 : 36,
            paddingBottom: 16,
            borderBottom: "1px solid rgba(26, 26, 46, 0.12)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: isMobile ? 24 : 30,
              fontWeight: 800,
              color: "#1a1a2e",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            Certificates
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: isMobile ? 13 : 14,
              color: "#5a5a6e",
              fontWeight: 500,
            }}
          >
            {certPaths.length} {certPaths.length === 1 ? "certificate" : "certificates"} earned
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? `repeat(3, 1fr)`
              : `repeat(${COLS}, 1fr)`,
            gap: isMobile ? 12 : 16,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Filled cert slots */}
          {certPaths.map((path, i) => (
            <div
              key={path}
              onClick={() => setSelectedCert(path)}
              onMouseEnter={() => setHovered(`c${i}`)}
              onMouseLeave={() => setHovered(null)}
              style={{
                overflow: "hidden",
                borderRadius: 14,
                border: "4px solid #E8A820",
                backgroundColor: "#fff",
                aspectRatio: "1 / 1",
                cursor: "inherit",
                transition: "transform 0.2s, opacity 0.2s, box-shadow 0.2s",
                transform: hovered === `c${i}` ? "scale(1.04)" : "scale(1)",
                boxShadow:
                  hovered === `c${i}`
                    ? "0 8px 24px rgba(232,168,32,0.38)"
                    : "0 3px 10px rgba(232,168,32,0.22)",
                animation: `certFadeIn 0.35s ease ${Math.min(i * 0.04, 0.4)}s both`,
              }}
            >
              <img
                src={path}
                alt={`Cert ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}

          {/* Empty placeholder slots */}
          {Array.from({ length: Math.max(0, TOTAL_SLOTS - certPaths.length) }).map((_, i) => (
            <div
              key={`empty-${i}`}
              onMouseEnter={() => setHovered(`e${i}`)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#FFD341",
                borderRadius: 14,
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#7B5800",
                cursor: "inherit",
                transition: "opacity 0.2s, transform 0.2s",
                transform: hovered === `e${i}` ? "scale(1.04)" : "scale(1)",
                opacity: hovered === `e${i}` ? 0.75 : 1,
              }}
            >
              <PlusIcon />
            </div>
          ))}
        </div>

        {/* ── Bottom Back button ── */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <button
            onClick={onBack}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E8A820";
              e.currentTarget.style.color = "#F1EAE9";
              e.currentTarget.style.transform = "translateY(2px)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(232,168,32,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1a1a2e";
              e.currentTarget.style.color = "#F1EAE9";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,26,46,0.18)";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#1a1a2e",
              color: "#F1EAE9",
              border: "none",
              borderRadius: 20,
              padding: "9px 22px 9px 14px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "inherit",
              boxShadow: "0 2px 8px rgba(26,26,46,0.18)",
              transition: "background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s",
            }}
          >
            <BackArrow />
            Back to About
          </button>
        </div>
      </div>

      <style>{`
        @keyframes certFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes panelSlideIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// ── Main AboutPanel ───────────────────────────────────────────────────────────
export default function AboutPanel({ visible, isMobile = false, setSelectedCert, scrollContainer }) {
  const certPaths = [
    devfest,
    hosting,
    convention,
    matilos,
    coc,
    akuni,
    session1,
    session2,
    session3,
    session4,
    tek,
    ferret,
  ];

  const certsRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  // ── If "See More" was clicked, render the full certificates page ──────────
  if (showAll) {
    return (
      <AllCertificatesPage
        certPaths={certPaths}
        onBack={() => {
          setShowAll(false);
          // Scroll back to top after returning
          setTimeout(() => {
            if (isMobile) {
              certsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            } else {
              scrollContainer?.current?.scrollTo({ top: 0, behavior: "smooth" });
            }
          }, 50);
        }}
        setSelectedCert={setSelectedCert}
        isMobile={isMobile}
      />
    );
  }

  // ── Normal About panel ─────────────────────────────────────────────────────
  const wrapStyle = isMobile
    ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100%",
        padding: "20px 24px 32px",
        animation: "panelFadeIn 0.35s ease both",
      }
    : { ...panelStyle(visible), paddingTop: 0, animation: "panelFadeIn 0.35s ease both" };

  const resolvedHeadingStyle = isMobile
    ? { ...headingStyle, paddingTop: 0 }
    : headingStyle;

  // Preview grid: 3 certs in a row of 3 columns
  const previewCerts = certPaths.slice(0, PREVIEW_COUNT);

  return (
    <div className="section-panel" style={wrapStyle}>

      <style>{`
        @keyframes certFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes panelFadeIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ── Heading ── */}
      <div style={{ marginBottom: 4 }}>
        <h2 className="font-oslla" style={resolvedHeadingStyle}>About Me</h2>
        <WavyUnderline />
      </div>

      {/* ── Bio ── */}
      <p className="font-halfre" style={{ margin: "14px 0 12px", fontSize: 13.5, color: "#2a2a2a", lineHeight: 1.7 }}>
        A 4th-year Computer Engineering student set to graduate in May 2026, with a practical approach
        to designing and building digital solutions. I focus on creating user-centered experiences while
        handling both development and design with care and precision.
      </p>
      <p className="font-halfre" style={{ margin: "0 0 28px", fontSize: 13.5, color: "#2a2a2a", lineHeight: 1.7 }}>
        Currently aiming to grow professionally while enjoying the journey. I'm passionate about crafting
        meaningful digital experiences—using modern tools and technologies to make everyday interactions
        smoother, smarter, and more enjoyable.
      </p>

      {/* ── Certificates heading ── */}
      <div ref={certsRef} style={{ marginBottom: 14 }}>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>
          Certificates
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          marginBottom: "22px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {previewCerts.map((path, i) => (
          <div
            key={path}
            onClick={() => setSelectedCert(path)}
            style={{
              cursor: "inherit",
              overflow: "hidden",
              borderRadius: 10,
              border: "4px solid #E8A820",
              boxShadow: "0 3px 10px rgba(232,168,32,0.22)",
              transition: "transform 0.2s",
              backgroundColor: "#fff",
              aspectRatio: "4/3",
              animation: "certFadeIn 0.35s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={path}
              alt={`Cert ${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* ── See More button ── */}
      {certPaths.length > PREVIEW_COUNT && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={btnStyle}
            onClick={() => setShowAll(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E8A820";
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.cursor = "inherit";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1a1a2e";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}