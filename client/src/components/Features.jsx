import React from 'react';

const Features = ({ onOpenModal }) => {
  const benefits = [
    {
      title: 'Universal Wristband Fit',
      text: 'Adjustable, soft, and comfy for kids of all ages.',
      image: '/feature_image_01.jpg' 
    },
    {
      title: 'Cute & Comforting',
      text: 'Turns little sniffles into big smiles with cuddly plush pets.',
      image: '/feature_image_02.jpg' 
    },
    {
      title: 'Always Prepared',
      text: 'Keeps tissues close when kids need them most.',
      image: '/feature_image_03.jpg' 
    },
    {
      title: 'Simple & Convenient',
      text: 'Easy to refill, machine-washable, ready for daily adventures.',
      image: '/feature_image_04.jpg' 
    }
  ];

  return (
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
            Designed by parents, approved by teachers, loved by kids.
          </p>
        </div>
        
        {/* 4-Column Grid (Images will be smaller and fit in one row) */}
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
  );
};

export default Features;
