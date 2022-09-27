import React from "react";
import { useSelector } from "react-redux";
import { CardMedium } from "../Utils/CardMedium";
import {  getFixture } from "../../redux/actions/fixtureActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { RandomMatches } from "../Filter/FourRandomMatches";


export default function Cards({allMatch}){
  let fourMatches = RandomMatches(allMatch)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getFixture())
  },[dispatch])

  const filtrados = useSelector((state) => state.fixture.filtredMatches)

  return(
    <div>
      { filtrados.length > 1 ?  filtrados.map((match)=>{
        return(
          <CardMedium key={match.id} match={match}/>
            )
        }) : fourMatches.map((match) =>{
          return(<CardMedium key={match.id} match={match}/>)
      })}
    </div>
  )
}
