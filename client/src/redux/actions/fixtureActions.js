import axios from "axios";

import { getAllFixture, filterByGroup, getGroupFixture, getGamesPerGroup, getFixtureCity, orderFixture} from "../reducer/fixtureSlice";
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
  console.log(payload)
  return async function (dispatch){

    dispatch(filterByGroup(payload))
  }
}


export function getMatchesPerGroup(payload) {
  return async function (dispatch) {
    dispatch(getGamesPerGroup(payload));
  };
}
