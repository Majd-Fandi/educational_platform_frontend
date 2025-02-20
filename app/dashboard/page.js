'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className='w-full text-center my-10'>

            <p className='text-2xl '>Welcome, {user ? user.username : 'Guest'}</p>
       
            {!user && <Link className="items-center gap-2 text-blue-500 hover:text-blue-600 underline underline-offset-4" href="/register">Join Us For Free</Link>}
        </div>
    );
};

export default Dashboard;



// 'use client';
// import React, { useState } from 'react';

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//   'https://ui-avatars.com/api/?name=Majd+Z&size=200',
// };

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ];

// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Example() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

//   return (
//     <>
//       <div className="min-h-full">
//         <nav className="bg-gray-800">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 items-center justify-between">
//               <div className="flex items-center">
//                 <div className="shrink-0">
//                   <img
//                     alt="Your Company"
//                     src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
//                     className="size-8"
//                   />
//                 </div>
//                 <div className="hidden md:block">
//                   <div className="ml-10 flex items-baseline space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         aria-current={item.current ? 'page' : undefined}
//                         className={classNames(
//                           item.current
//                             ? 'bg-gray-900 text-white'
//                             : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium',
//                         )}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-4 flex items-center md:ml-6">
//                   <button
//                     type="button"
//                     className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                   >
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">View notifications</span>
//                     {/* Bell Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
//                       />
//                     </svg>
//                   </button>

//                   {/* Profile Dropdown */}
//                   <div className="relative ml-3">
//                     <div>
//                       <button
//                         onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
//                         className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                       >
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">Open user menu</span>
//                         <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
//                       </button>
//                     </div>
//                     {isProfileMenuOpen && (
//                       <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         {userNavigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="-mr-2 flex md:hidden">
//                 {/* Mobile Menu Button */}
//                 <button
//                   onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                   type="button"
//                   className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {/* Hamburger Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="block size-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden">
//               <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'block rounded-md px-3 py-2 text-base font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div className="border-t border-gray-700 pt-4 pb-3">
//                 <div className="flex items-center px-5">
//                   <div className="shrink-0">
//                     <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
//                   </div>
//                   <div className="ml-3">
//                     <div className="text-base font-medium text-white">{user.name}</div>
//                     <div className="text-sm font-medium text-gray-400">{user.email}</div>
//                   </div>
//                   <button
//                     type="button"
//                     className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                   >
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">View notifications</span>
//                     {/* Bell Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="mt-3 space-y-1 px-2">
//                   {userNavigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </nav>

//         <header className="bg-white shadow-sm">
//           <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
//           </div>
//         </header>
//         <main>
//           <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
//         </main>
//       </div>
//     </>
//   );
// }