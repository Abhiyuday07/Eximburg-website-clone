import React from 'react';
import './Navbar.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src="https://www.eximburg.com/static/media/nav-logo.383fdd26036840ef6a28.webp"  
          alt="Eximburg International Pvt. Ltd."
          className="logo"
        />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/our-brands">Our brands</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/certificate">Certificate</Link>
        <Link to="/contact-us">Contact us</Link>
      </nav>
      <div className="doc-icon">
        <a href="Swosh.pdf" download="Eximburg-Document.pdf">
          <FontAwesomeIcon icon={faFileAlt} size="2x" color="#FF7F00" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
