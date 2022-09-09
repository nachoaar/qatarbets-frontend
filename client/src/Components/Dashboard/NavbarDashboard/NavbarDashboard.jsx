import React from 'react'
import { SearchDashboard } from './Search/SearchDashboard'

export const NavbarDashboard = () => {
  return (
    <nav className="w-full h-20 flex flex-row items-center">
      <div className="w-1/2 h-full  flex items-center justify-center">
        <SearchDashboard />
      </div>
      <div className="w-1/2 h-full flex items-center justify-end gap-4">
        <p className="font-titulodash font-bold text-gristexto">Username</p>
        <div className="border-2 border-rojo mr-20 w-10 h-10 rounded-full">
          
        </div>
      </div>
    </nav>
  )
}
