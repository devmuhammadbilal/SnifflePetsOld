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
            <span>LAUNCHING SOON ON</span>
            <img 
              src="/kickstarter-logo.png" 
              alt="Kickstarter" 
              className="kickstarter-logo" 
            />
          </div>
          
          {/* UPDATED: Multi-color styling applied to "Sniffle" */}
          <h2>
            Be Part of the <span className="colorful-word">
              <span style={{color: '#E31E24'}}>S</span>
              <span style={{color: '#4C6F13'}}>n</span>
              <span style={{color: '#F9A01B'}}>i</span>
              <span style={{color: '#0B2351'}}>f</span>
              <span style={{color: '#1A3668'}}>f</span>
              <span style={{color: '#C1272D'}}>l</span>
              <span style={{color: '#F15A24'}}>e</span>
            </span> Squad
          </h2>
          
          {/* UPDATED: Body Copy (color handled in CSS) */}
          <p className="join-body-copy">
            A simple idea. A comforting companion. Be the first to know when Sniffle Pets launches.
          </p>

          {/* Social Proof before form */}
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
