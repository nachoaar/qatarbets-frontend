import { configureStore } from "@reduxjs/toolkit";
import teams from "./reducer/teamSlice";

export default configureStore({
  reducer:{
    teams: teams
  }
})