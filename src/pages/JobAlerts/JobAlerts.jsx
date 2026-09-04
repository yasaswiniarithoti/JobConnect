import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./jobalerts.css";

const JobAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [workType, setWorkType] = useState("");

  const { user } = useSelector((state) => state.auth);

  let url = `http://localhost:3000/jobAlerts?userId=${user.id}`;

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setAlerts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  const createAlert = (e) => {
    e.preventDefault();

    if (!role || !skills || !location || !workType) {
      alert("Please enter all the fields");
      return;
    }

    let postUrl = "http://localhost:3000/jobAlerts";

    let data = {
      userId: user.id,
      role,
      skills,
      location,
      workType,
      status: "Active"
    };

    axios.post(postUrl, data)
      .then((res) => {
        setAlerts([...alerts, res.data]);

        setRole("");
        setSkills("");
        setLocation("");
        setWorkType("");

        setShowForm(false);

        alert("Job alert created successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create job alert");
      });
  };

  return (
    <div className="job-alerts-page">

      <section className="job-alerts-header">

        <p>STAY UPDATED</p>

        <h1>Job Alerts</h1>

        <span>
          Get notified about new job opportunities that match your interests.
        </span>

      </section>


      <section className="job-alerts-content">

        <div className="job-alerts-title">

          <div>

            <p>YOUR ALERTS</p>

            <h2>
              Active Job Alerts
            </h2>

          </div>


          <button
            className="create-alert-button"
            onClick={() => setShowForm(!showForm)}
          >
            + Create Alert
          </button>

        </div>


        {showForm && (

          <form
            className="job-alert-form"
            onSubmit={createAlert}
          >

            <div className="alert-form-group">

              <label>
                Job Role
              </label>

              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />

            </div>


            <div className="alert-form-group">

              <label>
                Skills
              </label>

              <input
                type="text"
                placeholder="e.g. React, JavaScript"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />

            </div>


            <div className="alert-form-group">

              <label>
                Location
              </label>

              <input
                type="text"
                placeholder="e.g. Hyderabad"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

            </div>


            <div className="alert-form-group">

              <label>
                Work Type
              </label>

              <select
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
              >

                <option value="">
                  Select Work Type
                </option>

                <option value="Full Time">
                  Full Time
                </option>

                <option value="Part Time">
                  Part Time
                </option>

                <option value="Internship">
                  Internship
                </option>

                <option value="Remote">
                  Remote
                </option>

              </select>

            </div>


            <button
              type="submit"
              className="save-alert-button"
            >
              Save Alert
            </button>

          </form>

        )}


        {alerts.length > 0 ? (

          alerts.map((alert) => (

            <div
              className="job-alert-card"
              key={alert.id}
            >

              <div className="alert-icon">
                🔔
              </div>


              <div className="alert-info">

                <h3>
                  {alert.role}
                </h3>


                <p>
                  {alert.skills} · {alert.location}
                </p>


                <span>
                  {alert.workType} · Created recently
                </span>

              </div>


              <div className="alert-status">

                <span>
                  {alert.status}
                </span>

              </div>

            </div>

          ))

        ) : (

          <div className="empty-alert-info">

            <h3>
              Never miss an opportunity
            </h3>

            <p>
              Create job alerts based on your preferred role, skills,
              location, or work type.
            </p>

          </div>

        )}

      </section>

    </div>
  );
};

export default JobAlerts;