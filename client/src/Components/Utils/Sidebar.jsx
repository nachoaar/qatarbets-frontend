import React from "react";
import { BotonGroup } from "./BotonGroup";
import { TitleContent } from "./TitleContent";

export const Sidebar = () => {
  return (
    <div className="h-full w-1/5 bg-gradient-to-b from-rojobg to-moradobg py-2 flex flex-col gap-1">
      <TitleContent title="GRUPOS" />
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
