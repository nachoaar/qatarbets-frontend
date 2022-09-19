import React from "react";
import { useDispatch } from "react-redux";
import { getMatchesAll, getMatchesFinished, getMatchesNotStarted } from "../../../redux/actions/fixtureActions";

export const ButtonStatus = (props) => {
  const dispatch = useDispatch();

  const handleOnClick =(e)=> {
    e.preventDefault();
    if (props.order === "todos") return dispatch(getMatchesAll());
    if (props.order === "finalizados") return dispatch(getMatchesFinished());
    return dispatch(getMatchesNotStarted());
  }

  return (
    <button
      onClick={handleOnClick}
      className="w-full transition duration-700 bg-gris hover:bg-rojo text-rojo hover:text-white font-parrafo active:bg-violet-700 focus:outline-none focus:ring focus:ring-rojosec focus:bg-rojo focus:text-white"
    >
      <div className="flex flex-row justify-between gap-3">
        <div className="p-3 flex items-center">
          <h1 className="font-fifa font-medium text-xl">{props.order}</h1>
        </div>
      </div>
    </button>
  );
};
