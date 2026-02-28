import React, { useState } from 'react';

const VideoSection = ({ onOpenModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Cloudinary URL with q_auto and f_auto added for massive compression
  const videoUrl = "https://res.cloudinary.com/dxenaq8ty/video/upload/q_auto,f_auto/v1772222510/How_to_use_Sniffle_Pets_Reel_1_dl9vmy.mp4";

  return (
    <section className="video-section" id="how-it-works">
      {/* Decorative background glow */}
      <div className="video-glow-effect"></div>

      <div className="container video-container">

        {/* Header Content */}
        <div className="video-header-content">
          <h2>From Sniffles to Smiles</h2>
          <span className="section-tag-white">Watch It in Action</span>
        </div>

        {/* The Video Player Wrapper */}
        <div className="video-wrapper">
          {!isPlaying ? (
            <>
              {/* Background Thumbnail */}
              <div className="video-thumbnail">
                {/* <img
                  src="https://res.cloudinary.com/dxenaq8ty/video/upload/q_auto,f_auto/v1772222510/How_to_use_Sniffle_Pets_Reel_1_dl9vmy.jpg"
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
          <button className="btn btn-white big-btn" onClick={onOpenModal}>
            Join the Waitlist
          </button>
          <p className="spam-note-light">Be first to access exclusive Early Bird pricing at launch</p>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
