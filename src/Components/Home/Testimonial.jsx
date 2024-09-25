import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    content: 'I want to share one of the incident of eximburg work ethics. I am the distributor of eximburg product in south region. I placed order of 2 lac rs but when i get the shipment i found it damaged during transportation so i complaint to eximburg. ',
    name: 'Naranya',
    agency: 'S.R Enterprises(Banglore)',
  },
  {
    content: 'Eximburg helped my business grow exponentially by providing valuable market insights and potential leads. It\'s a game-changer for businesses in competitive markets.',
    name: 'Ravi',
    agency: 'Tech Solutions(Mumbai)',
  },
  {
    content: 'I am extremely satisfied with Eximburg\'s services. They gave me the support I needed to expand my business into new markets. Their team is very professional and helpful.',
    name: 'Priya',
    agency: 'Alpha Marketing(Delhi)',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Testimonial</h2>
      <div className="testimonial-content">
        <button onClick={handlePrev} className="arrow left-arrow">{'<'}</button>
        <div className="testimonial-text">
          <p>{testimonials[currentIndex].content}</p>
          <p className="testimonial-name">{testimonials[currentIndex].name}</p>
          <p className="testimonial-agency">{testimonials[currentIndex].agency}</p>
        </div>
        <button onClick={handleNext} className="arrow right-arrow">{'>'}</button>
      </div>
      <div className="testimonial-pagination">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
