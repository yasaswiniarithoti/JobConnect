import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./applications.css";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const { user } = useSelector((state) => state.auth);

  let url = `http://localhost:3000/applications?applicantId=${user.id}`;

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  const deleteApplication = (id) => {
    let deleteUrl = `http://localhost:3000/applications/${id}`;

    axios.delete(deleteUrl)
      .then((res) => {
        setApplications(
          applications.filter(
            (application) => application.id !== id
          )
        );

        alert("Application deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Application deletion failed");
      });
  };

  return (
    <div className="applications-page">

      <section className="applications-header">

        <p>YOUR ACTIVITY</p>

        <h1>
          My Applications
        </h1>

        <span>
          Track the jobs you have applied for and stay updated
          on your application status.
        </span>

      </section>

      <section className="applications-content">

        {applications.length > 0 ? (

          <div className="applications-list">

            {applications.map((application) => (

              <div
                className="application-card"
                key={application.id}
              >

                <div className="application-main">

                  <div className="application-icon">
                    💼
                  </div>

                  <div>

                    <h2>
                      {application.jobTitle}
                    </h2>

                    <p>
                      {application.company}
                    </p>

                    <span>
                      📍 {application.location}
                    </span>

                  </div>

                </div>

                <div className="application-status-section">

                  <span>
                    Application Status
                  </span>

                  <strong
                    className={`application-status ${
                      application.status
                        ? application.status
                            .toLowerCase()
                            .replace(" ", "-")
                        : "pending"
                    }`}
                  >
                    {application.status || "Pending"}
                  </strong>

                </div>

                <button
                  className="delete-application-btn"
                  onClick={() =>
                    deleteApplication(application.id)
                  }
                >
                  🗑️ Delete
                </button>

              </div>

            ))}

          </div>

        ) : (

          <div className="applications-empty">

            <div className="empty-icon">
              📋
            </div>

            <h2>
              No Applications Yet
            </h2>

            <p>
              You haven't applied for any jobs yet.
            </p>

          </div>

        )}

      </section>

    </div>
  );
};

export default Applications;