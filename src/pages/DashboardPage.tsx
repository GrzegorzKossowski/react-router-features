import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
    return (
        <div className='flex items-start'>
            <SideBar />
            <Outlet />
        </div>
    );
};
