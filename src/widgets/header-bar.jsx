import React, { useState, useEffect, useRef} from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { useTransition } from '../theme/page-transition.jsx';
import { CatLogoSVG, YellowWiggle, YellowWiggleLong, HamburgerIcon} from "../theme/icons";


export default function Header() {
  const { navigateTo } = useTransition();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const isTransitioning = useRef(false);

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
      const ids = ['contact', 'projects', 'tools', 'project-view-1'];
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
  if (isTransitioning.current) return; 
  if (location.pathname === path) return;

  isTransitioning.current = true;
  setMenuOpen(false);
  navigateTo(path);

  setTimeout(() => {
    isTransitioning.current = false;
  }, 800); 
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
          height: isMobile ? '64px' : compact ? '90px' : '80px',
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
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
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
                fontFamily: "'Halfre', sans-serif",
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