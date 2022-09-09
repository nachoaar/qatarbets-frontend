function gruopByHour(dataa){

    let data = []
    let hours = []
for(let i = 0; i< dataa.length;i++){
    let actualBet = dataa[i]
    let counter = 0
    if(!hours.includes(actualBet.fecha_hora?.slice(11,13))){ 
        hours.push(actualBet.fecha_hora.slice(11,13))
    for(let x = i; x < dataa.length - 1 ; x++){
        if( actualBet?.fecha_hora.slice(11,13) === dataa[x]?.fecha_hora.slice(11,13)){
            counter++
    }
} 
 let betsPerHour = {
        name: actualBet.fecha_hora.slice(11,13) + " hs",
        date: actualBet.fecha_hora.slice(11,13),
        Bets: counter
    }

    data.push(betsPerHour)
        }
}
return data
}

export default gruopByHour
