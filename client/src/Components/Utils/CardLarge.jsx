import React from "react";
import { Link } from "react-router-dom";

export const CardLarge = (props) => {

  return (
    <Link to={`/detail/${props.id}`}>
      <button className="transition-colors duration-700 hover:bg-rojo scroll-smooth mb-3 snap-center h-52 w-80 bg-rojosec rounded-tr-3xl rounded-bl-3xl rounded-md flex flex-col p-4">
        <div className="w-full h-10 bg-morado flex justify-center items-center">
          <p className="font-parrafo text-2xl text-white">2022-11-20</p>
        </div>
        <div className="w-full h-12 flex justify-between items-center px-2">
          <p className="font-fifa text-md text-white">FIFA WORLD CUP</p>
          <p className="font-parrafo text-white">{`Fase de Grupo - ${props.groupId}`}</p>
        </div>
        <div className="w-full h-16 flex bg-morado items-center justify-center px-2">
          <div className="text-white flex justify-start items-center w-full gap-1">
            <div className="h-8 w-10 rounded border-2 border-white bg-rojo overflow-hidden flex items-center justify-center">
              <img
                src={`https://countryflagsapi.com/png/${props.home_team}`}
                alt=""
                className="h-8 w-10"
              />
            </div>
            <p className="font-parrafo">{props.home_team}</p>
          </div>
          <p className="text-white w-10 h-10 flex items-center justify-center font-fifa">vs</p>
          <div className="text-white flex justify-end items-center w-full gap-1">
            <p className="font-parrafo">{props.away_team}</p>
            <div className="h-8 w-10 rounded border-2 border-white bg-rojo overflow-hidden flex items-center justify-center">
              <img
                src={`https://countryflagsapi.com/png/${props.away_team}`}
                alt=""
                className="h-8 w-10"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-2 h-8 flex justify-center items-center gap-2 text-xs">
          <div className="bg-white h-full w-4/5 flex items-center justify-center">
            <p>Local: {props.profit_coef_home}</p>
          </div>
          <div className="bg-white h-full w-full flex items-center justify-center">
            <p>Empate: {props.profit_coef_draw}</p>
          </div>
          <div className="bg-white h-full w-4/5 flex items-center justify-center">
            <p>Visitante: {props.profit_coef_away}</p>
          </div>
        </div>
      </button>
    </Link>
  );
};
