import React, { useState } from 'react';

const VideoSection = ({ onOpenModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);


  // Cloudinary URL with q_auto and f_auto added for massive compression
  const videoUrl = "https://res.cloudinary.com/dxenaq8ty/video/upload/q_auto,f_auto/v1772664985/0302_pwgh5y.mp4";
  return (
    <section className="video-section" id="how-it-works">
      {/* Decorative background glow */}
      <div className="video-glow-effect"></div>

      <div className="container video-container">

        {/* Header Content */}
        <div className="video-header-content">
          <span className="section-tag-light">Watch It in Action</span>
          
          {/* UPDATED: Black font for "From" and "to", Multi-color for "Sniffles" and "Smiles" */}
          <h2 className="multi-color-title">
            <span>From </span>
            <span className="colorful-word">
              <span style={{color: '#E31E24'}}>S</span>
              <span style={{color: '#4C6F13'}}>n</span>
              <span style={{color: '#F9A01B'}}>i</span>
              <span style={{color: '#0B2351'}}>f</span>
              <span style={{color: '#1A3668'}}>f</span>
              <span style={{color: '#C1272D'}}>l</span>
              <span style={{color: '#F15A24'}}>e</span>
              <span style={{color: '#E31E24'}}>s</span>
            </span>
            <span> to </span>
            <span className="colorful-word">
              <span style={{color: '#4C6F13'}}>S</span>
              <span style={{color: '#F9A01B'}}>m</span>
              <span style={{color: '#0B2351'}}>i</span>
              <span style={{color: '#1A3668'}}>l</span>
              <span style={{color: '#C1272D'}}>e</span>
              <span style={{color: '#F15A24'}}>s</span>
            </span>
          </h2>
        </div>

        {/* The Video Player Wrapper */}
        <div className="video-wrapper">
          {!isPlaying ? (
            <>
              {/* Background Thumbnail */}
              <div className="video-thumbnail">
               {/* <img
                  src="https://res.cloudinary.com/dxenaq8ty/video/upload/q_auto,f_auto/v1772664985/0302_pwgh5y.jpg"
                  alt="Sniffle Pets Video Preview"
                  className="video-thumb-img"
                /> */}
                <div className="video-overlay"></div>
              </div>

              {/* The Play Button */}
              <button className="play-button" onClick={() => setIsPlaying(true)}>
                <span className="play-icon">▶</span>
              </button>
            </>
          ) : (
            /* Active Video Player */
            <video
              className="video-player-element"
              controls
              autoPlay
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* CTA Button */}
        <div className="video-cta-container">
          {/* Changed btn-white to btn-primary since background is now white */}
          <button className="btn btn-primary big-btn" onClick={onOpenModal}>
            Join the Waitlist
          </button>
          <p className="spam-note-dark">Be first to access exclusive Early Bird pricing at launch</p>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
