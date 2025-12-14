import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ user }) => {
  const defaultUser = {
    name: "Marko Marković",
    title: "Senior React & Node.js Developer",
    location: "Belgrade, Serbia",
    rating: 4.9,
    jobsCompleted: 45,
    earnings: "30k+",
    profilePicture: 'https://via.placeholder.com/150',
    verified: true,
  };
  
  const data = user || defaultUser;

  return (
    <div className="profile-header-container">
      <div className="profile-top-section">
        <img src={data.profilePicture} alt={data.name} className="profile-pic" />
        <div className="profile-info">
          <h1 className="profile-name">{data.name}</h1>
          <p className="profile-title">{data.title}</p>
          <p className="profile-location">📍 {data.location}</p>
        </div>
      </div>
      
      <div className="profile-stats-bar">
        <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{data.rating} Rating</span>
        </div>
        <div className="stat-item">
            <span className="stat-icon">💼</span>
            <span className="stat-value">{data.jobsCompleted} Jobs Done</span>
        </div>
        <div className="stat-item">
            <span className="stat-icon">💲</span>
            <span className="stat-value">Earned ${data.earnings}</span>
        </div>
        <div className={`stat-item verification ${data.verified ? 'verified' : ''}`}>
            {data.verified ? 'ID Verified ✓' : 'ID Required'}
        </div>
      </div>

      <div className="profile-action-btns">
          <button className="contact-btn">Invite to Job</button>
          <button className="favorite-btn">🤍 Save</button>
      </div>
    </div>
  );
};

export default ProfileHeader;