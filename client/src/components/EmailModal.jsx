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
        
        {/* Decorative Assets */}
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
            <span>LAUNCHING SOON ON</span>
            {/* Note: Ensure /kickstarter-logo.png is the full green wordmark logo! */}
            <img 
              src="/kickstarter-logo.png" 
              alt="Kickstarter" 
              className="kickstarter-logo" 
            />
          </div>

          {/* Headline (Updated per client request) */}
          <h2 className="modal-headline">
            <span className="join-the-text">Be First in Line for</span><br />
            <img src="/sniffle_pets_logo.png" alt="Sniffle Pets" className="modal-logo-img" />
          </h2>

          {/* Subtext (Removed redundant text) */}
          <p className="modal-subtext">
            Sign up now to grab <span className="hl-yellow">early-bird rewards,</span> <span className="hl-blue">classroom bundles,</span> and <span className="hl-pink">launch-day perks!</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="input-group-icon">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="modal-input-pill"
              />
            </div>
            <div className="input-group-icon">
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
