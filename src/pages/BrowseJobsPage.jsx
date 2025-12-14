// BrowseJobsPage.jsx
import React from 'react';
import FilterSidebar from '../components/Feed/FilterSidebar/FilterSidebar.jsx';
import JobCard from '../components/Jobs/JobCard/JobCard.jsx';
import './CSS/BrowseJobsPage.css';

// Fiktivni poslovi
const jobData = [
  {
    id: 1,
    title: "UI/UX Designer Needed",
    description: "We are looking for a UI/UX designer to improve the user experience of our platform.",
    budget: "$500 - $1000",
    experience: "Intermediate",
    timePosted: "2 hours ago",
    skills: ["Figma", "Adobe XD", "Prototyping"]
  },
  {
    id: 2,
    title: "Node.js Backend Specialist",
    description: "Looking for a Node.js developer to build and maintain our backend services.",
    budget: "$30 - $50/hr",
    experience: "Senior",
    timePosted: "1 day ago",
    skills: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Frontend React Developer",
    description: "React developer needed to implement responsive UI components for our dashboard.",
    budget: "$25 - $40/hr",
    experience: "Intermediate",
    timePosted: "3 days ago",
    skills: ["ReactJS", "Redux", "CSS Modules"]
  },
  {
    id: 4,
    title: "Fullstack Developer for E-commerce",
    description: "We need a fullstack developer with experience in React and Node.js for our e-commerce project.",
    budget: "$1500 Fixed",
    experience: "Senior",
    timePosted: "5 hours ago",
    skills: ["ReactJS", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 5,
    title: "Mobile App UI/UX Designer",
    description: "Design intuitive mobile app screens for iOS and Android platforms.",
    budget: "$600 - $1200",
    experience: "Intermediate",
    timePosted: "1 hour ago",
    skills: ["Figma", "Sketch", "Prototyping"]
  }
];

const BrowseJobsPage = () => {
  return (
    <div className="jobs-page-layout">
      <div className="sidebar-area">
        <FilterSidebar />
      </div>

      <div className="job-list-area">
        <h1>Jobs Found ({jobData.length})</h1>
        {jobData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default BrowseJobsPage;
