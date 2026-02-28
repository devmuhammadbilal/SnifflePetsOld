import React from 'react';

const EmailModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to the Sniffle Squad!"); // Placeholder for backend logic
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-box-vibrant" onClick={(e) => e.stopPropagation()}>
        
        {/* Decorative Assets (Replace with your actual transparent PNGs) */}
        <img src="/monkey-popup.png" alt="" className="decor-monkey" />
        <img src="/leaves-popup.png" alt="" className="decor-leaves" />

        {/* Close Button */}
        <button className="close-btn" onClick={onClose} aria-label="Close Modal">
          &times;
        </button>
        
        {/* Content Wrapper */}
        <div className="modal-content">
          
          {/* Kickstarter Badge */}
          <div className="join-badge modal-ks-badge">
            <span>LAUNCHING SOON ON KICKSTARTER</span>
            <img 
              src="/kickstarter-logo.png" 
              alt="Kickstarter" 
              className="kickstarter-logo" 
            />
          </div>

          {/* Headline (Using Actual Logo as requested) */}
          <h2 className="modal-headline">
            <span className="join-the-text">Join the</span><br />
            <img src="/sniffle_pets_logo.png" alt="Sniffle Squad" className="modal-logo-img" />
          </h2>

          
          {/* Subtext with Multi-colored "Sniffle" and Colorful Highlights */}
          <p className="modal-subtext">
            Be first in line for <span className="sniffle-logo-text">
              <span style={{color: '#E31E24'}}>S</span>
              <span style={{color: '#4C6F13'}}>n</span>
              <span style={{color: '#F9A01B'}}>i</span>
              <span style={{color: '#0B2351'}}>f</span>
              <span style={{color: '#1A3668'}}>f</span>
              <span style={{color: '#C1272D'}}>l</span>
              <span style={{color: '#F15A24'}}>e</span>
            </span> <strong>Pets!</strong><br/>
            Sign up now to grab <span className="hl-yellow">early-bird rewards,</span> <span className="hl-blue">classroom bundles,</span> and <span className="hl-pink">launch-day perks!</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="input-group-icon">
              {/* <span className="input-icon">👤</span> */}
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="modal-input-pill"
              />
            </div>
            <div className="input-group-icon">
              {/* <span className="input-icon">✉️</span> */}
              <input 
                type="email" 
                placeholder="Your Email Address" 
                required 
                className="modal-input-pill"
              />
            </div>
            
            <button type="submit" className="btn modal-cta-btn-vibrant">
              Join the Waitlist <span className="btn-arrow">➔</span>
            </button>
          </form>

          {/* Footer Note */}
          <p className="modal-footer-note">
            <span className="lock-icon"></span> No spam, just cuddles and updates! <span className="party-icon"></span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default EmailModal;
