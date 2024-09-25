import React from "react";
import "./AboutUs.css";
import Abtexm from "./Abtexm";
import Card from "./Card";

const AboutUs = () => {
  return (
    <>
     <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-heading">ABOUT US</h1>
        <h2 className="about-us-subheading">EXIMBURG</h2>
      </div>
    </div>
    <Abtexm/>
    <Card/>
    </>
   
  );
};

export default AboutUs;
