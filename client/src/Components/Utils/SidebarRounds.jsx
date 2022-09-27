import React from "react";
import { ButtonMatch } from "./ButtonMatch";
import { ButtonReturn } from "./ButtonReturn";
import { SeparatorLine } from "./SeparatorLine";
import { TitleContent } from "./TitleContent";

export const SidebarRounds = (props) => {
  return (
    <div className="h-full py-2 flex flex-col gap-1 border-t-2 border-gris">
      {props.fixture?.length >= 2 ? (
        <div className="flex flex-col gap-1">
          <TitleContent title={`${props.stage}`} />
          {props.fixture &&
            props.fixture.map((f) => {
              return (
                <ButtonMatch
                  key={f.id}
                  id={f.id}
                  home_team={f.home_name}
                  away_team={f.away_name}
                  stage={props.stage}
                />
              );
            })}
          <SeparatorLine />
          <ButtonReturn title={"Volver al fixture"} />{" "}
        </div>
      ) : (
        <div>
          <SeparatorLine />
          <ButtonReturn title={"Volver al fixture"} />
        </div>
      )}
    </div>
  );
};
