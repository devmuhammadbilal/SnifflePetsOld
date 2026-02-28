import React from 'react';

const FounderStory = () => {
  return (
    <section id="story" className="founder-section">
      <div className="container founder-container">
        
        {/* === LEFT SIDE: THE SCROLLING STORY TEXT === */}
        <div className="founder-text">
          {/* Decorative Tag */}
          <div className="story-badge">Our Story</div>
          
          <h2 className="founder-headline">
            Hi, I’m Lisa Trifiro
          </h2>
          
          <div className="founder-content">
            <p>
              <strong>Sniffle Pets</strong> began with a conversation between two creative moms, swapping ideas the way parents often do. Talking about kids, everyday life, and all the little moments that somehow turn into bigger challenges when you least expect them.
            </p>
            
            <p>
              Myla was part of that early spark. She created the very first prototype, a sweet crocheted idea inspired by the comfort kids find in something soft and familiar. That original concept planted the seed.
            </p>
            
            <p>
              But the idea kept growing.
            </p>

            <p>
              As a mom myself, I couldn’t help thinking about my own experience. When my boys were little and sick, I was constantly chasing down tissues, digging through bags or reaching for whatever was nearby. By the time I found one, the moment had already passed, and more often than not, my boys would end up wiping their noses with their hands or their clothes.
            </p>

            <p>
              Those sniffly moments happened everywhere. At home, in the car, at school, on outings, during travel. They always seemed to show up right in the middle of real life, when hands were already busy.
            </p>

            <p>
              I began thinking about how that original idea could evolve. How it could move from a comforting concept into something children and parents could actually use, wear, and keep close. I refined the design, focused on wearability and ease, and thoughtfully transformed that early inspiration into what Sniffle Pets are today.
            </p>

            <p className="emphasis-text">
              That’s when Sniffle Pets were born.
            </p>

            <p>
              Today, Sniffle Pets are designed for real life. They stay close, make tissues easy to reach, and offer comfort without interrupting the moment. They’re not just wristbands. They’re soft companions created to support children while making everyday sniffly moments easier for parents, teachers, and caregivers too.
            </p>
          </div>

          <div className="signature-block">
            <p className="founder-quote">
              "Because every sniffle deserves a smile."
            </p>
            <div className="founder-name">
              — Lisa Trifiro, Founder
            </div>
          </div>
        </div>

       {/* === RIGHT SIDE: THE STICKY PHOTO === */}
        <div className="founder-image-column">
          {/* NEW: We wrap both the image and border in this sticky container so they travel together! */}
          <div className="sticky-image-container">
            
            <div className="founder-image-wrapper">
              <img 
                src="/Sniffle_StorySection.jpg" 
                alt="Lisa Trifiro Founder of Sniffle Pets" 
                className="founder-real-img" 
              />
            </div>
            
            {/* Decorative offset border for premium feel */}
            <div className="image-offset-border"></div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderStory;
