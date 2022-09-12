import React from "react";
import { Link } from "react-router-dom";

export const CardXs = (props) => {

  /* console.log("desde cardxs" + props.date) */

  return (
    <button className="h-24 wid-auto">
      <Link to={`/detail/${props.id}`}>
      <div className="h-full  bg-rojo flex flex-col justify-between py-1 px-2 ease-out duration-300 hover:bg-rojosec rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl  font-parrafo">
        <div className="bg-blanco">
          <h1 className="bg-rojosec text-center text-white">{props.date}</h1>
        </div>
        <div className="bg-rojosec text-white p-1 flex flex-row justify-between">
          <div>
            <h3>{props.homeTeam}</h3>
          </div>
          <h3>Vs</h3>
          <div>
            <h3>{props.awayTeam}</h3>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-1">
          <div className="w-1/3 bg-slate-200">
            <p>Local: {props.profit_coef_home}</p>
          </div>
          <div className="w-1/3 bg-slate-200">
            <p>Empate: {props.profit_coef_draw}</p>
          </div>
          <div className="w-1/3 bg-slate-200">
            <p>Visitante: {props.profit_coef_away}</p>
          </div>
        </div>
      </div>
      </Link>
    </button>
  );
};
