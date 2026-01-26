import React from 'react';

const Features = ({ onOpenModal }) => {
  const benefits = [
    {
      title: 'Universal Wristband Fit',
      text: 'Adjustable and comfy for kids of all ages.',
      image: '/feature_image_01.jpg' // RE PLACE WITH YOUR IMAGE FILE NAME
    },
    {
      title: 'Cute & Comforting',
      text: 'Turns little sniffles into big smiles with cuddly plush pets.',
      image: '/feature_image_02.jpg' // REPLACE WITH YOUR IMAGE FILE NAME
    },
    {
      title: 'Always Prepared',
      text: 'Keeps tissues close when kids need them most.',
      image: '/feature_image_03.jpg' // REPLACE WITH YOUR IMAGE FILE NAME
    },
    {
      title: 'Simple & Convenient',
      text: 'Easy to refill, machine-washable, ready for daily adventures.',
      image: '/feature_image_04.jpg' // REPLACE WITH YOUR IMAGE FILE NAME
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        
        {/* Headline */}
        <h2 className="section-title">
          Why Families & Classrooms Love <span style={{color: 'var(--primary)'}}>Sniffle Pets</span>
        </h2>
        
        {/* The Grid of Cards */}
        <div className="features-grid">
          {benefits.map((item, index) => (
            <div className="feature-card" key={index}>
              
              {/* IMAGE CONTAINER */}
              <div className="feature-img-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="feature-img" 
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="features-cta">
          <button className="btn btn-primary" onClick={onOpenModal}>
            Get Early Access to Sniffle Pets
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;