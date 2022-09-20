import React from "react";
import { Triangle } from "./Triangle";

export const TitleContent = ({title}) =>{

  return(
    <div className="flex pl-1">
      <Triangle />
      <h1 className="text-xl text-white font-fifa px-2 font-medium m-1">{title}</h1>
    </div>
  )

}
