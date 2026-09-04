import React, { useEffect, useState } from "react";
import axios from "axios";
import "./applicants.css";

const Applicants = () => {
  const [applications, setApplications] = useState([]);

  let url = "http://localhost:3000/applications";

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateStatus = (id, status) => {

  let updateUrl = `http://localhost:3000/applications/${id}`;

  let data = {
    status: status
  };

  axios.patch(updateUrl, data)
    .then((res) => {

      setApplications((previousApplications) => {

        return previousApplications.map((application) => {

          if (application.id === id) {
            return {
              ...application,
              status: status
            };
          }

          return application;

        });

      });


      // Find the application

      let application = applications.find(
        (application) => application.id === id
      );


      if (!application) {
        alert(`Application ${status}`);
        return;
      }


      // Create job alert for applicant

      let alertUrl = "http://localhost:3000/jobAlerts";


      let alertData = {
        userId: application.applicantId,
        role: application.jobTitle,
        skills: "Application Update",
        location: application.location,
        workType: status,
        status: status
      };


      axios.post(alertUrl, alertData)
        .then((res) => {

          console.log("Job alert created successfully");

          alert(`Application ${status}`);

        })
        .catch((err) => {

          console.log(err);

          alert(`Application ${status}`);

        });

    })
    .catch((err) => {

      console.log(err);

      alert("Failed to update application");

    });
};

  return (
    <div className="applicants-page">

      <section className="applicants-header">

        <p>
          RECRUITER PORTAL
        </p>

        <h1>
          Applicants
        </h1>

        <span>
          Review candidates and manage their applications.
        </span>

      </section>


      <section className="applicants-container">

        {applications.length > 0 ? (

          <div className="applicants-list">

            {applications.map((application) => (

              <div
                className="applicant-card"
                key={application.id}
              >

                <div className="applicant-info">

                  <div className="applicant-avatar">

                    {application.name
                      ? application.name.charAt(0).toUpperCase()
                      : "A"}

                  </div>


                  <div>

                    <h2>
                      {application.name || "Applicant"}
                    </h2>

                    <p>
                      {application.email || "No email available"}
                    </p>

                    <span>
                      💼 {application.jobTitle || "Job Application"}
                    </span>

                  </div>

                </div>


                <div className="applicant-details">

                  <div>

                    <strong>
                      Applied For
                    </strong>

                    <p>
                      {application.jobTitle || "Not available"}
                    </p>

                  </div>


                  <div>

                    <strong>
                      Status
                    </strong>

                    <p
                      className={`application-status ${
                        application.status
                          ? application.status
                              .toLowerCase()
                              .replace(" ", "-")
                          : "pending"
                      }`}
                    >
                      {application.status || "Pending"}
                    </p>

                  </div>

                </div>


                <div className="applicant-actions">

                  <button
                    className="review-btn"
                    onClick={() =>
                      updateStatus(
                        application.id,
                        "Under Review"
                      )
                    }
                  >
                    Under Review
                  </button>


                  <button
                    className="select-btn"
                    onClick={() =>
                      updateStatus(
                        application.id,
                        "Selected"
                      )
                    }
                  >
                    Select
                  </button>


                  <button
                    className="reject-btn"
                    onClick={() =>
                      updateStatus(
                        application.id,
                        "Rejected"
                      )
                    }
                  >
                    Reject
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="applicants-empty">

            <div className="empty-icon">
              👥
            </div>

            <h2>
              No Applications Yet
            </h2>

            <p>
              Applications from candidates will appear here.
            </p>

          </div>

        )}

      </section>

    </div>
  );
};

export default Applicants;