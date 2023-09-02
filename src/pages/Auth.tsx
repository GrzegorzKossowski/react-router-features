import React from 'react';
import { Form, useActionData, useLocation, useParams } from 'react-router-dom';

interface AuthProps {}
interface FormData {
    userRole?: string;
    error?: boolean;
    message?: string;
}

const Auth = ({ ...restProps }: AuthProps) => {
    const data = useActionData() as FormData;

    return (
        <div className='w-full mt-10 flex justify-center items-center'>
            <Form method='post' action='/auth'>
                <h1 className='text-2xl font-bold mb-4'>Sign in as role</h1>
                {data && data?.error && (
                    <div className='text-red-600 mb-2'>{data?.message}</div>
                )}

                <div className='flex items-center mb-4'>
                    <input
                        id='user'
                        type='radio'
                        value='user'
                        name='userRole'
                        className='w-4 h-4'
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
                    />
                    <label htmlFor='admin' className='ml-2'>
                        Admin
                    </label>
                </div>
                <button className='border bg-slate-500 py-2 px-3 rounded-sm text-white'>
                    Login
                </button>
            </Form>
        </div>
    );
};

export default Auth;
