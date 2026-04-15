import { useState, useRef, useEffect, useCallback } from "react";
import '../theme/index.css';
import SEO from '../widgets/SEO.jsx'
import { GitHubIcon, LinkedInIcon, FacebookIcon, AsteriskDeco, FlowerDeco } from "../theme/icons.jsx";
import AboutPanel       from "./about-me-sections/about-panel.jsx";
import ExperiencesPanel from "./about-me-sections/experience-panel.jsx";
import EducationPanel   from "./about-me-sections/education-panel.jsx";
import { DEFAULT, experiences, educations } from "./about-me-sections/portfolio-data";

// ─── Constants ────────────────────────────────────────────────────────────────
const SECTIONS   = ["card", "about", "experiences", "education"];
const SECTION_BG = {
  card:        "#FFFFFF",
  about:       "#F1EAE9",
  experiences: "#F1EAE9",
  education:   "#F1EAE9",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PortfolioCard() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 900);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Desktop state ──────────────────────────────────────────────────────────
  const [section,      setSection]      = useState("about");
  const [activeExpIdx, setActiveExpIdx] = useState(null);
  const [activeEduIdx, setActiveEduIdx] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollRef = useRef(null);

  // ── Mobile parallax state ──────────────────────────────────────────────────
  const [currentIdx,    setCurrentIdx]    = useState(0); // starts at "card"
  const [nextIdx,       setNextIdx]       = useState(null);
  const [slideProgress, setSlideProgress] = useState(0);

  const wheelAccum  = useRef(0);
  const touchStartY = useRef(null);
  const animRef     = useRef(null);
  const isAnimating = useRef(false);
  const mobileWrapRef = useRef(null);

  // ── Left panel derived values ──────────────────────────────────────────────
  const selectedExp = activeExpIdx !== null ? experiences[activeExpIdx] : null;
  const selectedEdu = activeEduIdx !== null ? educations[activeEduIdx]  : null;

  const leftImg      = selectedEdu?.img    ?? selectedExp?.img      ?? DEFAULT.img;
  const leftName     = selectedEdu?.school ?? selectedExp?.expTitle ?? DEFAULT.name;
  const leftSubtitle = selectedEdu?.years  ?? selectedExp?.expRole  ?? DEFAULT.subtitle;
  const leftTag1     = selectedEdu?.degree ?? selectedExp?.tag1     ?? DEFAULT.tag1;
  const leftTag2     = selectedEdu ? null  : (selectedExp?.tag2     ?? DEFAULT.tag2);
  const leftHashtags = (selectedEdu || selectedExp) ? null : DEFAULT.hashtags;
  const leftExpDesc  = selectedEdu?.desc   ?? selectedExp?.expDesc  ?? null;

  // ── Desktop scroll ─────────────────────────────────────────────────────────
