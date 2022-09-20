import React, { useEffect, useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { login, registerUser } from "../../redux/reducer/userSlice";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { clearMessage } from "../../redux/reducer/messageSlice";

function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const [msg, setMsg] = useState('');
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);
  const { message } = useSelector((state) => state.message);

  const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential);
    const userInfo = {
      pass: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      avatar: decoded.picture,
    };
    setUser(userInfo);
    /* const data = Promise.resolve(
      dispatch(login({ pass: userInfo.pass, email: userInfo.email }))
    );
    const message = (await data).payload.user; */
    
    
    
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

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: user.name,
        age: user.age,
        email: user.email,
        pass: user.pass,
        avatar: user.avatar,
      })
    );
  };
  if (msg !== '') {
    if (message.hasOwnProperty("error")) {
      setToken(true);
      setModal(true);
    }
  }
  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!token && !modal ? (
      <GoogleLogin
        type="standard"
        theme="outline"
        size="large"
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

export default GoogleAuth;
