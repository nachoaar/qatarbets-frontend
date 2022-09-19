import { createSlice } from "@reduxjs/toolkit";

export const playersSlice = createSlice({
  name: "players",
  initialState: {
    allStartingPlayers: [],
    startingPlayersHome: [],
    startingPlayersAway: [],
  },
  reducers: {
    getStartingAllPlayers: (state, action) => {
      state.allStartingPlayers = action.payload
    },
    getStartingPlayersHome: (state, action) => {
      const playersHome = state.allStartingPlayers.filter(p => p.goalkeeper[0].teamId === action.payload)
      state.startingPlayersHome = playersHome;
    },
    getStartingPlayersAway: (state, action) => {
      const playersAway = state.allStartingPlayers.filter(p => p.goalkeeper[0].teamId === action.payload)
      state.startingPlayersAway = playersAway;
    },
    cleanStartingPlayers: (state) => {
      state.startingPlayersHome = [];
      state.startingPlayersAway = [];
    },
  },
});

export const {
  getStartingPlayersHome,
  getStartingPlayersAway,
  cleanStartingPlayers,
  getStartingAllPlayers,
} = playersSlice.actions;
export default playersSlice.reducer;
