import { createSlice } from "@reduxjs/toolkit";

export const betSlice = createSlice({
  name:"bet",
  initialState: {
    bets: []
  },
  reducers: {
    AllBets: (state, action) => {
      state.bets = action.payload
    }
  }
});

export const { AllBets } = betSlice.actions;
export default betSlice.reducer;