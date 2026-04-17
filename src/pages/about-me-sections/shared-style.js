// ─── Shared Styles ───────────────────────────────────────────────────────────

export const headingStyle = {
  margin: 0,
  fontSize: 30,
  fontWeight: 900,
  color: "#1a1a2e",
  letterSpacing: "2px",
  textTransform: "uppercase",
  paddingTop: "140px",
};

export const btnStyle = {
  background: "#1a1a2e",
  color: "#F1EAE9",
  border: "none",
  borderRadius: 24,
  padding: "10px 40px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  letterSpacing: "0.3px",
  transition: "background 0.2s, transform 0.15s",
};

export const panelStyle = (visible, mobile = false) => ({
  ...(mobile ? {
    position: "relative",
    padding: "32px 20px 36px",
    display: "flex",
    flexDirection: "column",
    opacity: 1,
    pointerEvents: "auto",
  } : {
    position: "relative",      // Changed from "absolute"
    minHeight: "100vh",        // Ensures it takes up at least one full screen height
    padding: "28px 28px 60px", // Increased bottom padding slightly for breathing room
    display: "flex",
    flexDirection: "column",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.4s ease, transform 0.4s ease",
    pointerEvents: visible ? "auto" : "none",
  }),
});