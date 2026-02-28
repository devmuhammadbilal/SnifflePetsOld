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

  // UPDATED: Added Home, Collection, and matched the screenshot's naming
  const menuItems = [
    { label: 'Home', link: '#top', sub: 'Welcome to Sniffle Pets' },
     { label: 'Why Sniffle Pets', link: '#features', sub: 'Thoughtfully designed' },
    { label: 'Collection', link: '#collection', sub: 'Meet the Sniffle Pets' },
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
          
          {/* Mobile Only Button & Icons */}
          <li className="mobile-only-btn">
            <button className="btn btn-primary" onClick={() => { onOpenModal(); setMenuOpen(false); }} style={{width: '100%', marginBottom: '20px'}}>
              Join the Waitlist
            </button>
            <div className="mobile-nav-icons">
              <a href="#account" className="nav-icon-link" aria-label="Account">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </a>
              <a href="mailto:hello@snifflepets.com" className="nav-icon-link" aria-label="Contact Us">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </li>
        </ul>

        {/* Desktop CTA & Icons (Hidden on Mobile) */}
        <div className="header-cta">
          <button className="btn btn-primary small-btn" onClick={onOpenModal}>
            Join the Waitlist
          </button>
          
          {/* NEW: Account & Email Icons */}
          <div className="desktop-nav-icons">
            <a href="#account" className="nav-icon-link" aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </a>
            <a href="mailto:hello@snifflepets.com" className="nav-icon-link" aria-label="Contact Us">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* Hamburger Icon */}
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
