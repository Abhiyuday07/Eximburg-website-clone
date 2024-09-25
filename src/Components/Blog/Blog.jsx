import React, { useState } from 'react';
import './Blog.css';
import Para from './Para';

const Blog = () => {
  const recentPosts = [
    { title: 'How to Choose the Right Third Party Manufacturer for Your Beauty Products', imgSrc: 'https://api.eximburg.in/public/blogs/file_138718626.png' },
    { title: 'Third Party Cosmetics Manufacturing: The Smart Choice for Your Brand', imgSrc: 'https://api.eximburg.in/public/blogs/file_1133221970.png' },
    { title: 'Embrace Your Natural Glow: Tips for Enhancing Your Skin\'s Radiance', imgSrc: 'https://api.eximburg.in/public/blogs/blog-1-img.webp' },
    { title: 'Vitamin C Face Serum: The Radiance Booster Your Skin Needs', imgSrc: 'https://api.eximburg.in/public/blogs/file_1716819831.webp' },
    { title: 'Beauty Apple Facewash: Unveiling the Freshness of Nature', imgSrc: 'https://api.eximburg.in/public/blogs/file_1716819727.webp' },
  ];
  const [selectedPost, setSelectedPost] = useState(recentPosts[0]);
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <>
    <div className="blog-container">
      <div className="blog-content">
        <h1>{selectedPost.title}</h1>
        <img src={selectedPost.imgSrc} alt="Blog Main" className="main-image" />
      </div>
      <div className="recent-posts">
        <h2>Recent Posts</h2>
        {recentPosts.map((post, index) => (
          <div 
            key={index} 
            className="recent-post-item" 
            onClick={() => handlePostClick(post)}
          >
            <img src={post.imgSrc} alt={post.title} />
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
    <Para/>
    </>
  );
};

export default Blog;
