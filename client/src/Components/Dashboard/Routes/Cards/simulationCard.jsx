import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getFixture } from "../../../../redux/actions/fixtureActions";
import swal from "sweetalert";

export const SimulationCard = ({ match, flagStore }) => {
  let id = match.id;

  const result1 = useSelector((store) =>
    store.fixture?.fixture.filter((match) => match.id === id)
  );

  const result2 = useSelector((store) =>
    store.fixture?.fixture.filter((match) => match.id === id)
  );

  const result = flagStore === false ? result1 : result2;
  const dispatch = useDispatch();

  function handleOnClick(e) {
    e.preventDefault();
    axios
      .put(`https://qatarbets-backend-production.up.railway.app/fixture/matchSimulation?sim=simulate&id=${id}`)
      .then((r) =>
        swal({
          title: "Operacion realizada con exito!!",
          text: "Partido simulado correctamente",
          button: "Acept",
        })
      )
      .then((r) => dispatch(getFixture()));
  }

  function handleResetResult(e) {
    axios
      .put(
        `https://qatarbets-backend-production.up.railway.app/fixture/matchSimulation?sim=reset&id=${id}`
      )
      .then((r) =>
        swal({
          title: "Operacion realizada con exito!!",
          text: "Partido reiniciado correctamente",
          button: "Acept",
        })
      )
      .then((r) => dispatch(getFixture()));
  }

  return (
    <div className="flex bg-morado text-white p-2 rounded justify-between items-center">
      <div className="flex flex-row gap-2">
        <span>{`${match?.home_team.name} vs ${match?.away_team.name}`}</span>
        <span className="text-amarillo">
          {result !== null ? result[0]?.result_match : "simula el partido"}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        {
          <button
            className="bg-rojo rounded p-1"
            onClick={(e) => handleOnClick(e)}
          >
            simular
          </button>
        }
        {
          <button
            className="bg-rojo rounded p-1"
            onClick={(e) =>
              handleResetResult(e)
            }
          >
            {" "}
            reiniciar{" "}
          </button>
        }
      </div>
    </div>
  );
};
