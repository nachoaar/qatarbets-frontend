import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducer/userSlice.js';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    await axios.get('https://qatarbets-backend-production.up.railway.app/validate/logout', {withCredentials: true});
    dispatch(logout())
    navigate('/')
  }

  return (
    <p onClick={(e) => handleClick(e)}>Logout</p>
  )
}

export default Logout
