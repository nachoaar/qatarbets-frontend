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
                  <td className={`border border-gristexto`}>{props.result_match}</td>
                </tr>
              </tbody>
            </table>
            {/* <svg className="fill-rojo cursor-pointer hover:fill-rojosec" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m8.4 17 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L17 8.4 15.6 7 12 10.6 8.4 7 7 8.4l3.6 3.6L7 15.6Zm3.6 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/></svg> */}
          </div>
    </div>
  )
}