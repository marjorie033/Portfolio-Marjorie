import { useState } from "react";


/* ─── Snowflake / Asterisk decorations ──────────── */
const Snowflake = ({ color = "#15141F", size = 18, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
    <path d="M8 0v16M0 8h16M2.34 2.34l11.32 11.32M13.66 2.34L2.34 13.66"
      stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

/* ─── Hand-drawn card border (same SVG as project cards) ── */
const CardBorderSVG = () => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    viewBox="0 0 590 583" fill="none" xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <g filter="url(#f0)">
      <rect x="30.36" y="16.75" width="536" height="536" fill="white" />
      <path d="M31.65 3.14C31.65 62.87 32.29 86.87 32.29 150.39M32.29 150.39C32.29 213.91 32.19 329.68 31.65 407.49C31.11 485.3 30.69 561.03 30.69 561.03C30.69 572.02 29.52 559.06 29.6 553.21C29.71 545.9 30.74 337.93 30.74 319.77C30.74 301.62 31.65 209.2 32.29 150.39Z" stroke="#E7E0CA" strokeWidth="6.28" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M477.16 552.47C564.52 552.47 552.31 552.47 581.02 552.47C580.52 552.75 576.07 553.85 574.24 554.07C571.94 554.35 511.71 554.2 498.86 554.2C454.86 554.2 256.1 553.16 243.09 553.16M477.16 552.47C477.16 552.47 266.47 554.2 232.86 554.2C199.26 554.2 207.21 554.24 136.27 554.2C83.23 554.16 19.81 554.2 15.54 554.2C11.27 554.2 12.85 552.12 12.85 552.12C42.68 553.16 94.6 553.16 162.78 553.16C186.28 553.16 213.76 553.16 243.09 553.16M477.16 552.47C413.3 552.47 322.79 553.16 243.09 553.16" stroke="#E7E0CA" strokeWidth="6.28" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M565.78 286.5C565.78 356.01 567.2 399.74 567.2 445.19C567.2 490.63 566.47 567.62 566.47 567.62C566.47 567.62 564.81 570.87 564.81 564.53C564.81 558.19 565.9 513.12 565.78 448.34C565.66 383.57 565.67 315.69 565.78 286.5ZM565.78 286.5C565.78 253.74 565.02 186.81 565.07 149.56C565.12 107.8 565.07 47.65 565.07 7.33" stroke="#E7E0CA" strokeWidth="6.28" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.08 17.65C54.67 17.65 81.36 17.65 97.09 17.65M97.09 17.65C112.83 17.65 182.69 17.96 212.28 17.96M97.09 17.65C97.09 17.65 131.22 16.7 151.22 16.7C171.23 16.7 212.28 17.96 212.28 17.96M586.25 17.96C554.94 17.96 569.42 17.65 538.32 17.65C520.6 17.65 498.91 18.16 467.83 17.96M295.55 16.7C317.06 16.73 429.51 17.71 467.83 17.96M295.55 16.7C273.3 16.67 241.86 17.96 212.28 17.96M295.55 16.7C295.55 16.7 349.49 16.7 379.71 16.7M467.83 17.96C467.83 17.96 409.92 16.7 379.71 16.7M212.28 17.96C230.41 17.96 272.45 17.96 295.55 17.96C318.65 17.96 361.28 17.12 379.71 16.7" stroke="#E7E0CA" strokeWidth="6.28" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <filter id="f0" x="0" y="0" width="589.39" height="582.06" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-9.42" dy="10.47"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>
);

/* ─── Arrow icon for Live View button ───────────── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── GitHub icon ────────────────────────────────── */
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

/* ─── Project data ────────────────────────── */
const projectData = {
  title: "Know Your Trash",
  subtitle: "Interactive Game Development",
  tags: ["2D Pixelated", "Game Development"],
  description:
    "A sorting game that teaches players to classify waste correctly through fun, fast-paced gameplay. Designed with bright, readable UI and progressive difficulty to keep players engaged while learning proper waste segregation habits.",
  meta: [
    { label: "Date", value: "February 2026" },
    { label: "Type", value: "Game App" },
    { label: "Role", value: "Designer" },
    { label: "Status", value: "Live" },
  ],
  technologies: [
    { name: "Unity", color: "#15141F" },
    { name: "C#", color: "#15141F" },
    { name: "Figma", color: "#15141F" },
    { name: "Aseprite", color: "#15141F" },
  ],
  mainImage: "src/assets/projects/know-your-trash.png",
  thumbnails: [
    "src/assets/projects/know-your-trash.png",
    "src/assets/projects/know-your-trash.png",
    "src/assets/projects/know-your-trash.png",
    "src/assets/projects/know-your-trash.png",
  ],
  github: "#",
  liveUrl: "#",
};

/* ─── Main Component ─────────────────────────────── */
export default function ProjectView1() {
  const p = projectData;
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .pv-root {
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 32px 60px 32px;
          font-family: 'Halfre', serif;
        }

        .pv-layout {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          width: 100%;
          max-width: 1100px;
        }

        /* ── LEFT PANEL ── */
        .pv-left {
          flex: 0 0 440px;
          position: relative;
          max-width: 540px;
        }

        .pv-card-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 6% 9% 8% 9%;
        }

        .pv-deco-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .pv-main-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          border: 4.5px solid #E7E0CA;
          background: #F8F4F0;
          display: block;
        }

        .pv-thumbnails {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 14px;
        }

        .pv-thumb {
          aspect-ratio: 1;
          object-fit: cover;
          border: 3px solid transparent;
          cursor: pointer;
          transition: border-color 0.2s, opacity 0.2s;
          opacity: 0.65;
          background: #F8F4F0;
        }
        .pv-thumb.active,
        .pv-thumb:hover {
          border-color: #FFD341;
          opacity: 1;
        }

        .pv-btn-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .pv-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 0;
          font-size: 13px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          font-family: 'Halfre', serif;
          letter-spacing: 0.3px;
        }
        .pv-btn:hover { opacity: 0.85; transform: translateY(-1px); }

        .pv-btn-gh {
          background: #15141F;
          color: #ffffff;
        }
        .pv-btn-live {
          background: #FFD341;
          color: #15141F;
        }

        /* ── RIGHT PANEL ── */
        .pv-right {
          flex: 1;
          background: #F1EAE9;
          border-radius: 18px;
          padding: 44px 44px 44px 44px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-height: 480px;
        }

        .pv-title {
          font-family: 'Oslla', serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #15141F;
          letter-spacing: -0.5px;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .pv-subtitle {
          font-size: 14px;
          color: #555;
          margin-top: 4px;
          font-weight: 500;
          font-family: 'Halfre', serif;
        }

        .pv-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pv-tag {
          background: #FFD341;
          color: #3A2E00;
          font-size: 13px;
          font-weight: 700;
          padding: 7px 18px;
          border-radius: 999px;
        }

        .pv-desc {
          font-size: 14px;
          color: #333;
          line-height: 1.75;
          max-width: 560px;
          font-family: 'Halfre', serif;
        }

        /* meta grid */
        .pv-meta {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .pv-meta-cell {
          background: #E7E0CA;
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pv-meta-label {
          font-size: 11px;
          color: #7a6e5f;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: 'Halfre', serif;
        }

        .pv-meta-value {
          font-size: 14px;
          font-weight: 700;
          color: #15141F;
        }

        /* technologies */
        .pv-tech-heading {
          font-size: 18px;
          font-weight: 700;
          color: #44220F;
          font-family: 'Halfre', serif;
        }

        .pv-tech-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pv-tech-pill {
          background: #15141F;
          color: #E7E0CA;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 8px;
          letter-spacing: 0.2px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pv-right > * {
          animation: fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        .pv-right > *:nth-child(1) { animation-delay: 0.05s; }
        .pv-right > *:nth-child(2) { animation-delay: 0.10s; }
        .pv-right > *:nth-child(3) { animation-delay: 0.15s; }
        .pv-right > *:nth-child(4) { animation-delay: 0.20s; }
        .pv-right > *:nth-child(5) { animation-delay: 0.25s; }
        .pv-right > *:nth-child(6) { animation-delay: 0.30s; }

        @media (max-width: 768px) {
          .pv-layout { flex-direction: column; }
          .pv-left { flex: none; width: 100%; }
          .pv-meta { grid-template-columns: repeat(2, 1fr); }
          .pv-right { padding: 28px 22px; }
        }
      `}</style>

      <div className="pv-root">
        <div className="pv-layout">

          {/* ══ LEFT — hand-drawn card with images + buttons ══ */}
          <div className="pv-left">
            <CardBorderSVG />

            <div className="pv-card-inner">
              {/* Decoration row */}
              <div className="pv-deco-row">
                <Snowflake color="#FFD341" size={20} />
                <Snowflake color="#6B63D4" size={16} />
                <Snowflake color="#15141F" size={18} />
              </div>

              {/* Main image */}
              <img
                src={p.thumbnails[activeThumb] || p.mainImage}
                alt={p.title}
                className="pv-main-img"
              />

              {/* Thumbnails */}
              <div className="pv-thumbnails">
                {p.thumbnails.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    className={`pv-thumb${activeThumb === i ? " active" : ""}`}
                    onClick={() => setActiveThumb(i)}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="pv-btn-row">
                <a href={p.github} className="pv-btn pv-btn-gh" style={{ textDecoration: "none" }}>
                  <GitHubIcon />
                  Github
                </a>
                <a href={p.liveUrl} className="pv-btn pv-btn-live" style={{ textDecoration: "none" }}>
                  Live View
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* ══ RIGHT — project details panel ══ */}
          <div className="pv-right">

            {/* Title block */}
            <div>
              <h1 className="pv-title">{p.title}</h1>
              <p className="pv-subtitle">{p.subtitle}</p>
            </div>

            {/* Tags */}
            <div className="pv-tags">
              {p.tags.map((t) => (
                <span key={t} className="pv-tag">{t}</span>
              ))}
            </div>

            {/* Description */}
            <p className="pv-desc">{p.description}</p>

            {/* Meta grid */}
            <div className="pv-meta">
              {p.meta.map((m) => (
                <div key={m.label} className="pv-meta-cell">
                  <span className="pv-meta-label">{m.label}</span>
                  <span className="pv-meta-value">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h2 className="pv-tech-heading" style={{ marginBottom: 14 }}>Technologies</h2>
              <div className="pv-tech-pills">
                {p.technologies.map((tech) => (
                  <span key={tech.name} className="pv-tech-pill">{tech.name}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}