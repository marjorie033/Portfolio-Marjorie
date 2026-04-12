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
  <svg xmlns="http://www.w3.org/2000/svg" width="160" height="11" viewBox="0 0 160 11" fill="none">
<path d="M2.50049 4.68212L6.00428 2.63668C6.44674 2.37839 7.01284 2.49627 7.31541 2.90971L10.4683 7.2178C10.8361 7.7204 11.569 7.76811 11.9989 7.31744L15.9788 3.14519C16.4384 2.66331 17.2318 2.75693 17.5667 3.33256L19.7935 7.1601C20.1045 7.69479 20.8215 7.82166 21.2972 7.42615L26.6904 2.94161C27.1675 2.54492 27.8869 2.67391 28.1964 3.21162L30.4105 7.05782C30.7377 7.62609 31.514 7.73105 31.9803 7.27005L36.4135 2.88703C36.8069 2.49802 37.4415 2.50246 37.8295 2.89694L42.2843 7.42627C42.6876 7.83638 43.353 7.82247 43.7388 7.39586L47.5798 3.14939C48.0211 2.66152 48.8051 2.7253 49.1617 3.27809L51.6239 7.09467C51.9789 7.64484 52.758 7.71118 53.2008 7.22894L57.1594 2.91817C57.5328 2.51158 58.165 2.48443 58.5718 2.85752L63.614 7.48131C64.0315 7.86418 64.6834 7.82413 65.0509 7.39302L68.7847 3.0128C69.1654 2.56626 69.8469 2.54189 70.2585 2.96009L74.4737 7.24307C74.9379 7.71483 75.7242 7.61348 76.0537 7.03941L78.1382 3.40754C78.4815 2.80926 79.3132 2.73011 79.7633 3.25289L83.3153 7.37873C83.6906 7.81465 84.3553 7.84488 84.7686 7.44482L89.4678 2.89616C89.872 2.50488 90.5194 2.52393 90.8999 2.9383L94.9965 7.39938C95.3862 7.82376 96.053 7.83188 96.4529 7.4171L100.827 2.88054C101.202 2.49144 101.819 2.47088 102.219 2.8341L107.331 7.47331C107.756 7.85852 108.417 7.80879 108.779 7.36438L112.151 3.22435C112.575 2.70495 113.379 2.74041 113.755 3.29504L116.435 7.25054C116.771 7.74631 117.464 7.83768 117.917 7.44585L123.285 2.80092C123.687 2.45373 124.289 2.48041 124.658 2.86171L129.092 7.44264C129.484 7.84757 130.132 7.84889 130.526 7.44556L135.045 2.8137C135.397 2.45285 135.963 2.41052 136.365 2.71495L142.774 7.57005C143.218 7.90674 143.852 7.8149 144.183 7.36594L147.374 3.03345C147.714 2.57114 148.373 2.48981 148.816 2.85547L154.393 7.46254C154.856 7.84497 155.549 7.73603 155.872 7.23005L157.5 4.68212" stroke="#FFD341" stroke-width="5" stroke-linecap="round"/>
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