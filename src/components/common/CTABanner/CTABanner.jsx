import React from 'react';
import './CTABanner.css';

const CTABanner = ({ title, subtitle, btnText, link }) => {
  return (
    <div className="cta-banner-container">
      <div className="cta-content">
        <h2 className="cta-title">{title || "Ready to Start Your Project?"}</h2>
        <p className="cta-subtitle">{subtitle || "Find the talent you need or the job you want, quickly and securely."}</p>
        <a href={link || "/signup"} className="cta-btn-main">
          {btnText || "Get Started Today"}
        </a>
      </div>
    </div>
  );
};

export default CTABanner;