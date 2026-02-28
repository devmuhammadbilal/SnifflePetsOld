import React from 'react';

const Hero = ({ onOpenModal }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="hero-text">
            
            {/* Kickstarter Badge */}
            <div className="kickstarter-badge">
              <span className="badge-text">Launching Soon On KickStarter</span>
              {/* Note: Make sure to save the official Kickstarter wordmark in your public folder */}
              <img 
                src="/kickstarter-logo.png" 
                alt="Kickstarter" 
                className="kickstarter-logo" 
              />
            </div>
            
            {/* Main Headline */}
            <h1>
              Your Child’s Best Friend for Sniffles, Colds, and Allergies
            </h1>
            
            {/* Subtext */}
            <p>
              Because every sniffle deserves a smile
            </p>

            {/* CTA Button Wrapper */}
            <div className="hero-cta-wrapper">
              <button className="btn btn-primary hero-btn" onClick={onOpenModal}>
                Join the Waitlist
              </button>
              
              {/* Trust Indicator / Social Proof */}
              <div className="hero-guarantee">
                <div className="avatars">
                  <img src="/emily.jpg" alt="Parent 1" className="avatar" style={{ objectFit: 'cover' }} />
                  <img src="/msrem.jpg" alt="Parent 2" className="avatar" style={{ objectFit: 'cover' }} />
                  <img src="/sarah.jpg" alt="Parent 3" className="avatar" style={{ objectFit: 'cover' }} />
                </div>
                <span><strong>300+</strong> parents & teachers already signed up</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="hero-image-wrapper">
            <div className="hero-blob"></div>
            
            <img 
              src="/final_hero_image.png" 
              alt="Group of children wearing Sniffle Pets" 
              className="hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
