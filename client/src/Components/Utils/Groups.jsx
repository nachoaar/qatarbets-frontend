import React from "react";
import { useNavigate } from "react-router-dom";

export const Groups = (props) => {

  console.log(props)

let navigate = useNavigate()

  const onClick = (e)=>{
    e.preventDefault();
    navigate(`/home?id=${props.id}`)
  }


  return (

      <button onClick={onClick} className="flex flex-col items-center bg-morado  backdrop-blur rounded-tr-3xl rounded-bl-3xl w-full sm:w-1/5 text-blanco p-2 ease-out duration-300 hover:shadow-md hover:bg-violet-900">
        <h2 className="text-center mb-3 font-titulo text-xl">
          {props.name.toUpperCase().replace("_", " ")}
        </h2>
        {props.teams &&
          props.teams.map((t) => {
            return (
              <div className="bg-rojosec gap-1 h-auto p-2 flex items-center justify-around mb-2 rounded-tr-lg rounded-bl-lg w-11/12">
                <div className="bg-amarillo overflow-hidden items-center border-solid border-4 border-white w-14 h-10 rounded-tr-lg rounded-bl-lg">
                  <img
                    src={`https://countryflagsapi.com/png/${t.name}`}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className="w-full text-center h-10 flex justify-center items-center font-parrafo text-lg">
                  {t.name}
                </p>
              </div>
            );
          })}
      </button>

  );
};
