import React from "react";
import { ButtonMatch } from "./ButtonMatch";
import { TitleContentMedium } from "./TitleContentMedium";

export const SidebarMatch = (props) => {
  return (
    <div className="h-full w-1/5 py-2 flex flex-col gap-1 border-t-2 border-gris">
      <TitleContentMedium title={`PARTIDOS DE ${props.group}`} />
      {props.fixture &&
        props.fixture.map((f) => {
          return (
            <ButtonMatch
              key={f.id}
              id={f.id}
              home_team={f.home_team.name}
              away_team={f.away_team.name}
              group={props.group?.slice(-1)}
            />
          );
        })}
      <TitleContentMedium title="grupos"/>
    </div>
  );
};
