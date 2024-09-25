import React from 'react';
import './One.css'; 

const One = () => {
  return (
    <div className="one-container">
      <h1 className="brands-title">Our Brands</h1>
      <div className="brand-content">
        <div className="brand-details">
          <h2>ROYAL SWAG</h2>
          <h3>What is Royal Swag?</h3>
          <p>
            Royal Swag is 100% Tobacco & Nicotine Free Herbal cigarette, with the composition from tulsi, green tea, cloves, etc.
          </p>
          <h3>Why Royal Swag?</h3>
          <p>
            Use as the best alternative to tobacco-based cigarettes. Those who would like to quit tobacco smoking also use it as health remedies for cold and cough.
          </p>
          <h3>Royal Swag for whom?</h3>
          <p>
            Beginner smokers, health-conscious people, those who would like to quit tobacco and smoking, and women who are health-conscious.
          </p>
          <h3>Available flavors?</h3>
          <p>Frutta, Clove, Mint.</p>
        </div>
        <div className="brand-image">
          <img src="https://www.eximburg.com/static/media/royal-swag.bef207f4d11b2a0d0742.webp" alt="Royal Swag" />
        </div>
      </div>
      <div className="brand-content swosh-content">
        <div className="brand-details">
          <h2>SWOSH</h2>
          <h3>SWOSH LOTION</h3>
          <p>
            SWOSH LOTION is made from 100% natural essential oils & extracts such as Aloe vera, Amla, Avocado, Betel leaf, Coconut, Green Tea, Jojoba, Lavang, Lemon Peel oil, Tulsi. It keeps hair healthy, dandruff-free, smooth, and strong. Its natural oil quality provides nourishment for hair and skin.
          </p>
          <h3>SWOSH LIP CREAM</h3>
          <p>
            SWOSH LIP CREAM is made from natural ingredient extracts such as clove oil, lavender oil, lemon oil, geranium oil, etc. It is useful for healthy lips, protecting lips from toxic and hot smoke of cigarettes, and rejuvenating smoker's dark lips.
          </p>
        </div>
        <div className="brand-image">
          <img src="https://www.eximburg.com/static/media/swosh.20d5dd548f0432a51dd9.webp" alt="SWOSH" />
        </div>
      </div>
    </div>
  );
};

export default One;
