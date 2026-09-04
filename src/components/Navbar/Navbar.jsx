import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

import { logout } from "../../redux/slices/authSlice";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const { isLoggedIn, user } = useSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <div className="logo-icon">J</div>
        <span>JobConnect</span>
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">

        <Link to="/" className="active">
          Home
        </Link>

        <Link to="/jobs">
          Find Jobs
        </Link>

        <Link to="/companies">
          Companies
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

      {/* Right Side */}
      <div className="nav-buttons">

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-login">
              Login
            </Link>

            <Link to="/register" className="nav-register">
              Register
            </Link>
          </>
        ) : (

          <div className="profile-menu">

            <button
              className="profile-menu-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaUserCircle />

              <span>
                {user?.name || "Profile"}
              </span>

              <FaChevronDown />
            </button>

            {showDropdown && (
              <div className="profile-dropdown">

                {/* Common Profile */}
                <Link
                  to="/profile"
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>

                {/* Applicant Options */}
                {user?.role === "applicant" && (
                  <>
                    <Link
                      to="/saved-jobs"
                      onClick={() => setShowDropdown(false)}
                    >
                      Saved Jobs
                    </Link>

                    <Link
                      to="/applications"
                      onClick={() => setShowDropdown(false)}
                    >
                      Applications
                    </Link>

                    <Link
                      to="/job-alerts"
                      onClick={() => setShowDropdown(false)}
                    >
                      Job Alerts
                    </Link>
                  </>
                )}

                {/* Recruiter Options */}
                {user?.role === "recruiter" && (
                  <>
                    <Link
                      to="/recruiter-dashboard"
                      onClick={() => setShowDropdown(false)}
                    >
                      Recruiter Dashboard
                    </Link>

                    <Link
                      to="/post-job"
                      onClick={() => setShowDropdown(false)}
                    >
                      Post Job
                    </Link>

                    <Link
                      to="/applicants"
                      onClick={() => setShowDropdown(false)}
                    >
                      Applicants
                    </Link>
                  </>
                )}

                {/* Logout */}
                <button onClick={handleLogout}>
                  Logout
                </button>

              </div>
            )}

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;
