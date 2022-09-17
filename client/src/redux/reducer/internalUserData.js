import { createSlice } from "@reduxjs/toolkit";

export const InternalUserSlice = createSlice({
    name: "internalUser",
    initialState:{
        user:[],
        bets:[]
    },
    reducers:{
        getUser: (state,action)=>{
            state.user = action.payload
        },
        getBets:(state, action) =>{
            state.bets = action.payload
        },
        sortUserBets: (state,action)=>{
            state.bets = state.bets.filter((bet) => bet.userId === action.payload)
        }
    }

})
export const { getUser, getBets, sortUserBets} = InternalUserSlice.actions;
export default InternalUserSlice.reducer;