import { useState, useRef } from "react";
import { WavyUnderline } from "../../theme/icons";
import { headingStyle, btnStyle, panelStyle } from "./shared-style.js";

import devfest from "src/assets/images/devfest.png";
import ferret from "src/assets/images/ferret-coc.png";
import hosting from "src/assets/images/website-hosting.png";
import convention from "src/assets/images/ICpEP-Regional-Convention.jpg";
import matilos from "src/assets/images/MATILOS.png";
import coc from "src/assets/images/coc.jpg";

const PAGE_SIZE = 3;

export default function AboutPanel({ visible, isMobile = false, setSelectedCert }) {
  const certPaths = [
    {devfest},
    {ferret},
    {hosting},
    {convention},
    {matilos},
    {coc}
  ];

  // const [visibleCount, setVisibleCount] = useState(0);
  const certsRef = useRef(null);

const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
const hasMore = visibleCount < certPaths.length;
const isAllShown = !hasMore;

const handleToggle = () => {
  if (isAllShown) {
    setVisibleCount(PAGE_SIZE);
    // Scroll after the DOM collapses
    setTimeout(() => {
      certsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  } else {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, certPaths.length));
  }
};

const wrapStyle = isMobile
  ? { display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100%", padding: "20px 24px 32px" }
  : { ...panelStyle(visible), paddingTop: 0 };

  const resolvedHeadingStyle = isMobile
    ? { ...headingStyle, paddingTop: 0 }
    : headingStyle;

  return (
    <div className="section-panel" style={wrapStyle}>

      <style>{`
        @keyframes certFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Heading ── */}
      <div style={{ marginBottom: 4 }}>
        <h2 className="font-oslla" style={resolvedHeadingStyle}>About Me</h2>
        <WavyUnderline />
      </div>

      {/* ── Body text ── */}
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

      {/* ── Certificates ── */}
      <h3 ref={certsRef} style={{ margin: "0 0 14px", fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>
        Certificates
      </h3>

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
        {certPaths.slice(0, visibleCount).map((path, i) => (
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
              animation: i >= visibleCount - PAGE_SIZE ? "certFadeIn 0.35s ease" : "none",
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

      {/* ── See More / See Less ── */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ ...btnStyle, opacity: certPaths.length <= PAGE_SIZE ? 0.5 : 1 }}
          onClick={certPaths.length > PAGE_SIZE ? handleToggle : undefined}
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
          {isAllShown ? "See Less" : "See More" }
        </button>
      </div>
    </div>
  );
}