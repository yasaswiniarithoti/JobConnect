import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import Companies from "../pages/Companies/Companies";
import CompanyDetails from "../pages/CompanyDetails/CompanyDetails";
import Contact from "../pages/Contact/Contact";

import SavedJobs from "../pages/SavedJobs/SavedJobs";
import Profile from "../pages/Profile/Profile";
import Applications from "../pages/Applications/Applications";
import JobAlerts from "../pages/JobAlerts/JobAlerts";

import RecruiterDashboard from "../pages/RecruiterDashboard/RecruiterDashboard";
import PostJob from "../pages/PostJob/PostJob";
import Applicants from "../pages/Applicants/Applicants";

import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import ProtectedRoute from "./ProtectedRoutes";

const AppRoutes = () => {

  return (
    <Routes>

      {/* PUBLIC ROUTES */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/jobs" element={<Jobs />} />

      <Route path="/companies" element={<Companies />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/job-details"
        element={<JobDetails />}
      />

      <Route
        path="/job-details/:title"
        element={<JobDetails />}
      />

      <Route
        path="/company-details/:name"
        element={<CompanyDetails />}
      />


      {/* USER PROTECTED ROUTES */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/saved-jobs"
        element={
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <Applications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/job-alerts"
        element={
          <ProtectedRoute>
            <JobAlerts />
          </ProtectedRoute>
        }
      />


      {/* RECRUITER ONLY ROUTES */}

      <Route
        path="/recruiter-dashboard"
        element={
          <ProtectedRoute recruiterOnly={true}>
            <RecruiterDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/post-job"
        element={
          <ProtectedRoute recruiterOnly={true}>
            <PostJob />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applicants"
        element={
          <ProtectedRoute recruiterOnly={true}>
            <Applicants />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applicants"
        element={
          <ProtectedRoute>
            <Applicants />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;