import React from 'react'

export const CardDetail = (props) => {

  return (
    <div className="bg-rojo w-full h-auto p-3 font-parrafo rounded-tl rounded-tr-2xl rounded-br rounded-bl-2xl">
      <div className="bg-rojosec flex items-center justify-around p-2">
        <p className="bg-rojosec text-center text-white text-xl font-titulo">{props.date}</p>
        <p className="text-white text-center">{`${props.city} - ${props.stadium_name}`}</p>
      </div>
      <div className=" flex flex-row justify-around text-white p-1 m-3 font-fifa">
        <p>FIFA WORLD CUP</p>
        <p>{props.group}</p>
      </div>
      <div className="bg-rojosec text-white p-3 flex flex-row justify-around items-center mb-3">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3">
            <p className="text-lg">{props.home_team}</p>
          </div>
          <div className="bg-amarillo border-solid border-4 border-white w-14 h-12 rounded-tr-lg rounded-bl-lg overflow-hidden flex items-center justify-center">
            <img
              src={`https://countryflagsapi.com/png/${props.home_team}`}
              alt=""
              className="w-14 h-12"
            />
          </div>
        </div>
        <h2 className="font-fifa">
          VS
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3">
            <p className="text-lg">{props.away_team}</p>
          </div>
          <div className="bg-amarillo border-solid border-4 border-white w-14 h-12 rounded-tr-lg rounded-bl-lg overflow-hidden flex items-center justify-center">
            <img
              src={`https://countryflagsapi.com/png/${props.away_team}`}
              alt=""
              className="w-14 h-12"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around gap-2">
        <div className="w-1/4 bg-slate-200 p-1">
          <p>home: 1.40</p>
        </div>
        <div className="w-2/4 bg-slate-200 p-1">
          <p>draw: 2</p>
        </div>
        <div className="w-1/4 bg-slate-200 p-1">
          <p>away: 3.5</p>
        </div>
      </div>
    </div>
  )
}
