import React, {useState} from 'react'
import "./filtersidebar.css";

const FilterSidebar = () => {

  const [showFilters, setShowFilters] = useState(false);

  return (
    <aside className="filter-sidebar">

      {/* Mobile Filter Button */}
      <button
        className="filter-toggle"
        onClick={() => setShowFilters(!showFilters)}
      >
        <span>Filters</span>
        <span>{showFilters ? "▲" : "▼"}</span>
      </button>


      {/* Filter Content */}
      <div className={`filter-content ${showFilters ? "show" : ""}`}>

        <h2>Filters</h2>

        <div className="filter-section">

          <h3>Job Type</h3>

          <label>
            <input type="checkbox" />
            Full Time
          </label>

          <label>
            <input type="checkbox" />
            Part Time
          </label>

          <label>
            <input type="checkbox" />
            Internship
          </label>

          <label>
            <input type="checkbox" />
            Contract
          </label>

        </div>


        <div className="filter-section">

          <h3>Experience Level</h3>

          <label>
            <input type="checkbox" />
            Entry Level
          </label>

          <label>
            <input type="checkbox" />
            Mid Level
          </label>

          <label>
            <input type="checkbox" />
            Senior Level
          </label>

        </div>


        <div className="filter-section">

          <h3>Location</h3>

          <label>
            <input type="checkbox" />
            Hyderabad
          </label>

          <label>
            <input type="checkbox" />
            Bangalore
          </label>

          <label>
            <input type="checkbox" />
            Mumbai
          </label>

          <label>
            <input type="checkbox" />
            Chennai
          </label>

        </div>


        <button className="clear-filter">
          Clear Filters
        </button>

      </div>

    </aside>
  );
};

export default FilterSidebar
