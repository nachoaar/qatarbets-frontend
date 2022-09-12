import axios from "axios";
import { cleanMatch, getMatch, getMatchesMostBets } from "../reducer/matchSlice";
import { axiosURL } from "../../index.js";


export function matchId(payload) {
  return async function (dispatch) {
    const match = await axios.get(`${axiosURL}/fixture/${payload}`);
    dispatch(getMatch(match.data))
  };
}

export function matchesMostBets() {
  return async function (dispatch) {
    const mostBet = await axios.get(
      `${axiosURL}/bet/bets5`
    );
    dispatch(getMatchesMostBets(mostBet.data));
  };
}

export function matchClean() {
  return async function (dispatch) {
    dispatch(cleanMatch());
  };
}

