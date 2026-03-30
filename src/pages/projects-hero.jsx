import { useState } from "react";
import ContactSection2 from "./contact-section2";
import { Link } from "react-router-dom";


/* ─── Illustrations & Icons ──────────────────────── */
const CatIllustration = () => (
  <svg width="354" height="527" viewBox="0 0 350 527" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M99.1123 53.6055C111.589 50.3636 124.853 48.6172 138.605 48.6172C154.614 48.6172 169.961 50.9833 184.175 55.3203L275.135 6.12207L269.292 139.284C270.776 145.936 271.555 152.796 271.555 159.809C271.555 221.218 212.031 271 138.605 271C65.1802 271 5.65736 221.218 5.65723 159.809C5.65723 155.635 5.93408 151.514 6.46973 147.46L0 0L99.1123 53.6055Z" fill="#15141F"/>
    <ellipse cx="79.3711" cy="141.297" rx="31.5918" ry="32.3015" fill="#FFD341"/>
    <ellipse cx="197.84" cy="141.297" rx="31.5918" ry="32.3015" fill="#FFD341"/>
    <ellipse cx="78.713" cy="141.297" rx="13.8214" ry="18.6355" fill="#1E1E1E"/>
    <ellipse cx="197.182" cy="141.297" rx="13.8214" ry="18.6355" fill="#1E1E1E"/>
    <ellipse cx="120.177" cy="207.142" rx="18.4285" ry="14.9084" fill="white"/>
    <ellipse cx="157.034" cy="207.142" rx="18.4285" ry="14.9084" fill="white"/>
    <path d="M288.244 289.759C295.665 254.482 335.353 182.494 348.231 215.4C353.896 229.874 344.504 243.102 340.339 258.3C335.39 276.356 324.516 281.466 319.026 299.292C310.659 326.461 329.813 350.724 324.157 378.895C317.23 413.393 271.12 447.105 239.939 453.068C217.188 480.011 181.83 495.54 139.485 496.455C140.631 502.61 141.181 508.415 141.181 513C141.181 531.778 103.496 525.5 81.6807 525.5C59.8658 525.5 70.6806 507.778 70.6807 489C70.6807 487.044 70.8748 485.127 71.2432 483.262C29.899 464.07 4.00004 424.94 4 372C4 295.233 58.4563 233 135.5 233C212.544 233 267.5 295.233 267.5 372C267.5 379.52 266.97 386.761 265.946 393.706C275.743 388.652 284.084 387.515 291.401 372.697C303.141 348.923 282.6 316.588 288.244 289.759Z" fill="#15141F"/>
    <path d="M212.181 513C212.181 531.778 174.496 525.5 152.681 525.5C130.866 525.5 141.681 507.778 141.681 489C141.681 470.222 159.366 455 181.181 455C202.996 455 212.181 494.222 212.181 513Z" fill="#15141F"/>
  </svg>
);

