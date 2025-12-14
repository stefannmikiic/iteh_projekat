import React from 'react';
import './TalentCard.css';

const TalentCard = ({ talent }) => {
  const defaultTalent = {
    id: 101,
    name: "Milica Jovanovic",
    title: "Senior Full Stack Developer (React, Node, AWS)",
    hourlyRate: 65,
    rating: 4.9,
    jobsCompleted: 35,
    location: "Novi Sad, Serbia",
    skills: ["ReactJS", "Node.js", "Express", "MongoDB", "AWS"],
    tagline: "Building scalable web applications with a focus on clean code and performance.",
    profilePicUrl: 'https://via.placeholder.com/80x80' // Fiktivna slika
  };

  const data = talent || defaultTalent;

  return (
    <div className="talent-card-container">
      <div className="talent-header">
        <img src={data.profilePicUrl} alt={data.name} className="talent-profile-pic" />
        <div className="talent-info">
          <h3 className="talent-name"><a href={`/profile/${data.id}`}>{data.name}</a></h3>
          <p className="talent-title">{data.title}</p>
          <p className="talent-location">📍 {data.location}</p>
        </div>
        <button className="save-talent-btn">🤍</button>
      </div>

      <div className="talent-details-meta">
        <span className="detail-item-talent">💲 ${data.hourlyRate}/hr</span>
        <span className="detail-item-talent">⭐ {data.rating} Rating ({data.jobsCompleted} Jobs)</span>
      </div>

      <p className="talent-tagline">{data.tagline}</p>

      <div className="talent-skills-list">
        {data.skills.map((skill, index) => (
          <span key={index} className="talent-skill-tag">{skill}</span>
        ))}
      </div>
      
      <div className="talent-actions">
          <button className="invite-btn">Invite to Job</button>
          <button className="profile-btn">View Profile</button>
      </div>
    </div>
  );
};

export default TalentCard;