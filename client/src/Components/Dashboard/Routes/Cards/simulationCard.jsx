import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSimulated, resetMatchSimulation, getAllGames } from "../../../../redux/actions/dashboardActions/dashSimulationAction";
import axios from "axios";
import { getFixture } from "../../../../redux/actions/fixtureActions";


export const SimulationCard = ({match, flagStore}) =>{

    console.log(match);

    let id = match.id

    const result1 = useSelector((store) => store.fixture?.fixture.filter((match)=> match.id === id))
    const result2 = useSelector((store) => store.fixture?.fixture.filter((match) => match.id === id))
    const result = flagStore === false ? result1 : result2
    const [flag, setFlag] = useState(true)
    const dispatch = useDispatch()

    console.log(result1[0])


    function handleOnClick(e){
        axios.put(`https://qatarbets-backend-production-ab54.up.railway.app/fixture/matchSimulation?sim=simulate&id=${id}`)
       alert('partido simulado con exito')
        e.preventDefault()
        setFlag(!flag)
        dispatch(getFixture())
    }


    function handleResetResult(e){
        axios.put(`https://qatarbets-backend-production-ab54.up.railway.app/fixture/matchSimulation?sim=reset&id=${id}`)
        alert('partido reiniciado con exito')
        e.preventDefault()
        setFlag(!flag)
        dispatch(getFixture())
    }

    return(
        <div className="flex bg-morado text-white p-2 rounded justify-between items-center">
          <div className="flex flex-row gap-2">
            <span>{`${match?.home_team.name} vs ${match?.away_team.name}`}</span>
            <span className="text-amarillo">{result !== null ? result[0]?.result_match : 'simula el partido'}</span>
          </div>
          <div className="flex flex-col gap-1">
            {<button className="bg-rojo rounded p-1" onClick={(e)=>handleOnClick(e)} disabled={flag === false} >simular</button>}
            {<button className="bg-rojo rounded p-1" onClick={(e)=> handleResetResult(e)} disabled={flag === true} > reiniciar </button>}
          </div>
        </div>
    )
}
