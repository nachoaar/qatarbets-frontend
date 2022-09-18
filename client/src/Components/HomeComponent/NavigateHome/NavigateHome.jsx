import React from "react";


export const NavigateHome = ({setChange, change})=>{


  const onChange = (e, change) => {
    e.preventDefault();
    setChange(change);
  };


  return (

    <div className="bg-slate-100 w-11/12 flex flex-row gap-4 pl-8 py-2 mt-20">
        <button
          onClick={(e) => onChange(e, true)}
          className="rounded-tr-xl rounded-bl-xl bg-morado text-white font-fifa text-lg p-2 focus:outline-none focus:ring focus:bg-rojo focus:ring-rojosec"
          autoFocus={change ? true : false}
          /* autoFocus */
        >
          Fase de grupos
        </button>
        <button
          onClick={(e) => onChange(e, false)}
          className="rounded-tr-xl rounded-bl-xl bg-morado text-white font-fifa text-lg p-2 focus:outline-none focus:ring focus:bg-rojo focus:ring-rojosec"
          autoFocus={!change ? true : false}
        >
          Fase de eliminatorias
        </button>
      </div>

  )


}
