import React, { useState } from 'react';

const Features = ({ onOpenModal }) => {
  // State to manage which image is currently being previewed
  const [previewImage, setPreviewImage] = useState(null);

  const benefits = [
    {
      title: 'Universal Wristband Fit',
      text: 'Adjustable, soft, and comfy for kids of all ages.',
      image: '/universal_wristband_fit.jpg' // Kept from original code
    },
    {
      title: 'Cute & Comforting',
      text: 'Turns little sniffles into big smiles with cuddly plush pets.',
      image: '/cute_comforting.jpg' // Kept from original code
    },
    {
      title: 'Always Prepared',
      text: 'Keeps tissues close when kids need them most.',
      image: '/always_prepared.jpg' // Kept from original code
    },
    {
      title: 'Simple & Convenient',
      text: 'Easy to refill, machine-washable, ready for daily adventures.',
      image: '/simple_convieneint.jpg' // Kept from original code
    }
  ];

  return (
    <>
      <section id="features" className="features-section">
        <div className="container">
          
          {/* Header: Text + Logo */}
          <div className="section-header-wrapper">
            <h2 className="section-title">
              Why Families & Classrooms Love
              <img 
                src="/sniffle_pets_logo.png" 
                alt="Sniffle Pets" 
                className="inline-title-logo" 
              />
            </h2>
            <p className="features-subtext">
              <span>DESIGNED BY PARENTS,</span>{' '}
              <span>TRUSTED BY TEACHERS,</span>{' '}
              <span>LOVED BY KIDS.</span>
            </p>
          </div>
          
          {/* 4-Column Grid */}
          <div className="features-grid">
            {benefits.map((item, index) => (
              <div className="feature-card" key={index}>
                
                <div className="feature-img-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="feature-img" 
                  />
                  <div className="img-overlay"></div>
                  
                  {/* NEW: Hover Eye Icon for Preview */}
                  <button 
                    className="preview-eye-btn" 
                    onClick={() => setPreviewImage(item.image)}
                    aria-label="Preview image"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>

                <div className="feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                
              </div>
            ))}
          </div>

          <div className="features-cta">
            <button className="btn btn-primary big-btn" onClick={onOpenModal}>
              Join the Waitlist
            </button>
          </div>

        </div>
      </section>

      {/* NEW: Image Preview Modal (Lightbox) */}
      {previewImage && (
        <div className="image-preview-modal" onClick={() => setPreviewImage(null)}>
          <div className="image-preview-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Cut/Close Button */}
            <button 
              className="close-preview-btn" 
              onClick={() => setPreviewImage(null)}
              aria-label="Close preview"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <img src={previewImage} alt="Feature Full Preview" className="preview-large-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
