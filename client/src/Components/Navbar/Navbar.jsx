/* This example requires Tailwind CSS v2.0+ */
// https://tailwindui.com/components/application-ui/navigation/navbars#component-70a9bdf83ef2c8568c5cddf6c39c2331
import { Fragment } from 'react'
import {Link} from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector } from "react-redux";
import { useState } from 'react';
import { UserProfile } from '../User/UserProfile';
import Logout from '../Logout/Logout';
import { useDispatch } from 'react-redux';
import { getIuBets, sortBets } from '../../redux/actions/internalUserActions';


const navigation = [
    { name: 'Login', href: '#', current: true },
    { name: 'Register', href: '#', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const Navbar = ({id}) => {
    
    const [modal, setModal] = useState(false);
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
    // let islogerenderusrprofile = null;
    // if(isLoggedIn){
    //   islogerenderusrprofile = <button onClick={(e) => handleOnClick(e)} className="text-white">Mi Perfil</button>
    // }


    window.addEventListener('scroll', changeColor);


    function handleOnClick(e) {
        e.preventDefault();
        dispatch(getIuBets())
        setTimeout(()=>{
            dispatch(sortBets(id))
        },2000)
        setModal(true);
    }

    let loclaRoute = window.location.href


    return (
        <Disclosure as="nav" className={color ? "bg-rojo fixed top-0 z-50 w-full transition duration-500 shadow-xl" : "bg-transparent fixed top-0 z-50 w-full transition duration-500"}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-mikeWhite hover:text-mikeBlack focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
                                {/* <div className="hidden sm:ml-6 sm:block">
                                    <div className="font-titulo  flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white text-xl' : 'text-white text-xl font-semibold hover:bg-white hover:text-rojo',
                                                    'px-3 py-2 rounded-md text-sm '
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    {user.isLoggedIn ? (
                                        <div className="flex flex-row justify-center items-center gap-4">
                                            <p className="text-white font-titulo text-lg">{user.user.name}</p>
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-offset-2">
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
                                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <p onClick={(e) => handleOnClick(e)} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>Mi Perfil</p>
                                                )}
                                            </Menu.Item>
                                            { loclaRoute !== 'http://localhost:3000/home' ?<Menu.Item>
                                            {({ active }) => (
                                                <Link to='/home'>
                                                    <p className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>Home</p>
                                                </Link>
                                                )}
                                            </Menu.Item> : <></>}
                                            { lUser[0]?.rol === "admin" ? <Menu.Item>
                                                {({ active }) => (
                                                <Link to='/dashboard'>
                                                    <p className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>Dashboard</p>
                                                </Link>
                                                )}
                                            </Menu.Item> : <></>}
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>
                                                        <Logout />
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-mikeWhite hover:text-redApp',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    <UserProfile
                        modal={modal}
                        setModal={setModal}
                    />
                </>
            )}
        </Disclosure>
    )
}
