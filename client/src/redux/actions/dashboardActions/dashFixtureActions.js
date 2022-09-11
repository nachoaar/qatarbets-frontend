import axios from "axios";

import { axiosURL } from "../../../index.js";
import { getDashFixture } from "../../reducer/dashboardReducer/dashfixtureSlice.js";

export function dashFixture() {
  return async function (dispatch) {
    const fixture = await axios.get(
      `${axiosURL}/fixture/get`
    );
    dispatch(getDashFixture(fixture.data));
  };
}


