import { createBrowserRouter, redirect } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import { useAuth } from '../hooks/useAuth';
import { DashboardLayout } from '../layouts/DashboardLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <>Error</>,
        children: [
            // public routes
            { path: '', element: <Home />, errorElement: <>Error</> },
            {
                path: 'auth',
                element: <Auth />,
                action: async ({ params, request }) => {
                    const formData = await request.formData();
                    const userRole = formData.get('userRole');
                    if (!userRole)
                        return { error: true, message: 'Select role' };

                    return redirect('/');
                },
            },
            {
                path: 'dashboard',
                lazy: async () => {
                    let { DashboardLayout } = await import(
                        '../layouts/DashboardLayout'
                    );
                    return { Component: DashboardLayout };
                },
                errorElement: <>Error...</>,
            },
        ],
    },
]);
