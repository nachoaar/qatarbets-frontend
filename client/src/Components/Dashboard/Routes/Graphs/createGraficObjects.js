export default function creatGraficObjects(bets){

  let data = bets
  let graficObjects = []

  for( let i = 0; i < data.length ; i++){
    let object = {
      name: data[i]?.fecha_hora.slice(0,10),
      matchId: data[i]?.matchId,
      date: new Date(data[i]?.fecha_hora.slice(0,10)),
      money_bet: data[i]?.money_bet,
      userId: data[i]?.userId,
      final_profit: data[i]?.final_profit,
    }
      graficObjects.push(object)
  }
  return graficObjects
}
