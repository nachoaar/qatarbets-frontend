import creatGraficObjects from "./createGraficObjects"

export default function getStats(bets, userId){


    let data = creatGraficObjects(bets)

    let sortedData = data.sort((a,b) => Number(a.date) - Number(b.date))
    let user = []
    if(userId){

        let index = sortedData.findIndex((bet) => bet.userId  === userId)

        let gained = 0
        let losed = 0
        let counter = 0
        let total = 0
    for(let i = index ;i < sortedData.length;i++){

        if(sortedData[i]?.userId === userId){
            total += sortedData[i]?.money_bet

            if(sortedData[i]?.final_profit !== 0){
                gained += sortedData[i]?.final_profit
            }else{
                losed += sortedData[i]?.money_bet
            }
            counter++
        }
    }
    
    user.push({name:"total", total:total})
    user.push({name: "gained", gained: gained})
    user.push({name: "losed", losed: losed})
    user.push({name: "bets", bets: counter})
    user.push({userId: userId})
    }
    return user
}

