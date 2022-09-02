import React from "react";
import { CardLarge } from "../Utils/CardLarge";

export const SectionDos = () => {
  return (
    <div className="h-max flex flex-col justify-between items-center bg-footer py-6">
      <div className="flex flex-col flex-auto gap-4 items-center w-full justify-center">
        <div className="w-5/6 bg-gradient-to-b from-transparent to-yellow-400 flex flex-col  md:flex-row justify-between">
          <CardLarge />
          <CardLarge />
          <CardLarge />
        </div>
        <div className="flex flex-col md:flex-row w-5/6 h-1/2 gap-4">
          <div className="w-full  md:w-1/3  bg-soccerPlayers bg-cover bg-center h-96"></div>
          <div className="w-2/3 bg-gradient-to-b from-yellow-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
