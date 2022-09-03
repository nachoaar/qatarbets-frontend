import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { CardMedium } from "../Utils/CardMedium";
import { CardSmall } from "../Utils/CardSmall";
import { Sidebar } from "../Utils/Sidebar";
import { TitleContent } from "../Utils/TitleContent";

export const Home = () => {
  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between py-6 w-5/6 ">
        <Sidebar />
        <div className="h-full w-4/5 flex flex-col gap-1 pl-2">
          <TitleContent title="PROXIMOS PARTIDOS / LO QUE TIRE EL FILTRO" />
          <div class="container-card-m" className="flex flex-row justify-between gap-1">
            <CardMedium />
            <CardMedium />
            <CardMedium />
            <CardMedium />
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
    </div>
  );
};
