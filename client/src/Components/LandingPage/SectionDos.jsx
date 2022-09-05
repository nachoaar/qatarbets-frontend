import React from "react";
import { useSelector } from "react-redux";
import { CardLarge } from "../Utils/CardLarge";
import { CardXs } from "../Utils/CardXs";
import { TitleContentSmall } from "../Utils/TitleContentSmall";

export const SectionDos = (props) => {
  /* console.log(props.matchesPerGroups[0]) */

  return (
    <div className="h-max flex flex-col justify-between items-center bg-morado py-6">
      <div className="flex flex-col flex-auto gap-4 items-center w-full justify-center">
        <div className="w-5/6 bg-gradient-to-b from-transparent to-amarillo flex flex-col  md:flex-row justify-between">
          {props.upcomingMatches.map((m) => {
            return (
              <CardLarge
                key={m.id}
                date={m.date}
                homeTeam={m.home_team.name}
                awayTeam={m.away_team.name}
                awayTeamLogo={m.away_team.logo}
                id={m.id}
              />
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row w-5/6 h-1/2 gap-4">
          <div className="w-1/3 flex flex-row justify-between gap-1">
            <div className="flex flex-col gap-1 w-full">
              <TitleContentSmall title="GRUPO A" />
              {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[0].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
              <TitleContentSmall title="GRUPO B" />
              {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[1].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <TitleContentSmall title="GRUPO C" />
              {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[2].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
              <TitleContentSmall title="GRUPO D" />
              {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[3].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
            </div>
          </div>

          <div className="w-full  md:w-2/3  ">
            <div className="bg-soccerPlayers bg-cover bg-center h-1/2"></div>
            <div className="flex flex-row gap-1">
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO E" />
                {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[4].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO F" />
                {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[5].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO G" />
                {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[6].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <TitleContentSmall title="GRUPO H" />
                {props.matchesPerGroups.length > 0
                ? props.matchesPerGroups[7].map((m) => {
                    return (
                      <CardXs
                        key={m.id}
                        date={m.date}
                        homeTeam={m.home_team.name}
                        awayTeam={m.away_team.name}
                        id={m.id}
                      />
                    );
                  })
                : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
