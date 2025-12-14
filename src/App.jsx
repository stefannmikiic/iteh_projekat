// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Layout/Header/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import BrowseJobsPage from './pages/BrowseJobsPage.jsx';
import JobDetailsPage from './pages/JobDetailsPage.jsx';
import WhyUpworkPage from './pages/WhyUpworkPage.jsx';
import BrowseTalentPage from './pages/BrowseTalentPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/jobs" element={<BrowseJobsPage />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
          <Route path="/why-upwork" element={<WhyUpworkPage />} />
          <Route path="/browse-talent" element={<BrowseTalentPage />} />
          

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
