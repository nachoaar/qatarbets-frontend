import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { login, registerUser } from "../../redux/reducer/userSlice";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const createOrGetUser = async (response, addUser) => {
    const decoded = jwt_decode(response.credential);
    const userInfo = {
      pass: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      avatar: decoded.picture,
      emailvalidate: true
    };
    setUser(userInfo);
    const data = Promise.resolve(
      dispatch(login({ pass: userInfo.pass, email: userInfo.email }))
    );
    const message = await data;
    setTimeout(() => {
      if (message.payload.user.message === "Usuario logueado con exito!") {
        navigate("/home");
      } else {
        setToken(true);
      }
    }, 1000);
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
    setLoading(true)
    dispatch(
      registerUser({
        name: user.name,
        age: user.age,
        email: user.email,
        pass: user.pass,
        avatar: user.avatar,
        emailvalidate: user.emailvalidate
      })
    );
    setTimeout(() => {
      window.location.reload(false)
    }, 1000);
  };
  return (
    <div className="w-full">
      {!token ? (
        <div className="w-full flex items-center justify-center p-4 rounded ring-1 ring-gris">
          <GoogleLogin
            onSuccess={(res) => {
              createOrGetUser(res);
            }}
            onError={(err) => console.log(err)}
          />
        </div>
      ) : (
        <div className="w-full my-1">
          <form
            onSubmit={handleSubmit}
            className="ring-1 ring-rojosec p-4 rounded flex flex-col gap-2 "
          >
            <p className="text-md font-semibold">* Por favor ingrese su edad</p>
            {/* <label className="mr-4">Edad:</label> */}
            <input
              name="edad"
              placeholder="Edad aqui"
              onChange={handleChange}
              type="number"
              autoFocus
              className="ring-1 ring-rojosec rounded p-2"
            />

            <button type="submit" className="p-2 bg-morado rounded text-white" disabled={loading === true}>
              Confirmar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default GoogleAuth;
