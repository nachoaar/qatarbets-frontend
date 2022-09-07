import React from "react";
import Encabezado from "../../media/Encabezado.png";
import {Link} from "react-router-dom";
import { Boton } from "../Utils/Boton";
import { Navbar } from "../Navbar/Navbar";

export const SectionUno = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="bg-soccerPlayers bg-cover flex flex-col items-center justify-center bg-center h-screen">
        <div className="flex flex-col items-start px-8 gap-3">
          <img className=" max-h-48" src={Encabezado}></img>
          <p className="text-blanco font-parrafo max-w-md text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut soluta
            ullam itaque unde odit? Exercitationem eos deleniti, cupiditate
            ratione voluptates quisquam corrupti fugiat quibusdam at eum
            consectetur rem explicabo sunt!
          </p>
          <Link to="/register">
          <Boton  name="Register" />
          </Link>
        </div>
      </div>
    </div>
  );
};
