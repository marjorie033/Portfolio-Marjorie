/* ─── ContactPage.jsx ───────────────────────────────────────────
   Two full-height sections:
     Section 1 — white bg, social links, cat illustration
     Section 2 — dark bg (#15141F), email form → EmailJS → Gmail
──────────────────────────────────────────────────────────────── */
import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════
   ⚙️  YOUR EMAILJS CREDENTIALS — fill these in
══════════════════════════════════════════════════ */
const EMAILJS_PUBLIC_KEY  = "UEyVvRODWixVpc1Za";   // Account → Public Key
const EMAILJS_SERVICE_ID  = "service_k7vdwno";   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = "template_9s5w0qa";  // Email Templates → Template ID

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

/* ── Decorative snowflake ───────────────────────── */
const Snowflake = ({ color = "#15141F", size = 18, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
    <path d="M8 0v16M0 8h16M2.34 2.34l11.32 11.32M13.66 2.34L2.34 13.66"
      stroke={color} strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

/* ── Cat illustration ───────────────────────────── */
const CatSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="506" height="317" viewBox="0 0 506 317" fill="none"
    style={{ width: "100%", height: "auto", display: "block" }}>
    <path d="M226.388 153.24C226.388 204.182 184.267 228.5 126.001 228.5C67.7349 228.5 20.501 204.182 20.501 153.24C20.501 102.297 67.7349 61 126.001 61C184.267 61 226.388 102.297 226.388 153.24Z" fill="#15141F"/>
    <path d="M502.501 179.5C502.501 234.452 405.695 229.5 315.94 229.5C226.184 229.5 144.001 239.952 144.001 185C144.001 130.048 226.184 34 315.94 34C405.695 34 502.501 124.548 502.501 179.5Z" fill="#15141F"/>
    <path d="M502.501 228.5C508.951 201.535 508.126 154.286 482.001 145C460.438 137.336 448.047 208.231 431.001 223.5C409.729 242.553 373.449 216.574 347.501 228.5C295.001 252.63 308.304 270.559 250.001 260.5C210.486 253.683 201.501 238 181.501 223.5C161.501 209 143.847 204.221 135.501 228.5C119.001 276.5 183.478 304.912 250.001 315C316.524 325.089 323.717 287 391.001 287C431.001 287 492.568 270.025 502.501 228.5Z" fill="#15141F"/>
    <path d="M65.001 0L38.501 108L113.001 72.5L65.001 0Z" fill="#15141F"/>
    <path d="M180.501 21L207.001 129L132.501 93.5L180.501 21Z" fill="#15141F"/>
    <ellipse cx="62.501" cy="141" rx="17" ry="18" fill="#FFD341"/>
    <ellipse cx="59.001" cy="140" rx="9.5" ry="11" fill="#15141F"/>
    <ellipse cx="82.001" cy="173" rx="13.5" ry="9" fill="white"/>
    <ellipse cx="107.001" cy="173" rx="13.5" ry="9" fill="white"/>
    <ellipse cx="137.501" cy="144" rx="17" ry="18" fill="#FFD341"/>
    <ellipse cx="132.001" cy="143" rx="9.5" ry="11" fill="#15141F"/>
    <path d="M59.7979 166.85L0.500487 155" stroke="white" strokeLinecap="round"/>
    <path d="M129.501 167.296L189.088 157" stroke="white" strokeLinecap="round"/>
    <path d="M59.7979 173L0.500487 183.15" stroke="white" strokeLinecap="round"/>
    <path d="M129.501 173L188.798 183.15" stroke="white" strokeLinecap="round"/>
    <path d="M62.5283 180L6.5015 201.913" stroke="white" strokeLinecap="round"/>
    <path d="M129.501 180L185.528 201.913" stroke="white" strokeLinecap="round"/>
  </svg>
);

/* ── Chevron-down scroll hint ───────────────────── */
const ChevronDown = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M5 8l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Checkmark for toast ────────────────────────── */
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#FFD341"/>
    <path d="M5.5 10.5l3 3 6-6" stroke="#15141F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Social Icons Mapping ───────────────────────── */
const SocialIcon = ({ label }) => {
  const icons = {
    Github: (
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    ),
    Facebook: (
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.748V6.237c0-2.017 1.194-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    ),
    LinkedIn: (
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.742v7.225h2.201zm-1.1-8.212c.737 0 1.333-.597 1.333-1.332 0-.737-.596-1.333-1.333-1.333-1.333 0-1.333.596-1.333 1.333 0 .735.596 1.332 1.333 1.332zM14 13.394v-4.144c0-2.222-1.185-3.256-2.768-3.256-1.277 0-1.85.702-2.17 1.199v-.942H6.862c.029.621 0 7.225 0 7.225h2.199V9.55c0-.205.015-.411.075-.558.166-.411.542-.836 1.173-.836.828 0 1.159.63 1.159 1.553v3.685H14z" />
    ),
    Discord: (
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025 13.225 13.225 0 0 0-3.257 1.011.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.026-.07 8.87 8.87 0 0 1-1.248-.595.05.05 0 0 1-.005-.085c.104-.077.208-.156.303-.239a.051.051 0 0 1 .053-.007c2.611 1.193 5.436 1.193 8.012 0a.051.051 0 0 1 .053.007c.095.083.199.162.303.239a.05.05 0 0 1-.006.085 8.053 8.053 0 0 1-1.248.595.05.05 0 0 0-.026.07c.236.466.51.91.818 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
    ),
  };

  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
      {icons[label]}
    </svg>
  );
};

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
        justifyContent: "center" // Centers the SVG
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
  const [toast,   setToast]   = useState(false);   // success toast
  const [touched, setTouched] = useState({});       // track which fields were blurred

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  /* inline field validation */
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
    /* mark all touched so errors show */
    setTouched({ name: true, email: true, message: true });

    if (!form.name.trim())                        { setError("Please enter your name.");    return; }
    if (!form.email.trim())                       { setError("Please enter your email.");   return; }
    if (!/\S+@\S+\.\S+/.test(form.email))        { setError("Enter a valid email.");       return; }
    if (!form.message.trim())                     { setError("Please write a message.");    return; }
    if (!ejsReady.current || !window.emailjs)     { setError("Still loading — try again."); return; }

    setLoading(true);
    setError("");

    /* EmailJS sends the template to marjorie.matilos20@gmail.com.
       Make sure your EmailJS template has "To Email" set to that address,
       and uses {{name}}, {{email}}, {{job}}, {{message}} as variables. */
    window.emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name:    form.name,
        email:   form.email,       // reply-to field in template
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

  /* allow Enter (without Shift) to submit from any field */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-scroll {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .cp-scroll::-webkit-scrollbar { display: none; }

        .cp-section {
          scroll-snap-align: start;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* ═══ SECTION 1 ═══ */
        .cp-s1 { background: #ffffff; display: flex; flex-direction: column; }
        .cp-s1-body {
          flex: 1;
          display: flex;
          align-items: flex-end;
          padding: 60px 64px 0 64px;
          position: relative;
          overflow: hidden;
        }
        .cp-content { flex: 0 0 auto; padding-bottom: 60px; z-index: 2; position: relative; }
        .cp-heading {
          font-family: 'Surgena', sans-serif;
          font-size: clamp(52px, 7vw, 80px);
          font-weight: 800;
          color: #15141F;
          line-height: 1;
          margin-bottom: 14px;
        }
        .cp-subtext {
          font-size: 20px;
          font-family: 'Halfre', sans-serif;
          color: #666;
          line-height: 1.6;
          margin-bottom: 44px;
        }
        .cp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 48px; }
        .cp-cat-wrap {
          position: absolute; right: 40px; bottom: 0;
          width: clamp(260px, 40vw, 440px); z-index: 1;
        }
        .cp-scroll-hint {
          position: absolute; bottom: 56px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          color: #15141F; opacity: 0.4; cursor: inherit;
          border: none; background: none;
          font-size: 11px; font-family: inherit;
          letter-spacing: 1px; text-transform: uppercase;
          transition: opacity 0.2s; z-index: 3;
          animation: bounce 1.8s ease-in-out infinite;
        }
        .cp-scroll-hint:hover { opacity: 0.7; }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(5px); }
        }
        .cp-footer-bar { height: 44px; background: #15141F; flex-shrink: 0; }

        /* ═══ SECTION 2 ═══ */
        .cp-s2 {
          background: #15141F;
          display: flex; align-items: center; justify-content: center;
          padding: 48px 64px;
        }
        .cp-form-wrap { width: 100%; max-width: 680px; }
        .cp-form-heading {
          font-family: 'Surgena', sans-serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 800; color: #ffffff; margin-bottom: 36px;
        }
        .cp-form-layout {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px 28px; align-items: start;
        }
        .cp-form-left  { display: flex; flex-direction: column; gap: 16px; }
        .cp-form-right { display: flex; flex-direction: column; }
        .cp-label {
          font-size: 12px; font-family: 'Halfre', sans-serif;
          font-weight: 600; color: #aaa;
          letter-spacing: 0.5px; margin-bottom: 6px; text-transform: uppercase;
        }
        .cp-field-err { font-size: 11px; color: #ff6b6b; margin-top: 5px; min-height: 15px; }

        /* inputs */
        .cp-input, .cp-select, .cp-textarea {
          width: 100%; background: transparent;
          border: 1.5px solid #3a3a4a; border-radius: 10px;
          padding: 13px 16px; font-size: 14px; color: #ffffff;
          font-family: inherit; outline: none; transition: border-color 0.2s;
        }
        .cp-input::placeholder, .cp-textarea::placeholder { color: #555; }
        .cp-input:focus, .cp-select:focus, .cp-textarea:focus { border-color: #FFD341; }
        .cp-input.has-err, .cp-select.has-err, .cp-textarea.has-err { border-color: #ff6b6b; }

        .cp-select-wrap { position: relative; }
        .cp-select {
          appearance: none; -webkit-appearance: none;
          cursor: pointer; padding-right: 40px;
        }
        .cp-select option { background: #15141F; color: #fff; }
        .cp-select-icon { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; }

        .cp-textarea { resize: none; height: 172px; }

        .cp-form-bottom {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 18px; gap: 12px;
        }
        .cp-error { font-size: 13px; color: #ff6b6b; flex: 1; }

        /* send button */
        .cp-send-btn {
          background: #FFD341; color: #15141F; border: none;
          border-radius: 8px; padding: 13px 28px;
          font-size: 14px; font-weight: 700; font-family: inherit;
          cursor: pointer; letter-spacing: 0.3px;
          transition: opacity 0.2s, transform 0.15s;
          white-space: nowrap; flex-shrink: 0;
          display: flex; align-items: center; gap: 8px;
        }
        .cp-send-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
        .cp-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* spinner */
        .cp-spinner {
          width: 14px; height: 14px;
          border: 2px solid #15141F40;
          border-top-color: #15141F;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── success toast ── */
        .cp-toast {
          position: fixed; bottom: 32px; left: 50%;
          transform: translateX(-50%) translateY(0);
          background: #1e1d2b; color: #fff;
          border: 1px solid #FFD341;
          border-radius: 12px; padding: 14px 24px;
          display: flex; align-items: center; gap: 12px;
          font-size: 14px; font-weight: 500;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          z-index: 9999;
          animation: toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .cp-toast.hide { animation: toastOut 0.3s ease forwards; }
        @keyframes toastIn  { from { opacity:0; transform: translateX(-50%) translateY(20px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }
        @keyframes toastOut { from { opacity:1; } to { opacity:0; transform: translateX(-50%) translateY(10px); } }

        @media (max-width: 640px) {
          .cp-s1-body   { padding: 40px 28px 0; }
          .cp-cat-wrap  { width: 75%; right: -20px; }
          .cp-grid      { gap: 18px 28px; }
          .cp-s2        { padding: 40px 24px; }
          .cp-form-layout { grid-template-columns: 1fr; }
          .cp-textarea  { height: 120px; }
        }
      `}</style>

      <div className="cp-scroll" id="cp-scroll">

        {/* ══════════ SECTION 1 ══════════ */}
        <section className="cp-section cp-s1">
          <div className="cp-s1-body">
            <Snowflake color="#15141F" size={20} style={{ position: "absolute", top: 28, left: "21%" }} />
            <Snowflake color="#6B63D4" size={18} style={{ position: "absolute", top: 68, left: 36 }} />
            <Snowflake color="#FFD341" size={16} style={{ position: "absolute", top: 48, right: 88 }} />

            <div className="cp-content">
              <h1 className="cp-heading">Contact</h1>
              <p className="cp-subtext">Get in touch with me via social media or send me an email.</p>
              <div className="cp-grid">
                {socials.map(s => <SocialItem key={s.label} {...s} />)}
              </div>
            </div>

            <div className="cp-cat-wrap"><CatSVG /></div>

            <button
              className="cp-scroll-hint"
              onClick={() => document.getElementById("cp-s2").scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll to email form"
            >
              <ChevronDown />
              <span>Email me</span>
            </button>
          </div>
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

                <div>
                  <p className="cp-label">Job Opportunity</p>
                  <div className="cp-select-wrap">
                    <select className="cp-select" name="job" value={form.job} onChange={handleChange}>
                      {JOB_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <span className="cp-select-icon"><SelectChevron /></span>
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