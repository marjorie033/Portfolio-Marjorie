import { useState } from "react";
import SEO from '../../widgets/SEO.jsx'
import '../../theme/index.css';
import { CardBorderSVG, Snowflake, GitHubIcon, ArrowLeft, ArrowRight} from "../../theme/icons.jsx";
import { projectData3 } from "../../theme/data.jsx";
import { useNavigate } from "react-router-dom";



/* ─── Main Component ─────────────────────────────── */
export default function ProjectView3() {
  const p = projectData3;
  const [activeThumb, setActiveThumb] = useState(0);
  const navigate = useNavigate();


  return (
    <section id="project-view-1">
      <SEO title="Anito" />
      <div className="pv-root">

        {/* ── Back to Projects link ── */}
        <div className="pv-back-wrapper">
      <button onClick={() => navigate('/projects')} className="pv-back">
          <ArrowLeft />
          Back to Projects
        </button>
      </div>

        <div className="pv-layout">

          {/* ══ LEFT — hand-drawn card with images + buttons ══ */}
          <div className="pv-left">
            <CardBorderSVG />

            <div className="pv-card-inner">
              {/* Decoration row */}
              {/* <div className="pv-deco-row">
                <Snowflake color="#FFD341" size={20} />
                <Snowflake color="#6B63D4" size={16} />
                <Snowflake color="#15141F" size={18} />
              </div> */}

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
    </section>
  );
}