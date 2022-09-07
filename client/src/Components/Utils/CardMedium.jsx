import React from "react";

export const CardMedium = ({match}) => {

  return (
    <button className="h-80 wid-auto md:w-3/12  ">
      <div className="m-1 h-full  bg-rojo flex flex-col justify-between p-3 ease-out duration-300 hover:bg-rojosec rounded-tl-lg rounded-tr-2xl rounded-br-lg rounded-bl-2xl  font-parrafo hover:-translate-y-1">
        <div className="bg-blanco">
          <h1 className="bg-rojosec text-center text-white">2022-11-20</h1>
        </div>
        <div className=" flex flex-col justify-between text-white p-1">
          <p className="font-fifa">FIFA WORLD CUP</p>
          <span className="text-sm">Group Stage - 1</span>
        </div>
        <div className="bg-rojosec text-white p-1 flex flex-row justify-between">
          <div>
            <div>
            <img src={`https://countryflagsapi.com/png/${match?.home_team.name}`} alt={match?.home_team.name}/>
            </div>
            <h3>{match?.home_team.name}</h3>
          </div>
          <h3>Vs</h3>
          <div>
            <div className="">
              <img src={`https://countryflagsapi.com/png/${match?.away_team.name}`} alt={match?.away_team.name}/>
            </div>
            <h3>{match?.away_team.name}</h3>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-1">
          <div className=" bg-slate-200">
            <p>home: 1.40</p>
          </div>
          <div className=" bg-slate-200">
            <p>draw: 2</p>
          </div>
          <div className=" bg-slate-200">
            <p>away: 3.5</p>
          </div>
        </div>
      </div>
    </button>
  );
};
