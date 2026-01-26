import React from 'react';

const JoinSquad = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you'd eventually send data to Google Sheets
    alert("Welcome to the Sniffle Squad!");
  };

  return (
    <section className="join-squad-section">
      <div className="container">
        
        {/* Headline */}
        <h2>Be Part of the Sniffle Squad</h2>
        
        {/* Subtext */}
        <p className="join-subtext">
          Sniffle Pets are getting ready to launch on Kickstarter! Sign up now to grab 
          early-bird rewards, classroom bundles, and launch-day perks.
        </p>

        {/* Inline Form (Name + Email) */}
        <form className="rally-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            className="rally-input"
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            required 
            className="rally-input"
          />
          <button type="submit" className="btn btn-primary rally-btn">
            Get Early Access
          </button>
        </form>

        <p className="spam-note">No spam, just cuddles and updates.</p>

      </div>
    </section>
  );
};

export default JoinSquad;