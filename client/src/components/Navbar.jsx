import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Handle Scroll (Sticky Header + Close Menu on Scroll)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Optional: Close menu on scroll for better UX on mobile
      if(menuOpen) setMenuOpen(false); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // 2. Handle "Click Outside" to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const menuItems = [
    { label: 'Benefits', link: '#features', sub: 'Thoughtfully designed for everyday sniffles' },
    { label: 'How it Works', link: '#how-it-works', sub: 'See Sniffle Pets in Action' },
    { label: 'Our Story', link: '#story', sub: 'The Heart Behind Sniffle Pets' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Logo */}
        <div 
          className="logo" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
           <img 
             src="/Logo_TM.png" 
             alt="Sniffle Pets Logo" 
             className="nav-logo-img" 
           />
        </div>

        {/* Menu Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.label} className="nav-item-group">
              <a href={item.link} onClick={() => setMenuOpen(false)}>
                <span className="nav-main-text">{item.label}</span>
                <span className="nav-hover-text">{item.sub}</span>
              </a>
            </li>
          ))}
          
          {/* Mobile Only Button */}
          <li className="mobile-only-btn">
            <button className="btn btn-primary" onClick={() => { onOpenModal(); setMenuOpen(false); }}>
              Join the Waitlist
            </button>
          </li>
        </ul>

        {/* Desktop Button (Hidden on Mobile) */}
        <div className="header-cta">
          <button className="btn btn-primary small-btn" onClick={onOpenModal}>
            Join the Waitlist
          </button>
        </div>

        {/* Hamburger Icon - UPDATED LINE BELOW */}
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
