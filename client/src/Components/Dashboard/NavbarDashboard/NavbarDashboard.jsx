import React from 'react'
import { Menu } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { SearchDashboard } from './Search/SearchDashboard'
import Logout from '../../Logout/Logout';
import { SearchSimulation } from '../Routes/SearchSimulation';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const NavbarDashboard = () => {

  const user = useSelector((state) => state.user);
  const [location, setLocation] = useState(window.location.href)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav className="w-full h-20 flex flex-row items-center">
      <div className="w-1/2 h-full  flex items-center justify-center">
        {location === 'http://localhost:3000/dashboard/simulation' ? <SearchSimulation /> : <SearchDashboard />}
      </div>
      <div className="w-1/2 h-full flex items-center justify-end gap-4">
        <Menu>
          {
            user.isLoggedIn ? (
              <div className="flex flex-row justify-center items-center gap-4">
                <p className="text-white font-titulo text-lg">{user.user.name}</p>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-offset-2">
                <span className="sr-only">Open user menu</span>
                <img
                className='h-10 w-10 rounded-full'
                src={user.user.avatar}
                />
                </Menu.Button>
              </div>
            ) : (<></>)
          }
          <Menu.Items c className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
            {
              ({active}) =>(
                <Link to='/home'>
                  <p className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>Home</p>
                </Link>
              )}
            </Menu.Item>
          <Menu.Item>{
              ({active}) =>(
                <div className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>
                  <Logout />
                </div>
              )}</Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  )
}
