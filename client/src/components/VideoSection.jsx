import React, { useState, useRef } from 'react';

const VideoSection = ({ onOpenModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Cloudinary URL with q_auto and f_auto added for massive compression
  const videoUrl = "https://res.cloudinary.com/dxenaq8ty/video/upload/q_auto,f_auto/v1772664985/0302_pwgh5y.mp4";
  
  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play(); // Triggers play immediately when the overlay is clicked
    }
  };

  return (
    <section className="video-section" id="how-it-works">
      {/* Decorative background glow */}
      <div className="video-glow-effect"></div>

      <div className="container video-container">

        {/* Header Content */}
        <div className="video-header-content">
          <span className="section-tag-light">Watch It in Action</span>
          
          <h2 className="multi-color-title">
            <span>From </span>
            <span className="colorful-word">
              <span style={{color: '#E31E24'}}>S</span>
              <span style={{color: '#4C6F13'}}>n</span>
              <span style={{color: '#F9A01B'}}>i</span>
              <span style={{color: '#193365'}}>f</span>
              <span style={{color: '#193365'}}>f</span>
              <span style={{color: '#C1272D'}}>l</span>
              <span style={{color: '#F15A24'}}>e</span>
              <span style={{color: '#F9A01B'}}>s</span>
            </span>
            <span> to </span>
            <span className="colorful-word">
              <span style={{color: '#4C6F13'}}>S</span>
              <span style={{color: '#F9A01B'}}>m</span>
              <span style={{color: '#193365'}}>i</span>
              <span style={{color: '#E31E24'}}>l</span>
              <span style={{color: '#F15A24'}}>e</span>
              <span style={{color: '#F9A01B'}}>s</span>
            </span>
          </h2>
        </div>

        {/* The Video Player Wrapper */}
        <div className="video-wrapper" style={{ position: 'relative' }}>
          
          <video
            ref={videoRef}
            className="video-player-element"
            controls={isPlaying} // Only show native controls after playing starts
            playsInline
            preload="metadata"
            style={{ width: '100%', display: 'block' }}
          >
            {/* Adding #t=0.001 grabs the very first frame of the video to act as a thumbnail */}
            <source src={`${videoUrl}#t=0.001`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Play Button and Overlay */}
          {!isPlaying && (
            <div 
              className="video-overlay" 
              onClick={handlePlayClick}
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: 'rgba(0,0,0,0.2)' // Optional: slightly darkens the thumbnail
              }}
            >
              <button className="play-button" onClick={handlePlayClick}>
                <span className="play-icon">▶</span>
              </button>
            </div>
          )}

        </div>

        {/* CTA Button */}
        <div className="video-cta-container">
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
