import React from 'react';
import './one.css';

const One = () => {
  const products = [
    {
      imgSrc: 'https://api.eximburg.in/public/upload/thridaaurvedic.jpg', // Replace with actual image paths
      title: 'Third Party Ayurvedic Beauty Products',
    },
    {
      imgSrc: 'https://api.eximburg.in/public/upload/thridparty.jpg',
      title: 'Third Party Cosmetic Beauty Products',
    },
    {
      imgSrc: 'https://api.eximburg.in/public/upload/facecare.jpg',
      title: 'Third Party Cosmetic Face Care',
    },
    {
      imgSrc: 'https://api.eximburg.in/public/upload/haircare.jpg',
      title: 'Third Party Cosmetic Hair Care',
    },
    {
      imgSrc: 'https://api.eximburg.in/public/upload/menscar.jpg',
      title: 'Third Party Cosmetic Men’s Care',
    },
    {
      imgSrc: 'https://api.eximburg.in/public/upload/personal-care.jpg',
      title: 'Third Party Cosmetic Personal Care',
    },
  ];

  return (
    <div className="container">
      <h2>Ayurvedic & Cosmetic Products Manufacturers In India</h2>
      <hr className="line" />
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imgSrc} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default One;
