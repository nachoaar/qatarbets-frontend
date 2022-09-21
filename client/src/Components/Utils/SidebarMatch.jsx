import React from "react";
import { useSelector } from "react-redux";
import { BotonGroup } from "./BotonGroup";
import { ButtonMatch } from "./ButtonMatch";
import { TitleContent } from "./TitleContent";
import { TitleContentMedium } from "./TitleContentMedium";

export const SidebarMatch = (props) => {

  const { group } = useSelector((store) => store.group);

  return (
    <div className="h-full w-full py-2 flex flex-col gap-1 border-t-2 border-gris">
      <TitleContent title={`Partidos del grupo ${props.group}`} />
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
      <TitleContent title="seleccionar otro grupo"/>
      {group &&
          group.map((g) => {
            return (
              <BotonGroup
                key={g.id}
                name={g.name?.slice(-1)}
                teams={g.teams}
                id={g.id}
                redirigir
              />
            );
          })}
    </div>
  );
};