import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, recruiterOnly = false }) => {

  const { isLoggedIn, user } = useSelector(
    (state) => state.auth
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (recruiterOnly && user?.role !== "recruiter") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;