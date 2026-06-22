import React from 'react';
import ReactDOM from 'react-dom';


const ContactUsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // createPortal teleports the modal to document.body so it escapes the Navbar entirely
  return ReactDOM.createPortal(
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="contact-modal-close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
        
        <h2 className="contact-modal-title">Contact Us</h2>
        <p className="contact-modal-subtitle">Drop us a line and we'll get back to you soon.</p>
        
        <form className="contact-modal-form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact-modal-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          
          <div className="contact-modal-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="name@example.com" required />
          </div>
          
          <div className="contact-modal-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="How can we help?" required></textarea>
          </div>
          
          <button type="submit" className="contact-modal-submit-btn">Send Message</button>
        </form>
      </div>
    </div>,
    document.body // This tells React to render it at the very top level of the DOM
  );
};

export default ContactUsModal;
