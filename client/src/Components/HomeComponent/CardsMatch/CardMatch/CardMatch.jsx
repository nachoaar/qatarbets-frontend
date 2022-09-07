import React from 'react'
import { Link } from 'react-router-dom'

export const CardMatch = (props) => {

  let groupN = props.groupName?.find((e, index) => (index + 1) === props.group)
  let letter = groupN[groupN.length-1]
  return (
    <Link to={`/detail/${props.id}`}>
      <div className="w-full h-28 bg-rojo p-1.5 flex flex-row gap-1 rounded-md transition-colors duration-700 hover:bg-rojosec">
        <div className="w-auto flex flex-row gap-1">
          <div className="w-20 h-full bg-rojosec flex justify-center items-center rounded-md">
            <h1 className="font-fifa text-xl text-white">{letter}</h1>
          </div>
          <div className="flex flex-col h-full w-52 rounded-md gap-1">
            <div className="w-full bg-morado h-1/2 rounded-md flex flex-row gap-3 justify-start items-center">
              <div className="overflow-hidden border-2 border-white w-10 h-10 bg-morado translate-x-1 rounded flex items-center">
                <img
                  src={`https://countryflagsapi.com/png/${props.home_team}`}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
              <p className="font-parrafo font-medium text-white">
                {props.home_team}
              </p>
            </div>
            <div className="w-full bg-morado h-1/2 rounded-md flex flex-row gap-3 justify-start items-center">
              <div className="overflow-hidden border-2 border-white w-10 h-10 bg-morado translate-x-1 rounded flex items-center">
                <img
                  src={`https://countryflagsapi.com/png/${props.away_team}`}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
              <p className="font-parrafo font-medium text-white">
                {props.away_team}
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full w-7 gap-1">
            <div className="w-full bg-rojosec h-1/2 rounded-tl rounded-bl flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">
                0
              </p>
            </div>
            <div className="w-full bg-rojosec h-1/2 rounded-tl rounded-bl flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">
                0
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-morado h-full w-24 gap-1">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">
                {props.status}
              </p>
            </div>
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">
                2022-11-20
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full w-6 gap-3 justify-center items-center">
            <div className="bg-amarillo w-2 h-2 rotate-45"></div>
            <div className="bg-amarillo w-3 h-3 rotate-45"></div>
            <div className="bg-amarillo w-2 h-2 rotate-45"></div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col bg-rojosec h-full w-36">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">
                HOME
              </p>
            </div>
            <div className="w-full h-1/2 flex flex-row justify-center items-center bg-white">
              <p className="font-parrafo text-black text-lg">
                1.40
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-rojosec h-full w-36">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">
                DRAW
              </p>
            </div>
            <div className="w-full h-1/2 flex flex-row justify-center items-center bg-white">
              <p className="font-parrafo text-black text-lg">
                2
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-rojosec h-full w-36">
            <div className="w-full h-1/2 flex flex-row justify-center items-center">
              <p className="font-parrafo text-white text-lg">
                AWAY
              </p>
            </div>
            <div className="w-full h-1/2 flex flex-row justify-center items-center bg-white">
              <p className="font-parrafo text-black text-lg">
                3.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
