import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function GoogleRegister() {
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});

  const createOrGetUser = async (response, addUser) => {
    const decoded = jwt_decode(response.credential);
    const userInfo = {
      pass: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      avatar: decoded.picture,
    };
    setUser(userInfo);
    const {data} = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/user/login', {
      pass: userInfo.pass,
      email: userInfo.email
    });
    console.log(data);
    if (data.message === 'Usuario logueado con exito!') {
      navigate('/home');
    }else {
      setToken(true)
    }
  };

  let handleChange = async (e) => {
    e.preventDefault();
    setUser((prevState) => {
      return {
        ...prevState,
        age: e.target.value,
      };
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "https://qatarbets-backend-production-ab54.up.railway.app/user/register",
      user
    );
    console.log(data);
  };
  return (
    <div>
      {!token ? (
        <GoogleLogin
          onSuccess={(res) => {
            createOrGetUser(res);
          }}
          onError={(err) => console.log(err)}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Edad:
            <input
              name="edad"
              placeholder="Edad aqui"
              onChange={handleChange}
              type="number"
            />
          </label>
          <button type="submit">Confirmar</button>
        </form>
      )}
    </div>
  );
}

export default GoogleRegister;
