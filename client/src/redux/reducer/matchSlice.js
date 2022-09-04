import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  match: [],
};

export const matchSlice = createSlice({
  name:'match',
  initialState,
  reducers:{
    getMatch: (state = initialState, action) => {
      state.match = action.payload
    }
  }
});

export const { getMatch } = matchSlice.actions;
export default matchSlice.reducer;