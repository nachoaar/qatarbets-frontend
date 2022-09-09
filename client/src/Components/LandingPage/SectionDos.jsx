import React from "react";
import { CardLarge } from "../Utils/CardLarge";
import { Countdown } from "../LandingPage/Countdown/Countdown";
import imageSectionDos from "../../media/imageSectionDos.png"
import { useSelector } from "react-redux";
export const SectionDos = (props) => {
  /* console.log(props.matchesPerGroups[0]) */

  const matches = useSelector((state) => state.fixture?.fixture)

  return (
    <div className="h-max flex flex-col justify-around items-center bg-morado py-6">
      <Countdown />

      <div className="flex flex-col flex-auto gap-4 items-center w-full justify-center mt-12">


        <div className="flex flex-col md:flex-row w-5/6 h-auto justify-between pb-8 items-center">
          <div className="w-full md:w-2/5 font-fifa text-white flex flex-col gap-4 pr-16">
            <h2 className="text-3xl">APOSTA Y GANA!</h2>
            <p className="text-lg">
              En Qatarbets ganar es muy facil. Solo tenes que el elegir el
              partido que mas te gusta y realizar tu apuesta.{" "}
            </p>
          </div>
          <div className="w-full md:w-3/5 ">
            <img src={imageSectionDos} alt="" className="mix-blend-luminosity	" />
          </div>
        </div>

        <div className="w-5/6 h-auto flex flex-row gap-2 snap-x overflow-auto">
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
          <div className="w-5/6 h-auto flex flex-row gap-2 snap-x overflow-auto">
            {/* <Cards allMatch={matches}/> */}
            {matches&&matches.slice(10,20).map((m) => {
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
      </div>
    </div>
  );
};
