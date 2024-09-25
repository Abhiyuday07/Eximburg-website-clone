import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogData = [
    {
      title: "How to Choose the Right Third Party Manufacturer for Your Beauty Products",
      image: "https://api.eximburg.in/public/blogs/file_138718626.png",
    },
    {
      title: "Third Party Cosmetics Manufacturing: The Smart Choice for Your Brand",
      image: "https://api.eximburg.in/public/blogs/file_1133221970.png",
    },
    {
      title: "Embrace Your Natural Glow: Tips for Enhancing Your Skin's Radiance",
      image: "https://api.eximburg.in/public/blogs/blog-1-img.webp",
    },
  ];

  return (
    <div className="blogs-container">
      <h2 className="blogs-heading">Our Blogs</h2>
      <div className="blogs-wrapper">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={`Blog ${index + 1}`} className="blog-image" />
            <h3 className="blog-title">{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
