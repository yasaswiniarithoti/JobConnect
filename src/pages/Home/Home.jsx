import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import "./home.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import JobCard from '../../components/JobCard/JobCard';
import Footer from '../../components/Footer/Footer';
import microsoft from "../../assets/logos/microsoft.jpg";
import google from "../../assets/logos/google.jpg";
import amazon from "../../assets/logos/amazon.jfif";
import deloitte from "../../assets/logos/deloitte.jfif";
import tcs from "../../assets/logos/tcs.jfif";
import infosys from "../../assets/logos/infosys.jfif";
import heroImage from "../../assets/images/hero-image.png"

const Home = () => {
  return (
    <div className="home-page">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-tag">
            🚀 Find the perfect opportunity
          </p>

          <h1>
            Discover Your
            <br />
            <span>Dream Job</span>
          </h1>

          <p className="hero-description">
            Explore thousands of job opportunities with top
            companies and take the next step in your career.
          </p>

          <SearchBar />

          <div className="popular-searches">

            <span>Popular Searches:</span>

            <button>React</button>
            <button>Frontend</button>
            <button>Developer</button>
            <button>UI/UX</button>
            <button>Python</button>

          </div>

        </div>


        <div className="hero-image">

          <img
            src={heroImage}
            alt="Job search illustration"
          />

        </div>

      </section>


      {/* =========================
          CATEGORIES SECTION
      ========================= */}

      <section className="categories-section">

        <div className="section-heading">
          <p>EXPLORE OPPORTUNITIES</p>
          <h2>Popular Job Categories</h2>
        </div>

        <div className="categories-container">

          <CategoryCard
            title="Development"
            jobs="12,540"
          />

          <CategoryCard
            title="Design"
            jobs="8,420"
          />

          <CategoryCard
            title="Marketing"
            jobs="6,700"
          />

          <CategoryCard
            title="Sales"
            jobs="4,230"
          />

          <CategoryCard
            title="Data Science"
            jobs="5,120"
          />

          <CategoryCard
            title="Business"
            jobs="7,300"
          />

        </div>

      </section>


      {/* =========================
          TOP COMPANIES
      ========================= */}

      <section className="companies-section">

        <div className="section-heading">
          <p>TOP COMPANIES HIRING</p>
          <h2>Top Companies</h2>
        </div>

        <div className="companies-container">

          <CompanyCard
            name="Microsoft"
            logo={microsoft}
          />

          <CompanyCard
            name="Google"
            logo={google}
          />

          <CompanyCard
            name="Amazon"
            logo={amazon}
          />

          <CompanyCard
            name="Deloitte"
            logo={deloitte}
          />

          <CompanyCard
            name="TCS"
            logo={tcs}
          />

          <CompanyCard
            name="Infosys"
            logo={infosys}
          />

        </div>

      </section>


      {/* =========================
          FEATURED JOBS
      ========================= */}

      <section className="featured-section">

        <div className="section-heading">
          <p>LATEST OPPORTUNITIES</p>
          <h2>Featured Jobs</h2>
        </div>

        <div className="job-container">

          <JobCard
            title="Frontend Developer"
            company="Microsoft"
            location="Hyderabad"
            type="Full Time"
          />

          <JobCard
            title="UI/UX Designer"
            company="Google"
            location="Bangalore"
            type="Full Time"
          />

          <JobCard
            title="Data Analyst"
            company="Amazon"
            location="Mumbai"
            type="Full Time"
          />

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </div>
  );
};

export default Home