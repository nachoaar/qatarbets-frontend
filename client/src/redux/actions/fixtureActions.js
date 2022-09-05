import axios from "axios";
import {
  getAllFixture,
  getGroupFixture,
  getGamesPerGroup,
} from "../reducer/fixtureSlice";

export function getFixture() {
  return async function (dispatch) {
    const types = await axios.get(
      "https://qatarbets-backend-production-ab54.up.railway.app/fixture/get"
    );
    dispatch(getAllFixture(types.data));
  };
}

export function getGroupMatch(payload) {
  return async function (dispatch) {
    dispatch(getGroupFixture(payload));
  };
}

export function getMatchesPerGroup(payload) {
  return async function (dispatch) {
    dispatch(getGamesPerGroup(payload));
  };
}
