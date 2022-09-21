import { configureStore } from "@reduxjs/toolkit";

import teams from "./reducer/teamSlice";
import fixture from "./reducer/fixtureSlice";
import group from "./reducer/groupSlice";
import user from "./reducer/userSlice";
import message  from "./reducer/messageSlice";
import matchReducer from "./reducer/matchSlice";
import players from "./reducer/playersSlice";
import betSlice from "./reducer/dashboardReducer/dashbetSlice";
import gamblerSlice from "./reducer/dashboardReducer/dashgamblerSlice";
import fixtureDashSlice from "./reducer/dashboardReducer/dashfixtureSlice";
<<<<<<< HEAD
import pass from "./reducer/passSlice";

=======
import simulationSlice  from "./reducer/dashboardReducer/dashsimulationSlice";
import internalUserData from "./reducer/internalUserData";
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3


export default configureStore({
  reducer: {
    teams,
    fixture,
    group,
    match: matchReducer,
    players,
    message,
    dashbets: betSlice,
    dashgambler: gamblerSlice,
    dashfixture: fixtureDashSlice,
    user,
<<<<<<< HEAD
    pass,
=======
    dashsimulation: simulationSlice,
    internalUser: internalUserData,
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
  }
})