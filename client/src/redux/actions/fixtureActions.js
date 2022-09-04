import axios from "axios";
import { getAllFixture } from "../reducer/fixtureSlice";



export function getFixture() {
  return async function (dispatch) {
    const types = await axios.get("https://qatarbets-backend-production-ab54.up.railway.app/fixture/get");
    dispatch(getAllFixture(types.data))
  };
}

