import React from 'react';

const AdoptionSection = () => {
  return (
    <section className="adoption-section" id="adopt">
      <div className="container adoption-container">

        {/* --- HTML RECREATION OF THE TEXT HEADER --- */}
        <div className="adoption-text-content">
          <h2 className="adoption-title">
            {/* "Make" */}
            <span className="word-wrapper">
              <span style={{ color: '#E31E24' }}>M</span>
              <span style={{ color: '#4C6F13' }}>a</span>
              <span style={{ color: '#F9A01B' }}>k</span>
              <span style={{ color: '#0B2351' }}>e</span>
            </span>
            
            {/* "It" */}
            <span className="word-wrapper">
              <span style={{ color: '#1A3668' }}>I</span>
              <span style={{ color: '#C1272D' }}>t</span>
            </span>
            
            {/* "Official" */}
            <span className="word-wrapper">
              <span style={{ color: '#F15A24' }}>O</span>
              <span style={{ color: '#E31E24' }}>f</span>
              <span style={{ color: '#4C6F13' }}>f</span>
              <span style={{ color: '#F9A01B' }}>i</span>
              <span style={{ color: '#0B2351' }}>c</span>
              <span style={{ color: '#1A3668' }}>i</span>
              <span style={{ color: '#C1272D' }}>a</span>
              <span style={{ color: '#F15A24' }}>l</span>
            </span>
          </h2>

          <p className="adoption-subtext">
            Every{' '}
            {/* --- INLINE LOGO STYLING --- */}
            <span className="sniffle-logo-inline" style={{ fontFamily: "'Comic Sans MS', sans-serif" }}>
              <span style={{ color: '#E31E24' }}>S</span>
              <span style={{ color: '#4C6F13' }}>n</span>
              <span style={{ color: '#F9A01B' }}>i</span>
              <span style={{ color: '#193365' }}>f</span>
              <span style={{ color: '#193365' }}>f</span>
              <span style={{ color: '#C1272D' }}>l</span>
              <span style={{ color: '#F15A24' }}>e</span>
              <span>&nbsp;</span>
              <span style={{ color: '#4C6F13' }}>P</span>
              <span style={{ color: '#A85426' }}>e</span>
              <span style={{ color: '#E31E24' }}>t</span>
            </span>{' '}
            comes with a printable <br className="desktop-break" />
            <strong>Adoption Certificate</strong> so your child can officially <br className="desktop-break" />
            welcome their new best friend home.
          </p>
        </div>

        {/* --- THE GRAPHIC --- */}
        <div className="adoption-image-wrapper">
          <img 
            src="/adoption_certificate_graphic.jpg" 
            alt="Sniffle Pets Adoption Certificate with boy and bear" 
            className="adoption-graphic"
          />
        </div>

      </div>
    </section>
  );
};

export default AdoptionSection;
