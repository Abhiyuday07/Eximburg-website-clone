import React, { useState } from 'react';
import './Carrerone.css';
import JobApplication from './JobApplication'; // Import the form

const Careerone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const startApplication = () => {
    setIsApplying(true);
  };

  if (isApplying) {
    return <JobApplication position="Sr. E-Commerce Executive" />;
  }

  return (
    <div className="career-container">
      <h2 className="title">Current Openings</h2>
      
      <div className="job-item">
        <button className="job-toggle" onClick={toggleOpen}>
          <span className="job-title">SR. E-COMMERCE EXECUTIVE</span>
          <span className="arrow">{isOpen ? '▲' : '▼'}</span>
        </button>
        
        {isOpen && (
          <div className="job-details">
            <p><strong>Office Address:</strong> PLOT NO: 150, 3rdFLOOR, AMRUT UDHYOGNAGAR...</p>
            <p><strong>Work Location:</strong> Surat, Gujarat</p>
            <p><strong>Office Timing:</strong> 9.30 AM TO 6 PM</p>
            <p><strong>Contact:</strong> 7383637388</p>
            <p><strong>Salary:</strong> 16K TO 26K</p>
            <p><strong>Description:</strong> Job description here...</p>
            <p><strong>Requirements:</strong> Requirements here...</p>
            <button className="apply-btn" onClick={startApplication}>Apply Now</button>
          </div>
        )}
      </div>

      <p className="apply-text">
        To apply share your CV at <a href="mailto:hr.eximburg@gmail.com">hr.eximburg@gmail.com</a>
      </p>
    </div>
  );
};

export default Careerone;
