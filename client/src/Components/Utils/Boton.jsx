import React from 'react'

export const Boton = (props) => {
  return (
    <button className="font-sans text-mikeWhite text-2xl bg-redApp rounded-tr-3xl rounded-bl-3xl rounded-br-md w-60 h-16 hover:bg-redHover transition-colors shadow-xl shadow-redHover/30 ">{props.name}</button>
  )
}
