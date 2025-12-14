import React from 'react';
import Header from '../components/Layout/Header/Header.jsx'; // Ako Header ide i ovde
import HeroSection from '../components/Layout/HeroSection/HeroSection.jsx';
import JobCard from '../components/Jobs/JobCard/JobCard.jsx'; // Testiranje kartice

const HomePage = () => {
  return (
    <div>
      {/* Header već može biti u App.js, ali za demonstraciju */}
      {/* <Header /> */} 
      <HeroSection />
      
      <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>Primeri Poslova</h2>
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default HomePage;