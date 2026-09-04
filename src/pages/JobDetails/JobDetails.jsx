import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaClock
} from "react-icons/fa";

import { useSelector } from "react-redux";

import "./jobdetails.css";

import Footer from "../../components/Footer/Footer";


const JobDetails = () => {

  const { title } = useParams();

  const jobTitle = decodeURIComponent(title);


  const { user, isLoggedIn } = useSelector(
    (state) => state.auth
  );


  const jobs = {

    "Frontend Developer": {
      title: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad",
      type: "Full Time",
      experience: "1 - 3 Years",
      posted: "Posted 2 days ago",

      description:
        "We are looking for a talented Frontend Developer to join our team and help build modern, responsive, and user-friendly web applications.",

      responsibilities: [
        "Build responsive web applications using React.",
        "Develop reusable and maintainable components.",
        "Work with designers to implement UI designs.",
        "Optimize applications for performance.",
        "Collaborate with backend developers and teams."
      ],

      requirements: [
        "Strong knowledge of HTML, CSS, and JavaScript.",
        "Experience with React.js.",
        "Understanding of responsive web design.",
        "Knowledge of Git and version control.",
        "Good problem-solving and communication skills."
      ]
    },


    "React Developer": {
      title: "React Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
      experience: "2 - 4 Years",
      posted: "Posted 3 days ago",

      description:
        "Google is looking for a skilled React Developer to build scalable and high-performance web applications.",

      responsibilities: [
        "Develop modern applications using React.",
        "Create reusable UI components.",
        "Work with product and design teams.",
        "Improve application performance.",
        "Write clean and maintainable code."
      ],

      requirements: [
        "Strong knowledge of JavaScript.",
        "Experience with React.js.",
        "Understanding of REST APIs.",
        "Knowledge of Git.",
        "Strong problem-solving skills."
      ]
    },


    "UI/UX Designer": {
      title: "UI/UX Designer",
      company: "Amazon",
      location: "Mumbai",
      type: "Full Time",
      experience: "1 - 3 Years",
      posted: "Posted 1 day ago",

      description:
        "Amazon is looking for a creative UI/UX Designer to design intuitive and engaging digital experiences.",

      responsibilities: [
        "Design user-friendly interfaces.",
        "Create wireframes and prototypes.",
        "Work closely with developers.",
        "Conduct user research.",
        "Improve overall user experience."
      ],

      requirements: [
        "Experience with Figma or similar tools.",
        "Understanding of UI/UX principles.",
        "Strong visual design skills.",
        "Knowledge of responsive design.",
        "Good communication skills."
      ]
    },


    "Python Developer": {
      title: "Python Developer",
      company: "Infosys",
      location: "Chennai",
      type: "Full Time",
      experience: "1 - 3 Years",
      posted: "Posted 4 days ago",

      description:
        "Infosys is looking for a Python Developer to build reliable and scalable software solutions.",

      responsibilities: [
        "Develop applications using Python.",
        "Write clean and reusable code.",
        "Work with databases and APIs.",
        "Debug and test applications.",
        "Collaborate with development teams."
      ],

      requirements: [
        "Strong knowledge of Python.",
        "Understanding of databases.",
        "Knowledge of REST APIs.",
        "Experience with Git.",
        "Good analytical and problem-solving skills."
      ]
    },


    "Data Analyst": {
      title: "Data Analyst",
      company: "Deloitte",
      location: "Hyderabad",
      type: "Full Time",
      experience: "1 - 3 Years",
      posted: "Posted 2 days ago",

      description:
        "Deloitte is looking for a Data Analyst who can transform data into meaningful insights that support business decisions.",

      responsibilities: [
        "Analyze business and operational data.",
        "Create reports and dashboards.",
        "Identify trends and patterns.",
        "Work with different teams.",
        "Present data-driven insights."
      ],

      requirements: [
        "Knowledge of Excel and SQL.",
        "Understanding of data analysis.",
        "Knowledge of visualization tools.",
        "Strong analytical skills.",
        "Good communication skills."
      ]
    },


    "Software Engineer": {
      title: "Software Engineer",
      company: "TCS",
      location: "Bangalore",
      type: "Full Time",
      experience: "2 - 5 Years",
      posted: "Posted 5 days ago",

      description:
        "TCS is looking for a Software Engineer to develop, test, and maintain high-quality software solutions.",

      responsibilities: [
        "Develop and maintain software applications.",
        "Write efficient and scalable code.",
        "Test and debug applications.",
        "Collaborate with development teams.",
        "Participate in code reviews."
      ],

      requirements: [
        "Strong programming fundamentals.",
        "Knowledge of JavaScript or Python.",
        "Understanding of databases.",
        "Knowledge of Git.",
        "Good problem-solving skills."
      ]
    }

  };


  const job = jobs[jobTitle];


  const handleApply = () => {

    if (!isLoggedIn) {
      alert("Please login to apply for a job");
      return;
    }


    if (user?.role !== "applicant") {
      alert("Only applicants can apply for jobs");
      return;
    }


    let url = "http://localhost:3000/applications";


    let data = {
      applicantId: user.id,
      name: user.name,
      email: user.email,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      status: "Pending"
    };


    axios.post(url, data)
      .then((res) => {

        alert("Application submitted successfully");

      })
      .catch((err) => {

        console.log(err);

        alert("Application failed");

      });

  };


  if (!job) {

    return (

      <div className="job-details-page">

        <section className="job-not-found">

          <h1>
            Job Not Found
          </h1>

          <p>
            Sorry, we couldn't find the job you're looking for.
          </p>

        </section>

        <Footer />

      </div>

    );

  }


  return (

    <div className="job-details-page">


      {/* JOB HEADER */}

      <section className="job-details-header">

        <div className="job-details-header-content">

          <div className="job-details-icon">
            <FaBriefcase />
          </div>


          <div>

            <h1>
              {job.title}
            </h1>

            <p className="job-company">
              {job.company}
            </p>


            <div className="job-meta">

              <span>
                <FaMapMarkerAlt />
                {job.location}
              </span>


              <span>
                <FaBriefcase />
                {job.type}
              </span>


              <span>
                <FaClock />
                {job.posted}
              </span>

            </div>

          </div>

        </div>


        <button
          className="apply-button"
          onClick={handleApply}
        >
          Apply Now
        </button>

      </section>


      {/* JOB CONTENT */}

      <section className="job-details-content">


        <div className="job-description">

          <h2>
            Job Description
          </h2>

          <p>
            {job.description}
          </p>


          <h2>
            Responsibilities
          </h2>

          <ul>

            {job.responsibilities.map((item, index) => (

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>


          <h2>
            Requirements
          </h2>

          <ul>

            {job.requirements.map((item, index) => (

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>

        </div>


        {/* SIDEBAR */}

        <aside className="job-summary">

          <h2>
            Job Summary
          </h2>


          <div className="summary-item">

            <FaBriefcase />

            <div>

              <span>
                Job Type
              </span>

              <strong>
                {job.type}
              </strong>

            </div>

          </div>


          <div className="summary-item">

            <FaMapMarkerAlt />

            <div>

              <span>
                Location
              </span>

              <strong>
                {job.location}
              </strong>

            </div>

          </div>


          <div className="summary-item">

            <FaBuilding />

            <div>

              <span>
                Company
              </span>

              <strong>
                {job.company}
              </strong>

            </div>

          </div>


          <div className="summary-item">

            <FaClock />

            <div>

              <span>
                Experience
              </span>

              <strong>
                {job.experience}
              </strong>

            </div>

          </div>


          <button
            className="sidebar-apply"
            onClick={handleApply}
          >
            Apply Now
          </button>

        </aside>

      </section>


      <Footer />

    </div>

  );

};


export default JobDetails;
