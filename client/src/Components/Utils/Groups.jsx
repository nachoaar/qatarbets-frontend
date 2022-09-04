import React from 'react'

export const Groups = (props) => {
  return (
    <div className="flex flex-col bg-morado bg-opacity-40 backdrop-blur rounded-tr-3xl rounded-bl-3xl rounded-br-md rounded-t-md w-full sm:w-1/4 text-blanco p-2">
      <h2 className="text-center mb-3 font-titulo text-xl">{props.name.toUpperCase().replace('_',' ')}</h2>
      <div className="bg-rojosec gap-1 h-auto p-2 flex items-center justify-around mb-2 rounded-tr-lg rounded-bl-lg">
        <div className="bg-amarillo border-solid border-4 border-white w-14 h-10 rounded-tr-lg rounded-bl-lg">
          img
        </div>
        <p className="w-full text-center h-10 flex justify-center items-center font-parrafo text-lg">
          Equipo
        </p>
      </div>
      <div className="bg-rojosec gap-1 h-auto p-2 flex items-center justify-around mb-2 rounded-tr-lg rounded-bl-lg">
        <div className="bg-amarillo border-solid border-4 border-white w-14 h-10 rounded-tr-lg rounded-bl-lg">
          img
        </div>
        <p className="w-full text-center h-10 flex justify-center items-center font-parrafo text-lg">
          Equipo
        </p>
      </div>
      <div className="bg-rojosec gap-1 h-auto p-2 flex items-center justify-around mb-2 rounded-tr-lg rounded-bl-lg">
        <div className="bg-amarillo border-solid border-4 border-white w-14 h-10 rounded-tr-lg rounded-bl-lg">
          img
        </div>
        <p className="w-full text-center h-10 flex justify-center items-center font-parrafo text-lg">
          Equipo
        </p>
      </div>
      <div className="bg-rojosec gap-1 h-auto p-2 flex items-center justify-around mb-2 rounded-tr-lg rounded-bl-lg">
        <div className="bg-amarillo border-solid border-4 border-white w-14 h-10 rounded-tr-lg rounded-bl-lg">
          img
        </div>
        <p className="w-full text-center h-10 flex justify-center items-center font-parrafo text-lg">
          Equipo
        </p>
      </div>
    </div>
  )
}
