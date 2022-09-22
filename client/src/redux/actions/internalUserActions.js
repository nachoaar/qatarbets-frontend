import axios from "axios";
import { getUser,getBets, sortUserBets, newAvatar, updateAvatar, updateName, clearAvatarState } from "../reducer/internalUserData";
import { axiosURL } from "../..";

export function getInternalUser() {
    return async function (dispatch) {
      const user = await axios.get(`${axiosURL}/user/userId`, {withCredentials: true});
      dispatch(getUser(user.data))
    };
  }

export function getIuBets(){
  return async function(dispatch){
    const bets =(await axios.get(`${axiosURL}/bet/allBets`)).data
    const matches  = (await axios.get(`${axiosURL}/fixture/get`) ).data
    const gamblers = (await axios.get(`${axiosURL}/user/`)).data
    let payload = {
      bets: bets,
      matches: matches,
      gamblers: gamblers,
    }

    dispatch(getBets(payload))
  }
}
export function sortBets(id){
  return async function(dispatch){
    dispatch(sortUserBets(id))
  }
}
export function getNewAvatar(){
  return async function(dispatch){
    const avatarLink = (await axios.get("https://qatarbets-backend-production.up.railway.app/avatar/cloud/pfp")).data
    console.log('Avatar Link --------->', avatarLink);
    dispatch(newAvatar(avatarLink[0]))
  }
}

export function updateUserAvatar(avatar , id){
  console.log('avatar --- >', avatar)
  return async function(dispatch){
     axios.put(`https://qatarbets-backend-production.up.railway.app/user/changeAvatar?userId=${id}&avatarLink=${avatar}`)
    dispatch(updateAvatar())
  }
}

export function updateUserName(newName, id){
  return async function(dispatch){
      axios.put(`https://qatarbets-backend-production.up.railway.app/user/changeUserName?userId=${id}&newName=${newName}`)
    dispatch(updateName())
  }
}

export function clearAvatar(){
  return async function(dispatch){
    dispatch(clearAvatarState())
  }
}