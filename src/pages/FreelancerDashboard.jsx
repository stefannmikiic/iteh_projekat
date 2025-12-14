import React from 'react';
import './Dashboard.css';

const DashboardCard = ({ title, value, link, icon }) => (
    <div className="dashboard-stat-card">
        <div className="card-header">
            <span className="card-icon">{icon}</span>
            <h4 className="card-title">{title}</h4>
        </div>
        <p className="card-value">{value}</p>
        <a href={link} className="card-link">View Details →</a>
    </div>
);

const FreelancerDashboard = () => {
    const stats = [
        { title: "Available Connects", value: 50, link: "/connects", icon: "🔗" },
        { title: "Active Proposals", value: 5, link: "/proposals", icon: "📑" },
        { title: "Jobs In Progress", value: 2, link: "/contracts", icon: "✍️" },
        { title: "Weekly Earnings", value: "$1,250", link: "/reports", icon: "💰" },
    ];

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-welcome">Welcome Back, Marko!</h1>
            
            <section className="dashboard-stats-grid">
                {stats.map((stat, index) => (
                    <DashboardCard key={index} {...stat} />
                ))}
            </section>
            
            <section className="dashboard-feed">
                <h2>Jobs For You</h2>
                <p className="feed-info">Based on your skills and past activity.</p>
                {/* Ovde bi išle npr. tri JobCard komponente (kao brzi feed) */}
                <div className="quick-job-feed">
                    <p>Load JobCard components here...</p>
                    <a href="/browse-jobs" className="feed-link">See All Job Recommendations</a>
                </div>
            </section>

            <section className="dashboard-profile-complete">
                <h2>Profile Completion</h2>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{width: '75%'}}>75% Complete</div>
                </div>
                <p className="profile-tip">Complete your portfolio to unlock more visibility!</p>
            </section>
        </div>
    );
};

export default FreelancerDashboard;