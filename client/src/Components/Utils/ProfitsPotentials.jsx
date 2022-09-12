import React, { useState } from "react";

export const ProfitsPotentials = ({ profit, home_team, away_team, bet, date }) => {


  const [monto, setMonto] = useState(0);

  const onChange = (e) => {
    e.preventDefault();
    setMonto(e.target.value);
  };

  return (
    <div className="flex flex-col p-4 bg-morado z-10  text-white rounded-lg gap-2">
      <div className="flex flex-row items-center">
        <div className="flex flex-row gap-1 p-2">
          <p>Local: </p>
          <span className="font-fifa text-lg">{home_team}</span>
        </div>
        <p>vs</p>
        <div className="flex flex-row gap-1 p-2">
          <p>Visitante: </p>
          <span className="font-fifa text-lg">{away_team}</span>
        </div>
      </div>
      <div className="flex flex-row p-2 gap-1 text-lg">
        <p>su apuesta es por: {bet}</p>
        <span className="font-semibold">{profit}</span>
      </div>
      <div>
        <label
          for="monto"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Seleccione el monto a apostar
        </label>
        <select
          onChange={onChange}
          id="monto"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Seleccione el monto a apostar</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>
      </div>
      <div className="mt-6 bg-white text-morado p-2 rounded-xl text-center">
        <p className="font-titulo text-2xl">Posible ganancia = ${profit * monto}</p>
      </div>
    </div>
  );
};
