import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="upwork-header-container">
      <div className="upwork-header-content">
        <div className="header-left">
          <Link to="/" className="upwork-logo">
            <span className="u-icon">U</span>pwork
          </Link>

          <nav className="header-nav">
            <Link to="/browse-talent" className="nav-link">Find Talent</Link>
            <Link to="/jobs" className="nav-link">Find Work</Link>
            <Link to="/why-upwork" className="nav-link">Why Upwork?</Link>
          </nav>
        </div>

        <div className="header-right">
          <button className="icon-btn" aria-label="Search"><SearchIcon /></button>
          <button className="icon-btn menu-toggle" onClick={toggleMenu} aria-label="Menu">
            <MenuIcon />
          </button>
          <Link to="/login" className="login-link">Log In</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>

      {/* Mobilni meni */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/browse-talent" className="nav-link" onClick={() => setMenuOpen(false)}>Find Talent</Link>
        <Link to="/jobs" className="nav-link" onClick={() => setMenuOpen(false)}>Find Work</Link>
        <Link to="/why-upwork" className="nav-link" onClick={() => setMenuOpen(false)}>Why Upwork?</Link>
        <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Log In</Link>
        <Link to="/signup" className="nav-link signup-mobile" onClick={() => setMenuOpen(false)}>Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
