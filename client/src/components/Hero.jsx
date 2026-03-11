import React, { useState, useEffect } from 'react';

const Hero = ({ onOpenModal }) => {
  // Array of words, gradients, and distinct fonts
  const dynamicWords = [
    { 
      text: 'Sniffles', 
      gradient: 'linear-gradient(135deg, #D92332, #F15A24)', // Red to Orange
      font: '"Comic Sans MS", "Chalkboard SE", cursive' 
    },
    { 
      text: 'Colds', 
      gradient: 'linear-gradient(135deg, #1A3673, #4361EE)', // Deep Navy to Bright Blue
      font: '"Arial Rounded MT Bold", "Nunito", sans-serif' 
    },
    { 
      text: 'Allergies', 
      gradient: 'linear-gradient(135deg, #4C7D2D, #05CE78)', // Forest Green to Kickstarter Green
      font: '"Trebuchet MS", "Quicksand", sans-serif' 
    }
  ];

  const [wordIndex, setWordIndex] = useState(0);

  // Cycle through the words every 3 seconds to allow the letter animation to finish
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = dynamicWords[wordIndex];

  return (
    <section className="hero-section">
      <div className="container">
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
                      backgroundImage: currentWord.gradient,
                      fontFamily: currentWord.font,
                      animationDelay: `${index * 0.05}s` // Staggers each letter by 0.05 seconds
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
            <p className="hero-tagline">
              Turning{' '}
              <span style={{ color: '#D92332' }}>S</span>
              <span style={{ color: '#4C7D2D' }}>n</span>
              <span style={{ color: '#F4B333' }}>i</span>
              <span style={{ color: '#1A3673' }}>f</span>
              <span style={{ color: '#D92332' }}>f</span>
              <span style={{ color: '#F15A24' }}>l</span>
              <span style={{ color: '#4C7D2D' }}>e</span>
              <span style={{ color: '#1A3673' }}>s</span>
              {' '}Into{' '}
              <span style={{ color: '#D92332' }}>S</span>
              <span style={{ color: '#4C7D2D' }}>m</span>
              <span style={{ color: '#F4B333' }}>i</span>
              <span style={{ color: '#1A3673' }}>l</span>
              <span style={{ color: '#F15A24' }}>e</span>
              <span style={{ color: '#D92332' }}>s</span>
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
