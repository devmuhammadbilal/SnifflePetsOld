import React from 'react';

const VideoSection = ({ onOpenModal }) => {
  return (
    <section className="video-section" id="how-it-works">
      {/* Decorative background glow */}
      <div className="video-glow-effect"></div>

      <div className="container video-container">

        {/* Header Content */}
        <div className="video-header-content">
          <span className="section-tag-white">See How It Works</span>
          
          <h2>From Sniffles to Smiles</h2>
        </div>

        {/* The Video Player Wrapper */}
        <div className="video-wrapper">
          {/* Background Thumbnail */}
          <div className="video-thumbnail">
            <img
              src="/video_thumb.jpg"
              alt="Sniffle Pets Video Preview"
              className="video-thumb-img"
            />
            <div className="video-overlay"></div>
          </div>

          {/* The Play Button */}
          <button className="play-button" onClick={() => alert("Video coming soon on Launch Day!")}>
            <span className="play-icon">▶</span>
          </button>
        </div>

        {/* CTA Button */}
        <div className="video-cta-container">
          <button className="btn btn-white big-btn" onClick={onOpenModal}>
            Join the Waitlist
          </button>
          <p className="spam-note-light">Limited spots available for early access</p>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
