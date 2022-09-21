import { createSlice } from "@reduxjs/toolkit";


export const simulationSlice = createSlice({
  name:"simulation",
  initialState:{
    toSimulate:[],
    backup:[],
    simulated:[],
    allSimulated:[],
  },
  reducers:{
    AllGames: (state, action) => {
      state.toSimulate = action.payload.sort((a,b) => Number(new Date(a.date)) - Number(new Date(b.date)))
      state.backup = state.toSimulate
      },
    SetSimulated: (state,action) =>{
        if(state.simulated?.length >= 1){
        state.simulated = [...state.simulated, ...action.payload]
      }else{
        state.simulated = action.payload.filter((match) => match.id !== action.payload)
      }
    },
    ResetMatch: (state,action) =>{
      state.simulated = state.simulated.filter((match) => match.id !== action.payload)
    },
    SimulateAll: (state,action) =>{
        state.allSimulated = action.payload.sort((a,b) => Number(new Date(a.date)) - Number(new Date(b.date)))

    },
    ResetAll: (state, action) =>{
      state.allSimulated = action.payload.sort((a,b) => Number(new Date(a.date)) - Number(new Date(b.date)))
    }
  }
});
export const { AllGames, SetSimulated,SimulateAll,ResetMatch,ResetAll } = simulationSlice.actions;
export default simulationSlice.reducer;