const handleDesktopScroll = (e) => {
  const scrollTop = e.currentTarget.scrollTop;
  const height    = e.currentTarget.clientHeight;

  if (scrollTop < height * 0.6) {
    setSection("about");
    setActiveExpIdx(null);
    setActiveEduIdx(null);
  } else if (scrollTop < height * 1.5) {
    if (section !== "experiences") {
      setSection("experiences");
      setActiveEduIdx(null);
      setActiveExpIdx(prev => prev !== null ? prev : 0);  // ← keep existing or default to 0
    }
  } else {
    if (section !== "education") {
      setSection("education");
      setActiveExpIdx(null);
      setActiveEduIdx(prev => prev !== null ? prev : 0);  // ← keep existing or default to 0
    }
  }
};

  // ── Mobile: eased slide animation ─────────────────────────────────────────
  const animateSlide = useCallback((targetIdx) => {
    if (isAnimating.current) return;
    if (targetIdx < 0 || targetIdx >= SECTIONS.length) return;
    if (targetIdx === currentIdx) return;

    isAnimating.current = true;
    setNextIdx(targetIdx);

    const DURATION = 500;
    const start    = performance.now();
    const ease     = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const tick = (now) => {
      const raw      = Math.min((now - start) / DURATION, 1);
      const progress = ease(raw);
      setSlideProgress(progress);

      if (raw < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setCurrentIdx(targetIdx);
        setNextIdx(null);
        setSlideProgress(0);
        wheelAccum.current  = 0;
        isAnimating.current = false;
      }
    };
    animRef.current = requestAnimationFrame(tick);
  }, [currentIdx]);

  // ── Mobile: wheel ─────────────────────────────────────────────────────────
  const handleWheel = useCallback((e) => {
    if (!isMobile) return;
    e.preventDefault();
    if (isAnimating.current) return;
    wheelAccum.current += e.deltaY;
    if      (wheelAccum.current >  60) animateSlide(currentIdx + 1);
    else if (wheelAccum.current < -60) animateSlide(currentIdx - 1);
  }, [isMobile, currentIdx, animateSlide]);

  // ── Mobile: touch ─────────────────────────────────────────────────────────
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!isMobile || touchStartY.current === null) return;
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    touchStartY.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) animateSlide(currentIdx + 1);
    else           animateSlide(currentIdx - 1);
  }, [isMobile, currentIdx, animateSlide]);

  // Non-passive wheel listener
  useEffect(() => {
    const el = mobileWrapRef.current;
    if (!el || !isMobile) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isMobile, handleWheel]);

  useEffect(() => () => cancelAnimationFrame(animRef.current), []);

  // ── Slide geometry ─────────────────────────────────────────────────────────
  const isForward    = nextIdx !== null && nextIdx > currentIdx;
  const slideInFrom  = isForward ? 100 : -100;
  const slidePercent = slideInFrom * (1 - slideProgress); // 100→0 or -100→0

  // ── Panel content by section key ──────────────────────────────────────────
  const panelContent = (key) => {
    if (key === "card")        return <MobileProfileCard {...{ leftImg, leftName, leftSubtitle, leftTag1, leftTag2, leftHashtags, leftExpDesc }} />;
    if (key === "about")       return <AboutPanel visible={true} isMobile={true} setSelectedCert={setSelectedCert} />;
    if (key === "experiences") return <ExperiencesPanel visible={true} isMobile={true} activeIdx={activeExpIdx} onSelect={(i) => { setActiveExpIdx(i); setActiveEduIdx(null); }} />;
    return                            <EducationPanel  visible={true} isMobile={true} activeIdx={activeEduIdx}  onSelect={(i) => { setActiveEduIdx(i); setActiveExpIdx(null); }} />;
  };

  const renderPanel = (idx, extraStyle = {}) => {
    const key = SECTIONS[idx];
    return (
      
      <div
        key={key}
        style={{
          position: "absolute",
          inset: 0,
          background: SECTION_BG[key],
          overflowY: "auto",
          borderRadius: 0,
          ...extraStyle,
        }}
      > 
        {panelContent(key)}
      </div>
    );
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <SEO title="About" />
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        .right-scroll { scroll-behavior: smooth; }
        .right-scroll::-webkit-scrollbar { width: 4px; }
        .right-scroll::-webkit-scrollbar-thumb { background: #c4bda8; border-radius: 4px; }

        @keyframes fadeIn  { from { opacity: 0; transform: scale(1.04); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div style={{
        background: "#ffffff",
        height: "100vh",
        display: "flex",
        alignItems: isMobile ? "stretch" : "center",
        justifyContent: "center",
        padding: isMobile ? "0" : "40px 24px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
      }}>
        <div
          className="portfolio-outer"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 0 : 20,
            alignItems: "stretch",
            maxWidth: isMobile ? "100%" : 1200,
            width: "100%",
            height: isMobile ? "100%" : "calc(100vh - 80px)",
          }}
        >

          {/* ══════════ LEFT PANEL — desktop only ══════════ */}
          {!isMobile && (
            <div className="portfolio-left" style={{ position: "relative", flex: "0 0 350px" }}>
              <svg viewBox="0 0 586 900" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} preserveAspectRatio="none">
                <path d="M0 0H586C578.88 349.171 584.905 826.5 586 878C587.095 929.5 217.546 873.772 0 878C8.66129 535.119 8.49425 342.88 0 0Z" fill="#E7E0CA" />
              </svg>

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "26px 22px 26px", paddingTop: section === "about" ? "120px" : "80px", height: "100%", gap: section === "about" ? "12px" : "5px", justifyContent: section === "about" ? "center" : "flex-start",  }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: -10 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#7B4A2D", zIndex: 1 }} />
              </div>
                <div style={{ width: 210, height: 185, background: "#F8F4F0", borderRadius: 10, boxShadow: "0 4px 14px rgba(0,0,0,0.10)", padding: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "100%", height: "100%", borderRadius: 6, overflow: "hidden" }}>
                    <img key={leftImg} src={leftImg} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "fadeIn 0.4s ease" }} />
                  </div>
                </div>
                <div style={{ alignSelf: "flex-end", marginRight: 4, marginTop: 6, color: "#2d2d5e", opacity: 0.7 }}>
                </div>
                
                <div style={{ alignSelf: "center", marginTop: 4, minHeight: "24px" }}>
                  {leftHashtags && <p className="font-halfre" style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#1a1a2e", textAlign: "center", animation: "fadeIn 0.3s ease" }}>{leftHashtags}</p>}
                </div>
                {/* <div style={{ width: "100%", height: 1, background: "#c4bda8", margin: "0px 0px", flexShrink: 0 }} /> */}
                
                <p key={leftName} className="font-surgena" style={{ margin: "0 0 3px", fontSize: 26, fontWeight: 800, color: "#1a1a2e", textAlign: "center", animation: "slideUp 0.35s ease" }}>{leftName}</p>
                <p key={leftSubtitle} style={{ margin: "0 0 8px", fontSize: 12, color: "#555", textAlign: "center", animation: "slideUp 0.35s ease", minHeight: 18 }}>{leftSubtitle}</p>
                {leftExpDesc && <p key={leftExpDesc} style={{ margin: "0 0 10px", fontSize: 11, color: "#444", textAlign: "center", lineHeight: 1.6, padding: "0 8px", animation: "slideUp 0.35s ease" }}>{leftExpDesc}</p>}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 16, marginTop: 4 }}>
                  {[leftTag1, leftTag2].filter(Boolean).map((label) => (
                    <span key={label} style={{ background: "#1a1a2e", color: "#E7E0CA", fontSize: 11, fontWeight: 600, padding: "5px 13px", borderRadius: 20, animation: "slideUp 0.35s ease" }}>{label}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 22, marginTop: "auto", paddingBottom: 4 }}>
                  {[
                    { icon: <GitHubIcon key="gh" />,   href: "https://github.com/marjorie033" },
                    { icon: <LinkedInIcon key="in" />, href: "https://www.linkedin.com/in/marjorie-matilos-a4767435a/" },
                    { icon: <FacebookIcon key="fb" />, href: "https://www.facebook.com/marjorie.matilos/" },
                  ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noreferrer"
                      style={{ color: "#1a1a2e", display: "flex", transition: "color 0.2s, transform 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#E8A820"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#1a1a2e"; e.currentTarget.style.transform = "none"; }}
                    >{item.icon}</a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ══════════ RIGHT / FULL PANEL ══════════ */}
          {isMobile ? (

            /* ── MOBILE: fixed-section parallax reveal, no dots ── */
            <div
              ref={mobileWrapRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ flex: 1, position: "relative", overflow: "hidden" }}
            >
              {/* Current section — stays put */}
              {renderPanel(currentIdx, { zIndex: 1 })}

              {/* Incoming section — slides over */}
              {nextIdx !== null && renderPanel(nextIdx, {
                zIndex: 2,
                transform: `translateY(${slidePercent}%)`,
                willChange: "transform",
                boxShadow: isForward
                  ? "0 -10px 40px rgba(0,0,0,0.15)"
                  : "0 10px 40px rgba(0,0,0,0.15)",
              })}
            </div>

          ) : (

            /* ── DESKTOP: original scroll behaviour ── */
            <div
              className="right-scroll portfolio-right"
              ref={scrollRef}
              onScroll={handleDesktopScroll}
              style={{ flex: 1, background: "#F1EAE9", borderRadius: 16, position: "relative", overflowY: "scroll", minHeight: "100vh" }}
            >
              <div style={{ height: "300%", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, minHeight: "33.333vh" }}>
                  <AboutPanel visible={section === "about"} setSelectedCert={setSelectedCert} />
                </div>
                <div id="experiences" style={{ position: "absolute", top: "33.333%", left: 0, right: 0, minHeight: "100vh" }}>
                <ExperiencesPanel visible={section === "experiences"} activeIdx={activeExpIdx} 
                  onSelect={(idx) => { 
                    setActiveExpIdx(idx ?? 0);      // ← never null, fall back to 0
                    setActiveEduIdx(null); 
                  }} 
                />

                <div id="education" style={{ position: "absolute", top: "66.666%", left: 0, right: 0, minHeight: "33.333vh" }}>
                <EducationPanel visible={section === "education"} activeIdx={activeEduIdx} 
                  onSelect={(idx) => { 
                    setActiveEduIdx(idx ?? 0);      // ← never null, fall back to 0
                    setActiveExpIdx(null); 
                  }} 
/>
                </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Certificate lightbox ── */}
      {selectedCert && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.65)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", backdropFilter: "blur(2px)" }} onClick={() => setSelectedCert(null)}>
          <div style={{ position: "relative", display: "inline-flex", background: "#fff", borderRadius: 12, boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedCert(null)} style={{ cursor: "inherit", position: "absolute", top: 15, right: 20, background: "rgba(255,255,255,0.7)", border: "none", borderRadius: "50%", width: 36, height: 36, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 16, fontWeight: "bold", color: "#1a1a2e", zIndex: 10 }}>✕</button>
            <img src={selectedCert} alt="Expanded" style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", display: "block", borderRadius: 12 }} />
          </div>
        </div>
      )}
    </>
  );
}

// ─── Mobile Profile Card Panel ────────────────────────────────────────────────
// Full-screen version of the left panel, shown as section 0 on mobile.

function MobileProfileCard({ leftImg, leftName, leftSubtitle, leftTag1, leftTag2, leftHashtags, leftExpDesc }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 28px 40px", position: "relative", overflow: "hidden" }}>

      {/* Background blob shape — same SVG as desktop left panel */}
      <svg viewBox="0 0 586 900" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} preserveAspectRatio="xMidYMid slice">
        <path d="M0 0H586C578.88 349.171 584.905 826.5 586 878C587.095 929.5 217.546 873.772 0 878C8.66129 535.119 8.49425 342.88 0 0Z" fill="#D9D1B8" />
      </svg>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

        {/* Decorative row */}
<div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, marginBottom: -10 }}>
  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#7B4A2D" }} />
