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
    fixtureThirdPlaceMatch: [],
    fixtureFinalMatch: [],

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
      state.filtredMatches = asd;
    },
    getGamesPerGroup: (state) => {
      state.fixtureGamesPerGroup = [];
      for (let i = 1; i < 9; i++) {
        const matches = state.fixture
          .filter((m) => m.groupId === i)

        state.fixtureGamesPerGroup = [...state.fixtureGamesPerGroup, matches];
      }
    },
    matchId: (state, action) => {
      const match = state.fixture?.filter((m) => m.id === Number(action.payload));
      state.fixtureMatchId = match;
    },
    cleanMatchId: (state) =>{
      state.fixtureMatchId = []
    },
    matchesRound16: (state, action) => {
      state.fixtureRoundOf16 = action.payload[8]
    },
    matchesRound8: (state, action) => {
      const matchesCuartos = action.payload.slice(8,12)
      state.fixtureRoundOf8 = matchesCuartos
    },
    matchesRound4: (state, action) => {
      const matchesCuartosFinished = action.payload.slice(8,12)
      const matchesSemi = action.payload.slice(12,14)
      state.fixtureRoundOf8 = matchesCuartosFinished
      state.fixtureRoundOf4 = matchesSemi
    },
    matchesRound2: (state, action) => {
      const matchesSemiFinished = action.payload.slice(12,14)
      const matchThirdPlace = action.payload.slice(14,15)
      const matchFinal = action.payload.slice(15,16)
      state.fixtureRoundOf4 = matchesSemiFinished
      state.fixtureThirdPlaceMatch = matchThirdPlace
      state.fixtureFinalMatch = matchFinal
    },
    resetFixture : (state, action) =>{
      state.fixtureRoundOf16 = []
      state.fixtureRoundOf8 = []
      state.fixtureRoundOf4 = []
      state.fixtureThirdPlaceMatch = []
      state.fixtureFinalMatch = []
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
    matchesAllRounds: (state, action) => {
      if(action.payload.length === 8){
        state.fixtureRoundOf16 = action.payload
      }
      if(action.payload.length === 12){
        state.fixtureRoundOf16 = action.payload.slice(0,8)
        state.fixtureRoundOf8 = action.payload.slice(8,12)
      }
      if(action.payload.length === 14){
        state.fixtureRoundOf16 = action.payload.slice(0,8)
        state.fixtureRoundOf8 = action.payload.slice(8,12)
        state.fixtureRoundOf4 = action.payload.slice(12,14)
      }
      if(action.payload.length === 16){
        state.fixtureRoundOf16 = action.payload.slice(0,8)
        state.fixtureRoundOf8 = action.payload.slice(8,12)
        state.fixtureRoundOf4 = action.payload.slice(12,14)
        state.fixtureThirdPlaceMatch = action.payload[14]
        state.fixtureFinalMatch = action.payload[15]
      }
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
  matchesAll,
  matchesAllRounds
} = fixtureSlice.actions;
export default fixtureSlice.reducer;
