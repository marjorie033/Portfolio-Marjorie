import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { useTransition } from '../theme/page-transition.jsx'


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

const YellowWiggle = ({ animKey }) => (
  <svg
    key={animKey}
    width="57"
    height="17"
    viewBox="0 0 57 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      bottom: '-12px', // Adjusted slightly to fit within nav padding
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'wiggleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      pointerEvents: 'none'
    }}
  >
    <path
      d="M4.00024 12.3827L14.6582 4.55241C15.3186 4.0672 16.2502 4.53879 16.2502 5.35829V10.5048C16.2502 11.3054 17.1442 11.7814 17.8084 11.3345L28.0704 4.43096C28.7346 3.98408 29.6285 4.46008 29.6285 5.26068V10.2054C29.6285 11.0603 30.6317 11.521 31.2801 10.9639L39.1044 4.24267C39.607 3.81093 40.3829 3.97846 40.6626 4.57909L43.8098 11.3379C44.0666 11.8894 44.7523 12.0857 45.2621 11.7537L53.0002 6.71343"
      stroke="#FFD341"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

export default function Header() {
  const { navigateTo } = useTransition()

  const navLinks = [
    { name: 'Home',     path: '/' },
    { name: 'About',    path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Hire Me',  path: '/contact' },
  ]

  const [hoveredLink, setHoveredLink] = useState(null);
  const [compact, setCompact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset compact on route change
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

  const transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';

  return (
    <>
      <style>{`
        @keyframes wiggleIn {
          from { opacity: 0; transform: translateX(-50%) scaleX(0.3); }
          to   { opacity: 1; transform: translateX(-50%) scaleX(1); }
        }
        .nav-link-item { position: relative; display: flex; alignItems: center; }
      `}</style>

      <div
        className="nav-wrapper"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%',
          zIndex: 100,
          transition,
          background: 'transparent',
        }}
      >
        {/* Background Decorative SVG */}
        <svg
          viewBox="0 0 1440 262"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: 'auto',
            opacity: compact ? 0 : 1,
            pointerEvents: 'none',
            transition,
          }}
        >
          <path d="M0 0H1440V80C1440 91.0457 1431.05 100 1420 100H20C8.95432 100 0 91.0457 0 80V0Z" fill="#15141F"/>
          <path d="M1361.85 85.8922C1370.2 84.9167 1435.37 77.5816 1437.89 85.996C1440.58 94.9871 1394.5 254.095 1308.98 244.838C1261.05 239.649 1266.29 208.949 1218.12 211.371C1162.24 214.181 1163.9 248.21 1109.41 260.323C1035.61 276.725 972.854 167.915 970.228 147.934C967.602 127.954 987.796 98.9831 1022.46 105.976C1057.12 112.969 1059.48 190.713 1109.41 189.893C1161.5 189.036 1170.85 140.442 1218.12 140.442C1265.39 140.442 1271.64 181.529 1317.09 170.412C1358.66 160.245 1360.86 95.2246 1360.97 86.8777C1360.98 86.3691 1361.35 85.9512 1361.85 85.8922Z" fill="#15141F"/>
        </svg>

        <nav
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: compact ? '0 36px' : '0 80px',
            height: compact ? '64px' : '80px',
            background: '#15141F',
            borderRadius: compact ? '0 0 20px 20px' : '0',
            transition,
            // REMOVED overflow: hidden so the wiggle can be seen
          }}
        >
          <Link 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              transform: compact ? 'scale(0.8)' : 'scale(1)', 
              transition 
            }}
          >
            <CatLogoSVG />
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: compact ? '24px' : '40px' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredLink === link.name;

              return (
                <div key={link.name} className="nav-link-item">
                  <NavLink
                    to={link.path}
                    onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.path);}}
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

                  {/* Wiggle appears on Active OR Hover */}
                  {(isActive || isHovered) && (
                    <YellowWiggle animKey={isActive ? "active" : "hover"} />
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}