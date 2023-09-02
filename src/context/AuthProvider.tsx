import React, { createContext, useMemo, useState } from 'react';
import { AuthContextType } from '../types';

export const AuthContext = createContext({});

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children, ...restProps }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthContextType>();

    // https://react.dev/reference/react/useContext#optimizing-re-renders-when-passing-objects-and-functions
    // useMemo to optimise rerenders
    const contextValue = useMemo(
        () => ({
            auth,
            setAuth,
        }),
        [auth]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
