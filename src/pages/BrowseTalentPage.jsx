import React from 'react';
import TalentCard from '../components/Talent/TalentCard/TalentCard.jsx'; 
import FilterSidebar from '../components/Feed/FilterSidebar/FilterSidebar.jsx'; 
// NAPOMENA: Potrebno je osigurati da su stilovi za .jobs-page-layout, .sidebar-area, .job-list-area dostupni globalno ili uvezeni

// Fiktivni podaci o talentima
const mockTalentData = [
    { 
        id: 101, name: "Ivana Popovic", title: "Expert UI/UX Designer", hourlyRate: 40, rating: 5.0, jobsCompleted: 12, location: "Belgrade, Serbia", 
        skills: ["Figma", "Prototyping", "User Research"], tagline: "Designing user-centered experiences that drive conversion." 
    },
    { 
        id: 102, name: "Dragan Mitrovic", title: "Cloud DevOps Engineer", hourlyRate: 85, rating: 4.8, jobsCompleted: 28, location: "Zurich, Switzerland", 
        skills: ["AWS", "Kubernetes", "Terraform", "Docker"], tagline: "Infrastructure automation and cloud security specialist." 
    },
    { 
        id: 103, name: "Ana Petrovic", title: "SEO & Content Strategist", hourlyRate: 30, rating: 4.7, jobsCompleted: 45, location: "Novi Sad, Serbia", 
        skills: ["SEO", "Ahrefs", "Content Marketing", "Strategy"], tagline: "Driving organic traffic and increasing search visibility."
    }
];


const BrowseTalentPage = () => {
    // Ovde bi se u stvarnoj aplikaciji dohvatali podaci sa API-ja na osnovu filtera
    const talentCount = mockTalentData.length;

    return (
        <div className="jobs-page-layout">
            
            {/* LEVI SIDEBAR - FILTERI ZA TALENAT */}
            <div className="sidebar-area">
                {/* NAPOMENA: U stvarnosti, FilterSidebar bi imao specifične opcije za talenat 
                    (npr. Satnica, Zemlja, Testovi, Stopa uspeha), ali koristimo ga radi kostura.
                */}
                <FilterSidebar 
                    title="Filter Talent"
                    filterOptions={[
                        { name: "Categories", items: ["Web Development", "Design", "Writing"] },
                        { name: "Hourly Rate", items: ["< $30", "$30 - $60", "$60+"] },
                        { name: "Job Success", items: ["90% and up", "80% and up"] }
                    ]}
                /> 
            </div>
            
            {/* DESNI DEO - LISTA FRILENSERA */}
            <div className="job-list-area"> 
                <div className="talent-search-header">
                    <h1>Freelancers ({talentCount})</h1>
                    <div className="sort-options">
                        Sort By: 
                        <select>
                            <option>Best Match</option>
                            <option>Highest Rated</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>

                {mockTalentData.map(talent => (
                    <TalentCard key={talent.id} talent={talent} />
                ))}

            </div>
        </div>
    );
};

export default BrowseTalentPage;