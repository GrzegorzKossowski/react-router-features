import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <NavBar />
            <Outlet />
            <ToastContainer position='bottom-right' newestOnTop theme='light' />
        </>
    );
}

export default App;
