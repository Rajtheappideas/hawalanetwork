import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userData } = useUserContext();
  return userData ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
