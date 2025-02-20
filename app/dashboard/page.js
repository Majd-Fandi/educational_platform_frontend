'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className='w-full text-center my-10'>

            <p className='text-2xl '>Welcome, {user ? user.username : 'Guest'}</p>
            {/* {user &&
                <button onClick={logout}>Logout</button>
            } */}
            {!user && <Link className="items-center gap-2 text-blue-500 hover:text-blue-600 underline underline-offset-4" href="/register">Join Us For Free</Link>}
        </div>
    );
};

export default Dashboard;