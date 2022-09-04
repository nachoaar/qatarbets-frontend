import { configureStore } from "@reduxjs/toolkit";
import teams from "./reducer/teamSlice";
import fixture from "./reducer/fixtureSlice";
import group from "./reducer/groupSlice";
import user from "./reducer/userSlice";
import message  from "./reducer/messageSlice";

export default configureStore({
  reducer:{
    teams,
    fixture,
    group,
    user,
    message
  }
})
