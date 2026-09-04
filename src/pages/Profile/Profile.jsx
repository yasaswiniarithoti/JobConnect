import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { login, logout } from "../../redux/slices/authSlice";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const isRecruiter = user?.role === "recruiter";

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [location, setLocation] = useState(user?.location || "");
  const [about, setAbout] = useState(user?.about || "");
  const [skills, setSkills] = useState(user?.skills || "");
  const [education, setEducation] = useState(user?.education || "");
  const [resume, setResume] = useState(user?.resume || "");

  // Recruiter details
  const [companyName, setCompanyName] = useState(
    user?.companyName || ""
  );

  const [industry, setIndustry] = useState(
    user?.industry || ""
  );

  const [companySize, setCompanySize] = useState(
    user?.companySize || ""
  );

  const [website, setWebsite] = useState(
    user?.website || ""
  );

  const handleSave = () => {
    let url = `http://localhost:3000/users/${user.id}`;

    let data = {
      Name: name,
      Phno: phone,
      Location: location,
      About: about,
      Skills: skills,
      Education: education,
      Resume: resume,
      role: user.role,
    };

    if (isRecruiter) {
      data = {
        ...data,
        CompanyName: companyName,
        Industry: industry,
        CompanySize: companySize,
        Website: website,
      };
    }

    axios.patch(url, data)
      .then((res) => {
        let updatedUser = res.data;

        dispatch(
          login({
            id: updatedUser.id,
            name: updatedUser.Name,
            email: updatedUser.Email,
            phone: updatedUser.Phno,
            location: updatedUser.Location,
            about: updatedUser.About,
            skills: updatedUser.Skills,
            education: updatedUser.Education,
            resume: updatedUser.Resume,
            role: updatedUser.role,

            companyName: updatedUser.CompanyName,
            industry: updatedUser.Industry,
            companySize: updatedUser.CompanySize,
            website: updatedUser.Website,
          })
        );

        setIsEditing(false);

        alert("Profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Profile update failed");
      });
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="profile-page">

      <section className="profile-header">

        <div className="profile-avatar">
          {name
            ? name.charAt(0).toUpperCase()
            : "U"}
        </div>

        <div>
          <p>
            {isRecruiter
              ? "RECRUITER PROFILE"
              : "MY PROFILE"}
          </p>

          <h1>{name || "Your Profile"}</h1>

          <span>
            {isRecruiter
              ? "Manage your recruiter and company information."
              : "Manage your personal information and profile."}
          </span>
        </div>

      </section>

      <section className="profile-container">

        {/* Basic Information */}

        <div className="profile-section">

          <div className="profile-section-title">
            <div>
              <p>PERSONAL INFORMATION</p>
              <h2>Basic Details</h2>
            </div>

            {!isEditing && (
              <button
                className="edit-profile-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Name</label>

              {isEditing ? (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <p>{name || "Not added"}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Email</label>
              <p>{user?.email || "Not added"}</p>
            </div>

            <div className="profile-field">
              <label>Phone</label>

              {isEditing ? (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <p>{phone || "Not added"}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Location</label>

              {isEditing ? (
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              ) : (
                <p>{location || "Not added"}</p>
              )}
            </div>

          </div>

        </div>


        {/* Recruiter / Company Information */}

        {isRecruiter && (
          <div className="profile-section">

            <div className="profile-section-title">
              <div>
                <p>COMPANY INFORMATION</p>
                <h2>About Your Company</h2>
              </div>
            </div>

            <div className="profile-grid">

              <div className="profile-field">
                <label>Company Name</label>

                {isEditing ? (
                  <input
                    value={companyName}
                    onChange={(e) =>
                      setCompanyName(e.target.value)
                    }
                    placeholder="Enter company name"
                  />
                ) : (
                  <p>
                    {companyName || "Not added"}
                  </p>
                )}
              </div>

              <div className="profile-field">
                <label>Industry</label>

                {isEditing ? (
                  <input
                    value={industry}
                    onChange={(e) =>
                      setIndustry(e.target.value)
                    }
                    placeholder="e.g. Information Technology"
                  />
                ) : (
                  <p>
                    {industry || "Not added"}
                  </p>
                )}
              </div>

              <div className="profile-field">
                <label>Company Size</label>

                {isEditing ? (
                  <input
                    value={companySize}
                    onChange={(e) =>
                      setCompanySize(e.target.value)
                    }
                    placeholder="e.g. 50-100 employees"
                  />
                ) : (
                  <p>
                    {companySize || "Not added"}
                  </p>
                )}
              </div>

              <div className="profile-field">
                <label>Company Location</label>

                {isEditing ? (
                  <input
                    value={location}
                    onChange={(e) =>
                      setLocation(e.target.value)
                    }
                  />
                ) : (
                  <p>
                    {location || "Not added"}
                  </p>
                )}
              </div>

              <div className="profile-field full-width">
                <label>Website</label>

                {isEditing ? (
                  <input
                    value={website}
                    onChange={(e) =>
                      setWebsite(e.target.value)
                    }
                    placeholder="Company website"
                  />
                ) : (
                  <p>
                    {website || "Not added"}
                  </p>
                )}
              </div>

            </div>

          </div>
        )}


        {/* About */}

        <div className="profile-section">

          <div className="profile-section-title">
            <div>
              <p>
                {isRecruiter
                  ? "COMPANY DESCRIPTION"
                  : "ABOUT ME"}
              </p>

              <h2>
                {isRecruiter
                  ? "About Company"
                  : "About"}
              </h2>
            </div>
          </div>

          {isEditing ? (
            <textarea
              rows="5"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder={
                isRecruiter
                  ? "Tell candidates about your company..."
                  : "Tell us about yourself..."
              }
            />
          ) : (
            <p className="about-text">
              {about ||
                (isRecruiter
                  ? "Add information about your company."
                  : "Add information about yourself.")}
            </p>
          )}

        </div>


        {/* Applicant Information */}

        {!isRecruiter && (
          <>

            <div className="profile-section">

              <div className="profile-section-title">
                <div>
                  <p>PROFESSIONAL INFORMATION</p>
                  <h2>Skills & Education</h2>
                </div>
              </div>

              <div className="profile-grid">

                <div className="profile-field">
                  <label>Skills</label>

                  {isEditing ? (
                    <input
                      value={skills}
                      onChange={(e) =>
                        setSkills(e.target.value)
                      }
                    />
                  ) : (
                    <p>{skills || "Not added"}</p>
                  )}
                </div>

                <div className="profile-field">
                  <label>Education</label>

                  {isEditing ? (
                    <input
                      value={education}
                      onChange={(e) =>
                        setEducation(e.target.value)
                      }
                    />
                  ) : (
                    <p>
                      {education || "Not added"}
                    </p>
                  )}
                </div>

              </div>

            </div>


            <div className="profile-section">

              <div className="profile-section-title">
                <div>
                  <p>RESUME</p>
                  <h2>Resume</h2>
                </div>
              </div>

              {isEditing ? (
                <input
                  value={resume}
                  onChange={(e) =>
                    setResume(e.target.value)
                  }
                  placeholder="resume.pdf"
                />
              ) : (
                <p className="resume-name">
                  📄 {resume || "No resume added"}
                </p>
              )}

            </div>

          </>
        )}


        {/* Recruiter Actions */}

        {isRecruiter && (
          <div className="profile-actions">

            <button
              onClick={() =>
                navigate("/recruiter-dashboard")
              }
            >
              Recruiter Dashboard
            </button>

            <button
              onClick={() => navigate("/post-job")}
            >
              Post a Job
            </button>

          </div>
        )}


        {/* Save / Cancel */}

        {isEditing && (
          <div className="profile-edit-actions">

            <button
              className="cancel-profile-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>

            <button
              className="save-profile-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>

          </div>
        )}


        {/* Logout */}

        <button
          className="profile-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </section>

    </div>
  );
};

export default Profile;