import React from "react";
import { useSelector } from "react-redux";
import "./savedjobs.css";

import Footer from "../../components/Footer/Footer";
import JobCard from "../../components/JobCard/JobCard";

const SavedJobs = () => {

  const savedJobs = useSelector(
    (state) => state.savedJobs.savedJobs
  );

  return (
    <div className="saved-jobs-page">

      <section className="saved-jobs-header">

        <div className="saved-jobs-header-content">

          <p>YOUR JOBS</p>

          <h1>Saved Jobs</h1>

          <span>
            Keep track of the opportunities you're interested in
            and apply whenever you're ready.
          </span>

        </div>

      </section>


      <section className="saved-jobs-content">

        <div className="saved-jobs-title">

          <div>
            <p>SAVED OPPORTUNITIES</p>

            <h2>Your Saved Jobs</h2>
          </div>

          <span className="saved-count">
            {savedJobs.length}{" "}
            {savedJobs.length === 1 ? "Job" : "Jobs"} Saved
          </span>

        </div>


        {savedJobs.length > 0 ? (

          <div className="saved-jobs-list">

            {savedJobs.map((job, index) => (

              <JobCard
                key={`${job.title}-${index}`}
                title={job.title}
                company={job.company}
                location={job.location}
                type={job.type}
              />

            ))}

          </div>

        ) : (

          <div className="empty-saved-jobs">

            <h3>No Saved Jobs Yet</h3>

            <p>
              Jobs you save will appear here.
            </p>

          </div>

        )}

      </section>


      <Footer />

    </div>
  );
};

export default SavedJobs;