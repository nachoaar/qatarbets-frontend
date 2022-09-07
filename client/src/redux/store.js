import { configureStore } from "@reduxjs/toolkit";
import teams from "./reducer/teamSlice";
import fixture from "./reducer/fixtureSlice";
import group from "./reducer/groupSlice";
import matchReducer from "./reducer/matchSlice";
import players from "./reducer/playersSlice";

export default configureStore({
  reducer: {
    teams,
    fixture,
    group,
    match: matchReducer,
    players,
  },
});
