import React, { useState, useRef } from 'react';
import './MediaGrid.scss';

const MediaGrid = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);


  const handlePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
     <div className="media-grid">
        <div className="video-container" onClick={handlePlayPause}>
          <video ref={videoRef} className="video" src={src} />
          {!playing && (
            <div className="play-button">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="rgba(0, 0, 0, 0.5)" />
                <path d="M10 8L16 12L10 16V8Z" fill="white" />
              </svg>
            </div>
          )}
        </div>
    </div>
    </>
  );
};

export default MediaGrid;
