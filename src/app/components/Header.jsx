"use client";
import { useState } from 'react';
import Image from "next/image";
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Header= () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const closeSidebar = () => {
        setIsOpen(false);
    };
  return (
    <>
        <div className="hera bg-white">
            <div className="max-w-screen-xl mx-auto md:px-10 px-2">
                <div className="flex items-center w-full justify-between py-1">
                    <div className="md:w-1/6 w-full">
                        <Link
                            href="/"
                        >
                            <Image
                                src="/logo.png"
                                width={240}
                                height={70}
                                alt='hero'
                                className=''
                            />
                        </Link>
                    </div>
                    <div className='md:w-5/6'>
                        <Icon
                            icon="mingcute:menu-fill"
                            onClick={toggleSidebar}
                            className='herasvg cursor-pointer text-gray-700 md:hidden block p-2'
                            fontSize={50}
                        />
                        <div className={`font-medium text-lg text-gray-700 flex flex-col md:flex-row md:items-center md:justify-end md:space-x-8 w-full ${isOpen ? 'fixed w-96 bg-white left-0 top-0 bottom-0 overflow-y-auto p-10 space-y-4' : 'hidden md:flex'}`}>
                            <Icon
                                icon="material-symbols:close"
                                onClick={closeSidebar}
                                className='cursor-pointer absolute right-4 top-4 text-gray-700 md:hidden block p-2'
                                fontSize={50}
                            />
                            <Link
                                href="/prices"
                                className='hover:text-blue-500 '
                            >
                                Prices
                            </Link>
                            <Link
                                href="/bonus"
                                className='hover:text-blue-500 '
                            >
                                Extra bonus
                            </Link>
                            <Link
                                href="/affiliate"
                                className='hover:text-blue-500 '
                            >
                                Affiliate
                            </Link>
                            <Link
                                href="/#faqs"
                                className='hover:text-blue-500 '
                            >
                                FAQs
                            </Link>
                            <Link
                                href="/#story"
                                className='hover:text-blue-500 '
                            >
                                Story
                            </Link>
                            <Link
                                href="/dashboard"
                                className=" bg-yellow-500 text-sm font-light rounded-md py-3 px-6 flex justify-center items-center space-x-2"
                            >
                                <Icon icon="mdi:user" className='text-white' fontSize={20} />
                                <span className='text-white uppercase'>
                                    Dashboard
                                </span>
                            </Link>
                            <Link
                                href="/login"
                                className="bg-min text-sm font-light rounded-md py-3 px-6 flex justify-center items-center space-x-2"
                            >
                                <Icon icon="mdi:user" className='text-white' fontSize={20} />
                                <span className='text-white uppercase'>
                                    Login
                                </span>
                            </Link>
                            <Link
                                href="/register"
                                className=" md:bg-transparent bg-yellow-500 text-sm font-light rounded-md py-3 flex justify-center items-center space-x-2"
                            >
                                <Icon icon="mdi:user-lock" className='text-min' fontSize={20} />
                                <span className='md:text-min uppercase'>
                                    Signup
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  );
};

export default Header;