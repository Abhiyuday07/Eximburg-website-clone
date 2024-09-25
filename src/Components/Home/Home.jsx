import React, { useEffect, useState } from 'react';
import './Home.css';
import Services from './Services';
import Testimonial from './Testimonial';
import Blogs from './Blogs';
import One from './One';
import Video from './Video';
const pages = [
  {
    image: "https://api.eximburg.in/public/banner/file_1813976415.png",
    title: "EXIMBURG IS WELL KNOWN NAME IN INDUSTRY FOR PREMIUM QUALITY AYURVEDIC PRODUCTS",
    description: "We provide pre and post sales service to boost your business",
  },
  {
    image: "https://api.eximburg.in/public/banner/file_2036976839.jpg", 
    title: "EXIMBURG PROVIDES BEST HERBAL PRODUCTS IN THE MARKET",
    description: "We guarantee 100% natural ingredients for a healthy lifestyle",
  },
  {
    title: "YOUR TRUSTED PARTNER IN NATURAL HEALTHCARE SOLUTIONS",
    description: "Empowering lives with the purity of nature and quality products",
  },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 4000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
     <div className="home">
      <div
        className="content"
        style={{ backgroundImage: `url(${pages[currentPage].image})` }}
      >
        <div className="text-content">
          <h1>{pages[currentPage].title}</h1>
          <p>{pages[currentPage].description}</p>
        </div>
      </div>
      <div className="dots">
        {pages.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
          ></span>
        ))}
      </div>
    </div>
    <Video/>
    <Services/>
    <One/>
    <Testimonial/>
    <Blogs/>
    </>
   
  );
};

export default Home;
