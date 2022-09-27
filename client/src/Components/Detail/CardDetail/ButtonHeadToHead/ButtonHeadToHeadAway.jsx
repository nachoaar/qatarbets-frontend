import React from "react";

export const ButtonHeadToHeadAway = ({ result }) => {

  let variants = {
    color: "",
    letter: ""
  };

  if (result === "winner_home"){
    variants.color = "bg-red-600";
    variants.letter = "P"
  }
  if (result === "winner_away"){
    variants.color = "bg-green-600";
    variants.letter = "G"
  }
  if (result === "tie"){
    variants.color = "bg-yellow-400";
    variants.letter = "E"
  }


  return (
    <button className= {` px-3 py-1 ${variants.color} rounded-sm`} >
      <p className="font-titulo text-sm">{variants.letter}</p>
    </button>
  );
};
