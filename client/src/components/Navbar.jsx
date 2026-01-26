import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Handle Scroll (Sticky Header + Close Menu on Scroll)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setMenuOpen(false); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. Handle "Click Outside" to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        
       {/* Logo - Clicks Scroll to Top */}
        <div 
          className="logo" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
           <img 
             src="/sniffle_pets_logo.png" 
             alt="Sniffle Pets Logo" 
             className="nav-logo-img" 
           />
        </div>

        {/* Menu Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Benefits</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</a></li>
          <li><a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a></li>
          
          <li className="mobile-only-btn">
            <button className="btn btn-primary" onClick={() => { onOpenModal(); setMenuOpen(false); }}>
              Join Waitlist
            </button>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="header-cta">
          <button className="btn btn-primary small-btn" onClick={onOpenModal}>
            Join Waitlist
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;