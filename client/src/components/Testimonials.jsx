import React, { useState } from 'react';

const Testimonials = ({ onOpenModal }) => {
  // State to track which image is currently being previewed
  const [previewImage, setPreviewImage] = useState(null);

  const reviews = [
    {
      header: "Game changer for busy parents",
      text: "Sniffle Pets has been a total game changer for us. My son actually wants to wear it, and I can grab a tissue in seconds when he needs one. It turns sniffly moments into something simple instead of stressful. Total mom win.",
      author: "Katie",
      role: "Mom", 
      image: "/Testimonial_02.jpeg" 
    },
     {
      header: "No more digging for tissues",
      text: "As a nanny, Sniffle Pets has been an absolute lifesaver — no more digging for tissues, no more mess.",
      author: "Sandra",
      role: "Nanny", 
      image: "/Testimonial_01.jpg" 
    },
    {
      header: "Comfort when kids need it most",
      text: "We love Sniffle Pets! Having tissues right there when my child needs them makes sniffles and tears feel more manageable and a lot more comforting.",
      author: "Leah",
      role: "Mom",
      image: "/Testimonial_03.jpg" 
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        
        {/* --- Header Area --- */}
        <div className="testimonial-header">
          <span className="section-tag" style={{ marginBottom: '20px' }}>The Buzz Is Growing</span>
          <h2>
            <span className="highlight-text">
              <img src="/sniffle_pets_logo.png" alt="Sniffle Pets" className="heading-logo" />
              <span>ARE WINNING HEARTS EVERYWHERE</span>
            </span>
          </h2>
        </div>

        {/* --- The Grid of Reviews --- */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="quote-icon">❝</div>
              <h4 className="review-header">{review.header}</h4>
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-footer">
                
                {/* Image Wrapper (175px square) */}
                <div 
                  className="review-avatar-wrapper" 
                  onClick={() => setPreviewImage(review.image)}
                  title="Click to view full image"
                >
                  <img 
                    src={review.image} 
                    alt={review.author} 
                    className="review-avatar" 
                  />
                  {/* NEW PER REQUEST: Eye Icon Wrapper in the top-right */}
                  <div className="zoom-overlay">
                    {/* Unicode Eye Symbol */}
                    <span className="zoom-icon">👁</span>
                  </div>
                </div>
                
                <div className="review-author">
                  <strong>{review.author}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA Button --- */}
        <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <button className="btn btn-primary" onClick={onOpenModal}>
            Join the Waitlist
          </button>
          <span style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
            Be part of the first wave
          </span>
        </div>

      </div>

      {/* --- Image Preview Modal (Lightbox) --- */}
      {previewImage && (
        <div className="lightbox-overlay" onClick={() => setPreviewImage(null)}>
          {/* NEW PER REQUEST: Cut (X) Icon */}
          <button className="lightbox-close" onClick={() => setPreviewImage(null)}>
            &times;
          </button>
          <img 
            src={previewImage} 
            alt="Enlarged review" 
            className="lightbox-image" 
            onClick={(e) => e.stopPropagation()} // Prevents clicking the image from closing the modal
          />
        </div>
      )}
    </section>
  );
};

export default Testimonials;
