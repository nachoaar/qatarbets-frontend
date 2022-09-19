import axios from "axios";

import { getAllFixture, filterByGroup, getGroupFixture, getGamesPerGroup, getFixtureCity, orderFixture, MatchId, matchId, cleanMatchId, matchesRound16, matchesRound8, matchesRound4, matchesRound2, resetFixture, matchesFinished, matchesNotStarted, matchesAll} from "../reducer/fixtureSlice";
import { axiosURL } from "../../index.js";

export function getFixture() {
  return async function (dispatch) {
    const types = await axios.get(
      `${axiosURL}/fixture/get`
    );
    dispatch(getAllFixture(types.data));
  };
}

export function getGroupMatch(payload) {
  return async function (dispatch) {
    dispatch(getGroupFixture(payload));
  };
}

export function getByCity(payload) {
  return async function (dispatch) {
    dispatch(getFixtureCity(payload));
  };
}

export function orderByDate(payload) {
  return async function (dispatch) {
    dispatch(orderFixture(payload));
  };
}

export function filterByGroupAction(payload){

  return async function (dispatch){

    dispatch(filterByGroup(payload))
  }
}


export function getMatchesPerGroup() {
  return async function (dispatch) {
    dispatch(getGamesPerGroup());
  };
}



export function getMatchId(payload) {
  return async function (dispatch) {
    dispatch(matchId(payload));
  };
}

export function matchIdClean() {
  return async function (dispatch) {
    dispatch(cleanMatchId());
  };
}

//funcion que trae partidos de octavos de final
export function getMatchesRound16() {
  return async function (dispatch) {
    const matches = await axios.post(
      `${axiosURL}/fixture/8stageSimulation/postStage`
    );
    dispatch(matchesRound16(matches.data));
  };
}

//funcion que trae partidos de cuartos de final
export function getMatchesRound8() {
  return async function (dispatch) {
    const matches = await axios.post(
      `${axiosURL}/fixture/8stageAllSimulation?sim=simulate`
    );
    dispatch(matchesRound8(matches.data));
  };
}

//funcion que trae partidos de semi final
export function getMatchesRound4() {
  return async function (dispatch) {
    const matches = await axios.post(
      `${axiosURL}/fixture/4stageAllSimulation?sim=simulate`
    );
    dispatch(matchesRound4(matches.data));
  };
}
//funcion que trae partidos la final
export function getMatchesRound2() {
  return async function (dispatch) {
    const matches = await axios.post(
      `${axiosURL}/fixture/semiStageAllSimulation?sim=simulate`
    );
    dispatch(matchesRound2(matches.data));
  };
}

export function resetFixtureSlice(){
  return async function(dispatch){
    dispatch(resetFixture())
  }
}
//action que filtra los partidos ya finalizados
export function getMatchesFinished(){
  return async function(dispatch){
    dispatch(matchesFinished())
  }
}

//action que filtra los partidos No finalizados
export function getMatchesNotStarted(){
  return async function(dispatch){
    dispatch(matchesNotStarted())
  }
}

//action que filtra los partidos No finalizados
export function getMatchesAll(){
  return async function(dispatch){
    dispatch(matchesAll())
  }
}
