import React from "react";
import Card from "../Card/Card";

export default function Cards({Matches}){
    return(
        <div>
            { Matches && Matches.map( match => {
                return(
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