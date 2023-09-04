import React, {  useState } from 'react';
import {
    useNavigate,
} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types';

interface AuthProps {}

const Auth = ({ ...restProps }: AuthProps) => {
    const navigate = useNavigate();
    const { setRole } = useAuth() as AuthContextType;
    const [roleSelected, setRoleSelected] = useState('user');
    const onOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoleSelected(event.target.value);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(roleSelected);
        setRole(roleSelected);
        navigate('/dashboard', { replace: true });
    };

    return (
        <div className='w-full mt-10 flex justify-center items-center'>
            <form onSubmit={submitHandler}>
                <h1 className='text-2xl font-bold mb-4'>Sign in as role</h1>
                <div className='flex items-center mb-4'>
                    <input
                        id='user'
                        type='radio'
                        value='user'
                        name='userRole'
                        className='w-4 h-4'
                        checked={roleSelected === 'user'}
                        onChange={onOptionChange}
                    />
                    <label htmlFor='user' className='ml-2'>
                        User
                    </label>
                </div>
                <div className='flex items-center mb-4'>
                    <input
                        id='editor'
                        type='radio'
                        value='editor'
                        name='userRole'
                        className='w-4 h-4'
                        checked={roleSelected === 'editor'}
                        onChange={onOptionChange}
                    />
                    <label htmlFor='editor' className='ml-2'>
                        Editor
                    </label>
                </div>
                <div className='flex items-center mb-4'>
                    <input
                        id='manager'
                        type='radio'
                        value='manager'
                        name='userRole'
                        className='w-4 h-4'
                        checked={roleSelected === 'manager'}
                        onChange={onOptionChange}
                    />
                    <label htmlFor='manager' className='ml-2'>
                        Manager
                    </label>
                </div>
                <div className='flex items-center mb-4'>
                    <input
                        id='admin'
                        type='radio'
                        value='admin'
                        name='userRole'
                        className='w-4 h-4'
                        checked={roleSelected === 'admin'}
                        onChange={onOptionChange}
                    />
                    <label htmlFor='admin' className='ml-2'>
                        Admin
                    </label>
                </div>
                <button className='border bg-slate-500 py-2 px-3 rounded-sm text-white'>
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default Auth;
