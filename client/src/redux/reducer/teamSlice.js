import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name:"teams",
  initialState:{
    teams: []
  },
  reducers:{
    getAllTeams: (state, action) => {
      state.teams = action.payload
    }
  }
});

export const { getAllTeams } = teamSlice.actions;
export default teamSlice.reducer;