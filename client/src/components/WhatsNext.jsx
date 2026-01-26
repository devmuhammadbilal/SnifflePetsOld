import React from 'react';

const WhatsNext = ({ onOpenModal }) => {
  const steps = [
    {
      title: 'Sign Up Today',
      description: 'Join our waitlist with your email to secure your spot.',
      stepNumber: '1'
    },
    {
      title: 'Get Notified at Launch',
      description: 'We’ll send you a friendly reminder on launch day.',
      stepNumber: '2'
    },
    {
      title: 'Grab Early-Bird Rewards',
      description: 'Back early to unlock exclusive Kickstarter perks.',
      stepNumber: '3'
    }
  ];

  return (
    <section className="roadmap-section">
      <div className="container">
        
        <h2 className="section-title">What’s Next?</h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              {/* The Number Badge (1, 2, 3) */}
              <div className="step-number">{step.stepNumber}</div>
              
              {/* Icon removed to clean emojis */}
              <div className="step-icon"></div>
              
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px' }}>
          <button className="btn btn-primary big-btn" onClick={onOpenModal}>
             Be First in Line for Sniffle Pets
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatsNext;