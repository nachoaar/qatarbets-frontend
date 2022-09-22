import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { UserCard } from './UserBetCard.jsx/UserCard';
import UserStatGafic from '../Dashboard/Routes/Graphs/userGrafics';
import { useState } from 'react';
import {clearAvatar, updateUserAvatar,updateUserName } from "../../redux/actions/internalUserActions";
import PfpInput from '../pfpInput/PfpInput';
export const UserProfile = ({modal, setModal}) => {

  const user = useSelector((store) => store.internalUser?.user);
  const bets = useSelector((store) => store.internalUser?.sortedBets)
  const [modify, setModify] = useState(false)
  const newAvatar = useSelector((store)=> store.internalUser?.avatar)
  const [newName,setNewName] = useState('')
  const dispatch = useDispatch()


  const handleInputName = (e)=>{
    setNewName(e.target.value)
  }

  function handleOnClick(e) {
    e.preventDefault();
    setModal(false);
  }

 console.log( ' New Avatar State ----------->', newAvatar)

  function handleModifyButton(e){
    e.preventDefault()
    if(e.target.value === 'save'){
      if(newAvatar?.length > 0){
        dispatch(updateUserAvatar(newAvatar, user[0]?.id))}
        console.log('se despacho update user avatar')
        if(newName?.length >  8 ){
          dispatch(updateUserName(newName, user[0]?.id))
        }  
      }
      setModify(!modify)
    }

  console.log('Use State Avatar ------------>',user[0]?.avatar)

  return (
    <>
      <div className={`w-screen h-screen p-5 fixed top-0 left-0 bg-black/50 flex items-center justify-center ${modal === false ? "hidden" : ""}`}>
        <div className="w-1/2 h-full bg-gris relative rounded-lg overflow-hidden shadow p-5">
          <div className="flex items-center content-between mb-3 pb-3 border-b border-rojo">
            <h3 className="font-titulodash font-bold text-rojosec">Mi Perfil</h3>
          </div>
          <button onClick={(e) => handleOnClick(e)} className="absolute transition duration-200 hover:bg-gris rounded top-4 right-5 w-6 h-6 flex items-center justify-center">
            <svg className="fill-rojo" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z"/></svg>
          </button>
          <div className="w-full flex justify-between items-end">
            <div className="w-full h-auto mb-2 flex justify-start items-start gap-4">
              <div className="w-32 h-32 overflow-hidden border-4 border-gristexto rounded-xl">
              { modify === true ? <PfpInput /> : <img
                className="h-32 w-32"
                src={ user.length >= 1 ? user[0].avatar : ''}
                alt="avatar usuario"
              />}
              </div>
              <div className="flex flex-col gap-2">
               { modify === true ? <input placeholder='ingresa tu nuevo nombre' type='text' onChange={(e)=>handleInputName(e)}/> : <p className="border-b border-grisfooter w-40 font-titulodash">{user.length >= 1 ? user[0]?.name.toUpperCase():'Nombre'}</p>}
                <p className="border-b border-grisfooter w-40">{user.length >= 1 ? `${user[0].age } años`: '18+'}</p>
                <p className="border-b border-grisfooter w-100">{user.length >= 1 ? user[0].email : 'example@example.com'}</p>
              </div>
            </div>
            { modify === true ? <button className="w-48 h-10 mb-2 rounded-lg border border-rojo font-titulo text-grisfooter transition duration-200 hover:bg-rojo hover:text-white" onClick={(e)=> handleModifyButton(e)} value='save'>Guardar Cambios</button>
            :
            <button className="w-48 h-10 mb-2 rounded-lg border border-rojo font-titulo text-grisfooter transition duration-200 hover:bg-rojo hover:text-white"  onClick={(e)=> handleModifyButton(e)}>Modificar perfil</button>}
          </div>
          <div className="w-full h-2/3 overflow-auto">
            <div className="w-full h-auto p-2 bg-gray-100 overflow-auto border-t border-rojo flex flex-col gap-2">
              <p className="w-full border-b border-rojo pb-2 font-titulodash font-bold text-rojosec">Mis apuestas</p>
              { bets && bets?.map((bet) => {
                return(
                  <UserCard
                  match={bet.match}
                  key={bet.id}
                  id={bet.id}
                  result={bet.result}
                  userId={bet.userId}
                  matchId={bet.matchId}
                  final_profit={bet.final_profit}
                  money_bet ={bet.money_bet}/>
                )
              })}
              <p className="w-full border-y border-rojo py-2 font-titulodash font-bold text-rojosec">Mi estadística</p>
              <UserStatGafic
                dataa={ bets.length > 0 ? bets : []}
                userId={user[0]?.id}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
