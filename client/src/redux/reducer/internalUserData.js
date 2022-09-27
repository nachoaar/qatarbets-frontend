import { createSlice } from "@reduxjs/toolkit";

export const InternalUserSlice = createSlice({
  name: "internalUser",
  initialState:{
    user:[],
    bets:[],
    sortedBets:[],
  },
  reducers:{
    getUser: (state,action)=>{
      state.user = action.payload
    },
    getBets:(state, action) =>{
      let payload = []
      let gamblers = action.payload.gamblers
      for(let i = 0 ; i < action.payload.bets.length ; i++){
        let actualBet = action.payload.bets[i]
        let index= action.payload.matches.findIndex((match) => match.id === actualBet.matchId)
        let userName =  gamblers[gamblers.findIndex((gambler) => gambler.id === actualBet.userId)]?.name
        let bet = {
          id: actualBet.id,
          match: `${action.payload.matches[index]?.home_team.name} vs ${action.payload.matches[index]?.away_team.name}`,
          result: actualBet.result,
          money_bet:actualBet.money_bet,
          final_profit: actualBet.final_profit,
          userId: actualBet.userId,
          user: userName,
          fecha_hora: action.payload.matches[index].date,
          matchId: action.payload.matches[index].matchId,
        }
        payload.push(bet)
      }
      state.bets = payload.sort((a,b)=> Number(a.fecha_hora) - Number(b.fecha_hora))
    },
    sortUserBets: (state,action)=>{
      state.sortedBets = state?.bets.filter((bet) => bet.userId === action.payload)
      }
  }
})

export const { getUser, getBets, sortUserBets} = InternalUserSlice.actions;
export default InternalUserSlice.reducer;
