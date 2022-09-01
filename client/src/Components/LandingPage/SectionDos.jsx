import React from "react";


export const SectionDos = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center bg-footer">
      <div className="flex flex-col flex-auto gap-4 items-center w-full justify-center">
        <div className="w-5/6 h-1/3 bg-gradient-to-b from-purple-600 to-yellow-400" >

        </div>
        <div className="flex flex-row w-5/6 h-1/2 gap-4">
            <div className="w-1/3 bg-gradient-to-b from-yellow-400 to-purple-600"></div>
            <div className="w-2/3 bg-gradient-to-b from-yellow-400 to-purple-600"></div>
        </div>
      </div>
    </div>
  );
};