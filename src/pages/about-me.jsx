import { useState, useRef } from "react";

/* ─── Icons ─────────────────────────────────────── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const AsteriskDeco = ({ size = 22 }) => (
  <svg viewBox="0 0 30 30" width={size} height={size} fill="currentColor">
    <path d="M13.5 0h3v10.5l7.42-4.28 1.5 2.6-7.42 4.28 7.42 4.28-1.5 2.6L16.5 15.5V26h-3V15.5l-7.42 4.28-1.5-2.6 7.42-4.28-7.42-4.28 1.5-2.6L13.5 10.5V0z" />
  </svg>
);
const FlowerDeco = ({ size = 18 }) => (
  <svg viewBox="0 0 30 30" width={size} height={size} fill="currentColor">
    <circle cx="15" cy="7" r="5" />
    <circle cx="15" cy="23" r="5" />
    <circle cx="7" cy="15" r="5" />
    <circle cx="23" cy="15" r="5" />
    <circle cx="15" cy="15" r="4" fill="#E7E0CA" />
  </svg>
);
const WavyUnderline = () => (
  <svg width="148" height="14" viewBox="0 0 138 14" fill="none">
    <path d="M2 9C14 3 24 13 36 7S58 3 70 7 92 13 104 7 120 3 136 7" stroke="#FFD341" strokeWidth="5.5" strokeLinecap="round" fill="none" />
  </svg>
);
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

/* ─── Data ───────────────────────────────────────── */

const DEFAULT = {
  img: "src/assets/me.jpg",
  name: "Marjorie P. Matilos",
  subtitle: "4th Year Computer Engineering Student",
  tag1: "Web Dev/Designer",
  tag2: "Game Dev/Designer",
  hashtags: "#Computer Engineer | #Web Designer/Dev",
  expTitle: null,
  expRole: null,
  expDesc: null,
};

const experiences = [
  {
    img: "src\\assets\\experience\\ferret-logo.png",
    expTitle: "Ferre9 Creative Solution Intern",
    expRole: "May 30 - July 21, 2025",
    expDesc:
      "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere. Sed enim odio blandit risus aliquet.",
    tag1: "Web Dev/Designer Intern",
    tag2: "QA Intern",
  },
  {
    img: "src\\assets\\experience\\ferret-logo.png",
    expTitle: "Ferre9 Creative Solution",
    expRole: "July 21 - March 2026",
    expDesc:
      "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere. Sed enim odio blandit risus aliquet.",
    tag1: "Junior Web Developer",
    tag2: "Junior Web Designer",
  },
];

// ─── Education data ────────────────────────────────
const educations = [
  {
    img: "src\\assets\\education\\cit-u-logo.png",
    school: "Cebu Institute of Technology - University",
    years: "2020 - 2026",
    degree: "BS Computer Engineering & Senior High School (STEM)",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere. Sed enim odio blandit risus aliquet.",
    side: "left",
  },
  {
    img: "src\\assets\\education\\cbd-logo.png",
    school: "CBD College",
    years: "2018 - 2020",
    degree: "Junior High School",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere.",
    side: "right",
  },
  {
    img: "src\\assets\\education\\uc-logo.jpg",
    school: "University of Cebu — Banilad Campus (M)",
    years: "2016 - 2017",
    degree: "Junior High School",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus.",
    side: "left",
  },
  {
    img: "src\\assets\\education\\bsce-logo.png",
    school: "Basak Community Elementary School",
    years: "2015",
    degree: "Elementary",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus.",
    side: "right",
  },
];

/* ─── Shared styles ──────────────────────────────── */

const headingStyle = {
  margin: 0, fontSize: 30, fontWeight: 900, color: "#1a1a2e",
  letterSpacing: "2px", textTransform: "uppercase", paddingTop: "140px",
};
const btnStyle = {
  background: "#1a1a2e", color: "#F1EAE9", border: "none", borderRadius: 24,
  padding: "10px 40px", fontSize: 14, fontWeight: 700, cursor: "pointer",
  letterSpacing: "0.3px", transition: "background 0.2s, transform 0.15s",
};
const panelStyle = (visible) => ({
  position: "absolute", inset: 0,
  padding: "28px 28px 32px",
  display: "flex", flexDirection: "column",
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(20px)",
  transition: "opacity 0.4s ease, transform 0.4s ease",
  pointerEvents: visible ? "auto" : "none",
  // overflowY removed to prevent double scrollbars
});

/* ─── About Me Panel ─────────────────────────────── */

