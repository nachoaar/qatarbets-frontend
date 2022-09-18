import React from 'react'



export const UserCard = (props) => {
  
  
  
  return (
    <div className="w-full h-auto flex flex-col gap-5">
          <div className="w-full h-24 bg-white">
            <table className="shadow font-titulodash text-sm text-textotable w-full h-full border-collapse border border-gristexto text-center table-fixed">
              <tbody>
                <tr>

                  <th className="border border-gristexto bg-gris text-gristexto">MATCH</th>
                  <th className="border border-gristexto bg-gris text-gristexto">PROFIT</th>
                  <th className="border border-gristexto bg-gris text-gristexto">RESULT</th>
                  <th className="border border-gristexto bg-gris text-gristexto">BET</th>
                </tr>
                <tr>  
                  <td className="border border-gristexto">{}</td>
                  <td className={`border border-gristexto ${props.final_profit > 0 ? "text-green-400" : "text-rojosec"}`}>{ props.final_profit > 0 ? props.final_profit - props.money_bet : props.money_bet }</td>
                  <td className="border border-gristexto">{props.result}</td>
                  <td className="border border-gristexto">{props.money_bet}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
