import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return <div>{!isAuthenticated ? <Navigate to="/" /> : <Outlet />}</div>;
};

export default ProtectedRoutes;
