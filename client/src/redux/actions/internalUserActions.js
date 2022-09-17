import axios from "axios";
import { getUser,getBets, sortUserBets } from "../reducer/internalUserData";
import { axiosURL } from "../..";

export function getInternalUser() {
    return async function (dispatch) {
      const user = await axios.get(`${axiosURL}/user/userId`, {withCredentials: true});
      dispatch(getUser(user.data))
    };
  }

export function getIuBets(){
  return async function(dispatch){
    const bets = await axios.get(`${axiosURL}/bet/allBets`)
    dispatch(getBets(bets.data))
  }
}
export function sortBets(id){
  return async function(dispatch){
    dispatch(sortUserBets(id))
  }
}