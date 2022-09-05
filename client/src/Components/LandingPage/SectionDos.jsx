import React from "react";
import { CardLarge } from "../Utils/CardLarge";
import { CardXs } from "../Utils/CardXs";
import { TitleContentSmall } from "../Utils/TitleContentSmall";

export const SectionDos = (props) => {
  return (
    <div className="h-max flex flex-col justify-between items-center bg-morado py-6">
      <div className="flex flex-col flex-auto gap-4 items-center w-full justify-center">
        <div className="w-5/6 bg-gradient-to-b from-transparent to-amarillo flex flex-col  md:flex-row justify-between">
          {props.upcomingMatches.map((m) => {
            return (
              <CardLarge
                date={m.date}
                homeTeam={m.home_team.name}
                awayTeam={m.away_team.name}
                awayTeamLogo={m.away_team.logo}
              />
            );
          })}
        </div>


        <div className="flex flex-col md:flex-row w-5/6 h-1/2 gap-4">
          <div className="w-1/3 flex flex-row justify-between gap-1">
            <div className="flex flex-col gap-1 w-full">
              <TitleContentSmall title="GRUPO A" />
              <CardXs />
              <CardXs />
              <TitleContentSmall title="GRUPO B" />
              <CardXs />
              <CardXs />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <TitleContentSmall title="GRUPO A" />
              <CardXs />
              <CardXs />
              <TitleContentSmall title="GRUPO B" />
              <CardXs />
              <CardXs />
            </div>
          </div>

          <div className="w-full  md:w-2/3  ">
            <div className="bg-soccerPlayers bg-cover bg-center h-1/2"></div>
            <div className="flex flex-row gap-1">
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO A" />
                <CardXs />
                <CardXs />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO A" />
                <CardXs />
                <CardXs />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO A" />
                <CardXs />
                <CardXs />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO A" />
                <CardXs />
                <CardXs />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
