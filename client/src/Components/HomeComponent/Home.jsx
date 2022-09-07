import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { SidebarHome } from "../Utils/SidebarHome";
import { TitleContent } from "../Utils/TitleContent";
import { Footer } from "../Footer/Footer";
import { CardSmall } from "../Utils/CardSmall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixture } from "../../redux/actions/fixtureActions";
import { CardsMatch } from "./CardsMatch/CardsMatch";
import { getGroups } from "../../redux/actions/groupActions";
import { CardLarge } from "../Utils/CardLarge";
import { Slider } from "./Slider/Slider";

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(
    ()=>{
      dispatch(getFixture())
      dispatch(getGroups())
    },[dispatch]
  )
   
  const matches = useSelector((state) => state.fixture?.fixture)

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between w-5/6 mb-20 mt-20 gap-3">
        <SidebarHome />
        <div className="h-full w-4/5 flex flex-col gap-3">
          <div className="w-full h-auto bg-morado">
            <CardsMatch />
          </div>
          <div className="w-full h-auto flex flex-row gap-2 snap-x overflow-auto">
            {/* <Cards allMatch={matches}/> */}
            {matches&&matches.slice(0,10).map((m) => {
              return (
                <CardLarge
                  key={m.id}
                  id={m.id}
                  home_team={m.home_team.name}
                  away_team={m.away_team.name}
                  groupId={m.groupId}
                />
              )
            })}
          </div>
          <div className="w-full h-32 overflow-hidden flex items-center">
            <Slider />
          </div>
          <TitleContent title="PARTIDOS MAS APOSTADOS"/>
          <div className="flex flex-row justify-between gap-1">
            <CardSmall match={matches[3]}/>
            <CardSmall match={matches[2]}/>
            <CardSmall match={matches[1]}/>
            <CardSmall match={matches[0]}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
