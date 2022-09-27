import axios from "axios";
import { axiosURL } from "../../../index.js";
import { AllGames, SetSimulated, SimulateAll, ResetMatch, ResetAll} from "../../reducer/dashboardReducer/dashsimulationSlice.js";


export const getAllGames = () =>{
  return async function (dispatch) {
    const games = await axios.get(
      `${axiosURL}/fixture/get`
    );
    dispatch(AllGames(games.data));
  }
}

export const setSimulated = (toDo, id) =>{
  return async function(dispatch){
    await axios.put(`https://qatarbets-backend-production.up.railway.app/fixture/matchSimulation?sim=${toDo}&id=${id}`)
    const simulatedMatch = await axios.get(`https://qatarbets-backend-production.up.railway.app/fixture/${id}`)
    dispatch(SetSimulated(simulatedMatch.data))
  }
}
export const resetMatchSimulation = (id) =>{
  return async function(dispatch){
    axios.put(`https://qatarbets-backend-production.up.railway.app/fixture/matchSimulation?sim=reset&id=${id}`)
    dispatch(ResetMatch(id))
  }
}

export const makeAbsoluteSimulation = () =>{
  return async function(dispatch){
    await axios.put('https://qatarbets-backend-production.up.railway.app/fixture/groupsSimulation?sim=simulate')
    let payload = await axios.get('https://qatarbets-backend-production.up.railway.app/fixture/get')
    dispatch(SimulateAll(payload.data))
  }
}

export const resetAllMatches = () =>{
  return async function(dispatch){
    await axios.put('https://qatarbets-backend-production.up.railway.app/fixture/groupsSimulation?sim=reset')
    let payload = await axios.get('https://qatarbets-backend-production.up.railway.app/fixture/get')
    dispatch(ResetAll(payload.data))
  }
}
