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
          
          {/* UPDATED: Kickstarter Badge */}
          <div className="join-badge">
            <span>LAUNCHING SOON ON KICKSTARTER</span>
            <img 
              src="/kickstarter-logo.png" 
              alt="Kickstarter" 
              className="kickstarter-logo" 
            />
          </div>
          
          <h2>Be Part of the Sniffle Squad</h2>
          
          {/* UPDATED: Body Copy */}
          <p className="join-body-copy">
            A simple idea. A comforting companion. Be the first to know when Sniffle Pets launches.
          </p>

          {/* NEW: Social Proof before form */}
          <p className="squad-social-proof">
            <strong>300+</strong> parents & teachers already signed up
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

          {/* UPDATED: Punctuation updated as requested */}
          <p className="spam-note">No spam. Just cuddles and updates.</p>
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
