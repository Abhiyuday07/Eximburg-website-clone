import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Services provided by Eximburg</h1>
      <div className="services-content">
        <div className="services-text">
          <h2>Third Party Manufacturing</h2>
          <p className="sub-heading">
            Our value products are the result of the combination of your requirements with our dedication to quality production.
          </p>
          <p>
            Our valuable products are the result of combining your requirements with our commitment to quality production. We manufacture a wide product range in different formats. Eximburg delivers well-developed products according to our customer requirements.
          </p>
          <ul>
            <li>We provide a diverse range of formats and compositions to meet the specific requirements of our valued clients.</li>
            <li>We offer free consultation and support to our clients in selecting products that align with market demands, maximizing business potential.</li>
            <li>Our team has extensive experience in developing products that align with market requirements and expectations.</li>
            <li>We offer pre- and post-sales services to enhance and uplift your business.</li>
            <li>After order confirmation, we handle the entire process from designing to dispatch, saving you time and energy.</li>
          </ul>

          {/* Centered Download Button */}
          <div className="download-btn-container">
            <a href="Eximburg-Document.pdf" download>
              <button className="download-btn">Download Catalogue</button>
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="services-image">
          <img
            src="https://www.eximburg.com/assets/third-party-mfg-image-BjjB_clL.jpg"
            alt="Third Party Manufacturing Process"
            className="third-party-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
