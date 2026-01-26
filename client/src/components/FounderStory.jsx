import React from 'react';

const FounderStory = () => {
  return (
    <section id="story" className="founder-section">
      <div className="container founder-container">
        
        {/* Left Side: The Story Text */}
        <div className="founder-text">
          {/* Decorative Quote Icon for Storytelling Vibe */}
          <div className="story-badge">Our Journey</div>
          
          <h2 className="founder-headline">
            Hi, I’m Lisa Trifiro.
          </h2>
          
          <p className="founder-body">
            I’ve always loved creating things that make everyday life easier and a little
            brighter. <strong>Sniffle Pets</strong> started as a simple, fun idea — what if kids could have a cuddly 
            animal friend that also kept tissues close at hand?
          </p>
          
          <p className="founder-body">
            What began as a sketch quickly grew into something bigger: a way to bring comfort, 
            practicality, and a smile to every child, parent, and teacher. Sniffle Pets are 
            more than just wristbands — they’re cuddly friends with a purpose.
          </p>

          <div className="signature-block">
            <p className="founder-quote">
              "Because every sniffle deserves a smile."
            </p>
            <div className="founder-name">
              — Lisa Trifiro, Founder
            </div>
          </div>
        </div>

       {/* Right Side: The Photo */}
        <div className="founder-image-wrapper">
          {/* Image is scaled in CSS to create the "Zoom In" effect */}
          <img 
            src="/Sniffle_StorySection.jpg" 
            alt="Lisa Trifiro with Sniffle Pets" 
            className="founder-real-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default FounderStory;