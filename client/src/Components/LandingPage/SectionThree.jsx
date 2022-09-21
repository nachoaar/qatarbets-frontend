import React from "react";
import { useSelector } from "react-redux";
import { Groups } from "../Utils/Groups";
import { TitleContent } from "../Utils/TitleContent";



export const SectionThree = () => {

  const {group} = useSelector(state => state.group);

  return (
    <div className="h-auto pt-10 pb-10 w-full min-h-screen flex flex-col gap-2 justify-center items-center bg-gradient-to-b from-morado to-rojo">
        <div className="flex w-5/6 gap-2 flex-col sm:flex-row justify-between">
          {group&&group.map((g) => {
            return (
              <Groups
                key={g.id}
                name={g.name}
                teams={g.teams}
                id={g.id}
              />
            )
          }).slice(0,4)}
        </div>
        <div className="flex w-5/6 gap-2 flex-col sm:flex-row justify-between">
          {group&&group.map((g) => {
            return (
              <Groups
                key={g.id}
                name={g.name}
                teams={g.teams}
                id={g.id}
              />
            )
          }).slice(4,8)}
        </div>
    </div>
  );
};