const Snowflake = ({ color, size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8 0v16M0 8h16M2.34 2.34l11.32 11.32M13.66 2.34L2.34 13.66" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const CardBorderSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 590 583"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_d_128_175)">
      <rect x="30.3599" y="16.75" width="536" height="536" fill="white"/>
      <path d="M31.6501 3.14062C31.6501 62.8675 32.2865 86.8703 32.2865 150.389M32.2865 150.389C32.2865 213.908 32.1881 329.679 31.6501 407.488C31.112 485.297 30.6946 561.034 30.6946 561.034C30.6946 572.024 29.5178 559.055 29.6036 553.207C29.7109 545.897 30.7405 337.927 30.7405 319.772C30.7405 301.616 31.6501 209.196 32.2865 150.389Z" stroke="#E7E0CA" strokeWidth="6.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M477.159 552.468C564.515 552.468 552.314 552.468 581.016 552.468C580.523 552.754 576.072 553.848 574.235 554.069C571.94 554.346 511.714 554.195 498.861 554.195C454.861 554.195 256.095 553.162 243.086 553.162M477.159 552.468C477.159 552.468 266.465 554.195 232.862 554.195C199.258 554.195 207.206 554.242 136.265 554.195C83.2278 554.16 19.8077 554.195 15.5399 554.195C11.2722 554.195 12.8469 552.123 12.8469 552.123C42.6782 553.162 94.5957 553.162 162.782 553.162C186.278 553.162 213.761 553.162 243.086 553.162M477.159 552.468C413.298 552.468 322.79 553.162 243.086 553.162" stroke="#E7E0CA" strokeWidth="6.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M565.781 286.5C565.781 356.007 567.198 399.739 567.198 445.185C567.198 490.632 566.474 567.623 566.474 567.623C566.474 567.623 564.808 570.867 564.808 564.527C564.808 558.187 565.898 513.116 565.781 448.341C565.664 383.567 565.669 315.692 565.781 286.5ZM565.781 286.5C565.781 253.735 565.024 186.805 565.069 149.561C565.119 107.797 565.069 47.6549 565.069 7.32812" stroke="#E7E0CA" strokeWidth="6.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.0786 17.6525C54.6679 17.6525 81.3564 17.6525 97.0922 17.6525M97.0922 17.6525C112.828 17.6525 182.694 17.9577 212.278 17.9577M97.0922 17.6525C97.0922 17.6525 131.216 16.7024 151.223 16.7024C171.23 16.7024 212.278 17.9577 212.278 17.9577M586.25 17.9577C554.942 17.9577 569.418 17.6525 538.321 17.6525C520.595 17.6525 498.911 18.1611 467.825 17.9577M295.548 16.7024C317.062 16.7318 429.508 17.7069 467.825 17.9577M295.548 16.7024C273.299 16.672 241.861 17.9577 212.278 17.9577M295.548 16.7024C295.548 16.7024 349.493 16.7024 379.705 16.7024M467.825 17.9577C467.825 17.9577 409.918 16.7024 379.705 16.7024M212.278 17.9577C230.41 17.9577 272.45 17.9577 295.548 17.9577C318.647 17.9577 361.277 17.1209 379.705 16.7024" stroke="#E7E0CA" strokeWidth="6.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <filter id="filter0_d_128_175" x="0" y="0" width="589.391" height="582.063" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-9.42188" dy="10.4688"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_128_175"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_128_175" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const ArrowBtnSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
    <g filter="url(#arrowFilter)">
      <rect width="38" height="38" fill="#66541A"/>
      <path d="M25.3751 12.3104L26.0486 23.6049M25.3751 12.3104L14.0807 12.984M25.3751 12.3104L12.984 26.2731" stroke="#FDFDFD" strokeWidth="2.40017" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <filter id="arrowFilter" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="4" dy="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.560784 0 0 0 0 0.529412 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_128_175"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_128_175" result="shape"/>
      </filter>
    </defs>
  </svg>
);

/* ─── Data ───────────────────────────────────────── */
const navLinks = ["All Projects", "Web Projects", "Game Projects", "Mobile Projects"];

const projectsData = [
  {
    title: "Know Your Trash",
    category: "Game",
    tags: "UI design - User research - Unity Engine",
    image: "src/assets/projects/know-your-trash.png",
    description: "A sorting game that teaches players to classify waste correctly through fun, fast-paced gameplay.",
    path: "/project/know-your-trash"
  },
  {
    title: "How to Swim Your Fish",
    category: "Game",
    tags: "UI design - User research - Godot Engine",
    image: "src\\assets\\projects\\how-swim-your-fish.png",
    description: "A quirky puzzle platformer where you guide a fish through obstacle-filled waters to safety.",
  },
  {
    title: "Curious Music",
    category: "Web",
    tags: "Web Design - Layout - HTML/CSS",
    image: "src/assets/projects/curious-music.png",
    description: "A music discovery website with an editorial layout designed to surface hidden gems and new sounds.",
  },
  {
    title: "Whaloo",
    category: "Mobile",
    tags: "Mobile Dev - UI/UX - Flutter",
    image: "src/assets/projects/whaloo.png",
    description: "A mobile app that helps users track and manage their daily hydration habits with gentle nudges.",
  },
];

