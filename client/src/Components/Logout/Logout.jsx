import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/validate/logout', {withCredentials: true})
    navigate('/')
  }

  return (
    <p onClick={(e) => handleClick(e)}>Logout</p>
  )
}

export default Logout