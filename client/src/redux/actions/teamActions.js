import axios from "axios";
import { getAllTeams } from "../reducer/teamSlice";



export function getTeams() {
  return async function (dispatch) {
    const teams = await axios.get("/teams/get");
    dispatch(getAllTeams(teams.data))
  };
}

