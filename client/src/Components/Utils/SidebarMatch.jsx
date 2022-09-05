import React from "react";
import { ButtonMatch } from "./ButtonMatch";
import { TitleContent } from "./TitleContent";

export const SidebarMatch = (props) => {
  
  console.log(props.fixture);

  return (
    <div className="h-full w-1/5 bg-gradient-to-b from-rojo to-morado py-5 flex flex-col gap-1 p-3 pr-10 rounded-tr-3xl">
      <TitleContent title={`PARTIDOS DE ${props.group}`} />
      {props.fixture&&props.fixture.map((f) => {
        return (
          <ButtonMatch 
            key={f.id}
            id={f.id}
            home_team={f.home_team.name}
            away_team={f.away_team.name}
            group={props.group?.slice(-1)}
          />
        )
      })}
    </div>
  );
};