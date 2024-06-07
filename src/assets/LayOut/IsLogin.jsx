import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// PrivateRoute component
export default function IsLogin({ children }){
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      // If not logged in, redirect to the login page
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
}
