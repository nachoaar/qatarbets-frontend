import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMatchesAllRounds } from "../../redux/actions/fixtureActions";
import { FixturePlayoffs } from "./FixturePlayoffs/FixturePlayoffs";

export const Fixture = () => {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getMatchesAllRounds())
})

  return (
    <div className="flex flex-col items-center h-auto w-11/12">
      <FixturePlayoffs />
    </div>
  );
};
