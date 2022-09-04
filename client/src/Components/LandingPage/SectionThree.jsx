import React from "react";
import { useSelector } from "react-redux";
import { Groups } from "../Utils/Groups";



export const SectionThree = () => {

  const {group} = useSelector(state => state.group); 
  console.log(group);

  return (
    <div className="h-auto pt-10 pb-10 w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-morado to-rojo">
        <div className="flex w-full flex-wrap gap-4 justify-center p-2">
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