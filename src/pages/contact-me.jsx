import { useState, useEffect, useRef } from "react";
import FloatingStar from '../theme/svgs.jsx'
import SEO from '../widgets/SEO.jsx'
import '../theme/index.css'
import { CatSVGDesktop, CatSVGMobile, CheckIcon, SocialIcon } from "../theme/icons";


const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; 

/* ── Load & init EmailJS once ───────────────────── */
function useEmailJS() {
  const ready = useRef(false);
  useEffect(() => {
    if (window.emailjs) { ready.current = true; return; }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      ready.current = true;
    };
    document.head.appendChild(script);
  }, []);
  return ready;
}


/* ── Social data ────────────────────────────────── */
const socials = [
  { label: "Github", color: "#15141F", href: "https://github.com/marjorie033" },
  { label: "Facebook", color: "#4A6FA5", href: "https://facebook.com//marjorie.matilos/" },
  { label: "LinkedIn", color: "#3B9DD2", href: "https://linkedin.com/in/marjorie-matilos-a4767435a/" },
  { label: "Discord", color: "#4851CE", href: "https://discord.com/users/810735576386895892" },
];

function SocialItem({ label, color, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 18, 
        textDecoration: "none", 
        transition: "transform 0.18s, opacity 0.18s" 
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateX(5px)"; e.currentTarget.style.opacity = "0.75"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.opacity = "1"; }}
    >
      <div style={{ 
        width: 58, 
        height: 58, 
        borderRadius: "50%", 
        background: color, 
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <SocialIcon label={label} />
      </div>
      <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Syne', sans-serif", color, letterSpacing: "0.2px" }}>
        {label}
      </span>
    </a>
  );
}

/* ── Job opportunity options ────────────────────── */
const JOB_OPTIONS = [
  "I want to hire you",
  "Freelance project",
  "Collaboration",
  "Just saying hi!",
  "Other",
];

/* ── Custom select chevron ──────────────────────── */
const SelectChevron = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ pointerEvents: "none" }}>
    <path d="M4 6l4 4 4-4" stroke="#FFD341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
