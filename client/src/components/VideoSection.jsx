import React from 'react';

const VideoSection = ({ onOpenModal }) => {
  return (
    <section className="video-section" id="how-it-works">
      <div className="container">

        {/* Headline */}
        <h2>
          From Sniffles to Smiles — Watch How It Works
        </h2>

        {/* The Video Player Wrapper */}
        <div className="video-wrapper">
          {/* Background Thumbnail */}
          <div className="video-thumbnail">
            <img
              src="/video_thumb.jpg"
              alt="Video Preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* The Play Button Overlay */}
          <button className="play-button" onClick={() => alert("Video coming soon on Launch Day!")}>
            ▶
          </button>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: '40px' }}>
          <button className="btn btn-primary big-btn" onClick={onOpenModal}>
            Be First in Line for Sniffle Pets
          </button>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;