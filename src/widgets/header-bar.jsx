import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { useTransition } from '../theme/page-transition.jsx';

const CatLogoSVG = () => (
  <svg width="46" height="48" viewBox="0 0 146 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.5557 30.4453C59.1724 28.6038 66.207 27.6123 73.5 27.6123C81.9883 27.6123 90.1262 28.9559 97.6631 31.4189L145.898 3.47656L142.8 79.1084C143.587 82.8863 144 86.7823 144 90.7646C144 125.643 112.436 153.917 73.5 153.917C34.5639 153.917 3 125.643 3 90.7646C3 88.3943 3.14668 86.0545 3.43066 83.752L0 0L52.5557 30.4453Z" fill="#15141F"/>
    <ellipse cx="42.0891" cy="80.2508" rx="16.7525" ry="18.3459" fill="#FFD341"/>
    <ellipse cx="104.911" cy="80.2508" rx="16.7525" ry="18.3459" fill="#FFD341"/>
    <ellipse cx="41.7401" cy="80.2508" rx="7.32921" ry="10.5842" fill="#1E1E1E"/>
    <ellipse cx="104.562" cy="80.2508" rx="7.32921" ry="10.5842" fill="#1E1E1E"/>
    <ellipse cx="63.7277" cy="117.648" rx="9.77228" ry="8.46735" fill="white"/>
    <ellipse cx="83.2723" cy="117.648" rx="9.77228" ry="8.46735" fill="white"/>
  </svg>
);

const YellowWiggleLong = ({ animKey }) => (
  <svg key={animKey}
    xmlns="http://www.w3.org/2000/svg" 
    width="205" height="15" viewBox="0 0 203 17" fill="none"
    style={{
      position: 'absolute',
      bottom: '-8px',   
      left: '-12px',      
      animation: 'wiggleInLeft 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      pointerEvents: 'none',
    }}>
    <path 
      d="M4 12.5347L12.0244 4.44856C12.4842 3.98531 13.2572 4.07945 13.5924 4.63949L17.5674 11.2826C17.9282 11.8855 18.7819 11.9382 19.214 11.3841L24.3399 4.81172C24.7973 4.22527 25.712 4.32556 26.0315 4.99718L29.0028 11.244C29.3011 11.8711 30.1321 12.0107 30.6189 11.5156L37.4598 4.55834C37.9479 4.06195 38.7812 4.20374 39.0777 4.83361L42.0312 11.1088C42.3434 11.7721 43.2394 11.8852 43.7066 11.3203L49.3636 4.4797C49.7671 3.99178 50.5167 3.99691 50.9135 4.49032L56.5699 11.5244C56.9807 12.0352 57.7635 12.0193 58.1533 11.4923L63.092 4.81411C63.5302 4.22167 64.4368 4.29043 64.7805 4.94216L68.0489 11.1386C68.3912 11.7875 69.2926 11.8591 69.7331 11.2724L74.8094 4.51141C75.1886 4.00637 75.9352 3.97495 76.3555 4.44634L82.7243 11.5895C83.1542 12.0717 83.9217 12.0258 84.2911 11.4958L89.0767 4.62944C89.4581 4.08225 90.2581 4.05468 90.6762 4.57432L96.0776 11.287C96.5412 11.863 97.4479 11.7542 97.762 11.0849L100.573 5.09391C100.899 4.39899 101.855 4.31541 102.296 4.94313L106.894 11.4753C107.271 12.0111 108.053 12.0455 108.476 11.545L114.432 4.49366C114.847 4.00282 115.61 4.02471 115.996 4.53852L121.387 11.7194C121.723 12.1671 122.361 12.2516 122.803 11.9068L129.757 6.47141C130.151 6.16302 130.713 6.19405 131.072 6.54402L136.154 11.5096C136.658 12.0021 137.5 11.8326 137.774 11.1833L140.35 5.08386C140.645 4.38523 141.58 4.25645 142.053 4.8493L147.293 11.4176C147.726 11.9604 148.567 11.9075 148.928 11.3147L153.051 4.55606C153.376 4.02396 154.103 3.91523 154.569 4.32907L163.022 11.8348C163.45 12.2152 164.11 12.1586 164.468 11.7106L170.318 4.37649C170.681 3.92201 171.353 3.87143 171.78 4.26656L179.615 11.526C180.135 12.0081 180.978 11.8102 181.23 11.1468L183.62 4.8396C183.863 4.1992 184.663 3.98676 185.191 4.42243L194.135 11.7966C194.607 12.1853 195.314 12.064 195.628 11.5403L199 5.93284" 
      stroke="#FFD341" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

const YellowWiggle = ({ animKey }) => (
  <svg
    key={animKey}
    width="57" height="17" viewBox="0 0 57 17" fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      bottom: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'wiggleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      pointerEvents: 'none',
    }}
  >
    <path
      d="M4.00024 12.3827L14.6582 4.55241C15.3186 4.0672 16.2502 4.53879 16.2502 5.35829V10.5048C16.2502 11.3054 17.1442 11.7814 17.8084 11.3345L28.0704 4.43096C28.7346 3.98408 29.6285 4.46008 29.6285 5.26068V10.2054C29.6285 11.0603 30.6317 11.521 31.2801 10.9639L39.1044 4.24267C39.607 3.81093 40.3829 3.97846 40.6626 4.57909L43.8098 11.3379C44.0666 11.8894 44.7523 12.0857 45.2621 11.7537L53.0002 6.71343"
      stroke="#FFD341" strokeWidth="8" strokeLinecap="round"
    />
  </svg>
);

