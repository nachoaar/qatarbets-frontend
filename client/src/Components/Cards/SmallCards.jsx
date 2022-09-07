import React from "react";
import { useSelector } from "react-redux";
import { CardSmall } from "../Utils/CardSmall";
import { getFixture } from "../../redux/actions/fixtureActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function SmallCards(){

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixture());
  }, [dispatch]);
    let randomIndex = 0
    const fixture = useSelector((state)=> state.fixture)

    let mediumMatches = []

    while(mediumMatches.length < 4){
        let provicional = Math.floor((Math.random() * 47));
        while(provicional === randomIndex){
            provicional = Math.floor((Math.random() * 47))
        }
        randomIndex = provicional
        mediumMatches.push(fixture.fixture[randomIndex])
    }

    console.log(mediumMatches)

    return(
        <div>
            { mediumMatches && mediumMatches?.map((match) =>{
                    return(
                        <CardSmall
                        match={match}
                        />
                    )
                })
            }
        </div>
    )
}