import { createSlice } from "@reduxjs/toolkit";

export const fixtureSlice = createSlice({
  name: "fixture",
  initialState: {
    fixture: [],
    fixtureFilter: [],
    fixtureFilterCopy: [],
    fixtureDashboard: [],
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
      state.fixtureDashboard = action.payload
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
    orderFixture: (state, action) => {
      /* console.log(action.payload) */
      const fixture = [...state.fixtureFilter]
      console.log(fixture)
      const ordenadoAsc = fixture.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      const ordenadoDesc = fixture.sort(
        (a, b) => new Date(a.date) > new Date(b.date)
      );
      if(action.payload === "asc"){
        console.log("paso el if")
        state.fixtureFilter = [...ordenadoAsc]
      } state.fixtureFilter = [...ordenadoDesc]
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
  orderFixture
} = fixtureSlice.actions;
export default fixtureSlice.reducer;
