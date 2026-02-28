import React, { useState } from 'react';

const MeetThePets = ({ onOpenModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Your images array
  const galleryItems = [
    // Removed badge property from the first image
    { id: 0, src: "/meet_sniffle_main_image.png", alt: "Sniffle Pets Group" },
    { id: 1, src: "/meet_sp_1.png", alt: "Design 1" },
    { id: 2, src: "/meet_sp_2.png", alt: "Design 2" },
    { id: 3, src: "/meet_sp_3.png", alt: "Design 3" },
     { id: 3, src: "/meet_sp_4.jpeg", alt: "Design 4" },
    { id: 3, src: "/meet_sp_5.jpeg", alt: "Design 5" }
  ];

  // Handlers to rotate the carousel
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  // Logic to determine slide position classes
  const getSlideClass = (index) => {
    if (index === activeIndex) return "slide-active";
    if (index === (activeIndex - 1 + galleryItems.length) % galleryItems.length) return "slide-prev";
    if (index === (activeIndex + 1) % galleryItems.length) return "slide-next";
    return "slide-hidden";
  };

  return (
    <section className="meet-pets-section" id='collection'>
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
              Six lovable characters. <strong>One simple solution</strong> for sniffles and tears. 
            </p>

            <div className="pets-cta-wrapper">
              <button className="btn btn-primary big-btn" onClick={onOpenModal}>
                Join the Waitlist
              </button>
              <span className="cta-note">Exclusive Early Bird pricing available at launch</span>
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE: 3D CAROUSEL === */}
        <div className="meet-pets-visual">
          <div className="carousel-container">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`carousel-slide ${getSlideClass(index)}`}
                onClick={() => setActiveIndex(index)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="carousel-img" 
                />
                {item.badge && (
                  <div className="glass-badge">
                    {item.badge}
                  </div>
                )}
                {/* Optional Play Button Overlay condition removed from here */}
              </div>
            ))}
          </div>

          {/* Carousel Navigation Controls */}
          <div className="carousel-controls">
            <button className="control-btn" onClick={prevSlide}>←</button>
            <div className="carousel-indicators">
              {galleryItems.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button className="control-btn" onClick={nextSlide}>→</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetThePets;
