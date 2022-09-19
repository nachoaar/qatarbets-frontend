import React from "react";

import { useDispatch } from "react-redux";
import { getMatchesRound16, getMatchesRound2, getMatchesRound4, getMatchesRound8 } from "../../redux/actions/fixtureActions";

import { FixturePlayoffs } from "./FixturePlayoffs/FixturePlayoffs";

export const Fixture = () => {

/*   const dispatch = useDispatch();


  const onSimulateRound16 = (e)=>{
    e.preventDefault();
    dispatch(getMatchesRound16());
  }

  const onSimulateRound8 = (e)=>{
    e.preventDefault();
    dispatch(getMatchesRound8());
  }

  const onSimulateRound4 = (e)=>{
    e.preventDefault();
    dispatch(getMatchesRound4());
  }

  const onSimulateRound2 = (e)=>{
    e.preventDefault();
    dispatch(getMatchesRound2());
  } */


  return (
    <div className="flex flex-col items-center h-auto w-11/12">
      {/* <div className="bg-moradosec w-full flex flex-row gap-4 pl-8 py-2 text-md">
        <button
          className="bg-rojo text-white p-2 rounded"
          onClick={onSimulateRound16}
        >
          cargar octavos
        </button>
        <button
          className="bg-rojo text-white p-2 rounded"
          onClick={onSimulateRound8}
        >
          cargar cuartos
        </button>
        <button
          className="bg-rojo text-white p-2 rounded"
          onClick={onSimulateRound4}
        >
          cargar semis
        </button>
        <button
          className="bg-rojo text-white p-2 rounded"
          onClick={onSimulateRound2}
        >
          cargar final
        </button>
      </div> */}
      <FixturePlayoffs />
    </div>
  );
};
