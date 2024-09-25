import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section locate-us">
          <h3>Locate Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="300"
            height="200"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        <div className="footer-section connect">
          <h3>Connect with us</h3>
          <p>Corporate Office - <br />
            Shubham Complex, 2nd & 3rd floor, Aai Mata Rd, <br />
            near SMC health center, opp. D R World, <br />
            Parvat Patiya, Surat, Gujarat-395010
          </p>
          <p>Manufacturing Plant - <br />
            150, 3rd Floor, Amrut Udyog Nagar, Kamrej, Surat Gujarat - 394185 INDIA
          </p>
          <p>+91-7096553300</p>
          <p>jaideep.eximburg@gmail.com</p>
          <p>Monday To Saturday: 10 AM To 6 PM - Closed on Sunday & Bank Holiday</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="Facebook" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=80&id=UkEaJB8QQORN&format=png" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="footer-section categories">
          <h3>Categories</h3>
          <ul>
            <li>Third Party Ayurvedic Beauty Products</li>
            <li>Third Party Cosmetic Beauty Products</li>
            <li>Face Care</li>
            <li>Hair Care</li>
            <li>Men's Care</li>
            <li>Personal Care</li>
          </ul>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/brands">Our brands</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright - Eximburg International Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
