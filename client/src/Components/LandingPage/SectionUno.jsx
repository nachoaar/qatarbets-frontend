import React from "react";
import Encabezado from "../../media/Encabezado.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Boton } from "../Utils/Boton";
import { Navbar } from "../Navbar/Navbar";
import { useAuth0 } from '@auth0/auth0-react'

export const SectionUno = () => {

  const { isLoggedIn } = useSelector((state) => state.user);

  let botonRender = isLoggedIn;

  if(isLoggedIn){
    botonRender = <div>
      <Link to="/home">
        <Boton  name="Apostar" />
      </Link>
    </div>
  } else {
    botonRender = <div>
      <Link to="/register">
        <Boton  name="Registrarse" />
      </Link>
      <Link to="/login">
        <Boton  name="Acceder" />
      </Link>
    </div>
  }

  const {user} = useAuth0()
  console.log(user);

  return (
    <div className="h-screen flex flex-col justify-between bg-morado">
      <Navbar />
      <div className="bg-soccerPlayers bg-cover flex flex-col items-center justify-center bg-center h-screen mix-blend-hard-light">
        <div className="flex flex-col items-start px-8 gap-3">
          <img className=" max-h-48" src={Encabezado} alt="encabezado"></img>
          <p className="text-blanco font-parrafo max-w-md text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut soluta
            ullam itaque unde odit? Exercitationem eos deleniti, cupiditate
            ratione voluptates quisquam corrupti fugiat quibusdam at eum
            consectetur rem explicabo sunt!
          </p>
          <div>
            {botonRender}
        </div>
          </div>
      </div>
    </div>
  );
};
