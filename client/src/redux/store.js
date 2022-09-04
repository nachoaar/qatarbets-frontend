import { configureStore } from "@reduxjs/toolkit";
import teams from "./reducer/teamSlice";
import fixture from "./reducer/fixtureSlice";

export default configureStore({
  reducer: {
    teams,
    fixture
  }
});
