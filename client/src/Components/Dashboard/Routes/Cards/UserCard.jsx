import React from 'react'

export const UserCard = (props) => {

  function handleOnClick(e) {
    e.preventDefault();
    props.setGraph({
      status: true,
      id: props.id
    });
  }

  return (
    <button onClick={(e) => handleOnClick(e)}>
          <div className="w-full h-24 flex gap-1 items-center">
            <table className="bg-white shadow font-titulodash text-sm text-textotable w-full h-full border-collapse border border-gristexto text-center table-fixed">
              <tbody>
                <tr>
                  <th className="border border-gristexto bg-gris text-gristexto  pl-2.5 w-12"></th>
                  <th className="border border-gristexto bg-gris text-gristexto">NAME</th>
                  <th className="border border-gristexto bg-gris text-gristexto">ROL</th>
                  <th className="border border-gristexto bg-gris text-gristexto">STATUS</th>
                </tr>
                <tr>
                  <td className="border border-gristexto content-center pl-2.5 w-12"><img src={props.avatar} alt="avatar" className={`h-7 w-7 rounded-full border-2 ${props.userbanned === false ? "border-solid border-green-400" : "border-solid border-rojosec"}`} /></td>
                  <td className="border border-gristexto">{props.name}</td>
                  <td className="border border-gristexto">{props.rol}</td>
                  <td className={`border border-gristexto ${props.userbanned === false ? "text-green-500" : "text-rojosec"}`}>{props.userbanned === false ? 'active' : 'banned'}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </button>
  )
}
