import React from "react";
import './GalleryOne.css';

const events = [
  {
    image: "https://www.eximburg.com/static/media/15-aug-2022-1.f69c83ff8e0e564bd1ed.jpg", 
    title: "Celebrate Independence Day with Joy!"
  },
  {
    image: "https://www.eximburg.com/static/media/26-jan-1.4504a6dfd8cfeef7bce5.jpg", 
    title: "Come Together to Celebrate Unity on 26th Jan!"
  },
  {
    image: "https://www.eximburg.com/static/media/appreciation-1.e220bf3ee45464bd52c8.jpeg", 
    title: "Celebrating Employee Appreciation at Eximburg!"
  },
  {
    image: "https://www.eximburg.com/static/media/birthday-celebration-4.0046f364af5a027c5ba7.jpeg", 
    title: "Celebrating Birthdays at Eximburg: A Joyous Occasion!"
  },
  {
    image: "https://www.eximburg.com/static/media/fire-safety-training-1.aa571123adaee8099f0d.jpg", 
    title: "Fire Safety Training"
  },
  {
    image: "https://www.eximburg.com/static/media/goal-meeting-dinner-1.c85aad349e55e28f5b4f.jpeg", 
    title: "Celebrate Success: Year Goal Meeting and Dinner at Eximburg"
  },
  {
    image: "https://www.eximburg.com/static/media/safal-2022-1.b02f9d64f33b73664972.jpeg", 
    title: "Celebrating Excellence: Safal Eximburg's Award Ceremony"
  }
];

const GalleryOne = () => {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Social Events</h2>
      <div className="gallery-grid">
        {events.map((event, index) => (
          <div className="gallery-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <p className="event-title">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryOne;
