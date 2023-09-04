import {
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    redirect,
} from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/HomePage';
import Auth from '../pages/AuthPage';
import PrivateRoute from '../components/PrivateRoute';
import { User } from '../components/User';
import { DashboardLayout } from '../pages/DashboardPage';
import RoleProtectedRoute from '../components/RoleProtectedRoute';
import { Editor } from '../components/Editor';
import { Admin } from '../components/Admin';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />} errorElement={<>Error root</>}>
            <Route index={true} element={<Home />} />
            <Route
                path='auth'
                element={<Auth />}
                action={async ({ params, request }) => {
                    const formData = await request.formData();
                    const userRole = formData.get('userRole');
                    if (!userRole)
                        return { error: true, message: 'Select role' };
                    return redirect('/dashboard');
                }}
                errorElement={<>Error...</>}
            />
            <Route
                path=''
                element={<PrivateRoute toLogin />}
                errorElement={<>Error...</>}
            >
                <Route
                    path='dashboard'
                    element={<DashboardLayout />}
                    errorElement={<>Error...</>}
                >
                    <Route index={true} element={<>Index</>} />
                    <Route
                        path='user'
                        element={
                            <RoleProtectedRoute roles={['user']}>
                                <User />
                            </RoleProtectedRoute>
                        }
                        errorElement={<>Error...</>}
                    />
                    <Route
                        path='editor'
                        element={
                            <RoleProtectedRoute roles={['editor']}>
                                <Editor />
                            </RoleProtectedRoute>
                        }
                        errorElement={<>Error...</>}
                    />
                    <Route
                        path='manager'
                        element={
                            <RoleProtectedRoute roles={['manager']}>
                                <Editor />
                            </RoleProtectedRoute>
                        }
                        errorElement={<>Error...</>}
                    />
                    <Route
                        path='admin'
                        element={
                            <RoleProtectedRoute roles={['admin']}>
                                <Admin />
                            </RoleProtectedRoute>
                        }
                        errorElement={<>Error...</>}
                    />
                    <Route path='*' element={<>404 not found</>} />
                </Route>
                <Route path='*' element={<>404 not found</>} />
            </Route>
        </Route>
    )
);

// createBrowserRouter([
//     {
//         path: '/',
//         element: <RootLayout />,
//         errorElement: <>Error</>,
//         children: [
//             // public routes
//             { index: true, element: <Home />, errorElement: <>Error</> },
//             {
//                 path: 'auth',
//                 element: <Auth />,
//                 action: async ({ params, request }) => {
//                     const formData = await request.formData();
//                     const userRole = formData.get('userRole');
//                     if (!userRole)
//                         return { error: true, message: 'Select role' };

//                     return redirect('/dashboard');
//                 },
//             },
//             {
//                 path: 'dashboard',
//                 element: (
//                     <PrivateRoute toLogin>
//                         <Outlet />
//                     </PrivateRoute>
//                 ),
//                 children: [
//                     {
//                         path: '',
//                         lazy: async () => {
//                             let { DashboardLayout } = await import(
//                                 '../layouts/DashboardLayout'
//                             );
//                             return { Component: DashboardLayout };
//                         },
//                         errorElement: <>Error...</>,
//                         children: [
//                             { index: true, element: <>Index</> },
//                             {
//                                 path: 'user',
//                                 lazy: async () => {
//                                     let { User } = await import(
//                                         '../pages/User'
//                                     );
//                                     return { Component: User };
//                                 },
//                                 errorElement: <>Error...</>,
//                             },
//                         ],
//                     },
//                 ],
//                 // children: [
//                 //     {
//                 //         path: '',
//                 //         lazy: async () => {
//                 //             let { DashboardLayout } = await import(
//                 //                 '../layouts/DashboardLayout'
//                 //             );
//                 //             return { Component: DashboardLayout };
//                 //         },
//                 //         errorElement: <>Error...</>,
//                 //         children: [
//                 //             {
//                 //                 path: 'user',
//                 //                 lazy: async () => {
//                 //                     let { User } = await import(
//                 //                         '../pages/User'
//                 //                     );
//                 //                     return { Component: User };
//                 //                 },
//                 //                 errorElement: <>Error...</>,
//                 //             },
//                 //             {
//                 //                 path: 'editor',
//                 //                 lazy: async () => {
//                 //                     let { Editor } = await import(
//                 //                         '../pages/Editor'
//                 //                     );
//                 //                     return { Component: Editor };
//                 //                 },
//                 //                 element: (
//                 //                     <RoleProtectedRoute roles={['editor']}>
//                 //                         <Outlet />
//                 //                     </RoleProtectedRoute>
//                 //                 ),
//                 //                 errorElement: <>Error...</>,
//                 //             },
//                 //             {
//                 //                 path: 'manager',
//                 //                 lazy: async () => {
//                 //                     let { Manager } = await import(
//                 //                         '../pages/Manager'
//                 //                     );
//                 //                     return { Component: Manager };
//                 //                 },
//                 //                 element: (
//                 //                     <RoleProtectedRoute roles={['manager']}>
//                 //                         <Outlet />
//                 //                     </RoleProtectedRoute>
//                 //                 ),
//                 //                 errorElement: <>Error...</>,
//                 //             },
//                 //             {
//                 //                 path: 'admin',
//                 //                 lazy: async () => {
//                 //                     let { Admin } = await import(
//                 //                         '../pages/Admin'
//                 //                     );
//                 //                     return { Component: Admin };
//                 //                 },
//                 //                 errorElement: <>Error...</>,
//                 //             },
//                 //             { index: true, element: <>Index</> },
//                 //         ],
//                 //     },
//                 // ],
//             },
//         ],
//     },
// ]);
