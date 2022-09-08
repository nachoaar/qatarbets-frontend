import { createSlice } from "@reduxjs/toolkit";

export const betSlice = createSlice({

    name:"bets",
    initialState:{
        bets: [],
    },
    reducers:{
        getAllBets:(state, action) => {
            state.bets = action.payload
        },

    },
})

export const {getAllBets} = betSlice.actions;
export default  betSlice.reducer;