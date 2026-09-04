import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaBookmark,
} from "react-icons/fa";

import { saveJob, removeSavedJob } from "../../redux/slices/savedJobsSlice";
import "./jobcard.css";

const JobCard = ({ title, company, location, type }) => {
  const dispatch = useDispatch();

  const savedJobs = useSelector((state) => state.savedJobs.savedJobs);

  const isSaved = savedJobs.some(
    (job) => job.title === title
  );

  const job = {
    title,
    company,
    location,
    type,
  };

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeSavedJob(title));
    } else {
      dispatch(saveJob(job));
    }
  };

  return (
    <div className="job-card">

      <div className="job-icon">
        <FaBriefcase />
      </div>

      <div className="job-info">
        <h3>{title}</h3>

        <p className="company-name">{company}</p>

        <div className="job-details">
          <span>
            <FaMapMarkerAlt /> {location}
          </span>

          <span>{type}</span>
        </div>
      </div>

      <div className="job-actions">

        <button
          className={`save-job-button ${isSaved ? "saved" : ""}`}
          onClick={handleSave}
        >
          <FaBookmark />
          {isSaved ? "Saved" : "Save"}
        </button>

        <Link
          to={`/job-details/${encodeURIComponent(title)}`}
          className="view-job-button"
        >
          View Job
        </Link>

      </div>

    </div>
  );
};

export default JobCard;