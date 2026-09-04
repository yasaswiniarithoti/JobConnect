import React, { useState } from "react";
import axios from "axios";

import {
  FaGoogle,
  FaLinkedin,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import {
  MdEmail,
  MdLock,
  MdPerson,
  MdPhone,
} from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Phno, setPhno] = useState("");
  let [role, setRole] = useState("");
  let [Password, setPassword] = useState("");
  let [CPassword, setCpassword] = useState("");

  let url = "http://localhost:3000/users";

  let data = {
    Name,
    Email,
    Phno,
    Password,
    role,
  };

  let regName = /^[a-zA-Z ]{3,16}$/;

  let regEmail =
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  let regPhno =
    /^(?:\+91[-\s]?)?[0]?(?:91)?[789]\d{9}$/;

  let regPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  const validation = () => {
    if (
      !Name ||
      !Email ||
      !Phno ||
      !role ||
      !Password ||
      !CPassword
    ) {
      alert("Please enter all the fields");
      return false;
    }

    if (!regName.test(Name)) {
      alert("Invalid Name");
      return false;
    }

    if (!regEmail.test(Email)) {
      alert("Invalid Email");
      return false;
    }

    if (!regPhno.test(Phno)) {
      alert("Invalid Number");
      return false;
    }

    if (!regPassword.test(Password)) {
      alert(
        "Password must contain uppercase, lowercase, number and special character"
      );
      return false;
    }

    if (Password !== CPassword) {
      alert("Password and confirm password should be same");
      return false;
    }

    return true;
  };

  const registeruser = (x) => {
    x.preventDefault();

    if (!validation()) {
      return;
    }

    axios
      .get(`${url}?Email=${Email}`)
      .then((res) => {
        if (res.data.length > 0) {
          alert("Email already registered");
          return;
        }

        axios
          .post(url, data)
          .then((res) => {
            alert("Registration successfully");
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
            alert("Registration failed");
          });
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to check email");
      });
  };

  return (
    <div className="register-page">

      <div className="register-box">

        <div className="register-left">

          <div className="logo">
            <div className="logo-icon">
              J
            </div>

            <span>
              JobConnect
            </span>
          </div>

          <h1>Create Account</h1>

          <p>
            Join JobConnect and find your dream job
          </p>

          <form onSubmit={registeruser}>

            {/* NAME */}

            <label>Full Name</label>

            <div className="input-box">
              <MdPerson />

              <input
                type="text"
                placeholder="Enter your full name"
                value={Name}
                onChange={(x) => {
                  setName(x.target.value);
                }}
              />
            </div>


            {/* EMAIL */}

            <label>Email Address</label>

            <div className="input-box">
              <MdEmail />

              <input
                type="email"
                placeholder="Enter your email"
                value={Email}
                onChange={(x) => {
                  setEmail(x.target.value);
                }}
              />
            </div>


            {/* PHONE */}

            <label>Phone Number</label>

            <div className="input-box">
              <MdPhone />

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={Phno}
                onChange={(x) => {
                  setPhno(x.target.value);
                }}
              />
            </div>


            {/* ROLE */}

            <label>Register As</label>

            <div className="role-selection">

              <button
                type="button"
                className={
                  role === "applicant"
                    ? "role-btn active"
                    : "role-btn"
                }
                onClick={() => {
                  setRole("applicant");
                }}
              >
                <span className="role-icon">
                  👤
                </span>

                <span>
                  Applicant
                </span>
              </button>


              <button
                type="button"
                className={
                  role === "recruiter"
                    ? "role-btn active"
                    : "role-btn"
                }
                onClick={() => {
                  setRole("recruiter");
                }}
              >
                <span className="role-icon">
                  💼
                </span>

                <span>
                  Recruiter
                </span>
              </button>

            </div>


            {/* PASSWORD */}

            <label>Password</label>

            <div className="input-box">
              <MdLock />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a password"
                value={Password}
                onChange={(x) => {
                  setPassword(x.target.value);
                }}
              />

              <span
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                style={{ cursor: "pointer" }}
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>
            </div>


            {/* CONFIRM PASSWORD */}

            <label>Confirm Password</label>

            <div className="input-box">
              <MdLock />

              <input
                type="password"
                placeholder="Confirm your password"
                value={CPassword}
                onChange={(x) => {
                  setCpassword(x.target.value);
                }}
              />
            </div>


            {/* REGISTER */}

            <button
              type="submit"
              className="register-btn"
            >
              Create Account
            </button>

          </form>


          {/* SOCIAL LOGIN */}

          <div className="divider">
            <span>
              or continue with
            </span>
          </div>

          <button className="social-btn">
            <FaGoogle />
            Continue with Google
          </button>

          <button className="social-btn">
            <FaLinkedin />
            Continue with Linkedin
          </button>


          <p className="login-text">
            Already have an account?{" "}

            <Link to="/login">
              Login
            </Link>
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="register-right">

          <img
            src="/src/assets/images/register.png"
            alt="Register illustration"
          />

        </div>

      </div>

    </div>
  );
};

export default Register;