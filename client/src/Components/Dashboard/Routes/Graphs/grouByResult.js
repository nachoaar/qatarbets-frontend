
export default function GroupByResult(dataa){
    
    let array = dataa
    let data = []
    let results = []
    for(let i = 0; i< array?.length ; i++){
        let actual = array[i]
        let counter = 0
        if(actual){
            if(!results.includes(actual?.result)){
            results.push(actual.result)
            for( let j = 0; j < array.length; j++){
                if(actual?.result === array[j]?.result){
                    counter++
                }
            }
            let algo = {
                name: actual?.result,
                value: counter,
                index: 0,
            }
            if(algo.name === 'draw') algo.index = 1
            if(algo.name === 'away') algo.index = 2
            data.push(algo)
        }}

    }
    return data
    

}

