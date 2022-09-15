import { createSlice } from "@reduxjs/toolkit";

export const gamblerSlice = createSlice({
  name:"gambler",
  initialState: {
    gamblers: [],
    gamblerId: {},
    gamblerName: {}
  },
  reducers: {
    Gambler: (state, action) => {
      state.gamblers = action.payload
    },
    GamblerId: (state, action) => {
      state.gamblerId = action.payload
    },
    GamblerName: (state, action) => {
      let gamblerByName = state.gamblers.find((g) => g.name === action.payload)
      gamblerByName === undefined ?  alert('usuario no encontrado'): state.gamblerName = gamblerByName
    },
    CacheGambler: (state) => {
      state.gamblerName = {}
    }
  }
});

export const { GamblerId, Gambler, GamblerName, CacheGambler  } = gamblerSlice.actions;
export default gamblerSlice.reducer;