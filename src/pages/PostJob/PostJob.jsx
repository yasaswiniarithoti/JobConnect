import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./postjob.css";

const PostJob = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !company ||
      !location ||
      !type ||
      !salary ||
      !experience ||
      !description ||
      !skills
    ) {
      alert("Please enter all the fields");
      return;
    }

    let url = "http://localhost:3000/jobs";

    let data = {
      title,
      company,
      location,
      type,
      salary,
      experience,
      description,
      skills,
    };

    axios.post(url, data)
      .then((res) => {
        alert("Job posted successfully");

        setTitle("");
        setCompany("");
        setLocation("");
        setType("");
        setSalary("");
        setExperience("");
        setDescription("");
        setSkills("");

        navigate("/recruiter-dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Job posting failed");
      });
  };

  return (
    <div className="post-job-page">

      <section className="post-job-header">
        <p>RECRUITER PORTAL</p>
        <h1>Post a New Job</h1>
        <span>
          Create a new job opportunity and find the right candidate.
        </span>
      </section>

      <section className="post-job-container">

        <form className="post-job-form" onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="e.g. Hyderabad"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Job Type</label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>

            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Salary</label>
              <input
                type="text"
                placeholder="e.g. ₹6 - ₹10 LPA"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Experience</label>
              <input
                type="text"
                placeholder="e.g. 0 - 2 years"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

          </div>

          <div className="form-group">
            <label>Required Skills</label>
            <input
              type="text"
              placeholder="e.g. React, JavaScript, HTML, CSS"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              rows="7"
              placeholder="Describe the job role, responsibilities and requirements..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="post-job-buttons">

            <button
              type="button"
              className="cancel-job-btn"
              onClick={() => navigate("/recruiter-dashboard")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="post-job-btn"
            >
              Post Job
            </button>

          </div>

        </form>

      </section>

    </div>
  );
};

export default PostJob;
