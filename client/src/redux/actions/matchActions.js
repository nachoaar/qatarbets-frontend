import axios from "axios";
import { getMatch } from "../reducer/matchSlice";



export function matchId(payload) {
  return async function (dispatch) {
    const match = await axios.get(`/fixture/${payload}`);
    dispatch(getMatch(match.data))
  };
}

