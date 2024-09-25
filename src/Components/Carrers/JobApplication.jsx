import React, { useState } from 'react';
import './JobApplication.css'; // Add styles here

const JobApplication = ({ position }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission here (send to API or backend)
  };

  return (
    <div className="job-application-container">
      <h2 className="title">Job Application</h2>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label>Position</label>
          <input type="text" value={position} readOnly className="form-control" />
        </div>
        <div className="form-group">
          <label>Name*</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label>Phone*</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label>Upload CV*</label>
          <input 
            type="file" 
            name="file" 
            onChange={handleFileChange} 
            required 
            className="form-control" 
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default JobApplication;
