import React from "react";
import { useSelector } from "react-redux";
import { Groups } from "../Utils/Groups";



export const SectionThree = () => {

  const {group} = useSelector(state => state.group);
  console.log(group);

  return (
    <div className="h-auto pt-10 pb-10 w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-morado to-rojo">
        <div className="flex w-5/6 flex-wrap justify-center">
          {group&&group.map((g) => {
            return (
              <Groups
                key={g.id}
                name={g.name}
              />
            )
          })}
        </div>
    </div>
  );
};
