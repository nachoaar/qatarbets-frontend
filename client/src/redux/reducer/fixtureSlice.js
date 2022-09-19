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
    fixtureRoundOf16: [],
    fixtureRoundOf8: [],
    fixtureRoundOf4: [],
    fixtureRoundOf2: []

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
      state.fixtureFilterCopy = state.fixtureFilter
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
    //
    matchId: (state, action) => {
      console.log("desde la action " + action.payload);
      const match = state.fixture?.filter((m) => m.id === Number(action.payload));
      console.log("match encontrado?");
      console.log(match);
      state.fixtureMatchId = match;
    },
    cleanMatchId: (state) =>{
      state.fixtureMatchId = []
    },
    matchesRound16: (state, action) => {
      state.fixtureRoundOf16 = action.payload
      console.log(state.fixtureRoundOf16);
    },
    matchesRound8: (state, action) => {
      state.fixtureRoundOf8 = action.payload
    },
    matchesRound4: (state, action) => {
      state.fixtureRoundOf4 = action.payload
    },
    matchesRound2: (state, action) => {
      state.fixtureRoundOf2 = action.payload
    },
    resetFixture : (state, action) =>{
      state.fixtureRoundOf16 = []
      state.fixtureRoundOf8 = []
      state.fixtureRoundOf4 = []
      state.fixtureRoundOf2 = []
    },
    matchesFinished: (state) => {
      let fixture = state.fixtureFilterCopy
      let filtered = fixture.filter(m => m.status === "Finished")
      state.fixtureFilter = filtered
    },
    matchesNotStarted: (state) => {
      let fixture = state.fixtureFilterCopy
      let filtered = fixture.filter(m => m.status === "Not Started")
      state.fixtureFilter = filtered
    },
    matchesAll: (state) => {
      let fixture = state.fixtureFilterCopy
      state.fixtureFilter = fixture
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
  cleanMatchId,
  matchesRound16,
  matchesRound8,
  matchesRound4,
  matchesRound2,
  resetFixture,
  matchesFinished,
  matchesNotStarted,
  matchesAll
} = fixtureSlice.actions;
export default fixtureSlice.reducer;
