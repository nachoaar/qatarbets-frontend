export function RandomMatches(allMatch){
    let fourMatches = []
    let randomIndex = 0

    while(fourMatches.length < 4){
        let provicional = Math.floor((Math.random() * 48))
        while( provicional === randomIndex){
            provicional = Math.floor((Math.random() * 48))
        }
        randomIndex = provicional
        fourMatches.push(allMatch[randomIndex])
    }

    return fourMatches
}