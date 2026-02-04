import React from 'react';

const EmailModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to the Sniffle Squad!"); // Placeholder for backend logic
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="close-btn" onClick={onClose} aria-label="Close Modal">
          &times;
        </button>
        
        {/* Content Wrapper */}
        <div className="modal-content">
          
          {/* Badge */}
          <div className="modal-badge">
            Launching Soon on Kickstarter!
          </div>

          {/* Headline */}
          <h2>Join the Sniffle Squad</h2>

          {/* Subtext */}
          <p className="modal-subtext">
            Be first in line for Sniffle Pets! Sign up now to grab early-bird rewards, 
            classroom bundles, and launch-day perks.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="modal-input"
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                required 
                className="modal-input"
              />
            </div>
            
            <button type="submit" className="btn btn-primary modal-cta-btn">
              Join the Waitlist
            </button>
          </form>

          {/* Footer Note */}
          <p className="modal-footer-note">
            No spam, just cuddles and updates.
          </p>

        </div>
      </div>
    </div>
  );
};

export default EmailModal;
