import React from 'react'

export const Boton = (props) => {
  return (
    <button className="font-titulo text-blanco text-2xl bg-rojosec rounded-tr-3xl rounded-bl-3xl rounded-br-md w-60 h-16 hover:bg-rojo transition-colors shadow-xl shadow-rojo/30 ">{props.name}</button>
  )
}
