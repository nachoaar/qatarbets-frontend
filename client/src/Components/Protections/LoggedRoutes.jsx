import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Utils/Loader/Loader";

const LoggedRoutes = () => {
  const [auth, setAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://qatarbets-backend-production.up.railway.app/validate",
        { withCredentials: true }
      )
      .then((res) => {
        setLoading(false);
        setAuth(res.data);
      });

  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default LoggedRoutes;
