import axios from "axios";
import { axiosURL } from "../../../index.js";
import { GamblerId, Gambler, GamblerName, CacheGambler } from "../../reducer/dashboardReducer/dashgamblerSlice.js";

export function getGamblers() {
  return async function (dispatch) {
    const gamblers = await axios.get(
      `${axiosURL}/user/`
    );
    dispatch(Gambler(gamblers.data));
  }
}

export function getGamblerId(payload) {
  return async function (dispatch) {
    const gambler = await axios.get(
      `${axiosURL}/user/userId/${payload}`
    );
    dispatch(GamblerId(gambler.data));
  }
}

export function getGamblerName(payload) {
  return async function (dispatch) {
    dispatch(GamblerName(payload));
  }
}

export function CacheDashGambler() {
  return async function (dispatch) {
    dispatch(CacheGambler());
  }
}