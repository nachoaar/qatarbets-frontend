import { configureStore } from "@reduxjs/toolkit";

import teams from "./reducer/teamSlice";
import fixture from "./reducer/fixtureSlice";
import group from "./reducer/groupSlice";
import user from "./reducer/userSlice";
import message  from "./reducer/messageSlice";
import matchReducer from "./reducer/matchSlice";
import players from "./reducer/playersSlice";
import betSlice from "./reducer/dashboardReducer/betSlice";
import gamblerSlice from "./reducer/dashboardReducer/gamblerSlice";




export default configureStore({
  reducer: {
    teams,
    fixture,
    group,
    match: matchReducer,
    players,
    message,
    Dashbets: betSlice,
    gambler: gamblerSlice,
    user
  }
})