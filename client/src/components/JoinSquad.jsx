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
          <span className="join-badge">Launching Soon on Kickstarter</span>
          
          <h2>Be Part of the Sniffle Squad</h2>
          
          <p className="join-body-copy">
            A simple idea. A comforting companion. A small solution that makes a big difference. 
            Be the first to know when Sniffle Pets launches.
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

          <p className="spam-note">No spam, just cuddles and updates.</p>
        </div>

        {/* Right Side: Warm Lifestyle Image */}
        <div className="join-image-wrapper">
          <div className="image-backdrop-glow"></div>
          <img 
            src="/Join_Squad.jpg" 
            alt="Caregiver and child using Sniffle Pets" 
            className="join-lifestyle-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default JoinSquad;
