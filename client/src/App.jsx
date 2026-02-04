import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import EmailModal from './components/EmailModal';
import Navbar from './components/Navbar';
import Features from './components/Features';
import MeetThePets from './components/MeetThePets';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import FounderStory from './components/FounderStory';
import WhatsNext from './components/WhatsNext';
import JoinSquad from './components/JoinSquad';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  // 1. POPUP LOGIC
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('sniffle_popup_session');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setModalOpen(true);
        sessionStorage.setItem('sniffle_popup_session', 'true');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, []);

  // 2. SCROLL ANIMATION LOGIC (The "Professional" Touch)
  useEffect(() => {
    const revealElements = document.querySelectorAll('.feature-card, .review-card, .step-card, .section-title, .meet-pets-text, .founder-text, .video-wrapper');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 150; // Distance from bottom before showing

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    // Add 'reveal' class to all target elements initially
    revealElements.forEach((el) => el.classList.add('reveal'));

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Features onOpenModal={() => setModalOpen(true)} />
      <MeetThePets onOpenModal={() => setModalOpen(true)} />
      <VideoSection onOpenModal={() => setModalOpen(true)} />
     
      <FounderStory />
       <Testimonials onOpenModal={() => setModalOpen(true)} />
      <WhatsNext onOpenModal={() => setModalOpen(true)} />
      <JoinSquad />
      <Footer />
      {isModalOpen && <EmailModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default App;
