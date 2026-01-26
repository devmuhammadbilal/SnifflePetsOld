import React from 'react';

const EmailModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to the Sniffle Squad!"); // We will link Google Sheets later
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Close X Button */}
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {/* Kickstarter Badge (Updated to Brand Green) */}
        <div style={{ 
          background: 'var(--green)', /* Uses the new Logo Green */
          color: 'white', 
          display: 'inline-block', 
          padding: '5px 15px', 
          borderRadius: '20px', 
          marginBottom: '15px', 
          fontSize: '0.85rem', 
          fontWeight: 'bold',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
           Launching Soon on Kickstarter!
        </div>

        {/* Headline (Updated to Brand Navy) */}
        <h2 style={{ 
          color: 'var(--secondary)', /* Deep Navy Blue */
          marginBottom: '10px',
          fontSize: '1.8rem'
        }}>
          Join the Sniffle Squad
        </h2>

        {/* Subtext */}
        <p style={{ color: '#636e72', fontSize: '1rem', marginBottom: '25px', lineHeight: '1.5' }}>
          Be first in line for Sniffle Pets! Sign up now to grab early-bird rewards, 
          classroom bundles, and launch-day perks.
        </p>

        {/* The Form Fields */}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            style={{ 
              width: '100%', 
              padding: '15px', 
              marginBottom: '10px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            required 
            style={{ 
              width: '100%', 
              padding: '15px', 
              marginBottom: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
          
          {/* Button (Automatically uses the Red Primary Color from CSS) */}
          <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
            Count Me In!
          </button>
        </form>

        <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '15px' }}>
          No spam, just cuddles and updates.
        </p>
      </div>
    </div>
  );
};

export default EmailModal;