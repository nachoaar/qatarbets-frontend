import React from "react";

export const CardXs = () => {
  return (
    <button className="h-24 wid-auto">
      <div className="h-full  bg-rojo flex flex-col justify-between py-1 px-2 ease-out duration-300 hover:bg-rojosec rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl  font-parrafo">
        <div className="bg-blanco">
          <h1 className="bg-rojosec text-center text-white">2022-11-20</h1>
        </div>
        <div className="bg-rojosec text-white p-1 flex flex-row justify-between">
          <div>
            <h3>Argentina</h3>
          </div>
          <h3>Vs</h3>
          <div>
            <h3>Brazil</h3>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-1">
          <div className="w-1/3 bg-slate-200">
            <p>1.40</p>
          </div>
          <div className="w-1/3 bg-slate-200">
            <p>2</p>
          </div>
          <div className="w-1/3 bg-slate-200">
            <p>3.5</p>
          </div>
        </div>
      </div>
    </button>
  );
};
