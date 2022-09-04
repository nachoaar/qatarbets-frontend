import axios from "axios";
import { getAllTeams } from "../reducer/teamSlice";



export function getTeams() {
  return async function (dispatch) {
    const teams = await axios.get("https://qatarbets-backend-production-ab54.up.railway.app/teams/get");
    dispatch(getAllTeams(teams.data))
  };
}

