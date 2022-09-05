import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
  name:'match',
  initialState:{
    match: []
  },
  reducers:{
    getMatch: (state, action) => {
      state.match = action.payload
    }
  }
});

export const { getMatch } = matchSlice.actions;
export default matchSlice.reducer;