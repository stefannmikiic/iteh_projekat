import React from 'react';
import { useParams } from 'react-router-dom';
import '../components/Jobs/JobDetailsPage.css';

const JobDetailsPage = () => {
  const { id } = useParams(); // 👈 OVO JE KLJUČ

  const job = {
    title: "Senior React Developer for Fintech Startup",
    description: "We are a fast-growing fintech startup looking for a dedicated Senior React Developer...",
    skills: ["ReactJS", "TypeScript", "Redux", "GraphQL"],
    scope: "Medium (3-6 months)",
    budget: "$50 - $75/hr",
    clientInfo: {
      rating: 4.8,
      jobsPosted: 15,
      hires: 10,
      location: "New York, USA",
    },
    jobId: id
  };

  return (
    <div className="job-details-page-layout">
      <div className="job-details-column">
        <h1 className="job-detail-title">{job.title}</h1>
        <p className="job-posted-time">Job ID: {job.jobId}</p>

        <section className="detail-section">
          <h3>Description</h3>
          <p>{job.description}</p>
        </section>
      </div>
    </div>
  );
};

export default JobDetailsPage;
