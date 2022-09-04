import axios from "axios";
import { getAllGroup } from "../reducer/groupSlice";



export function getGroups() {
  return async function (dispatch) {
    const group = await axios.get("https://qatarbets-backend-production-ab54.up.railway.app/groups");
    dispatch(getAllGroup(group.data))
  };
}