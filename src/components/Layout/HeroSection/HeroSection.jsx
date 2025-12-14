import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="upwork-hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          How work <span className="green-text">gets done.</span>
        </h1>
        <p className="hero-subtitle">
          Connect instantly with independent professionals and agencies.
        </p>

        <div className="search-bar-container">
          <input type="text" placeholder="Search for jobs or freelancers..." />
          <button className="search-btn">Search</button>
        </div>

        <div className="cta-buttons">
            <button className="cta-btn green-solid">Find Talent</button>
            <button className="cta-btn green-outline">Find Work</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;