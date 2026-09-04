import React, { useEffect, useState } from "react";
import axios from "axios";
import "./recruiterdashboard.css";

const RecruiterDashboard = () => {
  let [jobs, setJobs] = useState([]);
  let [applications, setApplications] = useState([]);

  let jobsUrl = "http://localhost:3000/jobs";
  let applicationsUrl = "http://localhost:3000/applications";

  useEffect(() => {
    axios.get(jobsUrl)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(applicationsUrl)
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteJob = (id) => {
    let url = `http://localhost:3000/jobs/${id}`;

    axios.delete(url)
      .then((res) => {
        setJobs(
          jobs.filter((job) => job.id !== id)
        );

        alert("Job deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Job deletion failed");
      });
  };

  return (
    <div className="recruiter-dashboard">

      <section className="recruiter-dashboard-header">
        <div>
          <p>RECRUITER PORTAL</p>

          <h1>Recruiter Dashboard</h1>

          <span>
            Manage your job postings and applications
            from one place.
          </span>
        </div>
      </section>

      <section className="dashboard-stats">

        <div className="dashboard-stat-card">
          <div className="stat-icon">💼</div>

          <div>
            <h3>{jobs.length}</h3>
            <p>Jobs Posted</p>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">👥</div>

          <div>
            <h3>{applications.length}</h3>
            <p>Total Applicants</p>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">📋</div>

          <div>
            <h3>
              {
                applications.filter(
                  (application) =>
                    application.status === "Under Review"
                ).length
              }
            </h3>

            <p>Under Review</p>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">✅</div>

          <div>
            <h3>
              {
                applications.filter(
                  (application) =>
                    application.status === "Selected"
                ).length
              }
            </h3>

            <p>Selected</p>
          </div>
        </div>

      </section>

      <section className="dashboard-section">

        <div className="dashboard-section-title">
          <div>
            <p>QUICK ACTIONS</p>
            <h2>Manage Recruitment</h2>
          </div>
        </div>

        <div className="dashboard-actions">

          <a
            href="/post-job"
            className="dashboard-action-card"
          >
            <span>➕</span>

            <div>
              <h3>Post a Job</h3>
              <p>Create a new job opportunity</p>
            </div>
          </a>

          <a
            href="/applicants"
            className="dashboard-action-card"
          >
            <span>👥</span>

            <div>
              <h3>View Applicants</h3>
              <p>Review candidate applications</p>
            </div>
          </a>

        </div>

      </section>

      <section className="dashboard-section">

        <div className="dashboard-section-title">
          <div>
            <p>YOUR JOBS</p>
            <h2>Recent Job Postings</h2>
          </div>
        </div>

        {jobs.length > 0 ? (

          <div className="dashboard-jobs-list">

            {jobs.slice(0, 5).map((job) => (

              <div
                className="dashboard-job-card"
                key={job.id}
              >

                <div className="dashboard-job-info">

                  <h3>{job.title}</h3>

                  <p>{job.company}</p>

                  <span>
                    📍 {job.location}
                  </span>

                </div>

                <div className="dashboard-job-actions">

                  <div className="job-type">
                    {job.type}
                  </div>

                  <button
                    className="delete-job-button"
                    onClick={() => deleteJob(job.id)}
                  >
                    🗑️ Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="dashboard-empty">

            <h3>No Jobs Posted Yet</h3>

            <p>
              Start by creating your first job posting.
            </p>

          </div>

        )}

      </section>

    </div>
  );
};

export default RecruiterDashboard;