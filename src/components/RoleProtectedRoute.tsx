import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types';
import Unauthorized from './Unauthorized';

const checkPermissions = (roles: string[], role: string) => {
    return roles.includes(role);
};

const RoleProtectedRoute = ({
    children,
    roles,
}: {
    children: React.ReactNode;
    roles: string[];
}) => {
    const { role } = useAuth() as AuthContextType;
    const isPermitted = checkPermissions(roles, role);

    if (isPermitted) return <>{children}</>;
    return <Unauthorized />;
};

export default RoleProtectedRoute;