function AboutPanel({ visible, setSelectedCert }) {
  const certPaths = [
    "src/assets/images/devfest.png",
    "src/assets/images/ferret-coc.png",
    "src/assets/images/website-hosting.png",
  ];

  return (
    <div style={panelStyle(visible)}>
      <div style={{ marginBottom: 4 }}>
        <h2 className="font-oslla" style={headingStyle}>About Me</h2>
        <WavyUnderline />
      </div>

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

      <h3 style={{ margin: "0 0 14px", fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>Certificates</h3>
      <div style={{ display: "flex", gap: 12, marginBottom: 22 }}>
        {certPaths.map((path, i) => (
          <img key={i} src={path} alt={`Cert ${i + 1}`} onClick={() => setSelectedCert(path)}
            style={{ flex: "1 1 0", height: 140, objectFit: "cover", border: "5px solid #E8A820", borderRadius: 10, cursor: "inherit", boxShadow: "0 3px 10px rgba(232,168,32,0.22)", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={btnStyle}
          onMouseEnter={e => { e.currentTarget.style.background = "#E8A820"; e.currentTarget.style.transform = "scale(1.04)" ; e.currentTarget.style.cursor = 'inherit';}}
          onMouseLeave={e => { e.currentTarget.style.background = "#1a1a2e"; e.currentTarget.style.transform = "scale(1)"; }}>
          See More
        </button>
      </div>
    </div>
  );
}

/* ─── Experiences Panel ──────────────────────────── */

function ExperiencesPanel({ visible, activeIdx, onSelect }) {
  const [hovered, setHovered] = useState(null);
  const TOTAL_SLOTS = 9;

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
              borderRadius: 14,
              overflow: "hidden",
              cursor: "inherit",
              position: "relative",
              height: 160,
              outline: i === activeIdx ? "3px solid #FFD341" : "3px solid transparent",
              outlineOffset: "2px",
              boxShadow: hovered === i || i === activeIdx ? "0 6px 20px rgba(0,0,0,0.22)" : "0 2px 8px rgba(0,0,0,0.10)",
              transition: "transform 0.2s, box-shadow 0.2s, outline 0.2s",
              transform: hovered === i ? "scale(1.04)" : "scale(1)",
            }}
          >
            <img
              src={exp.img}
              alt={exp.expTitle}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: i === activeIdx
                ? "rgba(26,26,46,0.50)"
                : hovered === i ? "rgba(26,26,46,0.30)" : "rgba(26,26,46,0)",
              transition: "background 0.25s",
              display: "flex", alignItems: "flex-end",
              padding: "10px",
            }}>
              <p style={{
                margin: 0, fontSize: 11, fontWeight: 700, color: "#fff",
                opacity: i === activeIdx || hovered === i ? 1 : 0,
                transition: "opacity 0.25s",
                lineHeight: 1.3,
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}>
                {exp.expTitle}
                <br />
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
              background: "#FFD341",
              borderRadius: 14,
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7B5800",
              cursor: "inherit",
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

/* ─── Education Panel ────────────────────────────── */

function EducationPanel({ visible, activeIdx, onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    // Changed to use panelStyle so it fades in consistently, and has no nested scrollbar
    <div style={panelStyle(visible)}>
      <div style={{ marginBottom: 4 }}>
        <h2 className="font-oslla" style={{ ...headingStyle }}>Education</h2>
        <WavyUnderline />
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", marginTop: 36, paddingBottom: 32 }}>

        {/* Center vertical line */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 2,
          background: "#c4bda8",
          transform: "translateX(-50%)",
          zIndex: 0,
        }} />

        {educations.map((edu, i) => {
          const isLeft = edu.side === "left";
          const isActive = i === activeIdx;
          const isHovered = hovered === i;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 44,
                position: "relative",
              }}
            >
              {/* Left half */}
              <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: isLeft ? "flex-end" : "center",
                paddingRight: isLeft ? 42 : 0,
                paddingLeft: isLeft ? 0 : 42,
              }}>
                {isLeft ? (
                  // Logo on the left side
                  <div
                    onClick={() => onSelect(i === activeIdx ? null : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      overflow: "hidden",
                      cursor: "inherit",
                      border: isActive ? "3px solid #FFD341" : "3px solid #E7E0CA",
                      boxShadow: isActive || isHovered ? "0 6px 22px rgba(0,0,0,0.22)" : "0 2px 8px rgba(0,0,0,0.10)",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.2s, box-shadow 0.2s, border 0.2s",
                      background: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    <img src={edu.img} alt={edu.school} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  // Year label on the left side when logo is right
                  <span 
                  className="font-halfre"
                  style={{
                    fontSize: 28, fontWeight: 800, color: "#1a1a2e",
                    letterSpacing: "0.5px", paddingLeft: 8,
                  }}>
                    {edu.years}
                  </span>
                )}
              </div>

              {/* Center dot */}
              <div style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
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
                justifyContent: isLeft ? "flex-start" : "flex-start",
                paddingLeft: isLeft ? 42 : 0,
                paddingRight: isLeft ? 42 : 0,
              }}>
                {!isLeft ? (
                  // Logo on the right side
                  <div
                    onClick={() => onSelect(i === activeIdx ? null : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      overflow: "hidden",
                      cursor: "inherit",
                      border: isActive ? "3px solid #FFD341" : "3px solid #E7E0CA",
                      boxShadow: isActive || isHovered ? "0 6px 22px rgba(0,0,0,0.22)" : "0 2px 8px rgba(0,0,0,0.10)",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.2s, box-shadow 0.2s, border 0.2s",
                      background: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    <img src={edu.img} alt={edu.school} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  // Year label on the right side when logo is left
                  <span 
                  className="font-halfre"
                  style={{
                    fontSize: 28, fontWeight: 800, color: "#1a1a2e",
                    letterSpacing: "0.5px", paddingRight: 8,
                  }}>
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

/* ─── Main Component ─────────────────────────────── */
export default function PortfolioCard() {
  const [section, setSection]           = useState("about");
  const [activeExpIdx, setActiveExpIdx] = useState(null);
  const [activeEduIdx, setActiveEduIdx] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollRef = useRef(null);

  const selectedExp = activeExpIdx !== null ? experiences[activeExpIdx] : null;
  const selectedEdu = activeEduIdx !== null ? educations[activeEduIdx] : null;

  // ─── Left panel variables — education > experience > default ───
  const leftImg      = selectedEdu?.img    ?? selectedExp?.img      ?? DEFAULT.img;
  const leftName     = selectedEdu?.school ?? selectedExp?.expTitle ?? DEFAULT.name;
  const leftSubtitle = selectedEdu?.years  ?? selectedExp?.expRole  ?? DEFAULT.subtitle;
  const leftTag1     = selectedEdu?.degree ?? selectedExp?.tag1     ?? DEFAULT.tag1;
  const leftTag2     = selectedEdu ? null  : (selectedExp?.tag2     ?? DEFAULT.tag2);
  const leftHashtags = (selectedEdu || selectedExp) ? null : DEFAULT.hashtags;
  const leftExpDesc  = selectedEdu?.desc   ?? selectedExp?.expDesc  ?? null;

  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    const height    = e.currentTarget.clientHeight;

    if (scrollTop < height * 0.6) {
      setSection("about");
      setActiveExpIdx(null);
      setActiveEduIdx(null);
    } else if (scrollTop < height * 1.5) {
      setSection("experiences");
      setActiveEduIdx(null);
    } else {
      setSection("education");
      setActiveExpIdx(null);
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .right-scroll::-webkit-scrollbar { width: 4px; }
        .right-scroll::-webkit-scrollbar-thumb { background: #c4bda8; border-radius: 4px; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(1.04); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div style={{ background: "#ffffff", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 20, alignItems: "stretch", maxWidth: 1200, width: "100%", height: "calc(100vh - 80px)" }}>

          {/* ══════════ LEFT PANEL ══════════ */}
          <div style={{ position: "relative", flex: "0 0 350px" }}>
            <svg viewBox="0 0 586 900" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} preserveAspectRatio="none">
              <path d="M0 0H586C578.88 349.171 584.905 826.5 586 878C587.095 929.5 217.546 873.772 0 878C8.66129 535.119 8.49425 342.88 0 0Z" fill="#E7E0CA" />
            </svg>

            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "26px 22px 26px", paddingTop: "120px", height: "100%" }}>
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: -10 }}>
                <AsteriskDeco size={22} />
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#7B4A2D", zIndex: 1 }} />
                <FlowerDeco size={20} />
              </div>

              <div style={{ width: 210, height: 215, background: "#F8F4F0", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 14px rgba(0,0,0,0.10)" }}>
                <img
                  key={leftImg}
                  src={leftImg}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover", animation: "fadeIn 0.4s ease" }}
                />
              </div>

              <div style={{ alignSelf: "flex-end", marginRight: 4, marginTop: 6, color: "#2d2d5e", opacity: 0.7 }}>
                <FlowerDeco size={15} />
              </div>

              <div style={{ alignSelf: "center", marginTop: 4, minHeight: "24px" }}>
                {leftHashtags && (
                  <p className="font-halfre" style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#1a1a2e", textAlign: "center", animation: "fadeIn 0.3s ease" }}>
                    {leftHashtags}
                  </p>
                )}
              </div>

              <div style={{ width: "100%", height: 1, background: "#c4bda8", margin: "12px 0" }} />

              <p key={leftName} className="font-surgena" style={{ margin: "0 0 3px", fontSize: 26, fontWeight: 800, color: "#1a1a2e", textAlign: "center", animation: "slideUp 0.35s ease" }}>
                {leftName}
              </p>

              <p key={leftSubtitle} style={{ margin: "0 0 8px", fontSize: 12, color: "#555", textAlign: "center", animation: "slideUp 0.35s ease", minHeight: 18 }}>
                {leftSubtitle}
              </p>

              {leftExpDesc && (
                <p key={leftExpDesc} style={{ margin: "0 0 10px", fontSize: 11, color: "#444", textAlign: "center", lineHeight: 1.6, padding: "0 8px", animation: "slideUp 0.35s ease" }}>
                  {leftExpDesc}
                </p>
              )}

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 16, marginTop: 4 }}>
                {[leftTag1, leftTag2].filter(Boolean).map((label) => (
                  <span key={label} style={{ background: "#1a1a2e", color: "#E7E0CA", fontSize: 11, fontWeight: 600, padding: "5px 13px", borderRadius: 20, transition: "all 0.3s ease", animation: "slideUp 0.35s ease" }}>
                    {label}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 22, marginTop: "auto", paddingBottom: 4 }}>
  {[
    { icon: <GitHubIcon key="gh"/>, href: "https://github.com/marjorie033" },
    { icon: <LinkedInIcon key="in"/>, href: "https://www.linkedin.com/in/marjorie-matilos-a4767435a/" },
    { icon: <FacebookIcon key="fb"/>, href: "https://www.facebook.com/marjorie.matilos/" },
  ].map((item, i) => (
    <a key={i} href={item.href} target="_blank" rel="noreferrer"
      style={{ color: "#1a1a2e", display: "flex", transition: "color 0.2s, transform 0.2s" }}
      onMouseEnter={e => { e.currentTarget.style.color = "#E8A820"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "#1a1a2e"; e.currentTarget.style.transform = "none"; }}>
      {item.icon}
    </a>
  ))}
</div>
            </div>
          </div>

          {/* ══════════ RIGHT PANEL (scrollable) ══════════ */}
          <div
            className="right-scroll"
            ref={scrollRef}
            onScroll={handleScroll}
            style={{ flex: 1, background: "#F1EAE9", borderRadius: 16, position: "relative", overflowY: "scroll" }}
          >
            {/* 300% height = 3 scroll sections */}
            <div style={{ height: "300%", position: "relative" }}>

              {/* About Section */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "33.333%" }}>
                <AboutPanel visible={section === "about"} setSelectedCert={setSelectedCert} />
              </div>

              {/* Experiences Section */}
              <div 
              id="experiences"
              style={{ position: "absolute", top: "33.333%", left: 0, right: 0, height: "33.333%" }}>
                <ExperiencesPanel
                  visible={section === "experiences"}
                  activeIdx={activeExpIdx}
                  onSelect={(idx) => { setActiveExpIdx(idx); setActiveEduIdx(null); }}
                />
              </div>

              {/* Education Section */}
              <div 
              id="education"
              style={{ position: "absolute", top: "66.666%", left: 0, right: 0, height: "33.333%" }}>
                <EducationPanel
                  visible={section === "education"}
                  activeIdx={activeEduIdx}
                  onSelect={(idx) => { setActiveEduIdx(idx); setActiveExpIdx(null); }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Certificate section */}
      {selectedCert && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.65)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", backdropFilter: "blur(2px)" }} onClick={() => setSelectedCert(null)}>
          <div style={{ position: "relative", display: "inline-flex", background: "#fff", borderRadius: 12, boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedCert(null)} style={{ cursor: "inherit", position: "absolute", top: 15, right: 20, background: "rgba(255,255,255,0.7)", border: "none", borderRadius: "50%", width: 36, height: 36, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 22, fontWeight: "bold", color: "#1a1a2e", zIndex: 10 }}>✕</button>
            <img src={selectedCert} alt="Expanded" style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", display: "block", borderRadius: 12 }} />
          </div>
        </div>
      )}
    </>
  );
}