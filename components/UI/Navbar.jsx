'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link href="/" className="text-blue-600 text-2xl font-bold">
          <div className="shrink-0">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="size-8"
            />
          </div>
          {/* <Image
            className="dark:invert inline mx-2"
            src="/assets/images/favicon.png"
            alt="Next.js logo"
            width={40}
            height={12}
            priority
          /> */}
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {/* <Link href="/" className="text-blue-600 px-1">
            Home
          </Link> */}
          {user ? (
            <>
              <Link href="/dashboard" className="text-blue-600 px-1">
                Dashboard
              </Link>
              <Link className="text-blue-600 px-1" href="/profile">{user.username}</Link>
              <span className="cursor-pointer text-blue-600 px-1  border border-blue-600 " onClick={logout}>Logout</span>
            </>
          ) : (
            <>
              <Link href="/login" className="text-blue-600 px-1">
                Sign in
              </Link>
              <Link href="/register" className="text-blue-600 px-2 rounded-sm border border-blue-600">
                Join for Free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;