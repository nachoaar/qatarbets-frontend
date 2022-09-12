import React from 'react'

export const ButtonMedium = (props) => {
  return (
    <button className="font-titulo text-blanco text-xl bg-rojosec rounded-tr-lg rounded-bl-lg rounded-br-md w-40 h-12 ease-out duration-300 hover:shadow-xl hover:shadow-rojo/30">{props.name}</button>
  )
}
