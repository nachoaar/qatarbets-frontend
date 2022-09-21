import React from "react";
import { Link } from "react-router-dom";

export const CardMatch = (props) => {
  let groupN = props.groupName?.find((e, index) => index + 1 === props.group);
  let letter = groupN[groupN?.length - 1];


let date = new Date(props.date)
date = date.toLocaleDateString("es-AR",{day:'numeric', month:'numeric', year:'numeric'});
let hora = new Date(props.date)



  return (
    <Link to={`/detail/${props.id}`}>
      <div className={` ${props.status === "Finished" ? "bg-morado hover:bg-moradosec ring-2 ring-inset ring-white" : "bg-rojo hover:bg-rojosec"} mb-2 sm:mb-0 w-full h-auto sm:h-28 p-1.5 flex flex-col sm:flex-row gap-1 rounded-md transition-colors duration-700 `}>
        <div className="w-full flex flex-row gap-1 justify-around">
          <div className="w-12 sm:h-full bg-rojosec flex justify-center items-center rounded-md">
            <h1 className="font-fifa text-xl text-white">{letter}</h1>
          </div>
          <div className="flex flex-col h-full w-44 rounded-md gap-1">
            <div className="w-full bg-morado h-1/2 rounded-md flex flex-row gap-3 justify-start items-center">
              <div className="overflow-hidden border-2 border-white w-10 h-10 bg-morado translate-x-1 rounded flex items-center">
                <img
                  src={props.home_team === "South Korea" ? `https://countryflagsapi.com/png/The%20Republic%20Of%20Korea` : `https://countryflagsapi.com/png/${props.home_team}`}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
              <p className="font-parrafo font-medium text-white">
                {props.home_team}
              </p>
            </div>
            <div className="w-full bg-morado h-1/2 rounded-md flex flex-row gap-3 justify-start items-center">
              <div className="overflow-hidden border-2 border-white w-10 h-10 bg-morado translate-x-1 rounded flex items-center">
                <img
                  src={props.away_team === "South Korea" ? `https://countryflagsapi.com/png/The%20Republic%20Of%20Korea` : `https://countryflagsapi.com/png/${props.away_team}`}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
              <p className="font-parrafo font-medium text-white">
                {props.away_team}
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full w-7 gap-1">
            <div className={` ${props.result_match === "home" ? "bg-green-600" : "bg-rojosec"} w-full h-1/2 rounded-tl rounded-bl flex flex-row justify-center items-center` }>
              <p className="font-parrafo text-white text-lg">L</p>
            </div>
            <div className={` ${props.result_match === "tie" ? "bg-green-600" : "bg-rojosec"} w-full h-1/2 rounded-tl rounded-bl flex flex-row justify-center items-center` }>
              <p className="font-parrafo text-white text-lg">E</p>
            </div>
            <div className={` ${props.result_match === "away" ? "bg-green-600" : "bg-rojosec"} w-full h-1/2 rounded-tl rounded-bl flex flex-row justify-center items-center` }>
              <p className="font-parrafo text-white text-lg">V</p>
            </div>
          </div>
          <div className="rounded flex flex-col bg-morado h-full w-24 gap-1">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">{props.status}</p>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-end items-center">
              <p className="font-parrafo text-white text-lg">
                {date}
              </p>
              <p className="font-parrafo text-white text-lg">
                {` ${hora.getHours()}:00 hs`}
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full w-0 sm:w-6 gap-3 justify-center items-center invisible sm:visible">
            <div className="bg-amarillo w-2 h-2 rotate-45"></div>
            <div className="bg-amarillo w-3 h-3 rotate-45"></div>
            <div className="bg-amarillo w-2 h-2 rotate-45"></div>
          </div>
        </div>
        <div className="flex flex-row gap-1 justify-between w-full bg-rojosec rounded sm:bg-transparent">
          <div className="rounded flex flex-col bg-rojosec h-full w-20">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-md px-4">LOCAL</p>
            </div>
            <div className="rounded w-full h-1/2 flex flex-row justify-center items-center bg-white">
              <p className="font-parrafo text-black text-lg">{props.profit_coef_home}</p>
            </div>
          </div>
          <div className="rounded flex flex-col bg-rojosec h-full w-20">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-md px-4">EMPATE</p>
            </div>
            <div className="rounded w-full h-1/2 flex flex-row justify-center items-center bg-white">
              <p className="font-parrafo text-black text-lg">{props.profit_coef_draw}</p>
            </div>
          </div>
          <div className="rounded flex flex-col bg-rojosec h-full w-20">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-md px-4">VISITANTE</p>
            </div>
            <div className="rounded w-full h-1/2 flex flex-row justify-center items-center bg-white">
              <p className="font-parrafo text-black text-lg">{props.profit_coef_away}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
