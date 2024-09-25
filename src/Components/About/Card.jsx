import React from 'react';
import './Card.css';  // Importing the CSS file for styling

const Card = () => {
  const cardsData = [
    { title: 'Business Concept', content: 'To Provide Research based Innovative health beneficial products.' },
    { title: 'Global Presence', content: 'India, New Zealand, United Kingdom, Canada & South Africa and Eastern Africa.' },
    { title: 'Our Mission', content: 'To contribute in creating Health & De-Addictive nation. To be world class by being leaders in our fields of business, we aim to deliver superior quality like our leading products.' },
    { title: 'Our Vision', content: 'To become a leading trustable supplier of health beneficial products across the world by 2030. In our endeavor to achieve our goal, we expect robust support from our consumers.' },
    { title: 'Our Core Values', content: 'Integrity, Innovation, Delivering on our promises. Always exceeding expectations. Treating everyone with respect and dignity. Our Organization is strongly believed into building long term customer relations and trust.' },
    { title: 'Team Work', content: 'Together we can achieve the impossible is our belief. Our success is a result of our teamwork. We have experts from the field of management, marketing, IT, content, & various other disciplines.' }
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-content">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
