import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidebarDashboard } from "../SidebarDashboard/SidebarDashboard";
import { NavbarDashboard } from "../NavbarDashboard/NavbarDashboard";
import { SimulationCard } from "./Cards/simulationCard";
import { useState } from "react";
import {
  getFixture,
  getMatchesRound16,
  getMatchesRound2,
  getMatchesRound4,
  getMatchesRound8,
  resetFixtureSlice,
} from "../../../redux/actions/fixtureActions";
import axios from "axios";
import swal from "sweetalert";

export const Simulation = () => {
  const matches2 = useSelector((store) => store.fixture.fixture);
  const [flag2, setFlag2] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixture());
  }, [dispatch]);

  function handleSimulateAll(e) {
    e.preventDefault();
    if (e.target.value === "cargar octavos") {
      setFlag2(!flag2);
      dispatch(getMatchesRound16()).then((result) =>
      swal({
        title: "Operacion realizada con exito!!",
        text: "Se cargaron todos los equipos clasificados a 8vos de final",
        button: "Acept"
      })
      );
    } else if (e.target.value === "v") {
      axios
        .put(
          "https://qatarbets-backend-production.up.railway.app/fixture/groupsSimulation?sim=simulate"
        )
        .then((result) => dispatch(getFixture()))
        .then((result) => swal({
          title: "Operacion realizada con exito!!",
          text: "Se simularon todos los partidos de la fase de grupos",
          button: "Acept"
        }));
    } else if (e.target.value === "simular octavos") {
      dispatch(getMatchesRound8()).then((result) =>
      swal({
        title: "Operacion realizada con exito!!",
        text: "Se simularon todos los partidos de 8vos de final y se cargaron los equipos clasificados a 4tos de final",
        button: "Acept"
      })
      );
    } else if (e.target.value === "simular cuartos") {
      dispatch(getMatchesRound4()).then((result) =>
      swal({
        title: "Operacion realizada con exito!!",
        text: "Se simularon los partidos de 4tos de final y se cargaron los cuatro equipos clasificados a semifinales",
        button: "Acept"
      })
      );
    } else if (e.target.value === "simular semifinal") {
      dispatch(getMatchesRound2()).then((result) =>
      swal({
        title: "Operacion realizada con exito!!",
        text: "Se simularon los partidos de semifinal y se cargaron los dos equipos finalistas del torneo!!",
        button: "Acept"
      })
      );
    } else if (e.target.value === "reiniciar") {
      axios
        .put(
          "https://qatarbets-backend-production.up.railway.app/fixture/groupsSimulation?sim=reset"
        )
        .then((result) => dispatch(resetFixtureSlice()))
        .then((result) => dispatch(getFixture()))
        .then((result) => swal({
          title: "Operacion realizada con exito!!",
          text: "Se reiniciaron todos los partidos",
          button: "Acept"
        }));
    }
  }

  return (
    <div className="bg-gris w-full h-screen flex flex-row justify-between gap-5">
      <div className="bg-white h-full w-1/5">
        <SidebarDashboard />
      </div>
      <div className="flex flex-col w-full h-full divide-y divide-gristexto">
        <div className="h-auto w-full">
          <NavbarDashboard />
        </div>
        <div className="w-full h-14 flex items-center gap-2">
          <svg
            className="fill-gristexto transition duration-500 hover:fill-rojosec"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
          >
            <path d="m8.938 13 4.958-4.938L12.833 7l-3.895 3.875-1.771-1.75-1.063 1.063ZM4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3h11q.625 0 1.062.438Q17 3.875 17 4.5v11q0 .625-.438 1.062Q16.125 17 15.5 17Zm0-1.5h11v-11h-11v11Zm0-11v11-11Z" />
          </svg>
          <h2 className="font-titulodash font-bold text-gristexto text-lg">
            Simulaciones
          </h2>
          <button
            className="bg-rojo p-2 text-white rounded hover:bg-rojosec"
            onClick={(e) => handleSimulateAll(e)}
            value="v"
          >
            simular fase de grupos{" "}
          </button>
          <button
            className="bg-rojo p-2 text-white rounded hover:bg-rojosec"
            onClick={(e) => handleSimulateAll(e)}
            value="cargar octavos"
          >
            cargar octavos{" "}
          </button>
          <button
            className="bg-rojo p-2 text-white rounded hover:bg-rojosec"
            onClick={(e) => handleSimulateAll(e)}
            value="simular octavos"
          >
            simular octavos{" "}
          </button>
          <button
            className="bg-rojo p-2 text-white rounded hover:bg-rojosec"
            onClick={(e) => handleSimulateAll(e)}
            value="simular cuartos"
          >
            simular cuartos{" "}
          </button>
          <button
            className="bg-rojo p-2 text-white rounded hover:bg-rojosec"
            onClick={(e) => handleSimulateAll(e)}
            value="simular semifinal"
          >
            simular semifinal{" "}
          </button>
          <button
            className="bg-rojo p-2 text-white rounded hover:bg-rojosec"
            onClick={(e) => handleSimulateAll(e)}
            value="reiniciar"
          >
            reiniciar{" "}
          </button>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-5 ">
          {matches2 &&
            matches2.map((match) => {
              return (
                <div>
                  <SimulationCard match={match} flagStore={flag2} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
