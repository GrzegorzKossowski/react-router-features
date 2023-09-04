import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types';

interface NavBarProps {}

const NavBar = ({ ...restProps }: NavBarProps) => {
    const navigate = useNavigate();
    const { role, setRole } = useAuth() as AuthContextType;

    function onSignOut() {
        setRole('');
        navigate('/', { replace: true });
    }

    return (
        <header className='bg-gray-800 text-white'>
            <nav className='container flex flex-row justify-between items-center mx-auto py-4 text-2xl'>
                <NavLink to={'/'} className={'py-2 px-3'}>
                    Brand
                </NavLink>
                <div className='text-slate-500'>{role}</div>

                <ul className='flex items-center space-x-2'>
                    <li>
                        <NavLink
                            to={'/'}
                            className={
                                'hover:bg-slate-700 rounded-sm py-2 px-3'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    {role ? (
                        <>
                            <li>
                                <NavLink
                                    to={'/dashboard'}
                                    className={
                                        'hover:bg-slate-700 rounded-sm py-2 px-3'
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <div
                                    className={
                                        'hover:bg-slate-700 rounded-sm py-2 px-3'
                                    }
                                    onClick={onSignOut}
                                >
                                    Sign out
                                </div>
                            </li>
                        </>
                    ) : (
                        <li>
                            <NavLink
                                to={'/auth'}
                                className={
                                    'hover:bg-slate-700 rounded-sm py-2 px-3'
                                }
                            >
                                Sign in
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
