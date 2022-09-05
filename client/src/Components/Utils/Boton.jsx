import React from 'react'

export const Boton = (props) => {
  return (
    <button className="font-titulo text-blanco text-2xl bg-rojosec rounded-tr-3xl rounded-bl-3xl rounded-br-md w-60 h-16 ease-out duration-300 hover:shadow-xl hover:shadow-rojo/30">{props.name}</button>
  )
}
