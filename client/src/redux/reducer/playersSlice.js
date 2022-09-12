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
      if (state.allStartingPlayers.length < 32) {
        state.allStartingPlayers = [
          ...state.allStartingPlayers,
          action.payload,
        ];
      }
    },
    getStartingPlayersHome: (state, action) => {
      state.startingPlayersHome = action.payload;
    },
    getStartingPlayersAway: (state, action) => {
      state.startingPlayersAway = action.payload;
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
