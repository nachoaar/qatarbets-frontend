import axios from "axios";
import {
  getStartingPlayersHome,
  getStartingPlayersAway,
  cleanStartingPlayers,
  getStartingAllPlayers,
} from "../reducer/playersSlice";

//trae 11 jugadores por equipo
export function startingAllPlayers(teams) {
  console.log("desde la action");
  console.log(teams);

  return async function (dispatch) {
    const startingPlayers = [];

    teams.map(async (id) => {
      console.log("desde el map" + id);
      const players = await axios.get(
        `https://qatarbets-backend-production-ab54.up.railway.app/teams/playersSquadDb11/${id}`
      );
      console.log(players.data);
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
