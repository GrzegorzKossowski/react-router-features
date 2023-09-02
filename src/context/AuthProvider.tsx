import React, { SetStateAction, createContext, useMemo, useState } from 'react';
import { AuthContextType, AuthType } from '../types';

export const AuthContext = createContext({});

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children, ...restProps }: AuthProviderProps) => {
    const [role, setRole] = useState('');

    // https://react.dev/reference/react/useContext#optimizing-re-renders-when-passing-objects-and-functions
    // useMemo to optimise rerenders
    const contextValue = useMemo(
        () => ({
            role,
            setRole,
        }),
        [role]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