</div>

        {/* Profile image */}
        <div style={{ width: 200, height: 205, background: "#F8F4F0", borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,0.13)" }}>
          <img src={leftImg} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "fadeIn 0.4s ease" }} />
        </div>

        <div style={{ alignSelf: "flex-end", marginTop: 8, marginRight: 4, color: "#2d2d5e", opacity: 0.7 }}>
        </div>

        {/* Hashtags */}
        {leftHashtags && (
          <p className="font-halfre" style={{ margin: "6px 0 0", fontSize: 13, fontWeight: 700, color: "#1a1a2e", textAlign: "center" }}>
            {leftHashtags}
          </p>
        )}

        <div style={{ width: "80%", height: 1, background: "#b8b0a0", margin: "14px 0" }} />

        {/* Name */}
        <p className="font-surgena" style={{ margin: "0 0 4px", fontSize: 28, fontWeight: 800, color: "#1a1a2e", textAlign: "center" }}>
          {leftName}
        </p>

        {/* Subtitle */}
        <p style={{ margin: "0 0 10px", fontSize: 13, color: "#555", textAlign: "center" }}>
          {leftSubtitle}
        </p>

        {/* Description */}
        {leftExpDesc && (
          <p style={{ margin: "0 0 12px", fontSize: 12, color: "#444", textAlign: "center", lineHeight: 1.6, padding: "0 12px" }}>
            {leftExpDesc}
          </p>
        )}

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
          {[leftTag1, leftTag2].filter(Boolean).map((label) => (
            <span key={label} style={{ background: "#1a1a2e", color: "#E7E0CA", fontSize: 12, fontWeight: 600, padding: "6px 16px", borderRadius: 20 }}>
              {label}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { icon: <GitHubIcon />,   href: "https://github.com/marjorie033" },
            { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/marjorie-matilos-a4767435a/" },
            { icon: <FacebookIcon />, href: "https://www.facebook.com/marjorie.matilos/" },
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noreferrer"
              style={{ color: "#1a1a2e", display: "flex", transition: "color 0.2s, transform 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#E8A820"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#1a1a2e"; e.currentTarget.style.transform = "none"; }}
            >{item.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
}