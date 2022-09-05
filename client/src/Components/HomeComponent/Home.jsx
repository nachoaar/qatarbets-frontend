import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Utils/Sidebar";
import { TitleContent } from "../Utils/TitleContent";
import { Footer } from "../Footer/Footer";
import Cards from "../Cards/Cards";
import { CardSmall } from "../Utils/CardSmall";
import FilterIndex from "../Filter/FilterIndex";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixture } from "../../redux/actions/fixtureActions";


export const Home = () => {

  const dispatch = useDispatch()

  useEffect(
    ()=>{
      dispatch(getFixture())
    },[dispatch]
  )
   
  const matches = useSelector((state) => state.fixture?.fixture)



  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between py-6 w-5/6 mb-20 mt-20">
        <Sidebar />
        <div className="h-full w-4/5 flex flex-col gap-1 pl-2">
          <TitleContent title="PROXIMOS PARTIDOS / LO QUE TIRE EL FILTRO" />
          <FilterIndex/>
          <div class="container-card-m" className="flex flex-row justify-between gap-1">
            <Cards allMatch={matches}/>
          </div>
          <div class="publicidad-horizontal" className="w-full h-20 bg-slate-400">
            <h1 className="text-black font-bold">SLIDE PUBLICITARIO</h1>
          </div>
          <TitleContent title="PARTIDOS MAS APOSTADOS O LO QUE SEA"/>
          <div class="container-card-s" className="flex flex-row justify-between gap-1">
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
