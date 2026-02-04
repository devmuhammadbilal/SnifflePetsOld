import React from 'react';

const MeetThePets = ({ onOpenModal }) => {
  return (
    <section className="meet-pets-section">
      {/* Decorative Background Curve */}
      <div className="section-curve-bg"></div>

      <div className="container meet-pets-container">
        
        {/* === LEFT SIDE: TEXT CONTENT === */}
        <div className="meet-pets-text">
          <div className="text-content-wrapper">
            <span className="section-tag">The Collection</span>
            
            <div className="section-header-wrapper">
              <h2>
                Meet the 
                <img 
                  src="/sniffle_pets_logo.png" 
                  alt="Sniffle Pets" 
                  className="inline-header-logo" 
                />
              </h2>
            </div>
            
            <p className="section-subtext">
              Six lovable designs make it easy for every child to find a 
              <strong> cuddly companion</strong> that feels just right. 
            </p>

            {/* NEW: Highlight Box to fill empty space */}
            {/* <div className="highlight-box">
              <span className="highlight-icon">✨</span>
              <p>Designed for comfort, styled for fun, and ready for every sniffle.</p>
            </div> */}

            <div className="pets-cta-wrapper">
              <button className="btn btn-primary big-btn" onClick={onOpenModal}>
                Join the Waitlist
              </button>
              <span className="cta-note">Limited early release coming soon</span>
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE: BENTO GRID === */}
        <div className="meet-pets-visual">
          <div className="bento-grid">
            
            {/* Main Featured Image */}
            <div className="bento-item item-main">
              <img 
                src="/SnifflePets_HeroSection.jpg" 
                alt="Sniffle Pets Group" 
                className="bento-img" 
              />
              <div className="glass-badge">
                Premium Quality
              </div>
            </div>
            
            {/* Sub Images */}
            <div className="bento-item item-sub-1">
              <img src="/1_MS.jpg" alt="Design 1" className="bento-img" />
            </div>
            
            <div className="bento-item item-sub-2">
              <img src="/2_MS.jpg" alt="Design 2" className="bento-img" />
            </div>
            
            <div className="bento-item item-sub-3">
              <img src="/feature_image_02.jpg" alt="Design 3" className="bento-img" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetThePets;

