import { useState, useEffect, useRef } from "react";
import ContactSection2 from "./contact-section2";
import { Link } from "react-router-dom";
import SEO from '../widgets/SEO.jsx'
import { CatIllustration, CardBorderSVG, Snowflake, ArrowBtnSVG } from "../theme/icons";
import { navLinks, projectsData } from "../theme/data";
import '../theme/index.css';



/*  ─── Scroll-reveal hook ─────────────────────────── */
function useScrollReveal(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

/* 👻 ─── Project Card ───────────────────────────────── */
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className="relative w-full mx-auto"
      style={{
        maxWidth: "520px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
      }}
    >
      <CardBorderSVG />

      <div
        className="relative flex flex-col font-halfre"
        style={{ padding: "8% 8% 8% 8%" }}
      >
        {/* 👻 ── IMAGE ── */}
        <div className="relative w-full border-[4.5px] border-[#E7E0CA] bg-[#F8F4F0]">
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <span className="absolute top-3 right-3 bg-[#FFD341] text-[#3A2E00] font-bold text-[12px] px-6 py-2.5 rounded-[15px] whitespace-nowrap">
          {project.category}
        </span>
        </div>

        {/* 👻 ── CARD CONTENTS ── */}
        <div className="flex flex-col" style={{ paddingTop: "24px", gap: "16px" }}>
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#15141F] leading-snug">
            {project.title}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-[#15141F]/60 font-semibold tracking-wide" style={{ marginTop: "-6px" }}>
            {project.tags}
          </p>
          <div className="flex items-end justify-between gap-4">
            <p className="text-[13px] md:text-[14px] text-[#15141F]/70 leading-relaxed" style={{ maxWidth: "75%" }}>
              {project.description}
            </p>
            {project.path ? (
              <Link
                to={project.path}
                className="focus:outline-none transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 shrink-0 cursor-pointer block"
                aria-label={`View ${project.title}`}
              >
                <ArrowBtnSVG />
              </Link>
            ) : (
              <button
                className="focus:outline-none transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 shrink-0 cursor-pointer"
                aria-label={`View ${project.title}`}
              >
                <ArrowBtnSVG />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 👻 ─── Main Component ─────────────────────────────── */
export default function ProjectsHero() {
const [activeLink, setActiveLink] = useState("All Projects");
const cardsRef = useRef(null);

const filteredProjects = projectsData.filter((project) =>
  activeLink === "All Projects" || activeLink.includes(project.category)
);

  /* Smooth-scroll to cards when a filter is selected (mobile UX) */
  // const handleNavClick = (label) => {
  //   setActiveLink(label);
  //   if (label !== activeLink && cardsRef.current) {
  //     setTimeout(() => {
  //       cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }, 80);
  //   }
  // };

const handleNavClick = (label) => {
setActiveLink(label);
};

  return (
    <>
      <SEO title="Projects" />
      {/* 👻 ─── HERO ─── */}
      <section className="hero-section relative bg-[#FFF] flex flex-col items-center justify-between px-4 sm:px-6 font-surgena">

        {/* Spacer */}
        <div className="h-8 sm:h-16 md:h-[60px] w-full shrink-0" />

        {/* Decorative snowflakes */}
        <Snowflake color="#15141F" size={16} className="deco-snowflake absolute top-6 left-[18%]" />
        <Snowflake color="#6B63D4" size={16} className="deco-snowflake absolute top-[10%] left-4 sm:left-8" />
        <Snowflake color="#FFD341" size={16} className="deco-snowflake absolute top-6 right-4 sm:right-8" />

        {/* Title block */}
        <div className="flex flex-col items-center gap-1 z-10 w-full text-center">
          <span className="hero-subtitle tracking-wide text-[#44220F] font-surgena">
            All Projects
          </span>
          <h1 className="hero-title font-bold text-[#15141F] tracking-tight font-surgena leading-tight">
            Built with Curiosity
          </h1>
        </div>

        {/* Cat illustration */}
        <div className="relative flex flex-col items-center z-10 w-full mt-2">
          <div className="hero-cat-wrap drop-shadow-sm mx-auto translate-x-3">
            <CatIllustration />
          </div>
          {/* <div
            className="rounded-full bg-[#595959] opacity-30 -mt-2 mx-auto"
            style={{ width: "80%", maxWidth: "180px", height: "14px" , alignItems: "center", display: "flex", justifyContent: "center"}}
          /> */}
        </div>

        {/* ── Filter Nav (sticky) ── */}
        <nav className="projects-nav w-screen -mx-4 sm:-mx-6 mt-8 sm:mt-10">
          <div className="nav-scroll flex items-center justify-center gap-5 sm:gap-8 md:gap-10 px-4 sm:px-6 py-3 sm:py-4 w-full">
            {navLinks.map(({ label, short }) => (
  <button
    key={label}
    onClick={() => handleNavClick(label)}
    className={`whitespace-nowrap text-sm md:text-base font-halfre transition-all duration-200 pb-1 cursor-pointer shrink-0 ${
      activeLink === label
        ? "text-[#15141F]  border-b-3 border-[#FFD341]"
        : "text-[#15141F]/50 hover:text-[#15141F]/80 border-[#FFD341]"
    }`}
  >
    <span className="sm:hidden">{short}</span>
    <span className="hidden sm:inline">{label}</span>
  </button>
))}
          </div>
        </nav>
      </section>

      {/* 👻 ─── CARDS GRID ─── */}
      <section
        ref={cardsRef}
        className="bg-[#FFF] px-4 sm:px-6 py-10 sm:py-14 md:py-20 font-surgena scroll-mt-16"
      >
        <div className="cards-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
        <ContactSection2 />
      </section>
    </>
  );
}