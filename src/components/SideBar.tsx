import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface SideBarProps {}

const SideBar = ({ ...restProps }: SideBarProps) => {
    return (
        <div className='relative'>
            <div className='flex flex-col sm:flex-row sm:justify-around'>
                <div className='h-screen w-72'>
                    <nav className='mt-10 px-6 '>
                        <NavLink
                            className={({ isActive, isPending }) => {
                                return isPending
                                    ? 'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg '
                                    : isActive
                                    ? 'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg '
                                    : 'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ';
                            }}
                            to='/dashboard/user'
                        >
                            <span className='mx-4 text-lg font-normal'>
                                User
                            </span>
                            <span className='flex-grow text-right'></span>
                        </NavLink>
                        <Link
                            className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg '
                            to='/dashboard/editor'
                        >
                            <span className='mx-4 text-lg font-normal'>
                                Editor
                            </span>
                            <span className='flex-grow text-right'></span>
                        </Link>
                        <Link
                            className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg '
                            to='/dashboard/manager'
                        >
                            <span className='mx-4 text-lg font-normal'>
                                Manager
                            </span>
                            <span className='flex-grow text-right'></span>
                        </Link>
                        <Link
                            className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg '
                            to='/dashboard/admin'
                        >
                            <span className='mx-4 text-lg font-normal'>
                                Admin
                            </span>
                            <span className='flex-grow text-right'></span>
                        </Link>
                        <Link
                            className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg '
                            to='/dashboard/error'
                        >
                            <span className='mx-4 text-lg font-normal'>
                                Some error
                            </span>
                            <span className='flex-grow text-right'></span>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
