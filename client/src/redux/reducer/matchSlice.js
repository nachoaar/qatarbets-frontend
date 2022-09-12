import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
  name:'match',
  initialState:{
    match: [],
    matchesMostBets: []
  },
  reducers:{
    getMatch: (state, action) => {
      state.match = action.payload
    },
    getMatchesMostBets: (state, action) => {
      state.matchesMostBets = action.payload
    },
    cleanMatch: (state) => {
      state.match = []
    }
  }
});

export const { getMatch, cleanMatch, getMatchesMostBets } = matchSlice.actions;
export default matchSlice.reducer;
