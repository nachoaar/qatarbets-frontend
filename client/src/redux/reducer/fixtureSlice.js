import { createSlice } from "@reduxjs/toolkit";

export const fixtureSlice = createSlice({
  name: "fixture",
  initialState: {
    fixture: [],
    fixtureFilter: [],
    fixtureFilterCopy: [],
    fixtureGroup: [],
    fixtureGamesPerGroup: [],
    filtredMatches: [],
  },
  reducers: {
    getAllFixture: (state, action) => {
      const ordenado = action.payload.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      state.fixture = ordenado;
      state.fixtureFilter = ordenado.slice(0, 10);
      state.fixtureFilterCopy = ordenado;
    },
    getGroupFixture: (state, action) => {
      const filter = state.fixture.filter((g) => g.groupId === action.payload);
      const ordenado = filter.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      state.fixtureFilter = ordenado;
      state.fixtureFilterCopy = ordenado;
    },
    getFixtureCity: (state, action) => {
      state.fixtureFilter = state.fixtureFilterCopy.filter(
        (g) => g.city === action.payload
      );
    },
    filterByGroup: (state, action) => {
      const asd = state.fixture
        ?.filter((match) => match.groupId === Number(action.payload))
        .slice(0, 4);
      console.log(asd);
      state.filtredMatches = asd;
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

export const {
  getAllFixture,
  getGroupFixture,
  getGamesPerGroup,
  filterByGroup,
  getFixtureCity,
} = fixtureSlice.actions;
export default fixtureSlice.reducer;
