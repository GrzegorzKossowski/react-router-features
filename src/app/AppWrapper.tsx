import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import AuthProvider from '../context/AuthProvider';

const AppWrapper = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default AppWrapper;
