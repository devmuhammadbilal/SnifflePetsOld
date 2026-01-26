import React from 'react';

const MeetThePets = ({ onOpenModal }) => {
  const pets = [
    { name: 'Frog' },
    { name: 'Pig' },
    { name: 'Lion' },
    { name: 'Ladybug' },
    { name: 'Cow' },
    { name: 'Monkey' }
  ];

  return (
    <section className="meet-pets-section">
      <div className="container meet-pets-container">
        
        {/* Left Side: Text Content */}
        <div className="meet-pets-text">
          <h2>Meet the Sniffle Pets</h2>
          <p>
            Sniffle Pets come in six adorable designs — there’s a perfect cuddly friend for every child.
          </p>

          {/* The Animal List as Tags */}
          <div className="pet-tags-wrapper">
            {pets.map((pet, index) => (
              <span key={index} className="pet-tag">
                {pet.name}
              </span>
            ))}
          </div>

          <button className="btn btn-primary" onClick={onOpenModal}>
            Be First in Line for Sniffle Pets
          </button>
        </div>

        {/* Right Side: Visual */}
        <div className="meet-pets-image">
          {/* FIX: Removed the placeholder div and fixed the path */}
          <img 
            src="/MeetSniffleSection.jpg" 
            alt="Group of children wearing Sniffle Pets" 
            className="pets-real-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default MeetThePets;