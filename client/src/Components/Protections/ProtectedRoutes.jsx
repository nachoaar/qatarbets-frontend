import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProtectedRoutes =  () => {
  const [admin, setAdmin] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/validate/rol', {withCredentials: true}).then((res) => {
      setLoading(false)
      setAdmin(res.data)
    })
  }, []);

  if (loading) {
    return <div>LOADING</div>
  }

  return admin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
