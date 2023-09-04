import {
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
