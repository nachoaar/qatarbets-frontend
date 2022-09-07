import axios from "axios";
import { getMatch } from "../reducer/matchSlice";
import { axiosURL } from "../../index.js";


export function matchId(payload) {
  return async function (dispatch) {
    const match = await axios.get(`${axiosURL}/fixture/${payload}`);
    dispatch(getMatch(match.data))
  };
}

