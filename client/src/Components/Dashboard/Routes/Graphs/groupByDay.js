

function gruopBalanceByDate(dataa,){

    let data = []
    let days = []
for(let i = 0; i< dataa?.length;i++){
    let actualBet = dataa[i]
    let gains = 0
    let losed = 0
    actualBet?.final_profit > 0 ? losed = actualBet.final_profit : gains = actualBet.money_bet
    if(!days.includes(actualBet?.fecha_hora.slice(0,10))){ 
        days.push(actualBet.fecha_hora.slice(0,10))
    for(let x = i+1; x < dataa.length - 1 ; x++){
        if( actualBet?.fecha_hora.slice(0,10) === dataa[x]?.fecha_hora.slice(0,10)){
            dataa[x].final_profit > 0 ? gains += dataa[x].final_profit : losed += dataa[x].money_bet
        }
    }
    let dayEconomi = {
        name: actualBet.fecha_hora.slice(0,10),
        date: new Date(actualBet.fecha_hora.slice(0,10)),
        gains: gains,
        losed: losed,
    }

    data.push(dayEconomi)
}
}
return data
}

export default gruopBalanceByDate