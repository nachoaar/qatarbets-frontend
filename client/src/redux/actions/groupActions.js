import axios from "axios";
import { getAllGroup, getGroupId } from "../reducer/groupSlice";

export function getGroups() {
  return async function (dispatch) {
    const group = await axios.get("/groups");
    dispatch(getAllGroup(group.data))
  };
}

export function groupById(payload) {
  return async function (dispatch) {
    dispatch(getGroupId(payload))
  };
}