import React from 'react'

export const CardDetail = () => {
  return (
    <div className="bg-rojo w-full h-auto p-3 font-parrafo rounded-tl rounded-tr-2xl rounded-br rounded-bl-2xl">
      <div className="bg-blanco">
        <h1 className="bg-rojosec text-center text-white text-lg">2022-11-20</h1>
      </div>
      <div className=" flex flex-row justify-around text-white p-1 m-3 font-fifa">
        <p>FIFA WORLD CUP</p>
        <p>Group A</p>
      </div>
      <div className="bg-rojosec text-white p-3 flex flex-row justify-around items-center mb-3">
        <div>
          <div className="mb-3">
            <p className="text-lg">Equipo A</p>
          </div>
          <div className="bg-amarillo border-solid border-4 border-white w-14 h-12 rounded-tr-lg rounded-bl-lg">
            bandera
          </div>
        </div>
        <h2 className="font-fifa">
          Vs
        </h2>
        <div>
          <div className="mb-3">
            <p className="text-lg">Equipo B</p>
          </div>
          <div className="bg-amarillo border-solid border-4 border-white w-14 h-12 rounded-tr-lg rounded-bl-lg">
            bandera
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around gap-2">
        <div className="w-1/4 bg-slate-200">
          <p>a</p>
        </div>
        <div className="w-2/4 bg-slate-200">
          <p>a</p>
        </div>
        <div className="w-1/4 bg-slate-200">
          <p>a</p>
        </div>
      </div>
    </div>
  )
}
