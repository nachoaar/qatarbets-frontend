import React from "react";
import { ButtonHeadToHead } from "./ButtonHeadToHead/ButtonHeadToHead";
import { ButtonHeadToHeadAway } from "./ButtonHeadToHead/ButtonHeadToHeadAway";

export const CardDetail = (props) => {

  const onClick = (profit, bet, betEng) => {
    props.openModal();
    props.setProfit(profit);
    props.setBet(bet);
  };

  let titulo = ""

  if(props.stage === "8") titulo = "Octavos de final"
  if(props.stage === "4") titulo = "Cuartos de final"
  if(props.stage === "2") titulo = "Semi final"
  if(props.stage === "1.5") titulo = "Tercer puesto"
  if(props.stage === "1") titulo = "Final"


  return (
    <div className="bg-rojosec w-full h-full p-3 font-parrafo rounded-tl rounded-tr-2xl rounded-br rounded-bl-2xl flex flex-col justify-between">
      <div className=" flex flex-row justify-around text-white p-1 font-fifa">
        <p>FIFA WORLD CUP</p>
        {!props.stage ? <p>GRUPO: {props.group}</p> : <p>{titulo}</p>}

      </div>
      <div className="bg-morado text-white py-9 flex flex-row justify-around items-center mb-3">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3">
            <p className="text-lg sm:text-2xl font-fifa">{props.home_team}</p>
          </div>
          <div className="bg-amarillo border-solid border-4 border-white w-14 h-12 rounded-tr-lg rounded-bl-lg overflow-hidden flex items-center justify-center">
            <img
              src={props.home_team === "South Korea" ? `https://countryflagsapi.com/png/The%20Republic%20Of%20Korea` : `https://countryflagsapi.com/png/${props.home_team}`}
              alt=""
              className="w-14 h-12"
            />
          </div>
        </div>
        <h2 className="font-fifa">VS</h2>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3">
            <p className="text-lg sm:text-2xl font-fifa">{props.away_team}</p>
          </div>
          <div className="bg-amarillo border-solid border-4 border-white w-14 h-12 rounded-tr-lg rounded-bl-lg overflow-hidden flex items-center justify-center">
            <img
              src={props.away_team === "South Korea" ? `https://countryflagsapi.com/png/The%20Republic%20Of%20Korea` : `https://countryflagsapi.com/png/${props.away_team}`}
              alt=""
              className="w-14 h-12"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-morado p-2 flex flex-col items-center">
        <h3 className="text-white">
          Ultimos enfrentamientos entre si:{" "}
          {props.headToHead?.length < 1 ? "No hubo" : ""}
        </h3>
        <div className="w-full h-auto flex flex-row">
          <div className="w-full h-auto flex flex-row flex-wrap justify-start gap-1">
            {props.headToHead &&
              props.headToHead.map((m) => {
                return <ButtonHeadToHead result={m.result} />;
              })}
          </div>
          <div className="w-full h-auto flex flex-row flex-wrap justify-end gap-1">
            {props.headToHead &&
              props.headToHead.map((m) => {
                return <ButtonHeadToHeadAway result={m.result} />;
              })}
          </div>
        </div>
      </div>

      <div className={` ${props.status === "Finished" ? "hidden sm:flex" : ""} flex flex-row justify-around gap-2 h-12`}>
        <button
          onClick={() => onClick(props.profit_coef_home, "home")}
          className={`${
            props.status === "Finished" ? "cursor-no-drop" : ""
          } rounded w-1/3 bg-slate-200 p-1 flex flex-row justify-center items-center gap-2 font-medium ease-out duration-300 hover:bg-moradosec hover:text-white`}
          disabled={props.status === "Finished" ? true : false}
        >
          <span>Local:</span>
          <p>{props.profit_coef_home}</p>
        </button>
        {!props.stage ? (
          <button
            onClick={() => onClick(props.profit_coef_draw, "draw")}
            className={`${
              props.status === "Finished" ? "cursor-no-drop" : ""
            } rounded w-1/3 bg-slate-200 p-1 flex flex-row justify-center items-center gap-2 font-medium ease-out duration-300 hover:bg-moradosec hover:text-white`}
            disabled={props.status === "Finished" ? true : false}
          >
            <span>Empate:</span>
            <p>{props.profit_coef_draw}</p>
          </button>
        ) : (
          ""
        )}

        <button
          onClick={() => onClick(props.profit_coef_away, "away")}
          className={`${
            props.status === "Finished" ? "cursor-no-drop" : ""
          } rounded w-1/3 bg-slate-200 p-1 flex flex-row justify-center items-center gap-2 font-medium ease-out duration-300 hover:bg-moradosec hover:text-white`}
          disabled={props.status === "Finished" ? true : false}
        >
          <span>Visitante:</span>
          <p>{props.profit_coef_away}</p>
        </button>
      </div>
    </div>
  );
};
