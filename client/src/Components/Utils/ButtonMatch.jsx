import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonMatch = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <button className="w-full ease-out duration-300 bg-slate-100 hover:bg-moradosec text-rose-600 hover:text-white">
        <div className="flex flex-row justify-between font-parrafo text-md p-3">
            <h1 className="font-fifa">{props.group}</h1>
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
