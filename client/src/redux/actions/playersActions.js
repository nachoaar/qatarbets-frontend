import axios from "axios";
import {
  getStartingPlayersHome,
  getStartingPlayersAway,
  cleanStartingPlayers,
  getStartingAllPlayers,
} from "../reducer/playersSlice";

//trae 11 jugadores por equipo
export function startingAllPlayers(teams) {

  return async function (dispatch) {
    const startingPlayers = [];

    teams.map(async (id) => {

      const players = await axios.get(
        `https://qatarbets-backend-production-ab54.up.railway.app/teams/playersSquadDb11/${id}`
      );

      /* startingPlayers = [...startingPlayers, players.data] */
      dispatch(getStartingAllPlayers(players.data));
    });
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
