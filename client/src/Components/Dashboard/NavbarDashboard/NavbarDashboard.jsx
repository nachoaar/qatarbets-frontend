import React from 'react'
import { useSelector } from 'react-redux';
import { SearchDashboard } from './Search/SearchDashboard'

export const NavbarDashboard = () => {

  const user = useSelector((state) => state.user);

  return (
    <nav className="w-full h-20 flex flex-row items-center">
      <div className="w-1/2 h-full  flex items-center justify-center">
        <SearchDashboard />
      </div>
      <div className="w-1/2 h-full flex items-center justify-end gap-4">
        <p className="font-titulodash font-bold text-gristexto">{user.user.name}</p>
        <div className="border-2 border-rojo mr-20 w-10 h-10 rounded-full overflow-hidden">
        <img
          className="h-10 w-10"
          src={user.user.avatar}
          alt="avatar usuario"
        />
        </div>
      </div>
    </nav>
  )
}
