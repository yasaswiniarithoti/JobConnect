import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./forgotpassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !newPassword || !confirmPassword) {
      alert("Please enter all the fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let url = `http://localhost:3000/users?Email=${email}`;

    axios.get(url)
      .then((res) => {
        if (res.data.length === 0) {
          alert("Email not found");
          return;
        }

        let user = res.data[0];

        let updateUrl = `http://localhost:3000/users/${user.id}`;

        let data = {
          Password: newPassword
        };

        axios.patch(updateUrl, data)
          .then((res) => {
            alert("Password updated successfully");

            setEmail("");
            setNewPassword("");
            setConfirmPassword("");

            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
            alert("Password update failed");
          });
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="forgot-password-page">

      <div className="forgot-password-card">

        <div className="forgot-password-icon">
          🔐
        </div>

        <p className="forgot-password-label">
          ACCOUNT RECOVERY
        </p>

        <h1>Forgot Password?</h1>

        <p className="forgot-password-text">
          Enter your registered email and create a new password.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="forgot-form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="forgot-form-group">
            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="forgot-form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="reset-password-button"
          >
            Reset Password
          </button>

        </form>

        <button
          className="back-login-button"
          onClick={() => navigate("/login")}
        >
          ← Back to Login
        </button>

      </div>

    </div>
  );
};

export default ForgotPassword;
