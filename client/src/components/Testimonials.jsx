import React from 'react';

const Testimonials = ({ onOpenModal }) => {
  const reviews = [
    {
      text: "My daughter loves the Frog — she calls it her little buddy and always has tissues on hand.",
      author: "Emily",
      role: "Mom of 2",
      image: "/emily.jpg" // REPLACE WITH YOUR IMAGE FILE
    },
    {
      text: "Perfect for my classroom. The kids think they’re fun, and it saves me from running around with tissues all day.",
      author: "Ms. Ramirez",
      role: "2nd Grade Teacher",
      image: "/msrem.jpg" // REPLACE WITH YOUR IMAGE FILE
    },
    {
      text: "The lion makes my son feel brave — and I love that he always has tissues ready.",
      author: "Sarah",
      role: "Mom of 3",
      image: "/sarah.jpg" // REPLACE WITH YOUR IMAGE FILE
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        
        {/* Headline */}
        <h2>Loved by Parents & Teachers Already</h2>
        
        {/* Subtext with "Waitlist Count" Highlight */}
        <p className="waitlist-subtext">
          <span className="count-badge">Over 300</span> parents & teachers are already on our waitlist!
        </p>

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
        <div style={{ marginTop: '50px' }}>
          <button className="btn btn-primary" onClick={onOpenModal}>
            Get Early Access to Sniffle Pets
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;