import React from "react";

export const Court = ({
  playersGoalkeeperHome,
  playersDefenderHome,
  playersMidfielderHome,
  playersAttackersHome,
  playersGoalkeeperAway,
  playersDefenderAway,
  playersMidfielderAway,
  playersAttackersAway,
}) => {
  return (
    <div className="w-full h-128 flex flex-row bg-canchita bg-cover bg-no-repeat bg-center gap-4 p-8">
      {/* EQUIPO LOCAL */}
      <div className="w-1/2 h-auto flex flex-row justify-between ">
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersGoalkeeperHome &&
            playersGoalkeeperHome.map((p) => {
              return (
                <div className="cursor-pointer flex flex-row items-center rounded-full border-4 border-amarillo shadow-md shadow-black overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-amarillo hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-amarillo ">
                    <p className="font-semibold text-md bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersDefenderHome &&
            playersDefenderHome.map((p) => {
              return (
                <div className="border-4 border-amarillo shadow-md shadow-black cursor-pointer flex flex-row items-center rounded-full overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-amarillo hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-amarillo ">
                    <p className="font-semibold text-md  bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersMidfielderHome &&
            playersMidfielderHome.map((p) => {
              return (
                <div className="border-4 border-amarillo shadow-md shadow-black cursor-pointer flex flex-row items-center rounded-full overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-amarillo hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-amarillo ">
                    <p className="font-semibold text-md  bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersAttackersHome &&
            playersAttackersHome.map((p) => {
              return (
                <div className="border-4 border-amarillo shadow-md shadow-black cursor-pointer flex flex-row items-center rounded-full overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-amarillo hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-amarillo ">
                    <p className="font-semibold text-md  bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* EQUIPO VISITANTE */}
      <div className="w-1/2 h-auto flex flex-row justify-between">
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersAttackersAway &&
            playersAttackersAway.map((p) => {
              return (
                <div className="border-4 border-rojosec shadow-md shadow-black cursor-pointer flex flex-row items-center rounded-full overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-rojosec hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-rojosec text-white">
                    <p className="font-semibold text-md  bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersMidfielderAway &&
            playersMidfielderAway.map((p) => {
              return (
                <div className="border-4 border-rojosec shadow-md shadow-black cursor-pointer flex flex-row items-center rounded-full overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-rojosec hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-rojosec text-white ">
                    <p className="font-semibold text-md  bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersDefenderAway &&
            playersDefenderAway.map((p) => {
              return (
                <div className="border-4 border-rojosec shadow-md shadow-black cursor-pointer flex flex-row items-center rounded-full overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-rojosec hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-rojosec text-white ">
                    <p className="font-semibold text-md  bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersGoalkeeperAway &&
            playersGoalkeeperAway.map((p) => {
              return (
                <div className="border-4 border-rojosec shadow-md shadow-black cursor-pointer flex flex-row items-center rounded-full overflow-hidden transform transition-all ease-out duration-1000 hover:rounded-md hover:scale-125 hover:bg-rojosec hover:z-50 group">
                  <img
                    src={p.photo}
                    alt=""
                    className="h-12 w-12 group-hover:w-16 group-hover:h-16"
                  />
                  <div className="h-0 w-0 group-hover:h-auto group-hover:w-24 group-hover:p-2 text-left text-xs bg-rojosec text-white ">
                    <p className="font-semibold text-md  bg-morado text-white rounded p-1">{p.name}</p>
                    <p>{p.position}</p>
                    <p>age: {p.age}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
