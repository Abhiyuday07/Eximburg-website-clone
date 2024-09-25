import React from "react";
import './Gallery.css';
import GalleryOne from "./GalleryOne";

const Gallery = () => {
  return (
    <>
    <div className="gallery-container">
      <div className="banner">
        <img 
          src="https://www.eximburg.com/static/media/banner-bg-7.4cef77a9970d670a7612.jpg" 
          alt="Banner Background" 
          className="banner-image"
        />
        <div className="text-overlay">
          <h2 className="events-text">EVENTS AT</h2>
          <h1 className="eximburg-text">EXIMBURG</h1>
        </div>
      </div>
    </div>
    <GalleryOne/>
    </>
    
  );
};

export default Gallery;
