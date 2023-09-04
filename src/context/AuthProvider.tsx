import React, {  createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({});

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children, ...restProps }: AuthProviderProps) => {
    const [role, setRole] = useState('');

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
