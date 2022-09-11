import React from 'react';
import { UserCard } from './UserBetCard.jsx/UserCard';
// import UserStatGafic from '../Dashboard/Routes/Graphs/userGrafics';

export const UserProfile = ({modal, setModal}) => {

  function handleOnClick(e) {
    e.preventDefault();
    setModal(false);
  }

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
              <div className="w-32 h-32  border-4 border-gristexto rounded-xl">
                img
              </div>
              <div className="flex flex-col gap-2">
                <p className="border-b border-grisfooter w-40">Name</p>
                <p className="border-b border-grisfooter w-40">Age</p>
                <p className="border-b border-grisfooter w-40">Email</p>
              </div>
            </div>
            <button className="w-48 h-10 mb-2 rounded-lg border border-rojo font-titulo text-grisfooter transition duration-200 hover:bg-rojo hover:text-white">Modificar perfil</button>
          </div>
          <div className="w-full h-2/3 overflow-auto">
            <div className="w-full h-auto p-2 bg-gray-100 overflow-auto border-t border-rojo flex flex-col gap-2">
              <p className="w-full border-b border-rojo pb-2 font-titulodash font-bold text-rojosec">Mis apuestas</p>
              <UserCard />
              <UserCard />
              <p className="w-full border-y border-rojo py-2 font-titulodash font-bold text-rojosec">Mi estadística</p>
              {/* <UserStatGafic
                dataa={bets}
                userId={graph.id}
              /> */}
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
