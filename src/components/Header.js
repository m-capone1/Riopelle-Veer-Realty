"use client";

import Image from 'next/image';
import More from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <>
      <header className="flex items-center w-full bg-blue-500 text-white p-4">
        <div className="h-auto w-1/3 md:w-1/3 lg:w-1/6">
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={100}
                priority
            />
        </div>
        <section className='flex flex-1 justify-end'>
            <div className="lg:flex m:text-sm lg:text-sm gap-4">
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>HOME</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>OUR PROPERTIES</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>BUY</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>SELL</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>RESOURCES</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>AREA GUIDE</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>CONTACT US</div>
                <div className="flex w-1/2 sm:w-1/5 md:w-1/3 lg:w-1/6">
                    <button onClick={toggleMenu}  className="focus:outline-none">MENU</button>
                </div>
            </div>
        </section>
      </header>
      
      <aside
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      > 
        <button
            className="absolute top-4 right-4 text-black text-xl focus:outline-none"
            onClick={toggleMenu}
        >
            ✕
        </button>
        <nav className="flex flex-col p-6 space-y-4 text-black">
            <a href="#" className="hover:text-blue-500">
                HOME
            </a>
            <a href="#" className="hover:text-blue-500">
                OUR PROPERTIES
            </a>
            <a href="#" className="hover:text-blue-500">
                BUY
            </a>
            <a href="#" className="hover:text-blue-500">
                SELL
            </a>
            <a href="#" className="hover:text-blue-500">
                RESOURCES
            </a>
            <a href="#" className="hover:text-blue-500">
                AREA GUIDE
            </a>
            <a href="#" className="hover:text-blue-500">
                CONTACT US
            </a>
            <button className='outline outline-2 py-2 rounded'>
                FIND MY DREAM HOME
            </button>
        </nav>
    </aside>
</>);
}