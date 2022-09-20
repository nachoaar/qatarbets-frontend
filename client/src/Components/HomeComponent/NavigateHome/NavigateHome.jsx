import React from "react";
import { Separator } from "../../Utils/Separator";
import { SeparatorHorizontal } from "../../Utils/SeparatorHorizontal";
import { Triangle } from "../../Utils/Triangle";

export const NavigateHome = ({ setChange, change }) => {
  const onChange = (e, change) => {
    e.preventDefault();
    setChange(change);
  };

  return (
    <div className="bg-rojo rounded w-full sm:w-11/12 flex flex-row gap-4 px-1 sm:pl-8 py-2 mt-20">
      <button
        onClick={(e) => onChange(e, true)}
        className="rounded-tr-xl rounded-bl-xl bg-morado text-white font-fifa text-md sm:text-lg p-2 focus:outline-none focus:ring focus:bg-rojo focus:ring-rojosec"
        autoFocus={change ? true : false}
        /* autoFocus */
      >
        Fase de grupos
      </button>
      <Separator />
      <button
        onClick={(e) => onChange(e, false)}
        className="rounded-tr-xl rounded-bl-xl bg-morado text-white font-fifa text-md sm:text-lg p-2 focus:outline-none focus:ring focus:bg-rojo focus:ring-rojosec"
        autoFocus={!change ? true : false}
      >
        Fase de eliminatorias
      </button>
    </div>
  );
};
