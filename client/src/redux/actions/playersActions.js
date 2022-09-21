import axios from "axios";
import {
  getStartingPlayersHome,
  getStartingPlayersAway,
  cleanStartingPlayers,
  getStartingAllPlayers,
} from "../reducer/playersSlice";
import { axiosURL } from "../../index.js";

//trae 11 jugadores por equipo
export function startingAllPlayers() {
  return async function (dispatch) {
      const players = await axios.get(
        `${axiosURL}/teams/AllPlayersSquadDb11`
      );
      dispatch(getStartingAllPlayers(players.data));
  };
}

export function startingPlayersHome(payload) {
  return async function (dispatch) {
    dispatch(getStartingPlayersHome(payload));
  };
}

export function startingPlayersAway(payload) {
  return async function (dispatch) {
    dispatch(getStartingPlayersAway(payload));
  };
}

export function startingPlayersClean() {
  return async function (dispatch) {
    dispatch(cleanStartingPlayers());
  };
}