/* ─── Project Card ───────────────────────────────── */
function ProjectCard({ project, index }) {
  return (
    /*
      Key insight: drop the fixed aspect-ratio on the OUTER wrapper.
      Let content dictate height naturally. The SVG (position:absolute,
      inset-0, preserveAspectRatio="none") will stretch to fill whatever
      height the content produces — so the hand-drawn border always fits.
    */
    <div
      className="relative w-full max-w-[520px] md:w-[calc(50%-1.5rem)] animate-fade-in-up mx-auto"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Decorative SVG border — stretches to match content height */}
      <CardBorderSVG />

      {/*
        Content wrapper sits on top of the SVG.
        Padding mirrors the white rect inset inside the SVG viewBox:
          left/right: ~6.5% of 590  ≈ 38px equivalent
          top:        ~4%   of 583  ≈ 23px equivalent
          bottom:     ~6.5% of 583  ≈ 38px equivalent
        Using slightly generous values so content never clips the border strokes.
      */}
      <div
        className="relative flex flex-col font-surgena"
        style={{ padding: "5% 7% 8% 7%" }}
      >

        {/* ── IMAGE ── */}
        <div className="relative w-full overflow-hidden border-[4.5px] border-[#E7E0CA] bg-[#F8F4F0]">
          <div className="aspect-[16/10] w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Category pill */}
          <span className="absolute top-4 right-4 bg-[#FFD341] text-[#3A2E00] font-bold text-xs px-4 py-1.5 rounded-[15px]">
            {project.category}
          </span>
        </div>

        {/* ── CARD CONTENTS ── */}
        
          

          {/* ── CARD CONTENTS ── */}
        <div className="flex flex-col" style={{ paddingTop: "28px", gap: "20px" }}>

          {/* Title */}
          <h3 className="text-[22px] md:text-[24px] font-bold text-[#15141F] leading-snug">
          {project.title}
          </h3>

          {/* Tags */}
          <p className="text-[13px] text-[#15141F]/60 font-semibold tracking-wide" style={{ marginTop: "-8px" }}>
          {project.tags}
          </p>

          {/* Brief description + arrow button */}
          <div className="flex items-end justify-between gap-4">
          <p className="text-[13px] md:text-[14px] text-[#15141F]/70 leading-relaxed max-w-[75%]">
          {project.description}
          </p>

        <Link
    to={project.path}
    className="group/btn focus:outline-none transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 shrink-0 cursor-pointer block"
    aria-label={`View ${project.title}`}
  >
    <ArrowBtnSVG />
  </Link>
  </div>

</div>

        </div>
      </div>
    
  );
}

/* ─── Main Component ─────────────────────────────── */
export default function ProjectsHero() {
  const [activeLink, setActiveLink] = useState("All Projects");

  const filteredProjects = projectsData.filter((project) =>
    activeLink === "All Projects" || activeLink.includes(project.category)
  );

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] bg-[#FFF] flex flex-col items-center justify-between px-6 pt-24 font-surgena">
        <div className="h-[160px] w-full shrink-0" />

        <div className="flex flex-col items-center gap-1 z-10 w-full">
          <Snowflake color="#15141F" size={18} className="absolute top-6 left-[22%]" />
          <Snowflake color="#6B63D4" size={18} className="absolute top-[11%] left-8" />
          <Snowflake color="#FFD341" size={18} className="absolute top-6 right-8" />

          <div className="flex flex-col items-center gap-1 z-10 mt-[40px] md:mt-[120px]">
            <span className="text-[20px] tracking-wide text-[#44220F] font-surgena">
              All Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#15141F] tracking-tight font-surgena text-center leading-tight">
              Built with Curiosity
            </h1>
          </div>

          <div className="relative flex flex-col items-center z-10 -mt-4 w-full">
            <div className="w-[240px] md:w-[260px] drop-shadow-sm mx-auto translate-x-4">
              <CatIllustration />
              <div className="w-[200px] h-[20px] rounded-full bg-[#595959] opacity-40 -mt-3 mx-auto" />
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 z-10 mt-12 pb-6 border-b border-transparent">
          {navLinks.map((label) => (
            <button
              key={label}
              onClick={() => setActiveLink(label)}
              className={`text-sm md:text-base font-surgena transition-all duration-200 pb-1 cursor-pointer ${
                activeLink === label
                  ? "text-[#15141F] font-bold border-b-2 border-[#FFD341]"
                  : "text-[#15141F]/50 hover:text-[#15141F]/80"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </section>

      {/* ─── CARDS GRID ─── */}
      <section className="bg-[#FFF] px-6 py-12 md:py-20 font-surgena">
        <div className="w-full mx-auto flex flex-wrap justify-center gap-10 md:gap-x-10 md:gap-y-16">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
        <ContactSection2 />
      </section>
    </>
  );
}