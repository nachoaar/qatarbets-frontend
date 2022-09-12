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
          )
         console.log(players.data);
        /* startingPlayers = [...startingPlayers, players.data] */
        dispatch(getStartingAllPlayers(players.data));
      });

    };

}

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
