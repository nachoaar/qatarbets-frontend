import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { SidebarHome } from "../Utils/SidebarHome";
import { TitleContent } from "../Utils/TitleContent";
import { Footer } from "../Footer/Footer";
import { CardSmall } from "../Utils/CardSmall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixture, getGroupMatch } from "../../redux/actions/fixtureActions";
import { CardsMatch } from "./CardsMatch/CardsMatch";
import { getGroups } from "../../redux/actions/groupActions";
import { CardLarge } from "../Utils/CardLarge";
import { Slider } from "./Slider/Slider";
import { useLocation } from "react-router-dom";

export const Home = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let groupId = query.get("id");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getGroups());
    if (groupId) {
      dispatch(getGroupMatch(Number(groupId)));
    } else {
      dispatch(getFixture());
    }
  }, [dispatch]);

  const matches = useSelector((state) => state.fixture?.fixture);
  const letra = useSelector((state) => state.fixture?.fixtureFilter);

  const letras = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let letraGroup = letra[0]?.groupId;

  console.log(letras[letraGroup]);

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between w-5/6 mb-20 mt-20 gap-3">
        <SidebarHome />
        <div className="h-full w-4/5 flex flex-col gap-3">
          <TitleContent
            title={
              letra.length > 6
                ? `proximos partidos`
                : "partidos del grupo: " + letras[letraGroup - 1]
            }
          />
          <div className="w-full h-auto bg-morado">
            <CardsMatch />
          </div>
          <div className="w-full h-auto flex flex-row gap-2 snap-x overflow-auto">
            {/* <Cards allMatch={matches}/> */}
            {matches &&
              matches.slice(0, 10).map((m) => {
                return (
                  <CardLarge
                    key={m.id}
                    id={m.id}
                    home_team={m.home_team.name}
                    away_team={m.away_team.name}
                    groupId={m.groupId}
                  />
                );
              })}
          </div>
          <div className="w-full h-32 overflow-hidden flex items-center">
            <Slider />
          </div>
          <TitleContent title="PARTIDOS MAS APOSTADOS" />
          <div className="flex flex-row justify-between gap-1">
            <CardSmall match={matches[3]} />
            <CardSmall match={matches[2]} />
            <CardSmall match={matches[1]} />
            <CardSmall match={matches[0]} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
