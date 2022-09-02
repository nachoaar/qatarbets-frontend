import React from "react";
import Card from "../Card/Card";

export default function Cards({Matches}){
    return(
        <div>
            { Matches && Matches.map( match => {
                return(
                    // cuando se tenga el redux y las action sobre todo hay que cambiar 
                    //los datos y la informacion que se trae por la correcta ya que 
                    //esto es un maquetado simplemente
                    <Card   
                    id={match.id}
                    home={match.home}
                    away={match.away}
                    logoHome={match.logoHome}
                    logoAway={match.logoAway}
                    />
                )
            })}
        </div>
    )
}