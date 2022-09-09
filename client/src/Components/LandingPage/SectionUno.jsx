import React from "react";
import Encabezado from "../../media/Encabezado.png";
import {Link} from "react-router-dom";
import { Boton } from "../Utils/Boton";
import { Navbar } from "../Navbar/Navbar";
import { useAuth0 } from '@auth0/auth0-react'

export const SectionUno = () => {


  const { loginWithRedirect } = useAuth0();
  const {user} = useAuth0()
  console.log(user);

  return (
    <div className="h-screen flex flex-col justify-between bg-morado">
      <Navbar />
      <div className="bg-soccerPlayers bg-cover flex flex-col items-center justify-center bg-center h-screen mix-blend-hard-light">
        <div className="flex flex-col items-start px-8 gap-3">
          <img className=" max-h-48" src={Encabezado}></img>
          <p className="text-blanco font-parrafo max-w-md text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut soluta
            ullam itaque unde odit? Exercitationem eos deleniti, cupiditate
            ratione voluptates quisquam corrupti fugiat quibusdam at eum
            consectetur rem explicabo sunt!
          </p>
          <div>
          <Link to="/register">
          <Boton  name="Register" />
          </Link>
          <button type="button" onClick={()=> loginWithRedirect()} className="font-titulo text-blanco text-2xl bg-rojosec rounded-tr-3xl rounded-bl-3xl rounded-br-md w-60 h-16 ease-out duration-300 hover:shadow-xl hover:shadow-rojo/30">Login</button>
        </div>
          </div>
      </div>
    </div>
  );
};
