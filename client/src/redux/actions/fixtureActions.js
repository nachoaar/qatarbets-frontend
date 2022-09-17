import axios from "axios";

import { getAllFixture, filterByGroup, getGroupFixture, getGamesPerGroup, getFixtureCity, orderFixture, MatchId, matchId, cleanMatchId} from "../reducer/fixtureSlice";
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


//nuevo para detail 2
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


