import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startingPlayersClean } from "../../redux/actions/playersActions";

export const ButtonMatch = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    if (props.stage) {
      navigate(`/detail/${props.stage}/${props.id}`);
    } else {
      navigate(`/detail/${props.id}`);
    }
  };

  return (
    <button
      onClick={onClick}
      className="w-full transition duration-700 bg-gris hover:bg-rojo text-rojo hover:text-white font-parrafo active:bg-violet-700 focus:outline-none focus:ring focus:ring-rojosec focus:bg-rojo focus:text-white"
    >
      <div className="flex flex-row justify-center items-center font-parrafo text-md p-3">
        <div className="flex gap-2">
          <p>{props.home_team}</p>
          <p className="font-fifa">VS</p>
          <p>{props.away_team}</p>
        </div>
      </div>
    </button>
  );
};
