import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({
    toLogin,
}: {
    toLogin?: boolean;
}) => {
    const { role } = useAuth() as AuthContextType;
    if (role) return <Outlet />;
    return toLogin ? <Navigate to='/auth' replace /> : null;
};

export default PrivateRoute;
