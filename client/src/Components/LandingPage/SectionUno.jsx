import React from "react";
import Encabezado from "../../media/Encabezado.png";
import { Link } from "react-router-dom";
import { Boton } from "../Utils/Boton";
import { Navbar } from "../Navbar/Navbar";
import { useSelector } from "react-redux";

export const SectionUno = () => {

  const user = useSelector((state) => state.user);

  return (
    <div className="h-screen flex flex-col justify-between bg-morado">
      <Navbar />
      <div className="bg-soccerPlayers bg-cover flex flex-col items-center justify-center bg-center h-screen mix-blend-hard-light">
        <div className="flex flex-col items-start px-8 gap-3">
          <img className=" max-h-48" src={Encabezado} alt="encabezado"></img>
          <p className="text-blanco text-2xl font-parrafo max-w-md text-justify">
            Apuestas Deportivas, QATARBETS Sitio N°1 en Casa de apuestas online de la copa del mundo. La primera casa de apuestas mundialistas en LATAM.
          </p>
          <div>
            {user.isLoggedIn ? (
              <Link to="/home">
                <Boton  name="Ingresar al sitio" />
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <Boton  name="Registrarse" />
                </Link>
                <Link to="/login">
                  <Boton  name="Login" />
                </Link>
              </>
            )}
        </div>
          </div>
        </div>
      </div>
  );
};
