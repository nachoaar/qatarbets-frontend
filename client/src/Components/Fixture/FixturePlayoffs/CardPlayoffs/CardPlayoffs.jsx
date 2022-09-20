import React from "react";
import { useNavigate } from "react-router-dom";

export const CardPlayoffs = ({ nameHome, nameAway, id, stage }) => {
  const navigate = useNavigate();

  const onClick = () => {
   /*  e.preventDefault(); */
    navigate(`/detail/${stage}/${id}`);
  };

  return (
    <button onClick={onClick} className="group ease-in-out duration-300 hover:scale-105" disabled={nameHome.search("-") === -1 ? false : true}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1 justify-start px-7 py-2 bg-rojo rounded-tr-lg rounded-bl-lg group-hover:bg-rojosec">
          {nameHome?.search("-") === -1 ? (
            <div className="bg-amarillo border-solid border-2 border-white w-8 h-6 rounded-tr-md rounded-bl-md overflow-hidden flex items-center justify-center">
              <img
                src={`https://countryflagsapi.com/png/${nameHome}`}
                alt=""
                className="w-8 h-6"
              />
            </div>
          ) : (
            ""
          )}
          <div className="text-white font-parrafo text-lg">
            <p>{nameHome}</p>
          </div>
        </div>
        <div className="flex flex-row gap-1 justify-start px-7 py-2 bg-rojo rounded-tr-lg rounded-bl-lg group-hover:bg-rojosec">
          {nameAway?.search("-") === -1 ? (
            <div className="bg-amarillo border-solid border-2 border-white w-8 h-6 rounded-tr-md rounded-bl-md overflow-hidden flex items-center justify-center">
              <img
                src={`https://countryflagsapi.com/png/${nameAway}`}
                alt=""
                className="w-8 h-6"
              />
            </div>
          ) : (
            ""
          )}
          <div className="text-white font-parrafo text-lg">
            <p>{nameAway}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
