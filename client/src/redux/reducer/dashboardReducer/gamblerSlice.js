import { createSlice } from "@reduxjs/toolkit";

export const gamblerSlice = createSlice({
  name:"gambler",
  initialState: {
    gamblers: [],
    gambler: {}
  },
  reducers: {
    Gambler: (state, action) => {
      state.gamblers = action.payload
    },
    GamblerId: (state, action) => {
      state.gambler = action.payload
    }
  }
});

export const { GamblerId, Gambler  } = gamblerSlice.actions;
export default gamblerSlice.reducer;