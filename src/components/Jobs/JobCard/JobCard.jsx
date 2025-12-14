import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';

const JobCard = ({ job }) => {
  // Fiktivni podaci o poslu
  const defaultJob = {
    id: 1, // obavezno da link funkcioniše
    title: "React Developer for E-commerce Platform",
    description:
      "Looking for a skilled React developer to build and maintain the front-end of our growing e-commerce application. Must be proficient in hooks, Redux/Context, and responsive design.",
    budget: "Fixed Price - $1,500",
    experience: "Intermediate",
    timePosted: "30 minutes ago",
    skills: ["ReactJS", "JavaScript", "Redux", "SCSS", "API Integration"],
    proposals: "5 to 10 proposals",
  };

  const data = job || defaultJob;

  return (
    <div className="job-card-container">
      <div className="job-header">
        <Link to={`/job/${data.id}`} className="job-title-link">
          <h3 className="job-title">{data.title}</h3>
        </Link>
        <button className="save-job-btn">❤️</button>
      </div>

      <div className="job-details-meta">
        <span className="detail-item">{data.budget}</span>
        <span className="detail-item">{data.experience} Level</span>
        <span className="detail-item">{data.timePosted}</span>
      </div>

      <p className="job-description">
        {data.description.slice(0, 150)}...
        <Link to={`/job/${data.id}`} className="read-more">
          more
        </Link>
      </p>

      <div className="job-skills-list">
        {data.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <div className="job-footer">
        <span className="proposals-count">Proposals: {data.proposals}</span>
      </div>
    </div>
  );
};

export default JobCard;
