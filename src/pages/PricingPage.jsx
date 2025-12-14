import React from 'react';
import './PricingPage.css';

const PricingCard = ({ title, price, features, isFeatured, buttonText }) => (
  <div className={`pricing-card ${isFeatured ? 'featured' : ''}`}>
    <h3 className="card-title">{title}</h3>
    <div className="card-price-container">
        <span className="card-price">{price}</span>
        <span className="price-term">/month</span>
    </div>
    
    <button className="pricing-btn">{buttonText}</button>
    
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          {/* Fiktivna ikonica za kvačicu */}
          <span className="check-icon">✓</span> {feature}
        </li>
      ))}
    </ul>
  </div>
);

const PricingPage = () => {
  const plans = [
    {
      title: "Basic (Client)",
      price: "Free",
      features: ["Post jobs & hire easily", "Basic talent pool access", "2.5% fee on payments"],
      buttonText: "Get Started"
    },
    {
      title: "Plus (Client)",
      price: "$49",
      features: ["Dedicated talent sourcing", "Advanced analytics", "Priority customer support", "Lower service fees (1.5%)"],
      isFeatured: true,
      buttonText: "Choose Plan"
    },
    {
      title: "Business (Client)",
      price: "Custom",
      features: ["Managed services", "Dedicated account manager", "Custom reporting", "Payroll services"],
      buttonText: "Contact Sales"
    },
  ];

  return (
    <div className="pricing-page-container">
      <h1 className="pricing-main-title">Find the Right Plan for Your Business</h1>
      <p className="pricing-subtitle">
        Hire top-tier talent with plans built to suit your needs.
      </p>
      
      <div className="pricing-cards-grid">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;