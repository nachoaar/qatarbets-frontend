import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSimulated, resetMatchSimulation } from "../../../../redux/actions/dashboardActions/dashSimulationAction";
import axios from "axios";


export const SimulationCard = ({match, flagStore}) =>{


    let id = match.id

    const result1 = useSelector((store) => store.dashsimulation?.simulated.filter((match)=> match.id === id))
    const result2 = useSelector((store) => store.dashsimulation?.allSimulated.filter((match) => match.id === id))
    const result = flagStore === false ? result1 : result2
    const [flag, setFlag] = useState(true)
    const dispatch = useDispatch()
    function handleOnClick(e){
        // axios.put('https://qatarbets-backend-production-ab54.up.railway.app/fixture/groupsSimulation?sim=reset')
        e.preventDefault()
        setFlag(!flag)
        dispatch(setSimulated(e.target.value , match.id))
    }
    function handleResetResult(e){
        e.preventDefault()
        setFlag(!flag)
        dispatch(resetMatchSimulation(match.id))
    }

    return(
        <div className="grid ">
            <span>{`${match.home_team?.name} vs ${match.away_team?.name}`}</span>
            <span className="jutify-center">{result?.length >= 1 ? result[0]?.result_match : 'simula el partido'}</span>
            {<button onClick={(e)=>handleOnClick(e)} disabled={flag === false} value='simulate'>simular</button>}
            {<button onClick={(e)=> handleResetResult(e)} disabled={flag === true} value='reset'> reiniciar </button>}
        </div>
    )
}