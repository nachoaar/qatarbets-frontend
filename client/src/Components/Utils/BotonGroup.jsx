import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGroupMatch } from "../../redux/actions/fixtureActions";

export const BotonGroup = (props) => {

  let navigate = useNavigate()

  const dispatch = useDispatch();

  let mitad = Math.floor(props.teams.length / 2);
  let team1 = props.teams.slice(0, mitad);
  let team2 = props.teams.slice(mitad);

  function handleOnClick(e) {
    e.preventDefault();
    if (props.redirigir) {
      navigate(`/home?id=${props.id}`)
    } else {
      dispatch(getGroupMatch(props.id));
    }
  }

  return (
    <button
      onClick={(e) => handleOnClick(e)}
      className="w-full transition duration-700 bg-gris hover:bg-rojo text-rojo hover:text-white font-parrafo p-2 active:bg-violet-700 focus:outline-none focus:ring focus:ring-rojosec focus:bg-rojo focus:text-white"
    >
      <div className="flex flex-row justify-between gap-3">
        <div className="p-3 flex items-center">
          <h1 className="font-fifa font-medium text-xl">{props.name}</h1>
        </div>
        <div className="flex flex-row justify-between items-center w-full gap-3">
          <div className="text-left w-2/4">
            {team1 &&
              team1.map((t) => {
                return (
                  <p key={t.name} className="text-sm">
                    {t.name}
                  </p>
                );
              })}
          </div>
          <div className="text-left w-2/4">
            {team2 &&
              team2.map((t) => {
                return (
                  <p key={t.name} className="text-sm">
                    {t.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </button>
  );
};
