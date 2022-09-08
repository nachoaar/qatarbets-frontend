import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Utils/Sidebar";
import { TitleContent } from "../Utils/TitleContent";
import { Footer } from "../Footer/Footer";
import Cards from "../Cards/Cards";
import { CardSmall } from "../Utils/CardSmall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixture } from "../../redux/actions/fixtureActions";
import { RandomMatches } from "../Filter/FourRandomMatches";


export const Home = () => {

  const dispatch = useDispatch()

  useEffect(
    ()=>{
      dispatch(getFixture())
    },[dispatch]
  )
   
  const matches = useSelector((state) => state.fixture?.fixture)
  let smallCardsMatches = RandomMatches(matches)


  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between py-6 w-5/6 mb-20 mt-20">
        <Sidebar />
        <div className="h-full w-4/5 flex flex-col gap-1 pl-2">
          <TitleContent title="PROXIMOS PARTIDOS" />
          <div class="container-card-m" className="flex flex-row justify-between gap-1">
            <Cards allMatch={matches}/>
          </div>
          <div class="publicidad-horizontal" className="w-full h-20 bg-slate-400">
            <h1 className="text-black font-bold">SLIDE PUBLICITARIO</h1>
          </div>
          <TitleContent title="PARTIDOS MAS APOSTADOS"/>
          <div class="container-card-s" className="flex flex-row justify-between gap-1">
            <CardSmall match={smallCardsMatches[3]}/>
            <CardSmall match={smallCardsMatches[2]}/>
            <CardSmall match={smallCardsMatches[1]}/>
            <CardSmall match={smallCardsMatches[0]}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
