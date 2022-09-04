import React from "react";

export const CardLarge = (props) => {
  return (
    <button className="h-60 wid-auto md:w-4/12 p-4 ">
      <div className="h-full  bg-rojo flex flex-col justify-between py-2 px-4 ease-out duration-300 hover:bg-rojosec rounded-tl-lg rounded-tr-2xl rounded-br-lg rounded-bl-2xl  font-parrafo hover:-translate-y-3">
        <div className="bg-blanco">
          <h1 className="bg-rojosec text-center text-white">{props.date}</h1>
        </div>
        <div className=" flex flex-row justify-between text-white p-1">
          <p className="font-fifa">FIFA WORLD CUP</p>
          <span className="text-sm">Group Stage - 1</span>
        </div>
        <div className="bg-rojosec text-white p-1 flex flex-row justify-between">
          <div className="flex flex-row justify-between gap-2 items-center">
            <div className="border-2 border-white">
              <img
                src={`https://countryflagsapi.com/png/${props.homeTeam}`}
                alt=""
                className="w-8 h-8"
              />
            </div>
            <h3>{props.homeTeam}</h3>
          </div>
          <h3>Vs</h3>
          <div className="flex flex-row justify-between gap-2 items-center">
            <h3>{props.awayTeam}</h3>
            <div className="border-2 border-white">
              <img
                src={`https://countryflagsapi.com/png/${props.awayTeam}`}
                alt=""
                className="w-8 h-8 "
              />
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
