import React from 'react'
import { Link } from "react-router-dom";

export const ButtonDashboard = (props) => {
  return (
    <Link to={`/${props.section}`} className="w-full">
      <button className="w-full flex items-center h-14 transition pl-10 fill-textotable duration-500 hover:fill-rojosec hover:bg-gris hover:border-x hover:border-rojosec border-x border-gris">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/></svg>
        <p className="font-titulodash text-xl text-left text-gristexto">{props.name}</p>
      </button>
    </Link>
  )
}
