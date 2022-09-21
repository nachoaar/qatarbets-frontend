import React from "react";
import { useDispatch } from "react-redux";
import { orderByDate } from "../../../redux/actions/fixtureActions";

export const ButtonFecha = (props) => {
  const dispatch = useDispatch();

  const handleOnClick =(e)=> {
    e.preventDefault();
    if (props.cod === "asc") return dispatch(orderByDate("asc"));
    return dispatch(orderByDate("desc"));
  }

  return (
    <button
      onClick={handleOnClick}
<<<<<<< HEAD
      className="w-full transition duration-700 bg-gris hover:bg-rojo text-rojo hover:text-white font-parrafo active:bg-violet-700 focus:outline-none focus:ring focus:ring-rojosec focus:bg-rojo focus:text-white"
=======
      className="w-full rounded transition duration-700 bg-gris hover:bg-rojo text-rojo hover:text-white font-parrafo active:bg-violet-700 focus:outline-none focus:ring focus:ring-rojosec focus:bg-rojo focus:text-white"
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
    >
      <div className="flex flex-row justify-between gap-3">
        <div className="p-3 flex items-center">
          <h1 className="font-medium text-xl">{props.order}</h1>
        </div>
      </div>
    </button>
  );
};
