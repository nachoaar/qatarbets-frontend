import React from 'react'

export const MatchCard = (props) => {

  let date = new Date(props.date);

  date = date.toLocaleDateString("es-AR",{day:'numeric', month:'numeric', year:'numeric'});

  return (
    <div className="w-full h-auto flex flex-col gap-5">
      <div className="w-full h-24 flex gap-1 items-center">
        <table className="bg-white shadow font-titulodash text-sm text-textotable w-full h-full border-collapse border border-gristexto text-center  table-fixed">
          <tbody>
            <tr>
              <th className="border border-gristexto bg-gris text-gristexto">MATCH</th>
              <th className="border border-gristexto bg-gris text-gristexto">DATE</th>
              <th className="border border-gristexto bg-gris text-gristexto">STATUS</th>
              <th className="border border-gristexto bg-gris text-gristexto">RESULT</th>
            </tr>
            <tr>
              <td className="border border-gristexto">{`${props.home_team} vs ${props.away_team}`}</td>
              <td className="border border-gristexto">{date}</td>
              <td className="border border-gristexto">{props.status}</td>
              <td className={`border border-gristexto`}>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
