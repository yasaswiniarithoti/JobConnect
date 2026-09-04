import React, { useState } from "react";
import axios from "axios";

import {
  FaGoogle,
  FaLinkedin,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import {
  MdEmail,
  MdLock
} from "react-icons/md";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useDispatch
} from "react-redux";

import {
  login
} from "../../redux/slices/authSlice";

import "./login.css";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {

    e.preventDefault();

    let url =
      `http://localhost:3000/users?Email=${email}&Password=${password}`;


    axios.get(url)

      .then((res) => {

        let users = res.data;


        if (users.length > 0) {

          let user = users[0];


          dispatch(
            login({

              id: user.id,

              name: user.Name,

              email: user.Email,

              phone: user.Phno,

              location: user.Location,

              about: user.About,

              skills: user.Skills,

              education: user.Education,

              resume: user.Resume,

              role: user.role,

            })
          );


          navigate("/");

        } else {

          alert("Invalid email or password");

        }

      })

      .catch((err) => {

        console.log(err);

        alert("Unable to connect to server");

      });

  };


  return (

    <div className="login-page">

      <div className="login-box">


        {/* LEFT SIDE */}

        <div className="login-left">


          <div className="logo">

            <div className="logo-icon">
              J
            </div>

            <span>
              JobConnect
            </span>

          </div>


          <h1>
            Welcome Back!
          </h1>

          <p>
            Log in to your account
          </p>


          <br />


          <form onSubmit={handleLogin}>


            {/* EMAIL */}

            <label>
              Email Address
            </label>


            <div className="input-box">

              <MdEmail />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />

            </div>


            {/* PASSWORD */}

            <label>
              Password
            </label>


            <div className="input-box">

              <MdLock />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />


              <span
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                style={{
                  cursor: "pointer"
                }}
              >

                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}

              </span>

            </div>


            {/* OPTIONS */}

            <div className="login-options">

              <label>

                <input
                  type="checkbox"
                />

                Remember me

              </label>


              <Link to="/forgot-password">
                Forgot password?
              </Link>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-btn"
            >
              Login
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


          {/* SIGN UP */}

          <p className="signup-text">

            Don't have an account?{" "}

            <Link to="/register">
              Sign up
            </Link>

          </p>


        </div>


        {/* RIGHT SIDE */}

        <div className="login-right">

          <img
            src="/src/assets/images/login.png"
            alt="Login illustration"
          />

        </div>


      </div>

    </div>

  );

};


export default Login;