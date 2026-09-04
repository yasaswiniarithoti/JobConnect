import React from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaGlobe} from "react-icons/fa";
import "./companydetails.css";
import Footer from '../../components/Footer/Footer';
import microsoft from "../../assets/logos/microsoft.jpg";
import google from "../../assets/logos/google.jpg";
import amazon from "../../assets/logos/amazon.jfif";
import deloitte from "../../assets/logos/deloitte.jfif";
import tcs from "../../assets/logos/tcs.jfif";
import infosys from "../../assets/logos/infosys.jfif";


const CompanyDetails = () => {

  const { name } = useParams();

  const companyName = decodeURIComponent(name);


  const companies = {

    Microsoft: {
      name: "Microsoft",
      logo: microsoft,
      location: "Hyderabad",
      employees: "220,000+ Employees",
      industry: "Technology",
      website: "www.microsoft.com",

      description:
        "Microsoft is a global technology company that creates software, devices, services, and solutions that help people and organizations achieve more.",

      jobs: [
        "Frontend Developer",
        "Software Engineer",
        "Data Analyst"
      ]
    },


    Google: {
      name: "Google",
      logo: google,
      location: "Bangalore",
      employees: "180,000+ Employees",
      industry: "Technology",
      website: "www.google.com",

      description:
        "Google is a technology company focused on organizing information and building innovative products and services used by people around the world.",

      jobs: [
        "React Developer",
        "Software Engineer",
        "UI/UX Designer"
      ]
    },


    Amazon: {
      name: "Amazon",
      logo: amazon,
      location: "Mumbai",
      employees: "1,500,000+ Employees",
      industry: "E-Commerce & Technology",
      website: "www.amazon.com",

      description:
        "Amazon is a global company operating across e-commerce, cloud computing, digital streaming, and technology services.",

      jobs: [
        "UI/UX Designer",
        "Software Engineer",
        "Data Analyst"
      ]
    },


    Deloitte: {
      name: "Deloitte",
      logo: deloitte,
      location: "Hyderabad",
      employees: "450,000+ Employees",
      industry: "Consulting",
      website: "www.deloitte.com",

      description:
        "Deloitte provides consulting, financial, technology, and professional services to organizations around the world.",

      jobs: [
        "Data Analyst",
        "Software Engineer",
        "Business Analyst"
      ]
    },


    TCS: {
      name: "TCS",
      logo: tcs,
      location: "Bangalore",
      employees: "600,000+ Employees",
      industry: "Information Technology",
      website: "www.tcs.com",

      description:
        "Tata Consultancy Services is a global IT services and consulting company helping organizations transform through technology.",

      jobs: [
        "Software Engineer",
        "Frontend Developer",
        "Python Developer"
      ]
    },


    Infosys: {
      name: "Infosys",
      logo: infosys,
      location: "Chennai",
      employees: "300,000+ Employees",
      industry: "Information Technology",
      website: "www.infosys.com",

      description:
        "Infosys is a global technology services and consulting company that helps businesses navigate digital transformation.",

      jobs: [
        "Python Developer",
        "Software Engineer",
        "Data Analyst"
      ]
    }

  };


  const company = companies[companyName];


  if (!company) {
    return (
      <div className="company-details-page">

        <section className="company-not-found">
          <h1>Company Not Found</h1>

          <p>
            Sorry, we couldn't find the company you're looking for.
          </p>
        </section>

        <Footer />

      </div>
    );
  }


  return (

    <div className="company-details-page">

      {/* COMPANY HEADER */}

      <section className="company-details-header">

        <div className="company-header-content">

          <div className="company-logo-box">
            <img
              src={company.logo}
              alt={company.name}
            />
          </div>


          <div>

            <h1>
              {company.name}
            </h1>

            <p>
              {company.industry}
            </p>

          </div>

        </div>

      </section>


      {/* COMPANY CONTENT */}

      <section className="company-details-content">


        <div className="company-description">

          <h2>
            About {company.name}
          </h2>

          <p>
            {company.description}
          </p>


          <h2>
            Open Positions
          </h2>


          <div className="company-jobs">

            {company.jobs.map((job, index) => (

              <div
                className="company-job-card"
                key={index}
              >

                <div>

                  <h3>
                    {job}
                  </h3>

                  <p>
                    {company.name}
                  </p>

                </div>


                <a href="/jobs">
                  View Jobs
                </a>

              </div>

            ))}

          </div>

        </div>


        {/* COMPANY SUMMARY */}

        <aside className="company-summary">

          <h2>
            Company Info
          </h2>


          <div className="company-summary-item">

            <FaMapMarkerAlt />

            <div>
              <span>Location</span>
              <strong>{company.location}</strong>
            </div>

          </div>


          <div className="company-summary-item">

            <FaUsers />

            <div>
              <span>Employees</span>
              <strong>{company.employees}</strong>
            </div>

          </div>


          <div className="company-summary-item">

            <FaBriefcase />

            <div>
              <span>Industry</span>
              <strong>{company.industry}</strong>
            </div>

          </div>


          <div className="company-summary-item">

            <FaGlobe />

            <div>
              <span>Website</span>
              <strong>{company.website}</strong>
            </div>

          </div>

        </aside>

      </section>


      <Footer />

    </div>

  );
};


export default CompanyDetails;
