import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonReturn = ({title}) => {

  const navigate = useNavigate()

  const onClick = (e)=>{
    e.preventDefault();
    /* navigate(`/home/`) */
    navigate(`/home?fase=fase`)
  }


  return (
    <button
      onClick={(e) => onClick(e)}
      className=" rounded w-full transition duration-700 bg-gris hover:bg-rojo text-rojo hover:text-white font-parrafo p-2 active:bg-violet-700 focus:outline-none focus:ring focus:ring-rojosec focus:bg-rojo focus:text-white"
    >
      <div className="flex flex-row justify-between">
        <div className="p-3 flex items-center">
          <h1 className="font-fifa font-medium text-lg">{title}</h1>
        </div>
      </div>
    </button>
  );
};
