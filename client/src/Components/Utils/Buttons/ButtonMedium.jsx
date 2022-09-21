import React from 'react'

export const ButtonMedium = (props, stripe, loading) => {
  return (
    <button
      disabled={!stripe}
      className="font-titulo text-blanco text-xl bg-rojosec rounded-tr-lg rounded-bl-lg rounded-br-md w-40 h-12 ease-out duration-300 hover:shadow-xl hover:shadow-rojo/30">
      {loading ? 'Peraaa Boludo' : props.name}
    </button>
  )
}
