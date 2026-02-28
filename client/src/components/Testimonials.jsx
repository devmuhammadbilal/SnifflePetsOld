import React from 'react';

const Testimonials = ({ onOpenModal }) => {
  const reviews = [
    {
      text: "Sniffle Pets has been a total game changer for us. My son actually wants to wear it, and I can grab a tissue in seconds when he needs one. It turns sniffly moments into something simple instead of stressful. Total mom win.",
      author: "Katie",
      role: "mom of one",
      image: "/Testimonial_02.jpeg" // REPLACE WITH YOUR IMAGE FILE
    },
     {
      text: "As a nanny, Sniffle Pets has been an absolute lifesaver — no more digging for tissues, no more mess.",
      author: "Sandra",
      role: "Mom of 2",
      image: "/Testimonial_01.jpeg" // REPLACE WITH YOUR IMAGE FILE
    },
    {
      text: "We love Sniffle Pets! Having tissues right there when my child needs them makes sniffles and tears feel more manageable and a lot more comforting.",
      author: "Leah",
      role: "Mom",
      image: "/Testimonial_03.jpeg" // REPLACE WITH YOUR IMAGE FILE
    }
    
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        
        {/* --- UPDATED: Attractive Header Area --- */}
        <div className="testimonial-header">
          <span className="section-tag" style={{ marginBottom: '20px' }}>Community Love</span>
          <h2>
            ALREADY WINNING OVER <br className="hide-mobile" />
            <span className="highlight-text">PARENTS, TEACHERS, & KIDS</span>
          </h2>
          <p className="waitlist-subtext">
            <strong>300+</strong> have already joined the waitlist
          </p>
        </div>
        {/* --------------------------------------- */}

        {/* The Grid of Reviews */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              
              {/* Quote Icon */}
              <div className="quote-icon">❝</div>
              
              {/* Review Text */}
              <p className="review-text">"{review.text}"</p>
              
              {/* Author Section (Image + Text) */}
              <div className="review-footer">
                <img 
                  src={review.image} 
                  alt={review.author} 
                  className="review-avatar" 
                />
                <div className="review-author">
                  <strong>{review.author}</strong>
                  <span>{review.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <button className="btn btn-primary" onClick={onOpenModal}>
            Join the Waitlist
          </button>
          <span style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
            Be part of the first wave
          </span>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