export default function ContactPage() {
  const ejsReady = useEmailJS();

  const EMPTY = { name: "", email: "", job: JOB_OPTIONS[0], message: "" };
  const [form,    setForm]    = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [toast,   setToast]   = useState(false);
  const [touched, setTouched] = useState({});
  const [selectOpen, setSelectOpen] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const fieldError = (name) => {
    if (!touched[name]) return "";
    if (name === "name"    && !form.name.trim())    return "Name is required.";
    if (name === "email"   && !form.email.trim())   return "Email is required.";
    if (name === "email"   && !/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email.";
    if (name === "message" && !form.message.trim()) return "Message cannot be empty.";
    return "";
  };

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  const handleSend = () => {

  console.log("Service:", EMAILJS_SERVICE_ID);
  console.log("Template:", EMAILJS_TEMPLATE_ID);
  console.log("Key:", EMAILJS_PUBLIC_KEY);
    setTouched({ name: true, email: true, message: true });

    if (!form.name.trim())                        { setError("Please enter your name.");    return; }
    if (!form.email.trim())                       { setError("Please enter your email.");   return; }
    if (!/\S+@\S+\.\S+/.test(form.email))        { setError("Enter a valid email.");       return; }
    if (!form.message.trim())                     { setError("Please write a message.");    return; }
    if (!ejsReady.current || !window.emailjs)     { setError("Still loading — try again."); return; }

    setLoading(true);
    setError("");

    window.emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name:    form.name,
        email:   form.email,
        job:     form.job,
        message: form.message,
      })
      .then(() => {
        setForm(EMPTY);
        setTouched({});
        setLoading(false);
        showToast();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Could not send — please try again or email me directly.");
        setLoading(false);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <SEO title="Contact" />

      <div className="cp-scroll" id="cp-scroll">
        
        {/* ══════════ SECTION 1 ══════════ */}
        <section className="cp-section cp-s1">
          <div className="cp-s1-body">
         {/* Decorative stars */}
        <FloatingStar color="#FFD341" size={128} delay={0}   style={{ position: 'absolute', top: 130,  left:  '10%' }} />
        <FloatingStar color="#9089FC" size={96}  delay={0.4} style={{ position: 'absolute', top: 160,  right: '8%'   }} />
        <FloatingStar color="#9089FC" size={80}  delay={0.8} style={{ position: 'absolute', top: 110,  right: '-8%'  }} />
        <FloatingStar color="#15141F" size={72}  delay={1.2} style={{ position: 'absolute', top: 180,   right: '-1%'  }} />

            <div className="cp-content">
              <h1 className="cp-heading">Contact</h1>
              <p className="cp-subtext">Get in touch with me via social media or send me an email.</p>
              <div className="cp-grid">
                {socials.map(s => <SocialItem key={s.label} {...s} />)}
              </div>
            </div>

            {/* Desktop cat */}
            <div className="cp-cat-wrap cp-cat-desktop">
              <CatSVGDesktop />
            </div>
            {/* Mobile cat */}
            <div className="cp-cat-wrap cp-cat-mobile">
              <CatSVGMobile />
            </div>

            {/* <button
              className="cp-scroll-hint"
              onClick={() => document.getElementById("cp-s2").scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll to email form"
            >
              <ChevronDown />
              <span>Email me</span>
            </button> */}
          </div>

          {/* Dark bar — cat's bottom edge lands exactly here */}
          <div className="cp-footer-bar" />
        </section>

        {/* ══════════ SECTION 2 ══════════ */}
        <section className="cp-section cp-s2" id="cp-s2">
          <div className="cp-form-wrap">
            <h2 className="cp-form-heading">Send me an email</h2>

            <div className="cp-form-layout">
              {/* ── Left column ── */}
              <div className="cp-form-left">
                <div>
                  <p className="cp-label">Name</p>
                  <input
                    className={`cp-input${fieldError("name") ? " has-err" : ""}`}
                    name="name" placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                  />
                  <p className="cp-field-err">{fieldError("name")}</p>
                </div>

                <div>
                  <p className="cp-label">Email</p>
                  <input
                    className={`cp-input${fieldError("email") ? " has-err" : ""}`}
                    name="email" type="email" placeholder="your@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                  />
                  <p className="cp-field-err">{fieldError("email")}</p>
                </div>

                <div style={{ marginBottom: 0 }}>
                  <p className="cp-label">Job Opportunity</p>
                  <div className="cp-select-wrap" style={{ position: "relative" }}>
                    <div
                      className="cp-input"
                      onClick={() => setSelectOpen(o => !o)}
                      style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                      <span>{form.job}</span>
                      <SelectChevron />
                    </div>
                    {selectOpen && (
                      <div style={{
                        position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0,
                        background: "#1e1d2b", border: "1.5px solid #3a3a4a",
                        borderRadius: 10, zIndex: 99, overflow: "hidden",
                      }}>
                        {JOB_OPTIONS.map(o => (
                          <div
                            key={o}
                            onClick={() => { setForm(p => ({ ...p, job: o })); setSelectOpen(false); }}
                            style={{
                              padding: "12px 16px", fontSize: 12,
                              cursor: "pointer", fontFamily: "'Halfre', serif",
                              background: form.job === o ? "#FFD341" : "transparent",
                              color: form.job === o ? "#15141F" : "#fff",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={e => { if (form.job !== o) e.currentTarget.style.background = "#FFD34122"; }}
                            onMouseLeave={e => { if (form.job !== o) e.currentTarget.style.background = "transparent"; }}
                          >
                            {o}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                </div>

              {/* ── Right column ── */}
              <div className="cp-form-right">
                <p className="cp-label">Message</p>
                <textarea
                  className={`cp-textarea${fieldError("message") ? " has-err" : ""}`}
                  name="message" placeholder="Write your message here…"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="cp-field-err">{fieldError("message")}</p>
              </div>
            </div>

            {/* ── Bottom row ── */}
            <div className="cp-form-bottom">
              <span className="cp-error">{error}</span>
              <button className="cp-send-btn" onClick={handleSend} disabled={loading}>
                {loading && <span className="cp-spinner" />}
                {loading ? "Sending…" : "Send email →"}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ── Success toast ── */}
      {toast && (
        <div className="cp-toast">
          <CheckIcon />
          <span>Message sent! I'll get back to you soon</span>
        </div>
      )}
    </>
  );
}