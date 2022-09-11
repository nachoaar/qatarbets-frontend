import axios from "axios";
import { axiosURL } from "../../../index.js";
import { AllBets } from "../../reducer/dashboardReducer/dashbetSlice.js";

export function getAllBets() {
  return async function (dispatch) {
    const bets = await axios.get(
      `${axiosURL}/bet/allBets`
    );
    dispatch(AllBets(bets.data));
  }
}