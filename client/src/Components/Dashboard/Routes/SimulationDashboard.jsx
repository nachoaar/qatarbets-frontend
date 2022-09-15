import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SidebarDashboard } from '../SidebarDashboard/SidebarDashboard';
import { NavbarDashboard } from '../NavbarDashboard/NavbarDashboard';
import { SimulationCard } from './Cards/simulationCard';
import { useState } from 'react';
import { getAllGames, makeAbsoluteSimulation, resetAllMatches} from '../../../redux/actions/dashboardActions/dashSimulationAction';



export const Simulation = () =>{
    const matches2 = useSelector((store)=> store.dashsimulation?.backup)
    const [flag2, setFlag2] = useState(false)
    const matchesSimulated = useSelector((store) => store.dashsimulation?.allSimulated)
    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch(getAllGames());
    },[dispatch]
    )

    function handleSimulateAll(e){
        e.preventDefault()
        if(e.target.value === 'simular todos'){
            setFlag2(!flag2)
            dispatch(makeAbsoluteSimulation())
        }else if(e.target.value === 'reiniciar todo'){
            setFlag2(!flag2)
            dispatch(resetAllMatches())
        }
      
    }

    return (
        <div className="bg-gris w-full h-screen flex flex-row justify-between gap-5">
            <div className="bg-white h-full w-1/5">
                 <SidebarDashboard />
            </div>
            <div className="flex flex-col w-full h-full divide-y divide-gristexto">
                <div className="h-auto w-full">
                    <NavbarDashboard />
                </div>
                <div className="w-full h-14 flex items-center gap-2">
                    <svg className="fill-gristexto transition duration-500 hover:fill-rojosec" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.938 13 4.958-4.938L12.833 7l-3.895 3.875-1.771-1.75-1.063 1.063ZM4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3h11q.625 0 1.062.438Q17 3.875 17 4.5v11q0 .625-.438 1.062Q16.125 17 15.5 17Zm0-1.5h11v-11h-11v11Zm0-11v11-11Z"/></svg>
                    <h2 className="font-titulodash font-bold text-gristexto text-lg">Simulaciones</h2>
                    <button onClick={(e)=> handleSimulateAll(e)} value='simular todos' disabled={flag2 === true}>simular todos</button>
                    <button onClick={(e)=> handleSimulateAll(e)} value='reiniciar todo' disabled={flag2 === false}>reiniciar todos</button>
                 </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-5 "> 
                { flag2 === true ? matchesSimulated && matchesSimulated.map((match)=>{
                    return (
                        <div>
                            <SimulationCard match={ match}  flagStore={flag2}/>
                        </div>
                    )
                } ) : matches2 && matches2.map((match)=>{
                    return (
                        <div >
                            <SimulationCard match={ match}  flagStore={flag2}/>
                        </div>
                    )
                } )}
                </div>
            </div >
        </div>
    )
}