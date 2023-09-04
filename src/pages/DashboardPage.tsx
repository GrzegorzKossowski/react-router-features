import React from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

export const DashboardLayout = () => {
    return (
        <div className='flex items-start'>
            <SideBar />
            <Outlet />
        </div>
    );
};
