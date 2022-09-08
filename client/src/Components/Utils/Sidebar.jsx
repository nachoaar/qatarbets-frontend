import React from "react";
import { BotonGroup } from "./BotonGroup";
import { TitleContent } from "./TitleContent";
import FilterIndex from "../Filter/FilterIndex";
export const Sidebar = () => {
  return (
    <div className="h-full w-1/5 bg-gradient-to-b from-rojo to-morado py-2 flex flex-col gap-1">
      <TitleContent title="GRUPOS" />
      <FilterIndex />
      <BotonGroup />
      <BotonGroup />
      <BotonGroup />
      <BotonGroup />
      <BotonGroup />
      <BotonGroup />
      <BotonGroup />
      <BotonGroup />
      <TitleContent title="FECHAS" />
    </div>
  );
};