// Hamburger icon
const HamburgerIcon = ({ open }) => (
  <div style={{ width: 28, height: 20, position: 'relative', cursor: 'inherit' }}>
    <span style={{
      position: 'absolute', left: 0, width: '100%', height: 2.5,
      backgroundColor: '#FFD341', borderRadius: 2,
      top: open ? '50%' : '0%',
      transform: open ? 'translateY(-50%) rotate(45deg)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    }} />
    <span style={{
      position: 'absolute', left: 0, width: '100%', height: 2.5,
      backgroundColor: '#FFD341', borderRadius: 2,
      top: '50%', transform: 'translateY(-50%)',
      opacity: open ? 0 : 1,
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    }} />
    <span style={{
      position: 'absolute', left: 0, width: '100%', height: 2.5,
      backgroundColor: '#FFD341', borderRadius: 2,
      bottom: open ? '50%' : '0%',
      transform: open ? 'translateY(50%) rotate(-45deg)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    }} />
  </div>
);

export default function Header() {
  const { navigateTo } = useTransition();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const navLinks = [
    { name: 'Home',     path: '/' },
    { name: 'About',    path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Hire Me',  path: '/contact' },
  ];

  // Track mobile breakpoint
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setCompact(false);

    const timeoutId = setTimeout(() => {
      const ids = ['contact', 'projects', 'tools'];
      const targets = ids.map(id => document.getElementById(id)).filter(Boolean);
      if (targets.length === 0) return;

      const visibilityMap = {};
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityMap[entry.target.id] = entry.isIntersecting;
          });
          setCompact(Object.values(visibilityMap).some(v => v === true));
        },
        { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
      );
      targets.forEach(t => observer.observe(t));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger-btn')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigateTo(path);
  };

  return (
    <>
      <style>{`
        @keyframes wiggleIn {
          from { opacity: 0; transform: translateX(-50%) scaleX(0.3); }
          to   { opacity: 1; transform: translateX(-50%) scaleX(1); }
        }
        
        @keyframes wiggleInLeft {
        from { opacity: 0; transform: scaleX(0.3); transform-origin: left; }
        to   { opacity: 1; transform: scaleX(1); transform-origin: left; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes fadeInItem {
        from { opacity: 0; transform: translateX(24px); }
        to   { opacity: 1; transform: translateX(0); }
        }
        .nav-link-item { position: relative; display: flex; align-items: center; }
        .hamburger-btn { background: none; border: none; padding: 8px; cursor: inherit; }
      `}</style>

      <div
        className="nav-wrapper"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, transition, background: 'transparent' }}
      >
        {/* Decorative SVG — desktop only */}
        {!isMobile && (
          <svg
            viewBox="0 0 1440 262" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              display: 'block', position: 'absolute', top: 0, left: 0,
              width: '100%', height: 'auto',
              opacity: compact ? 0 : 1,
              pointerEvents: 'none', transition,
            }}
          >
            <path d="M0 0H1440V80C1440 91.0457 1431.05 100 1420 100H20C8.95432 100 0 91.0457 0 80V0Z" fill="#15141F"/>
            <path d="M1361.85 85.8922C1370.2 84.9167 1435.37 77.5816 1437.89 85.996C1440.58 94.9871 1394.5 254.095 1308.98 244.838C1261.05 239.649 1266.29 208.949 1218.12 211.371C1162.24 214.181 1163.9 248.21 1109.41 260.323C1035.61 276.725 972.854 167.915 970.228 147.934C967.602 127.954 987.796 98.9831 1022.46 105.976C1057.12 112.969 1059.48 190.713 1109.41 189.893C1161.5 189.036 1170.85 140.442 1218.12 140.442C1265.39 140.442 1271.64 181.529 1317.09 170.412C1358.66 160.245 1360.86 95.2246 1360.97 86.8777C1360.98 86.3691 1361.35 85.9512 1361.85 85.8922Z" fill="#15141F"/>
          </svg>
        )}

        {/* Main nav bar */}
        <nav style={{
          position: 'relative', zIndex: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: isMobile ? '0 20px' : compact ? '0 36px' : '0 80px',
          height: isMobile ? '64px' : compact ? '64px' : '80px',
          background: '#15141F',
          borderRadius: compact || isMobile ? '0 0 20px 20px' : '0',
          transition,
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', transform: compact ? 'scale(0.8)' : 'scale(1)', transition }}>
            <CatLogoSVG />
          </Link>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: compact ? '24px' : '40px' }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const isHovered = hoveredLink === link.name;
                return (
                  <div key={link.name} className="nav-link-item">
                    <NavLink
                      to={link.path}
                      onClick={(e) => { e.preventDefault(); navigateTo(link.path); }}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{
                        textDecoration: 'none',
                        color: isActive || isHovered ? '#FFD341' : 'white',
                        fontSize: compact ? '14px' : '16px',
                        fontFamily: "'Halfre', sans-serif",
                        fontWeight: isActive ? '700' : '500',
                        letterSpacing: '0.5px',
                        padding: '10px 0',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.name}
                    </NavLink>
                    {(isActive || isHovered) && (
                      <YellowWiggle animKey={isActive ? "active" : "hover"} />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Hamburger button — mobile only */}
          {isMobile && (
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          )}
        </nav>

        {/* Mobile sidebar overlay */}
        {isMobile && menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 998,
              backdropFilter: 'blur(2px)',
            }}
          />
        )}

        {/* Mobile sidebar drawer */}
        {isMobile && (
          <div
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: 0, right: 0,
              width: '72vw', maxWidth: '300px',
              height: '100vh',
              backgroundColor: '#15141F',
              borderLeft: '1px solid #2a2838',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '80px 32px 40px',
              gap: '8px',
              transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: menuOpen ? '-8px 0 32px rgba(0,0,0,0.4)' : 'none',
            }}
          >
            {/* Sidebar logo */}
            <div style={{ position: 'absolute', top: 18, left: 24 }}>
              <CatLogoSVG />
            </div>

            {/* Close button */}
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: 20, right: 20 }}
            >
              <HamburgerIcon open={true} />
            </button>

            {/* Nav links */}
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <div
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  style={{
                    position: 'relative',
                    padding: '12px 0',
                    borderBottom: 'none',
                    cursor: 'inherit',
                    animation: menuOpen ? `fadeInItem 0.35s ease forwards` : 'none',
                    animationDelay: `${i * 0.07}s`,
                    opacity: menuOpen ? undefined : 0,
                    zIndex: 1,
                    pointerEvents: 'auto',
                    display: 'inline-block',
                     width: 'fit-content',
                  }}
                >
                  <span style={{
                    fontFamily: "'Halfre', sans-serif",
                    fontSize: '22px',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? '#FFD341' : 'white',
                    letterSpacing: '0.5px',
                    transition: 'color 0.2s ease',
                    display: 'block',         
                    pointerEvents: 'none',
                  }}>
                    {link.name}
                  </span>
                  {isActive && (
                    <YellowWiggleLong animKey="active-mobile" />
                  )}
                </div>
              );
            })}

            {/* Bottom branding */}
            <div style={{ marginTop: 'auto', paddingTop: 24 }}>
              <p style={{
                fontSize: '11px', color: '#55536a',
                letterSpacing: '2px', textTransform: 'uppercase',
                fontFamily: "'Segoe UI', sans-serif",
              }}>
                © 2026 Marjorie P. Matilos
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}