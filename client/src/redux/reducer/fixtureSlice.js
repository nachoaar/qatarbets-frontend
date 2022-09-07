import { createSlice } from "@reduxjs/toolkit";

export const fixtureSlice = createSlice({

  name: "fixture",
  initialState: {
    fixture: [],
    fixtureGroup: [],
    fixtureGamesPerGroup: [],
    filtredMatches: [],

  },
  reducers: {
    getAllFixture: (state, action) => {
      state.fixture = action.payload
    },
    filterByGroup: (state,action) =>{

      const asd = state.fixture?.filter((match) => match.groupId === Number(action.payload)).slice(0,4)
      console.log(asd)
        state.filtredMatches = asd

    },
    getGroupFixture: (state, action) => {
      state.fixtureGroup = state.fixture.filter(
        (g) => g.groupId === action.payload
      );
    },
    getGamesPerGroup: (state, action) => {
      /* state.fixtureGamesPerGroup = []; */
      for (let i = 1; i < 9; i++) {
        const matches = state.fixture
          .filter((m) => m.groupId === i)
          .slice(0, action.payload);
        state.fixtureGamesPerGroup = [...state.fixtureGamesPerGroup, matches];

        /* state.fixtureGamesPerGroup.push(state.fixture.filter(m => m.groupId === i).slice(0, action.payload)); */
      }
      console.log(state.fixtureGamesPerGroup);
    },
  },
});

export const { getAllFixture, getGroupFixture, getGamesPerGroup,filterByGroup  } = fixtureSlice.actions;
export default fixtureSlice.reducer;
