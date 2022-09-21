import React from "react";
import { useSelector } from "react-redux";
import { CardMatch } from "./CardMatch/CardMatch";

export const CardsMatch = () => {
  const { fixtureFilter } = useSelector((store) => store.fixture);
  const { groupName } = useSelector((store) => store.group);


  let fixture = [...fixtureFilter]

/*   if(fixture.length > 6){
    console.log("proximos partidos");
     fixture = fixture.filter(m => m.status === "Not Started")
  } */

/*   fixture = fixture.filter(m => m.status === "Not Started")

  console.log(fixture); */


  return (
    <div className="w-full h-1/5 rounded flex flex-col gap-1 overflow-hidden">
      {fixture &&
        fixture.map((m) => {
          return (
            <CardMatch
              key={m.id}
              city={m.city}
              home_team={m.home_team.name}
              away_team={m.away_team.name}
              group={m.groupId}
              groupName={groupName}
              status={m.status}
              id={m.id}
              date={m.date}
              profit_coef_home={m.profit_coef_home}
              profit_coef_draw={m.profit_coef_draw}
              profit_coef_away={m.profit_coef_away}
              result_match={m.result_match}
            />
          );
        }).slice(0,9)}
    </div>
  );
};
