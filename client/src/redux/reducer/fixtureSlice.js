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
    fixtureMatchId: [],
  },
  reducers: {
    getAllFixture: (state, action) => {
      const ordenado = action.payload.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      state.fixture = ordenado;
      state.fixtureFilter = ordenado;
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
    orderFixture: (state, action) => {
      let fixture = state.fixtureFilter;

      if (action.payload === "asc") {
        let ordenadoAsc = fixture.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        state.fixtureFilter = ordenadoAsc;
      } else {
        let ordenadoDesc = fixture.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        state.fixtureFilter = ordenadoDesc;
      }
    },
    filterByGroup: (state, action) => {
      const asd = state.fixture
        ?.filter((match) => match.groupId === Number(action.payload))
        .slice(0, 4);
      console.log(asd);
      state.filtredMatches = asd;
    },
    getGamesPerGroup: (state) => {
      state.fixtureGamesPerGroup = [];
      for (let i = 1; i < 9; i++) {
        const matches = state.fixture
          .filter((m) => m.groupId === i)

        state.fixtureGamesPerGroup = [...state.fixtureGamesPerGroup, matches];

        /* state.fixtureGamesPerGroup.push(state.fixture.filter(m => m.groupId === i).slice(0, action.payload)); */
      }
    },
    //nuevo para detail dos
    matchId: (state, action) => {
      console.log("desde la action " + action.payload);
      const match = state.fixture?.filter((m) => m.id === Number(action.payload));
      console.log("match encontrado?");
      console.log(match);
      state.fixtureMatchId = match;
    },
  },
});

export const {
  getAllFixture,
  getGroupFixture,
  getGamesPerGroup,
  filterByGroup,
  getFixtureCity,
  orderFixture,
  matchId,
} = fixtureSlice.actions;
export default fixtureSlice.reducer;
