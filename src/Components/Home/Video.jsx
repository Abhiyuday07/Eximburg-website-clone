import React, { useEffect, useState } from 'react';
import './Video.css'; // Import the CSS for styling

const videos = [
  { title: 'Swosh Lip Cream', url: 'https://api.eximburg.in/public/upload/thumb1.png' },
  { title: 'Dark Kesha Ayurvedic Oil', url: 'https://api.eximburg.in/public/upload/thumb3.png' },
  { title: 'Swosh Foaming Facewash', url: 'https://api.eximburg.in/public/upload/thumb2.png' },
  { title: 'Sample Video 4', url: 'https://api.eximburg.in/public/upload/thunb5.png' },
  { title: 'Sample Video 5', url: 'https://api.eximburg.in/public/upload/thunb5.png' },
  { title: 'Sample Video 6', url: 'https://api.eximburg.in/public/upload/thunb5.png' },
  { title: 'Sample Video 7', url: 'https://api.eximburg.in/public/upload/thunb5.png' },
  { title: 'Sample Video 8', url: 'https://api.eximburg.in/public/upload/thunb5.png' },
  { title: 'Sample Video 9', url: 'https://api.eximburg.in/public/upload/thunb5.png' },
  { title: 'Sample Video 10', url: 'https://api.eximburg.in/public/upload/thunb5.png' },
];

const Video = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-gallery">
      <h2 className="gallery-title">Video Gallery</h2>
      <div className="video-slider">
        <div className="video-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <iframe
                width="300"
                height="200"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
