import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { BotonGroup } from "../Utils/BotonGroup";

export const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between items-center py-6 w-5/6 h-screen">
        <div className="h-full w-1/5 bg-gradient-to-b from-rojobg to-moradobg py-2 flex flex-col gap-1">
          <h1 className="text-lg text-white font-bold px-2">Grupos</h1>
          <BotonGroup />
          <BotonGroup />
          <BotonGroup />
          <BotonGroup />
          <BotonGroup />
          <BotonGroup />
          <BotonGroup />
          <BotonGroup />
          <h1 className="text-lg text-white font-bold px-2">Fechas</h1>
        </div>
        <div className="h-full w-4/5 bg-yellow-500">
          <h1>soy el contenedor</h1>
        </div>
      </div>
    </div>
  );
};
