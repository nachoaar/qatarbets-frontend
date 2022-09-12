import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

  const navigate = useNavigate();

  let handleClick = async (e) => {
    await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/validate/logout', {withCredentials: true})
    navigate('/login')
  }

  return (
    <button onClick={handleClick}>Logout</button>
  )
}

export default Logout