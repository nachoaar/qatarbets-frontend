import React from "react";

export const Bench = ({homeName, awayName, coachHome, coachAway}) => {
  return (
    <div className="w-full flex flex-row justify-around text-white gap-2 px-2">
      <div className="w-1/2 bg-amarillo border-t-4 border-l-4 border-r-4 border-white rounded-t-lg flex flex-row gap-2 p-2 text-black font-parrafo items-center justify-center">
        <h3 className="font-parrafo text-lg font-medium">local: </h3>
        <div className="bg-amarillo border-solid border-2 border-white w-8 h-6 rounded-tr-md rounded-bl-md overflow-hidden flex items-center justify-center">
          <img
            src={`https://countryflagsapi.com/png/${homeName}`}
            alt=""
            className="w-8 h-6"
          />
        </div>
        <span className="font-fifa">{homeName}</span>
        <p>/</p>
        <h3>Dt:</h3>
        <span>{coachHome}</span>
      </div>
      <div className="w-1/2 bg-rojosec border-t-4 border-l-4 border-r-4 border-white rounded-t-lg flex flex-row gap-2 p-2 font-parrafo items-center justify-center">
        <h3 className="font-parrafo text-lg font-medium">visitante: </h3>
        <div className="bg-amarillo border-solid border-2 border-white w-8 h-6 rounded-tr-md rounded-bl-md overflow-hidden flex items-center justify-center">
          <img
            src={`https://countryflagsapi.com/png/${awayName}`}
            alt=""
            className="w-8 h-6"
          />
        </div>
        <span className="font-fifa">{awayName}</span>
        <p>/</p>
        <h3>Dt:</h3>
        <span>{coachAway}</span>
      </div>
    </div>
  );
};
