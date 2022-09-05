import axios from "axios";
import FilterByGroups from "../../Components/Filter/FilterByGroup";
import { getAllFixture, filterByGroup} from "../reducer/fixtureSlice";



export function getFixture() {
  return async function (dispatch) {
    const types = await axios.get("https://qatarbets-backend-production-ab54.up.railway.app/fixture/get");
    dispatch(getAllFixture(types.data))
  };
}


export function filterByGroupAction(payload){
  console.log(payload)
  return async function (dispatch){
    
    dispatch(filterByGroup(payload))
  }
}
