import React, { memo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types';

const CanBeSeen = memo(() => {
    const { role } = useAuth() as AuthContextType;
    return (
        <div className='p-10 text-xl'>
            This page can be only seen by <span className='font-bold'>{role}</span>
        </div>
    );
})

export default CanBeSeen;
