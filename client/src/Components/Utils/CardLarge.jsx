import React from "react";

export const CardLarge = () => {
  return (
    <button className="h-60 wid-auto md:w-4/12 p-4 ">
      <div className="h-full  bg-rojo flex flex-col justify-between py-2 px-4 ease-out duration-300 hover:bg-rojosec rounded-tl-lg rounded-tr-2xl rounded-br-lg rounded-bl-2xl">
        <div className="bg-blanco">
          <h1 className="bg-rojosec text-center text-white">2022-11-20</h1>
        </div>
        <div className=" flex flex-row justify-between text-white font-bold p-1">
          <p>FIFA WORLD CUP</p>
          <span className="text-sm font-normal">Group Stage - 1</span>
        </div>
        <div className="bg-rojosec text-white p-1 flex flex-row justify-between">
          <div>
            <div>
              <p>bandera</p>
            </div>
            <h3>Argentina</h3>
          </div>
          <h3>Vs</h3>
          <div>
            <h3>Brazil</h3>
            <div>
              <p>bandera</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-1/4 bg-slate-200">
            <p>home: 1.40</p>
          </div>
          <div className="w-1/4 bg-slate-200">
            <p>draw: 2</p>
          </div>
          <div className="w-1/4 bg-slate-200">
            <p>away: 3.5</p>
          </div>
        </div>
      </div>
    </button>
  );
};
