import React from 'react'

export const UserCard = () => {

  return (
    <div className="w-full h-auto flex flex-col gap-5">
          <div className="w-full h-24 bg-white">
            <table className="shadow font-titulodash text-sm text-textotable w-full h-full border-collapse border border-gristexto text-center table-fixed">
              <tbody>
                <tr>
                  <th className="border border-gristexto bg-gris text-gristexto">USER</th>
                  <th className="border border-gristexto bg-gris text-gristexto">MATCH</th>
                  <th className="border border-gristexto bg-gris text-gristexto">PROFIT</th>
                  <th className="border border-gristexto bg-gris text-gristexto">RESULT</th>
                  <th className="border border-gristexto bg-gris text-gristexto">BET</th>
                </tr>
                <tr>
                  <td className="border border-gristexto">a</td>
                  <td className="border border-gristexto">a</td>
                  <td className={`border border-gristexto`}>a</td>
                  <td className="border border-gristexto">a</td>
                  <td className="border border-gristexto">a</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
