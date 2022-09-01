import React from "react";
import Encabezado from "../../media/Encabezado.png";
import { Boton } from "../Utils/Boton";

export const SectionUno = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="bg-soccerPlayers bg-cover flex flex-col items-center justify-center bg-center h-full">
        <div className="flex flex-col items-start px-8 gap-3">
          <img className=" max-h-48" src={Encabezado}></img>
          <p className="text-mikeWhite font-semibold max-w-md text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut soluta
            ullam itaque unde odit? Exercitationem eos deleniti, cupiditate
            ratione voluptates quisquam corrupti fugiat quibusdam at eum
            consectetur rem explicabo sunt!
          </p>
          <Boton name="Register" />
        </div>
      </div>
        <div className="bg-footer w-screen sm:flex items-center -top-16">
          <div className="flex items-center gap-x-4 ml-5 h-6 my-3">
            <div className="bg-squareFooter w-1 h-1 rotate-45"></div>
            <div className="bg-squareFooter w-2 h-2 rotate-45"></div>
            <div className="bg-squareFooter w-3 h-3 rotate-45"></div>
            <div className="bg-squareFooter w-4 h-4 rotate-45"></div>
          </div>
          <div className=" right-full mx-auto px-4">
            <div className="font-sans text-mikeWhite text-3xl ">
              CUENTA REGRESIVA PARTIDO INAUGURAL
            </div>
          </div>
          {/* <div className=" right-full px-4">
          <div className="font-sans text-mikeWhite text-3xl ">
            CUENTA REGRESIVA PARTIDO INAUGURAL
          </div>
        </div> */}
        </div>
    </div>
  );
};
