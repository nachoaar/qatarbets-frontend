import creatGraficObjects from "./createGraficObjects";

export default function sortBets(bets,date){

  let awway = creatGraficObjects(bets)

  let data = awway.sort((a,b) => Number(a.date) - Number(b.date))
  let indexx = 0
  let dataBets = []
  if(date){
    indexx = data.findIndex((bet) => bet.name === date)
  }

  for( let i = indexx; i < data.length ; i++){
    let actual = data[i]
      let counter = 0
      let money = 0

    for( let j = i; j < data.length ; j++){
      if(actual?.matchId === data[j]?.matchId){
        indexx = j
        counter++
        money += data[j]?.money_bet
      }
    }
    if(dataBets.length < 7){
      let object  = {
        name: actual.name,
        money_bet: money,
        cantidad: counter,
      }
    dataBets.push(object)
    i = indexx + 1
    }
  }
  return dataBets
}
