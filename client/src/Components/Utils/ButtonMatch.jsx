import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonMatch = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <button className="w-full transition duration-700 bg-gris hover:bg-rojo text-rojo hover:text-white font-parrafo active:bg-violet-700 focus:outline-none focus:ring focus:ring-rojosec focus:bg-rojo focus:text-white">
        <div className="flex flex-row justify-center items-center font-parrafo text-md p-3">
            <div className="flex gap-2">
              <p>{props.home_team}</p>
              <p className="font-fifa">VS</p>
              <p>{props.away_team}</p>
            </div>
        </div>
      </button>
    </Link>
  )
}
