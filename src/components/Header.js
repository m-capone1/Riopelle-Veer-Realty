"use client";

import Image from 'next/image';
import LogoBlack from 'next/image';

import { useEffect, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuContents = ['HOME', 'OUR PROPERTIES', 'BUY', 'SELL', 'RESOURCES', 'AREA GUIDE', 'CONTACT US']

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if(window.scrollY > 150) {
            setIsScrolled(true);
        }

        if(window.scrollY < 150) {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <>
            <header className={`flex fixed top-0 left-0 w-full p-4 z-20 transition-all duration-1000 ease-in-out ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}>
                <div className="h-auto w-1/3 md:w-1/3 lg:w-1/5">
                    {isScrolled ? 
                        <LogoBlack 
                            src="/images/logo-black.png"
                            alt="Logo"
                            width={200}
                            height={100}
                            priority
                        /> :
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={200}
                            height={100}
                            priority
                        />
                    }
                </div>
                <section className='flex flex-1 justify-end items-center'>
                    <div className="lg:flex m:text-sm lg:text-sm gap-4">
                        {menuContents.map((item, index) => (
                            <div key={index} className='hidden lg:block text-nowrap hover:text-slate-400 cursor-pointer hover:underline'>{item}</div>
                        ))}
                        <div className="flex w-1/2 sm:w-1/5 md:w-1/3 lg:w-1/6">
                            <button onClick={toggleMenu} className="focus:outline-none bg-transparent">
                                MENU
                            </button>
                        </div>
                    </div>
                </section>
            </header>

            <aside
                className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-30`} // Ensure this z-index is higher than the header
            > 
                <button
                    className="absolute top-4 right-4 text-black text-xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    ✕
                </button>
                <nav className="flex flex-col p-6 space-y-4 text-black">
                    {menuContents.map((item, index)=>(
                        <a href="#" key={index} className="hover:text-blue-500">{item}</a>
                    ))}
                    <button className='font-bold outline outline-2 py-2 rounded hover:bg-black hover:text-white'>
                        FIND MY DREAM HOME
                    </button>
                </nav>
            </aside>
        </>
    );
}