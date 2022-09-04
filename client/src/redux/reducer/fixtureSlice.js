import { createSlice } from "@reduxjs/toolkit";

export const fixtureSlice = createSlice({
  name:"fixture",
  initialState:{
    fixture: []
  },
  reducers:{
    getAllFixture: (state, action) => {
      state.fixture = action.payload
    }
  }
});

export const { getAllFixture } = fixtureSlice.actions;
export default fixtureSlice.reducer;
