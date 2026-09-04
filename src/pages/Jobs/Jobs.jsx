import React from 'react'
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import JobCard from "../../components/JobCard/JobCard";
import Footer from "../../components/Footer/Footer";
import "./jobs.css"
const Jobs = () => {
  return (
    <div className="jobs-page">

      {/* =========================
          JOBS HEADER
      ========================= */}

      <section className="jobs-header">

        <div className="jobs-header-content">

          <p>FIND YOUR NEXT OPPORTUNITY</p>

          <h1>Find Your Dream Job</h1>

          <span>
            Explore thousands of job opportunities and find
            the perfect role for your career.
          </span>

        </div>

      </section>


      {/* =========================
          SEARCH SECTION
      ========================= */}

      <section className="jobs-search-section">

        <SearchBar />

      </section>


      {/* =========================
          JOBS CONTENT
      ========================= */}

      <section className="jobs-content">

        {/* FILTER SIDEBAR */}

        <FilterSidebar />


        {/* JOB LIST */}

        <div className="jobs-list">

          <div className="jobs-list-header">

            <h2>Available Jobs</h2>

            <span>6,540 jobs found</span>

          </div>


          <JobCard
            title="Frontend Developer"
            company="Microsoft"
            location="Hyderabad"
            type="Full Time"
          />

          <JobCard
            title="React Developer"
            company="Google"
            location="Bangalore"
            type="Full Time"
          />

          <JobCard
            title="UI/UX Designer"
            company="Amazon"
            location="Mumbai"
            type="Full Time"
          />

          <JobCard
            title="Python Developer"
            company="Infosys"
            location="Chennai"
            type="Full Time"
          />

          <JobCard
            title="Data Analyst"
            company="Deloitte"
            location="Hyderabad"
            type="Full Time"
          />

          <JobCard
            title="Software Engineer"
            company="TCS"
            location="Bangalore"
            type="Full Time"
          />

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default Jobs
