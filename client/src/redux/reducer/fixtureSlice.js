import { createSlice } from "@reduxjs/toolkit";

export const fixtureSlice = createSlice({
  name:"fixture",
  initialState:{
    fixture: [],
    filtredMatches: [],
  },
  reducers:{
    getAllFixture: (state, action) => {
      state.fixture = action.payload
    },
    filterByGroup: (state,action) =>{

      const asd = state.fixture?.filter((match) => match.groupId === Number(action.payload)).slice(0,4)
      console.log(asd)
        state.filtredMatches = asd

    }
  }
});


export const { getAllFixture,filterByGroup } = fixtureSlice.actions;
export default fixtureSlice.reducer;
