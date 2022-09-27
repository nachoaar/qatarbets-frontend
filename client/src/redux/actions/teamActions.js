import axios from "axios";
import { getAllTeams } from "../reducer/teamSlice";
import { axiosURL } from "../../index.js";

export function getTeams() {
  return async function (dispatch) {
    const teams = await axios.get(`${axiosURL}/teams/get`);
    dispatch(getAllTeams(teams.data))
  };
}

