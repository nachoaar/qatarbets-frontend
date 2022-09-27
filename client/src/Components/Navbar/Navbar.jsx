import { Fragment } from 'react'
import {Link} from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useSelector } from "react-redux";
import { useState } from 'react';
import { UserProfile } from '../User/UserProfile';
import Logout from '../Logout/Logout';
import { useDispatch } from 'react-redux';
import { sortBets } from '../../redux/actions/internalUserActions';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = ({id}) => {

  const [modal, setModal] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [color, setColor] = useState(false);
  const lUser = useSelector((store) => store.internalUser.user)
  const dispatch = useDispatch()

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true)
      } else {
        setColor(false)
      }
  }

  const user = useSelector((state) => state.user);

  window.addEventListener('scroll', changeColor);

  function handleOnClick(e) {
    dispatch(sortBets(id))
      e.preventDefault();
      setHiddenMenu(true);
      setModal(true);
  }

  return (
    <Disclosure as="nav" className={color ? "bg-rojo fixed top-0 z-50 w-full transition duration-500 shadow-xl" : "bg-transparent fixed top-0 z-50 w-full transition duration-500"}>
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center ml-12 sm:ml-0 sm:items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <svg className="h-10" width="62" height="65" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 28.1631C0 10.8274 13.2927 0.16156 31 0.16156C48.7219 0.16156 62 10.8274 62 28.1631C62 50.8268 40.3058 64.1616 31 64.1616C21.7039 64.1616 0 50.8268 0 28.1631Z" fill="url(#paint0_linear_13_93)" />
                    <path d="M14.1087 37.5297C14.1087 15.8515 26.5164 7.76182 30.4935 7.76182C34.4852 7.76182 46.8882 15.8515 46.8882 37.5297C46.8882 48.2053 40.6794 54.8654 30.4935 54.8654C20.3125 54.8654 14.1087 48.2053 14.1087 37.5297Z" fill="#FF003F" />
                    <defs>
                      <linearGradient id="paint0_linear_13_93" x1="31" y1="64.1616" x2="31" y2="0.16156" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#6C1A2F" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                {user.isLoggedIn ? (
                  <div className="flex flex-row justify-center items-center gap-4">
                    <p className="text-white font-titulo text-lg">{user.user.name}</p>
                    <Menu.Button onClick={() => setHiddenMenu(false)} className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.user.avatar}
                        alt="avatar usuario"
                      />
                    </Menu.Button>
                  </div>
                  ) : (
                    <></>
                )}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${hiddenMenu === true ? 'hidden' : ''}`}>
                      <Menu.Item>
                        {({ active }) => (
                          <p onClick={(e) => handleOnClick(e)} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>Mi Perfil</p>
                        )}
                      </Menu.Item>
                        { lUser[0]?.rol === "admin" ? <Menu.Item>
                          {({ active }) => (
                            <Link to='/dashboard'>
                              <p onClick={() => setHiddenMenu(true)} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>Dashboard</p>
                            </Link>
                          )}
                    </Menu.Item> : <></>}
                      <Menu.Item>
                        {({ active }) => (
                          <div onClick={() => setHiddenMenu(true)} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>
                            <Logout setHiddenMenu={setHiddenMenu} />
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                  </Menu>
            </div>
          </div>
        </div>
        <UserProfile
          modal={modal}
          setModal={setModal}
        />
      </>
    </Disclosure>
  )
}
