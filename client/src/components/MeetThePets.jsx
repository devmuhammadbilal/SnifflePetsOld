import React, { useState } from 'react';

const MeetThePets = ({ onOpenModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Extracted the main classroom image
  const mainFeaturedImage = { 
    src: "/meet_sniffle_main_image.jpg", 
    alt: "Sniffle Pets Group in Classroom" 
  };

  // The remaining images for the carousel
  const galleryItems = [
    { id: 1, src: "/meet_sp_1.jpg", alt: "Design 1" },
    { id: 2, src: "/meet_sp_2.jpg", alt: "Design 2" },
    { id: 3, src: "/meet_sp_3.jpg", alt: "Design 3" },
      { id: 4, src: "/meet_sp_4.jpg", alt: "Design 4" },
    { id: 5, src: "/meet_sp_5.jpg", alt: "Design 5" },
     { id: 6, src: "/meet_sp_6.jpg", alt: "Design 6" },
    { id: 7, src: "/meet_sp_7.jpg", alt: "Design 7" },
    { id: 8, src: "/meet_sp_8.jpg", alt: "Design 8" },
    { id: 9, src: "/meet_sp_9.jpg", alt: "Design 9" },
     { id: 10, src: "/meet_sp_10.jpg", alt: "Design 10" }
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
        
        {/* === TOP LEFT: TEXT CONTENT === */}
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
              <span style={{ display: 'block' }}>Six Lovable Characters</span>
              <span style={{ display: 'block' }}><strong>One Simple Solution</strong> for Sniffles and Tears</span> 
            </p>

            <div className="pets-cta-wrapper">
              <button className="btn btn-primary big-btn" onClick={onOpenModal}>
                Join the Waitlist
              </button>
              <span className="cta-note">Exclusive Early Bird pricing available at launch</span>
            </div>
          </div>
        </div>

        {/* === TOP RIGHT: FEATURED IMAGE === */}
        <div className="meet-pets-featured">
          <div className="featured-image-wrapper">
            <img 
              src={mainFeaturedImage.src} 
              alt={mainFeaturedImage.alt} 
              className="featured-classroom-img"
            />
          </div>
        </div>

        {/* === BOTTOM CENTER: 3D CAROUSEL === */}
        <div className="meet-pets-carousel-area">
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


