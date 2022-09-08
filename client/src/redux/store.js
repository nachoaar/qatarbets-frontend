import { configureStore } from "@reduxjs/toolkit";
import teams from "./reducer/teamSlice";
import fixture from "./reducer/fixtureSlice";
import group from "./reducer/groupSlice";
import user from "./reducer/userSlice";
import message  from "./reducer/messageSlice";
import matchReducer from "./reducer/matchSlice";
<<<<<<< HEAD
import bets from "./reducer/betsSlice"
=======
import players from "./reducer/playersSlice";


>>>>>>> e2f87b30b8cfdd37b775ad1ed0ee3db2851ef566
export default configureStore({
  reducer: {
    teams,
    fixture,
    group,
    match: matchReducer,
<<<<<<< HEAD
    bets
  },
});
=======
    players,
    message
  }
})
>>>>>>> e2f87b30b8cfdd37b775ad1ed0ee3db2851ef566
