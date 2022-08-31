import React from 'react'

export const Boton = (props) => {
  return (
    <button className="font-sans text-mikeWhite font-extrabold bg-redApp rounded-tr-3xl rounded-bl-3xl rounded-br-md w-60 h-16">{props.name}</button>
  )
}
