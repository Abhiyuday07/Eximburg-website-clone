import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import OurBrands from './Components/Brands/OurBrands'; 
import Home from './Components/Home/Home'; 
import Footer from './Components/Footer';
import Gallery from './Components/Gallery/Gallery';
import Careers from './Components/Carrers/Carrers';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/About/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Certificate from './Components/Certificate/Certificate';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-brands" element={<OurBrands />} />
           <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
