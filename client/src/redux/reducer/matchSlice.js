import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
  name:'match',
  initialState:{
    match: []
  },
  reducers:{
    getMatch: (state, action) => {
      state.match = action.payload
    },
    cleanMatch: (state) => {
      state.match = []
    }
  }
});

export const { getMatch, cleanMatch } = matchSlice.actions;
export default matchSlice.reducer;
