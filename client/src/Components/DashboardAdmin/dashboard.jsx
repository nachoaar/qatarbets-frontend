import React from "react";
import WeaklyBetsGraphic from "./graficas/weaklyBetGraphic";
import BetResultGraph from "./graficas/betGraphics";
import DayliBetsGraphic from "./graficas/dayliBets";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBets } from "../../redux/actions/betActions";

export default function RenderFiltros(){

    // cree un estado propio para poder manejar las apuestas 
   // este componente entero solo servia para reenderizar los filtros
   // mientras los estaba armando


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getBets())
    },[dispatch])
    const bets = useSelector((state) => state.bets)
  
    return(
        <div className="flex">
            <div className= "basis-5">
                <h3>ganancias y perdidas</h3>
                { <WeaklyBetsGraphic dataa={bets.bets} />}
            </div>
            <div style={{width: '100%'}}>
                 <h3>resultados apostados</h3>
                 <BetResultGraph />
            </div>
            <div>
                <h3>apuestas realizadas por hora</h3>
                <DayliBetsGraphic allBets={bets.bets}/>
            </div>  
            <div>
            </div>
        </div>
    )
}
