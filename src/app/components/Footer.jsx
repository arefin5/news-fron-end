"use client";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import FooterTabs from './FooterTabs';
const Footer = () => {

  return (
    <>
        <div className="relative bg-[#1b1b3b] overflow-hidden mt-20">
            <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -top-2/4 -left-1/4 w-[800px] h-[800px] bg-[url('/bg/blur-n.png')]"></div>
            <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -bottom-2/4 -right-1/4 w-[800px] h-[800px] bg-[url('/bg/blur-o.png')]"></div>
            <div className="max-w-screen-xl relative mx-auto md:px-10 px-2">
                <FooterTabs
                    items={[
                    {
                        tab: 'About us',
                        col: 'w-1/3',
                        sub: (
                            <div className="flex flex-col md:mr-6">
                                <Image
                                    src="/logo.png"
                                    width={240}
                                    height={70}
                                    alt='hero'
                                    className='mb-4'
                                />
                                <p className='text-sm mb-6'>
                                Thanks to the use of artificial intelligence and many templates for content creation, you can easily and quickly create texts for your blog, social networks or labels for your products.
And all this without unnecessary stress and effort!
                                </p>
                            </div>
                        ),
                    },
                    {
                        tab: 'Information',
                        col: 'w-1/6',
                        sub: (
                            <div className="flex flex-col space-y-3">
                                <Link href="/prices" className="leading-6 hover:underline">
                                Prices
                                </Link>
                                <Link href="/#faqs" className="leading-6 hover:underline">
                                FAQs
                                </Link>
                                <Link href="/" className="leading-6 hover:underline">
                                Blog
                                </Link>
                                <Link href="/" className="leading-6 hover:underline">
                                Nápověda
                                </Link>
                            </div>
                        ),
                    },
                    {
                        tab: 'Site Pages',
                        col: 'w-1/6',
                        sub: (
                            <div className="flex flex-col space-y-3">
                                <Link href="/" className="leading-6 hover:underline">
                                What is AI?
                                </Link>
                                <Link href="/" className="leading-6 hover:underline">
                                AI text creation
                                </Link>
                                <Link href="/" className="leading-6 hover:underline">
                                AI image generator
                                </Link>
                                <Link href="/contact-us" className="leading-6 hover:underline">
                                Contact Us
                                </Link>
                            </div>
                        ),
                    },
                    {
                        tab: 'Company',
                        col: 'w-1/6',
                        sub: (
                            <div className="flex flex-col space-y-3">
                                <Link href="/" className="leading-6 hover:underline">
                                Terms & Conditions
                                </Link>
                                <Link href="/" className="leading-6 hover:underline">
                                Privacy Policy
                                </Link>
                                <Link href="/login" className="leading-6 hover:underline">
                                Login
                                </Link>
                                <Link href="/register" className="leading-6 hover:underline">
                                Register
                                </Link>
                            </div>
                        ),
                    },
                    {
                        tab: 'Social Media',
                        col: 'w-1/6',
                        sub: (
                            <div className="flex flex-col">
                                <p className='text-sm'>
                                Follow up on social media to find out the latest updates.
                                </p>
                                <div className='flex items-center mt-4 space-x-2 text-blue-500'>
                                    <Link
                                        href="/"
                                    >
                                        <Icon
                                            icon="ic:baseline-tiktok"
                                            className='mr-2'
                                            fontSize={25}
                                        />
                                    </Link>
                                    <Link
                                        href="/"
                                    >
                                        <Icon
                                            icon="mdi:youtube"
                                            className='mr-2'
                                            fontSize={25}
                                        />
                                    </Link>
                                    <Link
                                        href="/"
                                    >
                                        <Icon
                                            icon="mdi:instagram"
                                            className='mr-2'
                                            fontSize={25}
                                        />
                                    </Link>
                                    <Link
                                        href="/"
                                    >
                                        <Icon
                                            icon="ic:baseline-facebook"
                                            className='mr-2'
                                            fontSize={25}
                                        />
                                    </Link>
                                </div>

                                <h1 className="font-bold text-lg mt-6">
                                    Get Started Today
                                </h1>
                                <Link
                                    href="/"
                                    className="bg-min mt-4 text-white text-lg w-full md:w-auto font-light rounded-md py-1 px-6 flex justify-center items-center space-x-2"
                                >
                                    Sign Up Now
                                </Link>
                            </div>
                        ),
                    },
                    ]}
                />
                <div className="flex md:flex-row flex-col text-white py-6">
                    <div className="w-full md:w-6/12 flex flex-col space-y-2">
                        <p className="text-lg">
                            Copyright © 2024 <Link className='text-blue-500' href="/">Textory</Link> All rights reserved
                        </p>
                        <p className="text-xs">
                            Provozovatel: Klvaň corps s.r.o., IČ: 09350845, Korunní 2569/108, Vinohrady (Praha 10), 101 00 Praha
                        </p>
                    </div>
                    <div className="w-full md:w-6/12 flex items-center md:justify-end gap-4 text-blue-500">
                        <Link href="/" className="leading-6 hover:underline">
                        Terms & Conditions
                        </Link>
                        <Link href="/" className="leading-6 hover:underline">
                        Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  );
};

export default Footer;