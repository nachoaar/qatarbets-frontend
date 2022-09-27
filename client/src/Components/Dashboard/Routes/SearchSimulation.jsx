import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../NavbarDashboard/Search/SearchDashboard.css"


export const SearchSimulation = () => {

  const [input, setInput] = useState({
    search: "",
  });

  const navigate = useNavigate();

  function handleOnChange(e) {
    setInput({
      search: e.target.value,
    })
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    setInput({
      search: "",
    });
    alert('si funciono we')
    navigate("/dashboard/simulation");
  }

  return (
    <form className="form" onSubmit={(e) => handleOnSubmit(e)}>
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
      </button>
      <input name="search" onChange={(e) => handleOnChange(e)} value={input.search} className="input" placeholder="Búsqueda por partido" required="" type="search" />
      <button className="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
    </form>
  )
}
