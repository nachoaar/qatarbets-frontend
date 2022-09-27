import React from "react";
import {Link} from "react-router-dom"

export default function Card({idMatch, home,away, logoHome,logoAway}){
    return(
        <Link to={`/fixture/${idMatch}`}>
            <div>
                <div key={idMatch}>
                    <img src={logoHome}  alt={home}/>
                    <p>{home}</p>
                    <h3> VS </h3>
                    <img src={logoAway} alt={away}/>
                    <p>{away}</p>
                </div>
            </div>
        </Link>
    )
}
