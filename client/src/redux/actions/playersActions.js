import axios from "axios";
import {
  getStartingPlayersHome,
  getStartingPlayersAway,
  cleanStartingPlayers,
} from "../reducer/playersSlice";

export function startingPlayersHome(payload) {
  return async function (dispatch) {
    const startingPlayersHome = await axios.get(
      `https://qatarbets-backend-production-ab54.up.railway.app/teams/playersSquadDb11/${payload}`
    );
    dispatch(getStartingPlayersHome(startingPlayersHome.data));
  };
}

export function startingPlayersAway(payload) {
  return async function (dispatch) {
    const startingPlayersAway = await axios.get(
      `https://qatarbets-backend-production-ab54.up.railway.app/teams/playersSquadDb11/${payload}`
    );
    dispatch(getStartingPlayersAway(startingPlayersAway.data));
  };
}

export function startingPlayersClean() {
  return async function (dispatch) {
    dispatch(cleanStartingPlayers());
  };
}
