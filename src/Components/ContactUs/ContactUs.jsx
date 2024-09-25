import React from 'react';
import './ContactUs.css';  // Import the corresponding CSS file

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_LINK"  // Replace this with the actual embed link
            width="100%"
            height="385"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div className="form-section">
          <h3 className="form-heading">
            Let us help your business move forward.
          </h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Contact Number" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Your Pincode" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
