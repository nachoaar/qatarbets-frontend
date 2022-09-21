import React from "react";

import imageDate from "../../../media/date.png";
import imageMap from "../../../media/map.png";
import imageStadium from "../../../media/stadium.png";
import soccer from "../../../media/socer.png";

export const CardCity = (props) => {


  let date = new Date(props.date);

  date = date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  let hora = new Date(props.date);

  return (
    <div className="bg-rojosec w-full h-auto p-3 font-parrafo rounded-tl rounded-tr-2xl rounded-br rounded-bl-2xl">
      <div className="flex p-2">
        <p className="text-white text-md font-fifa">Datos del partido</p>
      </div>
      <div className="bg-morado flex flex-row p-4 text-white items-center gap-2">
        <img src={soccer} alt="imagenCalendario" className="w-12 h-12" />
        <span>Estado:</span>
        <p>{props.status}</p>
        <p> - </p>
        <span>Resultado:</span>
        <p>{props.result_match}</p>
      </div>
      <div className=" flex flex-row p-4 text-white items-center gap-2">
        <img src={imageDate} alt="imagenCalendario" className="w-12 h-12" />
        <span>Fecha:</span>
        <p>{date} - {hora.getHours()}:00 hs</p>
      </div>
      <div className="bg-morado flex flex-row p-4 text-white items-center gap-2">
        <img src={imageMap} alt="imagenCalendario" className="w-12 h-12" />
        <span>Ciudad:</span>
        <p>{props.city}</p>
      </div>
      <div className=" flex flex-row p-4 text-white items-center gap-2">
        <img src={imageStadium} alt="imagenCalendario" className="w-12 h-12" />
        <span>Estadio:</span>
        <p>{props.stadium_name}</p>
      </div>
    </div>
  );
};
