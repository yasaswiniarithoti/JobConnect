import React from 'react'
import './companies.css'
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Footer from '../../components/Footer/Footer';
import microsoft from "../../assets/logos/microsoft.jpg";
import google from "../../assets/logos/google.jpg";
import amazon from "../../assets/logos/amazon.jfif";
import deloitte from "../../assets/logos/deloitte.jfif";
import tcs from "../../assets/logos/tcs.jfif";
import infosys from "../../assets/logos/infosys.jfif";

const Companies = () => {
  return (
    <div className="companies-page">

      {/* HEADER */}
      <section className="companies-header">
        <div className="companies-header-content">
          <p>EXPLORE TOP EMPLOYERS</p>

          <h1>Top Companies</h1>

          <span>
            Discover leading companies and explore exciting
            career opportunities.
          </span>
        </div>
      </section>


      {/* SEARCH */}
      <section className="companies-search">
        <input
          type="text"
          placeholder="Search companies..."
        />
      </section>


      {/* COMPANIES */}
      <section className="companies-list-section">

        <div className="section-heading">
          <p>COMPANIES HIRING NOW</p>
          <h2>Explore Companies</h2>
        </div>


        <div className="companies-grid">

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


      <Footer />

    </div>
  );
};

export default Companies
