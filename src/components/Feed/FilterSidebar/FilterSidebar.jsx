import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSection = ({ title, children }) => (
  <div className="filter-section">
    <h3>{title}</h3>
    {children}
  </div>
);

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    category: [],
    experience: 'all',
    jobType: [],
    budgetMin: '',
    budgetMax: ''
  });
  const [open, setOpen] = useState(false); // mobilni toggle

  const toggleSidebar = () => setOpen(prev => !prev);

  const handleCheckboxChange = (section, value) => {
    setFilters(prev => {
      const current = prev[section];
      if (current.includes(value)) {
        return { ...prev, [section]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [section]: [...current, value] };
      }
    });
  };

  const handleRadioChange = (section, value) => {
    setFilters(prev => ({ ...prev, [section]: value }));
  };

  const categories = ["Web Development", "Mobile Development", "Design & Creative", "IT & Networking", "Sales & Marketing"];
  const experiences = ["Entry Level", "Intermediate", "Expert"];
  const jobTypes = ["Hourly", "Fixed-Price"];

  return (
    <>
      {/* Dugme za mobilni toggle */}
      <button className="mobile-filter-toggle" onClick={toggleSidebar}>
        Filters
      </button>

      <aside className={`upwork-sidebar-container ${open ? 'open' : ''}`}>
        <h2>Filter Results</h2>
        
        <FilterSection title="Category">
          {categories.map(cat => (
            <label key={cat} className="filter-checkbox-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('category', cat)}
                checked={filters.category.includes(cat)}
              />
              {cat}
            </label>
          ))}
          <button className="more-link">+ More</button>
        </FilterSection>
        
        <hr className="sidebar-divider" />

        <FilterSection title="Experience Level">
          {experiences.map(exp => (
            <label key={exp} className="filter-radio-label">
              <input
                type="radio"
                name="experience"
                value={exp}
                checked={filters.experience === exp}
                onChange={() => handleRadioChange('experience', exp)}
              />
              {exp}
            </label>
          ))}
        </FilterSection>

        <hr className="sidebar-divider" />

        <FilterSection title="Job Type">
          {jobTypes.map(type => (
            <label key={type} className="filter-checkbox-label">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('jobType', type)}
                checked={filters.jobType.includes(type)}
              />
              {type}
            </label>
          ))}
        </FilterSection>

        <hr className="sidebar-divider" />

        <FilterSection title="Fixed Price Budget">
          <div className="budget-inputs">
            <input
              type="number"
              placeholder="Min"
              value={filters.budgetMin}
              onChange={(e) => setFilters({...filters, budgetMin: e.target.value})}
            />
            <span className="budget-separator">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.budgetMax}
              onChange={(e) => setFilters({...filters, budgetMax: e.target.value})}
            />
          </div>
        </FilterSection>

        <button className="apply-filters-btn">Apply Filters</button>
      </aside>
    </>
  );
};

export default FilterSidebar;
