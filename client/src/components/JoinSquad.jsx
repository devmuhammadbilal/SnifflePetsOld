import React from 'react';

const JoinSquad = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send data to your backend/Google Sheets
    alert("Welcome to the Sniffle Squad!");
  };

  return (
    <section className="join-squad-section">
      <div className="container join-container">
        
        {/* Left Side: Content & Form */}
        <div className="join-content">
          
          {/* Kickstarter Badge */}
          <div className="join-badge">
            <span>SUPPORT US ON</span>
            <img 
              src="/kickstarter-logo.png" 
              alt="Kickstarter" 
              className="kickstarter-logo" 
            />
          </div>
          
          {/* UPDATED: Headline with inline image */}
          <h2>
            Join the{' '}
            <img 
              src="/join_squad_sniffle_image.png" 
              alt="Sniffle" 
              className="inline-sniffle-word" 
            />{' '}
            Squad.
          </h2>
          
          {/* Subheader Text */}
          <p className="join-body-copy">
            A comforting companion for sniffles, colds, and allergies. Be the first to know when Sniffle Pets launches.
          </p>

          {/* Social Proof before form */}
          <p className="squad-social-proof">
            Over <strong>300+</strong> parents & teachers are already on the waitlist
          </p>

          <form className="rally-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="rally-input"
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                required 
                className="rally-input"
              />
            </div>
            
            <button type="submit" className="btn btn-primary rally-btn">
              Count Me In
            </button>
          </form>

          {/* Text Under Email Signup */}
          <p className="spam-note">No spam. Just cuddles, updates, and early access.</p>
        </div>

        {/* Right Side: Warm Lifestyle Image */}
        <div className="join-image-wrapper">
          <div className="image-backdrop-glow"></div>
          <img 
            src="/join_squad_image.jpg" 
            alt="Caregiver and child using Sniffle Pets" 
            className="join-lifestyle-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default JoinSquad;
