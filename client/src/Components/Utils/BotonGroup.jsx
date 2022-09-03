import React from "react";

export const BotonGroup = () => {
  return (
    <button className="w-full ease-out duration-300 bg-slate-100 hover:bg-violet-600 text-rose-600 hover:text-white">
      <div className="flex flex-row justify-between ">
        <div className="p-3 flex items-center">
          <h1 className="font-bold">A</h1>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col lg:flex-row gap-2 px-2 text-sm">
            <p>Qatar</p>
            <p>Ecuador</p>
          </div>
          <div className="flex flex-col lg:flex-row  gap-2 px-2 text-sm">
            <p>Senegal</p>
            <p>Netherlands</p>
          </div>
        </div>
      </div>
    </button>
  );
};
