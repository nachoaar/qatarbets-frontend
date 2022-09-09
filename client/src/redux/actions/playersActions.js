import axios from "axios";
import {
  getStartingPlayersHome,
  getStartingPlayersAway,
  cleanStartingPlayers,
} from "../reducer/playersSlice";

export function startingPlayersHome(payload) {
  try {
    return async function (dispatch) {
      const startingPlayersHome = await axios.get(
        `https://qatarbets-backend-production-ab54.up.railway.app/teams/playersSquadDb11/${payload}`
      );
      dispatch(getStartingPlayersHome(startingPlayersHome.data));
    };
  } catch (error) {
    console.log("erro en actions players" + error);
  }
}

export function startingPlayersAway(payload) {
  try {
    return async function (dispatch) {
      const startingPlayersAway = await axios.get(
        `https://qatarbets-backend-production-ab54.up.railway.app/teams/playersSquadDb11/${payload}`
      );
      dispatch(getStartingPlayersAway(startingPlayersAway.data));
    };
  } catch (error) {
    console.log("error en el action player" + error);
  }
}

export function startingPlayersClean() {
  return async function (dispatch) {
    dispatch(cleanStartingPlayers());
  };
}
