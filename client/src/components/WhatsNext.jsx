import React from 'react';
import { UserPlus, BellRing, Gift } from 'lucide-react';

const WhatsNext = ({ onOpenModal }) => {
  const steps = [
    {
      title: 'Sign Up Today',
      description: 'Join our waitlist with your email to secure your spot.',
      stepNumber: '1',
      // Using Lucide React for a clean, professional look
      icon: <UserPlus size={42} color="var(--primary, #d93846)" strokeWidth={1.5} />
    },
    {
      title: 'Get Notified at Launch',
      description: 'We’ll send you a friendly reminder on launch day.',
      stepNumber: '2',
      icon: <BellRing size={42} color="var(--primary, #d93846)" strokeWidth={1.5} />
    },
    {
      title: 'Grab Early-Bird Rewards',
      description: 'Back early to unlock exclusive Kickstarter perks.',
      stepNumber: '3',
      icon: <Gift size={42} color="var(--primary, #d93846)" strokeWidth={1.5} />
    }
  ];

  return (
    <section className="roadmap-section">
      <div className="container">
        
        <h2 className="section-title">What’s Next?</h2>

        <div className="steps-wrapper">
          {/* This line visually connects the steps on desktop */}
          <div className="connecting-line"></div>
          
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="step-card" key={index}>
                <div className="step-number">{step.stepNumber}</div>
                
                <div className="step-icon">
                  {step.icon}
                </div>
                
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="cta-wrapper">
          <button className="btn btn-primary big-btn energetic-pulse" onClick={onOpenModal}>
            Join the Waitlist
          </button>
          <span className="cta-subtitle">
            Limited Early Bird spots available
          </span>
        </div>

      </div>
    </section>
  );
};

export default WhatsNext;
