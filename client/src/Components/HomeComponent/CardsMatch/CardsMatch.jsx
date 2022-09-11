import React from "react";
import { useSelector } from "react-redux";
import { CardMatch } from "./CardMatch/CardMatch";

export const CardsMatch = () => {
  const { fixtureFilter } = useSelector((store) => store.fixture);
  const { groupName } = useSelector((store) => store.group);

  /*   fixtureFilter.sort(
    (a, b) => new Date(a.date).getTime() > new Date(b.date).getTime()
  ); */
  /*
  fixtureFilter.sort(
    (a, b) => new Date(a.date) > new Date(b.date)
  );

  console.log(fixtureFilter); */
  /*   console.log(ordenado); */

  return (
    <div className="bg-morado w-full h-1/5 rounded flex flex-col gap-1 overflow-hidden">
      {fixtureFilter &&
        fixtureFilter.map((m) => {
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
            />
          );
        })}
    </div>
  );
};
