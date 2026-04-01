import React, { useState, useEffect } from 'react';

const Hero = ({ onOpenModal }) => {
  const dynamicWords = [
    { 
      text: 'Sniffles', 
      colors: ['#E31E24', '#4C6F13', '#F9A01B', '#193365', '#193365', '#C1272D', '#F15A24', '#F9A01B'], 
      font: "'Comic Sans MS', sans-serif"
    },
    { 
      text: 'Colds', 
      gradient: 'linear-gradient(135deg, #1A3673, #4361EE)', 
      font: '"Arial Rounded MT Bold", "Nunito", sans-serif' 
    },
    { 
      text: 'Allergies', 
      gradient: 'linear-gradient(135deg, #4C7D2D, #05CE78)', 
      font: '"Trebuchet MS", "Quicksand", sans-serif' 
    }
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = dynamicWords[wordIndex];

  return (
    <section className="hero-section">
      {/* Background image is now handled completely by CSS to allow mobile swapping */}
      <div className="hero-image-layer"></div>

      {/* White smoke gradient overlay for text readability */}
      <div className="hero-smoke-overlay"></div>

      <div className="container relative-container">
        <div className="hero-grid">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="hero-text">
            
            {/* Kickstarter Badge */}
            <div className="kickstarter-badge">
              <span className="badge-text">Launching Soon On</span>
              <img 
                src="/kickstarter-logo.png" 
                alt="Kickstarter" 
                className="kickstarter-logo" 
              />
            </div>
            
            {/* Main Headline - Letter by Letter Animation */}
            <h1>
              Your Child’s Best Friend for{' '}
              <span className="animated-word-container" key={currentWord.text}>
                {currentWord.text.split('').map((char, index) => (
                  <span
                    key={index}
                    className="animated-letter"
                    style={{
                      ...(currentWord.colors 
                        ? { 
                            color: currentWord.colors[index], 
                            WebkitTextFillColor: currentWord.colors[index], 
                            backgroundImage: 'none' 
                          } 
                        : { backgroundImage: currentWord.gradient }),
                      fontFamily: currentWord.font,
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="hero-subtext">
              A cuddly plush wristband that keeps tissues within reach for school, travel, and everyday sniffles.
            </p>
            
            {/* Tagline */}
            <p className="hero-tagline">
              <strong>Turning</strong>{' '}
              <span style={{ fontFamily: "'Comic Sans MS', sans-serif" }}>
                <span style={{ color: '#E31E24' }}>S</span>
                <span style={{ color: '#4C6F13' }}>n</span>
                <span style={{ color: '#F9A01B' }}>i</span>
                <span style={{ color: '#193365' }}>f</span>
                <span style={{ color: '#193365' }}>f</span>
                <span style={{ color: '#C1272D' }}>l</span>
                <span style={{ color: '#F15A24' }}>e</span>
                <span style={{ color: '#F9A01B' }}>s</span>
              </span>
              {' '}Into{' '}
              <span style={{ fontFamily: "'Comic Sans MS', sans-serif" }}>
                <span style={{ color: '#E31E24' }}>S</span>
                <span style={{ color: '#4C6F13' }}>m</span>
                <span style={{ color: '#F9A01B' }}>i</span>
                <span style={{ color: '#193365' }}>l</span>
                <span style={{ color: '#F15A24' }}>e</span>
                <span style={{ color: '#F9A01B' }}>s</span>
              </span>
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
                <span>
                 Join <span className="highlight-300">300+</span> parents, teachers, and families already on the waitlist.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
