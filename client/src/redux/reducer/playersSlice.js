import { createSlice } from "@reduxjs/toolkit";

export const playersSlice = createSlice({
  name: "players",
  initialState: {
    allPlayers: [],
    startingPlayersHome: [],
    startingPlayersAway: [],
  },
  reducers: {
    getStartingPlayersHome: (state, action) => {
      state.startingPlayersHome = action.payload;
    },
    getStartingPlayersAway: (state, action) => {
      state.startingPlayersAway = action.payload;
    },
    cleanStartingPlayers: (state) => {
      state.startingPlayersHome = []
      state.startingPlayersAway = []
    },
  },
});

export const { getStartingPlayersHome, getStartingPlayersAway, cleanStartingPlayers } =
  playersSlice.actions;
export default playersSlice.reducer;
