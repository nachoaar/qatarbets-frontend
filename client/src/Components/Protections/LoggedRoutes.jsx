import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const LoggedRoutes =  () => {
  const [auth, setAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/validate', {withCredentials: true}).then((res) => {
      setLoading(false)
      setAuth(res.data)
    })
    console.log(auth);
  }, []);

  if (loading) {
    return <div>LOADING</div>
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default LoggedRoutes;
