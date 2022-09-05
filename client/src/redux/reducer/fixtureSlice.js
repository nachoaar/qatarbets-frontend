import { createSlice } from "@reduxjs/toolkit";

export const fixtureSlice = createSlice({
  name:"fixture",
  initialState:{
    fixture: [],
    fixtureGroup: []
  },
  reducers:{
    getAllFixture: (state, action) => {
      state.fixture = action.payload
    },
    getGroupFixture: (state, action) => {
      state.fixtureGroup = state.fixture.filter((g) => g.groupId === action.payload);
    }
  }
});

export const { getAllFixture, getGroupFixture } = fixtureSlice.actions;
export default fixtureSlice.reducer;
