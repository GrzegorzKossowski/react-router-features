import { memo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types';

const Unauthorized = memo(function Unauthorized() {
    const { role } = useAuth() as AuthContextType;

    return (
        <div className='p-10 text-xl'>
            <h1 className='text-3xl font-bold mb-5'>Unauthorized</h1>
            <p>
                This page can't' be seen by{' '}
                <span className='font-bold'>{role}</span>
            </p>
        </div>
    );
});
export default Unauthorized;
