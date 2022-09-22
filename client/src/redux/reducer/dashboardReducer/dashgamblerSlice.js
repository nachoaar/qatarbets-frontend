import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

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
      gamblerByName === undefined ?  swal({
        title: "Operacion fallida!!",
        text: "No se pudo encontrar ningun usuario con el nombre ingresado",
        button: "Cancel",
      }): state.gamblerName = gamblerByName
    },
    CacheGambler: (state) => {
      state.gamblerName = {}
    }
  }
});

export const { GamblerId, Gambler, GamblerName, CacheGambler  } = gamblerSlice.actions;
export default gamblerSlice.reducer;
