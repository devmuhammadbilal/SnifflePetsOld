import React, { useState, useEffect } from 'react';

const Hero = ({ onOpenModal }) => {
  // Array of words, using explicit color arrays for the logo or gradients for the rest
  const dynamicWords = [
    { 
      text: 'Sniffles', 
      // Exact colors from the Sniffle Pets logo, including the final 's'
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

  // Cycle through the words every 3 seconds to allow the letter animation to finish
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

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
                      // If 'colors' array is provided, use exact letter colors. Otherwise, use the gradient.
                      ...(currentWord.colors 
                        ? { 
                            color: currentWord.colors[index], 
                            WebkitTextFillColor: currentWord.colors[index], 
                            backgroundImage: 'none' 
                          } 
                        : { backgroundImage: currentWord.gradient }),
                      fontFamily: currentWord.font,
                      animationDelay: `${index * 0.05}s` // Staggers each letter
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
            
            {/* Tagline - Increased size, bolded 'Turning', updated fonts applied */}
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
              <span style={{ fontFamily: "'Comic Sans MS', sans-serif"}}>
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
